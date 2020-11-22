---
layout: tool 
title: HiPiler
developer_github_account: 
paper: https://www.ncbi.nlm.nih.gov/pubmed/28866592
paper_title: "HiPiler: Visual Exploration of Large Genome Interaction Matrices with Interactive Small Multiples."
doi: 10.1109/TVCG.2017.2745978
browser: http://hipiler.higlass.io/
abstract: "This paper presents an interactive visualization interface-HiPiler-for the exploration and visualization of regions-of-interest in large genome interaction matrices. Genome interaction matrices approximate the physical distance of pairs of regions on the genome to each other and can contain up to 3 million rows and columns with many sparse regions. Regions of interest (ROIs) can be defined, e.g., by sets of adjacent rows and columns, or by specific visual patterns in the matrix. However, traditional matrix aggregation or pan-and-zoom interfaces fail in supporting search, inspection, and comparison of ROIs in such large matrices. In HiPiler, ROIs are first-class objects, represented as thumbnail-like 'snippets'. Snippets can be interactively explored and grouped or laid out automatically in scatterplots, or through dimension reduction methods. Snippets are linked to the entire navigable genome interaction matrix through brushing and linking. The design of HiPiler is based on a series of semi-structured interviews with 10 domain experts involved in the analysis and interpretation of genome interaction matrices. We describe six exploration tasks that are crucial for analysis of interaction matrices and demonstrate how HiPiler supports these tasks. We report on a user study with a series of data exploration sessions with domain experts to assess the usability of HiPiler as well as to demonstrate respective findings in the data."
citation: "Lekschas F, Bach B, Kerpedjiev P, Gehlenborg N, Pfister H. HiPiler: Visual Exploration of Large Genome Interaction Matrices with Interactive Small Multiples. IEEE Trans Vis Comput Graph. ieeexplore.ieee.org; 2018;24: 522–531."
citation_count: 13
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
access_format: [web application]
user_documentation_availability: yes
user_documentation: http://hipiler.higlass.io/docs
pub_year: 2018
license: MIT
license_form: open source
supported_files: ['other']
image: /assets/hipiler.png
image_location: http://hipiler.higlass.io/docs
notes: 
---
