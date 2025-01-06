{/*import { ThemeProvider } from "@/components/theme-provider";*/}
import "./globals.css";
import { Inter } from 'next/font/google';

 
const inter = Inter({ subsets: ['latin'], weight: '400' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body>
        {/*<ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>*/}
          {children}
      </body>
    </html>
  );
}
