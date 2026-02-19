import { Building, Users, Calendar, ThumbsUp } from 'lucide-react';

const WhyChooseUs = () => {
  const stats = [
    {
      icon: Building,
      number: '150+',
      label: 'Projects',
    },
    {
      icon: Users,
      number: '50+',
      label: 'Engineers',
    },
    {
      icon: Calendar,
      number: '10+',
      label: 'Years Experience',
    },
    {
      icon: ThumbsUp,
      number: '100%',
      label: 'Client Satisfaction',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-[#D4AF37]">Us</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-[#1a1a1a] rounded-xl border border-gray-800 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="text-[#D4AF37]" size={48} />
              </div>
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">{stat.number}</div>
              <div className="text-gray-400 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
