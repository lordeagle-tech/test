import "@phosphor-icons/web/regular/style.css";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import "./style.css";

gsap.registerPlugin(SplitText);

const imageBase = "/manus-storage/async-images/p4YGYkrC5ozOrobtiuD8xm/";
const app = document.querySelector("#app");

app.innerHTML = `
  <header class="site-header" aria-label="Primary navigation">
    <a class="wordmark" href="#top" aria-label="lordeagle-tech home">
      <span class="wordmark-mark">L</span>
      <span>lordeagle-tech</span>
    </a>
    <nav class="header-nav">
      <a href="#work">Selected work</a>
      <a href="#stack">Stack</a>
      <a class="header-contact" href="#contact">Let's build <i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>
    </nav>
  </header>

  <main class="page" id="top">
    <section class="section hero" aria-labelledby="hero-title">
      <div class="section-inner hero-grid">
        <div class="hero-copy">
          <h1 class="hero-title" id="hero-title" aria-label="I build for the web.">I build<br /><em>for the web.</em></h1>
          <div class="hero-meta">
            <p>lordeagle-tech is a personal workspace for expressive interfaces, thoughtful motion and dependable front-end systems.</p>
            <span class="hero-index">01 / 06</span>
          </div>
        </div>
        <figure class="hero-media">
          <img src="${imageBase}image-1.webp" alt="A quiet worktable with papers and a laptop-ready studio setup" />
        </figure>
      </div>
      <span class="hero-side-note">JavaScript / CSS / Git</span>
    </section>

    <section class="section work-section" id="work" aria-labelledby="work-title">
      <div class="section-inner">
        <div class="section-heading">
          <div>
            <span class="section-kicker">02 / selected focus</span>
            <h2 id="work-title">Interfaces that hold their shape.</h2>
          </div>
          <p>Small builds, motion studies and front-end details made visible.</p>
        </div>
        <div class="contact-sheet" aria-label="Selected technology projects">
          <a class="work-card" href="#contact" data-project="Portfolio System">
            <div class="work-card-media"><img src="${imageBase}image-2.webp" alt="Paper prototypes on a print studio worktable" loading="lazy" /></div>
            <div class="work-card-caption"><strong>Portfolio System</strong><span>Vite / CSS</span></div>
          </a>
          <a class="work-card" href="#contact" data-project="Motion Systems">
            <div class="work-card-media"><img src="${imageBase}image-3.webp" alt="A minimal gallery installation with a signal-orange detail" loading="lazy" /></div>
            <div class="work-card-caption"><strong>Motion Systems</strong><span>GSAP / SplitText</span></div>
          </a>
          <a class="work-card" href="#contact" data-project="Scroll Studies">
            <div class="work-card-media"><img src="${imageBase}image-4.webp" alt="A material library with carefully arranged samples" loading="lazy" /></div>
            <div class="work-card-caption"><strong>Scroll Studies</strong><span>Lenis / JS</span></div>
          </a>
          <a class="work-card" href="#contact" data-project="Interface Detail">
            <div class="work-card-media"><img src="${imageBase}image-1.webp" alt="Soft daylight over a considered work surface" loading="lazy" /></div>
            <div class="work-card-caption"><strong>Interface Detail</strong><span>Phosphor / A11y</span></div>
          </a>
        </div>
      </div>
    </section>

    <section class="section services-section" id="stack" aria-labelledby="stack-title">
      <div class="section-inner">
        <div class="section-heading">
          <div>
            <span class="section-kicker">03 / the stack</span>
            <h2 id="stack-title">Tools I reach for.</h2>
          </div>
          <p>The repo tells the story: lean tools, precise output and a bias toward shipping.</p>
        </div>
        <div class="service-list">
          <a class="service-row" href="#contact"><h3>JavaScript</h3><p>Interaction, state and the small pieces of behavior that make an interface feel alive.</p><i class="ph ph-arrow-up-right service-arrow" aria-hidden="true"></i></a>
          <a class="service-row" href="#contact"><h3>CSS</h3><p>Responsive composition, typography, accessible focus and layouts that do not collapse under pressure.</p><i class="ph ph-arrow-up-right service-arrow" aria-hidden="true"></i></a>
          <a class="service-row" href="#contact"><h3>GSAP / Lenis</h3><p>Motion with a reason: SplitText openings, considered reveals and smooth scroll that stays out of the way.</p><i class="ph ph-arrow-up-right service-arrow" aria-hidden="true"></i></a>
          <a class="service-row" href="#contact"><h3>Git / npm</h3><p>Versioned work, clear commits and a small toolchain that is easy to pick up and move forward.</p><i class="ph ph-arrow-up-right service-arrow" aria-hidden="true"></i></a>
        </div>
      </div>
    </section>

    <section class="section process-section" aria-labelledby="process-title">
      <div class="section-inner">
        <div class="section-heading process-heading">
          <div>
            <span class="section-kicker">04 / how I work</span>
            <h2 id="process-title">Make the next move clear.</h2>
          </div>
          <p>A simple loop for turning an open question into something people can use.</p>
        </div>
        <div class="process-stairs">
          <div class="process-step" style="--step: 0"><h3>Read<span>.</span></h3><p>Understand the problem before choosing the tool.</p></div>
          <div class="process-step" style="--step: 1"><h3>Shape<span>.</span></h3><p>Give the idea structure, hierarchy and a useful edge.</p></div>
          <div class="process-step" style="--step: 2"><h3><em>Ship</em><span>.</span></h3><p>Test the details, commit the work and let it meet the world.</p></div>
        </div>
      </div>
    </section>

    <section class="section studio-section" id="about" aria-labelledby="about-title">
      <div class="section-inner studio-grid">
        <div class="studio-copy">
          <span class="section-kicker">05 / about</span>
          <h2 id="about-title">Built with care.</h2>
          <p>I am lordeagle-tech. I like front-end work that feels calm on the surface and considered underneath: strong type, clear code, useful motion and no mystery about what happens next.</p>
          <a class="header-contact" href="https://github.com/lordeagle-tech" target="_blank" rel="noreferrer">github.com/lordeagle-tech <i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>
        </div>
        <div class="portrait-strip" aria-label="Working modes">
          <figure class="portrait"><div class="portrait-image"><img src="${imageBase}image-5.webp" alt="A portrait from the lordeagle-tech series" loading="lazy" /></div><figcaption>Build / interface</figcaption></figure>
          <figure class="portrait"><div class="portrait-image"><img src="${imageBase}image-5.webp" alt="A second portrait from the lordeagle-tech series" loading="lazy" /></div><figcaption>Refine / motion</figcaption></figure>
          <figure class="portrait"><div class="portrait-image"><img src="${imageBase}image-5.webp" alt="A third portrait from the lordeagle-tech series" loading="lazy" /></div><figcaption>Ship / detail</figcaption></figure>
        </div>
      </div>
    </section>

    <section class="section inquiry-section" id="contact" aria-labelledby="contact-title">
      <div class="section-inner inquiry-grid">
        <div class="inquiry-copy">
          <span class="section-kicker">06 / start a build</span>
          <h2 id="contact-title">Have a useful problem?</h2>
          <p>Send the part you know. I will turn it into a clear next step.</p>
        </div>
        <form class="brief-form" id="brief-form">
          <div class="form-field"><label for="name">Your name</label><input id="name" name="name" autocomplete="name" required /></div>
          <div class="form-field"><label for="email">Email address</label><input id="email" name="email" type="email" autocomplete="email" required /></div>
          <div class="choice-group"><span class="choice-label">What should we make?</span><div class="choice-list" role="group" aria-label="Project type">
            <button class="choice-button is-selected" type="button" data-choice="Frontend build" aria-pressed="true">Frontend build</button>
            <button class="choice-button" type="button" data-choice="Motion system" aria-pressed="false">Motion system</button>
            <button class="choice-button" type="button" data-choice="Interface audit" aria-pressed="false">Interface audit</button>
          </div></div>
          <div class="choice-group"><span class="choice-label">A rough scale</span><div class="choice-list" role="group" aria-label="Project scale">
            <button class="choice-button is-selected" type="button" data-scale="A focused sprint" aria-pressed="true">A focused sprint</button>
            <button class="choice-button" type="button" data-scale="A full build" aria-pressed="false">A full build</button>
            <button class="choice-button" type="button" data-scale="Not sure yet" aria-pressed="false">Not sure yet</button>
          </div></div>
          <div class="form-field"><label for="message">A little more</label><textarea id="message" name="message" placeholder="What are you trying to make work?"></textarea></div>
          <div class="submit-row"><p class="form-note">No pitch deck required. Just the part you know.</p><button class="primary-button" type="submit">Make the note <i class="ph ph-arrow-right" aria-hidden="true"></i></button></div>
          <div class="print-summary" id="print-summary" hidden aria-live="polite"></div>
        </form>
      </div>
    </section>
  </main>

  <footer class="site-footer"><span>lordeagle-tech / main</span><span>JavaScript · CSS · Git</span></footer>
`;

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const syncThemeColor = ({ matches }) => { themeMeta?.setAttribute("content", matches ? "#161A17" : "#ECEEE9"); };
syncThemeColor(systemDark);
systemDark.addEventListener?.("change", syncThemeColor);
const heroSplit = SplitText.create("#hero-title", { type: "lines", mask: "lines", linesClass: "hero-split-line", aria: "none" });

if (!reducedMotion) {
  const lenis = new Lenis({ duration: 1.15, smoothWheel: true, syncTouch: false });
  const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
  const opening = gsap.timeline({ defaults: { ease: "power3.out" } });
  opening.to(heroSplit.lines, { y: "0%", duration: 1.05, stagger: 0.12, delay: 0.25 });
  opening.to(".hero-media", { clipPath: "inset(0 0 0% 0)", duration: 1.4, ease: "power4.inOut" }, "-=0.8");
} else {
  heroSplit.lines.forEach((line) => { line.style.transform = "translateY(0)"; });
  document.querySelector(".hero-media").style.clipPath = "inset(0 0 0% 0)";
}

document.querySelectorAll(".choice-button").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.closest(".choice-group");
    group.querySelectorAll(".choice-button").forEach((item) => {
      item.classList.remove("is-selected");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("is-selected");
    button.setAttribute("aria-pressed", "true");
  });
});

document.querySelectorAll(".work-card").forEach((card) => {
  card.addEventListener("click", () => {
    const message = document.querySelector("#message");
    if (!message.value) message.value = `I would like to talk about ${card.dataset.project}.`;
  });
});

const form = document.querySelector("#brief-form");
const summary = document.querySelector("#print-summary");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const choiceGroups = document.querySelectorAll(".choice-group");
  const type = choiceGroups[0]?.querySelector(".is-selected")?.dataset.choice || "Frontend build";
  const scale = choiceGroups[1]?.querySelector(".is-selected")?.dataset.scale || "A focused sprint";
  const message = document.querySelector("#message").value.trim() || "No additional note.";
  summary.hidden = false;
  summary.innerHTML = `<div class="summary-top"><h3>lordeagle-tech / project note</h3><span>main / ready</span></div><div class="summary-body"><span class="summary-label">From</span><p class="summary-value">${escapeHtml(name)}<br />${escapeHtml(email)}</p><span class="summary-label">Shape</span><p class="summary-value">${escapeHtml(type)}<br />${escapeHtml(scale)}</p><span class="summary-label">Note</span><p class="summary-value">${escapeHtml(message)}</p></div><div class="summary-actions"><span class="summary-label">A clean starting point.</span><button class="text-button" type="button" id="print-button"><i class="ph ph-printer" aria-hidden="true"></i> Print this note</button></div>`;
  summary.querySelector("#print-button").addEventListener("click", () => window.print());
  summary.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" });
});

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));
}
