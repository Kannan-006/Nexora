import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe2,
  Mail,
  MessageCircle,
  Palette,
  Rocket,
  ShoppingCart,
  Smartphone,
  Target,
} from "lucide-react";

const COMPANY_EMAIL = "nexorawebandapps@gmail.com";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Website Development",
    path: "/WD",
    description:
      "Responsive websites that bring your brand to life and help customers understand your business.",
    tags: ["React", "Responsive", "Custom websites"],
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile App Development",
    path: "/MD",
    description:
      "Thoughtful mobile applications built around your users, workflows and business goals.",
    tags: ["Android", "iOS", "Cross-platform"],
  },
  {
    number: "03",
    icon: Code2,
    title: "Software Development",
    path: "/SD",
    description:
      "Custom software that organizes information, simplifies work and supports your business.",
    tags: ["Business tools", "Automation", "Integrations"],
  },
  {
    number: "04",
    icon: ShoppingCart,
    title: "E-Commerce Development",
    path: "/Ecommerce",
    description:
      "Online stores that make product discovery, shopping and everyday management easier.",
    tags: ["Storefronts", "Checkout", "Order management"],
  },
  {
    number: "05",
    icon: Target,
    title: "Digital Marketing",
    path: "/Marketing",
    description:
      "Focused strategies, relevant content and campaigns that connect your brand with its audience.",
    tags: ["SEO", "Campaigns", "Content"],
  },
  {
    number: "06",
    icon: Palette,
    title: "UI/UX Design",
    path: "/uiux",
    description:
      "Clear, consistent interfaces shaped through research, wireframes and interactive prototypes.",
    tags: ["Research", "Wireframes", "Prototypes"],
  },
];

const benefits = [
  {
    title: "Quality",
    description: "Careful execution and attention to the details that matter.",
  },
  {
    title: "Customization",
    description: "Solutions shaped around your business and your users.",
  },
  {
    title: "Innovation",
    description: "Thoughtful ideas with a clear, practical purpose.",
  },
  {
    title: "Agility",
    description: "A flexible approach to evolving project requirements.",
  },
  {
    title: "Collaboration",
    description: "Clear communication and regular opportunities for feedback.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover & Align",
    description:
      "We understand your goals, audience and requirements, then agree on what we will create.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "We define the approach and design an experience that fits your brand and users.",
  },
  {
    number: "03",
    title: "Build & Launch",
    description:
      "We develop, review and test the solution before preparing it for release.",
  },
  {
    number: "04",
    title: "Improve & Grow",
    description:
      "We help refine the product through an agreed support and improvement plan.",
  },
];

const styles = `
  .nx-home {
    --nx-ink: #14213d;
    --nx-blue: #087df1;
    --nx-cream: #f4f1e9;
    --nx-muted: #625e56;
    margin: 0;
    background: var(--nx-cream);
    color: var(--nx-ink);
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: clip;
    line-height: 1.5;
  }

  .nx-home *,
  .nx-home *::before,
  .nx-home *::after {
    box-sizing: border-box;
  }

  .nx-home h1,
  .nx-home h2,
  .nx-home h3,
  .nx-home p {
    margin: 0;
  }

  .nx-home a {
    text-decoration: none;
  }

  .nx-home a:focus-visible {
    outline: 3px solid var(--nx-blue);
    outline-offset: 5px;
  }

  .nx-home section[id] {
    scroll-margin-top: 105px;
  }

  .nx-wrap {
    width: min(100% - 48px, 1240px);
    margin-inline: auto;
  }

  .nx-section {
    padding-block: 100px;
  }

  .nx-white {
    background: #fff;
  }

  .nx-label {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px !important;
    color: var(--nx-blue);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .18em;
    text-transform: uppercase;
  }

  .nx-label::before {
    content: "";
    width: 28px;
    height: 2px;
    flex-shrink: 0;
    background: currentColor;
  }

  .nx-heading {
    font-size: clamp(36px, 4.5vw, 64px);
    font-weight: 600;
    letter-spacing: -.055em;
    line-height: 1.08;
  }

  .nx-copy {
    color: var(--nx-muted);
    font-size: 17px;
    line-height: 1.9;
  }

  .nx-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 17px 25px;
    border-radius: 15px;
    background: var(--nx-blue);
    color: white;
    font-size: 14px;
    font-weight: 700;
    transition: transform .2s, background .2s;
  }

  .nx-button:hover {
    transform: translateY(-3px);
    background: #0667c8;
  }

  .nx-button-dark {
    background: var(--nx-ink);
  }

  .nx-button-dark:hover {
    background: #203759;
  }

  .nx-text-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    padding-block: 8px;
    border-bottom: 1px solid currentColor;
    color: var(--nx-ink);
    font-size: 14px;
    font-weight: 700;
  }

  /* HERO */

  .nx-hero {
    position: relative;
    isolation: isolate;
    padding: 165px 0 100px;
    overflow: hidden;
  }

  .nx-hero::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 100px;
    right: -180px;
    width: 620px;
    height: 620px;
    border-radius: 50%;
    background: #d9ccff;
    opacity: .55;
    filter: blur(55px);
  }

  .nx-hero-grid {
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    align-items: center;
    gap: 60px;
  }

  .nx-hero-grid > *,
  .nx-section-heading > * {
    min-width: 0;
  }

  .nx-hero-title {
    font-size: clamp(50px, 6.5vw, 86px);
    font-weight: 600;
    letter-spacing: -.065em;
    line-height: 1.01;
  }

  .nx-hero-title span {
    color: var(--nx-blue);
    font-family: Georgia, serif;
    font-style: italic;
    font-weight: 400;
  }

  .nx-hero-copy {
    max-width: 550px;
    margin-top: 28px !important;
  }

  .nx-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 24px;
    margin-top: 32px;
  }

  .nx-note {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-top: 36px;
  }

  .nx-note-icon {
    display: grid;
    place-items: center;
    width: 45px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 14px;
    background: #b9e769;
  }

  .nx-note strong,
  .nx-note small {
    display: block;
  }

  .nx-note strong {
    font-size: 13px;
  }

  .nx-note small {
    margin-top: 3px;
    color: var(--nx-muted);
    font-size: 12px;
  }

  /* HERO CARDS */

  .nx-showcase {
    position: relative;
    padding: 20px;
    border-radius: 32px;
    background: var(--nx-ink);
    box-shadow: 0 28px 65px #14213d24;
    transform: rotate(1.5deg);
  }

  .nx-showcase-top {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    padding: 5px 4px 22px;
    color: #b3bdd0;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  .nx-showcase-top span:last-child {
    color: #b9e769;
  }

  .nx-visual-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .nx-visual-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 225px;
    padding: 24px;
    border-radius: 23px;
  }

  .nx-visual-card svg {
    margin-bottom: 32px;
  }

  .nx-violet {
    background: #d9ccff;
  }

  .nx-peach {
    background: #ffae94;
  }

  .nx-visual-card > span {
    margin-top: auto;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .1em;
    text-transform: uppercase;
  }

  .nx-visual-card strong {
    margin-top: 8px;
    font-size: 22px;
    line-height: 1.15;
    letter-spacing: -.03em;
  }

  .nx-visual-wide {
    grid-column: 1 / -1;
    min-height: 210px;
    background: #f8f5ef;
  }

  .nx-visual-wide p {
    color: var(--nx-blue);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .15em;
  }

  .nx-visual-wide h2 {
    margin-top: 30px;
    font-size: clamp(36px, 4vw, 52px);
    line-height: .98;
    letter-spacing: -.05em;
  }

  .nx-visual-wide em {
    color: var(--nx-blue);
    font-family: Georgia, serif;
    font-weight: 400;
  }

  .nx-service-count {
    position: absolute;
    right: -16px;
    bottom: 45px;
    padding: 15px 20px;
    border-radius: 17px;
    background: #b9e769;
    transform: rotate(-6deg);
    box-shadow: 0 10px 25px #0002;
  }

  .nx-service-count strong,
  .nx-service-count span {
    display: block;
  }

  .nx-service-count strong {
    font-size: 28px;
  }

  .nx-service-count span {
    font-size: 10px;
    font-weight: 700;
  }

  /* ABOUT */

  .nx-statement {
    max-width: 1150px;
    font-size: clamp(32px, 4.2vw, 60px);
    font-weight: 600;
    letter-spacing: -.045em;
    line-height: 1.15;
  }

  .nx-statement span {
    color: var(--nx-blue);
    font-family: Georgia, serif;
    font-style: italic;
    font-weight: 400;
  }

  .nx-about-grid {
    display: grid;
    grid-template-columns: 1.15fr .85fr;
    gap: 20px;
    margin-top: 55px;
  }

  .nx-about-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 370px;
    overflow: hidden;
    padding: 36px;
    border-radius: 30px;
  }

  .nx-about-dark {
    color: white;
    background: var(--nx-ink);
  }

  .nx-about-peach {
    background: #ffae94;
  }

  .nx-about-card h3 {
    position: relative;
    margin-top: 45px;
    font-size: clamp(27px, 3vw, 40px);
    letter-spacing: -.04em;
    line-height: 1.15;
  }

  .nx-about-card .nx-text-link {
    margin-top: 26px;
    color: inherit;
  }

  .nx-about-card > p {
    margin-top: 24px;
    font-size: 13px;
    font-weight: 700;
  }

  .nx-decoration {
    position: absolute;
    top: -20px;
    right: -15px;
    color: #ffffff06;
    font-size: 210px;
    font-weight: 900;
    line-height: 1;
  }

  /* SERVICES */

  .nx-section-heading {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: end;
    gap: 45px;
    margin-bottom: 48px;
  }

  .nx-service-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }

  .nx-service-card {
    display: flex;
    flex-direction: column;
    padding: 28px;
    border: 1px solid #ded9cf;
    border-radius: 27px;
    background: #faf8f3;
    color: var(--nx-ink);
    transition: transform .2s, box-shadow .2s, border-color .2s;
  }

  .nx-service-card:hover {
    transform: translateY(-6px);
    border-color: var(--nx-blue);
    box-shadow: 0 20px 40px #14213d12;
  }

  .nx-service-card:first-child {
    background: #d9ccff;
  }

  .nx-service-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nx-service-number {
    color: var(--nx-blue);
    font-size: 12px;
    font-weight: 800;
  }

  .nx-service-arrow {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border-radius: 13px;
    background: white;
  }

  .nx-service-icon {
    margin: 30px 0 22px;
    color: var(--nx-blue);
  }

  .nx-service-card h3 {
    font-size: 25px;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -.035em;
  }

  .nx-service-card p {
    margin-top: 15px;
    margin-bottom: 24px;
    color: var(--nx-muted);
    font-size: 14px;
    line-height: 1.8;
  }

  .nx-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: auto;
  }

  .nx-tags span {
    padding: 6px 9px;
    border: 1px solid #14213d26;
    border-radius: 30px;
    font-size: 10px;
    font-weight: 600;
  }

  .nx-explore {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 24px;
    color: var(--nx-blue);
    font-size: 13px;
    font-weight: 700;
  }

  /* BENEFITS */

  .nx-benefits {
    background: var(--nx-ink);
    color: white;
  }

  .nx-benefit-layout {
    display: grid;
    grid-template-columns: .85fr 1.15fr;
    gap: 60px;
  }

  .nx-benefits .nx-label {
    color: #b9e769;
  }

  .nx-benefits .nx-copy {
    margin-top: 24px;
    color: #bbc5d7;
  }

  .nx-benefit-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .nx-benefit-card {
    padding: 24px;
    border: 1px solid #ffffff24;
    border-radius: 20px;
    background: #ffffff05;
  }

  .nx-benefit-card:last-child {
    grid-column: 1 / -1;
  }

  .nx-benefit-card svg {
    color: #b9e769;
  }

  .nx-benefit-card h3 {
    margin-top: 16px;
    font-size: 19px;
  }

  .nx-benefit-card p {
    margin-top: 8px;
    color: #bbc5d7;
    font-size: 13px;
    line-height: 1.8;
  }

  /* PROCESS */

  .nx-process-list {
    margin-top: 45px;
    border-top: 1px solid #14213d;
  }

  .nx-process-row {
    display: grid;
    grid-template-columns: 45px 230px 1fr 24px;
    gap: 25px;
    align-items: start;
    padding: 30px 0;
    border-bottom: 1px solid #ded9cf;
  }

  .nx-process-row > span {
    padding-top: 5px;
    color: var(--nx-blue);
    font-size: 12px;
    font-weight: 800;
  }

  .nx-process-row h3 {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -.025em;
  }

  .nx-process-row p {
    color: var(--nx-muted);
    font-size: 14px;
    line-height: 1.8;
  }

  /* CONTACT */

  .nx-contact-section {
    padding: 20px;
  }

  .nx-contact-card {
    display: grid;
    grid-template-columns: .7fr 1.3fr;
    align-items: center;
    gap: 50px;
    max-width: 1320px;
    margin: auto;
    padding: 65px;
    border-radius: 34px;
    color: white;
    background: var(--nx-blue);
  }

  .nx-contact-kicker {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .2em;
  }

  .nx-contact-card h2 {
    font-size: clamp(90px, 11vw, 145px);
    font-weight: 600;
    line-height: 1;
    letter-spacing: -.07em;
  }

  .nx-contact-card h3 {
    font-size: clamp(28px, 3.5vw, 42px);
    line-height: 1.1;
    letter-spacing: -.035em;
  }

  .nx-contact-description {
    margin-top: 20px !important;
    color: #e0eeff;
    font-size: 16px;
    line-height: 1.8;
  }

  .nx-contact-card .nx-button {
    margin-top: 26px;
  }

  /* FOOTER */

  .nx-footer {
    padding: 65px 0 25px;
    background: var(--nx-ink);
    color: white;
  }

  .nx-footer-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr .8fr;
    gap: 50px;
    padding-bottom: 40px;
    border-bottom: 1px solid #ffffff24;
  }

  .nx-footer-brand {
    display: inline-block;
    color: white;
    font-size: 25px;
    font-weight: 900;
    letter-spacing: .12em;
  }

  .nx-footer-brand span {
    color: #389bff;
  }

  .nx-footer h3 {
    margin-bottom: 18px;
    font-size: 14px;
    font-weight: 700;
  }

  .nx-footer-copy {
    max-width: 310px;
    margin-top: 18px !important;
    color: #abb8cf;
    font-size: 14px;
    line-height: 1.8;
  }

  .nx-footer-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    color: #abb8cf;
    font-size: 14px;
  }

  .nx-footer-links a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    max-width: 100%;
    overflow-wrap: anywhere;
    color: #abb8cf;
  }

  .nx-footer-links a:hover {
    color: white;
  }

  .nx-footer-bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
    padding-top: 25px;
    color: #abb8cf;
    font-size: 12px;
  }

  .nx-whatsapp {
    position: fixed;
    bottom: 22px;
    right: 22px;
    z-index: 40;
    display: grid;
    place-items: center;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    color: white;
    background: #168643;
    box-shadow: 0 8px 25px #0003;
  }

  .nx-whatsapp:hover {
    background: #106c34;
  }

  /* RESPONSIVE */

  @media (max-width: 1050px) {
    .nx-hero-grid,
    .nx-benefit-layout {
      grid-template-columns: 1fr;
      gap: 45px;
    }

    .nx-hero-title {
      max-width: 750px;
    }

    .nx-showcase {
      width: min(100%, 650px);
      margin-inline: auto;
      transform: none;
    }

    .nx-service-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .nx-process-row {
      grid-template-columns: 35px 190px 1fr;
      gap: 20px;
    }

    .nx-process-row > svg {
      display: none;
    }
  }

  @media (max-width: 700px) {
    .nx-wrap {
      width: min(100% - 36px, 1240px);
    }

    .nx-section {
      padding-block: 65px;
    }

    .nx-hero {
      padding: 130px 0 65px;
    }

    .nx-hero-title {
      font-size: clamp(45px, 10vw, 65px);
    }

    .nx-section-heading,
    .nx-about-grid,
    .nx-service-grid,
    .nx-contact-card,
    .nx-footer-grid {
      grid-template-columns: 1fr;
    }

    .nx-section-heading {
      gap: 22px;
    }

    .nx-about-card {
      min-height: 310px;
      padding: 28px;
    }

    .nx-process-row {
      grid-template-columns: 30px 1fr;
      gap: 12px;
    }

    .nx-process-row p {
      grid-column: 2;
    }

    .nx-contact-section {
      padding: 12px;
    }

    .nx-contact-card {
      gap: 25px;
      padding: 35px 26px;
    }

    .nx-footer-grid {
      gap: 30px;
    }

    .nx-footer-bottom {
      padding-right: 55px;
    }
  }

  @media (max-width: 420px) {
    .nx-showcase {
      padding: 13px;
    }

    .nx-visual-grid {
      gap: 10px;
    }

    .nx-visual-card {
      min-height: 200px;
      padding: 17px;
    }

    .nx-visual-card strong {
      font-size: 19px;
    }

    .nx-visual-wide h2 {
      font-size: 37px;
    }

    .nx-service-count {
      right: 0;
      bottom: 20px;
      padding: 10px 13px;
    }

    .nx-benefit-grid {
      grid-template-columns: 1fr;
    }

    .nx-actions {
      align-items: flex-start;
      flex-direction: column;
      gap: 15px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .nx-home *,
    .nx-home *::before,
    .nx-home *::after {
      transition: none !important;
      animation: none !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default function Home() {
  return (
    <>
      {/* Shared navbar: render only once */}
      <Navbar />

      {/* These styles are scoped to Home, not the navbar */}
      <style>{styles}</style>

      <main className="nx-home">
        {/* HERO */}
        <section id="home" className="nx-hero">
          <div className="nx-wrap nx-hero-grid">
            <div>
              <p className="nx-label">
                Independent digital studio · Chennai
              </p>

              <h1 className="nx-hero-title">
                We shape ideas into{" "}
                <span>digital products</span> people love.
              </h1>

              <p className="nx-copy nx-hero-copy">
                Websites, mobile apps, custom software and digital
                experiences—thoughtfully designed and confidently
                built around your business.
              </p>

              <div className="nx-actions">
                <Link to="/contact" className="nx-button">
                  Build something great
                  <ArrowRight size={19} aria-hidden="true" />
                </Link>

                <a href="#services" className="nx-text-link">
                  See our services
                  <ArrowDownRight size={18} aria-hidden="true" />
                </a>
              </div>

              <div className="nx-note">
                <span className="nx-note-icon">
                  <CheckCircle2 size={23} aria-hidden="true" />
                </span>

                <div>
                  <strong>Built around your business</strong>
                  <small>
                    Strategy, design and development together.
                  </small>
                </div>
              </div>
            </div>

            <div className="nx-showcase">
              <div className="nx-showcase-top">
                <span>Nexora / Studio</span>
                <span>Let's build together</span>
              </div>

              <div className="nx-visual-grid">
                <div className="nx-visual-card nx-violet">
                  <Code2 size={40} aria-hidden="true" />
                  <span>Design + Development</span>
                  <strong>One focused team.</strong>
                </div>

                <div className="nx-visual-card nx-peach">
                  <Rocket size={40} aria-hidden="true" />
                  <span>Ideas into action</span>
                  <strong>From concept to launch.</strong>
                </div>

                <div className="nx-visual-card nx-visual-wide">
                  <p>PRODUCT THINKING</p>

                  <h2>
                    Clear ideas.
                    <br />
                    <em>Beautifully built.</em>
                  </h2>
                </div>
              </div>

              <div className="nx-service-count">
                <strong>06</strong>
                <span>Core services</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="nx-section nx-white">
          <div className="nx-wrap">
            <p className="nx-label">About Nexora</p>

            <h2 className="nx-statement">
              A creative technology company helping businesses grow
              through <span>thoughtful design</span>, practical
              development and focused digital strategy.
            </h2>

            <div className="nx-about-grid">
              <article className="nx-about-card nx-about-dark">
                <span className="nx-decoration" aria-hidden="true">
                  NX
                </span>

                <Globe2 size={38} aria-hidden="true" />

                <h3>
                  Our vision is to make powerful digital technology
                  clear, useful and accessible.
                </h3>

                <Link to="/About" className="nx-text-link">
                  Get to know Nexora
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </article>

              <article className="nx-about-card nx-about-peach">
                <Rocket size={38} aria-hidden="true" />

                <h3>
                  We turn business ideas into experiences people
                  remember and enjoy using.
                </h3>

                <p>Strategy-led. User-focused. Built to grow.</p>
              </article>
            </div>
          </div>
        </section>

        {/* CLICKABLE SERVICE CARDS */}
        <section id="services" className="nx-section">
          <div className="nx-wrap">
            <div className="nx-section-heading">
              <div>
                <p className="nx-label">Our expertise</p>

                <h2 className="nx-heading">
                  Simple, effective and built for impact.
                </h2>
              </div>

              <p className="nx-copy">
                Everything we create is designed to solve a real
                problem—from a stronger website to a more useful
                product experience.
              </p>
            </div>

            <div className="nx-service-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="nx-service-card"
                  >
                    <div className="nx-service-top">
                      <span className="nx-service-number">
                        {service.number}
                      </span>

                      <span className="nx-service-arrow">
                        <ArrowDownRight
                          size={23}
                          aria-hidden="true"
                        />
                      </span>
                    </div>

                    <Icon
                      className="nx-service-icon"
                      size={38}
                      aria-hidden="true"
                    />

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <div className="nx-tags">
                      {service.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <span className="nx-explore">
                      Explore service
                      <ArrowRight size={17} aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY NEXORA */}
        <section className="nx-section nx-benefits">
          <div className="nx-wrap nx-benefit-layout">
            <div>
              <p className="nx-label">Why Nexora</p>

              <h2 className="nx-heading">
                A thoughtful partner for your next move.
              </h2>

              <p className="nx-copy">
                We combine creative thinking with practical
                execution to help you move your project forward.
              </p>
            </div>

            <div className="nx-benefit-grid">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="nx-benefit-card"
                >
                  <CheckCircle2 size={25} aria-hidden="true" />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="nx-section nx-white">
          <div className="nx-wrap">
            <p className="nx-label">How we work</p>

            <h2 className="nx-heading">
              From first conversation to launch.
              <br />
              Clear at every step.
            </h2>

            <div className="nx-process-list">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="nx-process-row"
                >
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <ArrowDownRight size={24} aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="nx-contact-section">
          <div className="nx-contact-card">
            <div>
              <p className="nx-contact-kicker">HAVE AN</p>
              <h2>idea?</h2>
            </div>

            <div>
              <h3>Let's work together!</h3>

              <p className="nx-contact-description">
                Ready to bring your vision to life? Share your goals
                with Nexora and explore a practical path from idea
                to digital product.
              </p>

              <Link
                to="/contact"
                className="nx-button nx-button-dark"
              >
                Start a conversation
                <ArrowRight size={19} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="nx-footer">
          <div className="nx-wrap">
            <div className="nx-footer-grid">
              <div>
                <Link
                  to="/"
                  className="nx-footer-brand"
                  aria-label="Nexora home"
                >
                  NEX<span>O</span>RA
                </Link>

                <p className="nx-footer-copy">
                  Useful ideas. Thoughtful execution. Digital
                  experiences built around your business.
                </p>
              </div>

              <div>
                <h3>Contact</h3>

                <div className="nx-footer-links">
                  <a href="tel:+917639564969">
                    +91 7639564969
                  </a>

                  <a href={`mailto:${COMPANY_EMAIL}`}>
                    <Mail size={16} aria-hidden="true" />
                    {COMPANY_EMAIL}
                  </a>

                  <span>Chennai, Tamil Nadu</span>
                </div>
              </div>

              <div>
                <h3>Navigation</h3>

                <div className="nx-footer-links">
                  <Link to="/">Home</Link>
                  <Link to="/About">About Nexora</Link>
                  <a href="#services">Services</a>
                  <a href="#process">Our Process</a>
                  <Link to="/contact">Contact</Link>
                </div>
              </div>
            </div>

            <div className="nx-footer-bottom">
              <p>
                © {new Date().getFullYear()} Nexora. All rights
                reserved.
              </p>

              <p>Innovate · Transform · Grow</p>
            </div>
          </div>
        </footer>

        <a
          href="https://wa.me/917639564969"
          target="_blank"
          rel="noopener noreferrer"
          className="nx-whatsapp"
          aria-label="Contact Nexora on WhatsApp"
        >
          <MessageCircle size={27} aria-hidden="true" />
        </a>
      </main>
    </>
  );
}