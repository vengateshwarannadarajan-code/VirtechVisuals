export default function CaseStudies() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
      <div className="text-center mb-16">
        <p className="text-[#f0c030] text-sm tracking-widest uppercase mb-4">Success Stories</p>
        <h1 className="font-display text-5xl mb-6">Case Studies</h1>
        <p className="text-[#a0b0cc] text-lg max-w-2xl mx-auto">Real-world results from our clients. Case studies coming soon.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {['Manufacturing Automation', 'Supply Chain Optimisation', 'Quality Control AI', 'Energy Management'].map((item) => (
          <div key={item} className="p-8 bg-[#0d1a3a] border border-[#1e2a4a] rounded-xl">
            <div className="w-2 h-2 rounded-full bg-[#f0c030] mb-4" />
            <h3 className="font-display text-xl text-white mb-3">{item}</h3>
            <p className="text-[#a0b0cc] text-sm">Full case study coming soon.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
