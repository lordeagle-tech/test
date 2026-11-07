import "./style.css";

const profile = {
  name: "Lord Eagle",
  handle: "lordeagle-tech",
  bio: "This is the way.",
  location: "Mumbai, India",
  company: "@lordeagle-web company",
  website: "https://eaglegnick.me",
  alternateWebsite: "https://website.lordeagle.tech",
  github: "https://github.com/lordeagle-tech",
  avatar: "/lordeagle-avatar.jpg",
  publicRepos: 42,
  followers: 1,
  following: 4
};

const app = document.querySelector("#app");

app.innerHTML = `
  <header class="topbar">
    <div class="topbar-inner">
      <a class="brand" href="#top" aria-label="${profile.handle} home"><img src="/lordeagle-mark.svg" alt="" class="brand-mark" /><span>${profile.handle}</span></a>
      <nav class="top-nav" aria-label="Primary navigation">
        <a href="#details">Details</a>
        <a href="#connect">Connect</a>
        <button class="theme-button" id="theme-toggle" type="button" aria-pressed="false"><span aria-hidden="true">◐</span> Theme</button>
      </nav>
    </div>
  </header>

  <main class="site-shell" id="top">
    <section class="profile-panel" aria-labelledby="profile-title">
      <div class="profile-main">
        <img class="profile-avatar" src="${profile.avatar}" alt="${profile.name}'s profile avatar" />
        <div class="profile-copy">
          <div class="eyebrow">Personal profile</div>
          <h1 id="profile-title">${profile.name}</h1>
          <p class="handle">@${profile.handle}</p>
          <p class="bio">${profile.bio}</p>
          <div class="profile-meta" aria-label="Profile details">
            <span><span class="meta-icon" aria-hidden="true">⌖</span>${profile.location}</span>
            <span><span class="meta-icon" aria-hidden="true">◈</span>${profile.company}</span>
            <a href="${profile.website}" target="_blank" rel="noreferrer"><span class="meta-icon" aria-hidden="true">↗</span>eaglegnick.me</a>
            <a href="${profile.alternateWebsite}" target="_blank" rel="noreferrer"><span class="meta-icon" aria-hidden="true">↗</span>website.lordeagle.tech</a>
          </div>
        </div>
      </div>
      <div class="profile-stats" aria-label="Profile statistics">
        <a href="${profile.github}" target="_blank" rel="noreferrer"><strong>${profile.publicRepos}</strong><span>public repos</span></a>
        <a href="${profile.github}?tab=followers" target="_blank" rel="noreferrer"><strong>${profile.followers}</strong><span>followers</span></a>
        <a href="${profile.github}?tab=following" target="_blank" rel="noreferrer"><strong>${profile.following}</strong><span>following</span></a>
      </div>
    </section>

    <div class="content-layout">
      <aside class="sidebar" aria-label="Profile navigation">
        <section class="sidebar-section"><div class="section-label">About</div><p>A focused space for ${profile.name}'s identity, links, and profile details.</p></section>
        <section class="sidebar-section"><div class="section-label">Links</div><a class="sidebar-link" href="${profile.github}" target="_blank" rel="noreferrer"><span>GitHub</span><span aria-hidden="true">↗</span></a><a class="sidebar-link" href="${profile.website}" target="_blank" rel="noreferrer"><span>eaglegnick.me</span><span aria-hidden="true">↗</span></a><a class="sidebar-link" href="${profile.alternateWebsite}" target="_blank" rel="noreferrer"><span>website.lordeagle.tech</span><span aria-hidden="true">↗</span></a></section>
        <section class="sidebar-section sidebar-note"><div class="section-label">Identity</div><p>${profile.handle}<br />${profile.location}</p></section>
      </aside>

      <section class="personal-space" id="details" aria-labelledby="details-title">
        <div class="section-heading">
          <div><div class="eyebrow">Profile details</div><h2 id="details-title">About ${profile.name}</h2></div>
          <p>Everything here comes from the verified public profile.</p>
        </div>

        <div class="detail-grid">
          <article class="detail-card detail-card-wide"><div class="detail-label">Bio</div><strong>${profile.bio}</strong><p>A short line from the profile, kept exactly as provided.</p></article>
          <article class="detail-card"><div class="detail-label">Handle</div><strong>@${profile.handle}</strong><p>GitHub identity</p></article>
          <article class="detail-card"><div class="detail-label">Location</div><strong>${profile.location}</strong><p>Profile location</p></article>
          <article class="detail-card"><div class="detail-label">Company</div><strong>${profile.company}</strong><p>Profile affiliation</p></article>
          <article class="detail-card"><div class="detail-label">Website</div><a class="detail-link" href="${profile.website}" target="_blank" rel="noreferrer">eaglegnick.me ↗</a><p>Personal website</p></article>
        </div>

        <section class="custom-tools" id="connect" aria-labelledby="connect-title">
          <div class="section-heading compact-heading"><div><div class="eyebrow">Custom controls</div><h2 id="connect-title">Connect with ${profile.name}</h2></div></div>
          <div class="action-grid">
            <button class="action-card" id="copy-handle" type="button"><span class="action-icon" aria-hidden="true">@</span><span><strong>Copy handle</strong><small id="copy-status">Copy @${profile.handle} to your clipboard</small></span><span class="action-arrow" aria-hidden="true">→</span></button>
            <a class="action-card" href="${profile.github}" target="_blank" rel="noreferrer"><span class="action-icon" aria-hidden="true">◌</span><span><strong>Open GitHub</strong><small>View the full public profile</small></span><span class="action-arrow" aria-hidden="true">↗</span></a>
            <a class="action-card" href="${profile.website}" target="_blank" rel="noreferrer"><span class="action-icon" aria-hidden="true">↗</span><span><strong>Visit website</strong><small>Open eaglegnick.me</small></span><span class="action-arrow" aria-hidden="true">↗</span></a>
            <a class="action-card" href="${profile.alternateWebsite}" target="_blank" rel="noreferrer"><span class="action-icon" aria-hidden="true">↗</span><span><strong>Open second site</strong><small>Open website.lordeagle.tech</small></span><span class="action-arrow" aria-hidden="true">↗</span></a>
          </div>
        </section>
      </section>
    </div>
  </main>

  <footer class="site-footer"><span>© ${new Date().getFullYear()} ${profile.name}</span><span>${profile.handle} · personal profile</span></footer>
`;

const themeToggle = document.querySelector("#theme-toggle");
themeToggle.addEventListener("click", () => {
  const dark = document.body.classList.toggle("is-dark");
  themeToggle.setAttribute("aria-pressed", String(dark));
  themeToggle.querySelector("span").textContent = dark ? "☀" : "◐";
});

document.querySelector("#copy-handle").addEventListener("click", async () => {
  const status = document.querySelector("#copy-status");
  try {
    await navigator.clipboard.writeText(`@${profile.handle}`);
    status.textContent = "Copied to your clipboard";
  } catch {
    status.textContent = `Use @${profile.handle}`;
  }
});
