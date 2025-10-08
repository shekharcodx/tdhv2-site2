"use client";

import Footer from "@/components/layout/Footer";
import ScrollToTopButton from "@/components/ui/scrollToTop";
import { AuthProvider } from "@/contexts/AuthContext";
// import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ProgressProvider } from "@bprogress/next/app";
import { useEffect } from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    console.log("Progress bar mounted");
  }, []);
  return (
    <AuthProvider>
      <ProgressProvider
        height="4px"
        color="#09B4C6"
        options={{ showSpinner: false }}
        shallowRouting
      >
        {children}
        <Footer />
        <ScrollToTopButton />
      </ProgressProvider>
    </AuthProvider>
  );
};

export default ClientLayout;
