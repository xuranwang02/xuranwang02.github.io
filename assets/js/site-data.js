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
        date: "Sep 2026",
        html: 'Our paper <a href="https://www.iccd-conf.com/2026/fullprogram.html#pp-6A-3" target="_blank" rel="noopener"><em>Flash-TGN: IO-Aware Fused Execution for Temporal Graph Network Training</em></a> was accepted to <strong>ICCD 2026 (CCF-B)</strong>.'
      },
      {
        date: "Sep 2026",
        html: 'Our paper <a href="https://www.iccd-conf.com/2026/fullprogram.html#pp-5A-6" target="_blank" rel="noopener"><em>COVE: Co-Designing Position Indexing and Error-Bounded Value Compression for High-Performance SpMV on GPUs</em></a> was accepted to <strong>ICCD 2026 (CCF-B)</strong>.'
      },
      {
        date: "Jul 2026",
        html: 'Our paper <a href="https://sc26.supercomputing.org/proceedings/papers/paper_pages/pap257.html" target="_blank" rel="noopener"><em>BTC-TC: Exact GPU Triangle Counting with Hybrid Bit Tensor Cores and CUDA Cores</em></a> was accepted to <strong>SC 2026 (CCF-A)</strong>, and its AD/AE appendix was selected as a <strong>Finalist for the Best Reproducibility Advancement Award</strong>.'
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
        date: "Nov 2024",
        html: 'Our paper <a href="https://doi.org/10.1109/icde65448.2025.00082" target="_blank" rel="noopener"><em>TeMatch: A Fast Temporal Subgraph Matching Framework with Temporal-Aware Subgraph Matching Algorithms</em></a> was accepted to <strong>ICDE 2025 (CCF-A)</strong>.'
      }
    ]
  },

  publications: {
    emoji: "📝",
    heading: "Selected Research",
    items: [
      {
        badge: "ICCD 2026",
        image: "assets/images/paper-flashtgn.png",
        imageAlt: "Flash-TGN IO-aware fused execution architecture diagram",
        title: "Flash-TGN: IO-Aware Fused Execution for Temporal Graph Network Training",
        titleUrl: "https://www.iccd-conf.com/2026/fullprogram.html#pp-6A-3",
        authors: [
          { name: "Yongchun Jiang" },
          { name: "Heng Zhang", note: "*" },
          { name: "Kaifan Jia" },
          { name: "Xuran Wang", isOwner: true },
          { name: "Minghui Zhang" },
          { name: "Zhihao Ling" }
        ],
        notes: [
          "<em>The 44th IEEE International Conference on Computer Design (ICCD 2026, CCF-B)</em>."
        ],
        links: [
          { label: "ICCD'26 Program", url: "https://www.iccd-conf.com/2026/fullprogram.html#pp-6A-3" }
        ],
        abstract:
          "Temporal Graph Networks (TGNs) model continuous-time temporal graphs by maintaining evolving node memories and aggregating historical neighbors for each interaction. This memory-based design is central to TGN accuracy, but it makes training difficult to optimize: each mini-batch must commit node-memory updates in chronological order while assembling attention inputs online from node features, memory states, edge features, and time encodings through irregular temporal-neighbor indices. Existing execution decomposes this online path into fine-grained irregular operators, causing short-lived intermediate tensors to be repeatedly materialized and reloaded through HBM. However, these transfers are not equally constrained by TGN semantics. This exposes an opportunity to remove artificial operator boundaries while preserving the true temporal and gradient dependencies. We present Flash-TGN, an IO-aware fused execution system for TGN training. Flash-TGN uses operator-level dependency analysis to separate topology-only, batch-local state-dependent, and chronology-critical work, then applies three mechanisms: Topology-Decoupled Preprocessing moves sampling, deduplication, and index remapping out of the online memory-dependent path; Correlated Gather-Encode Fusion combines node, memory, and edge gather with time encoding and tuple assembly into one indexed HBM pass; and On-Chip Scattered Attention keeps small segmented attention working sets on chip with compact saved state and recomputation for backward. On H100, Flash-TGN improves training throughput by 1.32–1.55× over the state-of-the-art PULSE while preserving AP/AUC, reaches 2.80× on large graphs, and reduces gather-encode DRAM traffic by 51.2% on average."
      },
      {
        badge: "ICCD 2026",
        image: "assets/images/paper-cove.png",
        imageAlt: "COVE co-designed position indexing and error-bounded value compression diagram",
        title: "COVE: Co-Designing Position Indexing and Error-Bounded Value Compression for High-Performance SpMV on GPUs",
        titleUrl: "https://www.iccd-conf.com/2026/fullprogram.html#pp-5A-6",
        authors: [
          { name: "Kaifan Jia" },
          { name: "Yongchun Jiang" },
          { name: "Minghui Zhang" },
          { name: "Zhihao Ling" },
          { name: "Xuran Wang", isOwner: true },
          { name: "Heng Zhang", note: "*" }
        ],
        notes: [
          "<em>The 44th IEEE International Conference on Computer Design (ICCD 2026, CCF-B)</em>."
        ],
        links: [
          { label: "ICCD'26 Program", url: "https://www.iccd-conf.com/2026/fullprogram.html#pp-5A-6" }
        ],
        abstract:
          "Sparse Matrix-vector Multiplication (SpMV) is an important operation in scientific computing and deep learning. Existing work improves SpMV along two complementary directions: structural formats that compress index metadata and improve scheduling, and value-side optimizations that lower precision (e.g., FP32, FP16/BF16, quantized values) to save bandwidth. However, current approaches suffer from three key limitations: (1) value compression is treated separately from structural format design, missing co-design opportunities; (2) precision is assigned independently of the sparsity pattern; and (3) error is validated per value rather than on the final SpMV output, ignoring propagation into the result vector. Our key insight is that a sparse format already eliminates zeros as a value compressor, and for matrices from deep learning or constraint problems where positions and values originate from the same local interaction process, the remaining nonzeros exhibit regularity at that same local granularity. Motivated by this observation, we design COVE, an efficient GPU SpMV framework, by co-designing sparse block position indexing and value encoding over one shared 8×4 block unit. Three key novel strategies are proposed in COVE: (1) a lossless position encoding—one 64-bit word per block, long rows split into CSR chunks—cuts index traffic, regularizes vector access, and balances load in one launch; (2) an error-bounded value encoding on the same unit—exact dictionaries where values repeat, per-block block floating point with a magnitude-outlier pass—admitted per matrix only if the SpMV output error stays within budget; (3) one fused kernel decodes both encodings in registers, with the two admission gates kept independent. Across 1000 verified and 3624 coverage-scale SuiteSparse matrices on three GPU generations, the lossless position hybrid outperforms cuSPARSE-double by 1.64–1.71× geometric mean; the value encoding cuts value storage from 8 to 1.73 bytes per nonzero with 98.7–100% of matrices within a 10⁻² output-error budget; and the two savings stack up to 2.9× on large bandwidth-bound matrices."
      },
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
          "<em>The International Conference for High Performance Computing, Networking, Storage, and Analysis (SC 2026, CCF-A)</em>.",
          '🏆 <strong class="paper-award">Finalist, Best Reproducibility Advancement Award</strong> (SC26 Artifact Description &amp; Artifact Evaluation Appendix).'
        ],
        links: [
          { label: "SC'26 Proceedings", url: "https://sc26.supercomputing.org/proceedings/papers/paper_pages/pap257.html" }
        ],
        abstract:
          "Triangle counting is fundamental to graph analytics, yet GPUs face a tension between exact, irregular adjacency-list intersection and regular, inaccurate FP16 Tensor Core execution. ToT's FP16 pipeline is incorrect on 12 of 36 inputs and requires pre-kernel symbolic matching. We observe that semantic alignment alone is insufficient under heterogeneous mask density. We present BTC-TC, an exact system built around binary MMA. AND–popcount implements common-neighbor counting with 32-bit accumulation and enables online block matching. Because mask density varies, BTC-TC combines multi-granularity Bit-BSR with two-level adaptivity: it selects block geometry per graph, dispatches dense blocks to Bit Tensor Cores, and routes sparse blocks to CUDA cores. Across 36 inputs and 12 baselines on RTX PRO 6000, BTC-TC achieves the lowest post-clean end-to-end time on every input, with 1.92× geometric-mean kernel and 8.0× end-to-end speedups over ToT. It matches CPU ground truth on every input and maintains the gains on H100 and A800."
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
        ],
        abstract:
          "Temporal subgraph matching aims to identify occurrences of a query graph within a large target graph, subject to certain temporal constraints that require that timestamps on the edges increase in accordance with the direction of the path. Current research on temporal subgraph matching typically identifies each non-temporal match and then filters out occurrences by examining all paths within each occurrence for compliance with temporal constraints. However, this approach proves to be highly inefficient, as it involves excessive unnecessary computation on non-temporal occurrences that do not meet the temporal constraints and can be pruned early during the matching process. Moreover, the constraint examination on all paths within each occurrence further results in numerous redundant timestamp comparisons. Therefore, a high-performance solution is demanded to overcome these drawbacks. In this paper, we introduce TeMatch, a high-performance framework designed to be compatible with any enumeration-based solution for temporal subgraph matching. TeMatch features a novel topological representation of temporal constraints in the query graph, along with three temporal-aware subgraph matching algorithms that enable rapid constraint checking and enhance early pruning and filtration. Extensive experiments reveal that TeMatch efficiently harnesses temporal information to enable early pruning and achieves a speedup of 313.57× while being parallel-friendly, highly compatible, and yielding identical matching results."
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
      '<strong>Finalist, Best Reproducibility Advancement Award</strong>, <a href="https://sc26.supercomputing.org/proceedings/papers/paper_pages/pap257.html" target="_blank" rel="noopener">SC 2026</a> (AD/AE Appendix of <em>BTC-TC</em>, 2026)',
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
        affiliation: "Tenured Professor · Software College, Northeastern University (NEU)",
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
        affiliation: "Ph.D. Student · ISRC, Institute of Software, Chinese Academy of Sciences (ISCAS)",
        text: "Both a senior mentor and a close friend in the lab, Kaifan opened the door for me to high-performance computing and AI. His lively, sharp research instincts and generosity in sharing frontier ideas have continuously sparked new directions in my own work."
      },
      {
        id: "yongchun-jiang",
        name: "Yongchun Jiang",
        url: "",
        affiliation: "Ph.D. Student · ISRC, Institute of Software, Chinese Academy of Sciences (ISCAS)",
        text: "Both a senior mentor and a trusted friend, Yongchun introduced me to temporal graph research and profoundly shaped the way I think about science. His emphasis on rigorous research logic, disciplined self-questioning, and the underlying craft of academic writing has left a lasting mark on how I approach every problem and paper."
      },
      {
        id: "haolin-jiang",
        name: "Haolin Jiang",
        url: "https://www.linkedin.com/in/haolin-jiang-ba2062303",
        affiliation: "Ph.D. Student in Computer Engineering · Rutgers University–New Brunswick",
        text: "Working on TeMatch marked my very first foray into academic research, and Haolin was the one who patiently walked me through the experimental framework from the ground up. His steady guidance and willingness to answer every question gave me the confidence and practical grounding to take my first steps as a researcher."
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
