// We are using Vue.js to render the dynamic elements in the webpage. We use for loops to iterate the elements of the following arrays to render the html to reduce code repeatition
Vue.createApp({
components: {
    CustomLink
},
computed:{
    papersGroupedByYear: function(){
        const groupedByYear = {};
        this.allPapers.forEach(entry => {
          const { year, paper, venue, authors, isDatabaseVenue, confAttribute, award } = entry;
          if (!groupedByYear[year]) {
            groupedByYear[year] = { year, papers: [] };
          }
          groupedByYear[year].papers.push({ paper, venue, authors, isDatabaseVenue, confAttribute, award });
        });
        return Object.values(groupedByYear).sort((a, b) => b.year - a.year);
      }
},
data() {
    return {
    allPapers: allPapers,
    bannerImages: bannerImages,
    activeFaculties: activeFaculties,
    researchTopics: researchTopics,
    currentStudents: currentStudents.sort((student1, student2)=> student1.lastName.localeCompare(student2.lastName)),// sort the names of each student alphabetically based on last name
    videos: videos,
    activities: activities,
    getCurrentYear: new Date().getFullYear(),
    alumni: alumni,
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

    }
}
}).mount('#app')