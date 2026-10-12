import React, { useState } from "react";
import { Mail, Gift, Check, Sparkles, Copy, ArrowRight } from "lucide-react";

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard?.writeText("TOYTOPIA25");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-20 w-11/12 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1B2338] via-[#232D47] to-[#161D2E] p-8 sm:p-12 lg:p-16 text-white border border-[#2E3B5C] shadow-2xl">
        {/* Decorative background glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF7052]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7052]/20 text-[#FF7052] border border-[#FF7052]/30 text-xs sm:text-sm font-semibold mb-6">
            <Gift className="w-4 h-4" />
            Exclusive Parent Club Welcome Gift
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
            Unlock 25% Off Your Next Toy & Screen-Free Play Tips
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Subscribe to our weekly play journal for early access to limited Montessori drops, age-based gift guides, and child development advice from pediatric specialists.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7052] backdrop-blur-md"
                  />
                </div>
                <button
                  type="submit"
                  className="btn bg-[#FF7052] hover:bg-[#E65C3F] text-white border-0 rounded-xl px-7 font-bold shadow-lg shadow-[#FF7052]/30 transition-transform active:scale-95 flex items-center justify-center gap-2"
                >
                  Join Club
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {error && (
                <p className="mt-2 text-xs text-rose-400 text-left pl-2">
                  {error}
                </p>
              )}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> No spam ever
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> Unsubscribe anytime
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> 12,000+ active families
                </span>
              </div>
            </form>
          ) : (
            <div className="mt-8 p-6 rounded-2xl bg-white/10 border border-emerald-400/40 backdrop-blur-md max-w-md mx-auto animate-fadeIn">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Welcome to the Family Club!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-4">
                Here is your exclusive 25% discount promo code:
              </p>
              <div className="flex items-center justify-center gap-2 bg-black/40 border border-white/20 rounded-xl p-2.5">
                <code className="text-lg font-mono font-bold text-[#FF7052] tracking-wider">
                  TOYTOPIA25
                </code>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="btn btn-xs bg-[#FF7052] text-white border-0 rounded-lg hover:bg-[#E65C3F]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 mr-1" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 mr-1" /> Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
