export interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl: string[];
  hashTags: string[];
  githubUrl: string | null;
  appUrl: string | null;
}
export const projectsData: Project[] = [
  {
    id: 1,
    name: "OCCT Admin Portal",
    description: `🚌 Introducing a comprehensive dual-app solution for shuttle service management and user information. The Shuttle Company Admin Dashboard is a multifaceted platform offering features like route dispatching, training modules, admin controls, and website management, all seamlessly integrated with Chakra UI for a modern interface. In parallel, the Bus Route Status App provides real-time updates to shuttle users, leveraging socket.io for instant communication. 
    \n
    🚀 Key Features:
    Dispatch: Create, update, and manage shuttle routes with real-time status updates.
    Training: An upcoming feature for seamless employee training.
    Whiteboard: A planned interactive tool for operational planning and collaboration.
    Admin Control: Manage user roles, permissions, and website settings, including customizable login backgrounds.
    Settings: Personalize app experience with theme options (auto, light, dark).
    \n
    🌐 Tech Stack: Sequelize, Postgres, Node.js, Express, React, JavaScript, Chakra UI, AWS S3, Nodemailer.
    \n
    💡 Experience the future of shuttle management and user engagement with our cutting-edge apps, designed to streamline operations and enhance user experience. 🌟🔧`,
    imageUrl: [
      "/img/project/bus-app-dark-mode.png",
      "/img/project/bus-app-light-mode.png",
    ],
    hashTags: [
      "SOCKET.IO",
      "SEQUELIZE",
      "POSTGRES",
      "NODE",
      "EXPRESS",
      "REACT",
      "JAVASCRIPT",
      "CHAKRA UI",
    ],
    githubUrl: "https://github.com/khalil0525/shuttle-admin-app",
    appUrl: "https://bus-routing-portal-prod-18d532a8f2ff.herokuapp.com/",
  },
  {
    id: 2,
    name: "Sound Garden",
    description: `🎵 Introducing the latest version of my cutting-edge Music Sharing App, where the passion for music meets the brilliance of technology. This revamped app is powered by advanced CRUD operations, Firebase for seamless data management, and a rich tech stack including React, JavaScript, HTML, CSS, and innovative audio processing techniques. 🎧🎶
          🔍 New Features:
          Enhanced CRUD Functionality: Elevate your music-sharing experience with an optimized and intuitive CRUD system.
          Real-Time Collaboration: Enjoy synchronized music sharing and collaboration with friends in real-time.
          Customizable Audio Settings: Fine-tune your audio preferences with dynamic equalization and immersive audio processing.
          Mobile Responsive: Access your music library and favorite tracks on the go with our fully responsive design.
          🌐 Tech Stack: React, JavaScript, HTML, CSS, Firebase, Audio Processing.
          🎶 Discover the Harmony: Dive into a world of melodies, discover new tracks, and connect with fellow music enthusiasts. Embark on this extraordinary journey where technology and music merge seamlessly. 🚀💻🎶
          This updated description highlights the latest version of your Music Sharing App, focusing on the new features and improvements. Feel free to further customize it to fit your needs and capture the essence of your project.`,
    imageUrl: [
      "/img/project/soundgarden-home.png",
      "/img/project/soundgarden-home.png",
    ],
    hashTags: [
      "CRUD",
      "AUDIO",
      "FIREBASE",
      "REACT",
      "JAVASCRIPT",
      "HTML",
      "CSS",
    ],
    githubUrl: "https://github.com/khalil0525/sound-garden-app",
    appUrl: "https://sound-garden-eeeed.web.app/",
  },

  {
    id: 3,
    name: "Shoplocalforage",
    description: `🛍️ Description: ShopForage, a groundbreaking ethical community marketplace, is the result of a collaborative effort with our esteemed client. This innovative app empowers sellers within a close-knit community, fostering an environment that upholds strong ethics and unique product offerings. 🌿🌏🌟
      \n
          💼 Client Collaboration: Working closely with our valued client, we co-created ShopForage to align with their vision and values. Together, we developed a user-centric platform that cultivates trust and integrity, making it a go-to destination for conscious shoppers and sellers alike.
      \n	
          🌱 Ethical Practices: At the heart of ShopForage lies a commitment to ethical practices. Our platform prioritizes products that are sustainably sourced, eco-friendly, and ethically produced. Through conscious curation, we empower buyers to make responsible choices while supporting sellers who share our passion for social and environmental responsibility. ♻️🤝🌿
      \n	
          🏢 Community-Centric Approach: ShopForage celebrates the essence of community by fostering connections between sellers and buyers. With a user-friendly interface, seamless navigation, and personalized recommendations, we've created an engaging space where like-minded individuals can interact, exchange ideas, and promote conscious consumption.
      \n	
          🛒 Unique Product Offerings: Explore an array of handpicked products that reflect the diversity of our community. From handmade crafts to artisanal goods, every item on ShopForage tells a meaningful story. Our platform serves as a gateway to discovering one-of-a-kind treasures, each carrying its own legacy and cultural significance. 🎁🌍
      \n	
          🌐 Tech Stack: [Include the relevant technologies and tools you used for this project]
      \n	
          🌿 Embrace the Change: Join us on this journey toward a more sustainable and ethical future. Together, let's amplify the positive impact of conscious consumerism and build a thriving community marketplace that empowers both sellers and buyers. 🚀💚🛍️ `,
    imageUrl: ["/img/project/shopforage.jpg"],
    hashTags: ["CRUD", "TYPESCRIPT", "NEXT", "LOOPBACK", "SQL"],
    githubUrl: "Private",
    appUrl: "https://beta.shopforage.com/",
  },
  {
    id: 4,
    name: "KeraRX",
    description: "Shopify hair care store",
    imageUrl: ["/img/project/kerarx.jpg"],
    hashTags: ["SHOPIFY", "LIQUID", "JAVASCRIPT", "HTML", "CSS"],
    githubUrl: null,
    appUrl: "https://kerarxhaircare.com/",
  },
  {
    id: 5,
    name: "Two Tones",
    description: "Wordpress business website and booking site",
    imageUrl: ["/img/project/twotones.jpg"],
    hashTags: ["WORDPRESS", "HTML", "CSS", "PHP", "JAVSCRIPT"],
    githubUrl: null,
    appUrl: "https://twotonespianobar.com/",
  },
  {
    id: 6,
    name: "NudeU",
    description: "Shopify waxing supplies store",
    imageUrl: ["/img/project/nudeu.jpg"],
    hashTags: ["SHOPIFY", "LIQUID", "JAVASCRIPT", "HTML", "CSS"],
    githubUrl: null,
    appUrl: "https://sound-garden-eeeed.web.app/",
  },
  {
    id: 7,
    name: "Luminae",
    description: "Shopify hair care shop",
    imageUrl: ["/img/project/luminae.jpg"],
    hashTags: ["SHOPIFY", "LIQUID", "JAVASCRIPT", "HTML", "CSS"],
    githubUrl: null,
    appUrl: "https://luminaehaircare.com/",
  },
  {
    id: 8,
    name: "Joon",
    description: "Shopify hair care shop",
    imageUrl: ["/img/project/joon.jpg"],
    hashTags: ["SHOPIFY", "LIQUID", "JAVASCRIPT", "HTML", "CSS"],
    githubUrl: null,
    appUrl: "https://joonhaircare.com/",
  },
];
