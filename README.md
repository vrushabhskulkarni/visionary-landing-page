# VISIONARY Landing Page

A modern, animated landing page built with Next.js 14, TypeScript, and Tailwind CSS featuring scroll-triggered animations and wireframe 3D graphics.

## Features

- 🎨 Sleek, futuristic design with pixel art typography
- ✨ Smooth scroll animations that reveal content progressively
- 🌟 Animated star field background
- 🎯 Responsive design for all screen sizes
- 🖼️ Custom SVG wireframe graphics (rings, VR headset, hand models)
- ⚡ Built with Next.js 14 App Router
- 🎭 Intersection Observer API for scroll animations

## Sections

1. **Hero Section** - Main title with orbital ring animation
2. **Section 2** - "Unlock the most instinctive interface" with 3D ring
3. **Section 3** - "Interact the way it's meant to feel" with hand wireframe and CTA
4. **Section 4** - "Designed for spatial devices" with VR headset wireframe
5. **Section 5** - "Your hands are the most natural interface" with reaching hand
6. **Footer** - Navigation and company info

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd visionary-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme.

### Animations
Adjust animation timing in component files:
- `duration-1000` - Animation duration
- `delay-300` - Stagger delay for sequential animations

### Content
Edit the text content in each section component:
- `HeroSection.tsx`
- `Section2.tsx`
- `Section3.tsx`
- `Section4.tsx`
- `Section5.tsx`

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS Transitions + Intersection Observer
- **Graphics**: Custom SVG wireframes

## Project Structure

```
visionary-landing/
├── app/
│   ├── components/
│   │   ├── StarField.tsx
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Section2.tsx
│   │   ├── Section3.tsx
│   │   ├── Section4.tsx
│   │   ├── Section5.tsx
│   │   ├── Footer.tsx
│   │   └── useScrollReveal.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## License

MIT
