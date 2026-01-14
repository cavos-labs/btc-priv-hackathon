# BTC Privacy Hackathon Landing Page

Official landing page for the BTC Privacy Hackathon in Costa Rica - Collaboration between Starknet Foundation and Cavos.

## 🚀 Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

## 🎨 Design

This landing page uses the same design system as Cavos:
- **Colors**: White background (#FFFFFF), Black text (#000000)
- **Fonts**: Geist (body) and Ramagothicbold (headings)
- **Styling**: Tailwind CSS v4
- **Framework**: Next.js 16 (App Router)

## 📁 Structure

```
btc-priv-hackathon/
├── app/
│   ├── fonts/          # Ramagothicbold font
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Landing page
│   └── globals.css     # Global styles
├── components/
│   └── Header.tsx      # Header component
├── lib/
│   └── fonts.ts        # Font configuration
└── public/
    └── cavos-black.png # Cavos logo
```

## 🔗 Links

- Header navigation: "About" and "Apply"
- Apply button links to DoraHacks registration
- Single page design with smooth scrolling
