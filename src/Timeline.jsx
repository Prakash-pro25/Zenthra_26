// ================= TIMELINE COMPONENT =================
export default function Timeline() {
  const timeline = [
    {
      day: "01",
      time: "09:00 AM",
      title: "Registration & Check-in",
      description:
        "Participants arrive at the venue, complete registration and receive event kits.",
      icon: "🎫",
      side: "left",
    },
    {
      day: "02",
      time: "10:00 AM",
      title: "Opening Ceremony",
      description:
        "Welcome address, introduction to TECHNOVA '26 and an overview of the day's activities.",
      icon: "🎤",
      side: "right",
    },
    {
      day: "03",
      time: "10:30 AM",
      title: "Tech Challenge Begins",
      description:
        "Participants start working on exciting technical challenges and innovative ideas.",
      icon: "💻",
      side: "left",
    },
    {
      day: "04",
      time: "12:30 PM",
      title: "Mentor Round",
      description:
        "Get guidance and feedback from mentors to improve your ideas and solutions.",
      icon: "🧑‍💻",
      side: "right",
    },
    {
      day: "05",
      time: "01:00 PM",
      title: "Lunch Break",
      description:
        "Take a break, recharge and connect with fellow participants.",
      icon: "🍽️",
      side: "left",
    },
    {
      day: "06",
      time: "02:00 PM",
      title: "Final Evaluation",
      description:
        "Teams present their work while the judging panel evaluates creativity, innovation and implementation.",
      icon: "🏆",
      side: "right",
    },
    {
      day: "07",
      time: "03:30 PM",
      title: "Results & Awards",
      description:
        "Celebrate the winners and recognize outstanding ideas and performances.",
      icon: "🥇",
      side: "left",
    },
    {
      day: "08",
      time: "04:00 PM",
      title: "Closing Ceremony",
      description:
        "Event highlights, winner announcements, certificates and closing remarks.",
      icon: "🚀",
      side: "right",
    },
  ];

  return (
    <section
      id="timeline"
      className="relative overflow-hidden border-t border-white/5 bg-slate-950 px-5 py-24"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Event Schedule
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            TECHNOVA <span className="gradient-text">'26</span>
          </h2>

          <p className="mt-5 text-slate-400">
            Follow the complete journey of TECHNOVA '26.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-20">

          {/* CENTER LINE */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 md:block" />

          <div className="space-y-10 md:space-y-16">

            {timeline.map((item) => (
              <div
                key={item.day}
                className="relative grid md:grid-cols-2 md:gap-16"
              >

                {/* LEFT CARD */}
                {item.side === "left" ? (
                  <div className="md:col-start-1 md:col-end-2">
                    <TimelineCard item={item} />
                  </div>
                ) : (
                  <div className="hidden md:block md:col-start-1 md:col-end-2" />
                )}

                {/* RIGHT CARD */}
                {item.side === "right" ? (
                  <div className="md:col-start-2 md:col-end-3">
                    <TimelineCard item={item} />
                  </div>
                ) : (
                  <div className="hidden md:block md:col-start-2 md:col-end-3" />
                )}

                {/* CENTER DOT */}
                <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-950 shadow-lg shadow-cyan-500/20">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400 text-xs font-black text-slate-950">
                      {item.day}
                    </div>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Be Part of TECHNOVA '26
          </div>
        </div>

      </div>
    </section>
  );
}


// ================= TIMELINE CARD =================
function TimelineCard({ item }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-cyan-500/10">

      {/* TIME + STEP */}
      <div className="mb-4 flex items-center gap-2">

        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
          {item.time}
        </span>

        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
          STEP {item.day}
        </span>

      </div>

      {/* TITLE + ICON */}
      <div className="flex items-start justify-between gap-5">

        <div>
          <h3 className="text-xl font-black text-white">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            {item.description}
          </p>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-2xl transition-transform duration-300 group-hover:scale-110">
          {item.icon}
        </div>

      </div>

      {/* BOTTOM LINE */}
      <div className="mt-5 h-px w-full bg-gradient-to-r from-cyan-400/40 to-transparent" />

    </div>
  );
}