"use client";
import { useState, useEffect } from "react";
import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ModalProvider } from "../context/QuickViewModalContext";
import { CartModalProvider } from "../context/CartSidebarModalContext";
import { ReduxProvider } from "@/redux/provider";
import QuickViewModal from "@/components/Common/QuickViewModal";
import CartSidebarModal from "@/components/Common/CartSidebarModal";
import { PreviewSliderProvider } from "../context/PreviewSliderContext";
import PreviewSliderModal from "@/components/Common/PreviewSlider";
import ScrollToTop from "@/components/Common/ScrollToTop";
import CartInitializer from "@/redux/features/cartInitializer";
import PreLoader from "@/components/Common/PreLoader";

export default function RootLayout({ children }) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return (
        <html lang="en" suppressHydrationWarning={true}>
          <head>
    <link rel="icon" type="image/png" href="/images/logo/Logo.png" />
    <link rel="shortcut icon" type="image/png" href="/images/logo/Logo.png" />
    <title>Byte & Board Solutions</title>
</head>

            <body>
                {loading ? (
                    <PreLoader />
                ) : (
                    <>
                        <ReduxProvider>
                            <CartModalProvider>
                                <ModalProvider>
                                    <PreviewSliderProvider>
                                        <Header />
                                        <CartInitializer />
                                        {children}
                                        <QuickViewModal />
                                        <CartSidebarModal />
                                        <PreviewSliderModal />
                                    </PreviewSliderProvider>
                                </ModalProvider>
                            </CartModalProvider>
                        </ReduxProvider>
                        <ScrollToTop />
                        <Footer />
                    </>
                )}
            </body>
        </html>
    );
}
