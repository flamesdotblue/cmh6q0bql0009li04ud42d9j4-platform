import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>
          Built for discovering high-quality IT blogs. Updated periodically.
        </p>
        <div className="flex items-center gap-4">
          <a
            className="inline-flex items-center gap-2 hover:text-white transition"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Github size={16} />
            GitHub
          </a>
          <a className="inline-flex items-center gap-2 hover:text-white transition" href="mailto:hello@example.com">
            <Mail size={16} />
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
