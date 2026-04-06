# Sylvanor Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bilingual (CZ/EN) static landing page for the Sylvanor book with purchase links to Gumroad, hosted on GitHub Pages.

**Architecture:** Single HTML page with separate CSS and JS files. No frameworks — vanilla HTML/CSS/JS. CSS custom properties for theming. JS handles language toggle and scroll animations. All text in both languages in the DOM, toggled via `lang-cz` / `lang-en` CSS classes.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), vanilla JavaScript, Google Fonts (Crimson Text + Inter)

---

## File Structure

```
Sylvanor/
├── index.html          # Complete page markup (all 9 sections, both languages)
├── css/
│   └── style.css       # All styles: reset, layout, sections, responsive
├── js/
│   └── main.js         # Language toggle, scroll animations, sticky nav, mobile menu
├── images/             # Hero background, emblem, creature placeholders
│   ├── hero-forest.jpg
│   └── emblem.png
└── docs/               # Specs and plans (already exists)
```

---

### Task 1: Project scaffold and base HTML structure

**Files:**
- Create: `index.html`
- Create: `css/style.css`
- Create: `js/main.js`

- [ ] **Step 1: Create directory structure**

```bash
cd C:/Users/Lenka/Projekty/Sylvanor
mkdir -p css js images
```

- [ ] **Step 2: Create index.html with base structure and navigation**

Create `index.html` with:
- DOCTYPE, html lang="cs", head with meta charset, viewport, Google Fonts link (Crimson Text 400/700 + Inter 400/600), link to css/style.css
- Body with: `<nav>` containing logo "Sylvanor", section links (O knize, Svět, Bytosti, Ukázka, Koupit, O autorce — each with `lang-cz` and `lang-en` variants), CZ/EN toggle button, hamburger button for mobile
- Empty section placeholders: `<section id="hero">`, `<section id="about">`, `<section id="world">`, `<section id="creatures">`, `<section id="preview">`, `<section id="buy">`, `<section id="author">`, `<footer>`
- Script tag loading `js/main.js` before `</body>`

```html
<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sylvanor — Les, který ukazuje cesty těm, kteří umí naslouchat</title>
  <meta name="description" content="Sylvanor — kouzelný les plný tajemných bytostí. Dětská fantasy kniha ke stažení v PDF.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-lang="cz">

  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="#hero" class="nav-logo">Sylvanor</a>
      <button class="nav-hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="nav-links">
        <li><a href="#about"><span class="lang-cz">O knize</span><span class="lang-en">About</span></a></li>
        <li><a href="#world"><span class="lang-cz">Svět</span><span class="lang-en">World</span></a></li>
        <li><a href="#creatures"><span class="lang-cz">Bytosti</span><span class="lang-en">Creatures</span></a></li>
        <li><a href="#preview"><span class="lang-cz">Ukázka</span><span class="lang-en">Preview</span></a></li>
        <li><a href="#buy"><span class="lang-cz">Koupit</span><span class="lang-en">Buy</span></a></li>
        <li><a href="#author"><span class="lang-cz">O autorce</span><span class="lang-en">Author</span></a></li>
      </ul>
      <button class="lang-toggle" id="lang-toggle">
        <span class="lang-cz">EN</span>
        <span class="lang-en">CZ</span>
      </button>
    </div>
  </nav>

  <section id="hero" class="hero">
    <!-- Task 3 -->
  </section>

  <section id="about" class="section about">
    <!-- Task 4 -->
  </section>

  <section id="world" class="section world">
    <!-- Task 5 -->
  </section>

  <section id="creatures" class="section creatures">
    <!-- Task 6 -->
  </section>

  <section id="preview" class="section preview">
    <!-- Task 7 -->
  </section>

  <section id="buy" class="section buy">
    <!-- Task 8 -->
  </section>

  <section id="author" class="section author">
    <!-- Task 9 -->
  </section>

  <footer class="footer">
    <!-- Task 10 -->
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Create base CSS with reset, custom properties, and nav styles**

Create `css/style.css`:

```css
/* === Reset & Base === */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg-darkest: #050f0a;
  --bg-dark: #0a2e1a;
  --bg-medium: #1a4a2e;
  --bg-card: #1a3a2a;
  --gold: #c8a96e;
  --gold-dim: rgba(200, 169, 110, 0.3);
  --text-light: #d4d4c8;
  --text-muted: #8fbc8f;
  --font-heading: 'Crimson Text', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background: var(--bg-darkest);
  color: var(--text-light);
  line-height: 1.7;
}

/* === Language Toggle === */
body[data-lang="cz"] .lang-en { display: none; }
body[data-lang="en"] .lang-cz { display: none; }

/* === Navbar === */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(5, 15, 10, 0.8);
  backdrop-filter: blur(10px);
  transition: background 0.3s;
}
.navbar.scrolled { background: rgba(5, 15, 10, 0.95); }

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--gold);
  text-decoration: none;
  letter-spacing: 2px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 24px;
}
.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}
.nav-links a:hover { color: var(--gold); }

.lang-toggle {
  background: transparent;
  border: 1px solid var(--gold-dim);
  color: var(--gold);
  padding: 4px 14px;
  border-radius: 16px;
  cursor: pointer;
  font-size: 0.85rem;
  font-family: var(--font-body);
  transition: background 0.3s;
}
.lang-toggle:hover { background: rgba(200, 169, 110, 0.1); }

.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.nav-hamburger span {
  width: 24px;
  height: 2px;
  background: var(--gold);
  transition: transform 0.3s;
}

/* === Section base === */
.section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 24px;
}

/* === Scroll animation === */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* === Responsive === */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: rgba(5, 15, 10, 0.95);
    flex-direction: column;
    padding: 16px 24px;
    gap: 12px;
  }
  .nav-links.open { display: flex; }
  .nav-hamburger { display: flex; }
}
```

- [ ] **Step 4: Create main.js with language toggle, sticky nav, and scroll animations**

Create `js/main.js`:

```javascript
(function () {
  // Language toggle
  const langToggle = document.getElementById('lang-toggle');
  const body = document.body;

  const savedLang = localStorage.getItem('sylvanor-lang');
  if (savedLang) body.dataset.lang = savedLang;

  langToggle.addEventListener('click', function () {
    const newLang = body.dataset.lang === 'cz' ? 'en' : 'cz';
    body.dataset.lang = newLang;
    localStorage.setItem('sylvanor-lang', newLang);
    document.documentElement.lang = newLang === 'cz' ? 'cs' : 'en';
  });

  // Mobile hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });

  // Sticky navbar background
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Scroll fade-in animation
  var fadeElements = document.querySelectorAll('.fade-in');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  fadeElements.forEach(function (el) { observer.observe(el); });
})();
```

- [ ] **Step 5: Open in browser to verify base structure**

```bash
cd C:/Users/Lenka/Projekty/Sylvanor
start index.html
```

Expected: Dark page with gold navigation bar, empty sections. Language toggle switches between CZ/EN labels. Hamburger menu appears on narrow window.

- [ ] **Step 6: Commit**

```bash
cd C:/Users/Lenka/Projekty/Sylvanor
git add index.html css/style.css js/main.js
git commit -m "feat: add project scaffold with nav, base CSS, and language toggle"
```

---

### Task 2: Copy images to project

**Files:**
- Copy to: `images/hero-forest.jpg`
- Copy to: `images/emblem.png`

- [ ] **Step 1: Copy the hero forest image and emblem**

```bash
cd C:/Users/Lenka/Projekty/Sylvanor
cp "C:/Users/Lenka/Downloads/salebra_A_hyper-realistic_photograph_of_Sylvanor_the_living_l_eb531cbc-c9a4-428b-ad07-ac4486c316f2_3.png" images/hero-forest.png
cp "C:/Users/Lenka/Downloads/salebra_Ancient_forest_emblem_of_Sylvanor_circular_labyrinth__d1881004-1a03-4be8-8f30-0195109b2a99_2.png" images/emblem.png
```

- [ ] **Step 2: Commit**

```bash
cd C:/Users/Lenka/Projekty/Sylvanor
git add images/
git commit -m "feat: add hero forest and emblem images"
```

---

### Task 3: Hero section

**Files:**
- Modify: `index.html` — replace `<section id="hero">` contents
- Modify: `css/style.css` — add hero styles

- [ ] **Step 1: Add hero HTML to index.html**

Replace the `<section id="hero">` block with:

```html
<section id="hero" class="hero">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1 class="hero-title">Sylvanor</h1>
    <p class="hero-subtitle">
      <span class="lang-cz">„Les, který ukazuje cesty těm, kteří umí naslouchat"</span>
      <span class="lang-en">"The forest that reveals its paths to those who know how to listen"</span>
    </p>
    <a href="#buy" class="hero-cta">
      <span class="lang-cz">Koupit PDF →</span>
      <span class="lang-en">Buy PDF →</span>
    </a>
  </div>
  <div class="hero-scroll">▼</div>
</section>
```

- [ ] **Step 2: Add hero CSS to style.css**

Append to `css/style.css`:

```css
/* === Hero === */
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url('../images/hero-forest.png') center/cover no-repeat;
  overflow: hidden;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(5, 15, 10, 0.6) 0%,
    rgba(5, 15, 10, 0.4) 50%,
    rgba(5, 15, 10, 0.8) 100%
  );
}
.hero-content {
  position: relative;
  z-index: 1;
  padding: 0 24px;
}
.hero-title {
  font-family: var(--font-heading);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 6px;
  text-shadow: 0 0 40px rgba(200, 169, 110, 0.3);
  margin-bottom: 16px;
}
.hero-subtitle {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  color: var(--text-light);
  opacity: 0.85;
  max-width: 600px;
  margin: 0 auto 32px;
}
.hero-cta {
  display: inline-block;
  border: 1px solid var(--gold-dim);
  color: var(--gold);
  padding: 12px 36px;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 1px;
  transition: background 0.3s, transform 0.3s;
}
.hero-cta:hover {
  background: rgba(200, 169, 110, 0.15);
  transform: translateY(-2px);
}
.hero-scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--gold);
  opacity: 0.4;
  font-size: 1.2rem;
  animation: bounce 2s infinite;
  z-index: 1;
}
@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}
```

- [ ] **Step 3: Verify in browser**

Refresh `index.html`. Expected: Full-screen hero with dark forest background, gold "Sylvanor" title, italic subtitle, "Koupit PDF" button, bouncing scroll arrow. Language toggle switches subtitle and CTA text.

- [ ] **Step 4: Commit**

```bash
cd C:/Users/Lenka/Projekty/Sylvanor
git add index.html css/style.css
git commit -m "feat: add hero section with background image and CTA"
```

---

### Task 4: About the Book section

**Files:**
- Modify: `index.html` — replace `<section id="about">` contents
- Modify: `css/style.css` — add about styles

- [ ] **Step 1: Add about HTML**

Replace the `<section id="about">` block with:

```html
<section id="about" class="section about">
  <div class="about-grid fade-in">
    <div class="about-text">
      <h2>
        <span class="lang-cz">O knize</span>
        <span class="lang-en">About the Book</span>
      </h2>
      <p class="lang-cz">Sylvanor je kouzelný les, který nikdy není stejný. Je to živý lesní labyrint — spletitý, proměnlivý a plný cest, které se neustále mění. Každý den se Sylvanor trochu přeskupí: stezky se posunou, stromy si potichu vymění místa a zvuky zní jinak než včera.</p>
      <p class="lang-en">Sylvanor is a magical forest that is never the same. It is a living forest labyrinth — intricate, ever-changing, and full of paths that constantly shift. Every day Sylvanor rearranges itself: trails move, trees quietly swap places, and sounds ring differently than yesterday.</p>
      <p class="lang-cz">Cestu v Sylvanoru nelze najít očima ani na mapě. Najdeš ji jen tehdy, když se zastavíš a začneš poslouchat. Stromy k poutníkovi mluví zvuky — hlubokým hučením kmenů, šuměním listí, cvrlikáním ptáků i jemným chvěním pod nohama.</p>
      <p class="lang-en">You cannot find your way through Sylvanor with your eyes or a map. You find it only when you stop and begin to listen. The trees speak to travellers through sounds — the deep hum of trunks, the rustle of leaves, the chirping of birds, and a gentle vibration beneath your feet.</p>
      <p class="lang-cz">Sylvanor učí moudrosti. Ne takové, kterou si zapíšeš do sešitu, ale takové, která roste uvnitř tebe. Učí trpělivosti, klidu a tomu, že někdy je lepší chvíli mlčet a poslouchat, než hned mluvit.</p>
      <p class="lang-en">Sylvanor teaches wisdom. Not the kind you write in a notebook, but the kind that grows inside you. It teaches patience, calm, and the understanding that sometimes it is better to be quiet and listen than to speak right away.</p>
    </div>
    <div class="about-image">
      <img src="images/emblem.png" alt="Sylvanor emblem" loading="lazy">
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add about CSS**

Append to `css/style.css`:

```css
/* === About === */
.about { background: var(--bg-darkest); }

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-text h2 {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  color: var(--gold);
  margin-bottom: 24px;
}

.about-text p {
  margin-bottom: 16px;
  color: var(--text-light);
  opacity: 0.9;
}

.about-image {
  display: flex;
  justify-content: center;
}
.about-image img {
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 60px rgba(200, 169, 110, 0.15);
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .about-image { order: -1; }
  .about-image img { max-width: 250px; }
}
```

- [ ] **Step 3: Verify and commit**

```bash
cd C:/Users/Lenka/Projekty/Sylvanor
git add index.html css/style.css
git commit -m "feat: add About the Book section with emblem image"
```

---

### Task 5: World of Beastorie section

**Files:**
- Modify: `index.html` — replace `<section id="world">` contents
- Modify: `css/style.css` — add world card styles

- [ ] **Step 1: Add world HTML**

Replace the `<section id="world">` block with:

```html
<section id="world" class="section world">
  <h2 class="fade-in">
    <span class="lang-cz">Svět Beastorie</span>
    <span class="lang-en">The World of Beastorie</span>
  </h2>
  <p class="world-intro fade-in">
    <span class="lang-cz">Sylvanor je jen jednou částí světa jménem Beastorie. Kromě něj existuje ještě dalších šest říší a každá z nich má svůj vlastní hlas, barvu a povahu.</span>
    <span class="lang-en">Sylvanor is just one part of a world called Beastorie. Beyond it lie six other realms, each with its own voice, colour, and character.</span>
  </p>
  <div class="realm-grid">
    <div class="realm-card fade-in" style="--accent: #2d8a5e">
      <h3>Sylvanor</h3>
      <p class="lang-cz">Les naslouchání — živý labyrint, který ukazuje cestu těm, kdo umí poslouchat.</p>
      <p class="lang-en">The Forest of Listening — a living labyrinth that reveals its paths to those who listen.</p>
    </div>
    <div class="realm-card fade-in" style="--accent: #2d6a8a">
      <h3>Olyrion</h3>
      <p class="lang-cz">Země hlubokých vod — skrývá tajemství, otázky a odpovědi.</p>
      <p class="lang-en">Land of Deep Waters — hiding secrets, questions, and answers.</p>
    </div>
    <div class="realm-card fade-in" style="--accent: #c45a2d">
      <h3>Pyrrath</h3>
      <p class="lang-cz">Ohnivé pláně — země ohně, tepla a síly přetvářet.</p>
      <p class="lang-en">The Fiery Plains — a land of fire, warmth, and the power to transform.</p>
    </div>
    <div class="realm-card fade-in" style="--accent: #5a3d7a">
      <h3>Noxmar</h3>
      <p class="lang-cz">Říše stínů a snů — učí přijímat strach a konec věcí.</p>
      <p class="lang-en">Realm of Shadows and Dreams — teaches acceptance of fear and endings.</p>
    </div>
    <div class="realm-card fade-in" style="--accent: #c4a42d">
      <h3>Sahariel</h3>
      <p class="lang-cz">Zlaté písky — připomíná, že opravdová hodnota není vidět očima.</p>
      <p class="lang-en">Golden Sands — a reminder that true value cannot be seen with the eyes.</p>
    </div>
    <div class="realm-card fade-in" style="--accent: #6baed6">
      <h3>Aurethys</h3>
      <p class="lang-cz">Země větru a nebe — učí svobodě, snění a touze létat výš.</p>
      <p class="lang-en">Land of Wind and Sky — teaches freedom, dreams, and the desire to fly higher.</p>
    </div>
    <div class="realm-card fade-in" style="--accent: #7a7a7a">
      <h3>Drakemount</h3>
      <p class="lang-cz">Hory síly a nezlomnosti — odraz touhy po síle, která vydrží.</p>
      <p class="lang-en">Mountains of Strength — a reflection of the desire for enduring strength.</p>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add world CSS**

Append to `css/style.css`:

```css
/* === World === */
.world {
  background: var(--bg-dark);
  max-width: 100%;
  padding: 100px 24px;
}
.world h2 {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  color: var(--gold);
  text-align: center;
  margin-bottom: 16px;
}
.world-intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 48px;
  color: var(--text-muted);
}
.realm-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.realm-card {
  background: var(--bg-card);
  border-radius: 12px;
  padding: 28px;
  border-left: 3px solid var(--accent);
  transition: transform 0.3s, box-shadow 0.3s;
}
.realm-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}
.realm-card h3 {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  color: var(--gold);
  margin-bottom: 8px;
}
.realm-card p {
  font-size: 0.9rem;
  color: var(--text-muted);
}

@media (max-width: 1024px) {
  .realm-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .realm-grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Verify and commit**

```bash
cd C:/Users/Lenka/Projekty/Sylvanor
git add index.html css/style.css
git commit -m "feat: add World of Beastorie section with 7 realm cards"
```

---

### Task 6: Creatures of Sylvanor section

**Files:**
- Modify: `index.html` — replace `<section id="creatures">` contents
- Modify: `css/style.css` — add creature styles

- [ ] **Step 1: Add creatures HTML**

Replace the `<section id="creatures">` block with:

```html
<section id="creatures" class="section creatures">
  <h2 class="fade-in">
    <span class="lang-cz">Bytosti Sylvanoru</span>
    <span class="lang-en">Creatures of Sylvanor</span>
  </h2>
  <div class="creature-grid">
    <div class="creature-card fade-in">
      <div class="creature-icon">🦌</div>
      <h3>Tarnen</h3>
      <p class="creature-role">
        <span class="lang-cz">Strážce prahu</span>
        <span class="lang-en">Guardian of the Threshold</span>
      </p>
      <p class="creature-ancestors">
        <span class="lang-cz">Tisící předkové: vlk, jelen, orel, dračí ozvěna</span>
        <span class="lang-en">Ancient ancestors: wolf, stag, eagle, dragon echo</span>
      </p>
      <p class="lang-cz">Když se Tarnen objeví, les ztichne a zem pod nohama ztěžkne. Kdo chce projít dál, musí se nejdřív podívat dovnitř sebe.</p>
      <p class="lang-en">When Tarnen appears, the forest falls silent and the ground grows heavy. To pass, one must first look within.</p>
    </div>
    <div class="creature-card fade-in">
      <div class="creature-icon">🦉</div>
      <h3>Stínolísek</h3>
      <p class="creature-role">
        <span class="lang-cz">Průvodce mezi kroky</span>
        <span class="lang-en">Guide Between Steps</span>
      </p>
      <p class="creature-ancestors">
        <span class="lang-cz">Tisící předkové: sova, liška, jelen</span>
        <span class="lang-en">Ancient ancestors: owl, fox, deer</span>
      </p>
      <p class="lang-cz">Stínolísek neukazuje cestu na mapě, ale v hlavě a v srdci. Kdo ho potká, může v jeho očích uvidět své vlastní kroky.</p>
      <p class="lang-en">Stínolísek does not show the way on a map, but in the mind and heart. Those who meet him can see their own steps reflected in his eyes.</p>
    </div>
    <div class="creature-card fade-in">
      <div class="creature-icon">🐌</div>
      <h3>Lurein</h3>
      <p class="creature-role">
        <span class="lang-cz">Tkavec</span>
        <span class="lang-en">Weaver</span>
      </p>
      <p class="creature-ancestors">
        <span class="lang-cz">Tisící předkové: šnek, had, labuť</span>
        <span class="lang-en">Ancient ancestors: snail, snake, swan</span>
      </p>
      <p class="lang-cz">Lurein připomíná, že někdy je v pořádku jít pomalu a pustit to, co už nepotřebujeme. Kde projde, tráva se narovná a les se tiše nadechne.</p>
      <p class="lang-en">Lurein reminds us that sometimes it is okay to go slowly and let go of what we no longer need. Where he passes, the grass straightens and the forest quietly breathes in.</p>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add creatures CSS**

Append to `css/style.css`:

```css
/* === Creatures === */
.creatures {
  background: var(--bg-darkest);
}
.creatures h2 {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  color: var(--gold);
  text-align: center;
  margin-bottom: 48px;
}
.creature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.creature-card {
  background: var(--bg-card);
  border-radius: 16px;
  padding: 36px 28px;
  text-align: center;
  border: 1px solid rgba(200, 169, 110, 0.1);
  transition: transform 0.3s, border-color 0.3s;
}
.creature-card:hover {
  transform: translateY(-4px);
  border-color: var(--gold-dim);
}
.creature-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}
.creature-card h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--gold);
  margin-bottom: 4px;
}
.creature-role {
  font-size: 0.95rem;
  color: var(--gold);
  opacity: 0.7;
  font-style: italic;
  margin-bottom: 8px;
}
.creature-ancestors {
  font-size: 0.8rem;
  color: var(--text-muted);
  opacity: 0.6;
  margin-bottom: 16px;
}
.creature-card > p:last-of-type {
  color: var(--text-light);
  opacity: 0.85;
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .creature-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
}
```

- [ ] **Step 3: Verify and commit**

```bash
cd C:/Users/Lenka/Projekty/Sylvanor
git add index.html css/style.css
git commit -m "feat: add Creatures of Sylvanor section with 3 creature cards"
```

---

### Task 7: Book Preview section

**Files:**
- Modify: `index.html` — replace `<section id="preview">` contents
- Modify: `css/style.css` — add preview styles

- [ ] **Step 1: Add preview HTML**

Replace the `<section id="preview">` block with:

```html
<section id="preview" class="section preview">
  <h2 class="fade-in">
    <span class="lang-cz">Ukázka z knihy</span>
    <span class="lang-en">Book Preview</span>
  </h2>
  <blockquote class="preview-quote fade-in">
    <p class="lang-cz">Sylvanor není les, kde by se člověk učil z knih. Učíš se jinak. Tím, že zpomalíš, zaposloucháš se a začneš si všímat toho, co se děje kolem tebe. Kdo spěchá, snadno se ztratí, ale kdo naslouchá, začne lesu rozumět.</p>
    <p class="lang-en">Sylvanor is not a forest where you learn from books. You learn differently. By slowing down, listening closely, and noticing what is happening around you. Those who rush easily get lost, but those who listen begin to understand the forest.</p>
    <p class="lang-cz">V noci není Sylvanor nikdy úplně tmavý. Houby, květy a liány se rozzáří měkkým světlem, jako by les držel v dlani hvězdy. A když se dotkneš kůry stromu, ucítíš jemné chvění, jako když se les potichu směje.</p>
    <p class="lang-en">At night, Sylvanor is never truly dark. Mushrooms, flowers, and vines glow with soft light, as if the forest holds stars in its palms. And when you touch the bark of a tree, you feel a gentle trembling, as though the forest is quietly laughing.</p>
  </blockquote>
</section>
```

- [ ] **Step 2: Add preview CSS**

Append to `css/style.css`:

```css
/* === Preview === */
.preview {
  background: var(--bg-dark);
  max-width: 100%;
  padding: 100px 24px;
}
.preview h2 {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  color: var(--gold);
  text-align: center;
  margin-bottom: 48px;
}
.preview-quote {
  max-width: 700px;
  margin: 0 auto;
  padding: 40px;
  border-left: 3px solid var(--gold-dim);
  background: rgba(200, 169, 110, 0.03);
  border-radius: 0 12px 12px 0;
}
.preview-quote p {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  line-height: 1.9;
  color: var(--text-light);
  margin-bottom: 20px;
}
.preview-quote p:last-child { margin-bottom: 0; }
```

- [ ] **Step 3: Verify and commit**

```bash
cd C:/Users/Lenka/Projekty/Sylvanor
git add index.html css/style.css
git commit -m "feat: add Book Preview section with excerpt"
```

---

### Task 8: Buy section

**Files:**
- Modify: `index.html` — replace `<section id="buy">` contents
- Modify: `css/style.css` — add buy styles

- [ ] **Step 1: Add buy HTML**

Replace the `<section id="buy">` block with. NOTE: Replace `YOUR_GUMROAD_CZ_LINK` and `YOUR_GUMROAD_EN_LINK` with actual Gumroad product URLs, and `YOUR_GOOGLE_BOOKS_LINK` with the Google Books URL:

```html
<section id="buy" class="section buy">
  <div class="buy-content fade-in">
    <h2>
      <span class="lang-cz">Koupit knihu</span>
      <span class="lang-en">Buy the Book</span>
    </h2>
    <p class="buy-description">
      <span class="lang-cz">Stáhni si Sylvanor v PDF a vstup do kouzelného lesa, který tě naučí naslouchat.</span>
      <span class="lang-en">Download Sylvanor as a PDF and step into the magical forest that teaches you to listen.</span>
    </p>
    <div class="buy-buttons">
      <a href="YOUR_GUMROAD_CZ_LINK" target="_blank" rel="noopener" class="buy-btn buy-btn-primary">
        <span class="lang-cz">Koupit česky (PDF)</span>
        <span class="lang-en">Buy in Czech (PDF)</span>
      </a>
      <a href="YOUR_GUMROAD_EN_LINK" target="_blank" rel="noopener" class="buy-btn buy-btn-primary">
        <span class="lang-cz">Koupit anglicky (PDF)</span>
        <span class="lang-en">Buy in English (PDF)</span>
      </a>
    </div>
    <p class="buy-alt">
      <span class="lang-cz">Také dostupné na </span>
      <span class="lang-en">Also available on </span>
      <a href="YOUR_GOOGLE_BOOKS_LINK" target="_blank" rel="noopener">Google Books</a>
    </p>
    <p class="buy-note">
      <span class="lang-cz">Po zakoupení obdržíš PDF ke stažení ihned.</span>
      <span class="lang-en">After purchase you will receive the PDF for instant download.</span>
    </p>
  </div>
</section>
```

- [ ] **Step 2: Add buy CSS**

Append to `css/style.css`:

```css
/* === Buy === */
.buy {
  background: linear-gradient(135deg, var(--bg-darkest), #1a1a0a);
  max-width: 100%;
  padding: 100px 24px;
  text-align: center;
}
.buy-content {
  max-width: 600px;
  margin: 0 auto;
}
.buy h2 {
  font-family: var(--font-heading);
  font-size: 2.4rem;
  color: var(--gold);
  margin-bottom: 16px;
}
.buy-description {
  color: var(--text-light);
  margin-bottom: 36px;
  font-size: 1.1rem;
}
.buy-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.buy-btn {
  display: inline-block;
  padding: 14px 32px;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.buy-btn-primary {
  background: var(--gold);
  color: var(--bg-darkest);
}
.buy-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(200, 169, 110, 0.3);
}
.buy-alt {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 12px;
}
.buy-alt a {
  color: var(--gold);
  text-decoration: underline;
}
.buy-note {
  color: var(--text-muted);
  font-size: 0.8rem;
  opacity: 0.7;
}
```

- [ ] **Step 3: Verify and commit**

```bash
cd C:/Users/Lenka/Projekty/Sylvanor
git add index.html css/style.css
git commit -m "feat: add Buy section with Gumroad and Google Books links"
```

---

### Task 9: Author section

**Files:**
- Modify: `index.html` — replace `<section id="author">` contents
- Modify: `css/style.css` — add author styles

- [ ] **Step 1: Add author HTML**

Replace the `<section id="author">` block with:

```html
<section id="author" class="section author">
  <div class="author-content fade-in">
    <h2>
      <span class="lang-cz">O autorce</span>
      <span class="lang-en">About the Author</span>
    </h2>
    <p class="lang-cz">Lenka Vavrisová je autorkou světa Beastorie. Sylvanor vznikl z touhy vytvořit příběh, který učí děti naslouchat — sobě, druhým i světu kolem nich.</p>
    <p class="lang-en">Lenka Vavrisová is the creator of the world of Beastorie. Sylvanor was born from the desire to create a story that teaches children to listen — to themselves, to others, and to the world around them.</p>
  </div>
</section>
```

- [ ] **Step 2: Add author CSS**

Append to `css/style.css`:

```css
/* === Author === */
.author {
  background: var(--bg-darkest);
  text-align: center;
}
.author-content {
  max-width: 600px;
  margin: 0 auto;
}
.author h2 {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  color: var(--gold);
  margin-bottom: 24px;
}
.author p {
  color: var(--text-light);
  opacity: 0.9;
  font-size: 1.05rem;
}
```

- [ ] **Step 3: Verify and commit**

```bash
cd C:/Users/Lenka/Projekty/Sylvanor
git add index.html css/style.css
git commit -m "feat: add About the Author section"
```

---

### Task 10: Footer

**Files:**
- Modify: `index.html` — replace `<footer>` contents
- Modify: `css/style.css` — add footer styles

- [ ] **Step 1: Add footer HTML**

Replace the `<footer>` block with:

```html
<footer class="footer">
  <div class="footer-content">
    <p class="footer-logo">Sylvanor</p>
    <p>© 2026 Lenka Vavrisová</p>
  </div>
</footer>
```

- [ ] **Step 2: Add footer CSS**

Append to `css/style.css`:

```css
/* === Footer === */
.footer {
  background: var(--bg-darkest);
  border-top: 1px solid rgba(200, 169, 110, 0.1);
  padding: 40px 24px;
  text-align: center;
}
.footer-logo {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  color: var(--gold);
  letter-spacing: 2px;
  margin-bottom: 8px;
}
.footer p {
  color: var(--text-muted);
  font-size: 0.85rem;
}
```

- [ ] **Step 3: Verify and commit**

```bash
cd C:/Users/Lenka/Projekty/Sylvanor
git add index.html css/style.css
git commit -m "feat: add footer"
```

---

### Task 11: Final review and GitHub Pages setup

**Files:**
- Modify: `index.html` — verify all sections render correctly
- No new files

- [ ] **Step 1: Open the complete page in browser**

```bash
cd C:/Users/Lenka/Projekty/Sylvanor
start index.html
```

Verify: all 9 sections visible, language toggle works across all sections, scroll animations work, responsive layout works (resize browser window), all links point to correct sections.

- [ ] **Step 2: Replace placeholder Gumroad and Google Books links**

In `index.html`, replace:
- `YOUR_GUMROAD_CZ_LINK` with the actual Gumroad URL for the Czech PDF
- `YOUR_GUMROAD_EN_LINK` with the actual Gumroad URL for the English PDF
- `YOUR_GOOGLE_BOOKS_LINK` with the actual Google Books URL

- [ ] **Step 3: Commit final state**

```bash
cd C:/Users/Lenka/Projekty/Sylvanor
git add -A
git commit -m "feat: finalize landing page with all links"
```

- [ ] **Step 4: Create GitHub repository and enable Pages**

```bash
cd C:/Users/Lenka/Projekty/Sylvanor
gh repo create sylvanor --public --source=. --push
```

Then enable GitHub Pages: go to the repository Settings → Pages → Source: "Deploy from a branch" → Branch: `master`, folder: `/ (root)` → Save.

The site will be available at `https://<your-username>.github.io/sylvanor/` within a few minutes.
