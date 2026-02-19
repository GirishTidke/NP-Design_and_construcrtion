import { Home, Building2, Palette, Wrench, Ruler, ClipboardList } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes built with precision and attention to detail, tailored to your lifestyle.',
    },
    {
      icon: Building2,
      title: 'Commercial Projects',
      description: 'Large-scale commercial developments with innovative design and functionality.',
    },
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Transform your spaces with elegant and functional interior design solutions.',
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Breathe new life into existing structures with expert renovation services.',
    },
    {
      icon: Ruler,
      title: '3D Planning',
      description: 'Advanced 3D modeling and visualization for accurate project planning.',
    },
    {
      icon: ClipboardList,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely delivery and quality control.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#0F0F0F] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#D4AF37]">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <div className="bg-[#D4AF37] bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all">
                <service.icon className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
