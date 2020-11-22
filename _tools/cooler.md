---
layout: tool 
title: Cooler
developer_github_account: 
paper: https://academic.oup.com/bioinformatics/article/36/1/311/5530598
paper_title: "Cooler: scalable storage for Hi-C data and other genomically labeled arrays"
doi: 10.1093/bioinformatics/btz540
browser: https://github.com/mirnylab/cooler
abstract: "Most existing coverage-based (epi)genomic datasets are onedimensional, but newer technologies probing interactions (physical, genetic, etc.) produce quantitative maps with twodimensional genomic coordinate systems. Storage and computational costs mount sharply with data resolution when such, maps are stored in dense form. Hence, there is a pressing need, to develop data storage strategies that handle the full range of, useful resolutions in multidimensional genomic datasets by taking advantage of their sparse nature, while supporting efficient, compression and providing fast random access to facilitate development of scalable algorithms for data analysis. We developed a file format called cooler, based on a sparse data model,, that can support genomically-labeled matrices at any resolution., It has the flexibility to accommodate various descriptions of the, data axes (genomic coordinates, tracks and bin annotations),, resolutions, data density patterns, and metadata. Cooler is, based on HDF5 and is supported by a Python library and command line suite to create, read, inspect and manipulate cooler, data collections. The format has been adopted as a standard by, the NIH 4D Nucleome Consortium. Cooler is cross-platform,, BSD-licensed, and can be installed from the Python Package Index or the bioconda repository. The source code is maintained, on Github at https://github.com/mirnylab/cooler"
citation: "Nezar Abdennur, Leonid A Mirny, Cooler: scalable storage for Hi-C data and other genomically labeled arrays, Bioinformatics, Volume 36, Issue 1, 1 January 2020, Pages 311–316, https://doi.org/10.1093/bioinformatics/btz540"
citation_count: 2
feature_type: ['segment sparse', 'segment contiguous', 'point sparse', 'point contiguous']
interconnection_type: ['within']
genome_layout: ['linear']
partition: ['contiguous']
abstraction: ['no']
arrangement: linear orthogonal
view: multiple
scale: multiple
focus: multiple
coordinate_systems: single
access_format: [programming library]
user_documentation_availability: yes
user_documentation: https://cooler.readthedocs.io/en/latest/#
pub_year: 2020
license: BSD (3 Clause)
license_form: open source
supported_files: ['other']
image: /assets/cooler.png
image_location: 
notes: 
---
