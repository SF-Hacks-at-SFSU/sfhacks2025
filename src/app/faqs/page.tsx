"use client";
import React from "react";
import FAQ from "./components/Faqs";

function page() {
  return (
    <main className="h-screen">
      <h1 className="faq-banner-text">Frequently Asked Questions!</h1>
      <div className="faq-banner"></div>
      <FAQ />
    </main>
  );
}

export default page;
