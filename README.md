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

4. **3D Card Observation Engine**:
   - Interactive 3D perspective tilt that dynamically tracks mouse movement across the **Focus Tags**, **Personal Principle Cards**, and the **Contact Box**.
   - Multilayered parallax depth: titles, numbers, and badges float along the Z-axis above the card canvas.
   - Moving warm light glare sheen that realistically reflects across card surfaces during inspection.

5. **Curated Sections**:
   - **Hero**: Monogram (`WC`), status indicator with glowing ember pulse, and quick email action.
   - **About / Perspective**: Philosophy of craft and 3D skill badge cards.
   - **Path & Experience**: Clean timeline layout.
   - **Personal Principles**: Interactive 3D triptych outlining core mindset.
   - **Contact & Footer**: 3D contact card with email copy button, toast confirmation, and real-time local clock.

6. **Zero Dependencies**:
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

