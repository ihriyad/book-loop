import { getFeatures, getStats } from "@/lib/load-data";
import Link from "next/link";

export default async function AboutBookLoop() {

    const features = await getFeatures();
    const stats = await getStats();
  return (
    <section className="bg-amber-50 min-h-screen font-serif">

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-12 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-stone-900 mb-6">
          <span className="text-2xl text-amber-300">⟳</span>
        </div>
        <p className="text-xs tracking-widest uppercase text-amber-700 mb-4">
          About Book Loop
        </p>
        <h1 className="text-4xl md:text-5xl font-normal text-stone-900 leading-snug mb-6">
          Reading is a loop. <br />
          <span className="italic text-amber-700">We keep it going.</span>
        </h1>
        <p className="font-sans text-base md:text-lg text-stone-600 leading-relaxed max-w-xl mx-auto">
          Book Loop is a free, open platform for book lovers who never want the
          story to end. Discover, filter, and save books across every genre —
          all in one place.
        </p>
      </div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-amber-200 border border-amber-200 rounded-xl bg-white overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center py-7 px-4 gap-1">
              <span className="text-3xl font-normal text-stone-900">{s.value}</span>
              <span className="font-sans text-xs tracking-widest uppercase text-amber-700">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-amber-700 mb-5">
          Our Mission
        </p>
        <blockquote className="text-xl md:text-2xl italic text-stone-800 leading-relaxed max-w-2xl mx-auto text-left border-l-4 border-amber-400 pl-6">
          Every reader deserves to find the right book at the right moment.
          Book Loop exists to make that discovery effortless, joyful, and endless.
        </blockquote>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-amber-200 rounded-xl p-6 hover:border-amber-400 transition-colors duration-200"
            >
              <span className="text-3xl block mb-3">{f.icon}</span>
              <h3 className="text-base font-normal text-stone-900 mb-2">{f.title}</h3>
              <p className="font-sans text-sm text-stone-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-stone-900 rounded-2xl px-8 py-14 text-center">
          <p className="text-2xl italic text-amber-100 mb-6">
            Ready to find your next book?
          </p>
          <Link href={"/login"}>Start Exploring</Link>
        </div>
      </div>

    </section>
  );
}