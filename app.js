const CustomLink = {
    props: {
      href: {
        type: String,
        required: true
      }
    },
    template: `
      <a :href="href" style="color:#16bd5f; font-weight: bold;" target="_blank">
        <slot></slot>
      </a>
    `
};
class Activity {
    constructor(localLink, onlineLink, title) {
        this.localLink = localLink;
        this.onlineLink = onlineLink;
        this.title = title
    }
}
class ActiveFaculty {
    constructor(name, field, picture, profileLink){
        this.name = name;
        this.field = field;
        this.picture = picture;
        this.profileLink = profileLink;
    }
}
class TopMenuItem{
    constructor(href, text, dataHover){
        this.href = href;
        this.text = text;
        this.dataHover = dataHover;
    }
}
class ResearchTopic {
    constructor(title, details, icon){
        this.title = title;
        this.details = details;
        this.icon = icon;
    }
}
// We are using Vue.js to render the dynamic elements in the webpage. We use for loops to iterate the elements of the following arrays to render the html to reduce code repeatition
Vue.createApp({
components: {
    CustomLink
},
data() {
    return {
    bannerImages:[
        "images/1.png",
        "images/2.jpg",
        "images/3.jpeg"
    ],
    activeFaculties:[
        new ActiveFaculty(
        "Jeff M Phillips",
        "Algorithms for Big Data Analytics: Geometric Data Analysis, Computational Geometry, Coresets and Sketches, Handling Uncertainty, Data Mining, Databases, Machine Learning, Spatial Statistics.",
        "images/jeff.jpeg",
        "https://www.cs.utah.edu/~jeffp/"
        ),
        new ActiveFaculty(
        "El Kindi Rezig",
        "Data preparation, data discovery, data debugging, data integration, user interfaces, information extraction, data quality, data cleaning, and database usability",
        "images/elkindi.jpeg",
        "https://elkindi.github.io/"
        ),
        new ActiveFaculty(
        "Anna Fariha",
        "Data systems usability, Data summarization, Trusted machine learning, Explainable AI, Data exploration and user interfaces, Data quality, Data cleaning, Data debugging, Responsible data management, Data fairness",
        "images/annafariha.jpg",
        "https://afariha.github.io/"
        )
    ],
    topMenuItems: [
        new TopMenuItem("#home", "Home", "Home"),
        new TopMenuItem("#faculty", "Faculty", "Faculty"),
        new TopMenuItem("#research", "Research", "Research"),
        new TopMenuItem("#publications", "Publications", "Publications"),
        new TopMenuItem("#recent-news", "Recent News", "Recent News"),
        new TopMenuItem("#students", "Students", "Students"),
        new TopMenuItem("#alumni", "Alumni", "Alumni"),
        new TopMenuItem("#activities", "Activities", "Activities"),
        new TopMenuItem("#videos", "Videos", "Videos")
    ],
    researchTopics:[
        new ResearchTopic(
        "Democratizing data-driven systems",
        "This project focuses on three key aspects of data system democratization: enhancing usability of data systems for non-experts and experts, providing explanation frameworks to enable understanding of system behavior, and achieving trust and fairness in machine learning.",
        "bi-person"
        ),
        new ResearchTopic(
        "Data structures for scalable computing",
        "This project focuses on advancing the theory and practice of compact, dynamic, and scalable data structures to tackle the challenges of modern data analyses pipelines. We work on filters, hash tables, trees,  succinct, and write-optimized data structures.",
        "bi-gear"
        ),
        new ResearchTopic(
        "Large-scale indexing raw genomics data",
        "This project focuses on building scalable data processing pipelines for quickly indexing and searching through tera-bytes of raw genomic, transcriptomic, and metagenomics data.",
        "bi-lock"
        ),
        new ResearchTopic(
        "Efficient parallel graph processing",
        "This project focuses on building highly parallel data structures and algorithms for efficiently processing static, streaming, and dynamic graphs. This project further explores using hardware accelerators such as GPUs for massively parallel processing of dynamic graphs.",
        "bi-wrench"
        ),
        new ResearchTopic(
        "Persistent Data Summaries",
        "This project builds summaries for massive data arriving over time, which are small space, efficient to build and query, and amenable to data analysis. Moreover, they can be queried with respect to a time window for retrospective analysis. ",
        "bi-bar-chart"
        ),
        new ResearchTopic(
        "Data Sketching:",
        "We design and implement sketch data structures which are compressed representations of data with guaranteed trade-offs between the space and the accuracy of queries. Our group has designs sketches for quantiles, multi-dimensional data, frequent items, shape-fitting, trajectories data, and many more. ",
        "bi-hdd"
        ),
        new ResearchTopic(
        "Spatial Exposome Data",
        "CEDaR is be an open exposomic data resource that can be used by researchers across disciplines to increase understanding of the environment and health. Sources of environmental exposure data are sparse, inconsistent, and rarely linked to individuals, making research complicated and difficult. Through CEDaR, we provide a single platform containing cleaned and standardized environmental exposure measures that can be used independently or to create holistic measures of the exposome.",
        "bi-globe"
        ),
        new ResearchTopic(
        "Data Systems on Modern Hardware",
        "This project exploits modern compute hardware such as GPUs, FPGAs and storage hardware such as PMEMs,HBMs for accelerating data systems. Our group designs new algorithmic techniques to model the performance of new hardware and then analyzes data systems in the light of the new algorithmic models to accelerate them.",
        "bi-gear"
        )
    ],
    currentStudents: [
        { firstName: 'Anirudh', lastName: 'Kamath', image: 'images/anirudh.jpg', study: 'PhD', url: "https://www.linkedin.com/in/anirudhk98/"},
        { firstName: 'Gazi Abdur', lastName: 'Rakib', image: 'images/rakib.png', study: 'PhD', url: "https://sites.google.com/view/gaziabdurrakib/"},
        { firstName: 'Hamid', lastName: 'Shafieasl', image: 'images/hamid.jpeg', study: 'PhD', url: "https://scholar.google.com/citations?user=fiP4N3oAAAAJ&hl=en" },
        { firstName: 'Chetan', lastName: 'Bajaj', image: 'images/Chetan.jpg', study: 'PhD', url: "https://www.linkedin.com/in/chetanbajaj22/"},
        { firstName: 'Meysam', lastName: 'Alishahi', image: 'images/Meysam.png', study: 'PhD', url: "https://scholar.google.com/citations?user=U2kMt0sAAAAJ"},
        { firstName: 'Arman', lastName: 'Ashkari', image: 'images/Arman.jpg', study: 'PhD', url: 'https://armanashkari.github.io/'},
        { firstName: 'Foad', lastName: 'Namjoo', image: 'images/foad.jpg', study: 'PhD', url: 'https://www.linkedin.com/in/foadnamjoo/'},
        { firstName: 'Whanhee', lastName: 'Cho', image: 'images/Whanhee.jpg', study: 'PhD', url: 'https://www.linkedin.com/in/whanhee-cho-139818282'},
        { firstName: 'Peter', lastName: 'Jacobs', image: 'images/Peter.png', study: 'PhD', url: 'https://www.linkedin.com/in/peter-jacobs-857a1a138'},
        { firstName: 'Mir Mahathir', lastName: 'Mohammad', image: 'images/Mir.jpg', study: 'PhD', url: 'https://www.linkedin.com/in/mir-mahathir-mohammad-59bb671a5/'},
    ].sort((student1, student2)=> student1.lastName.localeCompare(student2.lastName)),// sort the names of each student alphabetically based on last name
    videos: [
        { title: '[2023] Anna Fariha: Research in Computer Science with a focus on Databases/Data-management research', src: 'https://www.youtube.com/embed/j7MG0PrdGGk'},
        { title: '[2022] El Kindi Rezig: Examples are All You Need: Iterative Data Discovery by Example in Data Lakes | CIDR 2022', src: 'https://www.youtube.com/embed/2k5Z7MxqdeY'},		    
        { title: '[2021] Anna Fariha: Enhancing Usability and Explainability of Data Systems | University of Pennsylvania', src: 'https://player.vimeo.com/video/519247627?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'},
        { title: '[2021] Anna Fariha: NWDS Talk - Blame the Data, Not the System | University of Washington', src: 'https://www.youtube.com/embed/ksguJdInfRY'},
        { title: '[2021] Anna Fariha: Conformance Constraints Discovery: Measuring Trust in Data-Driven Systems | SIGMOD 2021', src: 'https://www.youtube.com/embed/bS2xyRNww9w'},
    ],
    activities: [
        new Activity("images/NWDS2024.JPG", "images/NWDS2024.JPG", "NWDS 2024, Seattle, USA"),
        new Activity("images/SIGMOD2023.jpeg", "images/SIGMOD2023.jpeg", "SIGMOD 2023, Seattle, USA"),
        new Activity("images/dong.jpg", "images/dong.jpg", "Data Science Day, 2019")
    ],
    getCurrentYear: new Date().getFullYear()
    }
}
}).mount('#app')