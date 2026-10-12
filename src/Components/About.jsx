import React, { useState } from "react";
import { Link } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  Heart,
  ShieldCheck,
  Award,
  Sparkles,
  Users,
  Compass,
  CheckCircle2,
  TreePine,
  Lightbulb,
  ArrowRight,
  ChevronDown,
  Quote,
  Clock,
  PhoneCall,
  Mail,
  MapPin,
  Smile,
  BadgeCheck,
  Flame,
  Star,
} from "lucide-react";

const IMPACT_METRICS = [
  {
    number: "50,000+",
    label: "Children & Families Reached",
    description: "Bringing joyful, screen-free learning into homes worldwide.",
    icon: Smile,
  },
  {
    number: "1,200+",
    label: "Lab-Tested Certified Toys",
    description: "Every plaything rigorously verified against ASTM & EN71 protocols.",
    icon: ShieldCheck,
  },
  {
    number: "85+",
    label: "Local Artisans Supported",
    description: "Partnering with fair-wage woodworkers and educational makers.",
    icon: TreePine,
  },
  {
    number: "99.4%",
    label: "Positive Parent Satisfaction",
    description: "Rated 4.9/5 across thousands of verified customer reviews.",
    icon: Star,
  },
];

const CORE_PILLARS = [
  {
    icon: ShieldCheck,
    title: "100% Certified Non-Toxic Safety",
    description:
      "Babies explore with their mouths as much as their hands. That is why our catalog is free from lead, BPA, phthalates, and formaldehyde. Every coating is water-based or food-grade beeswax.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: Lightbulb,
    title: "Purposeful Child Development",
    description:
      "We say no to mindless flashing lights that overstimulate without teaching. Our open-ended toys encourage spatial awareness, tactile problem solving, fine motor dexterity, and imaginative storytelling.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: TreePine,
    title: "Sustainable Heirloom Craftsmanship",
    description:
      "Made from responsibly harvested FSC-certified beechwood, organic cotton textiles, and durable eco-materials. These toys are built to last through multiple siblings and be passed down through generations.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Users,
    title: "Ethical Community & Fair Wages",
    description:
      "We provide independent toy artisans and family-owned craft studios a dignified digital storefront, guaranteeing fair pricing and continuous investments back into local woodworking communities.",
    color: "text-[#FF7052]",
    bg: "bg-[#FFF5F2]",
  },
];

const SAFETY_PROCESS = [
  {
    step: "01",
    title: "Material Purity & Chemical Screening",
    details:
      "All raw timbers, non-toxic water-based paints, and silicone components undergo XRF spectroscopic scanning to confirm total absence of heavy metals, phthalates, and hazardous volatile chemicals.",
  },
  {
    step: "02",
    title: "Mechanical Stress & 2-Meter Drop Testing",
    details:
      "Toys are subjected to simulated real-world impacts, including repeated drops from 2 meters onto solid concrete and calibrated torque pull-tests on all joints and moving wheels.",
  },
  {
    step: "03",
    title: "Choking Hazard Tube Calibrations",
    details:
      "Every toy element intended for children under 36 months is measured inside a precision truncated cylinder gauge matching international pediatric airway safety parameters.",
  },
  {
    step: "04",
    title: "Pediatric Usability & Grip Review",
    details:
      "Our advisory panel of pediatric occupational therapists inspects handle bevels, weight balance, and tactile grip ergonomics to protect delicate developing wrist joints.",
  },
];

const TEAM_MEMBERS = [
  {
    name: "Nusrat Jahan",
    role: "Founder & Chief Play Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    bio: "Former early-childhood educator with 12 years of experience designing sensory classrooms and advocating for screen-free nursery spaces.",
  },
  {
    name: "Dr. Eleanor Vance",
    role: "Head of Child Development & Ergonomics",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    bio: "Pediatric neurodevelopmental specialist researching spatial intelligence acquisition and hands-on tactile manipulation in preschool children.",
  },
  {
    name: "Kazi Farhan Ahmed",
    role: "Lead Safety & Compliance Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    bio: "Over a decade of testing toy resilience under international ISO 8124 and ASTM F963 protocols, ensuring maximum durability and non-toxic integrity.",
  },
  {
    name: "Marcus Aurelius Chowdhury",
    role: "Director of Artisan & Community Relations",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    bio: "Connecting regional woodworking cooperatives and independent craft inventors to fair-trade opportunities on the Toy-ToPia marketplace.",
  },
];

const TIMELINE = [
  {
    year: "2021",
    title: "The Garage Workshop",
    description:
      "Toy-ToPia was born in a small home workshop in response to the overwhelming flood of disposable, battery-blinking plastic toys. We started by hand-cutting non-toxic wooden alphabet blocks for local preschools.",
  },
  {
    year: "2023",
    title: "Pediatric Advisory Board Formed",
    description:
      "We established our formal Child Development Advisory Council, partnering with pediatric occupational therapists to scientifically vet every toy design for motor skill milestones.",
  },
  {
    year: "2024",
    title: "National Marketplace Launch",
    description:
      "Launched our digital platform, opening doors to 50+ vetted independent toy makers and introducing our proprietary Verified Safety Badge standard for all listed items.",
  },
  {
    year: "2026",
    title: "Circular Play & Daycare Donation Initiative",
    description:
      "Partnering with local kindergartens and pediatric hospital wards to provide repaired, certified sanitized wooden toys, keeping over 15 tons of plastic out of community landfills.",
  },
];

const FAQS = [
  {
    question: "How do you verify the safety of toys sold on Toy-ToPia?",
    answer:
      "Every seller on Toy-ToPia must submit authenticated test certificates from accredited independent laboratories conforming to ASTM F963 (American) or EN71 (European) safety standards. Our internal quality engineering team also performs random batch sampling for heavy metals and mechanical durability.",
  },
  {
    question: "Are your wooden toys safe for babies who are actively teething?",
    answer:
      "Yes, absolutely. We strictly forbid oil-based varnishes, chemical solvents, and toxic lacquers. Our wooden items are finished exclusively with certified organic beeswax, plant-based linseed oil, or water-borne saliva-resistant organic dyes that are completely non-toxic even with prolonged oral contact.",
  },
  {
    question: "How do you select and support local craft artisans?",
    answer:
      "We actively scout independent woodworkers, sustainable textile makers, and educational puzzle designers. We provide them with fair trade wholesale pricing, free laboratory compliance guidance, and subsidized logistics so that traditional craftsmanship thrives in the modern digital economy.",
  },
  {
    question: "What is your return and satisfaction guarantee?",
    answer:
      "We stand behind every single toy. If a product arrives with any structural defect or does not meet your expectations for craftsmanship and safety, we provide a hassle-free 30-day replacement or full refund guarantee.",
  },
];

const About = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen tt-page-bg tt-text-primary flex flex-col font-sans">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-[#232D47]">
        <Navbar />
      </nav>

      {/* Hero Header Section */}
      <section className="relative bg-[#232D47] text-white py-20 md:py-28 border-b border-[#2E3B5C] overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#FF7052]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-11/12 max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2B3654] border border-[#2E3B5C] text-[#FF7052] text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Mission & Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Sparking Wonder, Screen-Free Joy, and Lifelong Learning
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#C3C8D2] leading-relaxed">
              Toy-ToPia is dedicated to bringing childhood back to its purest form:
              tactile, open-ended, non-toxic, and deeply imaginative. We bridge caring
              families with skilled artisans to ensure every toy nurtures growing minds safely.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/alltoys"
                className="btn bg-[#FF7052] hover:bg-[#E65C3F] text-white border-none rounded-xl px-6 font-bold flex items-center gap-2 shadow-lg shadow-[#FF7052]/25"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/blog"
                className="btn bg-[#2B3654] hover:bg-[#344265] text-white border border-[#2E3B5C] rounded-xl px-6 font-bold flex items-center gap-2"
              >
                <span>Read Play Journal</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers Section */}
      <section className="relative -mt-10 z-20 w-11/12 max-w-7xl mx-auto">
        <div className="tt-surface rounded-3xl shadow-xl border p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {IMPACT_METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-start border-b sm:border-b-0 sm:border-r tt-border-color last:border-none pb-6 sm:pb-0 pr-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFF5F2] text-[#FF7052] flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-3xl md:text-4xl font-black text-[#232D47]">
                  {metric.number}
                </span>
                <span className="text-sm font-bold tt-text-primary mt-1">
                  {metric.label}
                </span>
                <p className="text-xs tt-text-muted mt-1.5 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* The Story & Why We Began */}
      <section className="w-11/12 max-w-7xl mx-auto py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=900&auto=format&fit=crop&q=80"
                alt="Child playing with wooden toys"
                className="w-full h-[460px] object-cover"
              />
            </div>
            {/* Small floating badge */}
            <div className="absolute -bottom-6 -right-4 md:right-6 bg-[#232D47] text-white p-5 rounded-2xl shadow-xl border border-[#2E3B5C] max-w-xs">
              <div className="flex items-center gap-2 text-[#FF7052] text-xs font-bold uppercase mb-1">
                <BadgeCheck className="w-4 h-4" />
                <span>Our Promise</span>
              </div>
              <p className="text-xs text-[#C3C8D2] leading-snug">
                Zero harmful chemicals. No plastic disposability. 100% certified child-safe craftsmanship.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="px-3.5 py-1.5 rounded-full bg-[#FFF5F2] text-[#FF7052] text-xs font-bold uppercase tracking-wider">
              The Toy-ToPia Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#232D47] mt-3 leading-tight">
              Why We Rebelled Against Disposable Plastic & Blinking Screens
            </h2>
            <p className="mt-5 tt-text-secondary text-base md:text-lg leading-relaxed">
              Walk into any conventional toy megastore today, and you are greeted by an assault of synthetic neon plastics, deafening robotic noises, and gadgets with zero creative input required from the child.
            </p>
            <p className="mt-4 tt-text-secondary text-sm md:text-base leading-relaxed">
              When children merely watch a toy perform, their imagination stays passive. But when you place solid beechwood blocks, balanced mechanical gears, or a microscope into their hands, they become active scientists and storytellers.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-sm tt-text-secondary">
                  <strong>Tactile Sensory Feedback:</strong> Real wood, cotton, and organic materials provide authentic weight and temperature cues that stimulate cognitive development.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-sm tt-text-secondary">
                  <strong>Heirloom Durability:</strong> Resisting the throwaway culture by creating toys designed to withstand decades of joyful play.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-sm tt-text-secondary">
                  <strong>Equitable Local Partnerships:</strong> Uplifting regional craftspeople who take pride in ethical, humane production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="tt-surface-2 py-20 border-y tt-border-color">
        <div className="w-11/12 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3.5 py-1.5 rounded-full tt-surface text-[#FF7052] text-xs font-bold uppercase tracking-wider border shadow-xs">
              What Defines Us
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#232D47] mt-3">
              Our Four Uncompromising Pillars
            </h2>
            <p className="tt-text-secondary text-sm md:text-base mt-3">
              Every item featured on Toy-ToPia must pass each of these rigorous standards before ever being offered to families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="tt-surface rounded-3xl p-8 border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-14 h-14 rounded-2xl ${pillar.bg} ${pillar.color} flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-[#232D47] leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm tt-text-secondary leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t tt-border-color flex items-center gap-1.5 text-xs font-bold text-[#FF7052]">
                    <span>Verified Standard</span>
                    <BadgeCheck className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rigorous 4-Step Safety Testing Protocol */}
      <section className="w-11/12 max-w-7xl mx-auto py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-[#FFF5F2] text-[#FF7052] text-xs font-bold uppercase tracking-wider">
            Zero Compromise on Health
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#232D47] mt-3">
            The Toy-ToPia Safety & Testing Protocol
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3">
            We know nothing matters more than the safety of your little ones. Here is our 4-tier inspection process for every toy line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAFETY_PROCESS.map((step, idx) => (
            <div
              key={idx}
              className="tt-surface rounded-3xl p-7 border shadow-sm relative overflow-hidden"
            >
              <div className="text-4xl font-black tt-step-number mb-2">
                {step.step}
              </div>
              <h4 className="text-lg font-bold text-[#232D47] mb-2 leading-tight">
                {step.title}
              </h4>
              <p className="text-xs sm:text-sm tt-text-secondary leading-relaxed">
                {step.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Journey / Milestones */}
      <section className="bg-[#232D47] text-white py-20 md:py-28 border-t border-[#2E3B5C]">
        <div className="w-11/12 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-[#2B3654] text-[#FF7052] text-xs font-bold uppercase tracking-wider border border-[#2E3B5C]">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
              How Toy-ToPia Grew From Passion to Platform
            </h2>
            <p className="text-[#C3C8D2] text-sm md:text-base mt-3">
              Key milestones on our quest to champion safe, mindful play for every child.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1B2338] rounded-3xl p-7 border border-[#2E3B5C] relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-[#FF7052] block mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#C3C8D2] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#2E3B5C] flex items-center gap-1.5 text-xs text-[#8A99AD]">
                  <Clock className="w-3.5 h-3.5 text-[#FF7052]" />
                  <span>Verified Milestone</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Advisory Team */}
      <section className="w-11/12 max-w-7xl mx-auto py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-[#FFF5F2] text-[#FF7052] text-xs font-bold uppercase tracking-wider">
            Our People
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#232D47] mt-3">
            The Educators, Engineers & Parents Behind Toy-ToPia
          </h2>
          <p className="tt-text-secondary text-sm md:text-base mt-3">
            A dedicated team passionate about childhood safety, ethical commerce, and early development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="tt-surface rounded-3xl p-6 border shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mb-5 ring-4 ring-[#FF7052]/20">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-bold text-[#232D47]">
                {member.name}
              </h4>
              <p className="text-xs font-semibold text-[#FF7052] mt-0.5 mb-3">
                {member.role}
              </p>
              <p className="text-xs tt-text-secondary leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer / Community Testimonial Highlight */}
      <section className="tt-surface-3 py-16 border-y tt-border-color">
        <div className="w-11/12 max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-[#FF7052] mx-auto mb-4 opacity-50" />
          <p className="text-xl md:text-2xl font-bold text-[#232D47] leading-relaxed italic">
            "As a Montessori educator and mother of two toddlers, finding toys that aren't saturated with plastic toxins or battery noise was nearly impossible until Toy-ToPia. The craftsmanship of their wooden building kits is exceptional, and knowing every product is ASTM-certified gives me total peace of mind."
          </p>
          <div className="mt-6">
            <h5 className="font-bold text-[#232D47]">Farzana Yasmin</h5>
            <p className="text-xs tt-text-muted">
              Preschool Director & Verified Mother of Two • Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Accordion */}
      <section className="w-11/12 max-w-4xl mx-auto py-20 md:py-28">
        <div className="text-center mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-[#FFF5F2] text-[#FF7052] text-xs font-bold uppercase tracking-wider">
            Clear Answers
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#232D47] mt-3">
            Frequently Asked Questions
          </h2>
          <p className="tt-text-secondary text-sm mt-2">
            Everything you need to know about our standards, artisans, and toys.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="tt-surface rounded-2xl border overflow-hidden shadow-xs transition"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-[#232D47] hover:text-[#FF7052] transition cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#FF7052]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm tt-text-secondary leading-relaxed border-t tt-border-color pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-[#232D47] text-white py-16 border-t border-[#2E3B5C]">
        <div className="w-11/12 max-w-5xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-black tracking-tight">
            Ready to Bring Natural, Screen-Free Joy Into Your Home?
          </h3>
          <p className="text-[#94A3B8] text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Discover our curated catalog of non-toxic, educator-approved toys, or dive into our parenting journal for free play ideas.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/alltoys"
              className="btn bg-[#FF7052] hover:bg-[#E65C3F] text-white border-none rounded-xl px-8 font-bold flex items-center gap-2 shadow-lg"
            >
              <Compass className="w-4 h-4" />
              <span>Browse All Toys</span>
            </Link>
            <Link
              to="/blog"
              className="btn bg-[#1B2338] hover:bg-[#2B3654] text-white border border-[#2E3B5C] rounded-xl px-8 font-bold"
            >
              <span>Explore Play Journal</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
