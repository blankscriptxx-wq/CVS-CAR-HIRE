import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function PhoneIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M6.5 3.5 8.8 3.6a1 1 0 0 1 .9.7l1 3a1 1 0 0 1-.3 1L9 9.6a12 12 0 0 0 5.4 5.4l1.3-1.4a1 1 0 0 1 1-.3l3 1a1 1 0 0 1 .7.9l.1 2.3a1 1 0 0 1-1 1.1A15.5 15.5 0 0 1 5.4 4.5a1 1 0 0 1 1.1-1Z" />
    </svg>
  );
}

export function ChatIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M4 5h16v11H8l-4 4V5Z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </svg>
  );
}

export function ArrowRight(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowDown(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

export function RefreshIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M20 11a8 8 0 1 0-.5 4" />
      <path d="M20 4v7h-7" />
    </svg>
  );
}

export function CheckIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12.5 10 17l9-10" />
    </svg>
  );
}

export function MenuIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function HeartIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M12 20s-7-4.4-9.2-8.4A4.6 4.6 0 0 1 12 6a4.6 4.6 0 0 1 9.2 5.6C19 15.6 12 20 12 20Z" />
    </svg>
  );
}

export function StarIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
    </svg>
  );
}

export function InstagramIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}
