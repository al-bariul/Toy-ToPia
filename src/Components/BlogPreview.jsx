import React from "react";
import { Link } from "react-router";
import { BookOpen, Clock, ArrowRight, Sparkles } from "lucide-react";

const BlogPreview = () => {
  const articles = [
    {
      id: "open-ended-play",
      title: "The Science of Open-Ended Play: How Building Blocks Spark Spatial Intelligence",
      category: "STEM & Learning",
      readTime: "6 min read",
      date: "October 8, 2026",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format&fit=crop&q=80",
      summary:
        "Unlike battery toys with predetermined sounds, open-ended blocks empower children to master physics, balance, and geometry at their own pace.",
    },
    {
      id: "screen-free-evenings",
      title: "Screen-Free Evenings: 7 Calming Tactile Toys That Prepare Toddlers for Sleep",
      category: "Screen-Free Play",
      readTime: "5 min read",
      date: "October 3, 2026",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&auto=format&fit=crop&q=80",
      summary:
        "Replace evening tablet blue light with calming sensory plushies and wooden nesting rings that promote natural melatonin production.",
    },
    {
      id: "non-toxic-guide",
      title: "A Parent's Guide to Non-Toxic Materials: Wood, Water-Based Dyes & BPA Safety",
      category: "Safety & Materials",
      readTime: "7 min read",
      date: "September 27, 2026",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop&q=80",
      summary:
        "Learn how international standards like ASTM F963 and EN71 protect babies who explore their toys by mouthing and biting.",
    },
  ];

  return (
    <section className="py-24 w-11/12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7052]/10 text-[#FF7052] text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Play & Parenting Journal
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-base-content tracking-tight">
            Latest Insights for Mindful Parents
          </h2>
          <p className="mt-3 text-base md:text-lg text-base-content/70 max-w-2xl">
            Evidence-based guides on early cognitive development, screen-free playtime, and toy non-toxicity from pediatric specialists.
          </p>
        </div>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#FF7052] hover:text-[#E65C3F] transition-colors group shrink-0"
        >
          View All Parenting Articles
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((item) => (
          <article
            key={item.id}
            className="bg-base-100 rounded-2xl border border-base-300 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/90 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-full text-base-content shadow-sm">
                {item.category}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-base-content/60 mb-3">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {item.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-base-content leading-snug mb-3 group-hover:text-[#FF7052] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-base-content/70 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-base-200">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7052] group-hover:underline"
                >
                  Read Full Article
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;
