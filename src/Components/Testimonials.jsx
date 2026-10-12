import React from "react";
import { Star, CheckCircle2, Quote } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Dr. Farhana Yasmin",
      role: "Pediatrician & Mother of Two",
      location: "Gulshan, Dhaka",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
      toy: "STEM Discovery Microscope",
      rating: 5,
      content:
        "As a pediatrician, finding genuine non-toxic, screen-free educational toys in Bangladesh was always a challenge. The STEM microscope kit from Toy-ToPia kept my 7-year-old engaged for hours studying leaves and salt crystals. Incredible build quality!",
    },
    {
      id: 2,
      name: "Tanvir Ahmed",
      role: "Software Architect & Dad",
      location: "Agrabad, Chittagong",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      toy: "Remote Control Adventure Jeep",
      rating: 5,
      content:
        "The RC Adventure Jeep arrived in 24 hours with lovely gift wrap for my son's 5th birthday. The rubber tires and suspension handle real backyard grass without snapping like cheap market plastic. Highly recommend Speedy Wheels seller!",
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      role: "Montessori Early Educator",
      location: "Uttara, Dhaka",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
      toy: "Classic Wooden Building Blocks",
      rating: 5,
      content:
        "The natural beechwood blocks have silky smooth sanded edges with zero chemical smell or chipping paint. We use them daily in our sensory learning sessions. Toy-ToPia is our academy's go-to trusted source.",
    },
  ];

  return (
    <section className="py-24 bg-base-200/40 border-y border-base-300">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Real Family Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-base-content tracking-tight">
            Loved by 1,400+ Families
          </h2>
          <p className="mt-4 text-base md:text-lg text-base-content/70">
            Read authentic feedback from parents, pediatricians, and early educators who trust Toy-ToPia for safe playtime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-base-100 p-8 rounded-2xl border border-base-300 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-base-content/15 group-hover:text-[#FF7052]/40 transition-colors" />
                </div>

                <p className="text-base-content/80 text-sm md:text-base leading-relaxed mb-6 italic">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-5 border-t border-base-200">
                <div className="inline-block px-2.5 py-1 rounded-md bg-base-200 text-xs font-medium text-base-content/70 mb-3">
                  Purchased: <span className="font-bold text-base-content">{item.toy}</span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#FF7052]"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-sm text-base-content">
                        {item.name}
                      </h4>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    </div>
                    <p className="text-xs text-base-content/60">
                      {item.role} • {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
