import React, { useState, useMemo, useEffect } from "react";
import { useLoaderData, useSearchParams, Link } from "react-router";
import ShowToys from "./ShowToys";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Table from "../UI/Table";
import {
  Search,
  Filter,
  ArrowUpDown,
  X,
  LayoutGrid,
  Table as TableIcon,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  RotateCcw,
  SlidersHorizontal,
  ExternalLink,
} from "lucide-react";

const Alltoys = () => {
  const initialData = useLoaderData() || [];
  const [searchParams, setSearchParams] = useSearchParams();

  // Read URL query parameters for backend-like URL state persistence
  const querySearch = searchParams.get("search") || "";
  const queryCategory = searchParams.get("category") || "all";
  const queryPrice = searchParams.get("price") || "all";
  const queryRating = searchParams.get("rating") || "all";
  const querySort = searchParams.get("sort") || "default";
  const queryPage = parseInt(searchParams.get("page") || "1", 10);
  const queryLimit = parseInt(searchParams.get("limit") || "6", 10);

  // Component state
  const [searchTerm, setSearchTerm] = useState(querySearch);
  const [selectedCategory, setSelectedCategory] = useState(queryCategory);
  const [priceRange, setPriceRange] = useState(queryPrice);
  const [minRating, setMinRating] = useState(queryRating);
  const [sortBy, setSortBy] = useState(querySort);
  const [currentPage, setCurrentPage] = useState(queryPage);
  const [itemsPerPage, setItemsPerPage] = useState(queryLimit);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'table'

  // Extract unique categories dynamically from dataset
  const categories = useMemo(() => {
    const set = new Set();
    initialData.forEach((item) => {
      if (item.subCategory) set.add(item.subCategory);
    });
    return Array.from(set);
  }, [initialData]);

  // Keep URL parameters synchronized with active filter states
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm.trim()) params.set("search", searchTerm.trim());
    if (selectedCategory !== "all") params.set("category", selectedCategory);
    if (priceRange !== "all") params.set("price", priceRange);
    if (minRating !== "all") params.set("rating", minRating);
    if (sortBy !== "default") params.set("sort", sortBy);
    if (currentPage > 1) params.set("page", currentPage.toString());
    if (itemsPerPage !== 6) params.set("limit", itemsPerPage.toString());

    setSearchParams(params, { replace: true });
  }, [
    searchTerm,
    selectedCategory,
    priceRange,
    minRating,
    sortBy,
    currentPage,
    itemsPerPage,
    setSearchParams,
  ]);

  // Backend-like Filtering & Sorting Pipeline
  const filteredAndSortedToys = useMemo(() => {
    let result = [...initialData];

    // 1. Text Search Filter (name, description, seller, category)
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(
        (toy) =>
          toy.toyName?.toLowerCase().includes(term) ||
          toy.subCategory?.toLowerCase().includes(term) ||
          toy.sellerName?.toLowerCase().includes(term) ||
          toy.description?.toLowerCase().includes(term)
      );
    }

    // 2. Category Filter
    if (selectedCategory !== "all") {
      result = result.filter((toy) => toy.subCategory === selectedCategory);
    }

    // 3. Price Range Filter
    if (priceRange !== "all") {
      if (priceRange === "under25") {
        result = result.filter((toy) => toy.price < 25);
      } else if (priceRange === "25to40") {
        result = result.filter((toy) => toy.price >= 25 && toy.price <= 40);
      } else if (priceRange === "40to55") {
        result = result.filter((toy) => toy.price > 40 && toy.price <= 55);
      } else if (priceRange === "over55") {
        result = result.filter((toy) => toy.price > 55);
      }
    }

    // 4. Rating Filter
    if (minRating !== "all") {
      const min = parseFloat(minRating);
      result = result.filter((toy) => (toy.rating || 0) >= min);
    }

    // 5. Sorting Options
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case "price-desc":
        result.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case "rating-desc":
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "name-asc":
        result.sort((a, b) => (a.toyName || "").localeCompare(b.toyName || ""));
        break;
      case "stock-desc":
        result.sort(
          (a, b) => (b.availableQuantity || 0) - (a.availableQuantity || 0)
        );
        break;
      default:
        // Featured / initial order
        break;
    }

    return result;
  }, [initialData, searchTerm, selectedCategory, priceRange, minRating, sortBy]);

  // Pagination calculation
  const totalItems = filteredAndSortedToys.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  // Ensure current page doesn't exceed total pages
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);

  const paginatedToys = useMemo(() => {
    const startIndex = (safePage - 1) * itemsPerPage;
    return filteredAndSortedToys.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedToys, safePage, itemsPerPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 320, behavior: "smooth" });
    }
  };

  const resetAllFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setPriceRange("all");
    setMinRating("all");
    setSortBy("default");
    setCurrentPage(1);
  };

  const hasActiveFilters =
    searchTerm.trim() !== "" ||
    selectedCategory !== "all" ||
    priceRange !== "all" ||
    minRating !== "all" ||
    sortBy !== "default";

  // Table columns definition for Table View
  const tableColumns = [
    {
      key: "pictureURL",
      label: "Toy",
      render: (v, row) => (
        <div className="flex items-center gap-3">
          <img
            src={v}
            alt={row.toyName}
            className="w-12 h-12 rounded-xl object-cover shrink-0 border border-base-300"
          />
          <div>
            <div className="font-bold text-sm text-base-content">{row.toyName}</div>
            <div className="text-xs text-base-content/60">{row.subCategory}</div>
          </div>
        </div>
      ),
    },
    {
      key: "price",
      label: "Price",
      align: "right",
      render: (v) => <span className="font-bold text-[#FF7052]">${v}</span>,
    },
    {
      key: "rating",
      label: "Rating",
      render: (v) => (
        <span className="badge badge-secondary whitespace-nowrap text-xs font-semibold">
          🏆 {v}
        </span>
      ),
    },
    {
      key: "availableQuantity",
      label: "Stock",
      align: "center",
      render: (v) => (
        <span className="badge badge-outline text-xs">
          {v ?? "Available"}
        </span>
      ),
    },
    {
      key: "sellerName",
      label: "Seller",
      render: (v, row) => (
        <div className="text-xs">
          <p className="font-semibold text-base-content">{v}</p>
          <p className="text-base-content/60">{row.sellerEmail}</p>
        </div>
      ),
    },
    {
      key: "toyId",
      label: "Action",
      align: "center",
      render: (v) => (
        <Link
          to={`/toy-details/${v}`}
          className="btn btn-xs bg-[#FF7052] hover:bg-[#E65C3F] text-white rounded-lg border-0 inline-flex items-center gap-1"
        >
          View
          <ExternalLink className="w-3 h-3" />
        </Link>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50">
        <Navbar></Navbar>
      </nav>

      {/* Page Header / Breadcrumbs */}
      <header className="bg-base-200/60 border-b border-base-300 py-10">
        <div className="w-11/12 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-base-content/60 mb-3">
            <Link to="/" className="hover:text-[#FF7052] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="font-semibold text-base-content">Explore All Toys</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7052]/10 text-[#FF7052] text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Curated Kids Marketplace
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-base-content tracking-tight">
                Explore All Toys
              </h1>
              <p className="mt-2 text-base text-base-content/70 max-w-2xl">
                Discover safe, ASTM & EN71-certified educational wonders, Montessori sets, and models from ethical Bangladeshi makers.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-base-content/70">
              <span className="badge badge-neutral px-3 py-2 text-xs font-bold rounded-xl">
                {totalItems} Available Toys
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Filter & Listing Content */}
      <main className="w-11/12 max-w-7xl mx-auto my-10 flex-grow">
        {/* Search & Filter Toolbar */}
        <section className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-sm mb-8 space-y-5">
          {/* Top Row: Search Bar & View Modes */}
          <div className="flex flex-col lg:flex-row items-center gap-4">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search toys by title, subcategory, seller, or keywords..."
                className="w-full pl-11 pr-10 py-3 rounded-xl bg-base-200/50 border border-base-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7052] focus:bg-base-100 transition-all text-base-content placeholder-base-content/50"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/50 hover:text-base-content p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* View Mode Switcher & Items Per Page */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
              {/* Items Per Page */}
              <div className="flex items-center gap-1.5 text-xs text-base-content/70">
                <span>Per Page:</span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="select select-bordered select-xs rounded-lg text-xs"
                >
                  <option value={6}>6</option>
                  <option value={9}>9</option>
                  <option value={12}>12</option>
                </select>
              </div>

              {/* View Switch */}
              <div className="join border border-base-300 rounded-xl overflow-hidden p-0.5 bg-base-200/50">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                  className={`btn btn-xs join-item border-0 ${
                    viewMode === "grid"
                      ? "bg-[#FF7052] text-white"
                      : "bg-transparent text-base-content hover:bg-base-200"
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Grid</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("table")}
                  aria-label="Table view"
                  className={`btn btn-xs join-item border-0 ${
                    viewMode === "table"
                      ? "bg-[#FF7052] text-white"
                      : "bg-transparent text-base-content hover:bg-base-200"
                  }`}
                >
                  <TableIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Table</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row: 4 Filter Fields + Sorting */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-base-200">
            {/* Filter 1: Category */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-base-content/70 mb-1.5 flex items-center gap-1">
                <Filter className="w-3 h-3 text-[#FF7052]" />
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="select select-bordered select-sm w-full rounded-xl text-sm"
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter 2: Price Range */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-base-content/70 mb-1.5 flex items-center gap-1">
                <SlidersHorizontal className="w-3 h-3 text-[#FF7052]" />
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => {
                  setPriceRange(e.target.value);
                  setCurrentPage(1);
                }}
                className="select select-bordered select-sm w-full rounded-xl text-sm"
              >
                <option value="all">All Prices</option>
                <option value="under25">Under $25</option>
                <option value="25to40">$25 - $40</option>
                <option value="40to55">$40 - $55</option>
                <option value="over55">Over $55</option>
              </select>
            </div>

            {/* Filter 3: Minimum Rating */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-base-content/70 mb-1.5 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#FF7052]" />
                Rating
              </label>
              <select
                value={minRating}
                onChange={(e) => {
                  setMinRating(e.target.value);
                  setCurrentPage(1);
                }}
                className="select select-bordered select-sm w-full rounded-xl text-sm"
              >
                <option value="all">All Ratings</option>
                <option value="4.5">⭐ 4.5 & Above</option>
                <option value="4.7">⭐ 4.7 & Above</option>
                <option value="4.8">⭐ 4.8 & Above</option>
              </select>
            </div>

            {/* Sorting Options */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-base-content/70 mb-1.5 flex items-center gap-1">
                <ArrowUpDown className="w-3 h-3 text-[#FF7052]" />
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="select select-bordered select-sm w-full rounded-xl text-sm"
              >
                <option value="default">Featured / Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Rating: Highest First</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="stock-desc">Stock: Highest First</option>
              </select>
            </div>
          </div>

          {/* Active Filter Chips & Clear Button */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-base-200">
              <span className="text-xs font-semibold text-base-content/60">
                Active Filters:
              </span>

              {searchTerm && (
                <span className="badge badge-sm gap-1 bg-[#FF7052]/10 text-[#FF7052] border-0 py-2.5 px-3 rounded-lg">
                  Search: "{searchTerm}"
                  <button onClick={() => setSearchTerm("")}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedCategory !== "all" && (
                <span className="badge badge-sm gap-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 border-0 py-2.5 px-3 rounded-lg">
                  Category: {selectedCategory}
                  <button onClick={() => setSelectedCategory("all")}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {priceRange !== "all" && (
                <span className="badge badge-sm gap-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-0 py-2.5 px-3 rounded-lg">
                  Price: {priceRange}
                  <button onClick={() => setPriceRange("all")}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {minRating !== "all" && (
                <span className="badge badge-sm gap-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 border-0 py-2.5 px-3 rounded-lg">
                  Rating: {minRating}+ ★
                  <button onClick={() => setMinRating("all")}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {sortBy !== "default" && (
                <span className="badge badge-sm gap-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 border-0 py-2.5 px-3 rounded-lg">
                  Sort: {sortBy}
                  <button onClick={() => setSortBy("default")}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              <button
                type="button"
                onClick={resetAllFilters}
                className="btn btn-ghost btn-xs text-xs text-rose-500 hover:bg-rose-500/10 rounded-lg flex items-center gap-1 ml-auto"
              >
                <RotateCcw className="w-3 h-3" />
                Clear All Filters
              </button>
            </div>
          )}
        </section>

        {/* Results Counter Summary */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-base-content/70 mb-6">
          <span>
            Showing{" "}
            <span className="font-bold text-base-content">
              {totalItems > 0 ? (safePage - 1) * itemsPerPage + 1 : 0}
            </span>
            –
            <span className="font-bold text-base-content">
              {Math.min(safePage * itemsPerPage, totalItems)}
            </span>{" "}
            of <span className="font-bold text-base-content">{totalItems}</span>{" "}
            toys
          </span>
          {totalPages > 1 && (
            <span>
              Page <span className="font-bold text-base-content">{safePage}</span>{" "}
              of <span className="font-bold text-base-content">{totalPages}</span>
            </span>
          )}
        </div>

        {/* Results Display */}
        {totalItems === 0 ? (
          <div className="bg-base-100 rounded-3xl border border-base-300 p-12 text-center max-w-lg mx-auto shadow-sm my-12">
            <div className="w-16 h-16 rounded-2xl bg-base-200 text-base-content/40 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-base-content mb-2">
              No matching toys found
            </h3>
            <p className="text-sm text-base-content/70 mb-6">
              We couldn't find any toys matching your current filter criteria.
              Try adjusting your search keywords, price range, or category.
            </p>
            <button
              type="button"
              onClick={resetAllFilters}
              className="btn bg-[#FF7052] hover:bg-[#E65C3F] text-white border-0 rounded-xl px-6 font-semibold shadow-md shadow-[#FF7052]/20"
            >
              Reset All Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {paginatedToys.map((toys) => (
              <ShowToys key={toys.toyId} toys={toys}></ShowToys>
            ))}
          </div>
        ) : (
          <div className="bg-base-100 rounded-2xl border border-base-300 overflow-hidden shadow-sm">
            <Table
              columns={tableColumns}
              data={paginatedToys}
              keyField="toyId"
              emptyText="No toys found"
            />
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="join border border-base-300 rounded-2xl p-1 bg-base-100 shadow-sm">
              <button
                type="button"
                onClick={() => handlePageChange(safePage - 1)}
                disabled={safePage === 1}
                aria-label="Previous page"
                className="btn btn-sm join-item bg-transparent border-0 text-base-content disabled:bg-transparent disabled:text-base-content/30"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => handlePageChange(page)}
                  className={`btn btn-sm join-item border-0 ${
                    safePage === page
                      ? "bg-[#FF7052] text-white font-bold"
                      : "bg-transparent text-base-content hover:bg-base-200"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() => handlePageChange(safePage + 1)}
                disabled={safePage === totalPages}
                aria-label="Next page"
                className="btn btn-sm join-item bg-transparent border-0 text-base-content disabled:bg-transparent disabled:text-base-content/30"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Alltoys;
