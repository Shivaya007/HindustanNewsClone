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
    <nav className="bg-white w-full border-b border-gray-200">
      <div className="flex gap-8 px-6 overflow-x-auto whitespace-nowrap">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/${c.slug}`}
            className="py-4 text-base font-medium text-gray-700 hover:text-red-600 transition"
          >
            {c.name}
          </Link>
        ))}
        <button className="py-4 text-base font-medium text-gray-700 hover:text-red-600">
          •••
        </button>
      </div>
    </nav>
  );
}
