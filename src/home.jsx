
import { useState } from "react";
import Timeline from "./Timeline";
import { Link, useNavigate } from "react-router-dom";

const GOOGLE_FORM_LINK =
  "https://forms.gle/p9mTx7d22hEvAhSp8"; // Replace with your Google Form link

const eventDetails = [
  {
    icon: "📅",
    title: "Date",
    value: "07 October 2026",
  },
  {
    icon: "⏰",
    title: "Time",
    value: "09:00 AM - 04:00 PM",
  },
  {
    icon: "📍",
    title: "Venue",
    value: "College Agricultural Auditorium",
  },
   {
    icon: "💵",
    title: "register Fee",
    value: "₹ 250",
  },  
];

const highlights = [
  {
    icon: "💡",
    title: "Innovation",
    description:
      "Bring your ideas, creativity and technical skills to solve exciting challenges.",
  },
  {
    icon: "🏆",
    title: "Prizes",
    description:
      "Compete with talented students and win exciting prizes and recognition.",
  },
  {
    icon: "🤝",
    title: "Networking",
    description:
      "Meet students, developers and passionate innovators from different backgrounds.",
  },
  {
    icon: "🚀",
    title: "Experience",
    description:
      "Learn, collaborate and gain practical experience through an engaging event.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
const navigation = useNavigate();
  const openRegistration = () => {
    window.open(GOOGLE_FORM_LINK, "_blank", "noopener,noreferrer");
  };

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
              about
            </a>

            <a
              href="#details"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Details
            </a>
            
            
            
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

      {// ================= HERO ================= 
      }
      <main id="home">
        <section className="hero-grid relative flex min-h-screen items-center overflow-hidden px-5 pt-32">
          
          {// Background Glow 
          }
          <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
           
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 py-20 lg:grid-cols-2">
           
            {// Left 
            }
            <div >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                COLLEGE EVENT 2026
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                INNOVATE
                <br />
                <span className="gradient-text">CREATE</span>
                <br />
                INSPIRE.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                Join us for an exciting college event where ideas meet
                innovation. Learn, compete, collaborate and create something
                extraordinary.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={openRegistration}
                  className="group rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-300"
                >
                  Register Now
                  <span className="ml-2 transition group-hover:ml-3">
                    →
                  </span>
                </button>

                <Link
                  to="/event"
                  className="rounded-xl border border-white/15 px-7 py-4 text-center font-semibold text-slate-200 transition hover:bg-white/5"
                >
                  Explore Event
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-6 text-sm text-slate-400">
                <span>✓ Open for Students</span>
                <span>✓ Certificates</span>
                <span>✓ Exciting Prizes</span>
              </div>
            </div>

            {// Right Event Card
            }
            <div className="relative ">
               
              <div className="glass relative rounded-3xl p-4 shadow-2xl ">
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-7 relative">
                  <img src="/WhatsApp_Image_2025-09-12_at_18.22.28_4ebc8d65-removebg-preview.png" alt="" srcset="" 
            className="absolute w-full z-10 top-0 right-0  opacity-5  "/>
            <div className="relative z-30">
                  <div className="mb-10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                        Featured Event
                      </p>

                      <h2 className="mt-3 text-3xl font-black">
                        ZEN
                        <span className="gradient-text">THRA</span>
                        '26
                      </h2>
                    </div>

                    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-center">
                      <p className="text-xs text-cyan-300">OCT</p>
                      <p className="text-2xl font-black">07</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {eventDetails.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-xl">
                          {item.icon}
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-wider text-slate-500">
                            {item.title}
                          </p>

                          <p className="mt-1 font-semibold text-slate-200">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={openRegistration}
                    className="mt-7 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-4 font-bold text-white transition hover:opacity-90"
                  >
                    Secure Your Spot →
                  </button>
            </div>      
                </div>
              </div>

              {// Decorative Elements 
              }
              <div className="absolute -right-5 -top-5 -z-10 h-24 w-24 rounded-full border border-cyan-400/20" />
              <div className="absolute -bottom-5 -left-5 -z-10 h-20 w-20 rounded-full bg-indigo-500/10 blur-2xl" />
            </div>
          </div>
        </section>

        {// ================= ABOUT ================= 
        }
        <section
          id="about"
          className="relative border-t border-white/5 px-5 py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
                  About ZENTHRA '26
                </p>

                <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                  Where Technology
                  <br />
                  <span className="gradient-text">Meets Innovation.</span>
                </h2>

                <p className="mt-7 leading-8 text-slate-400">
                  ZENTHRA '26 is a vibrant technical symposium organized by the
                  Department of Information Technology, bringing together passionate
                  students, innovative minds and technology enthusiasts. The symposium
                  provides an exciting platform to showcase technical skills, present
                  innovative ideas, participate in engaging events and connect with
                  like-minded learners. Join us to learn, compete, collaborate and
                  experience the spirit of technology and innovation.
                </p>
              </div>
            
            {// Highlights 
            }
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="glass group rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Timeline/>
        
        {// ================= DETAILS ================= 
        }
        <section
          id="details"
          className="border-t border-white/5 bg-slate-900/40 px-5 py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
                Event Information
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Everything you need
                <br />
                <span className="gradient-text">to know.</span>
              </h2>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2">
              {eventDetails.map((item) => (
                <div
                  key={item.title}
                  className="glass flex items-center gap-5 rounded-2xl p-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 text-2xl">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">{item.title}</p>
                    <p className="mt-1 text-lg font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
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
            excitement of ZENTHRA '26.
          </p>
           <button
                  onClick={()=>{navigation("/event")}}
                  className="mt-8 rounded-xl bg-cyan-400 px-8 py-4 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-300"
                >
                  Explore Our →
                </button>
        </div>
            {// CTA 
            }
            <div className="relative mt-16 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-8 text-center sm:p-14">
              <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
                  Don't Miss Out
                </p>

                <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                  Ready to be part of
                  <br />
                  <span className="gradient-text">ZENTHRA '26?</span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-slate-400">
                  Registration is quick and easy. Click below to fill out the
                  official registration form.
                </p>

                <button
                  onClick={openRegistration}
                  className="mt-8 rounded-xl bg-cyan-400 px-8 py-4 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-300"
                >
                  Register Now →
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {// ================= FOOTER ================= //
      }
      <footer className="border-t border-white/5 px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-bold">Dhanalakshmi Srinivasan Engineering College (Autonomous)</p>
            <p className="mt-1 text-sm text-slate-500">
              Department of Information Technology
            </p>
           
<a
  href="https://maps.app.goo.gl/3AwxxnVfk67nsmg1A"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
>
  <span>📍</span>
  <span className="font-medium">Event Location:</span>
  <span className="text-cyan-400 hover:underline">
    Google Maps ↗
  </span>
</a>


          </div>

          <p className="text-sm text-slate-500">
            © 2026 ZENTHRA '26. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;

