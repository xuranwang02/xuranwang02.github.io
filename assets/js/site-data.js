/**
 * ============================================================================
 * Academic Homepage Configuration (Single Source of Truth)
 * Xuran Wang — https://xuranwang02.github.io/
 * ============================================================================
 */

window.SITE_DATA = {
  meta: {
    defaultLang: "en",
    title: "Xuran Wang — Academic Homepage",
    brand: "Homepage"
  },

  nav: [
    { id: "about-me", label: "About" },
    { id: "news", label: "News" },
    { id: "selected-research", label: "Research" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "honors-skills", label: "Honors" },
    { id: "acknowledgements", label: "Acknowledgements" },
    { id: "contact", label: "Contact" }
  ],

  profile: {
    avatar: "assets/images/avatar-photo-2.jpg",
    avatarAlt: "Portrait of Xuran Wang",
    name: "Xuran Wang",
    bio: "M.Eng. Student in Software Engineering · Institute of Software, Chinese Academy of Sciences (ISCAS)",
    links: [
      {
        icon: "location",
        label: "Beijing, China",
        url: ""
      },
      {
        icon: "scholar",
        label: "ISRC · ISCAS",
        url: "https://isrc.iscas.ac.cn/"
      },
      {
        icon: "github",
        label: "GitHub",
        url: "https://github.com/wangwenqingqq"
      },
      {
        icon: "email",
        label: "Email",
        url: "#contact"
      }
      // Optional links:
      // { icon: "scholar", label: "Google Scholar", url: "https://scholar.google.com/citations?user=YOUR_ID" },
      // { icon: "cv", label: "Curriculum Vitae", url: "assets/files/cv.pdf" }
    ]
  },

  about: {
    emoji: "",
    heading: "About Me",
    paragraphs: [
      'I am a Master\'s student in Software Engineering at the <a href="https://isrc.iscas.ac.cn/" target="_blank" rel="noopener">Intelligent Software Research Center (ISRC)</a>, <strong>Institute of Software, Chinese Academy of Sciences (ISCAS)</strong>, advised by <a href="https://people.ucas.edu.cn/~heng" target="_blank" rel="noopener">Prof. Heng Zhang</a>. Prior to that, I received my B.Eng. degree in Software Engineering from <strong>Northeastern University (NEU)</strong>, where I was honored with the National Scholarship and Outstanding Graduate of Liaoning Province.',
      "My work bridges high-performance systems engineering and modern AI workloads. Specifically, my research and engineering interests include:"
    ],
    interests: [
      "<strong>High-Performance Computing (HPC):</strong> GPU parallel computing (CUDA / Tensor Cores).",
      "<strong>Artificial Intelligence (AI):</strong> LLM post-training, retrieval-augmented generation (RAG), and efficient AI inference systems.",
      "<strong>Approximate Nearest Neighbor Search (ANNS):</strong> High-dimensional vector indexing, metric similarity search, and hardware-accelerated retrieval.",
      "<strong>Embodied AI:</strong> Vision-Language-Action (VLA) models, World Models, and Agentic Robotics."
    ],
    closingNote:
      "Feel free to reach out for research collaborations, technical discussions, or internship / academic exchanges."
  },

  news: {
    emoji: "🔥",
    heading: "News",
    items: [
      {
        date: "2026",
        html: 'Our paper <a href="https://sc26.supercomputing.org/proceedings/papers/paper_pages/pap257.html" target="_blank" rel="noopener"><em>BTC-TC: Exact GPU Triangle Counting with Hybrid Bit Tensor Cores and CUDA Cores</em></a> was accepted to <strong>SC 2026 (CCF-A)</strong>.'
      },
      {
        date: "Jan 2026",
        html: 'Representing ISCAS (Team Xuxiaofan Yuanhang), won the <strong>Excellence Award</strong> in the “Object-Search Navigation” Track and <strong>1st Place</strong> in the “Developer Talent Award” at the <a href="https://irobotdeveloper.csdn.net/campcenter" target="_blank" rel="noopener">Intelligent Robot Developer Competition (RoboMind Winter Camp)</a>.'
      },
      {
        date: "Sep 2025",
        html: "Joined the <strong>Institute of Software, Chinese Academy of Sciences (ISCAS)</strong> as a Master's student in Software Engineering (Recommended Admission)."
      },
      {
        date: "Jun 2025",
        html: "Graduated from <strong>Northeastern University (NEU)</strong> with a B.Eng. in Software Engineering and honored as <strong>Outstanding Graduate of Liaoning Province</strong>."
      },
      {
        date: "2025",
        html: 'Our paper <a href="https://doi.org/10.1109/icde65448.2025.00082" target="_blank" rel="noopener"><em>TeMatch: A Fast Temporal Subgraph Matching Framework with Temporal-Aware Subgraph Matching Algorithms</em></a> was published in <strong>ICDE 2025 (CCF-A)</strong>.'
      }
    ]
  },

  publications: {
    emoji: "📝",
    heading: "Selected Research",
    items: [
      {
        badge: "SC 2026",
        image: "assets/images/paper-btctc.png",
        imageAlt: "BTC-TC hybrid Bit Tensor Core and CUDA Core GPU triangle counting diagram",
        title: "BTC-TC: Exact GPU Triangle Counting with Hybrid Bit Tensor Cores and CUDA Cores",
        titleUrl: "https://sc26.supercomputing.org/proceedings/papers/paper_pages/pap257.html",
        authors: [
          { name: "Kaifan Jia" },
          { name: "Yongchun Jiang" },
          { name: "Zhihao Ling" },
          { name: "Minghui Zhang" },
          { name: "Xuran Wang", isOwner: true },
          { name: "Ran Bao" },
          { name: "Haonan Zou" },
          { name: "Heng Zhang", note: "*" }
        ],
        notes: [
          "<em>The International Conference for High Performance Computing, Networking, Storage, and Analysis (SC 2026, CCF-A)</em>."
        ],
        links: [
          { label: "SC'26 Proceedings", url: "https://sc26.supercomputing.org/proceedings/papers/paper_pages/pap257.html" }
        ]
      },
      {
        badge: "ICDE 2025",
        image: "assets/images/paper-tematch.png",
        imageAlt: "TeMatch temporal subgraph matching architecture diagram",
        title: "TeMatch: A Fast Temporal Subgraph Matching Framework with Temporal-Aware Subgraph Matching Algorithms",
        titleUrl: "https://doi.org/10.1109/icde65448.2025.00082",
        authors: [
          { name: "Chengying Huan" },
          { name: "Heng Zhang" },
          { name: "Yongchao Liu" },
          { name: "Likang Chen" },
          { name: "Xuran Wang", isOwner: true },
          { name: "Yongchun Jiang" },
          { name: "Shaonan Ma" },
          { name: "Yanjun Wu" }
        ],
        notes: [
          "<em>IEEE International Conference on Data Engineering (ICDE 2025, CCF-A)</em>."
        ],
        links: [
          { label: "DOI / IEEE Xplore", url: "https://doi.org/10.1109/icde65448.2025.00082" }
        ]
      }
    ]
  },

  projects: {
    emoji: "🛠️",
    heading: "Selected Projects",
    items: []
  },

  experience: {
    emoji: "💼",
    heading: "Experience",
    groups: [
      {
        title: "Research Experience",
        items: [
          {
            logo: "assets/images/logo-cas.png",
            logoClass: "round",
            active: true,
            org: "Institute of Software, Chinese Academy of Sciences (ISCAS)",
            period: "2024.10 — Present",
            role: "Graduate Researcher · High-Performance Graph & GPU Computing Systems",
            lab: { name: "ISRC", url: "https://isrc.iscas.ac.cn/" }
          },
          {
            logo: "assets/images/logo-cas.png",
            logoClass: "round",
            active: false,
            org: "Institute of Software, Chinese Academy of Sciences (ISCAS)",
            period: "2023.06 — 2024.10",
            role: "Research Intern · Fast Temporal Subgraph Matching Framework (TeMatch, ICDE 2025)",
            lab: { name: "ISRC", url: "https://isrc.iscas.ac.cn/" }
          }
        ]
      },
      {
        title: "Education",
        items: [
          {
            logo: "assets/images/logo-cas.png",
            logoClass: "round",
            active: true,
            org: "Institute of Software, Chinese Academy of Sciences (ISCAS)",
            period: "2025.09 — 2028.06 (expected)",
            role: "M.Eng. in Software Engineering",
            lab: { name: "ISRC", url: "https://isrc.iscas.ac.cn/" }
          },
          {
            logo: "assets/images/logo-neu.png",
            logoClass: "round",
            active: false,
            org: "Northeastern University (NEU)",
            period: "2021.09 — 2025.06",
            role: "B.Eng. in Software Engineering",
            lab: null
          }
        ]
      }
    ]
  },

  honorsSkills: {
    emoji: "🏆",
    heading: "Honors & Awards",
    honorsTitle: null,
    honors: [
      '<strong>1st Place, “Developer Talent Award” &amp; Excellence Award (“Object-Search Navigation” Track)</strong>, <a href="https://irobotdeveloper.csdn.net/campcenter" target="_blank" rel="noopener">Intelligent Robot Developer Competition</a> (Representing ISCAS, Team Xuxiaofan Yuanhang, Jan 2026)',
      "<strong>Outstanding Graduate of Liaoning Province</strong> (Jun 2025)",
      "<strong>National Scholarship</strong> (2025)"
    ],
    skillsTitle: null,
    skills: []
  },

  acknowledgements: {
    emoji: "🤝",
    heading: "Acknowledgements",
    intro: "I am deeply grateful to the mentors and friends who have guided, inspired, and supported me throughout my research journey.",
    sortAlphabetically: true,
    note: "Listed alphabetically by first name.",
    people: [
      {
        id: "heng-zhang",
        name: "Heng Zhang",
        url: "https://people.ucas.edu.cn/~heng",
        affiliation: "Associate Professor · Institute of Software, Chinese Academy of Sciences (ISCAS)",
        text: "My deepest gratitude goes to my advisor, Prof. Heng Zhang, for his constant encouragement, thoughtful mentorship, and trust throughout my graduate studies at ISCAS. His broad vision in high-performance computing and intelligent systems has profoundly shaped how I identify core system bottlenecks and pursue impactful research."
      },
      {
        id: "chengying-huan",
        name: "Chengying Huan",
        url: "https://huanchengying.github.io/",
        affiliation: "Assistant Professor (Tenure-Track) · School of Computer Science, Nanjing University",
        text: "Special thanks to Prof. Chengying Huan for his dedicated and insightful guidance on my temporal subgraph matching research (TeMatch, ICDE 2025). From theoretical algorithm design to rigorous systems optimization and paper writing, his mentorship played an indispensable role in helping me grow as a systems researcher."
      },
      {
        id: "changsheng-zhang",
        name: "Changsheng Zhang",
        url: "https://faculty.neu.edu.cn/zhangchangsheng/zh_CN/index.htm",
        affiliation: "Professor · Software College, Northeastern University (NEU)",
        text: "I am sincerely grateful to my undergraduate advisor, Prof. Changsheng Zhang, for his patient supervision and valuable guidance throughout my undergraduate thesis at Northeastern University. His rigor and encouragement laid a solid foundation for my subsequent graduate research."
      },
      {
        id: "yiran-zhu",
        name: "Yiran Zhu",
        url: "https://yiranzhu06.github.io/",
        affiliation: "Research Intern · LivSyn Robotics | Incoming Master's Student · BIVLab, USTC",
        text: "Both a mentor and a cherished friend along my research path, Yiran has always met every conversation with genuine warmth and generosity. His vibrant, original research ideas, sharp perspective on emerging technologies, and candid ICLR rebuttal insights have inspired me time and again."
      },
      {
        id: "kaifan-jia",
        name: "Kaifan Jia",
        url: "",
        affiliation: "Senior Labmate · ISRC, Institute of Software, Chinese Academy of Sciences (ISCAS)",
        text: "Both a senior mentor and a close friend in the lab, Kaifan opened the door for me to high-performance computing and AI. His lively, sharp research instincts and generosity in sharing frontier ideas have continuously sparked new directions in my own work."
      },
      {
        id: "yongchun-jiang",
        name: "Yongchun Jiang",
        url: "",
        affiliation: "Senior Labmate · ISRC, Institute of Software, Chinese Academy of Sciences (ISCAS)",
        text: "Both a senior mentor and a trusted friend, Yongchun introduced me to temporal graph research and profoundly shaped the way I think about science. His emphasis on rigorous research logic, disciplined self-questioning, and the underlying craft of academic writing has left a lasting mark on how I approach every problem and paper."
      }
    ]
  },

  contact: {
    emoji: "📧",
    heading: "Contact",
    intro: "I am always glad to connect regarding research collaborations, high-performance AI systems, or academic exchanges.",
    emailUser: "wangxuran25",
    emailDomain: "mails.ucas.ac.cn",
    formspreeEndpoint: "",
    ui: {
      showEmail: "Show Email",
      hideEmail: "Hide Email",
      copy: "Copy",
      copied: "Copied!",
      leaveMessage: "Leave a Message",
      closeMessage: "Close Form",
      nameLabel: "Name",
      nameDefault: "Anonymous",
      emailLabel: "Email (optional)",
      emailPlaceholder: "you@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Write your message here...",
      sendButton: "Send Message",
      sending: "Sending...",
      sentSuccess: "Message sent. Thank you for reaching out!",
      sentError: "Submission failed. Please try again or email directly.",
      emptyError: "Please enter a message before sending.",
      notConfigured:
        "Formspree endpoint is not configured yet. Set contact.formspreeEndpoint in assets/js/site-data.js to receive messages."
    }
  }
};
