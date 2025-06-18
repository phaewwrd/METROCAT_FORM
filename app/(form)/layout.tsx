import FooterForm from '@/components/footer-form';
import Navbar from '@/components/navbar/navbar';
import { ThemeProvider } from 'next-themes';
import React from 'react'

export default function FormLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <FooterForm/>
        </ThemeProvider>
      </body>
    </html>
    
  );
}
