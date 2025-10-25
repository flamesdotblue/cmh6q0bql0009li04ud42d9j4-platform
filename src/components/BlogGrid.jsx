import { motion } from 'framer-motion';
import { ExternalLink, Tag } from 'lucide-react';

export default function BlogGrid({ blogs }) {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {blogs.map((blog, idx) => (
        <motion.a
          key={blog.url}
          href={blog.url}
          target="_blank"
          rel="noreferrer noopener"
          className="group rounded-xl border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-900 transition shadow hover:shadow-emerald-500/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: idx * 0.03 }}
        >
          <div className="p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold leading-snug">
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  {blog.name}
                </span>
              </h3>
              <ExternalLink size={18} className="text-white/40 group-hover:text-emerald-300 transition shrink-0" />
            </div>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              {blog.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {blog.categories.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1 rounded-full bg-neutral-800/70 border border-neutral-700 px-2 py-1 text-xs text-white/70"
                >
                  <Tag size={12} className="text-emerald-300" /> {c}
                </span>
              ))}
            </div>
          </div>
        </motion.a>
      ))}

      {blogs.length === 0 && (
        <div className="col-span-full text-center py-16 text-white/60">
          No results. Try a different query or category.
        </div>
      )}
    </div>
  );
}
