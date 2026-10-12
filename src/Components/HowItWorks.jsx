import React from "react";
import { Search, ShieldCheck, Gift, Truck, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Discover by Child's Age",
      description:
        "Filter through age-appropriate developmental toys, Montessori sensory tools, and STEM building kits verified by educators.",
      icon: Search,
      badge: "Smart Browsing",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      step: "02",
      title: "100% Safety Verified",
      description:
        "Every single toy undergoes non-toxic paint testing, anti-choking inspection, and compliance with ASTM & EN71 standards.",
      icon: ShieldCheck,
      badge: "Zero Compromise",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      step: "03",
      title: "Complimentary Gift Boxing",
      description:
        "Sending a present? Select free eco-friendly gift wrap and include a handwritten heartfelt greeting card for the celebration.",
      icon: Gift,
      badge: "Ready to Surprise",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
    {
      step: "04",
      title: "Express 24-48h Delivery",
      description:
        "Receive tracked doorstep dispatch across all 64 districts in Bangladesh with 7-day hassle-free parent satisfaction exchanges.",
      icon: Truck,
      badge: "Fast & Protected",
      color: "text-[#FF7052]",
      bg: "bg-[#FF7052]/10",
      border: "border-[#FF7052]/20",
    },
  ];

  return (
    <section className="py-24 w-11/12 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7052]/10 text-[#FF7052] text-xs font-semibold uppercase tracking-wider mb-3">
          Seamless Parenting Experience
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-base-content tracking-tight">
          How Toy-ToPia Works
        </h2>
        <p className="mt-4 text-base md:text-lg text-base-content/70">
          From screen-free selection to excited doorstep unboxing, we make gifting safe and effortless for parents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="bg-base-100 p-7 rounded-2xl border border-base-300 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-2xl font-black text-base-content/20 tracking-tighter">
                    {item.step}
                  </span>
                </div>
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-lg ${item.bg} ${item.color} mb-3`}>
                  {item.badge}
                </span>
                <h3 className="text-xl font-bold text-base-content mb-2.5 group-hover:text-[#FF7052] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-base-200 flex items-center text-xs font-semibold text-base-content/60 group-hover:text-[#FF7052] transition-colors">
                <span>Step {index + 1} of 4</span>
                <ArrowRight className="w-3.5 h-3.5 ml-auto group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/alltoys"
          className="inline-flex items-center gap-2 btn bg-[#FF7052] hover:bg-[#E65C3F] text-white rounded-xl px-8 font-semibold shadow-lg shadow-[#FF7052]/25"
        >
          Start Exploring Safe Toys
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
