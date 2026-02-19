import { Award, Users, Clock, CheckCircle2 } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Clock, text: '10+ Years Experience' },
    { icon: CheckCircle2, text: '150+ Projects Completed' },
    { icon: Award, text: 'Modern Architecture' },
    { icon: Users, text: 'On-Time Delivery' },
  ];

  return (
    <section id="about" className="py-20 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Construction"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-black p-8 rounded-xl shadow-xl">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm font-semibold">Years Experience</div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-[#D4AF37]">NP Design</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              We are a premium construction company specializing in residential and commercial
              projects. With over a decade of experience, we transform architectural visions into
              reality with precision, innovation, and uncompromising quality.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our team of expert engineers and designers work collaboratively to deliver projects
              that exceed expectations, on time and within budget.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="text-[#D4AF37]" size={24} />
                  <span className="text-white font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
