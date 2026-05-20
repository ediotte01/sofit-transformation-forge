import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-trainer.png";
import liftImg from "@/assets/trainer-lift.png";
import plankImg from "@/assets/trainer-plank.png";

export const Route = createFileRoute("/")({
  component: SofitHome,
});

const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Transformations", href: "#results" },
  { label: "Schedule", href: "#schedule" },
  { label: "Contact", href: "#cta" },
];

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="display text-2xl tracking-tight">Sofit</span>
          <span className="eyebrow text-accent">MTL</span>
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-foreground/70 hover:text-foreground transition">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="hidden md:inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 text-xs uppercase tracking-[0.18em] hover:bg-accent transition"
        >
          Book Free Intro
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-end pt-16 lg:pt-24 pb-16">
        <div className="lg:col-span-7 relative z-10">
          <div className="eyebrow text-accent mb-8">Sofit MTL · Montreal · Est. 2017</div>
          <h1 className="display text-[14vw] sm:text-[10vw] lg:text-[8.5vw] leading-[0.88]">
            Transform<br />
            <span className="italic font-light">your body.</span><br />
            Train with<br />
            <span className="text-accent italic font-light">purpose.</span>
          </h1>
          <p className="mt-10 max-w-md text-foreground/70 text-lg leading-relaxed">
            Semi-private training and group classes in Montreal — engineered for real results, built on discipline, accountability, and transformation.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#cta" className="bg-foreground text-background px-7 py-4 text-xs uppercase tracking-[0.22em] hover:bg-accent transition">
              Book Free Intro Session
            </a>
            <a href="#schedule" className="border border-foreground/30 px-7 py-4 text-xs uppercase tracking-[0.22em] hover:border-foreground transition">
              Join a Class Today
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden grain">
            <img src={heroImg} alt="Sofit MTL trainer" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-background border border-border p-5 max-w-[240px] shadow-xl">
            <div className="display text-4xl text-accent">500+</div>
            <div className="text-xs text-foreground/60 mt-1 uppercase tracking-wider">Transformations delivered since 2017</div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/3 -left-20 display text-[20vw] text-foreground/[0.03] pointer-events-none select-none">SOFIT</div>
    </section>
  );
}

function ProofStrip() {
  const items = [
    ["500+", "Transformations"],
    ["50+", "Weekly Classes"],
    ["17.4K", "Community"],
    ["2017", "Established"],
  ];
  return (
    <section className="border-y border-border bg-bone/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
        {items.map(([n, l]) => (
          <div key={l} className="py-10 px-6 text-center">
            <div className="display text-5xl md:text-6xl">{n}</div>
            <div className="eyebrow text-foreground/50 mt-2">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 lg:order-2">
          <div className="relative aspect-[3/4] grain overflow-hidden">
            <img src={liftImg} alt="Coach training" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7 lg:order-1">
          <div className="eyebrow text-accent mb-6">— The Studio</div>
          <h2 className="display text-5xl lg:text-7xl leading-[1] mb-10">
            A gym built for people who are <span className="italic text-accent">done settling.</span>
          </h2>
          <div className="space-y-6 text-foreground/75 text-lg leading-relaxed max-w-xl">
            <p>
              Sofit MTL was founded in 2017 on a single belief — that transformation is a discipline, not a destination. We don't sell quick fixes. We build training systems that compound.
            </p>
            <p>
              Behind every program is a coach who knows your name, your numbers, and your goals. Behind every class is a room full of people who chose to show up. That's the difference.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <div className="display text-3xl">01</div>
              <div className="text-xs uppercase tracking-wider mt-2 text-foreground/60">Discipline</div>
            </div>
            <div>
              <div className="display text-3xl">02</div>
              <div className="text-xs uppercase tracking-wider mt-2 text-foreground/60">Consistency</div>
            </div>
            <div>
              <div className="display text-3xl">03</div>
              <div className="text-xs uppercase tracking-wider mt-2 text-foreground/60">Transformation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    n: "01",
    title: "Semi-Private Training",
    desc: "Small group coaching with personalized progression. Three to five athletes per coach, fully programmed for your goals.",
  },
  {
    n: "02",
    title: "Group Classes",
    desc: "High-energy conditioning and fat-loss sessions. 50+ classes weekly across strength, HIIT, and metabolic training.",
  },
  {
    n: "03",
    title: "Transformation Coaching",
    desc: "Full structured programs combining training, nutrition guidance, and lifestyle accountability over 12 weeks.",
  },
];

function Services() {
  return (
    <section id="services" className="py-32 lg:py-40 bg-bone/50 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
          <div>
            <div className="eyebrow text-accent mb-6">— What We Offer</div>
            <h2 className="display text-5xl lg:text-7xl leading-[1] max-w-2xl">
              Three ways to <span className="italic">train with us.</span>
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <div key={s.n} className="bg-background p-10 lg:p-12 group hover:bg-foreground hover:text-background transition-colors duration-500">
              <div className="display text-6xl text-accent group-hover:text-background/40">{s.n}</div>
              <h3 className="display text-3xl mt-8">{s.title}</h3>
              <p className="mt-5 text-foreground/70 group-hover:text-background/70 leading-relaxed">{s.desc}</p>
              <a href="#cta" className="inline-flex items-center gap-3 mt-10 text-xs uppercase tracking-[0.22em] border-b border-current pb-1">
                Start Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="results" className="py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-20">
          <div className="eyebrow text-accent mb-6">— Transformations</div>
          <h2 className="display text-5xl lg:text-7xl">Real people. <span className="italic">Real results.</span></h2>
        </div>
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-12 md:col-span-7 aspect-[4/3] overflow-hidden grain">
            <img src={plankImg} alt="Transformation" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-4 lg:gap-6">
            <div className="aspect-[3/2] overflow-hidden grain">
              <img src={liftImg} alt="Training" className="w-full h-full object-cover" />
            </div>
            <div className="bg-foreground text-background p-8 flex flex-col justify-between">
              <div className="display text-6xl">−42 lbs</div>
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-background/60">Average client transformation</div>
                <div className="text-sm text-background/80 mt-2">across 12-week coaching cycles</div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 aspect-square overflow-hidden grain">
            <img src={heroImg} alt="Client" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-12 md:col-span-4 bg-accent text-accent-foreground p-10 flex flex-col justify-between">
            <div className="display text-5xl leading-tight">"I finally trust my body again."</div>
            <div className="text-xs uppercase tracking-[0.22em] opacity-80">— Sofit member, 8 months in</div>
          </div>
          <div className="col-span-12 md:col-span-4 aspect-square overflow-hidden grain">
            <img src={plankImg} alt="Client" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Giveaway() {
  return (
    <section className="relative py-32 lg:py-40 bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={liftImg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="eyebrow text-accent mb-8">— The $10,000 Giveaway</div>
          <h2 className="display text-5xl lg:text-7xl leading-[0.95]">
            Win <span className="text-accent">$10,000</span><br />
            in fitness transformation <span className="italic">support.</span>
          </h2>
          <p className="mt-8 text-background/70 text-lg max-w-xl">
            Coaching. Programming. Nutrition. Accountability. We're giving one Montrealer everything they need to change their life this year.
          </p>
        </div>
        <div className="lg:col-span-5">
          <form className="bg-background text-foreground p-8 lg:p-10 space-y-4">
            <div className="eyebrow text-accent">Enter the giveaway</div>
            <input type="text" placeholder="Full name" className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-accent" />
            <input type="email" placeholder="Email address" className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-accent" />
            <input type="text" placeholder="Instagram handle" className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-accent" />
            <button type="button" className="w-full bg-foreground text-background py-4 text-xs uppercase tracking-[0.22em] hover:bg-accent transition mt-4">
              Enter Giveaway
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Sarah L.", role: "Member · 14 months", quote: "Sofit didn't just change my body. It changed how I show up — every single day, in every part of my life." },
  { name: "Marc D.", role: "Member · 2 years", quote: "Down 38 pounds, stronger than I've ever been at 41. The coaching makes the difference. They actually care." },
  { name: "Élise R.", role: "Member · 8 months", quote: "The community is unreal. I walk in and I'm home. The results are just what happens when you keep showing up." },
];

function Testimonials() {
  return (
    <section className="py-32 lg:py-40 bg-bone/50 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="eyebrow text-accent mb-6">— Voices from the floor</div>
        <h2 className="display text-5xl lg:text-7xl mb-20 max-w-3xl">What our members <span className="italic">actually say.</span></h2>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-background p-10 flex flex-col justify-between min-h-[340px]">
              <blockquote className="display text-2xl leading-snug">"{t.quote}"</blockquote>
              <figcaption className="mt-10">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="eyebrow text-foreground/50 mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const schedule = [
  { day: "Mon", classes: ["6:00 Strength", "12:00 HIIT", "18:30 Conditioning"] },
  { day: "Tue", classes: ["6:00 Hypertrophy", "12:00 Burn", "19:00 Mobility"] },
  { day: "Wed", classes: ["6:00 Strength", "12:00 HIIT", "18:30 Power Hour"] },
  { day: "Thu", classes: ["6:00 Hypertrophy", "12:00 Burn", "19:00 Conditioning"] },
  { day: "Fri", classes: ["6:00 Strength", "12:00 HIIT", "17:30 Finisher"] },
  { day: "Sat", classes: ["8:00 Open Gym", "9:30 Saturday Sweat"] },
];

function Schedule() {
  return (
    <section id="schedule" className="py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="eyebrow text-accent mb-6">— Weekly Schedule</div>
            <h2 className="display text-5xl lg:text-7xl max-w-2xl">50+ classes <span className="italic">a week.</span></h2>
          </div>
          <a href="#cta" className="bg-foreground text-background px-7 py-4 text-xs uppercase tracking-[0.22em] hover:bg-accent transition">
            Reserve Your Spot
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border border border-border">
          {schedule.map((d) => (
            <div key={d.day} className="bg-background p-6 min-h-[200px]">
              <div className="display text-3xl text-accent">{d.day}</div>
              <ul className="mt-6 space-y-3">
                {d.classes.map((c) => (
                  <li key={c} className="text-sm text-foreground/75 border-l-2 border-accent/40 pl-3">{c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-foreground/60">All classes beginner-friendly. Drop-ins welcome with intro session.</p>
      </div>
    </section>
  );
}

function Trainer() {
  return (
    <section className="py-32 lg:py-40 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div className="aspect-[4/5] overflow-hidden grain">
            <img src={plankImg} alt="Head coach" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="eyebrow text-accent mb-6">— Meet Your Coach</div>
          <h2 className="display text-5xl lg:text-7xl leading-[1]">
            Coaching is <span className="italic text-accent">the work.</span>
          </h2>
          <p className="mt-8 text-background/70 text-lg leading-relaxed max-w-lg">
            Eight years in the industry. Hundreds of transformations. A coaching style built on direct feedback, deep accountability, and unshakeable belief in your potential.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8 max-w-md">
            <div>
              <div className="display text-4xl text-accent">8yr</div>
              <div className="text-xs uppercase tracking-wider mt-2 text-background/60">Coaching</div>
            </div>
            <div>
              <div className="display text-4xl text-accent">500+</div>
              <div className="text-xs uppercase tracking-wider mt-2 text-background/60">Clients coached</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="py-32 lg:py-48 text-center">
      <div className="mx-auto max-w-4xl px-6">
        <div className="eyebrow text-accent mb-8">— Your move</div>
        <h2 className="display text-6xl md:text-8xl lg:text-9xl leading-[0.9]">
          Your transformation <span className="italic text-accent">starts now.</span>
        </h2>
        <p className="mt-10 text-lg text-foreground/70 max-w-xl mx-auto">
          One free intro session. One coach. One honest conversation about your goals. That's how it begins.
        </p>
        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          <a href="#" className="bg-foreground text-background px-8 py-5 text-xs uppercase tracking-[0.22em] hover:bg-accent transition">Book Free Intro</a>
          <a href="#schedule" className="border border-foreground/30 px-8 py-5 text-xs uppercase tracking-[0.22em] hover:border-foreground transition">Join a Class</a>
          <a href="#services" className="border border-foreground/30 px-8 py-5 text-xs uppercase tracking-[0.22em] hover:border-foreground transition">Start Training</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-14 bg-bone/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="display text-2xl">Sofit</span>
            <span className="eyebrow text-accent">MTL</span>
          </div>
          <p className="mt-4 text-sm text-foreground/60 max-w-xs">Montreal's premium semi-private training studio. Since 2017.</p>
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
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-12 pt-6 border-t border-border text-xs text-foreground/50 flex justify-between">
        <span>© {new Date().getFullYear()} Sofit MTL</span>
        <span>Built for transformation.</span>
      </div>
    </footer>
  );
}

function SofitHome() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <ProofStrip />
      <About />
      <Services />
      <Results />
      <Giveaway />
      <Testimonials />
      <Schedule />
      <Trainer />
      <FinalCTA />
      <Footer />
    </main>
  );
}
