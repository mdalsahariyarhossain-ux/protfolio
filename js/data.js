const DATA = {
  siteTitle: "Md Al Sahariyar Hossain | Full Stack Developer",

  /* ---------- Home section ---------- */
  name: "Md Al Sahariyar Hossain",
  role: "Full Stack Developer",
  intro:
    "I build full stack web applications with React, Node.js and MongoDB, focused on secure sign-in and real-time features.",
  photo: "assets/photo.jpg",

  // Small numbers under the buttons
  stats: [
    { value: "3", label: "projects" },
    { value: "6", label: "Languages" },
    { value: "B.Tech", label: "Computer Science" },
  ],

  // Three floating tags around your photo
  badges: [
    { title: "React & Node.js", text: "Frontend and backend" },
    { title: "MongoDB", text: "Database" },
    { title: "JWT & Socket.IO", text: "Auth and real-time" },
  ],

  /* ---------- About ---------- */
  about: {
    paragraphs: [
      "I am a Computer Science student and full stack developer. I have built an e-commerce platform and a real-time chat application from the database to the interface, using React.js, Node.js, Express and MongoDB.",
      "Both projects use JWT and bcrypt for authentication, with REST APIs and clean, responsive interfaces. I also take part in coding competitions, which keeps my problem-solving and algorithm skills sharp.",
    ],
    facts: [
      { title: "Full stack web development", text: "React.js, Node.js, Express, MongoDB" },
      { title: "Secure authentication", text: "JWT, bcrypt, role-based access" },
      { title: "Real-time applications", text: "Socket.IO messaging and presence" },
    ],
  },

  /* ---------- Technical skills ---------- */
  skills: [
    { group: "Languages", items: ["C++", "JavaScript", "C", "Python", "HTML", "CSS"] },
    { group: "Frameworks", items: ["React.js", "Next.js", "Express.js", "Tailwind CSS"] },
    { group: "Runtime", items: ["Node.js"] },
    { group: "Database", items: ["MongoDB"] },
    { group: "Developer tools", items: ["Git & GitHub", "VS Code"] },
  ],

  /* ---------- Projects ----------
     visual: "cart" or "chat" (the small animated picture)
     To add a project, copy one block and paste it after the last one. */
  projects: [
    {
      title: "E-Commerce Website",
      subtitle: "Full stack web application",
      visual: "cart",
      tags: ["React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
      links: [
        { label: "Frontend on GitHub", url: "https://github.com/mdalsahariyarhossain-ux/ecommerce_frontend" },
        { label: "Backend on GitHub", url: "https://github.com/mdalsahariyarhossain-ux/ecommerce_backend" },
        // { label: "Live demo", url: "https://your-site.com" },
      ],
      points: [
        "Built a full stack e-commerce application with React.js, Tailwind CSS, Node.js and MongoDB.",
        "Added secure sign-up, login and role-based access for admins and users, using JWT and bcrypt.",
        "Created a REST API in Node.js and Express for products, users, orders and the cart, with optimized routing and middleware.",
        "Designed responsive React pages for products, search filters, the shopping cart and checkout.",
        "Stored products, profiles, cart data and order history in MongoDB with Mongoose.",
      ],
    },
    {
      title: "Chat-Mate",
      subtitle: "Real-time chat web application",
      visual: "chat",
      tags: ["React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.IO"],
      links: [
        { label: "Frontend on GitHub", url: "https://github.com/mdalsahariyarhossain-ux/chatmate_frontend" },
        { label: "Backend on GitHub", url: "https://github.com/mdalsahariyarhossain-ux/chatmate_backend" },
      ],
      points: [
        "Built a real-time chat application with React.js, Tailwind CSS, Node.js, Express, MongoDB and Socket.IO.",
        "Protected routes and live communication with JWT and bcrypt authentication.",
        "Created a REST API for users, messages, conversations and profile data.",
        "Added instant messaging, typing indicators and online or offline presence with Socket.IO.",
        "Designed a responsive chat interface with profile panels, emoji support and smooth message scrolling.",
        "Saved users, messages and chat history in MongoDB with Mongoose.",
      ],
    },
    {
      title: "Crypto Security & Performance Analyzer",
      subtitle: "RSA vs ECC cryptography benchmarking platform",
      visual: "crypto",
      tags: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "RSA",
        "ECC",
        "Web Crypto API"
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/mdalsahariyarhossain-ux/crypto.git"
        },
        // { label: "Live demo", url: "https://your-site.com" },
      ],
      points: [
        "Built an interactive cryptography platform to compare RSA and ECC security algorithms through real-time performance testing.",
        "Implemented RSA key sizes of 1024, 2048 and 3072 bits, along with ECC P-256 and P-384 curves.",
        "Benchmarked key generation, encryption, decryption, digital signature and signature verification operations.",
        "Ran multiple benchmark iterations and calculated average execution times for reliable performance comparison.",
        "Created interactive performance charts and workload analysis views to visualize cryptographic performance.",
        "Added encryption and decryption tools for testing messages and files with a modern responsive interface.",
        "Developed an AI Advisor concept to analyze RSA and ECC characteristics and provide algorithm-selection guidance.",
      ],
    },
  ],

  /* ---------- Education ---------- */
  education: {
    school: "Techno Main Salt Lake, Kolkata",
    degree: "Bachelor of Technology in Computer Science",
    note: "Studying Computer Science, with seven semesters completed.",
    // cgpa: "Add your CGPA here",   <- remove the // to show it
    coursework: [
      "Data Structures and Algorithms",
      "Object Oriented Programming",
      "Operating Systems",
      "Database Management Systems",
    ],
    achievements:
      "Took part in coding competitions and earned recognition for problem-solving and algorithms.",
  },

  /* ---------- Contact ---------- */
  contact: {
    heading: "Let's connect",
    text: "Open to internships, full stack roles and freelance opportunities. Feel free to reach out via email, LinkedIn or GitHub.",
    email: "mdalsahariyarhossain@gmail.com",
    phone: "+91 7550971160",
    linkedin: "https://www.linkedin.com/in/md-al-sahariyar-hossain-752220357/",
    github: "https://github.com/mdalsahariyarhossain-ux",
  },

  /* ---------- CV file ----------
     Put your new CV PDF in the assets folder and change the file name here. */
  cv: {
    file: "assets/Md_Al_Sahariyar_Hossain_CV.pdf",
    downloadName: "Md_Al_Sahariyar_Hossain_CV.pdf",
  },
};
