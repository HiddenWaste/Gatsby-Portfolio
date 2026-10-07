# Styling & Tailwind Guide

This guide is written for you to easily customize, experiment with, and style the site without needing prior deep CSS knowledge.

---

## 1. Why Tailwind CSS?

Instead of maintaining brittle stylesheets with conflicting classes, Tailwind CSS allows you to style elements directly inside your JSX code using human-readable utility class names.

For example:
```jsx
<div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
  <h2 className="text-xl font-bold text-slate-900">Card Title</h2>
  <p className="text-slate-600 mt-2">Readable paragraph text.</p>
</div>
```

---

## 2. Common Utility Classes Reference

### Spacing & Layout
| Class | Meaning | Example |
|---|---|---|
| `p-4` / `p-6` / `p-8` | Padding (internal spacing) | `p-6` = 1.5rem (24px) |
| `px-4 py-2` | Horizontal padding (`px`) / Vertical padding (`py`) | Buttons, badges |
| `m-4` / `mt-6` / `mb-8` | Margin (outer spacing) / Margin top / Margin bottom | Spacing out sections |
| `space-y-4` | Automatically adds vertical gap between child elements | Container lists |
| `gap-4` / `gap-6` | Gap between grid or flex items | Grids, button bars |

### Flexbox & Grid
- **Flex row with items centered**: `className="flex items-center justify-between"`
- **Flex column**: `className="flex flex-col space-y-4"`
- **Responsive Grid**:
  ```jsx
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* 1 column on phone, 2 on tablet, 3 on large screens */}
  </div>
  ```

### Colors & Typography
- **Text Color**: `text-slate-900` (dark charcoal), `text-slate-600` (muted body), `text-purple-700` (accent)
- **Background Color**: `bg-white`, `bg-slate-50`, `bg-purple-100`, `bg-purple-700`
- **Text Size**: `text-xs` (tiny), `text-sm` (small), `text-base` (standard body), `text-xl` (header), `text-3xl` / `text-4xl` (large title)
- **Font Weight**: `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`

### Rounded Corners & Shadows
- **Borders**: `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`
- **Shadows**: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`
- **Subtle Border**: `border border-slate-200/80`

### Hover States & Transitions
Add `hover:` prefix to any class:
```jsx
<button className="bg-purple-700 hover:bg-purple-800 text-white transition duration-200">
  Click Me
</button>
```

---

## 3. Mobile Responsiveness: How It Works

Tailwind is **mobile-first**:
- Classes without prefixes apply to **all screens** (including small mobile phones).
- Add `sm:` for small tablets (640px+).
- Add `md:` for iPads / small laptops (768px+).
- Add `lg:` for desktop monitors (1024px+).

### Example
```jsx
<div className="flex flex-col md:flex-row gap-6">
  {/* On mobile: items stack vertically (flex-col) */}
  {/* On screen >= 768px: items sit side-by-side (md:flex-row) */}
</div>
```

---

## 4. Custom Brand Colors

The project theme in `tailwind.config.js` defines the `brand` palette:
- `bg-brand-50` / `text-brand-50` (soft lilac highlight)
- `bg-brand-500` / `text-brand-500` (`#8954a8` original accent)
- `bg-brand-700` / `text-brand-700` (`#663399` deep signature purple)

You can adjust these or add new color tokens directly in [tailwind.config.js](file:///home/compy/code/gatsby-portfolio/tailwind.config.js).

---

## 5. Article & Markdown Typography (`.prose-custom`)

When Markdown content is transformed to HTML, it is wrapped in `.prose-custom` defined in [src/global.css](file:///home/compy/code/gatsby-portfolio/src/global.css).
This ensures:
- Paragraphs are left-aligned, readable, and properly spaced.
- Headers (`#`, `##`, `###`) have pleasant hierarchy and contrast.
- Code blocks have dark backgrounds and horizontal scrollbars.
- Blockquotes have a purple accent border.

To tweak the reading appearance of your essays, simply edit `.prose-custom` in `src/global.css`.

---

## 6. Outside Learning Resources

- [Tailwind CSS Interactive Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Official Tailwind CSS Documentation](https://tailwindcss.com/docs/utility-first)
- [Tailwind Play (Online Sandbox)](https://play.tailwindcss.com/)
