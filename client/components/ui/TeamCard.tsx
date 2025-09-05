import React from "react";

type TeamCardProps = {
  name: string;
  title: string;
  image: string;
  linkedin?: string;
};

export default function TeamCard({
  name,
  title,
  image,
  linkedin,
}: TeamCardProps) {
  return (
    <div className="w-full h-full bg-white/5 rounded-xl p-4 flex flex-col items-center text-center justify-between hover:shadow-xl transition-shadow">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-3 border border-white/10"
      />
      <div className="text-sm font-semibold">{name}</div>
      <div className="text-xs text-slate-400 mb-3">{title}</div>
      <div>
        {linkedin ? (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${name} on LinkedIn`}
            className="inline-flex items-center justify-center w-9 h-9 bg-white/6 rounded-full text-slate-200 hover:bg-blue-700 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-2.5v-9h2.5v9zm-1.25-10.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13 10.25h-2.5v-4.5c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36v4.58h-2.5v-9h2.4v1.23h.03c.33-.62 1.13-1.28 2.33-1.28 2.49 0 2.95 1.64 2.95 3.77v5.28z" />
            </svg>
          </a>
        ) : (
          <div className="w-9 h-9" />
        )}
      </div>
    </div>
  );
}
