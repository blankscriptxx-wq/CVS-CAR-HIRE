import type { JournalPost } from "@/lib/types";

/** Editorial Journal. Original content that builds topical authority. */
export const journalPosts: JournalPost[] = [
  {
    slug: "best-wedding-cars-birmingham",
    title: "The Best Wedding Cars in Birmingham",
    excerpt:
      "From the timeless Rolls-Royce to the commanding presence of a super-SUV, here's how to choose the wedding car that suits your day.",
    category: "Weddings",
    readingMinutes: 6,
    publishedAt: "2026-05-12",
    heroImage: {
      src: "/images/journal/best-wedding-cars-birmingham/hero.jpg",
      alt: "A luxury wedding car outside a Birmingham venue",
      placeholder: true,
    },
    body: [
      { type: "p", text: "Your wedding car is more than transport — it's part of the story. It sets the tone of your arrival, frames some of the day's most memorable photographs, and gives you a rare quiet moment together between the ceremony and the celebration. In Birmingham, with its wealth of beautiful venues, the right car completes the picture." },
      { type: "h2", text: "The timeless choice: Rolls-Royce" },
      { type: "p", text: "For many couples, nothing says 'wedding' quite like a Rolls-Royce. The Ghost, in particular, is a perennial favourite: serene, beautifully proportioned and endlessly photogenic. Chauffeur-driven, it lets you relax completely and simply enjoy the day." },
      { type: "h2", text: "The bold statement: luxury 4x4" },
      { type: "p", text: "If your style is more contemporary, a Rolls-Royce Cullinan or Mercedes-AMG G 63 makes an unmistakable statement. Their presence is undeniable, and they photograph superbly against both grand and modern venues." },
      { type: "h2", text: "Don't forget the party" },
      { type: "p", text: "Alongside the main wedding car, consider how the wider party will travel. A Mercedes V-Class carries the bridal party together in comfort, keeping everyone relaxed and on schedule." },
      { type: "h3", text: "Book early" },
      { type: "p", text: "Popular cars and summer dates book up quickly. Once you have your date and venue, get in touch to check availability — and we'll help you choose the car that's right for your day." },
    ],
    metaTitle: "The Best Wedding Cars in Birmingham | CVS Car Hire Journal",
    metaDescription:
      "How to choose the best wedding car in Birmingham — from timeless Rolls-Royce to bold luxury 4x4s. Expert guidance from CVS Car Hire.",
  },
  {
    slug: "how-to-hire-a-supercar",
    title: "How to Hire a Supercar: A First-Timer's Guide",
    excerpt:
      "Thinking about hiring your first supercar? Here's what to expect, what to ask, and how to make the most of the experience.",
    category: "Guides",
    readingMinutes: 5,
    publishedAt: "2026-04-28",
    heroImage: {
      src: "/images/journal/how-to-hire-a-supercar/hero.jpg",
      alt: "A supercar prepared for self-drive hire",
      placeholder: true,
    },
    body: [
      { type: "p", text: "Hiring a supercar for the first time should be exciting, not daunting. Whether it's a landmark birthday, a bucket-list drive or simply a treat, a little preparation makes the day even better. Here's what to know before you go." },
      { type: "h2", text: "Choose the right car for you" },
      { type: "p", text: "Supercars have very different characters. Some are dramatic and demanding; others, like the Audi R8, are surprisingly usable. If it's your first time, tell us how you plan to use the car and we'll recommend one that matches your confidence and your route." },
      { type: "h2", text: "Understand the essentials" },
      { type: "p", text: "Requirements such as minimum age, licence and a refundable security deposit vary by vehicle. There's also a mileage allowance with a per-mile charge beyond it. We'll walk you through all of this clearly before you commit — no surprises." },
      { type: "h2", text: "Self-drive or delivered?" },
      { type: "p", text: "You can collect from us in Birmingham, or arrange nationwide delivery to your door, subject to availability. Delivery is a lovely way to start the experience — the car simply arrives." },
      { type: "h3", text: "Make the most of it" },
      { type: "p", text: "Plan a route worth driving, allow time for photographs, and treat the car with the respect it deserves. Then enjoy every minute — it's a day you'll remember." },
    ],
    metaTitle: "How to Hire a Supercar: A First-Timer's Guide | CVS Car Hire",
    metaDescription:
      "A first-timer's guide to hiring a supercar — choosing the right car, what to expect, deposits, mileage and delivery. From CVS Car Hire, Birmingham.",
  },
  {
    slug: "luxury-cars-for-music-videos",
    title: "Choosing Luxury Cars for Music Videos and Content",
    excerpt:
      "The right car can define a shoot. Here's how artists and directors use luxury and supercars to elevate their content.",
    category: "Production",
    readingMinutes: 4,
    publishedAt: "2026-04-10",
    heroImage: {
      src: "/images/journal/luxury-cars-for-music-videos/hero.jpg",
      alt: "A luxury car on a production set",
      placeholder: true,
    },
    body: [
      { type: "p", text: "In music videos and branded content, a car is never just a car. It's a statement of status, style and intent — an instantly readable symbol that adds production value to every frame. That's why our fleet is a regular fixture on shoots across the UK." },
      { type: "h2", text: "Presence on camera" },
      { type: "p", text: "Some cars simply command the frame. The Mercedes-AMG G 63 and Lamborghini Urus Performante bring bold, contemporary presence, while a Rolls-Royce adds timeless luxury. Colour matters too — we can advise on what reads best on camera." },
      { type: "h2", text: "Working with production teams" },
      { type: "p", text: "With a fleet of over 50 vehicles, we can supply several cars for a single shoot, prepared and presented to the standard the camera demands. We're used to working around production schedules and locations." },
      { type: "h3", text: "Plan ahead" },
      { type: "p", text: "Share your brief early — the concept, the look, the dates — and we'll put together the right options. The car should serve the story, and we'll help you get it right." },
    ],
    metaTitle: "Choosing Luxury Cars for Music Videos & Content | CVS Car Hire",
    metaDescription:
      "How artists and directors use luxury and supercars to elevate music videos and content. Production car hire from CVS Car Hire, Birmingham.",
  },
];

export function getJournalPost(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}
