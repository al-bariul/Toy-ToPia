import React, { useState, useMemo } from "react";
import { Link } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  Search,
  Tag,
  ArrowRight,
  Heart,
  Share2,
  Sparkles,
  CheckCircle2,
  X,
  Compass,
  Lightbulb,
  ShieldCheck,
  Send,
  Baby,
  Smile,
} from "lucide-react";

const BLOG_ARTICLES = [
  {
    id: "open-ended-play",
    title: "The Science of Open-Ended Play: How Building Blocks Spark Spatial Intelligence",
    category: "STEM & Learning",
    featured: true,
    readTime: "6 min read",
    date: "October 8, 2026",
    author: {
      name: "Dr. Eleanor Vance",
      role: "Pediatric Developmental Specialist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    },
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&auto=format&fit=crop&q=80",
    summary:
      "Unlike battery-powered toys with predetermined sounds, open-ended blocks empower children to explore structural physics, balance, and spatial geometry at their own pace.",
    tags: ["Cognitive Growth", "STEM", "Motor Skills", "Problem Solving"],
    likes: 142,
    keyTakeaways: [
      "Open-ended toys prompt 3x more verbal problem-solving interactions during play than electronic automated toys.",
      "Toddlers who manipulate 3D shapes demonstrate superior spatial reasoning in early primary school testing.",
      "Trial-and-error block balancing builds emotional resilience when towers collapse and are rebuilt.",
    ],
    content: [
      "When a child picks up a simple wooden cube or magnetic prism, there are no scripted flashing lights dictating what happens next. The child becomes the architect, the engineer, and the storyteller. Neurodevelopmental research has consistently confirmed that open-ended materials activate both hemispheres of the developing brain.",
      "As toddlers experiment with stacking blocks, they naturally encounter foundational principles of physics: gravity, center of mass, friction, and counterbalancing. When a structure tilts and topples, the child does not perceive failure as a game-over screen; instead, they observe cause and effect firsthand.",
      "Furthermore, cooperative block play with siblings or peers fosters vital language development. Words like 'higher', 'sturdier', 'underneath', and 'symmetrical' transition from abstract vocabulary to concrete physical reality. Investing in quality, non-toxic wooden building sets provides years of open-ended utility that grows with your child.",
    ],
  },
  {
    id: "screen-free-evenings",
    title: "Screen-Free Evenings: 7 Calming Tactile Toys That Prepare Toddlers for Sleep",
    category: "Screen-Free Play",
    featured: false,
    readTime: "5 min read",
    date: "September 29, 2026",
    author: {
      name: "Marcus Aurelius Chowdhury",
      role: "Early Childhood Educator & Parent Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=900&auto=format&fit=crop&q=80",
    summary:
      "Blue light and high-stimulation animations can delay melatonin production in young children. Discover soothing sensory alternatives that make bedtime peaceful.",
    tags: ["Bedtime Routine", "Sensory Toys", "Wellness", "Toddlers"],
    likes: 98,
    keyTakeaways: [
      "Tactile, rhythmic play lowers cortisol levels by redirecting nervous bedtime energy.",
      "Weighted plush toys and textured story cubes create deep pressure touch that soothes sensory overstimulation.",
      "A 45-minute screen blackout before bed improves deep sleep duration by up to 28% in children ages 2 to 7.",
    ],
    content: [
      "Modern parents frequently report the dreaded 8:00 PM toddler zoomies: sudden bursts of hyperactive running right when pajamas should be going on. In over 70% of households, screen exposure within an hour of bedtime is the primary physiological culprit, artificially inhibiting natural melatonin release.",
      "Replacing tablets with low-stimulation tactile play items creates an organic winding-down bridge. Soft silicone pop beads, felt puzzle storyboards, wooden lacing cards, and gentle textured cuddle companions ground children through repetitive sensory touch.",
      "Engaging your little one with a quiet wooden stacking puzzle alongside dim warm nursery lighting signals the central nervous system that the busy day has concluded. Within one week of this transition, families experience shorter bedtime negotiations and deeper, uninterrupted rest.",
    ],
  },
  {
    id: "heirloom-wooden-toys",
    title: "The Heirloom Revival: Why Natural Wooden Toys Are Healthier for Kids & the Planet",
    category: "Eco & Wooden Toys",
    featured: false,
    readTime: "7 min read",
    date: "September 18, 2026",
    author: {
      name: "Nusrat Jahan",
      role: "Sustainable Design Lead & Artisan Curator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=900&auto=format&fit=crop&q=80",
    summary:
      "Explore why modern families are leaving cheap disposable plastics behind in favor of responsibly harvested beechwood, beeswax finishes, and generational durability.",
    tags: ["Eco Friendly", "Wooden Toys", "Sustainability", "Zero Waste"],
    likes: 187,
    keyTakeaways: [
      "Natural untreated and beeswax-finished woods possess innate antimicrobial qualities compared to hollow plastic.",
      "Solid wooden toys withstand drop tests spanning decades, eliminating the single-use plastic toy landfill cycle.",
      "Tactile wood grain provides subtle sensory feedback in weight, texture, and organic warmth that synthetic materials cannot mimic.",
    ],
    content: [
      "Over 80% of all mass-produced plastic toys inevitably end up in landfills or ocean waste within six months of purchase. In response to this throwaway culture, a global parent-led movement is rediscovering the warmth, durability, and quiet elegance of solid wooden playthings.",
      "At Toy-ToPia, our wooden toys are crafted from FSC-certified sustainably harvested timbers including beech, pine, and rubberwood. They are polished by hand and treated with food-grade plant oils or natural beeswax, ensuring that babies who explore toys orally are completely safe from phthalates, PVC, and lead.",
      "Beyond ecological responsibility, wooden toys carry a quiet emotional resonance. A hand-carved rocking horse or geometric sorter can be cherished by three generations of siblings and passed forward as a beloved family heirloom.",
    ],
  },
  {
    id: "toy-safety-standards",
    title: "Navigating Toy Safety Standards: A Parent's Breakdown of ASTM F963 and Non-Toxic Certifications",
    category: "Toy Safety & Care",
    featured: false,
    readTime: "8 min read",
    date: "August 24, 2026",
    author: {
      name: "Kazi Farhan Ahmed",
      role: "Toy Safety Compliance Engineer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    },
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=900&auto=format&fit=crop&q=80",
    summary:
      "Learn what toy safety labels really mean, how mechanical drop-and-torque tests protect young explorers, and what toxic chemicals to avoid when shopping.",
    tags: ["Safety Standards", "Child Health", "Certifications", "Parenting Guide"],
    likes: 115,
    keyTakeaways: [
      "ASTM F963 and EN71 are the global gold standards for mechanical resilience and heavy-metal testing.",
      "Choking hazard tests require all parts intended for children under 3 years old to exceed 1.25 inches in diameter.",
      "Look for BPA-free, Phthalate-free, and Formaldehyde-free stamps on all packaging.",
    ],
    content: [
      "A parent's highest priority is knowing that the toy clutched in their toddler's hands is fundamentally safe. But retail packaging is filled with cryptic acronyms and regulatory jargon. Understanding these standards is your strongest consumer defense.",
      "The ASTM F963 protocol covers physical and mechanical hazards, flammability, and toxicity. In certified laboratories, toys are dropped from heights onto solid steel plates, pulled with calibrated mechanical tension (torque and pull testing), and measured inside a cylindrical choke tube.",
      "Chemical screening is equally critical. Premium toys must undergo X-ray fluorescence analysis to confirm zero presence of lead, cadmium, arsenic, or hormone-disrupting plasticizers. At Toy-ToPia, every seller must provide accredited third-party lab verification before a product is approved for listing.",
    ],
  },
  {
    id: "fine-motor-milestones",
    title: "Fine Motor Milestones (Ages 0 to 6): Choosing the Right Developmental Playthings",
    category: "Child Development",
    featured: false,
    readTime: "6 min read",
    date: "August 12, 2026",
    author: {
      name: "Sabrina Rahman, OTR/L",
      role: "Pediatric Occupational Therapist",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    },
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=900&auto=format&fit=crop&q=80",
    summary:
      "From the palmar grasp to the pincer grip and bilateral coordination, matching toy ergonomics to neuromuscular milestones empowers your child's confidence.",
    tags: ["Fine Motor", "Occupational Therapy", "Milestones", "Ages 0-6"],
    likes: 164,
    keyTakeaways: [
      "0–12 Months: High contrast grasping rings and textured teether balls develop finger strength and eye tracking.",
      "1–3 Years: Peg boards, nesting cups, and chunky wooden shape sorters refine wrist rotation and the pincer grasp.",
      "3–6 Years: Lacing beads, safety scissors, and modular screw construction kits prepare hand musculature for handwriting.",
    ],
    content: [
      "Fine motor control does not magically appear when a child holds their first kindergarten pencil. It is the result of thousands of micro-movements practiced during joyous, self-directed play across infancy and toddlerhood.",
      "During the first year, an infant transitions from an involuntary reflex to the voluntary palmar grasp. Lightweight wooden rattles with thin spindles allow weak fingers to clamp securely. By 18 months, children begin refining the index-thumb pincer grasp, making peg boards and bead mazes endlessly fascinating.",
      "As preschoolers approach age four, bilateral integration—using both hands simultaneously for complementary tasks like holding a wooden screw while turning a wrench—takes center stage. Providing toys that challenge these physical competencies builds neural pathways and prevents future handwriting fatigue.",
    ],
  },
  {
    id: "cleaning-and-storing-toys",
    title: "How to Clean, Sanitize, and Store Kids' Toys Without Damaging Natural Finishes",
    category: "Toy Safety & Care",
    featured: false,
    readTime: "5 min read",
    date: "July 30, 2026",
    author: {
      name: "Marcus Aurelius Chowdhury",
      role: "Early Childhood Educator & Parent Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=900&auto=format&fit=crop&q=80",
    summary:
      "Bleach and harsh disinfectants can degrade wooden toys and leach into porous surfaces. Here is our certified guide to non-toxic sanitizing and mindful toy rotation.",
    tags: ["Toy Hygiene", "Home Organization", "Non Toxic Cleaning", "Parenting Hacks"],
    likes: 89,
    keyTakeaways: [
      "Never submerge wooden toys in standing water, as natural fibers absorb moisture and swell or crack.",
      "A 1:1 solution of white distilled vinegar and warm water naturally destroys bacteria while leaving zero toxic residue.",
      "Toy rotation (keeping only 8-10 toys accessible at once) boosts focus span by 40% and reduces playroom clutter.",
    ],
    content: [
      "Playrooms are joyful hubs of imagination, but between drool, sticky snack fingers, and outdoor dirt, toys accumulate bacteria quickly. However, soaking playthings in aggressive chemical bleaches poses serious inhalation and ingestion risks for curious toddlers.",
      "For wooden toys, simply dampen a microfiber cloth with a diluted mixture of warm water and mild Castile soap or apple cider vinegar. Wipe the exterior gently, buff away grime, and let the toy air-dry in a warm, ventilated room. An occasional thin dab of food-grade mineral oil or beeswax paste keeps natural timber supple.",
      "For fabric plush toys, inspect care labels for cold delicate machine washes inside a pillowcase with fragrance-free detergent. Pair this hygiene routine with a weekly toy rotation system: by swapping out half the toys into storage bins every Sunday, old toys feel brand-new and children engage with deeper focus.",
    ],
  },
  {
    id: "outdoor-nature-play",
    title: "Cultivating Outdoor Wonder: Why Nature Play and Sand Building Strengthen Early Sensory Integration",
    category: "Screen-Free Play",
    featured: false,
    readTime: "6 min read",
    date: "July 14, 2026",
    author: {
      name: "Nusrat Jahan",
      role: "Sustainable Design Lead & Artisan Curator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=900&auto=format&fit=crop&q=80",
    summary:
      "Tactile sensory immersion with sand, mud, and water strengthens vestibular systems, emotional regulation, and deep connection with the biological world.",
    tags: ["Outdoor Toys", "Nature Play", "Sensory Integration", "Creativity"],
    likes: 122,
    keyTakeaways: [
      "Digging and sculpting sand develops shoulder stability and proprioceptive joint awareness.",
      "Outdoor play in natural sunlight promotes healthy ocular growth and reduces early childhood myopia risk.",
      "Unstructured nature exploration encourages peer negotiation, risk evaluation, and imaginative play.",
    ],
    content: [
      "Children are natural-born geologists, botanists, and hydrologists. Hand a four-year-old a bucket and spade, and they will instinctively channel running water, excavate trenches, and examine the texture of dry versus damp soil.",
      "This messy tactile immersion is crucial for sensory integration. The proprioceptive system—which tells the brain where the body is in space—receives rich feedback as heavy buckets are lifted and wet sand is packed into crenellated fortress walls.",
      "Encouraging outdoor exploration with durable sand kits, nature magnifying glasses, and water wheels bridges the gap between physical health and boundless wonder. In an era dominated by smooth glass screens, rough earth is the ultimate playground.",
    ],
  },
  {
    id: "screenless-coding-robotics",
    title: "Demystifying Screenless Coding: Introducing Computational Thinking to Young Children",
    category: "STEM & Learning",
    featured: false,
    readTime: "7 min read",
    date: "June 28, 2026",
    author: {
      name: "Dr. Eleanor Vance",
      role: "Pediatric Developmental Specialist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    },
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&auto=format&fit=crop&q=80",
    summary:
      "Coding for four-year-olds doesn't mean glowing monitors. Learn how tactile sequencing blocks, directional maze mats, and wooden logic puzzles teach algorithmic thought.",
    tags: ["Robotics", "Coding for Kids", "Computational Logic", "Early Math"],
    likes: 173,
    keyTakeaways: [
      "Early coding is about sequential logic: ordering steps chronologically to achieve a concrete outcome.",
      "Physical tactile programming tiles allow children to touch algorithms with their fingers before translating to concepts.",
      "Debugging teaches emotional regulation by reframing mistakes as logical clues rather than personal failures.",
    ],
    content: [
      "Many parents are surprised when we recommend coding games for children who haven't yet learned to read. But at its core, computational thinking is not about syntax or Python scripts—it is about sequence, conditions, and decomposition.",
      "With screenless robotics toys, a child places physical directional tiles (Forward, Turn Right, Loop, If Obstacle) in a row. A small wooden or wheeled robot reads these physical tokens and navigates a map. If the robot hits a wall, the child does not panic; they trace the sequence backwards to 'debug' the step that went astray.",
      "This physical hands-on problem solving develops resilience, spatial mapping, and deductive reasoning long before children ever encounter an actual computer monitor. It transforms passive technology consumers into curious, confident inventors.",
    ],
  },
];

const CATEGORIES = [
  "All Articles",
  "STEM & Learning",
  "Screen-Free Play",
  "Eco & Wooden Toys",
  "Toy Safety & Care",
  "Child Development",
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState(null);
  const [likedArticles, setLikedArticles] = useState({});
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState(null);

  // Filter articles based on Category and Search Query
  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === "All Articles" ||
        article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleLike = (e, articleId) => {
    e.stopPropagation();
    setLikedArticles((prev) => ({
      ...prev,
      [articleId]: !prev[articleId],
    }));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!subscribedEmail || !subscribedEmail.includes("@")) {
      setSubscribeStatus("error");
      return;
    }
    setSubscribeStatus("success");
    setSubscribedEmail("");
    setTimeout(() => {
      setSubscribeStatus(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] flex flex-col font-sans">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-[#232D47]">
        <Navbar />
      </nav>

      {/* Hero Header Section */}
      <header className="relative bg-[#232D47] text-white py-16 md:py-24 border-b border-[#2E3B5C] overflow-hidden">
        {/* Subtle decorative background circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#FF7052]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="w-11/12 max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2B3654] border border-[#2E3B5C] text-[#FF7052] text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Toy-ToPia Play & Parenting Journal</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Inspiring Curious Minds & Healthy Childhood Play
            </h1>
            <p className="mt-5 text-lg md:text-xl text-[#C3C8D2] leading-relaxed">
              Expert articles, developmental research, safety guides, and practical
              play ideas to help parents and educators nurture creativity without screens.
            </p>
          </div>

          {/* Search Bar & Quick Stats */}
          <div className="mt-10 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles by topic, age, STEM, wood safety..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#1B2338] text-white placeholder-[#8A99AD] border border-[#2E3B5C] focus:outline-none focus:border-[#FF7052] shadow-xl text-base transition"
              />
              <Search className="w-5 h-5 text-[#8A99AD] absolute left-4 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#8A99AD] hover:text-white px-2 py-1 rounded bg-[#2B3654]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-11/12 max-w-7xl mx-auto py-12 md:py-16">
        {/* Category Pills Bar */}
        <section className="mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-thin">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              const count =
                cat === "All Articles"
                  ? BLOG_ARTICLES.length
                  : BLOG_ARTICLES.filter((a) => a.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-[#FF7052] text-white shadow-md shadow-[#FF7052]/20"
                      : "bg-white text-[#475569] border border-slate-200 hover:border-[#FF7052] hover:text-[#232D47]"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Highlight Featured Article (Shown when no specific filter query or All Articles) */}
        {selectedCategory === "All Articles" && !searchQuery && (
          <section className="mb-16">
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:shadow-2xl transition-all duration-300">
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden group">
                <img
                  src={BLOG_ARTICLES[0].image}
                  alt={BLOG_ARTICLES[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[#FF7052] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                  ★ Featured Story
                </span>
              </div>
              <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-medium">
                    <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-bold">
                      {BLOG_ARTICLES[0].category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {BLOG_ARTICLES[0].readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {BLOG_ARTICLES[0].date}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#232D47] leading-snug hover:text-[#FF7052] transition-colors cursor-pointer"
                    onClick={() => setActiveArticle(BLOG_ARTICLES[0])}
                  >
                    {BLOG_ARTICLES[0].title}
                  </h2>

                  <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
                    {BLOG_ARTICLES[0].summary}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-5 space-y-2">
                    {BLOG_ARTICLES[0].keyTakeaways.slice(0, 2).map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={BLOG_ARTICLES[0].author.avatar}
                      alt={BLOG_ARTICLES[0].author.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-[#FF7052]/30"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#232D47]">
                        {BLOG_ARTICLES[0].author.name}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {BLOG_ARTICLES[0].author.role}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveArticle(BLOG_ARTICLES[0])}
                    className="btn btn-sm bg-[#FF7052] hover:bg-[#E65C3F] text-white border-none rounded-xl font-bold flex items-center gap-1.5 shadow-md shadow-[#FF7052]/20"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section Heading & Result Counter */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#232D47]">
              {selectedCategory === "All Articles"
                ? "Latest Articles & Play Guides"
                : `${selectedCategory} Articles`}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Showing {filteredArticles.length} published {filteredArticles.length === 1 ? "article" : "articles"}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-[#232D47]">No articles found</h4>
            <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
              We couldn't find any articles matching your search query. Try another keyword or reset the category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Articles");
              }}
              className="mt-5 btn btn-sm bg-[#232D47] text-white rounded-xl hover:bg-[#1B2338]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => {
              const isLiked = likedArticles[article.id];
              const likeCount = article.likes + (isLiked ? 1 : 0);

              return (
                <article
                  key={article.id}
                  onClick={() => setActiveArticle(article)}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer"
                >
                  {/* Article Thumbnail */}
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#232D47]/90 text-white backdrop-blur-xs">
                        {article.category}
                      </span>
                    </div>
                    <button
                      onClick={(e) => handleLike(e, article.id)}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition ${
                        isLiked
                          ? "bg-red-500 text-white"
                          : "bg-white/80 text-slate-600 hover:text-red-500 hover:bg-white"
                      }`}
                      aria-label="Like article"
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? "fill-white" : ""}`} />
                    </button>
                  </div>

                  {/* Article Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta stats */}
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-[#232D47] group-hover:text-[#FF7052] transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </h4>

                      {/* Excerpt */}
                      <p className="mt-3 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {article.summary}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {article.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Author & Read Link */}
                    <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={article.author.avatar}
                          alt={article.author.name}
                          className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200"
                        />
                        <div className="truncate max-w-[130px]">
                          <p className="text-xs font-bold text-[#232D47] truncate">
                            {article.author.name}
                          </p>
                          <p className="text-[10px] text-slate-400 truncate">
                            {article.author.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-bold text-[#FF7052] group-hover:translate-x-1 transition-transform">
                        <span>Read</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Free Newsletter / Play Guide Subscription Banner */}
        <section className="mt-20 bg-gradient-to-br from-[#232D47] to-[#1B2338] text-white rounded-3xl p-8 md:p-12 border border-[#2E3B5C] relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 bg-[#FF7052]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <span className="px-3 py-1 rounded-full bg-[#2B3654] text-[#FF7052] text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4 border border-[#2E3B5C]">
              <Sparkles className="w-3.5 h-3.5" />
              Weekly Play Journal Newsletter
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Get Screen-Free Play Guides Delivered Every Sunday
            </h3>
            <p className="mt-3 text-sm md:text-base text-[#C3C8D2] leading-relaxed">
              Join over 15,000 thoughtful parents and preschool teachers. Receive our vetted developmental toy recommendations, printable activity cards, and safety advisories—no spam, ever.
            </p>

            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your family email address..."
                value={subscribedEmail}
                onChange={(e) => setSubscribedEmail(e.target.value)}
                className="flex-1 px-4 py-3.5 rounded-xl bg-[#2B3654] text-white placeholder-[#8A99AD] border border-[#2E3B5C] focus:outline-none focus:border-[#FF7052] text-sm"
              />
              <button
                type="submit"
                className="btn bg-[#FF7052] hover:bg-[#E65C3F] text-white border-none px-6 rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Subscribe Free</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

            {subscribeStatus === "success" && (
              <div className="mt-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! You have been successfully subscribed to Toy-ToPia Weekly.</span>
              </div>
            )}
            {subscribeStatus === "error" && (
              <p className="mt-3 text-xs text-rose-400 font-semibold">
                Please enter a valid email address before submitting.
              </p>
            )}

            <div className="mt-6 flex items-center gap-6 text-xs text-[#8A99AD]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Privacy Protected
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                Unsubscribe in One Click
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header Bar with Close Button */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-[#232D47]">
                {activeArticle.category}
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#232D47] leading-tight">
                {activeArticle.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <img
                    src={activeArticle.author.avatar}
                    alt={activeArticle.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <span className="font-bold text-[#232D47]">
                      {activeArticle.author.name}
                    </span>
                    <span className="block text-[10px] text-slate-400">
                      {activeArticle.author.role}
                    </span>
                  </div>
                </div>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {activeArticle.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activeArticle.readTime}
                </span>
              </div>

              {/* Cover Image in modal */}
              <div className="my-6 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full max-h-80 object-cover"
                />
              </div>

              {/* Key takeaways callout box */}
              <div className="p-5 rounded-2xl bg-[#FFF5F2] border border-[#FF7052]/30 mb-8">
                <h4 className="text-sm font-bold text-[#232D47] flex items-center gap-2 mb-3">
                  <Lightbulb className="w-4 h-4 text-[#FF7052]" />
                  Key Takeaways for Parents & Educators:
                </h4>
                <ul className="space-y-2">
                  {activeArticle.keyTakeaways.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-slate-700 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF7052] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* In-depth Article Paragraphs */}
              <div className="prose prose-slate max-w-none space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
                {activeArticle.content.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Tags in modal */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                {activeArticle.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-lg font-medium"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Modal footer with action buttons */}
              <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="text-sm font-bold text-[#232D47]">
                    Ready to put this play philosophy into action?
                  </h5>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Explore our pediatrician-vetted, non-toxic toy marketplace.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    to="/alltoys"
                    onClick={() => setActiveArticle(null)}
                    className="btn btn-sm bg-[#FF7052] hover:bg-[#E65C3F] text-white border-none rounded-xl font-bold flex items-center gap-1.5"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Browse Toys</span>
                  </Link>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="btn btn-sm btn-ghost rounded-xl text-slate-600 hover:text-slate-900"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
