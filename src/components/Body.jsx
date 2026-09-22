import { useState } from 'react';

export default function Body() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <main className="flex-1 bg-slate-950 text-slate-100 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[200px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/50 text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-8 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Private Beta v1.0
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none mb-6">
            Autonomous Workflows Powered by{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Next-Gen Intelligence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
            NovaAI deploys self-healing AI agents that integrate with your codebase, database, and APIs to orchestrate context-aware background pipelines.
          </p>

          {/* Early Access Form */}
          <div id="waitlist" className="max-w-md mx-auto">
            {submitted ? (
              <div className="p-4 rounded-xl bg-indigo-950/60 border border-indigo-700/50 text-indigo-200 text-sm font-medium animate-fade-in">
                🎉 You're on the list! We'll reach out with your private invitation key soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
                >
                  Join Early Access
                </button>
              </form>
            )}
            <p className="text-xs text-slate-500 mt-3">
              Join 2,400+ developers on the waitlist. Instant sandbox access upon approval.
            </p>
          </div>
        </section>

        {/* Feature Grid Section */}
        <section id="features" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Architected for Speed & Reliability</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              Everything you need to ship AI capabilities directly into your production pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-900/40 text-indigo-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Autonomous Agents</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Deploy multi-agent networks capable of reasoning, calling tools, and resolving complex multi-step tasks dynamically.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-purple-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-900/40 text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Sub-10ms Latency</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Edge-cached vector memory ensures lightning-fast semantic retrieval and zero-delay prompt streaming.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-pink-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-pink-900/40 text-pink-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                SOC-2 compliant zero-retention architecture guaranteeing your proprietary data never leaks into training sets.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}