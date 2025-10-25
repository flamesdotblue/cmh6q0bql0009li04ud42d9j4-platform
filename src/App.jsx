import { useMemo, useState } from 'react';
import Hero from './components/Hero';
import FiltersBar from './components/FiltersBar';
import BlogGrid from './components/BlogGrid';
import Footer from './components/Footer';

const BLOGS = [
  {
    name: 'Smashing Magazine — Frontend & UX',
    url: 'https://www.smashingmagazine.com/',
    description: 'In-depth articles on frontend development, accessibility, and UX patterns.',
    categories: ['Frontend', 'UX', 'Accessibility'],
  },
  {
    name: 'Martin Fowler',
    url: 'https://martinfowler.com/',
    description: 'Thought leadership on software architecture, refactoring, and engineering culture.',
    categories: ['Architecture', 'Backend', 'Culture'],
  },
  {
    name: 'Cloudflare Blog',
    url: 'https://blog.cloudflare.com/',
    description: 'Deep dives into networking, performance, security, and edge computing.',
    categories: ['Security', 'Networking', 'Cloud'],
  },
  {
    name: 'Google Developers — Web Dev',
    url: 'https://web.dev/',
    description: 'Guides and tools for modern web performance, PWA, and best practices.',
    categories: ['Frontend', 'Performance', 'PWA'],
  },
  {
    name: 'AWS Architecture Blog',
    url: 'https://aws.amazon.com/blogs/architecture/',
    description: 'Reference architectures, patterns, and scaling practices on AWS.',
    categories: ['Cloud', 'Architecture', 'DevOps'],
  },
  {
    name: 'Krebs on Security',
    url: 'https://krebsonsecurity.com/',
    description: 'Independent investigative reporting on cybercrime and cybersecurity trends.',
    categories: ['Security'],
  },
  {
    name: 'The Pragmatic Engineer',
    url: 'https://blog.pragmaticengineer.com/',
    description: 'Real-world insights on engineering management, systems, and career growth.',
    categories: ['Engineering', 'Culture', 'Backend'],
  },
  {
    name: 'Red Hat Developer Blog',
    url: 'https://developers.redhat.com/blog',
    description: 'Open source, containers, Kubernetes, and enterprise-grade engineering.',
    categories: ['DevOps', 'Containers', 'Open Source'],
  },
  {
    name: 'OpenAI Research & Blog',
    url: 'https://openai.com/research',
    description: 'AI research, applied ML, and developer tooling for LLMs.',
    categories: ['AI/ML', 'Research'],
  },
  {
    name: 'Airbnb Engineering & Data Science',
    url: 'https://medium.com/airbnb-engineering',
    description: 'Case studies on experimentation platforms, data infrastructure, and product engineering.',
    categories: ['Data', 'Backend', 'Engineering'],
  },
  {
    name: 'Netflix Tech Blog',
    url: 'https://netflixtechblog.com/',
    description: 'Scalable systems, reliability, data platform, and culture of freedom & responsibility.',
    categories: ['Backend', 'SRE', 'Data'],
  },
  {
    name: 'SRE Weekly',
    url: 'https://sreweekly.com/',
    description: 'Curated updates, incidents, and practices for Site Reliability Engineering.',
    categories: ['SRE', 'DevOps'],
  },
  {
    name: 'Dan Luu',
    url: 'https://danluu.com/',
    description: 'Systems performance, networking, and thoughtful analyses of engineering tradeoffs.',
    categories: ['Systems', 'Performance', 'Networking'],
  },
  {
    name: 'NVIDIA Technical Blog',
    url: 'https://developer.nvidia.com/blog',
    description: 'GPU computing, AI frameworks, and high-performance development tutorials.',
    categories: ['AI/ML', 'Performance'],
  },
  {
    name: 'Mozilla Hacks',
    url: 'https://hacks.mozilla.org/',
    description: 'Firefox and web platform innovations, standards, and open web technologies.',
    categories: ['Frontend', 'Open Source', 'Standards'],
  },
];

export default function App() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const set = new Set();
    BLOGS.forEach((b) => b.categories.forEach((c) => set.add(c)));
    return ['All', ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BLOGS.filter((b) => {
      const matchesQuery =
        !q ||
        b.name.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q) ||
        b.categories.some((c) => c.toLowerCase().includes(q));
      const matchesCategory = activeCategory === 'All' || b.categories.includes(activeCategory);
      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Hero />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <section className="rounded-2xl bg-neutral-900/60 backdrop-blur border border-neutral-800 p-4 sm:p-6 shadow-xl">
          <FiltersBar
            query={query}
            onQueryChange={setQuery}
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <BlogGrid blogs={filtered} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
