"use client";

import Link from "next/link";

export default function HomepageButtons({ blok }: { blok: any }) {
  return (
    <div className="flex gap-4 justify-center py-20">
      <Link href={blok.button_1_link?.cached_url || "#"} className="px-6 py-3 bg-blue-600 text-white rounded">
        {blok.button_1_text}
      </Link>

      <Link href={blok.button_2_link?.cached_url || "#"} className="px-6 py-3 bg-green-600 text-white rounded">
        {blok.button_2_text}
      </Link>

      <Link href={blok.button_3_link?.cached_url || "#"} className="px-6 py-3 bg-purple-600 text-white rounded">
        {blok.button_3_text}
      </Link>
      <Link href={blok.button_4_link?.cached_url || "#"} className="px-6 py-3 bg-purple-600 text-white rounded">
        {blok.button_4_text}
      </Link>
      <Link href={blok.button_5_link?.cached_url || "#"} className="px-6 py-3 bg-purple-600 text-white rounded">
        {blok.button_5_text}
      </Link>
      <Link href={blok.button_6_link?.cached_url || "#"} className="px-6 py-3 bg-purple-600 text-white rounded">
        {blok.button_6_text}
      </Link>
    </div>
  );
}
