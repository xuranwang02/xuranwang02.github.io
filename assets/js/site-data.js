/**
 * ============================================================================
 * 个人学术主页配置文件 (Single Source of Truth)
 * ----------------------------------------------------------------------------
 * 王旭然 (Xuran Wang) — 个人学术主页数据配置（中英双语）
 * 修改本文件即可更新全部文案、论文、项目、经历、荣誉与联系方式。
 * ============================================================================
 */

window.SITE_DATA = {
  meta: {
    defaultLang: "en", // 默认语言："en" 或 "zh"
    title: {
      en: "Xuran Wang (王旭然) — Academic Homepage",
      zh: "王旭然 (Xuran Wang) — 个人学术主页"
    },
    brand: {
      en: "Homepage",
      zh: "个人主页"
    }
  },

  nav: [
    { id: "about-me", label: { en: "About", zh: "简介" } },
    { id: "news", label: { en: "News", zh: "动态" } },
    { id: "selected-research", label: { en: "Research", zh: "代表研究" } },
    { id: "projects", label: { en: "Projects", zh: "项目经历" } },
    { id: "experience", label: { en: "Experience", zh: "经历" } },
    { id: "honors-skills", label: { en: "Honors", zh: "荣誉" } },
    { id: "acknowledgements", label: { en: "Acknowledgements", zh: "致谢" } },
    { id: "contact", label: { en: "Contact", zh: "联系" } }
  ],

  profile: {
    avatar: "assets/images/avatar-photo-2.jpg",
    avatarAlt: {
      en: "Portrait of Xuran Wang",
      zh: "王旭然个人照片"
    },
    name: {
      en: "Xuran Wang (王旭然)",
      zh: "王旭然"
    },
    bio: {
      en: "M.Eng. Student in Software Engineering · Institute of Software, Chinese Academy of Sciences (ISCAS)",
      zh: "软件工程在读硕士 · 中国科学院软件研究所（ISCAS）"
    },
    links: [
      {
        icon: "location",
        label: { en: "Beijing, China", zh: "中国 · 北京" },
        url: ""
      },
      {
        icon: "scholar",
        label: { en: "ISCAS · Software Engineering", zh: "中国科学院软件研究所" },
        url: ""
      },
      {
        icon: "github",
        label: { en: "GitHub", zh: "GitHub" },
        url: "https://github.com/wangwenqingqq"
      },
      {
        icon: "email",
        label: { en: "Email", zh: "联系邮箱" },
        url: "#contact"
      }
      // 如有 Google Scholar / CV 链接，取消下方注释并填入即可：
      // { icon: "scholar", label: { en: "Google Scholar", zh: "Google Scholar" }, url: "https://scholar.google.com/citations?user=YOUR_ID" },
      // { icon: "cv", label: { en: "Curriculum Vitae", zh: "个人简历 (CV)" }, url: "assets/files/cv.pdf" }
    ]
  },

  about: {
    emoji: "",
    heading: {
      en: "About Me",
      zh: "关于我"
    },
    paragraphs: {
      en: [
        'I am a Master\'s student in Software Engineering at the <strong>Institute of Software, Chinese Academy of Sciences (ISCAS)</strong>, advised by <a href="https://people.ucas.edu.cn/~heng" target="_blank" rel="noopener">Prof. Heng Zhang</a>. Prior to that, I received my B.Eng. degree in Software Engineering from <strong>Northeastern University (NEU)</strong>, where I was honored with the National Scholarship and Outstanding Graduate of Liaoning Province.',
        "My work bridges high-performance systems engineering and modern AI workloads. Specifically, my research and engineering interests include:"
      ],
      zh: [
        '我目前就读于<strong>中国科学院软件研究所（ISCAS）</strong>软件工程专业（硕士研究生），师从 <a href="https://people.ucas.edu.cn/~heng" target="_blank" rel="noopener">张珩</a> 副研究员。本科毕业于<strong>东北大学（985）</strong>软件工程专业，曾获国家奖学金、辽宁省优秀毕业生等荣誉。',
        "我的研究与工程实践聚焦于高性能系统架构与前沿智能计算的交叉领域，目前主要关注以下方向："
      ]
    },
    interests: {
      en: [
        "<strong>High-Performance Computing (HPC):</strong> GPU parallel computing (CUDA / Tensor Cores).",
        "<strong>Artificial Intelligence (AI):</strong> LLM post-training, retrieval-augmented generation (RAG), and efficient AI inference systems.",
        "<strong>Approximate Nearest Neighbor Search (ANNS):</strong> High-dimensional vector indexing, metric similarity search, and hardware-accelerated retrieval.",
        "<strong>Embodied AI:</strong> Vision-Language-Action (VLA) models, World Models, and Agentic Robotics."
      ],
      zh: [
        "<strong>高性能计算（HPC）：</strong>GPU 并行计算（CUDA / Tensor Core）。",
        "<strong>人工智能（AI）：</strong>大模型微调与后训练、检索增强生成（RAG）以及高效 AI 推理系统。",
        "<strong>高维向量近似检索（ANNS）：</strong>高维向量索引结构、度量空间相似度搜索与硬件加速检索。",
        "<strong>具身智能（Embodied AI）：</strong>视觉-语言-动作模型（VLA）、世界模型（World Models）与 Agentic Robotics。"
      ]
    },
    closingNote: {
      en: "Feel free to reach out for research collaborations, technical discussions, or internship / academic exchanges.",
      zh: "欢迎就科研课题、高性能系统优化、大模型推理或具身智能工程实践随时与我交流合作。"
    }
  },

  news: {
    emoji: "🔥",
    heading: {
      en: "News",
      zh: "最新动态"
    },
    items: [
      {
        date: { en: "2026", zh: "2026年" },
        html: {
          en: 'Our paper <a href="https://sc26.supercomputing.org/proceedings/papers/paper_pages/pap257.html" target="_blank" rel="noopener"><em>BTC-TC: Exact GPU Triangle Counting with Hybrid Bit Tensor Cores and CUDA Cores</em></a> was accepted to <strong>SC 2026 (CCF-A)</strong>.',
          zh: '合作论文 <a href="https://sc26.supercomputing.org/proceedings/papers/paper_pages/pap257.html" target="_blank" rel="noopener"><em>BTC-TC: Exact GPU Triangle Counting with Hybrid Bit Tensor Cores and CUDA Cores</em></a> 被高性能计算顶会 <strong>SC 2026（CCF-A）</strong>录用。'
        }
      },
      {
        date: { en: "Jan 2026", zh: "2026年1月" },
        html: {
          en: 'Representing ISCAS (Team “旭小帆远航”), won the <strong>Excellence Award</strong> in the “Object-Search Navigation” Track and <strong>1st Place</strong> in the “Developer Talent Award” at the <a href="https://irobotdeveloper.csdn.net/campcenter" target="_blank" rel="noopener">Intelligent Robot Developer Competition (RoboMind Winter Camp)</a>.',
          zh: '代表中国科学院软件研究所参赛（队伍“旭小帆远航”），在<a href="https://irobotdeveloper.csdn.net/campcenter" target="_blank" rel="noopener">智能机器人开发者大赛社区</a>（RoboMind 冬令营）获<strong>“寻物导航”赛题优秀奖</strong>及<strong>“开发达人奖”第一名</strong>。'
        }
      },
      {
        date: { en: "Sep 2025", zh: "2025年9月" },
        html: {
          en: "Joined the <strong>Institute of Software, Chinese Academy of Sciences (ISCAS)</strong> as a Master's student in Software Engineering (Recommended Admission).",
          zh: "推免入学<strong>中国科学院软件研究所（ISCAS）</strong>，攻读软件工程硕士学位。"
        }
      },
      {
        date: { en: "Jun 2025", zh: "2025年6月" },
        html: {
          en: "Graduated from <strong>Northeastern University (NEU)</strong> with a B.Eng. in Software Engineering and honored as <strong>Outstanding Graduate of Liaoning Province</strong>.",
          zh: "毕业于<strong>东北大学</strong>软件工程专业，获评<strong>辽宁省优秀毕业生</strong>。"
        }
      },
      {
        date: { en: "2025", zh: "2025年" },
        html: {
          en: 'Our paper <a href="https://doi.org/10.1109/icde65448.2025.00082" target="_blank" rel="noopener"><em>TeMatch: A Fast Temporal Subgraph Matching Framework with Temporal-Aware Subgraph Matching Algorithms</em></a> was published in <strong>ICDE 2025 (CCF-A)</strong>.',
          zh: '论文 <a href="https://doi.org/10.1109/icde65448.2025.00082" target="_blank" rel="noopener"><em>TeMatch: A Fast Temporal Subgraph Matching Framework with Temporal-Aware Subgraph Matching Algorithms</em></a> 发表在数据库顶会 <strong>ICDE 2025（CCF-A）</strong>。'
        }
      }
    ]
  },

  publications: {
    emoji: "📝",
    heading: {
      en: "Selected Research",
      zh: "代表性研究"
    },
    items: [
      {
        badge: "SC 2026",
        image: "assets/images/paper-btctc.png",
        imageAlt: {
          en: "BTC-TC hybrid Bit Tensor Core and CUDA Core GPU triangle counting diagram",
          zh: "BTC-TC 混合 Bit Tensor Core 与 CUDA Core GPU 三角形计数架构示意图"
        },
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
        notes: {
          en: [
            "<em>The International Conference for High Performance Computing, Networking, Storage, and Analysis (SC 2026, CCF-A)</em>."
          ],
          zh: [
            "<em>国际高性能计算、网络、存储与分析大会（SC 2026，CCF-A）</em>。"
          ]
        },
        links: [
          { label: "SC'26 Proceedings", url: "https://sc26.supercomputing.org/proceedings/papers/paper_pages/pap257.html" }
        ]
      },
      {
        badge: "ICDE 2025",
        image: "assets/images/paper-tematch.png",
        imageAlt: {
          en: "TeMatch temporal subgraph matching architecture diagram",
          zh: "TeMatch 时序子图匹配架构示意图"
        },
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
        notes: {
          en: [
            "<em>IEEE International Conference on Data Engineering (ICDE 2025, CCF-A)</em>."
          ],
          zh: [
            "<em>IEEE 国际数据工程大会（ICDE 2025，CCF-A）</em>。"
          ]
        },
        links: [
          { label: "DOI / IEEE Xplore", url: "https://doi.org/10.1109/icde65448.2025.00082" }
        ]
      }
    ]
  },

  projects: {
    emoji: "🛠️",
    heading: {
      en: "Selected Projects",
      zh: "代表性工程与竞赛项目"
    },
    items: []
  },

  experience: {
    emoji: "💼",
    heading: {
      en: "Experience",
      zh: "科研与教育经历"
    },
    groups: [
      {
        title: { en: "Research Experience", zh: "科研经历" },
        items: [
          {
            logo: "assets/images/logo-cas.png",
            logoClass: "round",
            active: true,
            org: {
              en: "Institute of Software, Chinese Academy of Sciences (ISCAS)",
              zh: "中国科学院软件研究所（ISCAS）"
            },
            period: {
              en: "2024.10 — Present",
              zh: "2024.10 — 至今"
            },
            role: {
              en: "Graduate Researcher · High-Performance Graph & GPU Computing Systems",
              zh: "科研成员 · 高性能图计算与 GPU 并行系统研究"
            },
            lab: null
          },
          {
            logo: "assets/images/logo-cas.png",
            logoClass: "round",
            active: false,
            org: {
              en: "Institute of Software, Chinese Academy of Sciences (ISCAS)",
              zh: "中国科学院软件研究所（ISCAS）"
            },
            period: {
              en: "2023.06 — 2024.10",
              zh: "2023.06 — 2024.10"
            },
            role: {
              en: "Research Intern · Fast Temporal Subgraph Matching Framework (TeMatch, ICDE 2025)",
              zh: "科研实习生 · 高效时序子图匹配框架（TeMatch，ICDE 2025）"
            },
            lab: null
          }
        ]
      },
      {
        title: { en: "Education", zh: "教育背景" },
        items: [
          {
            logo: "assets/images/logo-cas.png",
            logoClass: "round",
            active: true,
            org: {
              en: "Institute of Software, Chinese Academy of Sciences (ISCAS)",
              zh: "中国科学院软件研究所（保研）"
            },
            period: {
              en: "2025.09 — 2028.06 (expected)",
              zh: "2025.09 — 2028.06（预计）"
            },
            role: {
              en: "M.Eng. in Software Engineering",
              zh: "软件工程 硕士研究生"
            },
            lab: null
          },
          {
            logo: "assets/images/logo-neu.png",
            logoClass: "round",
            active: false,
            org: {
              en: "Northeastern University (NEU)",
              zh: "东北大学（985）"
            },
            period: {
              en: "2021.09 — 2025.06",
              zh: "2021.09 — 2025.06"
            },
            role: {
              en: "B.Eng. in Software Engineering",
              zh: "软件工程 工学学士"
            },
            lab: null
          }
        ]
      }
    ]
  },

  honorsSkills: {
    emoji: "🏆",
    heading: {
      en: "Honors & Awards",
      zh: "荣誉奖项"
    },
    honorsTitle: null,
    honors: {
      en: [
        "<strong>National Scholarship</strong> (国家奖学金)",
        "<strong>Outstanding Graduate of Liaoning Province</strong> (辽宁省优秀毕业生)",
        '<strong>1st Place, “Developer Talent Award” &amp; Excellence Award (“Object-Search Navigation” Track)</strong>, <a href="https://irobotdeveloper.csdn.net/campcenter" target="_blank" rel="noopener">Intelligent Robot Developer Competition</a> (Representing ISCAS, Team “旭小帆远航”, Jan 2026)'
      ],
      zh: [
        "<strong>国家奖学金</strong>",
        "<strong>辽宁省优秀毕业生</strong>",
        '<strong>“开发达人奖”第一名 &amp; “寻物导航”赛题优秀奖</strong> · <a href="https://irobotdeveloper.csdn.net/campcenter" target="_blank" rel="noopener">智能机器人开发者大赛社区</a>（代表中国科学院软件研究所，队伍“旭小帆远航”，2026.01）'
      ]
    },
    skillsTitle: null,
    skills: {
      en: [],
      zh: []
    }
  },

  acknowledgements: {
    emoji: "🤝",
    heading: {
      en: "Acknowledgements",
      zh: "致谢"
    },
    intro: {
      en: "I am deeply grateful to the mentors who have guided, inspired, and supported me throughout my research journey.",
      zh: "在科研之路上，衷心感谢给予我悉心指导、启发与支持的各位老师。"
    },
    sortAlphabetically: true,
    note: {
      en: "Listed alphabetically by first name.",
      zh: "按姓名首字母顺序排列。"
    },
    people: [
      {
        id: "heng-zhang",
        name: "Heng Zhang",
        nameZh: "张珩 (Heng Zhang)",
        url: "https://people.ucas.edu.cn/~heng",
        affiliation: {
          en: "Associate Professor · Institute of Software, Chinese Academy of Sciences (ISCAS)",
          zh: "副研究员 · 中国科学院软件研究所（ISCAS）"
        },
        text: {
          en: "My deepest gratitude goes to my advisor, Prof. Heng Zhang, for his constant encouragement, thoughtful mentorship, and trust throughout my graduate studies at ISCAS. His broad vision in high-performance computing and intelligent systems has profoundly shaped how I identify core system bottlenecks and pursue impactful research.",
          zh: "由衷感谢我的导师张珩老师在中科院软件所科研与学习期间一直以来给予我的悉心指导、充分信任与大力支持。张老师在高性能计算与智能系统领域的深厚造诣和宽广视野，深刻影响了我发现关键系统瓶颈与开展扎实研究的方式。"
        }
      },
      {
        id: "chengying-huan",
        name: "Chengying Huan",
        nameZh: "宦成颖 (Chengying Huan)",
        url: "https://huanchengying.github.io/",
        affiliation: {
          en: "Assistant Professor (Tenure-Track) · School of Computer Science, Nanjing University",
          zh: "特聘研究员（助理教授）· 南京大学计算机学院"
        },
        text: {
          en: "Special thanks to Prof. Chengying Huan for his dedicated and insightful guidance on my temporal subgraph matching research (TeMatch, ICDE 2025). From theoretical algorithm design to rigorous systems optimization and paper writing, his mentorship played an indispensable role in helping me grow as a systems researcher.",
          zh: "特别感谢宦成颖老师在我开展时序图匹配研究（TeMatch，ICDE 2025）过程中给予的倾囊相授与细致指导。从算法理论创新、底层系统性能打磨到论文撰写，宦老师严谨的学术态度与高水准的科研指导令我受益匪浅。"
        }
      },
      {
        id: "changsheng-zhang",
        name: "Changsheng Zhang",
        nameZh: "张长胜 (Changsheng Zhang)",
        url: "https://faculty.neu.edu.cn/zhangchangsheng/zh_CN/index.htm",
        affiliation: {
          en: "Professor · Software College, Northeastern University (NEU)",
          zh: "教授、博士生导师 · 东北大学软件学院"
        },
        text: {
          en: "I am sincerely grateful to my undergraduate advisor, Prof. Changsheng Zhang, for his patient supervision and valuable guidance throughout my undergraduate thesis at Northeastern University. His rigor and encouragement laid a solid foundation for my subsequent graduate research.",
          zh: "衷心感谢我的本科导师张长胜教授在东北大学毕业设计期间给予我的悉心指导与热忱鼓励。张老师严谨的治学态度和扎实的科研训练，为我后续的研究生学术之路打下了坚实基础。"
        }
      }
    ]
  },

  contact: {
    emoji: "📧",
    heading: {
      en: "Contact",
      zh: "联系方式"
    },
    intro: {
      en: "I am always glad to connect regarding research collaborations, high-performance AI systems, or academic exchanges.",
      zh: "欢迎就科研合作、高性能计算与 AI 系统、具身智能或学术交流随时与我联系。"
    },
    // 邮箱拆分存储，点击 "Show Email" 后动态拼接防爬虫
    emailUser: "wangxuran25",
    emailDomain: "mails.ucas.ac.cn",
    // 前往 https://formspree.io 免费创建表单并将地址填入此处即可启用真实在线留言
    formspreeEndpoint: "",
    ui: {
      showEmail: { en: "Show Email", zh: "显示邮箱" },
      hideEmail: { en: "Hide Email", zh: "隐藏邮箱" },
      copy: { en: "Copy", zh: "复制" },
      copied: { en: "Copied!", zh: "已复制" },
      leaveMessage: { en: "Leave a Message", zh: "给我留言" },
      closeMessage: { en: "Close Form", zh: "收起留言" },
      nameLabel: { en: "Name", zh: "称呼" },
      nameDefault: { en: "Anonymous", zh: "匿名访客" },
      emailLabel: { en: "Email (optional)", zh: "邮箱（选填）" },
      emailPlaceholder: { en: "you@example.com", zh: "用于回复你的邮箱（选填）" },
      messageLabel: { en: "Message", zh: "留言内容" },
      messagePlaceholder: { en: "Write your message here...", zh: "请输入想说的话..." },
      sendButton: { en: "Send Message", zh: "发送留言" },
      sending: { en: "Sending...", zh: "发送中..." },
      sentSuccess: { en: "Message sent. Thank you for reaching out!", zh: "留言已发送，感谢你的来信！" },
      sentError: { en: "Submission failed. Please try again or email directly.", zh: "发送失败，请稍后重试或直接发送邮件。" },
      emptyError: { en: "Please enter a message before sending.", zh: "请先输入留言内容。" },
      notConfigured: {
        en: "Formspree endpoint is not configured yet. Set contact.formspreeEndpoint in assets/js/site-data.js to receive messages.",
        zh: "尚未配置 Formspree 接收地址：请在 assets/js/site-data.js 中填写 contact.formspreeEndpoint 后即可启用在线留言。"
      }
    }
  }
};
