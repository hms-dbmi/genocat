function Islandviewer(aid, ext_id, genomesize, genomename, trackdata) {
    this.aid = aid;
    this.ext_id = ext_id;
    this.genomesize = genomesize;
    this.genomename = genomename;
    this.trackdata = trackdata;
    console.log("Called constructor " + this.ext_id + ' ' + genomename);
    this.gene_dialog = $("#gene_dialog");

    this.startBP = 0;
    this.endBP = genomesize;

	this.linearplot = null;
	this.comparisoncontainer = null;
}

Islandviewer.prototype.changeGeneDialog = function(selector){
    this.gene_dialog = selector;
};

Islandviewer.prototype.addComparison  = function(comparisonfunction){
    this.comparisoncontainer = comparisonfunction;

};

Islandviewer.prototype.addCircularPlot = function(layout) {
    this.circularplot = new circularTrack(layout, this.trackdata);

    $(layout.container).addClass('plot_' + this.ext_id.replace('.', ''));

    return this.circularplot;
};

Islandviewer.prototype.addLinearPlot = function(layout) {
    this.linearplot = new genomeTrack(layout, this.trackdata);

	try {
		if (this.comparisoncontainer != undefined) {
			this.linearplot.setComparisonContainer(this.comparisoncontainer);
		}
	} catch (e){

	}

	console.log(this.linearplot);
    return this.linearplot;
};

Islandviewer.prototype.setComparisonContainer = function(comparisonfunction){
	this.comparisoncontainer = comparisonfunction;
	this.linearplot.setComparisonContainer(this.comparisoncontainer)
}

Islandviewer.prototype.onclick = function(trackname, d, plotid, skip_half_range) {

    if(plotid == 'circularchartlinear' || plotid == 'secondchartlinear') {

      if(trackname == 'circularVirulence') {
		var url = false;

		if(d.name == "VFDB") {
		  url = 'http://www.mgc.ac.cn/cgi-bin/VFs/vfs.cgi?VFID=' + d.ext_id;

		} else if(d.name == 'PATRIC_VF') {
		  url = 'http://patricbrc.org/portal/portal/patric/Feature?cType=feature&cId=' + d.ext_id;
		} else if(d.name == 'Victors') {
		  url = 'http://www.phidias.us/victors/gene_detail.php?c_mc_victor_id=' + d.ext_id;
		} else if(d.name == 'CARD') {
			if(d.ext_id.length == 7) {
				url = 'https://card.mcmaster.ca/aro/' + d.ext_id
			} else if(d.ext_id.length == 5) {
				url = 'https://card.mcmaster.ca/ontology/' + d.ext_id
			}
        } else if(d.name == 'RGI') {
            if(d.ext_id.length == 7) {
                url = 'https://card.mcmaster.ca/aro/' + d.ext_id
            } else if(d.ext_id.length == 5) {
                url = 'https://card.mcmaster.ca/ontology/' + d.ext_id
            }
        }

		// Open the link if we've found something
		if(url) {
		  window.open(url);
		}
      } else if(trackname == 'circularGenes') {
        var url = 'http://www.ncbi.nlm.nih.gov/protein/' + d.accnum;

        window.open(url);
	  } else if((trackname == 'circularIslandpick') || (trackname == 'circularDimob') || (trackname == 'circularSigi') || (trackname == 'circularIslander')) {

//        var view_start = Math.max(0, (d.start-500));
//	var view_end = Math.min((d.end+500), this.genomesize);
		$('.method_row').each(function() {
			$(this).removeClass('highlightrow')
		});
		$('html, body').animate({ scrollTop: $('#table_' + d.id).offset().top }, 'slow');
		$("#table_" + d.id).addClass('highlightrow');

//	var url = 'http://www.ncbi.nlm.nih.gov/projects/sviewer/?id=' + this.ext_id + '&v=' + view_start + '..' + view_end + '&m=' + d.start + ',' + d.end;
//	window.open(url);
      }
    } else if(plotid == 'circularchart') {

      if((trackname == 'circularIslandpick') || (trackname == 'circularDimob') || (trackname == 'circularSigi')  || (trackname == 'circularIslander') || (trackname == 'circularIntegrated')) {
        clearTimeout(this.popup_timer);

		if(typeof skip_half_range !== 'undefined') {
		  var half_range = 0;
		  var do_half_range = false;
		} else {
		  var half_range = (d.end - d.start)/2;
		  var do_half_range = true;
		}

			//var half_range = (d.end - d.start)/2;
        this.linearplot.update(Math.max(0,(d.start-half_range)), Math.min(this.genomesize, (d.end+half_range)));

        this.circularplot.moveBrushbyBP(Math.max(0,(d.start-half_range)), 
                                                       Math.min(this.genomesize, (d.end+half_range)));

        this.circularplot.showBrush();
  
        this.showHoverGenes(d, do_half_range);

      }
    }
}

Islandviewer.prototype.ondblclick = function(plotid, bp) {

    if(plotid == 'circularchart') {
	var halfBP = (this.circularplot.brushEndBP - this.circularplot.brushStartBP) /2;

	var newStart = Math.max(0, (bp - halfBP));
	var newEnd = Math.min(this.genomesize, (bp + halfBP));

        this.linearplot.update(newStart, newEnd);

        this.circularplot.moveBrushbyBP(newStart, 
                                        newEnd);

        this.circularplot.showBrush();
  
        this.showHoverGenes({start: newStart, end: newEnd}, false);
    }
}

Islandviewer.prototype.focus = function(startbp, endbp, params) {
    var newStart = Math.max(0, (startbp));
    var newEnd = Math.min(this.genomesize, (endbp));

    this.startBP = newStart;
    this.endBP = newEnd;

    // Make out d parameter manually
    this.showHoverGenes({start: newStart, end: newEnd}, false, params);

    this.linearplot.update(newStart, newEnd);

    this.circularplot.moveBrushbyBP(newStart, 
                                        newEnd);

    this.circularplot.showBrush();
  
}

Islandviewer.prototype.mouseover = function(trackname, d, plotid) {

    if(plotid == 'circularchartlinear' || plotid == 'secondchartlinear' ) {
      if(trackname == 'circularGenes') {
  	$('#gene_overlay_' + d.id).addClass("highlight_row");
      } else if((trackname == 'circularIslandpick') || (trackname == 'circularDimob') || (trackname == 'circularSigi') || (trackname == 'circularIslander')) {
	$('.islandset_' + d.id).addClass("highlight_row");
      } else if(trackname == 'circularVirulence') {
//        $('.gene_' + d.gene.replace('.', '')).addClass("highlight_row");
        $('#gene_overlay_' + d.id).addClass("highlight_row");
      }

    } else if (plotid == 'circularchart') {
      if((trackname == 'circularIslandpick') || (trackname == 'circularDimob') || (trackname == 'circularSigi') || (trackname == 'circularIslander') || (trackname == 'circularIntegrated')) {

        this.popup_d = d;
//        this.popup_timer = setTimeout(function() {this.showHoverGenes(popup_d);}, 1000, [d, this]);
        this.popup_timer = setTimeout(this.showHoverGenes.bind(this), 1000, this.popup_d, false);
      }
    }
}

Islandviewer.prototype.mouseout = function(trackname, d, plotid) {
//    console.log("mouseout callback " + d);
//    console.log(trackname);
//    console.log(d);
//    console.log(plotid);

    if(plotid == 'circularchartlinear' || plotid == 'secondchartlinear') {
      if(trackname == 'circularGenes') {
  		$('#gene_overlay_' + d.id).removeClass("highlight_row");
      } else if((trackname == 'circularIslandpick') || (trackname == 'circularDimob') || (trackname == 'circularSigi') || (trackname == 'circularIslander')) {
		$('.islandset_' + d.id).removeClass("highlight_row");
      } else if(trackname == 'circularVirulence') {
//        $('.gene_' + d.gene.replace('.', '')).removeClass("highlight_row");
        $('#gene_overlay_' + d.id).removeClass("highlight_row");
      }

    } else if (plotid == 'circularchart') {
      if((trackname == 'circularIslandpick') || (trackname == 'circularDimob') || (trackname == 'circularSigi') || (trackname == 'circularIslander') || (trackname == 'circularIntegrated')) {
        clearTimeout(this.popup_timer);
      }

    }
}

// Called by the brush update functions in the visualization
// objects (linear, circular)

    Islandviewer.prototype.update = function(startBP, endBP, params) {

}

Islandviewer.prototype.update_finished = function(startBP, endBP, params) {
    url = '../../json/genes/?aid=' + this.aid + '&ext_id=' + this.ext_id + '&start=' + parseInt(startBP) + '&end=' + parseInt(endBP);
    self = this;

    this.startBP = startBP;
    this.endBP = endBP;
//        console.log(url);

    $.ajax({
	    url: url,
	    type: "get",
	    success: function(data) {
		var html = "<table class=\"genespopup\"><tr><th>Prediction Method</th><th>Gene Name</th><th>Accnum</th><th>Product</th></tr>";
		genes = data.genes
		for(var gene in genes) {
		    if(genes.hasOwnProperty(gene)) {
			row = genes[gene];
			html += "<tr id=\"gene_overlay_" + row.geneid + "\" ";
			html += "class=\"";
			if(row.gi && row.gi !== 0) {
			    gis = row.gi.split(',');
			    for(var i = 0; i < gis.length; i++) {
				html += "islandset_" + gis[i] + ' ';
			    }
			}
			html += 'gene_' + row.name.replace('.', '') + ' ';
			html += "\"><td>";
//			console.log(row);
			if(row.method && row.method !== 0) {
			    methods = row.method.split(',');
			    if($.inArray('Islandpick', methods) >= 0) {
				html += "<span class=\"islandbox greenislandbox\">&nbsp;&nbsp;</span>";
			    }
			    if($.inArray('Sigi', methods) >= 0) {
				html += "<span class=\"islandbox darkorangeislandbox\">&nbsp;&nbsp;</span>";
			    }
			    if($.inArray('Dimob', methods) >= 0) {
				html += "<span class=\"islandbox royalblueislandbox\">&nbsp;&nbsp;</span>";
			    }
				if($.inArray('Islander', methods) >= 0) {
					html += "<span class=\"islandbox turquoiseislandbox\">&nbsp;&nbsp;</span>";
				}
			}
			if(row.virulence && row.virulence !== 0) {
			    virulence = row.virulence.split(',');
			    if($.inArray('ARDB', virulence) >= 0) {
				html += "<span class=\"virulencecircle virulencecircle_ARDB\">&nbsp;&nbsp;&nbsp;</span>";
			    }
			    if($.inArray('CARD', virulence) >= 0) {
				html += "<span class=\"virulencecircle virulencecircle_CARD\">&nbsp;&nbsp;&nbsp;</span>";
			    }
			    if($.inArray('VFDB', virulence) >= 0) {
				html += "<span class=\"virulencecircle virulencecircle_VFDB\">&nbsp;&nbsp;&nbsp;</span>";
			    }
			    if($.inArray('PAG', virulence) >= 0) {
				html += "<span class=\"virulencecircle virulencecircle_PAG\">&nbsp;</span>";
			    }
			    if($.inArray('RGI', virulence) >= 0) {
				html += "<span class=\"virulencecircle virulencecircle_RGI\">&nbsp;</span>";
			    }
			    if($.inArray('Victors', virulence) >= 0) {
				html += "<span class=\"virulencecircle virulencecircle_Victors\">&nbsp;&nbsp;&nbsp;</span>";
			    }
			    if($.inArray('PATRIC_VF', virulence) >= 0) {
				html += "<span class=\"virulencecircle virulencecircle_PATRIC_VF\">&nbsp;&nbsp;&nbsp;</span>";
			    }
			    if($.inArray('BLAST', virulence) >= 0) {
				html += "<span class=\"virulencecircle virulencecircle_BLAST\">&nbsp;&nbsp;&nbsp;</span>";
			    }
			}

			var gene_name = row.locus;
			if(row.gene) {
			    gene_name = row.gene;
			}
			html += "&nbsp;</td><td>" + gene_name + "</td><td><a href=\"http://www.ncbi.nlm.nih.gov/protein/" + row.name + "\" target=\"_blank\">" + row.name + "</a></td><td>" + row.product + "</td></tr>";
		    }
		}
		html += "</table>";
		self.gene_dialog.html(html);
		var title = $('<span>').html(self.genomename).text();

                self.gene_dialog.dialog('option', 'title', 'Genes (' + title + ')');
		// Highlight the row(s) in the table if we've been asked to
		if('undefined' !== typeof params && 'undefined' !== typeof params['highlight_sel']) {
		    highlight_sel = params['highlight_sel'];
		    self.gene_dialog.scrollTop(self.gene_dialog.scrollTop() + $(highlight_sel).position().top
						- self.gene_dialog.height()/2 + $(highlight_sel).height()/2);
		    $(highlight_sel).highlight();
		}

		// Slightly hackish, if there are two plots, border outline this circular plot
		if('undefined' !== typeof window.secondislandviewerObj) {
		    $('.circularcontainer').removeClass('outline_plot');
		    if(self.gene_dialog.dialog( "isOpen" )) {
			$('.plot_' + self.ext_id.replace('.','')).addClass('outline_plot');
		    }
		}

	    }
	});

	// A hack but close the Save View dialog if it's open
	close_url_dialog();
}

Islandviewer.prototype.showHoverGenes = function(d, do_half_range, params) {

  var half_range = (typeof do_half_range !== 'undefined' && do_half_range)  ? (d.end - d.start)/2 : 0;

  this.gene_dialog.dialog("open");

  this.update_finished(Math.max(0,(d.start-half_range)), Math.min(this.genomesize, (d.end+half_range)), params);
}

Islandviewer.prototype.serialize = function() {
    var features = {s: this.startBP, e: this.endBP, id: this.aid };

    if('undefined' !== typeof this.circularplot) {
	features['c'] = Math.max(this.circularplot.layout.h, this.circularplot.layout.w);
	//	console.log(this.circularplot.layout.radius);

	var container = $(this.circularplot.layout.container);

	var position = container.css(['left', 'top']);
	features['x'] = position.left;
	features['y'] = position.top;
	
    }

    if('undefined' !== typeof this.linearplot) {
	features['l'] = this.linearplot.layout.width;
    }

    return features;
}

Islandviewer.prototype.reload = function(features) {
    if('undefined' !== typeof features['s'] && 'undefined' !== typeof features['e']) {
	this.focus(features['s'], features['e']);

	if('undefined' !== typeof features['d'] && ! features['d'] ) {
	    this.gene_dialog.dialog( 'close' );
	}
    }

    if('undefined' !== typeof features['c'] && 'undefined' !== typeof this.circularplot) {
	this.circularplot.resize(features['c']);

	var container = $(this.circularplot.layout.container);
	container.height(this.circularplot.layout.h + this.circularplot.layout.ExtraWidthY + 5);
	container.width(this.circularplot.layout.w + this.circularplot.layout.ExtraWidthX);
//	container.css({width: this.circularplot.layout.w, height: this.circularplot.layout.h});

	if('undefined' !== typeof features['x']) {
	    container.css({left: features['x']});
	}

	if('undefined' !== typeof features['y']) {
	    container.css({top: features['y']});
	}
    }

    if('undefined' !== typeof features['l'] && 'undefined' !== typeof this.linearplot) {
	this.linearplot.resize(features['l']);
    }    

}

Islandviewer.prototype.scrollandOpen = function(d) {
	// We're going to simulate a mouse click in the circulate track to make this work

	var self = this;
	$("html, body").animate({ scrollTop: 0 }, 'slow').promise().done( function() {
	  self.onclick('circularIntegrated', d, 'circularchart', true);
	});
}

Islandviewer.prototype.findMethods = function() {

    if('undefined' === typeof this.types) {
      var types = {};

      // Loop through the data and find all methods
      for(var i=0; i < this.trackdata.length; i++) {
		  if(this.trackdata[i].trackName == "circularIslandpick" ||
			this.trackdata[i].trackName == "circularSigi" ||
			this.trackdata[i].trackName == "circularDimob" ||
			this.trackdata[i].trackName == "circularIslander") {

           if(this.trackdata[i].items.length > 0) {
             types[ this.trackdata[i].trackName] = true;

			 // There's at least one method, so we have integrated...
			 types['circularIntegrated'] = true;
           }
        } else if(this.trackdata[i].trackName == "circularVirulence") {
          items = this.trackdata[i].items;
          for(var j=0; j < items.length; j++) {
            if(!(items[j].type in types)) {
              types[items[j].type] = true;
            }
          }
        }
      }

      this.types = types;
    }

    return this.types;
}

// To be called before a circular plot is drawn to hide
// a track type from being drawn

Islandviewer.prototype.maskTrackType = function(track) {
    for(var i = 0; i < this.trackdata.length; i++) {
	if(this.trackdata[i].trackName == track) {
	    this.trackdata[i].visible = false;
	    return;
	}
    }
}

Islandviewer.prototype.maskGlyphType = function(glyphtype) {
    for(var i = 0; i < this.trackdata.length; i++) {
	if(this.trackdata[i].trackName == "circularVirulence") {
	    if('undefined' == typeof this.trackdata[i].hideTypes) {
		this.trackdata[i].hideTypes = [glyphtype];
	    } else {
		this.trackdata[i].hideTypes.push(glyphtype);
	    }

	    return;
	}
    }
}

Islandviewer.prototype.showIslandpickGenomes = function(aid) {
    url = '../../json/islandpick/' + aid + '/';
    self = this;

//        console.log(url);

    $.ajax({
	    url: url,
	    type: "get",
	    success: function(data) {
    	        self.gene_dialog.dialog("open");
		var html = '';
		if((typeof data['default_analysis'] !== 'undefined') && !JSON.parse(data['default_analysis'])) {
			html += '<blockquote style=\"border-left: none;\"><span class="errortext">The genomes used to run IslandPick in this analysis were not the default selections by our algorithm.</span></blockquote>'
		} else {
			html += "<blockquote style=\"border-left: none;\"><p class=\"smalltext\">IslandPick results are highly dependent on the comparison genomes selected. The following list of genomes were selected by default. The default selection is provided as a starting point and can be customized (particularly if you do not see any results, or to choose comparison genomes associated with a certain phenotype or phylogenetic distance). To run a customized IslandPick analysis, follow the link below to select a different set of comparison genomes. You are welcome to contact us if you would like more help.</p>";
		}
		genomes = data.genomes
		if(typeof data['nogenomesselected'] !== 'undefined' && JSON.parse(data['nogenomesselected'])) {
//		if(objectSize(genomes) == 0) {
			html += "<span class=\"errortext\">No candidate comparison genomes were found with the default settings.</span><br />&nbsp;<br />";
		} else {
			html += "</blockquote><ul class=\"genespopup\">\n";
			for(var cid in genomes) {
			    genome = genomes[cid];
	
			    if((typeof genome['used'] === 'undefined') || !JSON.parse(genome['used'])) {
			        continue;
			    }
			    html += '<li><a href="../../accession/' + cid + '/">' + genome['name'] + '(' + genome['dist'] + ')</a></li>\n';
	                }
			html += '</ul><blockquote style=\"border-left: none;\">'
		}
		html += "<a class=\"genespopup\" href=\"../../islandpick/select/" + aid + "/\" >[ Change comparison genomes ]</a></blockquote><br />&nbsp;<br />";

		self.gene_dialog.html(html);
                self.gene_dialog.dialog('option', 'title', 'Comparison Genomes');
	     }
     });
}

function objectSize(the_object) {
	  /* function to validate the existence of each key in the object to get the number of valid keys. */
	  var object_size = 0;
	  for (key in the_object){
	    if (the_object.hasOwnProperty(key)) {
	      object_size++;
	    }
	  }
	  return object_size;
	}

jQuery.fn.highlight = function () {
    $(this).each(function () {
        var el = $(this);
        $("<div/>")
        .width(el.outerWidth())
        .height(el.outerHeight())
        .css({
            "position": "absolute",
            "left": el.offset().left,
            "top": el.offset().top,
            "background-color": "#ffff99",
            "opacity": ".7",
            "z-index": "9999999"
        }).appendTo('body').fadeOut(3000).queue(function () { $(this).remove(); });
    });
}
