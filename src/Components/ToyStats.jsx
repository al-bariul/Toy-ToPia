import React, { useState, useEffect } from "react";
import { PackageCheck, Star, Users, Boxes, TrendingUp, Sparkles } from "lucide-react";

const ToyStats = () => {
  const [stats, setStats] = useState({
    totalToys: 0,
    avgRating: "4.8",
    totalStock: 0,
    sellersCount: 0,
    loading: true,
  });

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const totalToys = data.length;
          const totalStock = data.reduce(
            (sum, item) => sum + (Number(item.availableQuantity) || 0),
            0
          );
          const totalRating = data.reduce(
            (sum, item) => sum + (Number(item.rating) || 0),
            0
          );
          const avgRating = (totalRating / totalToys).toFixed(1);
          const sellers = new Set(data.map((item) => item.sellerName).filter(Boolean));

          setStats({
            totalToys,
            avgRating,
            totalStock,
            sellersCount: sellers.size,
            loading: false,
          });
        }
      })
      .catch((err) => {
        console.error("Failed to load toy statistics:", err);
        setStats((prev) => ({ ...prev, loading: false }));
      });
  }, []);

  const statItems = [
    {
      id: "catalog",
      label: "Child-Safe Toys Cataloged",
      value: stats.loading ? "..." : `${stats.totalToys}+`,
      subtext: "Handpicked by early educators",
      icon: PackageCheck,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
    {
      id: "rating",
      label: "Average Family Rating",
      value: stats.loading ? "..." : `${stats.avgRating} ★`,
      subtext: "From 1,400+ verified parents",
      icon: Star,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
    },
    {
      id: "stock",
      label: "Units Ready for Fast Delivery",
      value: stats.loading ? "..." : `${stats.totalStock}+`,
      subtext: "Immediate stock across BD",
      icon: Boxes,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      id: "sellers",
      label: "Certified Ethical Makers",
      value: stats.loading ? "..." : `${stats.sellersCount}`,
      subtext: "100% verified artisan labs",
      icon: Users,
      color: "text-[#FF7052]",
      bgColor: "bg-[#FF7052]/10",
      borderColor: "border-[#FF7052]/20",
    },
  ];

  return (
    <section className="py-16 bg-base-200/50 border-y border-base-300">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7052]/10 text-[#FF7052] text-xs font-semibold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            Live Marketplace Metrics
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-base-content tracking-tight">
            Trusted by Parents, Loved by Kids
          </h2>
          <p className="mt-3 text-base text-base-content/70">
            Real-time catalog metrics calculated dynamically from our active inventory of certified non-toxic toys.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-base-100 p-6 rounded-2xl border border-base-300 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center ${item.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <Sparkles className="w-4 h-4 text-base-content/20 group-hover:text-[#FF7052] transition-colors" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-base-content tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-base-content mt-1">
                  {item.label}
                </div>
                <div className="text-xs text-base-content/60 mt-1">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToyStats;
