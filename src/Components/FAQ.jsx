import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { Link } from "react-router";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do you ensure all toys on Toy-ToPia are 100% child-safe and non-toxic?",
      answer:
        "Every single toy listed on Toy-ToPia must satisfy stringent safety standards (including ASTM F963 and EN71). We verify that wooden toys use certified solid beech or rubberwood finished with water-based organic dyes, and all plastic components are 100% BPA-free, lead-free, and phthalate-free.",
    },
    {
      question: "What are your delivery timelines across Dhaka and other districts in Bangladesh?",
      answer:
        "Inside Dhaka metropolitan area, orders are typically delivered within 24 to 36 hours. For all other 63 districts, tracked express courier delivery takes 48 to 72 hours. You receive SMS notifications and live tracking links from dispatch to doorstep.",
    },
    {
      question: "What is your replacement and return policy if a toy is damaged or unsuitable?",
      answer:
        "We offer an easy 7-Day Hassle-Free Parent Satisfaction Guarantee. If an item arrives damaged, has missing parts, or if your child already owns that specific toy, our care team will arrange a quick doorstep exchange or full refund.",
    },
    {
      question: "Do you provide complimentary gift wrapping and birthday greeting cards?",
      answer:
        "Yes! We love celebrations. During checkout, you can check the 'Complimentary Gift Box' option and write a personalized message. Our team carefully wraps the toy in eco-friendly paper with a handwritten greeting card at zero extra charge.",
    },
    {
      question: "How can local ethical toy makers and educators list their toys on Toy-ToPia?",
      answer:
        "Ethical artisans and STEM lab creators can apply via our Seller Onboarding portal. Our pediatric safety committee inspects sample materials and verifies certificates before approving any seller storefront on Toy-ToPia.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-base-200/40 border-y border-base-300">
      <div className="w-11/12 max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7052]/10 text-[#FF7052] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Got Questions? We Have Answers
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-base-content tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base md:text-lg text-base-content/70">
            Everything you need to know about safety certifications, shipping across Bangladesh, and our return policy.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-base-100 rounded-2xl border border-base-300 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base md:text-lg text-base-content hover:text-[#FF7052] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-base-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#FF7052] text-white" : "text-base-content"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm md:text-base text-base-content/75 leading-relaxed border-t border-base-200/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-sm text-base-content/70">
          Have a specific inquiry about a toy?{" "}
          <Link
            to="/about"
            className="font-bold text-[#FF7052] hover:underline"
          >
            Contact our pediatric support team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
