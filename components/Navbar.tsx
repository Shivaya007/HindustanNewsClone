"use client";

import Link from "next/link";

const categories = [
  { name: "होम", slug: "" },
  { name: "राज्य", slug: "state" },
  { name: "देश", slug: "national" },
  { name: "क्रिकेट", slug: "sports" },
  { name: "लाइफस्टाइल", slug: "lifestyle" },
  { name: "मनोरंजन", slug: "entertainment" },
  { name: "बिजनेस", slug: "business" },
  { name: "करियर", slug: "career" },
  { name: "विदेश", slug: "world" },
  { name: "धर्म", slug: "religion" },
  { name: "राशिफल", slug: "astrology" },
];

export default function Navbar() {
  return (
    <nav className="bg-white w-full text-sm border-b">
      <div className="flex gap-6 px-4 py-2 overflow-x-auto whitespace-nowrap">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/${c.slug}`}
            className="hover:text-red-600 transition"
          >
            {c.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
