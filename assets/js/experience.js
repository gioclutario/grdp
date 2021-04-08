//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Chemical Inventory Team Lead ",
    cardImage: "assets/images/personal/gmo1.jpg",
    place: "UCSF ",
    time: "(July 2018 - present)",
    desp: "<li>Worked with deploying new Chemical Inventory System</li> <li>Provided consultations to labs regarding Chemical Hygiene and other safety issues regarding Chemical use and stoarge.</li> <li>Established procedures to conduct weekly database cleaning to ensure QA for our product.</li>",
  },
  {
    title: "Junior Specialist/Research Assistant",
    cardImage: "assets/images/personal/gmo3.JPG",
    place: "UC Merced",
    time: "(Nov 2017 - Jul 2018)",
    desp: "<li>Developed my own Python Molecular Dyanics Simulation.</li><li>Refactored Fortran code into modern Python code to compare language speeds.</li><li> Compared various initial condition to determine overall ML imporvement</li>",
  },
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "",
    time: "(Dec 2015 - Jan 2016)",
    desp:"<li>Conducted some developmental biology research to familiarize myself with laboratory techniques used in Biology.</li><li>Conducted gene expression studies.</li><li> Extracted embryos from amphibian models(Xeanopus Laevis and Xeanopus Tropicalis)</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "UCSF COVID Vaccine Clinic",
    cardImage: "assets/images/personal/gmo1.jpg",
    description:
      "<b>Role:Safety Officer</b> <hr /> Responsible for surveying and resolving any safety issues possibly presented within the Clinic. "
  },
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "30 DaysofFlutter",
    cardImage: "assets/images/experience-page/5.jpg",
    description:
      "Helping beginners from their first steps in Flutter to building fully functional cross-platform applications.",
  },
  {
    title: "Garuda Hacks",
    cardImage: "assets/images/experience-page/6.jpg",
    description:
      "MLH sponsored Indonesia's premier Global Virtual Hackathon on 14 - 16th August 2020.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "ACS SEED Mentor",
    image: "",
    time: "05/2018 - 07/2018 ",
    desp: "<li> Mentored underprivleedged students interested in learning about Chemistry Research</li><hr \><li> Provided the technical knowledge to complete their ML research projects</li><hr /><li>Built simple ML Models for students to play with and make prototypes with</li> ",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
