"use client";
import { ThemeProvider } from "next-themes";
import React from "react";
import { Toaster } from "react-hot-toast";

const NextThemeProvider = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
       <Toaster position="top-center" />
      {children}
    </ThemeProvider>
  );
};

export default NextThemeProvider;
