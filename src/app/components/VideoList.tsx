"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type Video = {
  title: string;
  thumbnail: string;
  url: string;
};

const videos: Video[] = [
  {
    title: "Как производят масло",
    thumbnail: "/img/video1.jpg",
    url: "https://www.youtube.com/watch?v=example1",
  },
  {
    title: "Как делают творог",
    thumbnail: "/img/video2.jpg",
    url: "https://www.youtube.com/watch?v=example2",
  },
  {
    title: "Как растет яблоко",
    thumbnail: "/img/video3.jpg",
    url: "https://www.youtube.com/watch?v=example3",
  },
  {
    title: "Как производят масло",
    thumbnail: "/img/video1.jpg",
    url: "https://www.youtube.com/watch?v=example1",
  },
  {
    title: "Как делают творог",
    thumbnail: "/img/video2.jpg",
    url: "https://www.youtube.com/watch?v=example2",
  },
  {
    title: "Как растет яблоко",
    thumbnail: "/img/video3.jpg",
    url: "https://www.youtube.com/watch?v=example3",
  },
  {
    title: "Как производят масло",
    thumbnail: "/img/video1.jpg",
    url: "https://www.youtube.com/watch?v=example1",
  },
  {
    title: "Как делают творог",
    thumbnail: "/img/video2.jpg",
    url: "https://www.youtube.com/watch?v=example2",
  },
  {
    title: "Как растет яблоко",
    thumbnail: "/img/video3.jpg",
    url: "https://www.youtube.com/watch?v=example3",
  },
];

const VideoList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Наши видео</h2>

      {/* Контейнер со скроллом */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex  overflow-hidden gap-6 pb-4 scroll-smooth"
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="w-[200px] flex-shrink-0 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition bg-gray-100"
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                <Link
                  href={video.url}
                  target="_blank"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Смотреть видео →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка прокрутки вправо */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition z-10"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition z-10"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default VideoList;
