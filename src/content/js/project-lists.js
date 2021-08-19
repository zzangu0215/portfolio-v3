import myknlThumbnail from ".././thumbnails/myknl-thumbnail.PNG";
import fantomThumbnail from ".././thumbnails/fantom-thumbnail.PNG";
import employeeTrackerThumbnail from ".././thumbnails/employee-tracker-thumbnail.PNG";
import teamPFGThumbnail from ".././thumbnails/teamPFG-thumbnail.PNG";
import reademeGENThumbnail from ".././thumbnails/readmeGEN-thumbnail.PNG";
import weatherDashboardThumbnail from ".././thumbnails/weather-dashboard-thumbnail.PNG";
import schedulerThumbnail from ".././thumbnails/scheduler-thumbnail.PNG";
import codequizThumbnail from ".././thumbnails/codequiz-thumbnail.PNG";

const projectsData = [
  {
    id: 1,
    name: "MyKNL ZAP",
    isTeamProject: true,
    thumbnail: myknlThumbnail,
    description:
      "This app allows pet owners to be able to easily book a reservation at their local pet hotel. Users will be able to make an account with their own pet and reservation data.",
    github_link: "https://github.com/zzangu0215/zzangu-and-the-pals",
    deployed_link: "https://myknl-zap.herokuapp.com/",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Express",
      "Sequelize",
      "MySQL",
    ],
  },
  {
    id: 2,
    name: "FANTOM",
    isTeamProject: true,
    thumbnail: fantomThumbnail,
    description:
      "Do you want to explore about your favorite MARVEL heroes? You should checkout our FANTOM app to get more familiar with your favorite heroes!",
    github_link: "https://github.com/zzangu0215/fantom",
    deployed_link: "https://zzangu0215.github.io/fantom/",
    technologies: ["HTML", "CSS", "JavaScript", "BootStrap", "jQuery"],
  },
  {
    id: 3,
    name: "Employee Tracker",
    isTeamProject: false,
    thumbnail: employeeTrackerThumbnail,
    description:
      "As a business owner, don't you want to manage your employees, their roles, and their deparmtnets? It's time to use Employee Tracker to fulfill your needs!",
    github_link: "https://github.com/zzangu0215/employee-tracker",
    technologies: ["JavaScript", "Node.js", "Inquirer", "MySQL"],
  },
  {
    id: 4,
    name: "Team Profile Generator",
    isTeamProject: false,
    thumbnail: teamPFGThumbnail,
    description:
      "As a project manager, don't you want to have a nice team profile page? Let my Team Profile Generator do that for you!",
    github_link: "https://github.com/zzangu0215/Team-Profile-Generator",
    technologies: ["JavaScript", "Node.js", "Inquirer", "Jest"],
  },
  {
    id: 5,
    name: "Professional README Generator",
    isTeamProject: false,
    thumbnail: reademeGENThumbnail,
    description:
      "Do you want to save your time on making README.md for your project? You should checkout my Professional README Generator to make your life easier!",
    github_link: "https://github.com/zzangu0215/Professional_README_Generator",
    technologies: ["JavaScript", "Node.js", "Inquirer"],
  },
  {
    id: 6,
    name: "Weather Dashboard",
    isTeamProject: false,
    thumbnail: weatherDashboardThumbnail,
    description:
      "Do you want to search weather for your favorite cities? Come to my Weather Dashboard to be a forecaster!",
    github_link: "https://github.com/zzangu0215/Weather_Dashboard",
    deployed_link: "https://zzangu0215.github.io/Weather_Dashboard/",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
  {
    id: 7,
    name: "Work Day Scheduler",
    isTeamProject: false,
    thumbnail: schedulerThumbnail,
    description:
      "If you want to organize your daily schedule? Come to my Work Day Scheduler to put your schedules!",
    github_link: "https://github.com/zzangu0215/Work_Day_Scheduler",
    deployed_link: "https://zzangu0215.github.io/Work_Day_Scheduler/",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
  {
    id: 8,
    name: "Code Quiz Challenge",
    isTeamProject: false,
    thumbnail: codequizThumbnail,
    description:
      "If you want to test out your knowledge of JavaScript? Come take a well-made quiz here! Jun's Code Quiz",
    github_link: "https://github.com/zzangu0215/Code_Quiz_Challenge",
    deployed_link: "https://zzangu0215.github.io/Code_Quiz_Challenge/",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
];

export default projectsData;
