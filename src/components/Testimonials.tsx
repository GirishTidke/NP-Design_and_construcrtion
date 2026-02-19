import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      text: 'NP Design delivered our dream home beyond expectations. Their attention to detail and professionalism is unmatched. Every corner reflects quality craftsmanship.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      text: 'Outstanding service from start to finish. They completed our commercial project on time and within budget. The team was responsive and professional throughout.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      text: 'The renovation of our office space was seamless. NP Design transformed our vision into reality with innovative solutions and exceptional execution.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="text-[#D4AF37]">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg">
            What our satisfied clients say about us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-[#D4AF37] fill-[#D4AF37]" size={20} />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-800 pt-4">
                <h4 className="text-white font-bold">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
