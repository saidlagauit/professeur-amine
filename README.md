# French Teacher Landing Page

Landing page built with Next.js for an online French teacher offering general French courses and TCF preparation.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- lucide-react (icons)

## Project Structure

- `app/page.tsx`: Composes all sections of the landing page
- `components/`: UI sections (`Hero`, `About`, `Benefits`, `Pricing`, `Testimonials`, `FAQ`, `FinalCTA`, `Footer`, `WhatsAppButton`)
- `constants/teacherData.ts`: Main content source (teacher profile, offers, FAQs, testimonials, WhatsApp link)

## Getting Started

Install dependencies:

```bash
npm install
```

Run in development:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm run start`: Run production server
- `npm run lint`: Run ESLint

## Customize Content

To adapt this landing page for another teacher or school, update `constants/teacherData.ts`:

- `name`, `role`, `experience`, `phone`, `whatsappLink`
- `about` section content
- `offers` and pricing
- `testimonials`
- `faqs`
- `benefits`

## Deployment

Build and run locally:

```bash
npm run build
npm run start
```

You can deploy to Vercel or any Node.js hosting platform that supports Next.js.
