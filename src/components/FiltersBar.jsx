import { Search, Filter } from 'lucide-react';

export default function FiltersBar({ query, onQueryChange, categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-white/70">
          <Filter size={18} className="text-emerald-300" />
          <span className="text-sm">Filter by category or search</span>
        </div>
        <div className="relative w-full sm:w-80">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search blogs, topics, or tags..."
            className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-neutral-800/80 border border-neutral-700 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const active = cat === activeCategory;
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={
                'px-3 py-1.5 rounded-full text-sm border transition ' +
                (active
                  ? 'bg-emerald-500 text-emerald-950 border-emerald-400 shadow'
                  : 'bg-neutral-800/60 text-white/80 border-neutral-700 hover:border-neutral-600 hover:bg-neutral-800')
              }
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
