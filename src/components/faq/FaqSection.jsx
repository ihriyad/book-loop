"use client";

import { useState } from "react";

export default function FAQSection({ faqs }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-amber-50 py-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-amber-700 font-sans mb-3">
            Got Questions?
          </p>
          <h2 className="text-4xl font-serif font-normal text-stone-900 leading-snug mb-3">
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
                className={`bg-white border rounded-xl overflow-hidden transition-colors duration-200 ${
                  isOpen ? "border-amber-400" : "border-amber-200"
                }`}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                >
                  <span className="font-serif text-base text-stone-900 pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-lg font-light transition-all duration-300 ${
                      isOpen
                        ? "bg-amber-400 border-amber-400 text-stone-900 rotate-45"
                        : "border-amber-300 text-amber-600 group-hover:border-amber-500"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="px-6 pb-6 text-sm text-stone-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-stone-400 text-sm mb-3">Still have questions?</p>
          <a
            href="mailto:hello@bookloop.app"
            className="inline-block text-sm font-semibold bg-stone-900 text-amber-300 px-7 py-3 rounded-full hover:bg-stone-700 transition-colors duration-200"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  );
}
