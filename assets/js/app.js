/**
 * Minimalist Academic Homepage Runtime
 * Zero dependencies · Works via file:// or GitHub Pages
 */
(function () {
  "use strict";

  const data = window.SITE_DATA;
  if (!data) return;

  // Inline monochrome academic SVG icons (offline-safe, zero CDN dependency)
  const ICONS = {
    location:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.09-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.02 11.02 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.7 5.39-5.27 5.67.41.36.79 1.07.79 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>',
    scholar:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zm0 13.72L5.5 13.2v4.3c0 2.02 2.91 3.5 6.5 3.5s6.5-1.48 6.5-3.5v-4.3L12 16.72z"/></svg>',
    cv:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>',
    orcid:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8.4 17H6.9V9.6h1.5V17zm-.75-8.5a.95.95 0 1 1 0-1.9.95.95 0 0 1 0 1.9zM17.2 13.3c0 2.4-1.7 3.7-4.1 3.7h-2.9V9.6h2.9c2.5 0 4.1 1.4 4.1 3.7zm-1.6 0c0-1.5-.9-2.4-2.5-2.4h-1.4v4.8h1.4c1.6 0 2.5-.9 2.5-2.4z"/></svg>',
    email:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>',
    x:
      '<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>',
    dblp:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>'
  };

  // Persistent UI state across language switches
  const state = {
    lang: resolveInitialLang(),
    activeAckId: null,
    emailVisible: false,
    messageOpen: false,
    activeNavId: "about-me"
  };

  function resolveInitialLang() {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang");
      if (urlLang === "en" || urlLang === "zh") return urlLang;
      const saved = window.localStorage.getItem("homepage_lang");
      if (saved === "en" || saved === "zh") return saved;
    } catch (_) {
      // Ignore storage errors in restricted environments
    }
    return data.meta.defaultLang === "zh" ? "zh" : "en";
  }

  function t(val) {
    if (val == null) return "";
    if (typeof val === "string") return val;
    return val[state.lang] != null ? val[state.lang] : val.en || "";
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function isSectionEnabled(sectionId) {
    if (sectionId === "acknowledgements") {
      return Boolean(data.acknowledgements && data.acknowledgements.people && data.acknowledgements.people.length);
    }
    if (sectionId === "projects") {
      return Boolean(data.projects && data.projects.items && data.projects.items.length);
    }
    if (sectionId === "honors-skills") {
      return Boolean(data.honorsSkills);
    }
    return true;
  }

  function getSortedAckPeople() {
    const list = (data.acknowledgements && data.acknowledgements.people ? data.acknowledgements.people : []).slice();
    if (data.acknowledgements && data.acknowledgements.sortAlphabetically) {
      list.sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
    }
    return list;
  }

  function renderSectionHeading(emoji, text) {
    const emojiSpan = emoji
      ? `<span class="section-heading__emoji" aria-hidden="true">${emoji}</span>`
      : "";
    return `<h1 class="section-heading">${emojiSpan}<span>${escapeHtml(text)}</span></h1>`;
  }

  /* ------------------------------------------------------------------------
     1. Masthead & Language Switcher
     ------------------------------------------------------------------------ */
  function renderMasthead() {
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    document.title = t(data.meta.title);

    const brandEl = document.getElementById("site-brand");
    if (brandEl) brandEl.textContent = t(data.meta.brand);

    const navList = document.getElementById("nav-list");
    if (navList) {
      navList.innerHTML = data.nav
        .filter((item) => isSectionEnabled(item.id))
        .map((item) => {
          const activeClass = state.activeNavId === item.id ? " is-active" : "";
          return `<li><a class="nav-link${activeClass}" href="#${escapeHtml(item.id)}" data-section="${escapeHtml(item.id)}">${escapeHtml(t(item.label))}</a></li>`;
        })
        .join("");
    }

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const isActive = btn.dataset.lang === state.lang;
      btn.setAttribute("aria-pressed", String(isActive));
    });
  }

  /* ------------------------------------------------------------------------
     2. Sticky Left Profile Sidebar
     ------------------------------------------------------------------------ */
  function renderSidebar() {
    const sidebar = document.getElementById("profile-sidebar");
    if (!sidebar) return;

    const linksHtml = (data.profile.links || [])
      .map((link) => {
        const iconSvg = ICONS[link.icon] || ICONS.cv;
        const label = escapeHtml(t(link.label));
        if (!link.url) {
          return `
            <li class="author__url-item">
              <span class="author__url-icon">${iconSvg}</span>
              <span>${label}</span>
            </li>`;
        }
        const isExternal = /^https?:\/\//i.test(link.url);
        const targetAttrs = isExternal ? ' target="_blank" rel="noopener"' : "";
        return `
          <li class="author__url-item">
            <a class="author__url-link" href="${escapeHtml(link.url)}"${targetAttrs}>
              <span class="author__url-icon">${iconSvg}</span>
              <span>${label}</span>
            </a>
          </li>`;
      })
      .join("");

    sidebar.innerHTML = `
      <div class="author__avatar-wrap">
        <img class="author__avatar" src="${escapeHtml(data.profile.avatar)}" alt="${escapeHtml(t(data.profile.avatarAlt))}" />
      </div>
      <div class="author__identity">
        <h2 class="author__name">${escapeHtml(t(data.profile.name))}</h2>
        <p class="author__bio">${escapeHtml(t(data.profile.bio))}</p>
        <ul class="author__urls">${linksHtml}</ul>
      </div>
    `;
  }

  /* ------------------------------------------------------------------------
     3. About Me
     ------------------------------------------------------------------------ */
  function renderAbout() {
    const el = document.getElementById("about-me");
    if (!el) return;

    const paragraphs = (data.about.paragraphs[state.lang] || data.about.paragraphs.en || [])
      .map((p) => `<p>${p}</p>`)
      .join("");
    const interests = (data.about.interests[state.lang] || data.about.interests.en || [])
      .map((item) => `<li>${item}</li>`)
      .join("");
    const closing = t(data.about.closingNote)
      ? `<p style="margin-top: 0.9rem;">${t(data.about.closingNote)}</p>`
      : "";

    el.innerHTML = `
      ${renderSectionHeading(data.about.emoji, t(data.about.heading))}
      <div class="section-prose">
        ${paragraphs}
        <ul class="interest-list">${interests}</ul>
        ${closing}
      </div>
    `;
  }

  /* ------------------------------------------------------------------------
     4. News
     ------------------------------------------------------------------------ */
  function renderNews() {
    const el = document.getElementById("news");
    if (!el) return;

    const itemsHtml = (data.news.items || [])
      .map(
        (item) => `
        <li>
          <span class="news-date">${escapeHtml(t(item.date))}:</span>
          <span>${t(item.html)}</span>
        </li>`
      )
      .join("");

    el.innerHTML = `
      ${renderSectionHeading(data.news.emoji, t(data.news.heading))}
      <ul class="news-list">${itemsHtml}</ul>
    `;
  }

  /* ------------------------------------------------------------------------
     5. Selected Research (.paper-box)
     ------------------------------------------------------------------------ */
  function renderPublications() {
    const el = document.getElementById("selected-research");
    if (!el) return;

    const cardsHtml = (data.publications.items || [])
      .map((paper) => {
        const authorsHtml = (paper.authors || [])
          .map((author) => {
            const nameText = escapeHtml(author.name);
            const notePart = author.note
              ? author.note.length <= 2
                ? `<sup>${escapeHtml(author.note)}</sup>`
                : ` <span style="color: var(--text-muted); font-size: 0.86em;">(${escapeHtml(author.note)})</span>`
              : "";
            return author.isOwner
              ? `<strong>${nameText}</strong>${notePart}`
              : `${nameText}${notePart}`;
          })
          .join(", ");

        const titleHtml =
          paper.titleUrl && paper.titleUrl !== "#"
            ? `<a href="${escapeHtml(paper.titleUrl)}" target="_blank" rel="noopener">${escapeHtml(paper.title)}</a>`
            : `<span>${escapeHtml(paper.title)}</span>`;

        const notes = (paper.notes && (paper.notes[state.lang] || paper.notes.en)) || [];
        const notesHtml = notes.length
          ? `<ul class="paper-meta-list">${notes.map((n) => `<li>${n}</li>`).join("")}</ul>`
          : "";

        const linksHtml =
          paper.links && paper.links.length
            ? `<div class="paper-links">${paper.links
                .map((lk) => {
                  const ext = /^https?:\/\//i.test(lk.url) ? ' target="_blank" rel="noopener"' : "";
                  return `<a class="paper-link-pill" href="${escapeHtml(lk.url)}"${ext}>${escapeHtml(lk.label)}</a>`;
                })
                .join("")}</div>`
            : "";

        return `
          <article class="paper-box">
            <div class="paper-box__image">
              <div class="paper-badge">${escapeHtml(paper.badge)}</div>
              <img class="paper-box__img" src="${escapeHtml(paper.image)}" alt="${escapeHtml(t(paper.imageAlt))}" loading="lazy" />
            </div>
            <div class="paper-box__text">
              <h2 class="paper-title">${titleHtml}</h2>
              <p class="paper-authors">${authorsHtml}</p>
              ${notesHtml}
              ${linksHtml}
            </div>
          </article>
        `;
      })
      .join("");

    el.innerHTML = `
      ${renderSectionHeading(data.publications.emoji, t(data.publications.heading))}
      <div class="paper-list">${cardsHtml}</div>
    `;
  }

  /* ------------------------------------------------------------------------
     6. Selected Projects
     ------------------------------------------------------------------------ */
  function renderProjects() {
    const el = document.getElementById("projects");
    if (!el) return;

    if (!isSectionEnabled("projects")) {
      el.hidden = true;
      el.innerHTML = "";
      return;
    }

    el.hidden = false;
    const rowsHtml = data.projects.items
      .map((proj) => {
        const badgeHtml = proj.badge
          ? `<span class="project-badge">${escapeHtml(t(proj.badge))}</span>`
          : "";
        const tagsHtml =
          proj.tags && proj.tags.length
            ? `<div class="project-tags">${proj.tags
                .map((tag) => `<span class="project-tag">${escapeHtml(tag)}</span>`)
                .join("")}</div>`
            : "";

        return `
          <article class="project-item">
            <div class="project-header">
              <div class="project-title-group">
                <h2 class="project-title">${escapeHtml(t(proj.title))}</h2>
                ${badgeHtml}
              </div>
              <time class="project-meta">${escapeHtml(t(proj.period))}</time>
            </div>
            <p class="project-role">${escapeHtml(t(proj.role))}</p>
            <p class="project-summary">${t(proj.summary)}</p>
            ${tagsHtml}
          </article>
        `;
      })
      .join("");

    el.innerHTML = `
      ${renderSectionHeading(data.projects.emoji, t(data.projects.heading))}
      <div class="project-list">${rowsHtml}</div>
    `;
  }

  /* ------------------------------------------------------------------------
     7. Experience & Education 3-Column Logo Timeline
     ------------------------------------------------------------------------ */
  function renderExperience() {
    const el = document.getElementById("experience");
    if (!el) return;

    const groupsHtml = (data.experience.groups || [])
      .map((group) => {
        const rowsHtml = (group.items || [])
          .map((item) => {
            const logoModifier = item.logoClass ? ` timeline-logo--${escapeHtml(item.logoClass)}` : "";
            const dotModifier = item.active ? " timeline-dot--active" : "";
            const labPart =
              item.lab && item.lab.name
                ? ` · <a href="${escapeHtml(item.lab.url || "#")}"${
                    /^https?:\/\//i.test(item.lab.url || "") ? ' target="_blank" rel="noopener"' : ""
                  }>${escapeHtml(t(item.lab.name))}</a>`
                : "";

            return `
              <li class="timeline-item">
                <div class="timeline-logo-cell">
                  <img class="timeline-logo${logoModifier}" src="${escapeHtml(item.logo)}" alt="${escapeHtml(t(item.org))} logo" loading="lazy" />
                </div>
                <div class="timeline-rail" aria-hidden="true">
                  <span class="timeline-dot${dotModifier}"></span>
                </div>
                <div class="timeline-body">
                  <div class="timeline-header">
                    <h3 class="timeline-org">${escapeHtml(t(item.org))}</h3>
                    <time class="timeline-time">${escapeHtml(t(item.period))}</time>
                  </div>
                  <p class="timeline-role">${escapeHtml(t(item.role))}${labPart}</p>
                </div>
              </li>
            `;
          })
          .join("");

        return `
          <div class="timeline-group">
            <h2 class="timeline-group__title">${escapeHtml(t(group.title))}</h2>
            <ol class="experience-timeline">${rowsHtml}</ol>
          </div>
        `;
      })
      .join("");

    el.innerHTML = `
      ${renderSectionHeading(data.experience.emoji, t(data.experience.heading))}
      ${groupsHtml}
    `;
  }

  /* ------------------------------------------------------------------------
     8. Honors & Technical Skills
     ------------------------------------------------------------------------ */
  function renderHonorsSkills() {
    const el = document.getElementById("honors-skills");
    if (!el) return;

    if (!isSectionEnabled("honors-skills")) {
      el.hidden = true;
      el.innerHTML = "";
      return;
    }

    el.hidden = false;
    const hs = data.honorsSkills;
    const honorsItems = hs.honors[state.lang] || hs.honors.en || [];
    const honorsList = honorsItems.map((item) => `<li>${item}</li>`).join("");
    const skillsItems = (hs.skills && (hs.skills[state.lang] || hs.skills.en)) || [];
    const skillsList = skillsItems
      .map(
        (s) => `
        <li class="skills-item">
          <strong>${s.label}:</strong> ${s.detail}
        </li>`
      )
      .join("");

    const honorsHeadingHtml = hs.honorsTitle
      ? `<h2 class="subsection-title">${escapeHtml(t(hs.honorsTitle))}</h2>`
      : "";
    const skillsBlockHtml = skillsItems.length
      ? `
      <div class="skills-block">
        ${hs.skillsTitle ? `<h2 class="subsection-title">${escapeHtml(t(hs.skillsTitle))}</h2>` : ""}
        <ul class="skills-list">${skillsList}</ul>
      </div>`
      : "";

    el.innerHTML = `
      ${renderSectionHeading(hs.emoji, t(hs.heading))}
      <div class="honors-block">
        ${honorsHeadingHtml}
        <ul class="honors-list">${honorsList}</ul>
      </div>
      ${skillsBlockHtml}
    `;
  }

  /* ------------------------------------------------------------------------
     9. Acknowledgements Interactive ARIA Tablist / Tabpanel
     ------------------------------------------------------------------------ */
  function renderAcknowledgements() {
    const el = document.getElementById("acknowledgements");
    if (!el) return;

    const people = getSortedAckPeople();
    if (!people.length) {
      el.hidden = true;
      el.innerHTML = "";
      return;
    }

    el.hidden = false;
    if (!state.activeAckId || !people.some((p) => p.id === state.activeAckId)) {
      state.activeAckId = people[0].id;
    }

    const activePerson = people.find((p) => p.id === state.activeAckId) || people[0];

    const tabsHtml = people
      .map((person) => {
        const selected = person.id === activePerson.id;
        const displayName = state.lang === "zh" && person.nameZh ? person.nameZh : person.name;
        return `
          <button
            type="button"
            role="tab"
            class="ack-tab"
            id="ack-tab-${escapeHtml(person.id)}"
            aria-selected="${selected}"
            aria-controls="ack-panel"
            tabindex="${selected ? "0" : "-1"}"
            data-ack-id="${escapeHtml(person.id)}"
          >${escapeHtml(displayName)}</button>
        `;
      })
      .join("");

    const activeDisplayName =
      state.lang === "zh" && activePerson.nameZh ? activePerson.nameZh : activePerson.name;
    const nameMarkup =
      activePerson.url && activePerson.url !== "#"
        ? `<a href="${escapeHtml(activePerson.url)}" target="_blank" rel="noopener">${escapeHtml(activeDisplayName)}</a>`
        : escapeHtml(activeDisplayName);

    el.innerHTML = `
      ${renderSectionHeading(data.acknowledgements.emoji, t(data.acknowledgements.heading))}
      <p class="ack-intro">${escapeHtml(t(data.acknowledgements.intro))}</p>
      <div class="acknowledgement-index">
        <div class="ack-sidebar">
          <div class="ack-tablist" role="tablist" aria-label="${escapeHtml(t(data.acknowledgements.heading))}">
            ${tabsHtml}
          </div>
          <p class="ack-note">${escapeHtml(t(data.acknowledgements.note))}</p>
        </div>
        <div
          class="ack-panel"
          id="ack-panel"
          role="tabpanel"
          aria-labelledby="ack-tab-${escapeHtml(activePerson.id)}"
          tabindex="0"
        >
          <h2 class="ack-panel__name">${nameMarkup}</h2>
          <p class="ack-panel__affiliation">${escapeHtml(t(activePerson.affiliation))}</p>
          <p class="ack-panel__text">${escapeHtml(t(activePerson.text))}</p>
        </div>
      </div>
    `;

    const tabButtons = Array.from(el.querySelectorAll(".ack-tab"));
    tabButtons.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        state.activeAckId = btn.dataset.ackId;
        renderAcknowledgements();
      });

      btn.addEventListener("keydown", (event) => {
        let nextIdx = null;
        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
          nextIdx = (idx + 1) % tabButtons.length;
        } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
          nextIdx = (idx - 1 + tabButtons.length) % tabButtons.length;
        } else if (event.key === "Home") {
          nextIdx = 0;
        } else if (event.key === "End") {
          nextIdx = tabButtons.length - 1;
        }
        if (nextIdx !== null) {
          event.preventDefault();
          const targetId = tabButtons[nextIdx].dataset.ackId;
          state.activeAckId = targetId;
          renderAcknowledgements();
          const newFocus = document.getElementById(`ack-tab-${targetId}`);
          if (newFocus) newFocus.focus();
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     10. Contact Section (Anti-scraper Email Reveal + Copy + Formspree Form)
     ------------------------------------------------------------------------ */
  function renderContact() {
    const el = document.getElementById("contact");
    if (!el) return;

    const ui = data.contact.ui;
    const emailAddress = `${data.contact.emailUser}@${data.contact.emailDomain}`;

    el.innerHTML = `
      ${renderSectionHeading(data.contact.emoji, t(data.contact.heading))}
      <p class="contact-intro">${escapeHtml(t(data.contact.intro))}</p>
      <div class="contact-actions">
        <button
          type="button"
          class="btn-outline"
          id="toggle-email-btn"
          aria-expanded="${state.emailVisible}"
          aria-controls="email-reveal-box"
        >${escapeHtml(state.emailVisible ? t(ui.hideEmail) : t(ui.showEmail))}</button>
        <button
          type="button"
          class="btn-outline"
          id="toggle-message-btn"
          aria-expanded="${state.messageOpen}"
          aria-controls="message-form-panel"
        >${escapeHtml(state.messageOpen ? t(ui.closeMessage) : t(ui.leaveMessage))}</button>
      </div>

      <div id="email-reveal-box" class="email-reveal" ${state.emailVisible ? "" : "hidden"}>
        <a class="email-reveal__address" id="revealed-email-link" href="${state.emailVisible ? `mailto:${escapeHtml(emailAddress)}` : "#"}">
          ${state.emailVisible ? escapeHtml(emailAddress) : ""}
        </a>
        <button type="button" class="btn-outline btn-outline--small" id="copy-email-btn">
          ${escapeHtml(t(ui.copy))}
        </button>
        <span class="copy-feedback" id="copy-feedback" aria-live="polite"></span>
      </div>

      <div id="message-form-panel" class="message-panel" ${state.messageOpen ? "" : "hidden"}>
        <form id="contact-message-form" novalidate>
          <div class="form-field">
            <label class="form-label" for="msg-name">${escapeHtml(t(ui.nameLabel))}</label>
            <input class="form-input" id="msg-name" name="name" type="text" value="${escapeHtml(t(ui.nameDefault))}" />
          </div>
          <div class="form-field">
            <label class="form-label" for="msg-email">${escapeHtml(t(ui.emailLabel))}</label>
            <input class="form-input" id="msg-email" name="email" type="email" placeholder="${escapeHtml(t(ui.emailPlaceholder))}" />
          </div>
          <div class="form-field">
            <label class="form-label" for="msg-body">${escapeHtml(t(ui.messageLabel))}</label>
            <textarea class="form-textarea" id="msg-body" name="message" required placeholder="${escapeHtml(t(ui.messagePlaceholder))}"></textarea>
          </div>
          <div class="form-footer">
            <button type="submit" class="btn-outline" id="msg-submit-btn">${escapeHtml(t(ui.sendButton))}</button>
            <p class="form-status" id="msg-status" aria-live="polite"></p>
          </div>
        </form>
      </div>
    `;

    const toggleEmailBtn = document.getElementById("toggle-email-btn");
    toggleEmailBtn.addEventListener("click", () => {
      state.emailVisible = !state.emailVisible;
      renderContact();
    });

    const copyBtn = document.getElementById("copy-email-btn");
    const copyFeedback = document.getElementById("copy-feedback");
    copyBtn.addEventListener("click", () => {
      copyTextToClipboard(emailAddress).then((ok) => {
        if (!ok) return;
        copyFeedback.textContent = t(ui.copied);
        window.setTimeout(() => {
          if (copyFeedback) copyFeedback.textContent = "";
        }, 2000);
      });
    });

    const toggleMsgBtn = document.getElementById("toggle-message-btn");
    toggleMsgBtn.addEventListener("click", () => {
      state.messageOpen = !state.messageOpen;
      renderContact();
      if (state.messageOpen) {
        const bodyInput = document.getElementById("msg-body");
        if (bodyInput) bodyInput.focus();
      }
    });

    const form = document.getElementById("contact-message-form");
    const statusEl = document.getElementById("msg-status");
    const submitBtn = document.getElementById("msg-submit-btn");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const messageVal = (document.getElementById("msg-body").value || "").trim();
      if (!messageVal) {
        statusEl.textContent = t(ui.emptyError);
        statusEl.className = "form-status form-status--error";
        return;
      }

      const endpoint = (data.contact.formspreeEndpoint || "").trim();
      if (!endpoint) {
        statusEl.textContent = t(ui.notConfigured);
        statusEl.className = "form-status";
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = t(ui.sending);
      statusEl.textContent = "";
      statusEl.className = "form-status";

      try {
        const formData = new FormData(form);
        const res = await fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" }
        });
        if (res.ok) {
          form.reset();
          document.getElementById("msg-name").value = t(ui.nameDefault);
          statusEl.textContent = t(ui.sentSuccess);
          statusEl.className = "form-status form-status--success";
        } else {
          throw new Error("Non-2xx status");
        }
      } catch (_) {
        statusEl.textContent = t(ui.sentError);
        statusEl.className = "form-status form-status--error";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = t(ui.sendButton);
      }
    });
  }

  function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(
        () => true,
        () => fallbackCopy(text)
      );
    }
    return Promise.resolve(fallbackCopy(text));
  }

  function fallbackCopy(text) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch (_) {
      return false;
    }
  }

  /* ------------------------------------------------------------------------
     Scroll-Spy for Active Nav Link
     ------------------------------------------------------------------------ */
  function setupScrollSpy() {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = data.nav
      .filter((item) => isSectionEnabled(item.id))
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) {
          state.activeNavId = visible[0].target.id;
          document.querySelectorAll(".nav-link").forEach((link) => {
            link.classList.toggle("is-active", link.dataset.section === state.activeNavId);
          });
        }
      },
      {
        rootMargin: "-18% 0px -65% 0px",
        threshold: 0
      }
    );

    sections.forEach((sec) => observer.observe(sec));
  }

  /* ------------------------------------------------------------------------
     Render All + Bind Language Switcher
     ------------------------------------------------------------------------ */
  function renderAll() {
    renderMasthead();
    renderSidebar();
    renderAbout();
    renderNews();
    renderPublications();
    renderProjects();
    renderExperience();
    renderHonorsSkills();
    renderAcknowledgements();
    renderContact();
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const nextLang = btn.dataset.lang;
      if (nextLang !== "en" && nextLang !== "zh") return;
      if (nextLang === state.lang) return;
      state.lang = nextLang;
      try {
        window.localStorage.setItem("homepage_lang", nextLang);
      } catch (_) {}
      renderAll();
    });
  });

  renderAll();
  setupScrollSpy();
})();
