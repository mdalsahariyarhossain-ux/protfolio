/* =====================================================
   This file builds the page from js/data.js.
   You normally do NOT need to edit this file.
   ===================================================== */

const $ = (id) => document.getElementById(id);
const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* small animated pictures for the project cards */
const VISUALS = {
  cart: `<svg viewBox="0 0 300 140" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M70 30h30l18 62h96l16-44H108"/><circle cx="132" cy="112" r="8" fill="var(--warm)" stroke="none"/><circle cx="208" cy="112" r="8" fill="var(--warm)" stroke="none"/><path d="M40 30h16M28 46h28" opacity=".6"/></svg>`,
  chat: `<svg viewBox="0 0 300 140" fill="none"><rect x="10" y="12" width="150" height="34" rx="17" fill="var(--accent)" opacity=".9"/><rect x="140" y="58" width="150" height="34" rx="17" fill="var(--warm)" opacity=".95"/><rect x="10" y="104" width="100" height="28" rx="14" fill="var(--accent)" opacity=".5"/><circle cx="235" cy="118" r="4" fill="var(--muted)"><animate attributeName="opacity" values="1;.2;1" dur="1.2s" repeatCount="indefinite"/></circle><circle cx="250" cy="118" r="4" fill="var(--muted)"><animate attributeName="opacity" values="1;.2;1" dur="1.2s" begin=".2s" repeatCount="indefinite"/></circle><circle cx="265" cy="118" r="4" fill="var(--muted)"><animate attributeName="opacity" values="1;.2;1" dur="1.2s" begin=".4s" repeatCount="indefinite"/></circle></svg>`,
};

function render(d) {
  document.title = d.siteTitle;

  /* nav + hero */
  $("brand").textContent = d.name;
  $("role").textContent = d.role;
  $("name").textContent = d.name;
  $("intro").textContent = d.intro;
  $("photo").src = d.photo;
  $("photo").alt = "Portrait of " + d.name;
  $("stats").innerHTML = d.stats.map((s) => `<div><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");
  const pos = ["b-a", "b-b", "b-c"];
  $("badges").innerHTML = d.badges
    .slice(0, 3)
    .map((b, i) => `<div class="badge ${pos[i]}">${esc(b.title)}<small>${esc(b.text)}</small></div>`)
    .join("");

  /* about */
  $("aboutText").innerHTML = d.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
  $("facts").innerHTML = d.about.facts
    .map((f) => `<div class="fact"><b>${esc(f.title)}</b><span>${esc(f.text)}</span></div>`)
    .join("");

  /* skills */
  $("skillList").innerHTML = d.skills
    .map(
      (g) =>
        `<div class="row"><h3>${esc(g.group)}</h3><div class="chips">${g.items.map((i) => `<span>${esc(i)}</span>`).join("")}</div></div>`
    )
    .join("");

  /* projects */
  $("projectList").innerHTML = d.projects
    .map(
      (p) => `
    <article class="proj">
      <div>
        <div class="pviz">${VISUALS[p.visual] || ""}</div>
        <h3>${esc(p.title)}</h3>
        <div class="sub">${esc(p.subtitle)}</div>
        <div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        <div class="plinks">${(p.links || [])
          .map((l) => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)}</a>`)
          .join("")}</div>
      </div>
      <ul>${p.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    </article>`
    )
    .join("");

  /* education */
  const e = d.education;
  $("eduCards").innerHTML = `
    <div class="card">
      <h3>${esc(e.school)}</h3>
      <div class="sub">${esc(e.degree)}</div>
      <p>${esc(e.note)}${e.cgpa ? " CGPA: " + esc(e.cgpa) : ""}</p>
    </div>
    <div class="card">
      <h3>Relevant coursework</h3>
      <ul>${e.coursework.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
    </div>`;
  $("achieve").innerHTML = `<h3>Achievements</h3><p>${esc(e.achievements)}</p>`;

  /* contact */
  const c = d.contact;
  $("cHeading").textContent = c.heading;
  $("cText").textContent = c.text;
  $("cMail").href = "mailto:" + c.email;
  $("cMail").textContent = c.email;
  $("socials").innerHTML = `
    <a class="btn primary dlcv" href="#contact">Download CV</a>
    <a class="btn" href="${esc(c.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a class="btn" href="${esc(c.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a class="btn" href="tel:${esc(c.phone.replace(/\s/g, ""))}">${esc(c.phone)}</a>`;
  $("footer").textContent = d.name;

  /* cv popup */
  $("cvopen").href = d.cv.file;
}

render(DATA);

/* ---------- CV popup ---------- */
const dlg = $("cvdlg");
function openDlg() {
  dlg.classList.remove("view");
  if (!dlg.open) dlg.showModal();
  $("optView").focus();
}
function saveCV() {
  const a = document.createElement("a");
  a.href = DATA.cv.file;
  a.download = DATA.cv.downloadName;
  document.body.appendChild(a);
  a.click();
  a.remove();
}
document.querySelectorAll(".dlcv").forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
    openDlg();
  })
);
$("dclose").onclick = () => dlg.close();
$("optView").onclick = () => {
  $("cvframe").src = DATA.cv.file;
  dlg.classList.add("view");
  $("vback").focus();
};
$("optDl").onclick = saveCV;
$("vdl").onclick = saveCV;
$("vback").onclick = () => {
  dlg.classList.remove("view");
  $("optView").focus();
};
dlg.addEventListener("click", (e) => {
  if (e.target === dlg) dlg.close();
});

/* ---------- photo tilt (desktop only) ---------- */
(function () {
  const fr = $("frame");
  const hero = $("hero");
  if (fr && matchMedia("(hover:hover)").matches && !matchMedia("(prefers-reduced-motion:reduce)").matches) {
    hero.addEventListener("pointermove", (e) => {
      const x = e.clientX / innerWidth - 0.5,
        y = e.clientY / innerHeight - 0.5;
      fr.style.setProperty("--ry", x * 9 + "deg");
      fr.style.setProperty("--rx", -y * 7 + "deg");
    });
    hero.addEventListener("pointerleave", () => {
      fr.style.setProperty("--ry", "0deg");
      fr.style.setProperty("--rx", "0deg");
    });
  }
})();

/* ---------- scroll progress + active menu link ---------- */
(function () {
  const prog = $("progress");
  const links = [...document.querySelectorAll(".links a")];
  const secs = links.map((a) => document.querySelector(a.getAttribute("href")));
  function update() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    prog.style.transform = "scaleX(" + (max > 0 ? h.scrollTop / max : 0) + ")";
    let cur = -1;
    secs.forEach((s, i) => {
      if (s && s.getBoundingClientRect().top < innerHeight * 0.4) cur = i;
    });
    links.forEach((a, i) => a.classList.toggle("on", i === cur));
  }
  addEventListener("scroll", update, { passive: true });
  update();
})();
