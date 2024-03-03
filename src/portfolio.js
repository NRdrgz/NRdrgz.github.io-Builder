/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nico's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products to create impact.",
  og: {
    title: "Nicolas Rodriguez Portfolio",
    type: "website",
    url: "https://NRdrgz.github.io",
  },
};

//Home Page
const greeting = {
  title: "Nicolas Rodriguez",
  logo_name: "Welcome",
  nickname: "Nico",
  subTitle:
    "A passionate individual who always thrives to work on end to end products to create impact.",
  /*resumeLink:
    "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",*/
  githubProfile: "https://github.com/NRdrgz",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/NRdrgz",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nicolasrdrgz/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:nicolasrdrgz@protonmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?f=brands&s=solid
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Team Leader and Manager",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building from scratch and led an international team of 6 Data full stack profiles",
        "⚡ Technical Products & Projects Manager",
        "⚡ Blend between defining strategic goals and hands-on operations",
        "⚡ Communication with business leaders, technical or non-technical, to influence strategic decision-making",
      ],
      softwareSkills: [
        {
          skillName: "Management",
          fontAwesomeClassname: "fluent-mdl2:workforce-management",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Coaching & Leading",
          fontAwesomeClassname: "mdi:plant-outline",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Strategy",
          fontAwesomeClassname: "material-symbols:strategy",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Data Science and AI",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various use cases with Business impacts",
        "⚡ Experience of working with Machine Learning and Deep learning models",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Data Analysis for Business",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Working with Growth or Product Business Units to understand their needs",
        "⚡ Definition of Business KPIs: LTV, ROAS, Retention, Effective Margin, etc.",
        "⚡ Statistical and AB Test analysis",
        "⚡ Building Tableau, Looker or PowerBI dashboards and tools used by 600+ people",
        "⚡ Following data quality and accuracy",
      ],
      softwareSkills: [
        {
          skillName: "Growth",
          fontAwesomeClassname: "fluent:arrow-growth-24-filled",
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
        },
        {
          skillName: "Looker",
          fontAwesomeClassname: "logos:looker-icon",
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "oui:vis-query-sql",
        },
        {
          skillName: "AB Test",
          fontAwesomeClassname: "mdi:ab-testing",
        },
      ],
    },
    {
      title: "Data Engineering",
      fileName: "DesignImg",
      skills: [
        "⚡ Design, build and manage data pipelines and ETL processes",
        "⚡ Build DAG with Airflow to ingest raw data from AWS S3, GCP, Databricks or Snowflake",
        "⚡ Build intermediate tables with DBT in SQL",
        "⚡ Ensure the security, integrity, and compliance of data according to industry and company standards"
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "skill-icons:aws-light",
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "skill-icons:gcp-light",
        },
        {
          skillName: "Airflow",
          fontAwesomeClassname: "logos:airflow-icon",
        },
        {
          skillName: "Databricks",
          fontAwesomeClassname: "simple-icons:databricks",
        },
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "logos:snowflake-icon",
        },
        {
          skillName: "DBT",
          fontAwesomeClassname: "logos:dbt-icon",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    /*{
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },*/
  ],
};

const degrees = {
  degrees: [
    {
      title: "Georgia Institute of Technology",
      subtitle: "M.Sc in Aerospace Engineering + Specialization in Data Science",
      logo_path: "gatech.png",
      alt_name: "GT",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ Double Degree in Aerospace Engineering with specialization in Data Science and Machine Learning",
        "⚡ Master Thesis: Improvement of Landing Safety with Machine Learning",
        "⚡ General Physics, Advanced Mathematics, Machine Learning, Optimization, Business Management, Advanced Design Method",
      ],
      website_link: "https://ae.gatech.edu/",
    },
    {
      title: "ISAE Supaero",
      subtitle: "M.Sc in Aerospace Engineering",
      logo_path: "isae.png",
      alt_name: "ISAE",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ General Physics, Advanced Mathematics, Mechanical Engineering, Propulsion, Space Mechanics, Artificial Intelligence",
      ],
      website_link: "https://www.isae-supaero.fr/en/",
    },
  ],
};

const certifications = {
  certifications: [
    /*{
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },*/
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Team Lead & Manager Data",
          company: "Voodoo",
          company_url: "http://voodoo.io/",
          logo_path: "voodoo.jpeg",
          duration: "2022 - Now",
          location: "Paris, France",
          description:
            "Built from scratch and leading an international team of 6 Data Full stack profiles working for the Growth Business Unit. Blend between defining strategic goals and hands-on operations: Data Engineering, Data Science and Data Analytics.",
        
        },
        {
          title: "Analytics Engineer",
          company: "Voodoo",
          company_url: "http://voodoo.io/",
          logo_path: "voodoo.jpeg",
          duration: "2020 - 2022",
          location: "Paris, France",
          description:
            "Data Full Stack role. Building models, tables, analyses and tools used by 600+ people for a $800M revenue portfolio. Full ownership of user behavior predictive models, from the source of data to the product deployment.",
          color: "#9b1578",
        },
        {
          title: "Data Consultant",
          company: "Simon Kucher & Partners",
          company_url: "https://www.simon-kucher.com/en",
          logo_path: "skp.jpeg",
          duration: "2020",
          location: "Paris, France",
          description:
            "Project management and creation of dashboards and analysis reports for the customers. Predictive models for restaurants occupancy and dynamic pricing.",
          color: "#fc1f20",
        },
        {
          title: "Graduate Research Associate",
          company: "Aerospace Systems Design Laboratory",
          company_url: "https://www.asdl.gatech.edu/",
          logo_path: "asdl.jpeg",
          duration: "2018 - 2019",
          location: "Atlanta, USA",
          description:
            "Grant University Project: NASA: Hybrid Electric Architecture. Design Data Optimisation of a hybrid electric architecture for a 50-passenger commercial aircraft.",
          color: "#fc1f20",
        },
      ],
    },
    
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Master Thesis: Improvement of Landing Safety with Machine Learning",
      createdAt: "November 2020",
      description: "Project in collaboration with Air Line companies. Training of Random Forest and Neural Network models over thousands of flight hours to predict aircraft landing distance.",
      url:
        "https://www.sciencedirect.com/science/article/abs/pii/S0968090X20307245",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "address_image.svg",
    description:
      "Let's Chat!",
  },
  blogSection: {
    
  },
  addressSection: {
    
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
