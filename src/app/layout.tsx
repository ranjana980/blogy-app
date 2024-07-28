import { Metadata } from 'next'
import Head from "next/head";

// next fonts 
import { Work_Sans } from "next/font/google";
const WorkSans = Work_Sans({ subsets: ["latin"] });

// css files
import '../app/globals.css'
import '../app/globals.scss'

// components 
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

// Meta data for site
export const metadata: Metadata = {
  title: "Blogy App",
  description: "Generated for Blogs",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (

  <html>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Untree.co" />
      <meta name="description" content="Blogy App" />
      <meta name="keywords" content="bootstrap, bootstrap5" />
      <link rel="shortcut icon" href="/favicon.png" />

      {/* Google Fonts */}
      <link rel="preload" href="/src/assets/fonts/static/WorkSans-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      <link rel="preload" href="/src/assets/fonts/static/WorkSans-Medium.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      <link rel="preload" href="/src/assets/fonts/static/WorkSans-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      <title>Generated for Blogs</title>
    </Head>
    
    <body className={WorkSans.className}>
      <Navbar />
      <div >
        {children}
      </div>
      <Footer />
    </body>
  </html>

);

export default RootLayout;
