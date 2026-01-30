# Quick Setup Guide for VISIONARY Landing Page

## What You Got

A complete Next.js landing page with:
- ✅ Scroll-triggered animations
- ✅ All 5 sections from your Figma design
- ✅ Wireframe 3D graphics (ring, VR headset, hands)
- ✅ Starfield animated background
- ✅ Responsive navigation
- ✅ Modern, futuristic design

## Setup Steps

### 1. Extract the Project
Extract the `visionary-landing` folder to your desired location

### 2. Install Dependencies
Open terminal in the project folder and run:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. View in Browser
Open http://localhost:3000

## How the Scroll Animation Works

Each section uses the `useScrollReveal` hook that:
1. Detects when a section enters the viewport
2. Triggers opacity and transform animations
3. Creates a smooth "reveal" effect as you scroll

Elements fade in and slide from different directions:
- Hero: fades up
- Section 2: left text slides right, right image slides left
- Section 3: text fades up, hand slides in from right
- Section 4: VR headset slides from left, text from right
- Section 5: text fades up, hand scales and slides

## Customization Tips

### Change Animation Speed
In component files, modify:
```tsx
duration-1000  // Change to duration-500 for faster
delay-300      // Adjust stagger timing
```

### Modify Colors
Edit `tailwind.config.js` or use inline Tailwind classes

### Add More Sections
1. Create new component in `app/components/`
2. Import and add to `app/page.tsx`
3. Use `useScrollReveal` hook for animations

### Change Star Density
In `StarField.tsx`, modify the loop:
```tsx
for (let i = 0; i < 100; i++) // Change 100 to more/less stars
```

## Build for Production

When ready to deploy:
```bash
npm run build
npm start
```

## Deploy Options

- **Vercel**: Connect your GitHub repo (easiest)
- **Netlify**: Drag and drop the `.next` folder
- **Your Server**: Upload and run with `npm start`

## Need Help?

- Check the main README.md for detailed documentation
- All components are in `app/components/`
- Styling is in `app/globals.css` and Tailwind classes

Enjoy your new landing page! 🚀
