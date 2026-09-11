import { Link } from "react-router-dom";
import { useState } from "react";

// ================= EVENT DETAILS COMPONENT =================
export default function EventDetails() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openRules, setOpenRules] = useState(null);
  
    const openRegistration = () => {
      window.open(GOOGLE_FORM_LINK, "_blank", "noopener,noreferrer");
    };
  const events = [
    {
      number: "01",
      icon: "🧠",
      category: "VISUAL • MEMORY • BUZZER",
      title: "Mind Snap",
      description:
        "A memory-based visual challenge where teams get 60 seconds to observe a projected picture. The picture is then hidden, and questions based on the picture are asked. Teams must hit the buzzer and answer correctly.",

      rules: [
        "Each team must have 2–4 members. No solo participation.",
        "The picture will be displayed for 60 seconds.",
        "No photos or recordings are allowed.",
        "The picture will be hidden before questions are asked.",
        "Press the buzzer before answering.",
        "Wrong/no answer → chance passes to the next team.",
        "Correct answers earn points.",
        "Judge’s decision is final.",
      ],
    },

    {
      number: "02",
      icon: "💻",
      category: "TECHNICAL • CHALLENGE",
      title: "Technical Challenge",
      description:
        "Put your technical knowledge and problem-solving skills to the test through an exciting challenge designed for technology enthusiasts.",

      rules: [
        "Participants must follow the instructions given by the coordinators.",
        "All participants must report before the event begins.",
        "Use of unfair means is strictly prohibited.",
        "Points will be awarded based on performance.",
        "Time limits must be strictly followed.",
        "The coordinator’s decision will be final.",
      ],
    },

    {
      number: "03",
      icon: "📄",
      category: "PRESENTATION • INNOVATION",
      title: "Paper Presentation",
      description:
        "Present your innovative ideas, research and technical concepts before a panel of judges and showcase your knowledge and communication skills.",

      rules: [
        "Each team can have 2–4 members.",
        "Presentation time will be strictly limited.",
        "Participants must submit their presentation before the event.",
        "The topic must be technically relevant.",
        "Plagiarism is strictly prohibited.",
        "Judges will evaluate content, innovation and presentation.",
        "Judge’s decision is final.",
      ],
    },

    {
      number: "04",
      icon: "⚡",
      category: "LOGIC • SPEED • SKILL",
      title: "Tech Quiz",
      description:
        "A fast-paced technical quiz where participants compete through multiple rounds covering programming, technology, computer science and current innovations.",

      rules: [
        "Teams must consist of 2–4 members.",
        "Each round will have a specific time limit.",
        "Questions will cover various technical domains.",
        "Participants must follow the buzzer instructions.",
        "No electronic devices are allowed.",
        "Correct answers earn points.",
        "The highest-scoring team will be declared the winner.",
      ],
    },
    {
      number: "05",
      icon: "📄",
      category: "PRESENTATION • INNOVATION",
      title: "Paper Presentation",
      description:
        "Present your innovative ideas, research and technical concepts before a panel of judges and showcase your knowledge and communication skills.",

      rules: [
        "Each team can have 2–4 members.",
        "Presentation time will be strictly limited.",
        "Participants must submit their presentation before the event.",
        "The topic must be technically relevant.",
        "Plagiarism is strictly prohibited.",
        "Judges will evaluate content, innovation and presentation.",
        "Judge’s decision is final.",
      ],
    },

    {
      number: "06",
      icon: "⚡",
      category: "LOGIC • SPEED • SKILL",
      title: "Tech Quiz",
      description:
        "A fast-paced technical quiz where participants compete through multiple rounds covering programming, technology, computer science and current innovations.",

      rules: [
        "Teams must consist of 2–4 members.",
        "Each round will have a specific time limit.",
        "Questions will cover various technical domains.",
        "Participants must follow the buzzer instructions.",
        "No electronic devices are allowed.",
        "Correct answers earn points.",
        "The highest-scoring team will be declared the winner.",
      ],
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
       {// ================= NAVBAR ================= 
      }
      <header className="fixed left-0 top-0 z-50 w-full">
        <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/75 px-5 py-4 shadow-2xl backdrop-blur-xl md:px-8">
          
          {// Logo 
          }
          <a href="#home" className="flex items-center gap-3">
              
              
              <img
                src="/WhatsApp_Image_2025-09-12_at_18.22.28_4ebc8d65-removebg-preview.png"
                alt="College Logo"
                className="h-15 w-15 object-contain flex  items-center justify-center overflow-hidden rounded-xl  font-bold "
              />
              
             
              
            

            <div>
              <p className="text-sm font-bold tracking-wide text-white">
                 Dhanalakshmi Srinivasan Engineering College (Autonomous)
              </p>
              <p className="text-xs text-slate-400">
                Department of Information Technology
              </p>
            </div>
          </a>

          {// Desktop Menu 
          }
          <div className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-sm text-slate-300 transition hover:text-cyan-400">Home</Link>

            <a
              href="#about"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#details"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Details
            </a>
            
            
            {/* <Link to="#home" className="text-sm text-slate-300 transition hover:text-cyan-400">Home</Link>
            <Link to="#about" className="text-sm text-slate-300 transition hover:text-cyan-400">About</Link>
            <Link to="#details" className="text-sm text-slate-300 transition hover:text-cyan-400">Details</Link> */}

            <Link to="/event" className="text-sm text-slate-300 transition hover:text-cyan-400">Explore Event</Link>

            <button
              onClick={openRegistration}
              className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:scale-105 hover:bg-cyan-300"
            >
              Register Now
            </button>
          </div>

          {// Mobile Menu Button 
          }
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 px-3 py-2 text-xl md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {// Mobile Menu 
        }
        {menuOpen && (
          <div className="mx-4 mt-2 rounded-2xl border border-white/10 bg-slate-900/95 p-5 shadow-xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-cyan-400"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-cyan-400"
              >
                About
              </a>

              <a
                href="#details"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-cyan-400"
              >
                Details
              </a>

              <a
                href="#events"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-cyan-400"
              >
                Explore Event
              </a>

              <button
                onClick={openRegistration}
                className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950"
              >
                Register Now →
              </button>
            </div>
          </div>
        )}
      </header>

    <section
      id="events"
      className="relative  px-5 py-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
           <br/>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Event Arena
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Explore Our
            <br />
            <span className="gradient-text">Symposium Events.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Choose your challenge, showcase your skills and experience the
            excitement of TECHNOVA '26.
          </p>
        </div>

        {/* ================= EVENT GRID ================= */}
        <div className="mt-16 grid gap-7 lg:grid-cols-2">

          {events.map((event) => (
            <article
              key={event.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-7 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-cyan-500/10 sm:p-8"
            >

              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/5 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/10" />

              {/* Top Row */}
              <div className="relative flex items-start justify-between gap-5">

                <div className="flex items-center gap-4">

                  {/* Icon */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {event.icon}
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-[0.18em] text-cyan-400">
                      EVENT {event.number}
                    </p>

                    <p className="mt-1 text-[10px] font-semibold tracking-[0.15em] text-slate-500">
                      {event.category}
                    </p>
                  </div>

                </div>

                {/* Number */}
                <span className="text-5xl font-black text-white/[0.04]">
                  {event.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="relative mt-7 text-2xl font-black text-white sm:text-3xl">
                {event.title}
              </h3>

              {/* Description */}
              <p className="relative mt-4 text-sm leading-7 text-slate-400">
                {event.description}
              </p>

              {/* Divider */}
              <div className="my-7 h-px bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />

              {/* Rules Accordion */}
<div className="relative mt-7 border-t border-white/10 pt-5">

  {/* Toggle Button */}
  <button
    onClick={() =>
      setOpenRules(
        openRules === event.number ? null : event.number
      )
    }
    className="flex w-full items-center justify-between rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] px-4 py-4 text-left transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.07]"
  >
    <div className="flex items-center gap-3">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-lg">
        📜
      </div>

      <div>
        <h4 className="text-sm font-black uppercase tracking-wider text-white">
          Rules & Regulations
        </h4>

        <p className="mt-1 text-xs text-slate-500">
          {openRules === event.number
            ? "Click to hide event rules"
            : "Click to view event rules"}
        </p>
      </div>

    </div>

    {/* Arrow */}
    <div
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/20 text-cyan-400 transition-all duration-300 ${
        openRules === event.number
          ? "rotate-180 bg-cyan-400/10"
          : ""
      }`}
    >
      ↓
    </div>
  </button>

  {/* Expandable Rules */}
  <div
    className={`grid transition-all duration-500 ease-in-out ${
      openRules === event.number
        ? "mt-5 grid-rows-[1fr] opacity-100"
        : "grid-rows-[0fr] opacity-0"
    }`}
  >
    <div className="overflow-hidden">

      <div className="space-y-3 rounded-2xl border border-white/5 bg-black/10 p-5">

        {event.rules.map((rule, index) => (
          <div
            key={index}
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

              {/* Bottom Accent */}
              <div className="mt-7 flex items-center justify-between border-t border-white/5 pt-5">

                <span className="text-xs font-semibold text-slate-500">
                  TECHNOVA '26
                </span>

                

              </div>

            </article>
          ))}

        </div>

       

      </div>
    </section>
    </div>
  );
}