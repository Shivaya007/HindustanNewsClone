"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";

const categories = [
  { name: "होम", slug: "all" },
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

interface NavbarProps {
  onCategoryChange: (category: string) => void;
  currentCategory: string;
}

export default function Navbar({ onCategoryChange, currentCategory }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3 border-b border-border">

          {/* Mobile Menu Icon */}
          <div className="lg:hidden p-2 cursor-pointer">
            <Menu className="h-5 w-5" />
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">
              हिन्दुस्तान
            </div>
          </Link>

          {/* Search Icon (mobile) */}
          <div className="md:hidden p-2 cursor-pointer">
            <Search className="h-5 w-5" />
          </div>
        </div>

        {/* Category Pills */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1 py-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => onCategoryChange(category.slug)}
                className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                  currentCategory === category.slug
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-category-bg"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
