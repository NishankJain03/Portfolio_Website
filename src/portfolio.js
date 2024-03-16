import emoji from "react-easy-emoji";
import { TypeAnimation } from 'react-type-animation';
const greeting = {
  title: "Hi, I'm Nishank Jain",
  subTitle: (
    <TypeAnimation
        sequence={[
          "I'm a Frontend Web Developer",
          1000,
          "I'm a Machine Learning Engineer",
          1000,
          "I'm a Python Enthusiat",
          1000
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '1em' }}
      />
),
  resumeLink:
    "https://drive.google.com/file/d/1TMJJJY_q4Zl8OgcBbkbIwlvQLdTLfHVf/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/NishankJain03",
  linkedin: "https://www.linkedin.com/in/nishank-jain-b16b52249/",
  gmail: "nishankjain122@gmail.com",
  display: true // Set true to display this section, defaults to false
};
// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "A. P. Shah Institute of Technology",
      logo: require("./assets/images/apsit_logo.png"),
      subHeader: "Bachelor's of Engineering in Information Technology",
      duration: "May 2020 - Present",
      desc: "Honor's Degree in AI-ML",
      descBullets: [
        "CGPA: 9.7",
      ]
    },
  ]
};
// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IoT Engineer - Edge device management",
      company: "Energos",
      companylogo: require("./assets/images/work_experience.png"),
      date: "Jan 2024 – Present",
      desc: "Managing edge devices to ensure continuous and reliable data streaming through proactive monitoring, troubleshooting, and maintenance.",
      descBullets: [
        "Executing firmware and software upgrades on edge devices, ensuring optimal performance and security.",
        "Providing essential development support by collaborating with the team, leveraging basic Node.js and Python skills for seamless operation.",
        "Implementing version control using Git, fostering collaboration within the team and maintaining code repositories.",
        "Demonstrating proficiency in Linux commands and shell scripting for efficient device management and maintenance.",
        "Maintaining accurate documentation for device configurations, upgrades, and troubleshooting steps, enhancing overall project transparency.",
        "Collaborating with cross-functional teams to address technical issues, contributing to improved device performance."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/Odin.png"),
      projectName: "Odin",
      projectDesc: "Odin is an attendance management system that utilises signature recognition technology to streamline the attendance taking process",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/NishankJain03/Odin"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Listen_Ai.png"),
      projectName: "Listen-AI",
      projectDesc: "AI-powered chatbot capable of providing assistance and support in multiple areas, such as domestic violence reporting, mental health counseling, career guidance, and emergency contacts.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/NishankJain03/ListenAI"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const projectSection = {
  title: emoji("Achievements And Certifications 🏆 "),

  achievementsCards: [
    {
      title: "IBM Hack Challenge Winner (2023)",
      subtitle:
        "We were the winning team among 33434 participants All Over India",
      image: require("./assets/images/ibm_logo.jpg"),
      imageAlt: "IBM",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/14W9pbk4QNkn6KhED4mVA7PiFcHY_P1J5/view?usp=sharing"
        }
      ]
    },
    {
      title: "APSIT AI-ML Club Ambassador",
      subtitle:
        "Assisted students in navigating a range of program and institutional resources, igniting their enthusiasm for actively pursuing educational opportunities",
      image: require("./assets/images/apsit_logo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: []
    },
  ],
  display: true // Set false to hide this section, defaults to true
};
const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Reach Out to me!!"
};
const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  greeting,
  socialMediaLinks,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  projectSection,
  contactInfo,
  isHireable
};
