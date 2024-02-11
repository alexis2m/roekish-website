import Script from 'next/script';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Roekish - Soyez propulsés par le web',
  description:
    'Roekish est une agence web qui vous aide à propulser votre entreprise sur le web. Nous vous aidons à créer des sites web performants et à améliorer votre présence en ligne.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="fr">
      {!isDev ? (
        <Script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id="9ad0e597-9fa4-4690-8ca2-18a964ab087f"
        />
      ) : null}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
