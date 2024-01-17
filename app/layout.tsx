import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import Head from 'next/head';


export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Include the meta tag here */}
        <meta name="google-site-verification" content="-GsOjATdw51ONR2Wfwq0t0dmx0NM6MxjpR6f1yRiVZ4" />
      </Head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
