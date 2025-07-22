import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrainsMono",
  display: "swap",
});

export const metadata = {
  title: "Kabir Shah | Portfolio",
  description: "I’m a data scientist who designs scalable, efficient data pipelines and uncovers actionable insights from complex datasets. I’m currently pursuing my MS in Computer Science at Northeastern University.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
