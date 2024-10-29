// app/layout.tsx or src/app/layout.tsx
import "./globals.css";

import type { Metadata } from "next";
import Providers from "@/components/providers/SessionProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth"; // Import getServerSession
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Planit",
  description:
    "Plantit is a personal development platform powered by AI to create personalized roadmaps based on the goals you define",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions); // Fetch session on server side

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geistSans.className}>
        <Providers session={session}>
          {" "}
          {/* Pass session here */}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={true}
            storageKey="planit-theme"
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
