// this file contains all variable data

const allPapers = [
  // {
  //     "year": 9999,
  //     "paper": "(not specified)",
  //     "venue": "(not specified)",
  //     "authors": "(not specified)",
  //     "isDatabaseVenue": true,
  //     "confAttribute": "(not specified)"
  // },
  {
    year: 2025,
    paper: "LORY: Location-aware Data Discovery from Data Lakes",
    venue: "ACM SIGSPATIAL",
    authors: "El Kindi Rezig, Walid G. Aref",
    isDatabaseVenue: false,
    confAttribute: "None",
  },
  {
    year: 2025,
    paper:
      "Sort it Like You Mean It: Discovering Semantically Interesting Attribute Augmentations to Sort Tables",
    venue: "VLDB",
    authors: "Akash Khatri, Mahathir Mohammad, El Kindi Rezig",
    isDatabaseVenue: true,
    confAttribute: "Demo",
  },
  {
    year: 2025,
    paper: "Buckaroo: A Direct Manipulation Visual Data Wrangler",
    venue: "VLDB",
    authors: "Annabelle Warner, Andrew McNutt, Paul Rosen, El Kindi Rezig",
    isDatabaseVenue: true,
    confAttribute: "Demo",
  },
  {
    year: 2025,
    paper:
      "Enhancing Urban Paratransit Reliability: A Spatial-Temporal and Causal Analysis of Service Inefficiencies",
    venue: "ASCE Journal of Urban Planning and Development",
    authors:
      "Arman Malekloo, Xiaoyue Cathy Liu, Nikola Markovic, Chenxi Liu, Jeff Phillips",
    isDatabaseVenue: false,
    confAttribute: "None",
  },
  {
    year: 2025,
    paper:
      "Robust High-Dimensional Mean Estimation With Low Data Size, an Empirical Study",
    venue: "TMLR",
    authors: "Cullen Anderson, Jeff M. Phillips",
    isDatabaseVenue: false,
    confAttribute: "None",
  },
  {
    year: 2025,
    paper: "Challenges in Using Conversational AI for Data Science",
    venue: "HILDA@SIGMOD",
    authors:
      "Bhavya Chopra, Ananya Singha, Anna Fariha, Sumit Gulwani, Chris Parnin, Ashish Tiwari, Austin Z. Henley",
    isDatabaseVenue: true,
    confAttribute: "Workshop",
  },
  {
    year: 2025,
    paper: "Zombie Hashing: Reanimating Tombstones in Graveyard",
    venue: "SIGMOD",
    authors:
      "Benwei Shi, Yuvaraj Chesetti, Jeff M. Phillips, and Prashant Pandey",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2025,
    paper:
      "DataMorpher: Automatic Data Transformation Using LLM-based Zero-Shot Code Generation.",
    venue: "ICDE",
    authors:
      "Ankita Sharma, Jaykumar Tandel, Xuanmao Li, Lanjun Wang, Anna Fariha, Liang Zhang, Syed Arsalan Ahmed Naqvi, Irbaz Bin Riaz, Lei Cao, Jia Zou",
    isDatabaseVenue: true,
    confAttribute: "Demo",
  },
  {
    year: 2025,
    paper:
      "ChARLES: Change-Aware Recovery of Latent Evolution Semantics in Relational Data.",
    venue: "SIGMOD",
    authors: "Shiyi He, Alexandra Meliou, Anna Fariha",
    isDatabaseVenue: true,
    confAttribute: "Demo",
  },
  {
    year: 2025,
    paper:
      "CausalExplain: Causal Explanations of Black-box Models with Training Data Subsets.",
    venue: "SIGMOD",
    authors: "Arman Ashkari, El Kindi Rezig",
    isDatabaseVenue: true,
    confAttribute: "Demo",
  },
  {
    year: 2025,
    paper: "SeerCuts: Explainable Attribute Discretization",
    venue: "SIGMOD",
    authors:
      "Eugenie Lai, Inbal Croitoru, Noam Bitton, Ariel Shalem, Brit Youngmann, Sainyam Galhotra, El Kindi Rezig, Michael Cafarella",
    isDatabaseVenue: true,
    confAttribute: "Demo",
  },
  {
    year: 2024,
    paper:
      "Leveraging Structured and Unstructured Data for Tabular Data Cleaning.",
    venue: "DCAI@ IEEE BigData",
    authors: "Pavitra Mehra, El Kindi Rezig",
    isDatabaseVenue: true,
    confAttribute: "Workshop",
  },
  {
    year: 2024,
    paper:
      "Can Causal DAGs Generate Data-based Explanations of Black-box Models?",
    venue: "DCAI@ IEEE BigData",
    authors: "Arman Ashkari, El Kindi Rezig",
    isDatabaseVenue: true,
    confAttribute: "Workshop",
  },
  {
    year: 2024,
    paper: "UTOPIA: Automatic Pivot Table Assistant.",
    venue: "VLDB",
    authors: "Whanhee Cho, Anna Fariha",
    isDatabaseVenue: true,
    confAttribute: "Demo",
  },
  {
    year: 2024,
    paper: "Rapidash: Efficient Detection of Constraint Violations.",
    venue: "VLDB",
    authors:
      "Zifan Liu, Shaleen Deep, Anna Fariha, Fotis Psallidas, Ashish Tiwari, Avrilia Floratou",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2024,
    paper:
      "Mitigating Exploitation Bias in Learning to Rank with an Uncertainty-aware Empirical Bayes Approach.",
    venue: "WWW",
    authors:
      "Tao Yang, Cuize Han, Chen Luo, Parth Gupta, Jeff M. Phillips, and Qingyao Ai",
    isDatabaseVenue: false,
    confAttribute: "None",
  },
  {
    year: 2024,
    paper:
      "Investigating Student Mistakes in Introductory Data Science Programming.",
    venue: "SIGCSE",
    authors:
      "Anjali Singh, Anna Fariha, Christopher Brooks, Gustavo Soares, Austin Henley, Ashish Tiwari, Chethan M, Heeryung Choi, Sumit Gulwani",
    isDatabaseVenue: false,
    confAttribute: "None",
  },
  {
    year: 2024,
    paper:
      "Bidirectional Masked Self-attention and N-gram Span Attention for Constituency Parsing.",
    venue: "EMNLP",
    authors: "Soohyeong Kim, Whanhee Cho, Minji Kim, Yong Suk Choi",
    isDatabaseVenue: false,
    confAttribute: "None",
  },
  {
    year: 2023,
    paper: "Sketching Multidimensional Time Series for Fast Discord Mining.",
    venue: "IEEE BigData",
    authors:
      "Chin-Chia Michael Yeh, Yan Zheng, Menghai Pan, Huiyuan Chen, Zhongfang Zhuang, Junpeng Wang, Liang Wang, Wei Zhang, Jeff M. Phillips, and Eamonn Keogh",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2023,
    paper: "CoWrangler: Recommender System for Data-Wrangling Scripts.",
    venue: "SIGMOD",
    authors:
      "Bhavya Chopra, Anna Fariha, Sumit Gulwani, Austin Z. Henley, Daniel Perelman, Mohammad Raza, Sherry Shi, Danny Simmons, Ashish Tiwari",
    isDatabaseVenue: true,
    confAttribute: "Demo",
  },
  {
    year: 2023,
    paper: "An experimental study on classifying spatial trajectories.",
    venue: "Knowledge and Information Systems",
    authors: "Hasan Pourmahmood Aghababa, Jeff M. Phillips",
    isDatabaseVenue: false,
    confAttribute: "None",
  },
  {
    year: 2023,
    paper:
      "Eastwood-Tidy: C Linting for Automated Code Style Assessment in Programming Courses.",
    venue: "SIGCSE",
    authors:
      "Rowan Hart, Brian Hays, Connor McMillin, El Kindi Rezig, Gustavo Rodriguez-Rivera, Jeffrey A. Turkstra",
    isDatabaseVenue: false,
    confAttribute: "None",
  },
  {
    year: 2022,
    paper: "DataPrism: Exposing Disconnect between Data and Systems.",
    venue: "SIGMOD",
    authors:
      "Sainyam Galhotra, Anna Fariha, Raoni Lourenço, Juliana Freire, Alexandra Meliou, Divesh Srivastava",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2022,
    paper:
      "Through the Data Management Lens: Experimental Analysis and Evaluation of Fair Classification.",
    venue: "SIGMOD",
    authors:
      "Maliha Tashfia Islam, Anna Fariha, Alexandra Meliou, Babak Salimi",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2022,
    paper:
      "Examples are All You Need: Iterative Data Discovery by Example in Data Lakes.",
    venue: "CIDR",
    authors:
      "El Kindi Rezig, Anshul Bhandari, Anna Fariha, Benjamin Price, Allan Vanterpool, Andrew Bowne, Lindsey McEvoy, Vijay Gadepally",
    isDatabaseVenue: true,
    confAttribute: "Abstract",
  },
  {
    year: 2022,
    paper:
      "A Survey of Data Challenges Across a Modernizing Bureaucracy: A New Perspective on Examining Old Government Problems.",
    venue: "Poly/DMAH@VLDB",
    authors:
      "Andrew Bowne, Lindsey McEvoy, Dhruv Gupta, Cameron Brown, Vijay Gadepally, El Kindi Rezig",
    isDatabaseVenue: true,
    confAttribute: "Workshop",
  },
  {
    year: 2022,
    paper: "Efficient Oblivious Query Processing for Range and kNN Queries.",
    venue: "TKDE",
    authors:
      "Zhao Chang, Dong Xie, Feifei Li, Jeff M. Phillips, Rajeev Balasubramonian",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2021,
    paper: "Spatial Independent Range Sampling.",
    venue: "SIGMOD",
    authors: "Dong Xie, Jeff M. Phillips, Michael Matheny, and Feifei Li",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2021,
    paper: "At-the-time and Back-in-time Persistent Sketches.",
    venue: "SIGMOD",
    authors:
      "Benwei Shi, Zhuoyue Zhao, Yanqing Peng, Feifei Li, and Jeff M. Phillips",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2021,
    paper:
      "Conformance Constraint Discovery: Measuring Trust in Data-Driven Systems.",
    venue: "SIGMOD",
    authors:
      "Anna Fariha, Ashish Tiwari, Arjun Radhakrishna, Sumit Gulwani, Alexandra Meliou",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2021,
    paper: "Horizon: Scalable Dependency-driven Data Cleaning.",
    venue: "VLDB",
    authors:
      "El Kindi Rezig, Mourad Ouzzani, Walid G. Aref, Ahmed K. Elmagarmid, Ahmed R. Mahmood, Michael Stonebraker",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2021,
    paper:
      "CoCo: Interactive Exploration of Conformance Constraints for Data Understanding and Data Cleaning.",
    venue: "SIGMOD",
    authors:
      "Anna Fariha, Ashish Tiwari, Alexandra Meliou, Arjun Radhakrishna, Sumit Gulwani",
    isDatabaseVenue: true,
    confAttribute: "Demo",
  },
  {
    year: 2021,
    paper: "DICE: Data Discovery by Example.",
    venue: "VLDB",
    authors:
      "El Kindi Rezig, Anshul Bhandari, Anna Fariha, Benjamin Price, Allan Vanterpool, Vijay Gadepally, Michael Stonebraker",
    isDatabaseVenue: true,
    confAttribute: "Demo",
  },
  {
    year: 2021,
    paper: "Semantic Embedding for Regions of Interest.",
    venue: "VLDBJ",
    authors: "Debjyoti Paul, Jeff M. Phillips, and Feifei Li",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2021,
    paper:
      "Data Cleaning in the Era of Data Science: Challenges and Opportunities.",
    venue: "CIDR",
    authors: "El Kindi Rezig",
    isDatabaseVenue: true,
    confAttribute: "Abstract",
  },
  {
    year: 2021,
    paper: "A Deterministic Streaming Sketch for Ridge Regression.",
    venue: "AIStats",
    authors: "Benwei Shi and Jeff M. Phillips",
    isDatabaseVenue: false,
    confAttribute: "None",
  },
  {
    year: 2020,
    paper: "Causality-Guided Adaptive Interventional Debugging.",
    venue: "SIGMOD",
    authors: "Anna Fariha, Suman Nath, Alexandra Meliou",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2020,
    paper: "ExTuNe: Explaining Tuple Non-conformance.",
    venue: "SIGMOD",
    authors: "Anna Fariha, Ashish Tiwari, Arjun Radhakrishna, Sumit Gulwani",
    isDatabaseVenue: true,
    confAttribute: "Demo",
  },
  {
    year: 2020,
    paper: "SuDocu: Summarizing Documents by Example.",
    venue: "VLDB",
    authors: "Anna Fariha, Matteo Brucato, Peter J. Haas, Alexandra Meliou",
    isDatabaseVenue: true,
    confAttribute: "Demo",
  },
  {
    year: 2020,
    paper: "Debugging Large-Scale Data Science Pipelines using Dagger.",
    venue: "VLDB",
    authors:
      "El Kindi Rezig, Ashrita Brahmaroutu, Nesime Tatbul, Mourad Ouzzani, Nan Tang, Timothy G. Mattson, Samuel Madden, Michael Stonebraker",
    isDatabaseVenue: true,
    confAttribute: "Demo",
  },
  {
    year: 2020,
    paper: "Dagger: A Data (not code) Debugger.",
    venue: "CIDR",
    authors:
      "El Kindi Rezig, Lei Cao, Giovanni Simonini, Maxime Schoemans, Samuel Madden, Nan Tang, Mourad Ouzzani, Michael Stonebraker",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2020,
    paper: "Scalable Spatial Scan Statistics for Trajectories.",
    venue: "TKDD",
    authors: "Michael Matheny, Dong Xie, and Jeff M. Phillips",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2020,
    paper: "Towards Data Discovery by Example.",
    venue: "Poly/DMAH@VLDB",
    authors:
      "El Kindi Rezig, Allan Vanterpool, Vijay Gadepally, Benjamin Price, Michael J. Cafarella, Michael Stonebraker",
    isDatabaseVenue: true,
    confAttribute: "Workshop",
  },
  {
    year: 2019,
    paper:
      "Example-Driven Query Intent Discovery: Abductive Reasoning using Semantic Similarity.",
    venue: "VLDB",
    authors: "Anna Fariha, Alexandra Meliou",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2019,
    paper: "Towards an End-to-End Human-Centric Data Cleaning Framework.",
    venue: "HILDA@SIGMOD",
    authors:
      "El Kindi Rezig, Mourad Ouzzani, Ahmed K. Elmagarmid, Walid G. Aref, Michael Stonebraker",
    isDatabaseVenue: true,
    confAttribute: "Workshop",
  },
  {
    year: 2019,
    paper:
      "Data Civilizer 2.0: A Holistic Framework for Data Preparation and Analytics.",
    venue: "VLDB",
    authors:
      "El Kindi Rezig, Lei Cao, Michael Stonebraker, Giovanni Simonini, Wenbo Tao, Samuel Madden, Mourad Ouzzani, Nan Tang, Ahmed K. Elmagarmid",
    isDatabaseVenue: true,
    confAttribute: "Demo",
  },
  {
    year: 2019,
    paper: "Simple Distances for Trajectories via Landmarks.",
    venue: "SIGSPATIAL",
    authors: "Jeff M. Phillips and Pingfan Tang",
    isDatabaseVenue: false,
    confAttribute: "None",
  },
  {
    year: 2019,
    paper: "The Kernel Spatial Scan Statistic.",
    venue: "SIGSPATIAL",
    authors: "Mingxuan Han, Michael Matheny, and Jeff M. Phillips",
    isDatabaseVenue: false,
    confAttribute: "None",
  },
  {
    year: 2019,
    paper: "Independent Range Sampling, Revisited Again.",
    venue: "International Symposium on Computational Geometry",
    authors: "Peyman Afshani and Jeff M. Phillips",
    isDatabaseVenue: false,
    confAttribute: "None",
  },
  {
    year: 2018,
    paper:
      "Improved Bounds on Information Dissemination by Manhattan Random Waypoint Model.",
    venue: "SIGSPATIAL",
    authors: "Aria Rezaei, Jie Gao, Jeff M. Phillips, and Csaba D. Toth",
    isDatabaseVenue: false,
    confAttribute: "None",
  },
  {
    year: 2018,
    paper: "SQuID: Semantic Similarity-Aware Query Intent Discovery.",
    venue: "SIGMOD",
    authors: "Anna Fariha, Sheikh Muhammad Sarwar, Alexandra Meliou",
    isDatabaseVenue: true,
    confAttribute: "Demo",
  },
  {
    year: 2017,
    paper: "Distributed Trajectory Similarity Search.",
    venue: "VLDB",
    authors: "Dong Xie, Feifei Li, and Jeff M. Phillips",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2017,
    paper: "Coresets for Kernel Regression.",
    venue: "SIGKDD",
    authors: "Yan Zheng and Jeff M. Phillips",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2016,
    paper: "Efficient Frequent Directions Algorithm for Sparse Matrices.",
    venue: "SIGKDD",
    authors: "Mina Ghashami, Edo Liberty, and Jeff M. Phillips",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2016,
    paper: "Improved Practical Matrix Sketching with Guarantees.",
    venue: "TKDE",
    authors: "Mina Ghashami, Amey Desai, and Jeff M. Phillips",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2016,
    paper: "ORLF: A flexible framework for online record linkage and fusion.",
    venue: "ICDE",
    authors:
      "El Kindi Rezig, Eduard C. Dragut, Mourad Ouzzani, Ahmed K. Elmagarmid, Walid G. Aref",
    isDatabaseVenue: true,
    confAttribute: "Demo",
  },
  {
    year: 2016,
    paper: "Scalable Spatial Scan Statistics through Sampling.",
    venue: "SIGSPATIAL",
    authors:
      "Michael Matheny, Raghvendra Singh, Kaiqiang Wang, Liang Zhang and Jeff M. Phillips",
    isDatabaseVenue: false,
    confAttribute: "None",
  },
  {
    year: 2016,
    paper: "Frequent Directions: Simple and Deterministic Matrix Sketching.",
    venue: "SIAM Journal of Computing",
    authors:
      "Mina Ghashami, Edo Liberty, Jeff M. Phillips and David P. Woodruff",
    isDatabaseVenue: false,
    confAttribute: "None",
  },
  {
    year: 2015,
    paper:
      "L_infity Error and Bandwidth Selection for Kernel Density Estimates of Large Data.",
    venue: "SIGKDD",
    authors: "Yan Zheng and Jeff M. Phillips",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2015,
    paper: "Tornado: A Distributed Spatio-Textual Stream Processing System.",
    venue: "VLDB",
    authors:
      "Ahmed R. Mahmood, Ahmed M. Aly, Thamir Qadah, El Kindi Rezig, Anas Daghistani, Amgad Madkour, Ahmed S. Abdelhamid, Mohamed S. Hassan, Walid G. Aref, Saleh M. Basalamah",
    isDatabaseVenue: true,
    confAttribute: "Demo",
  },
  {
    year: 2015,
    paper: "Query-time record linkage and fusion over Web databases.",
    venue: "ICDE",
    authors:
      "El Kindi Rezig, Eduard C. Dragut, Mourad Ouzzani, Ahmed K. Elmagarmid",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2014,
    paper: "Continuous Matrix Approximation on Distributed Data.",
    venue: "VLDB",
    authors: "Mina Ghashami, Jeff M. Phillips, and Feifei Li",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2013,
    paper: "Quality and Efficiency for Kernel Density Estimates in Large Data.",
    venue: "SIGMOD",
    authors: "Yan Zheng, Jeffrey Jestes, Jeff M. Phillips, Feifei Li",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2013,
    paper: "Nearest Neighbor Searching Under Uncertainty II.",
    venue: "PODS",
    authors:
      "Pankaj K. Agarwal, Boris Aronov, Sariel Har-Peled, Jeff M. Phillips, Ke Yi, and Wuzhou Zhang",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2013,
    paper: "Range Counting Coresets for Uncertain Data.",
    venue: "ACM Symposium on Computational Geometry",
    authors: "Amirali Abdullah, Samira Daruki, and Jeff M. Phillips",
    isDatabaseVenue: false,
    confAttribute: "None",
  },
  {
    year: 2012,
    paper: "Ranking Large Temporal Data.",
    venue: "VLDB",
    authors: "Jeffrey Jestes, Jeff M. Phillips, Feifei Li",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2012,
    paper: "Mergeable Summaries.",
    venue: "TODS",
    authors:
      "Pankaj K. Agarwal, Graham Cormode, Zengfeng Huang, Jeff M. Phillips, Zhewei Wei, and Ke Yi",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2012,
    paper: "Efficient Threshold Monitoring for Distributed Probabilistic Data.",
    venue: "ICDE",
    authors: "Mingwang Tang, Feifei Li, Jeff M. Phillips, Jeffrey Jestes",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2011,
    paper: "(Approximate) Uncertain Skylines.",
    venue: "ICDT",
    authors:
      "Peyman Afshani, Pankaj K. Agarwal, Lars Arge, Kasper Green Larsen, and Jeff M. Phillips",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2011,
    paper: "U-MAP: a system for usage-based schema matching and mapping.",
    venue: "SIGMOD",
    authors:
      "Hazem Elmeleegy, Jaewoo Lee, El Kindi Rezig, Mourad Ouzzani, Ahmed K. Elmagarmid",
    isDatabaseVenue: true,
    confAttribute: "Demo",
  },
  {
    year: 2010,
    paper: "Universal Multi-Dimensional Scaling.",
    venue: "SIGKDD",
    authors: "Arvind Agarwal, Jeff M. Phillips, Suresh Venkatasubramanian",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2010,
    paper:
      "Value-Based Notification Conditions in Large-Scale Publish/Subscribe Systems.",
    venue: "VLDB",
    authors: "Badrish Chandramouli, Jeff M. Phillips, Jun Yang",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
  {
    year: 2010,
    paper: "Spatial Scan Statistics: Approximations and Performance Study.",
    venue: "SIGKDD",
    authors:
      "Deepak Agarwal, Andrew McGregor, Jeff M. Phillips, Suresh Venkatasubramanian, Zhengyuan Zhu",
    isDatabaseVenue: true,
    confAttribute: "None",
  },
];

const activeFaculties = [
  {
    name: "Anna Fariha",
    note: "",
    field:
      "Data systems usability, Data summarization, Trusted machine learning, Explainable AI, Data exploration and user interfaces, Data quality, Data cleaning, Data debugging, Responsible data management, Data fairness",
    picture: "images/annafariha.jpg",
    profileLink: "https://afariha.github.io/",
  },
  {
    name: "Jeff M Phillips",
    note: "",
    field:
      "Algorithms for Big Data Analytics: Geometric Data Analysis, Computational Geometry, Coresets and Sketches, Handling Uncertainty, Data Mining, Databases, Machine Learning, Spatial Statistics.",
    picture: "images/jeff.jpeg",
    profileLink: "https://www.cs.utah.edu/~jeffp/",
  },
  {
    name: "El Kindi Rezig",
    note: "",
    field:
      "Data preparation, Data discovery, Data debugging, Data integration, User interfaces, Information extraction, Data quality, Data cleaning, Database usability",
    picture: "images/elkindi.jpeg",
    profileLink: "https://elkindi.github.io/",
  },
  {
    name: "Fuheng Zhao",
    note: "Starting from Fall 2026",
    field:
      "Data summarization, Approximate query, Machine learning for data system, NL2SQL, Key-value stores, Data privacy and security",
    picture: "images/fuheng.jpg",
    profileLink: "https://zhaofuheng.github.io/",
  },
];

const bannerImages = [
  "images/1.png",
  "images/2.jpg",
  "images/3.jpeg",
  "images/4.jpg",
];

researchTopics = [
  {
    title: "Data understanding",
    details:
      "This project aims to bridge the gap between raw data and meaningful insights, empowering users to better understand how data changes and why certain disparities emerge. It includes summarizing how data evolves over time and providing causal explanations for disparities between two groups within a dataset.",
    icon: "bi-person",
  },
  {
    title: "Recommendation systems for data-management tasks",
    details:
      "This project develops recommendation systems for complex data-management tasks. Examples include data summarization using pivot tables, data wrangling, dataset discovery and search. Techniques include approximation algorithms and agentic AI.",
    icon: "bi-stars",
  },
  {
    title: "Democratizing data-driven systems",
    details:
      "This project focuses on three key aspects of data system democratization: enhancing usability of data systems for non-experts and experts, providing explanation frameworks to enable understanding of system behavior, and achieving trust and fairness in machine learning.",
    icon: "bi-diagram-3",
  },
  {
    title: "Data debugging",
    details: "We develop systems that enable users to diagnose and fix data issues in complex, data-intensive pipelines. Our focus is on scenarios where the data originates from black-box machine learning models, and we equip users with explanations that reveal why these models produce the outputs they do.",
    icon: "bi-bug"
  },
  {
    title: "Data discovery",
    details: "We build data discovery systems whose job is to identify, understand, and connect relevant datasets across diverse and often disparate sources. By automating the search for joinable and related data, data discovery empowers analysts to uncover hidden connections, enrich their datasets, and accelerate insights without exhaustive manual exploration.",
    icon: "bi-search"
  },
  {
    title: "Data structures for scalable computing",
    details:
      "This project focuses on advancing the theory and practice of compact, dynamic, and scalable data structures to tackle the challenges of modern data analyses pipelines. We work on filters, hash tables, trees, succinct, and write-optimized data structures.",
    icon: "bi-gear",
  },
  {
    title: "Persistent data summaries",
    details:
      "This project builds summaries for massive data arriving over time, which are small space, efficient to build and query, and amenable to data analysis. Moreover, they can be queried with respect to a time window for retrospective analysis.",
    icon: "bi-bar-chart",
  },
  {
    title: "Data sketching",
    details:
      "We design and implement sketch data structures which are compressed representations of data with guaranteed trade-offs between the space and the accuracy of queries. Our group has designs sketches for quantiles, multi-dimensional data, frequent items, shape-fitting, trajectories data, and many more.",
    icon: "bi-hdd",
  },
  {
    title: "Spatial exposome data",
    details:
      "CEDaR is be an open exposomic data resource that can be used by researchers across disciplines to increase understanding of the environment and health. Sources of environmental exposure data are sparse, inconsistent, and rarely linked to individuals, making research complicated and difficult. Through CEDaR, we provide a single platform containing cleaned and standardized environmental exposure measures that can be used independently or to create holistic measures of the exposome.",
    icon: "bi-globe",
  },
  {
    title: "Data systems on modern hardware",
    details:
      "This project exploits modern compute hardware such as GPUs, FPGAs and storage hardware such as PMEMs, HBMs for accelerating data systems. Our group designs new algorithmic techniques to model the performance of new hardware and then analyzes data systems in the light of the new algorithmic models to accelerate them.",
    icon: "bi-gear",
  },
];

currentStudents = [
  {
    firstName: "Rabeya",
    lastName: "Hossain",
    image: "images/rabeya.jpg",
    study: "PhD",
    url: "https://github.com/Rabeya-hossain",
  },
  {
    firstName: "Anirudh",
    lastName: "Kamath",
    image: "images/anirudh.jpg",
    study: "PhD",
    url: "https://anirudhkamath.github.io/",
  },
  {
    firstName: "Gazi Abdur",
    lastName: "Rakib",
    image: "images/rakib.png",
    study: "PhD",
    url: "https://sites.google.com/view/gaziabdurrakib/",
  },
  {
    firstName: "Hamid",
    lastName: "Shafieasl",
    image: "images/hamid.jpg",
    study: "PhD",
    url: "https://scholar.google.com/citations?user=fiP4N3oAAAAJ&hl=en",
  },
  {
    firstName: "Meysam",
    lastName: "Alishahi",
    image: "images/Meysam.png",
    study: "PhD",
    url: "https://scholar.google.com/citations?user=U2kMt0sAAAAJ",
  },
  {
    firstName: "Arman",
    lastName: "Ashkari",
    image: "images/Arman.jpg",
    study: "PhD",
    url: "https://armanashkari.github.io/",
  },
  {
    firstName: "Foad",
    lastName: "Namjoo",
    image: "images/foad.jpg",
    study: "PhD",
    url: "https://www.linkedin.com/in/foadnamjoo/",
  },
  {
    firstName: "Whanhee",
    lastName: "Cho",
    image: "images/Whanhee.jpg",
    study: "PhD",
    url: "https://whnhch.github.io/",
  },
  {
    firstName: "Peter",
    lastName: "Jacobs",
    image: "images/Peter.png",
    study: "PhD",
    url: "https://www.linkedin.com/in/peter-jacobs-857a1a138",
  },
  {
    firstName: "Mir Mahathir",
    lastName: "Mohammad",
    image: "images/Mir.jpg",
    study: "PhD",
    url: "https://www.mirmahathir.com/",
  },
  {
    firstName: "Aritra",
    lastName: "Mazumder",
    image: "images/aritra.jpg",
    study: "PhD",
    url: "https://aritra741.github.io/",
  },
  {
    firstName: "Shamit",
    lastName: "Fatin",
    image: "images/samit.jpg",
    study: "PhD",
    url: "https://shamit187.github.io/",
  },
];

videos = [
  {
    title:
      "[2023] Anna Fariha: Research in Computer Science with a focus on Databases/Data-management research",
    src: "https://www.youtube.com/embed/j7MG0PrdGGk",
  },
  {
    title:
      "[2023] Anna Fariha: Blame the Data, not the System: How Data Constraints can Help Explain Causes of Data-system Malfunction | NWDS 2023",
    src: "https://www.youtube.com/embed/xgB3xJ-PpQ4",
  },
  {
    title:
      "[2022] El Kindi Rezig: Examples are All You Need: Iterative Data Discovery by Example in Data Lakes | CIDR 2022",
    src: "https://www.youtube.com/embed/2k5Z7MxqdeY",
  },
  {
    title:
      "[2021] Anna Fariha: Enhancing Usability and Explainability of Data Systems | University of Pennsylvania",
    src: "https://player.vimeo.com/video/519247627?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  },
  {
    title:
      "[2021] Anna Fariha: Conformance Constraints Discovery: Measuring Trust in Data-Driven Systems | SIGMOD 2021",
    src: "https://www.youtube.com/embed/bS2xyRNww9w",
  },
  {
    title:
      "[2020] Anna Fariha: SuDocu: Summarizing Documents by Example (best demo runner-up) | VLDB 2020",
    src: "https://www.youtube.com/embed/pDdMK4uyICM",
  },
];

activities = [
  {
    localLink: "images/SIGMOD_2025_1.jpg",
    onlineLink: "images/SIGMOD_2025_1.jpg",
    title: "SIGMOD 2025, Berlin, Germany",
  },
  {
    localLink: "images/SIGMOD_2025_2.jpg",
    onlineLink: "images/SIGMOD_2025_2.jpg",
    title: "SIGMOD 2025, Berlin, Germany",
  },
  {
    localLink: "images/SIGMOD_2025_3.jpg",
    onlineLink: "images/SIGMOD_2025_3.jpg",
    title: "SIGMOD 2025, Berlin, Germany",
  },
  {
    localLink: "images/NWDS2024.jpg",
    onlineLink: "images/NWDS2024.jpg",
    title: "NWDS 2024, Seattle, USA",
  },
  {
    localLink: "images/SIGMOD2023.jpeg",
    onlineLink: "images/SIGMOD2023.jpeg",
    title: "SIGMOD 2023, Seattle, USA",
  },
  {
    localLink: "images/dong.jpg",
    onlineLink: "images/dong.jpg",
    title: "Data Science Day, 2019",
  },
];

alumni = [
  {
    name: "Mingxuan Han",
    link: "https://www.linkedin.com/in/mingxuan-han-111a462b/",
    status: "PhD 2024, Meta",
  },
  {
    name: "Hasan Pourmahmood-Aghababa",
    link: "https://scholar.google.com/citations?user=O_6yB00AAAAJ&hl=en",
    status: "PhD 2024, Walmart",
  },
  {
    name: "Benwei Shi",
    link: "https://www.cs.utah.edu/~benwei/",
    status: "PhD 2023, Meta",
  },
  {
    name: "Tao Yang",
    link: "https://www.cs.utah.edu/~taoyang/",
    status: "PhD 2023, Amazon",
  },
  {
    name: "Prince Aboagye",
    link: "https://scholar.google.com/citations?user=T2ZJ6xYAAAAJ&hl=en",
    status: "PhD 2023, Visa Research",
  },
  {
    name: "Yanqing Peng",
    link: "https://www.linkedin.com/in/yanqing-peng-0a8969a1/",
    status: "PhD 2022, Meta",
  },
  {
    name: "Zhuoyue Zhao",
    link: "https://cse.buffalo.edu/~zzhao35/",
    status: "PhD 2021, Assistant Prof at U. Buffalo",
  },
  {
    name: "Zhao Chang",
    link: "https://zhao-chang.github.io/index.html",
    status: "PhD 2021, Assistant Prof at Xidian University",
  },
  {
    name: "Dong Xie",
    link: "https://sites.psu.edu/dongx/",
    status: "PhD 2020, Assistant Prof at Pennsylvania State University",
  },
];
