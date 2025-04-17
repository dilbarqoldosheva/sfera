import React from "react";
import type { Metadata } from "next";

// globals css
import "./globals.css";

// header component
import Header from "@/components/header/header";

// silliq scroll
import SmoothScrollProvider from "@/components/scroll/smooth-scrolling";

// layouts
import MainLayout from "@/layout/main-layout";
import ReactQueryLayout from "@/layout/query-layout";

// scroll to top btn
import ScrollToTop from "@/components/scroll/scroll-to-top";
import Footer from "@/components/footer/footer";
import {defaultMetadata} from "@/lib/seo";

export const metadata: Metadata = {
    ...defaultMetadata,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className="antialiased">
                <SmoothScrollProvider>
                    <ReactQueryLayout>
                        <MainLayout>
                            <Header />
                            {children}
                            <ScrollToTop />
                            <Footer />
                        </MainLayout>
                    </ReactQueryLayout>
                </SmoothScrollProvider>
            </body>
        </html>
    );
}
