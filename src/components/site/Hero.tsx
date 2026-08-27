import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32"
    >
      <img
        src={heroImage}
        alt="Marble form lit by dramatic studio light"
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-70"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.14, delayChildren: 0.1 }}
        className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10"
      >
        <motion.p
          variants={fade}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow"
        >
          Senior Full Stack Engineer — Tanta, Egypt
        </motion.p>

        <motion.h1
          variants={fade}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="display mt-8 max-w-4xl text-[clamp(3rem,9vw,7.5rem)] text-foreground"
        >
          Build systems
          <br />
          that fill calendars.
        </motion.h1>

        <motion.p
          variants={fade}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Senior Full Stack Engineer specializing in scalable multi-tenant
          architectures, real-time systems, and high-concurrency platforms — the
          technical foundation behind reliable booking and scheduling products.
        </motion.p>

        <motion.div
          variants={fade}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-500 hover:opacity-90"
          >
            View Selected Work
            <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-border px-7 py-3.5 text-sm text-foreground transition-all duration-500 hover:border-border-strong hover:bg-secondary"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.p
          variants={fade}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 text-xs tracking-[0.2em] text-muted-foreground"
        >
          .NET 8 • MICROSERVICES • MULTI-TENANT • REAL-TIME SYSTEMS
        </motion.p>
      </motion.div>
    </section>
  );
}
