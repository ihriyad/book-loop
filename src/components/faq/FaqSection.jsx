"use client";

import { CircleInfo } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { useState } from "react";

export default function FAQSection({ faqs }) {
  const [openId, setOpenId] = useState(null);
  // console.log(faqs);
  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-18 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-amber-700 font-sans mb-3">
            Got Questions?
          </p>
          <h2 className="text-4xl font-serif font-normal  leading-snug mb-3">
            Frequently Asked{" "}
            <span className="italic text-amber-700">Questions</span>
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed">
            Everything you need to know about Book Loop.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={` border-2 rounded-xl overflow-hidden transition-colors duration-200 ${
                  isOpen ? "border-gray-400" : "border-gray-700"
                }`}
              >
                {/* Question row */}
                <div
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span><CircleInfo></CircleInfo></span>
                </div>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="px-6 pb-6 text-sm text-amber-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className=" text-sm mb-3">Still have questions?</p>
          <Button variant="secondary">Connect Us</Button>
        </div>
      </div>
    </section>
  );
}
