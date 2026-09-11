// ================= EVENT DETAILS COMPONENT =================
import { useState } from "react";

export default function EventDetails() {
  const [currentEvent, setCurrentEvent] = useState(0);

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
      icon: "🚀",
      category: "INNOVATION • CREATIVITY",
      title: "Innovation Arena",
      description:
        "An exciting platform where participants showcase creative ideas, innovative solutions and technical thinking to solve real-world problems.",
      rules: [
        "Each team must have 2–4 members.",
        "Participants must present their original idea.",
        "The solution should address a real-world problem.",
        "Plagiarism or copied projects are not allowed.",
        "Time limits must be followed.",
        "Judges will evaluate innovation and feasibility.",
        "Judge’s decision is final.",
      ],
    },

    {
      number: "06",
      icon: "🎯",
      category: "SKILL • LOGIC • SPEED",
      title: "Tech Master",
      description:
        "A competitive technical event designed to test logical thinking, technical skills, speed and accuracy through challenging rounds.",
      rules: [
        "Participants must follow all coordinator instructions.",
        "Teams must report before the event starts.",
        "Electronic devices are not permitted.",
        "Each round will have a fixed time limit.",
        "Points will be awarded based on performance.",
        "Unfair practices will lead to disqualification.",
        "Judge’s decision is final.",
      ],
    },
  ];

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % events.length);
  };

  const previousEvent = () => {
    setCurrentEvent(
      (prev) => (prev - 1 + events.length) % events.length
    );
  };

  const event = events[currentEvent];

  return (
    <section
      id="events"
      className="relative overflow-hidden px-5 py-24"
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Event Arena
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Explore Our
            <br />
            <span className="gradient-text">
              Symposium Events.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Choose your challenge, showcase your skills and
            experience the excitement of TECHNOVA '26.
          </p>

        </div>


        {/* ================= EVENT SLIDER ================= */}
        <div className="relative mt-16">

          {/* LEFT BUTTON */}
          <button
            onClick={previousEvent}
            aria-label="Previous event"
            className="
              absolute left-0 top-1/2 z-20
              flex h-12 w-12
              -translate-x-1/2 -translate-y-1/2
              items-center justify-center
              rounded-full
              border border-cyan-400/30
              bg-slate-950/90
              text-2xl text-cyan-400
              shadow-xl shadow-cyan-500/10
              backdrop-blur-xl
              transition-all duration-300
              hover:scale-110
              hover:border-cyan-400
              hover:bg-cyan-400
              hover:text-slate-950
              sm:h-14 sm:w-14
            "
          >
            ←
          </button>


          {/* ================= CARD ================= */}
          <article
            key={event.number}
            className="
              group relative
              overflow-hidden
              rounded-[2rem]
              border border-white/10
              bg-slate-900/80
              p-7
              shadow-2xl
              backdrop-blur-xl
              transition-all
              duration-500
              sm:p-10
              lg:p-12
            "
          >

            {/* CARD GLOW */}
            <div className="
              pointer-events-none
              absolute -right-32 -top-32
              h-72 w-72
              rounded-full
              bg-cyan-400/10
              blur-[90px]"
            />

            <div 
            className="
              pointer-events-none
              absolute -bottom-32 -left-32
              h-72 w-72
              rounded-full
              bg-indigo-500/10
              blur-[90px]
            " />


            {/* TOP SECTION */}
            <div className="
              relative
              flex
              flex-col
              gap-6
              sm:flex-row
              sm:items-center
              sm:justify-between
            ">

              {/* ICON + CATEGORY */}
              <div className="flex items-center gap-5">

                <div className="
                  flex h-20 w-20
                  shrink-0
                  items-center justify-center
                  rounded-3xl
                  border border-cyan-400/20
                  bg-gradient-to-br
                  from-cyan-400/10
                  to-indigo-500/10
                  text-4xl
                  shadow-lg
                  shadow-cyan-500/5
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-3
                ">
                  {event.icon}
                </div>

                <div>

                  <p className="
                    text-xs
                    font-bold
                    tracking-[0.2em]
                    text-cyan-400
                  ">
                    EVENT {event.number}
                  </p>

                  <p className="
                    mt-2
                    text-[10px]
                    font-semibold
                    tracking-[0.15em]
                    text-slate-500
                    sm:text-xs
                  ">
                    {event.category}
                  </p>

                </div>

              </div>


              {/* BIG NUMBER */}
              <div className="
                hidden
                select-none
                text-7xl
                font-black
                leading-none
                text-white/[0.04]
                sm:block
              ">
                {event.number}
              </div>

            </div>


            {/* TITLE */}
            <div className="relative mt-8">

              <h3 className="
                text-3xl
                font-black
                tracking-tight
                text-white
                sm:text-4xl
                lg:text-5xl
              ">
                {event.title}
              </h3>

              <div className="
                mt-4
                h-1
                w-20
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-indigo-500
              " />

            </div>


            {/* DESCRIPTION */}
            <p className="
              relative
              mt-6
              max-w-4xl
              text-sm
              leading-7
              text-slate-400
              sm:text-base
              sm:leading-8
            ">
              {event.description}
            </p>


            {/* DIVIDER */}
            <div className="
              my-8
              h-px
              bg-gradient-to-r
              from-cyan-400/30
              via-white/10
              to-transparent
            " />


            {/* RULES HEADER */}
            <div className="relative flex items-center gap-3">

              <div className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                bg-cyan-400/10
                text-lg
              ">
                📜
              </div>

              <div>

                <h4 className="
                  text-sm
                  font-black
                  uppercase
                  tracking-wider
                  text-white
                ">
                  Rules & Regulations
                </h4>

                <p className="text-xs text-slate-500">
                  Please follow all event guidelines
                </p>

              </div>

            </div>


            {/* RULES */}
            <div className="
              relative
              mt-6
              grid
              gap-3
              sm:grid-cols-2
            ">

              {event.rules.map((rule, index) => (

                <div
                  key={index}
                  className="
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-white/5
                    bg-white/[0.02]
                    px-4
                    py-3
                    text-sm
                    leading-6
                    text-slate-400
                    transition-all
                    duration-300
                    hover:border-cyan-400/20
                    hover:bg-cyan-400/5
                  "
                >

                  <span className="
                    mt-2
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-cyan-400
                    shadow-sm
                    shadow-cyan-400
                  " />

                  <span>
                    {rule}
                  </span>

                </div>

              ))}

            </div>


            {/* BOTTOM */}
            <div className="
              relative
              mt-8
              flex
              items-center
              justify-between
              border-t
              border-white/5
              pt-5
            ">

              <span className="
                text-xs
                font-semibold
                tracking-wider
                text-slate-500
              ">
                TECHNOVA '26
              </span>

              <span className="
                text-xs
                font-bold
                tracking-wider
                text-cyan-400
              ">
                EVENT {event.number} / {events.length}
              </span>

            </div>

          </article>


          {/* RIGHT BUTTON */}
          <button
            onClick={nextEvent}
            aria-label="Next event"
            className="
              absolute right-0 top-1/2 z-20
              flex h-12 w-12
              translate-x-1/2 -translate-y-1/2
              items-center justify-center
              rounded-full
              border border-cyan-400/30
              bg-slate-950/90
              text-2xl text-cyan-400
              shadow-xl shadow-cyan-500/10
              backdrop-blur-xl
              transition-all duration-300
              hover:scale-110
              hover:border-cyan-400
              hover:bg-cyan-400
              hover:text-slate-950
              sm:h-14 sm:w-14
            "
          >
            →
          </button>

        </div>


        {/* ================= DOTS ================= */}
        <div className="mt-8 flex items-center justify-center gap-3">

          {events.map((item, index) => (

            <button
              key={item.number}
              onClick={() => setCurrentEvent(index)}
              aria-label={`Go to event ${index + 1}`}
              className={`
                transition-all
                duration-300
                ${
                  currentEvent === index
                    ? "h-3 w-8 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/30"
                    : "h-3 w-3 rounded-full bg-slate-700 hover:bg-slate-500"
                }
              `}
            />

          ))}

        </div>


        {/* DOT LABEL */}
        <div className="mt-4 text-center">

          <span className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-slate-600
          ">
            Swipe / Click to Explore Events
          </span>

        </div>

      </div>
    </section>
  );
}