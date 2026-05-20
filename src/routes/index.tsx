import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-trainer.png";
import liftImg from "@/assets/trainer-lift.png";
import plankImg from "@/assets/trainer-plank.png";

export const Route = createFileRoute("/")({
  component: SofitHome,
});

const nav = [
  { label: "Method", href: "#method" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Schedule", href: "#schedule" },
];

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 text-background mix-blend-difference">
          <span className="display text-3xl tracking-tight">Sofit</span>
          <span className="eyebrow text-accent">MTL</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 mix-blend-difference text-background">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-xs uppercase tracking-[0.22em] opacity-70 hover:opacity-100 transition">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="hidden md:inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 text-[10px] uppercase tracking-[0.24em] hover:bg-foreground hover:text-background transition"
        >
          Free Intro Session →
        </a>
      </div>
    </header>
  );
}

/* ─── 01 · HOOK ─────────────────────────────── */
function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[720px] overflow-hidden bg-foreground text-background">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover object-[center_30%] kenburns opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/10 to-foreground/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-transparent to-transparent" />
      </div>

      <div className="absolute top-24 left-6 lg:left-10 eyebrow text-background/60 rise">
        01 — The Decision
      </div>

      <div className="relative h-full mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-col justify-end pb-24 lg:pb-32">
        <h1 className="display text-[16vw] sm:text-[12vw] lg:text-[9.5vw] leading-[0.85] max-w-[14ch] rise rise-delay-1">
          Burn fat.<br />
          Build muscle.<br />
          <span className="italic text-accent">Align.</span>
        </h1>

        <div className="mt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 rise rise-delay-2">
          <p className="max-w-md text-background/75 text-lg leading-relaxed">
            Montreal's premium semi-private training studio. Eight years. Five hundred transformations. One method that compounds.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#cta" className="bg-accent text-accent-foreground px-8 py-5 text-xs uppercase tracking-[0.24em] hover:bg-background hover:text-foreground transition">
              Book Free Intro
            </a>
            <a href="#schedule" className="border border-background/30 px-8 py-5 text-xs uppercase tracking-[0.24em] hover:border-background hover:bg-background/10 transition">
              See Schedule
            </a>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-background/20 py-4 overflow-hidden">
        <div className="flex marquee whitespace-nowrap eyebrow text-background/50">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12">
              <span>Semi-Private Training</span><span className="text-accent">✦</span>
              <span>Group Classes</span><span className="text-accent">✦</span>
              <span>Transformation Coaching</span><span className="text-accent">✦</span>
              <span>Montreal · Since 2017</span><span className="text-accent">✦</span>
              <span>500+ Transformations</span><span className="text-accent">✦</span>
              <span>17.4K Community</span><span className="text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 02 · PROOF ─────────────────────────────── */
function Proof() {
  const items = [
    ["500+", "Transformations", "Real bodies. Real lives."],
    ["50+", "Weekly Classes", "Strength · HIIT · Mobility"],
    ["17.4K", "Community", "Coached on and off the floor"],
    ["2017", "Established", "Eight years compounding"],
  ];
  return (
    <section className="bg-foreground text-background py-24 lg:py-32 border-b border-background/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="eyebrow text-accent mb-12">02 — The Proof</div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-background/10">
          {items.map(([n, l, s]) => (
            <div key={l} className="bg-foreground p-8 lg:p-10">
              <div className="display text-6xl lg:text-7xl">{n}</div>
              <div className="eyebrow text-background/60 mt-4">{l}</div>
              <div className="text-sm text-background/50 mt-3">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 03 · SERVICES ─────────────────────────── */
const services = [
  {
    n: "01",
    tag: "Most Popular",
    title: "Semi-Private Training",
    desc: "Three to five athletes per coach. Personalized programming, real progressions, accountability that doesn't let you ghost yourself.",
    feats: ["3–5 athletes per coach", "Custom programming", "Weekly check-ins"],
  },
  {
    n: "02",
    tag: null,
    title: "Group Classes",
    desc: "High-energy strength, conditioning, and metabolic sessions. 50+ classes weekly. Beginner-friendly. Built to make you sweat with purpose.",
    feats: ["50+ classes per week", "All levels welcome", "Strength · HIIT · Mobility"],
  },
  {
    n: "03",
    tag: "12-Week",
    title: "Transformation Coaching",
    desc: "The full stack. Training, nutrition, lifestyle, and weekly 1:1 coaching for twelve weeks of compounding change.",
    feats: ["1:1 weekly coaching", "Nutrition programming", "Lifestyle accountability"],
  },
];

function Services() {
  return (
    <section id="services" className="py-32 lg:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-4">
            <div className="eyebrow text-accent mb-6">03 — What We Do</div>
          </div>
          <h2 className="lg:col-span-8 display text-5xl lg:text-7xl leading-[0.95]">
            Three programs. <span className="italic">One outcome.</span> Real change you can measure.
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <article key={s.n} className="bg-background p-10 lg:p-12 flex flex-col group hover:bg-foreground hover:text-background transition-colors duration-500">
              <div className="flex items-start justify-between">
                <div className="display text-5xl text-accent">{s.n}</div>
                {s.tag && (
                  <span className="text-[10px] uppercase tracking-[0.22em] border border-accent text-accent group-hover:border-background group-hover:text-background px-3 py-1.5">{s.tag}</span>
                )}
              </div>
              <h3 className="display text-3xl lg:text-4xl mt-10 leading-tight">{s.title}</h3>
              <p className="mt-5 text-foreground/70 group-hover:text-background/70 leading-relaxed">{s.desc}</p>
              <ul className="mt-8 space-y-2.5 text-sm">
                {s.feats.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-foreground/80 group-hover:text-background/80">
                    <span className="text-accent">→</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="mt-auto pt-12 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] border-b border-current pb-1 self-start">
                Start Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 04 · METHOD (why it works) ────────────── */
function Method() {
  const steps = [
    { n: "01", title: "Assess", body: "We start with one honest conversation. Goals. History. Limits. The baseline that tells us where to start, not where to dream." },
    { n: "02", title: "Program", body: "Your coach builds a progression — not a workout. Strength, conditioning, and recovery, sequenced to compound week after week." },
    { n: "03", title: "Coach", body: "Real eyes on every rep. Feedback every session. Adjustments based on data — not vibes. This is where most gyms stop. We're just starting." },
    { n: "04", title: "Compound", body: "Three months in, the body changes. Six months in, the identity changes. That's when you understand what this is really about." },
  ];
  return (
    <section id="method" className="bg-foreground text-background py-32 lg:py-44 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-24 items-end">
          <div className="lg:col-span-6">
            <div className="eyebrow text-accent mb-6">04 — Why It Works</div>
            <h2 className="display text-5xl lg:text-7xl leading-[0.95]">
              The Sofit <span className="italic text-accent">Method.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-background/70 text-lg leading-relaxed">
            We don't sell motivation. We engineer environments where motivation becomes irrelevant — because the system carries you when you don't feel like showing up.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10">
          {steps.map((s) => (
            <div key={s.n} className="bg-foreground p-8 lg:p-10 min-h-[300px] flex flex-col">
              <div className="display text-7xl text-accent leading-none">{s.n}</div>
              <h3 className="display text-2xl mt-8">{s.title}</h3>
              <p className="mt-4 text-sm text-background/65 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 05 · RESULTS ─────────────────────────── */
function Results() {
  return (
    <section id="results" className="py-32 lg:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-4">
            <div className="eyebrow text-accent mb-6">05 — The Results</div>
          </div>
          <h2 className="lg:col-span-8 display text-5xl lg:text-7xl leading-[0.95]">
            Real people. <span className="italic">Real results.</span> Receipts on the wall.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-3 lg:gap-5">
          <figure className="col-span-12 md:col-span-8 aspect-[16/10] overflow-hidden grain relative">
            <img src={plankImg} alt="Transformation" className="w-full h-full object-cover" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-foreground/90 to-transparent text-background">
              <div className="display text-4xl">Élise · 9 months</div>
              <div className="eyebrow text-background/70 mt-2">−28 lbs · +60% strength</div>
            </figcaption>
          </figure>
          <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-3 lg:gap-5">
            <div className="bg-accent text-accent-foreground p-8 flex flex-col justify-between">
              <div className="display text-7xl leading-none">−42<span className="text-3xl align-top">lbs</span></div>
              <div>
                <div className="eyebrow opacity-80">Avg. 12-week client</div>
                <div className="text-sm opacity-90 mt-2">based on 312 completed cycles</div>
              </div>
            </div>
            <div className="aspect-square overflow-hidden grain">
              <img src={heroImg} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 aspect-square overflow-hidden grain">
            <img src={liftImg} alt="" className="w-full h-full object-cover" />
          </div>
          <figure className="col-span-12 md:col-span-4 bg-foreground text-background p-10 flex flex-col justify-between">
            <blockquote className="display text-3xl leading-[1.05]">
              "I finally <span className="italic text-accent">trust</span> my body again. The mirror is the smallest part of what changed."
            </blockquote>
            <figcaption className="eyebrow text-background/60">— Sarah L. · 14 months in</figcaption>
          </figure>
          <div className="col-span-12 md:col-span-4 aspect-square overflow-hidden grain">
            <img src={plankImg} alt="" className="w-full h-full object-cover object-left" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 06 · GIVEAWAY ─────────────────────────── */
function Giveaway() {
  return (
    <section className="relative py-32 lg:py-44 bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <img src={liftImg} alt="" className="w-full h-full object-cover kenburns" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/30" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="eyebrow text-accent mb-8">06 — The Opportunity</div>
          <h2 className="display text-5xl lg:text-8xl leading-[0.9]">
            Win <span className="text-accent">$10,000</span><br />
            in transformation<br />
            <span className="italic">support.</span>
          </h2>
          <p className="mt-10 text-background/70 text-lg max-w-xl leading-relaxed">
            One Montrealer. One full year. Coaching, programming, nutrition, accountability — covered. The only thing you bring is the decision to show up.
          </p>
          <div className="mt-10 flex gap-8 text-sm text-background/60">
            <div><span className="text-accent display text-2xl block">12mo</span> Full coaching</div>
            <div><span className="text-accent display text-2xl block">1:1</span> Programming</div>
            <div><span className="text-accent display text-2xl block">$10K</span> Total value</div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <form className="bg-background text-foreground p-8 lg:p-10 space-y-5 border-l-2 border-accent">
            <div className="eyebrow text-accent">Enter the giveaway</div>
            <input type="text" placeholder="Full name" className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-accent placeholder:text-foreground/40" />
            <input type="email" placeholder="Email address" className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-accent placeholder:text-foreground/40" />
            <input type="text" placeholder="Instagram handle" className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-accent placeholder:text-foreground/40" />
            <button type="button" className="w-full bg-foreground text-background py-5 text-xs uppercase tracking-[0.24em] hover:bg-accent transition mt-4">
              Enter Giveaway →
            </button>
            <p className="text-xs text-foreground/50">By entering, you agree to follow @sofitmtl on Instagram.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── 07 · TESTIMONIALS ─────────────────────── */
const testimonials = [
  { name: "Sarah L.", role: "14 months", quote: "Sofit didn't just change my body. It changed how I show up — every day, in every part of my life." },
  { name: "Marc D.", role: "2 years", quote: "Down 38 lbs, stronger than I've ever been at 41. The coaching makes the difference. They actually care." },
  { name: "Élise R.", role: "9 months", quote: "The community is unreal. I walk in and I'm home. The results are what happens when you keep showing up." },
];

function Testimonials() {
  return (
    <section className="py-32 lg:py-44 bg-bone/50 border-y border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="eyebrow text-accent mb-6">07 — In Their Words</div>
        <h2 className="display text-5xl lg:text-7xl mb-20 max-w-3xl leading-[0.95]">
          What our members <span className="italic">actually say.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {testimonials.map((t, i) => (
            <figure key={t.name} className="bg-background p-10 lg:p-12 flex flex-col justify-between min-h-[380px]">
              <div>
                <div className="display text-3xl text-accent mb-6">0{i + 1}</div>
                <blockquote className="display text-2xl leading-snug">"{t.quote}"</blockquote>
              </div>
              <figcaption className="mt-10 pt-6 border-t border-border">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="eyebrow text-foreground/50 mt-1">Member · {t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 08 · SCHEDULE ─────────────────────────── */
const schedule = [
  { day: "Mon", classes: ["6:00 Strength", "12:00 HIIT", "18:30 Conditioning"] },
  { day: "Tue", classes: ["6:00 Hypertrophy", "12:00 Burn", "19:00 Mobility"] },
  { day: "Wed", classes: ["6:00 Strength", "12:00 HIIT", "18:30 Power Hour"] },
  { day: "Thu", classes: ["6:00 Hypertrophy", "12:00 Burn", "19:00 Conditioning"] },
  { day: "Fri", classes: ["6:00 Strength", "12:00 HIIT", "17:30 Finisher"] },
  { day: "Sat", classes: ["8:00 Open Gym", "9:30 Sweat"] },
];

function Schedule() {
  return (
    <section id="schedule" className="py-32 lg:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="eyebrow text-accent mb-6">08 — This Week</div>
            <h2 className="display text-5xl lg:text-7xl max-w-2xl leading-[0.95]">
              50+ classes <span className="italic">a week.</span>
            </h2>
          </div>
          <a href="#cta" className="bg-foreground text-background px-7 py-4 text-xs uppercase tracking-[0.22em] hover:bg-accent transition">
            Reserve Your Spot →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border border border-border">
          {schedule.map((d) => (
            <div key={d.day} className="bg-background p-6 lg:p-8 min-h-[220px]">
              <div className="display text-4xl text-accent">{d.day}</div>
              <ul className="mt-6 space-y-3">
                {d.classes.map((c) => (
                  <li key={c} className="text-sm text-foreground/75 border-l-2 border-accent/50 pl-3">{c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-foreground/60">All classes beginner-friendly. Drop-ins welcome after intro session.</p>
      </div>
    </section>
  );
}

/* ─── 09 · FINAL CTA ────────────────────────── */
function FinalCTA() {
  return (
    <section id="cta" className="relative py-32 lg:py-48 bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={plankImg} alt="" className="w-full h-full object-cover kenburns" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="eyebrow text-accent mb-8">09 — Your Move</div>
        <h2 className="display text-6xl md:text-8xl lg:text-[10vw] leading-[0.88]">
          Your transformation<br /><span className="italic text-accent">starts now.</span>
        </h2>
        <p className="mt-10 text-lg text-background/75 max-w-xl mx-auto leading-relaxed">
          One free intro. One coach. One honest conversation about what you actually want. That's how it begins.
        </p>
        <div className="mt-14 flex flex-wrap gap-3 justify-center">
          <a href="#" className="bg-accent text-accent-foreground px-9 py-5 text-xs uppercase tracking-[0.24em] hover:bg-background hover:text-foreground transition">
            Book Free Intro →
          </a>
          <a href="#schedule" className="border border-background/30 px-9 py-5 text-xs uppercase tracking-[0.24em] hover:bg-background/10 transition">
            Join a Class
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-16 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-4 gap-10 items-start">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="display text-3xl">Sofit</span>
            <span className="eyebrow text-accent">MTL</span>
          </div>
          <p className="mt-4 text-sm text-foreground/60 max-w-sm leading-relaxed">
            Montreal's premium semi-private training studio. Burn fat. Build muscle. Align with your goals. Since 2017.
          </p>
        </div>
        <div className="text-sm space-y-2 text-foreground/70">
          <div className="eyebrow text-foreground mb-3">Studio</div>
          <div>Montreal, QC</div>
          <div>hello@sofitmtl.com</div>
          <div>@sofitmtl · 17.4K</div>
        </div>
        <div className="text-sm space-y-2 text-foreground/70">
          <div className="eyebrow text-foreground mb-3">Hours</div>
          <div>Mon–Fri · 5:30 – 21:00</div>
          <div>Sat · 7:30 – 13:00</div>
          <div>Sun · By appointment</div>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mt-14 pt-6 border-t border-border text-xs text-foreground/50 flex justify-between flex-wrap gap-2">
        <span>© {new Date().getFullYear()} Sofit MTL · Montreal</span>
        <span className="eyebrow">Built for transformation.</span>
      </div>
    </footer>
  );
}

function SofitHome() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Proof />
      <Services />
      <Method />
      <Results />
      <Giveaway />
      <Testimonials />
      <Schedule />
      <FinalCTA />
      <Footer />
    </main>
  );
}
