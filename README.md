# Humane Sleep Project Website

A modern, responsive website for the Humane Sleep Project, built with Next.js 13+ and TypeScript. This website serves as the digital presence for the Humane Sleep Project.

## 🌟 Features

- **Modern Design**: Beautiful starry night theme with glassy UI elements
- **Responsive Layout**: Fully responsive design that works on all devices
- **Performance Optimized**: Fast loading times and smooth animations
- **Accessibility**: Built with accessibility in mind
- **SEO Friendly**: Optimized for search engines
- **Interactive Elements**: Engaging user interface with smooth transitions

## 🛠️ Tech Stack

- **Framework**: [Next.js 13+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: 
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Material-UI](https://mui.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── information/       # Information page
│   ├── events/            # Events page
│   └── partners/          # Partners page
├── components/            # Shared components
│   ├── common/           # Common UI components
│   │   └── ImageMasonry/  # Image gallery component
│   ├── layout/            # Layout components
│   │   ├── Navigation/    # Navigation component
│   │   ├── Footer/        # Footer component
│   │   └── Stars/         # Background stars component
├── styles/                # Styling
│   ├── theme/             # MUI theme configuration
│   │   ├── index.ts       # Theme entry point
│   │   ├── palette.ts     # Color palette
│   │   └── typography.ts  # Typography settings
│   └── shared/            # Shared styles
├── utils/                 # Utility functions
│   ├── constants.ts      # Application constants

```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/humane-sleep-project.git
   cd humane-sleep-project
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

```bash
npm run build
# or
yarn build
```

## 🧪 Testing

```bash
npm run test
# or
yarn test
```

## 📝 Code Style

This project uses ESLint and Prettier for code formatting. To format your code:

```bash
npm run lint
# or
yarn lint
```

## 🌐 Deployment

The site is deployed on Vercel. Any push to the main branch will trigger a new deployment.

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SITE_URL=your-site-url
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop computers
- Large screens

## 🎨 Theme Customization

The theme can be customized by modifying the files in `src/styles/theme/`:
- `index.ts`: Main theme configuration
- `palette.ts`: Color palette settings
- `typography.ts`: Typography settings

## 🔍 SEO Optimization

The website is optimized for search engines with:
- Proper meta tags
- Semantic HTML
- Optimized images
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- [Vinay Srinivasan] - Lead Developer

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Material-UI](https://mui.com/) for the component library
- [Framer Motion](https://www.framer.com/motion/) for the animations

## 📞 Contact

For any questions or concerns, please contact:
- Organization email: HumaneSleepProject@gmail.com
- Developer email: zapperwing@gmail.com
- Website: [humanesleepproject.com](https://humanesleepproject.com)
