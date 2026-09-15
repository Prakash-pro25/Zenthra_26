
import { Link } from "react-router-dom";
import { useState } from "react";

// ======================================================
// GOOGLE FORM LINK
// Replace this with your actual Google Form URL
// ======================================================
const GOOGLE_FORM_LINK = "https://forms.gle/p9mTx7d22hEvAhSp8";

// ======================================================
// ZENTHRA '26 EVENTS
// ======================================================

const techEvents = [
  {
    number: "01",
    icon: "📄",
    category: "PRESENTATION • INNOVATION • TECHNOLOGY",
    title: "Paper Presentation",
    description:
      "A platform for participants to showcase innovative ideas, research and technical knowledge. Teams will present technology-related concepts and solutions within a limited time, demonstrating originality, technical understanding and presentation skills.",
    rules: [
      "Each team must have a minimum of 2 and a maximum of 4 members.",
      "The presentation topic must be related to technology.",
      "The content and ideas presented must be original.",
      "Participants must submit their PPT before the given deadline.",
      "The presentation must contain exactly 8 slides.",
      "Each team will be given 6 minutes for the presentation.",
      "Participants must demonstrate technical understanding and presentation skills.",
      "Judge's decision is final.",
    ],
  },

  {
    number: "02",
    icon: "🐞",
    category: "DEBUGGING • PROGRAMMING • SPEED",
    title: "CodeBuzz",
    description:
      "A fast-paced debugging challenge where participants identify and fix errors in Python, Java and C programs. Analyze the code, correct the bugs and produce the expected output before time runs out.",
    rules: [
      "Each team must have a minimum of 1 and a maximum of 2 members.",
      "The total duration of the event is 10 minutes.",
      "The challenge includes 1 Python, 1 Java and 1 C program.",
      "Participants must identify and fix errors in the given programs.",
      "The corrected programs must produce the expected output.",
      "Marks will be awarded based on correctly debugged programs.",
      "Participants must use the system provided by the organizers.",
      "Judge's decision is final.",
    ],
  },

  {
    number: "03",
    icon: "⚡",
    category: "VIBE CODING • AI • PROBLEM SOLVING",
    title: "Vibe Craft",
    description:
      "An individual coding challenge where participants are given a real-world problem scenario and must build a functional solution using vibe coding. AI tools are allowed to assist development while participants demonstrate creativity and problem-solving skills.",
    rules: [
      "Vibe Craft is an individual participation event.",
      "Participants will be given a real-world problem scenario.",
      "Participants are allowed to use AI tools for vibe coding.",
      "The final solution must be functional.",
      "The solution must be completed within the given time.",
      "Participants must bring their own laptop.",
      "Creativity, functionality and problem-solving skills will be evaluated.",
      "Judge's decision is final.",
    ],
  },
];

const funEvents = [
  {
    number: "01",
    icon: "🕵️",
    category: "DETECTIVE • MYSTERY • BUZZER",
    title: "Sherlock Holmes",
    description:
      "A thrilling detective challenge where teams investigate mysterious cases, decode clues, uncover hidden twists and identify the culprit before time runs out. Teams must connect the evidence and present the culprit, motive and supporting evidence.",
    rules: [
      "Each team must have 2–4 members.",
      "Teams must analyze the case and clues carefully.",
      "Participants must connect the evidence to identify the culprit.",
      "Press the buzzer when your team knows the answer.",
      "Teams must answer only when they are called.",
      "The case must be solved within the given time.",
      "The final answer must include the Culprit, Motive and Evidence.",
      "No phones, internet or outside help is allowed.",
    ],
  },

  {
    number: "02",
    icon: "🎵",
    category: "MUSIC • GUESSING • BUZZER",
    title: "Tune Detective",
    description:
      "A fun musical guessing game where Tamil song meanings are translated into English. Participants must identify the original Tamil song and hit the buzzer as soon as they know the answer. Test your music knowledge, memory and quick thinking.",
    rules: [
      "The English translation of a Tamil song will be displayed or read aloud.",
      "Participants must identify the original Tamil song.",
      "No singing, online searching or external help is allowed.",
      "Press the buzzer when you know the answer.",
      "The fastest correct answer earns the points.",
      "Participants must answer when their team is called.",
      "The participant or team with the highest score wins.",
    ],
  },

  {
    number: "03",
    icon: "🌪️",
    category: "WORD • CLUES • SPEED",
    title: "Clues Storm",
    description:
      "A fun and fast-paced word-guessing game where one player gives clues to help their teammate guess the given word without using the forbidden words. Communicate quickly and strategically to score as many points as possible.",
    rules: [
      "Each team must have 2 members.",
      "Each team will get 60 seconds.",
      "One player gives clues while the other player guesses the word.",
      "The forbidden words must not be used.",
      "Each correct answer earns 1 point.",
      "If a forbidden word is used, that word will be skipped.",
      "Teams must complete as many correct guesses as possible within the time limit.",
      "The team with the highest score wins.",
      "Judge's decision is final.",
    ],
  },

  {
    number: "04",
    icon: "🧠",
    category: "VISUAL • MEMORY • BUZZER",
    title: "Mind Snap",
    description:
      "A memory-based visual challenge where teams get 60 seconds to observe a projected picture. The picture is then hidden and questions based on the picture are asked. Teams must hit the buzzer and answer correctly.",
    rules: [
      "Each team must have 2–4 members. No solo participation.",
      "The picture will be displayed for 60 seconds.",
      "No photos or recordings are allowed.",
      "The picture will be hidden before questions are asked.",
      "Press the buzzer before answering.",
      "Wrong or no answer → the chance passes to the next team.",
      "Correct answers earn points.",
      "Judge's decision is final.",
    ],
  },
];

// ======================================================
// EVENT DETAILS COMPONENT
// ======================================================

export default function EventDetails() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openRegistration = () => {
    window.open(GOOGLE_FORM_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      
      {/* ==================================================
          NAVBAR
      ================================================== */}

      <header className="fixed left-0 top-0 z-50 w-full">
        <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-4 shadow-2xl backdrop-blur-xl md:px-8">

          {/* Logo + College */}
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3"
          >
            <img
              src="/WhatsApp_Image_2025-09-12_at_18.22.28_4ebc8d65-removebg-preview.png"
              alt="Dhanalakshmi Srinivasan Engineering College Logo"
              className="h-12 w-12 shrink-0 rounded-xl object-contain sm:h-14 sm:w-14"
            />

            <div className="min-w-0">
              <p className="truncate text-xs font-bold tracking-wide text-white sm:text-sm">
                Dhanalakshmi Srinivasan Engineering College (Autonomous)
              </p>

              <p className="truncate text-[10px] text-slate-400 sm:text-xs">
                Department of Information Technology
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">

            <Link
              to="/"
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              Home
            </Link>

            <Link
              to="/event"
              className="text-sm font-medium text-cyan-400"
            >
              Explore Events
            </Link>

            <button
              type="button"
              onClick={openRegistration}
              className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-300"
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xl transition hover:bg-white/10 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mx-4 mt-2 rounded-2xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-2">

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Home
              </Link>

              <Link
                to="/event"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-cyan-400 transition hover:bg-white/5"
              >
                Explore Events
              </Link>

              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openRegistration();
                }}
                className="mt-2 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Register Now →
              </button>

            </div>
          </div>
        )}
      </header>

      {/* ==================================================
          EVENTS SECTION
      ================================================== */}

      <main>
        <section
          id="events"
          className="relative px-5 pb-24 pt-36 sm:pt-40"
        >

          {/* Background Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

          <div className="relative mx-auto max-w-7xl">

            {/* ==================================================
                PAGE HEADER
            ================================================== */}

            <div className="mx-auto max-w-3xl text-center">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                Event Arena
              </div>

              <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Explore Our
                <br />
                <span className="gradient-text">
                  Symposium Events.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                Choose your challenge, showcase your skills and
                experience the excitement of ZENTHRA '26.
              </p>

            </div>

            {/* ==================================================
                TECHNICAL EVENTS
            ================================================== */}

            <EventSection
              badge="TECHNICAL EVENTS"
              title="Tech Arena"
              description="Challenge your technical knowledge, creativity and programming skills."
              events={techEvents}
            />

            {/* ==================================================
                NON-TECHNICAL EVENTS
            ================================================== */}

            <EventSection
              badge="NON-TECHNICAL EVENTS"
              title="Fun Arena"
              description="Think fast, work together and enjoy exciting challenges."
              events={funEvents}
            />

          </div>
        </section>
      </main>

      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer className="border-t border-white/10 bg-slate-950 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <div>
            <p className="text-sm font-bold text-white">
              ZENTHRA '26
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Department of Information Technology
            </p>
          </div>

          <p className="text-xs text-slate-500">
            Dhanalakshmi Srinivasan Engineering College (Autonomous)
          </p>

        </div>
      </footer>

    </div>
  );
}

// ======================================================
// EVENT SECTION
// ======================================================

function EventSection({
  badge,
  title,
  description,
  events,
}) {
  return (
    <section className="mt-20">

      {/* Section Header */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            {badge}
          </div>

          <h2 className="text-3xl font-black text-white sm:text-4xl">
            {title}
          </h2>
        </div>

        <p className="max-w-md text-sm leading-6 text-slate-500">
          {description}
        </p>

      </div>

      {/* Event Grid */}
      <EventGrid events={events} />

    </section>
  );
}

// ======================================================
// EVENT GRID
// ======================================================

function EventGrid({ events }) {
  const [openRules, setOpenRules] = useState(null);

  const toggleRules = (eventNumber) => {
    setOpenRules((current) =>
      current === eventNumber ? null : eventNumber
    );
  };

  return (
    <div className="grid gap-7 lg:grid-cols-2">

      {events.map((event) => {
        const isOpen = openRules === event.number;

        return (
          <article
            key={`${event.number}-${event.title}`}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-cyan-500/10 sm:p-8"
          >

            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/5 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/10" />

            {/* Small Bottom Glow */}
            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-40 w-40 rounded-full bg-indigo-500/5 blur-3xl" />

            {/* ==================================================
                TOP ROW
            ================================================== */}

            <div className="relative flex items-start justify-between gap-4">

              <div className="flex min-w-0 items-center gap-4">

                {/* Event Icon */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 text-3xl transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {event.icon}
                </div>

                {/* Event Info */}
                <div className="min-w-0">

                  <p className="text-xs font-bold tracking-[0.18em] text-cyan-400">
                    EVENT {event.number}
                  </p>

                  <p className="mt-1 text-[9px] font-semibold tracking-[0.12em] text-slate-500 sm:text-[10px] sm:tracking-[0.15em]">
                    {event.category}
                  </p>

                </div>
              </div>

              {/* Background Number */}
              <span className="hidden text-5xl font-black text-white/[0.04] sm:block">
                {event.number}
              </span>

            </div>

            {/* ==================================================
                TITLE
            ================================================== */}

            <h3 className="relative mt-7 text-2xl font-black text-white sm:text-3xl">
              {event.title}
            </h3>

            {/* ==================================================
                DESCRIPTION
            ================================================== */}

            <p className="relative mt-4 text-sm leading-7 text-slate-400">
              {event.description}
            </p>

            {/* Divider */}
            <div className="my-7 h-px bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />

            {/* ==================================================
                RULES ACCORDION
            ================================================== */}

            <div className="relative">

              <button
                type="button"
                onClick={() => toggleRules(event.number)}
                className="flex w-full items-center justify-between rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] px-4 py-4 text-left transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.07]"
                aria-expanded={isOpen}
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-lg">
                    📜
                  </div>

                  <div>
                    <h4 className="text-sm font-black uppercase tracking-wider text-white">
                      Rules & Regulations
                    </h4>

                    <p className="mt-1 text-xs text-slate-500">
                      {isOpen
                        ? "Click to hide event rules"
                        : "Click to view event rules"}
                    </p>
                  </div>

                </div>

                {/* Arrow */}
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 text-cyan-400 transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 bg-cyan-400/10"
                      : ""
                  }`}
                >
                  ↓
                </div>

              </button>

              {/* ==================================================
                  RULES CONTENT
              ================================================== */}

              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "mt-5 grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >

                <div className="overflow-hidden">

                  <div className="space-y-3 rounded-2xl border border-white/5 bg-black/10 p-5">

                    {event.rules.map((rule, index) => (
                      <div
                        key={`${event.number}-rule-${index}`}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                      >

                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-[10px] font-bold text-cyan-400">
                          {index + 1}
                        </div>

                        <span>{rule}</span>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

            {/* ==================================================
                CARD FOOTER
            ================================================== */}

            <div className="mt-7 flex items-center justify-between border-t border-white/5 pt-5">

              <span className="text-xs font-semibold text-slate-500">
                ZENTHRA '26
              </span>

              <span className="text-xs font-bold text-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                EXPLORE →
              </span>

            </div>

          </article>
        );
      })}

    </div>
  );
}
