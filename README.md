# Autonova — Landing Page

Landing page for a freelance Python automation service.
Minimalist, editorial-style design, conversion-optimized, responsive, and with no build dependencies.

---

## Estructure

```
landing-page/
├── index.html   # Estructure and content
├── style.css    # Styling and responsiveness
└── main.js      # Scroll reveal, nav sticky, menu mobile
```

---

## Page Sections

| Section | Objective |
|---|---|
| Hero | Proposta de valor + CTA único |
| Logos | Prova social rápida |
| Benefícios | 4 argumentos objetivos |
| Depoimentos | Credibilidade com contexto real |
| Como funciona | 3 passos sem jargão |
| CTA final | Conversão com WhatsApp e e-mail |

---

## Local Use

Open index.html directly in your browser, no server required

```bash
# Option 1: open in CMD
open index.html           # macOS
start index.html          # Windows
xdg-open index.html       # Linux

# Option 2: Drag and drop the file into your browser
```

---

## Deploy in Vercel

1. Push the folder to a public GitHub repository
2. Acess [vercel.com](https://vercel.com) → **Add New Project**
3. Import the repository
4. Click **Deploy** - no additional setup required

Your page will be live in under a minute.

---

## Customization required before publishing.

Search and replace in `index.html`:
| Placeholder | Replace |
|---|---|
| `[your name]` | Your fullname |
| `[your user]` | your Git user |
| `[profile]` | Linkedin profile |
| `55XXXXXXXXXXX` | Number DDI+DDD (ex: `5592999990000`) |
| `@email.com` | Contact email |

The fictional client names (Marcos Ribeiro, Ana Cristina, etc.) can be kept or replaced with real clients once testimonials are available.

---

## Fonts

- **Fraunces** — display serif, títulos
- **DM Sans** — sans-serif, text bofy

Fonts are loaded via Google Fonts. To remove the external dependency, download the .woff2 files and update the @font-face declarations in the CSS.
---

## Tokens de design

All colors and sizes are defined under `:root` in `style.css:`

```css
:root {
  --bg:      #F7F5F0;   /* main backgorund */
  --ink:     #0E0D0B;   /* main text */
  --accent:  #D4820A;   /* âmbar — CTA and highlits */
  --border:  #D8D4CC;   /* dividers */
}
```

To change the accent color, simply update the --accent variable.
---

## Licence

MIT License - use, adapt, and distribute freely.
