# Minimalist Profile & Warm Luminescence

A quiet, distraction-free profile and portfolio website crafted with deliberate restraint, comfortable contrast, and warm incandescent ambient lighting.

---

## Aesthetic Philosophy

- **Low Brightness & Easy on the Eyes**: Built on deep zinc and charcoal grays (`#151518`, `#1b1b1f`, `#232328`, `#292930`) with soft whites (`#ffffff`, `#ededf0`) rather than stark pitch contrasts.
- **Warm Light Accents**: Ambient warm orange and amber luminescence (`#ea580c`, `#f97316`, `#fb923c`, `#fdba74`) replicating the calm warmth of a reading lamp (2400K–2700K).
- **Strictly Curated Palette**: Exclusively grays, whites, and warm orange lighting. Zero distracting multi-color hues.
- **Pure Minimalism**: Clean typographic hierarchy, generous whitespace, and focused content structure.

---

## Features

1. **Minimalist Header Toggles (Theme & Warmth)**:
   - Streamlined, label-free icon toggles in the top bar.
   - **Theme Toggle**: Switch between Dark Mode and soft, eye-friendly Light Mode with a single click.
   - **Warmth Toggle**: Turn the warm ambient lighting and glowing atmosphere On or Off directly.
   - Preferences are automatically saved in localStorage.

3. **Solid Reactive Orange Cursor**:
   - Crisp, solid warm orange cursor disc (zero blur) with precision central focal pip that follows pointer movements smoothly.
   - When overlaying interactive elements (tags, cards, buttons, timeline entries, links, headings), the cursor smoothly expands into a tactile lens while the underlying elements shift into warm orange and high-contrast charcoal/white accents to match the website.

4. **Curated Sections**:
   - **Hero**: Clean moniker, availability status indicator with glowing ember pulse, and quick email action.
   - **About / Perspective**: Philosophy of craft and skill tag cloud.
   - **Path & Experience**: Clean timeline layout.
   - **Design Principles**: Triptych layout outlining core values.
   - **Contact & Footer**: Direct email copy button with toast feedback, platform links, and real-time local clock.

5. **Zero Dependencies**:
   - Built with pure HTML5, CSS3, and modern vanilla JavaScript.
   - No build tools, package managers, or frameworks required.
   - Instant load times and 100% responsive across mobile, tablet, and desktop.

---

## How to Run & Preview

Simply double-click `index.html` or open it directly in any modern web browser (Edge, Chrome, Safari, Firefox).

---

## Customization Guide

- **Your Name & Monogram**: In `index.html`, replace `AV` in `.brand-monogram` and `Alex Vance` in `.hero-title`.
- **Your Bio & Tagline**: Update the `.hero-tagline` and `.about-text` paragraphs.
- **Your Email Address**: Change `data-email="wyngardcalleja27@gmail.com"` on both copy buttons (`#copyEmailBtn` and `#copyEmailBtnSecondary`) as well as the `mailto:` link.
- **Social Links**: Replace the URLs in `.social-links` with your GitHub, X, LinkedIn, or personal domain.

