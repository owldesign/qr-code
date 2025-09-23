# QR Code Generator

A modern, responsive QR code generator built with Next.js 15, React 19, and TypeScript. Create professional QR codes instantly with support for multiple formats and sizes, featuring a beautiful dark/light theme system.

## Features

- 🎨 **Modern UI** - Built with shadcn/ui components and Tailwind CSS v4
- 🌙 **Dark/Light Theme** - Automatic system detection with manual toggle
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- 🔗 **URL Validation** - Real-time validation with smooth animations
- 📥 **Multiple Formats** - Download as PNG (with transparency) or SVG
- 📐 **Various Sizes** - Small (300px), Medium (600px), Large (1200px), Huge (3000px)
- ⚡ **Fast Development** - Powered by Turbopack for lightning-fast builds
- 🎭 **Animated Components** - Smooth transitions and engaging animations

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 with PostCSS
- **Components**: shadcn/ui
- **QR Generation**: qrcode library
- **Theme System**: next-themes
- **Fonts**: Geist Sans & Geist Mono
- **Build Tool**: Turbopack

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd qr-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Development Commands

```bash
# Start development server (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Usage

1. **Enter URL**: Type any valid URL in the input field
2. **Generate**: The "Generate QR Code" button appears with animation when a valid URL is entered
3. **Preview**: View the generated QR code in the preview section
4. **Choose Format**: Select between PNG (with transparency) or SVG format
5. **Download**: Choose your preferred size and download instantly

## Project Structure

```
app/
├── components/
│   └── QRCodeGenerator.tsx    # Main QR generator component
├── layout.tsx                 # Root layout with theme provider
├── page.tsx                   # Home page
└── globals.css               # Global styles and theme variables

components/
├── ui/                       # shadcn/ui components
├── theme-provider.tsx        # Theme context provider
└── theme-toggle.tsx          # Theme toggle button

lib/
└── utils.ts                  # Utility functions
```

## Theme System

The application supports both light and dark themes with:
- Automatic system preference detection
- Manual toggle via the sun/moon icon (top-right corner)
- Smooth transitions between themes
- Persistent theme selection

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).