export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
      <div className="text-center mb-16">
        <p className="text-[#f0c030] text-sm tracking-widest uppercase mb-4">Catalogue</p>
        <h1 className="font-display text-5xl mb-6">Products</h1>
        <p className="text-[#a0b0cc] text-lg max-w-2xl mx-auto">Our product catalogue is being updated. Check back soon for the full range.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Hardware Solutions', 'Software Platforms', 'Sensors & Devices', 'Control Systems', 'Edge Computing', 'Connectivity Modules'].map((item) => (
          <div key={item} className="p-6 bg-[#0d1a3a] border border-[#1e2a4a] rounded-xl">
            <div className="w-2 h-2 rounded-full bg-[#f0c030] mb-4" />
            <h3 className="font-semibold text-white mb-2">{item}</h3>
            <p className="text-[#a0b0cc] text-sm">Details coming soon.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
