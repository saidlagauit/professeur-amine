import { Clock, MessageCircle, Video, Award } from "lucide-react";
import { teacherData } from "@/constants/teacherData";

const Benefits = () => {
  const icons = [
    <Clock className="w-8 h-8 text-blue-600" />,
    <Video className="w-8 h-8 text-blue-600" />,
    <MessageCircle className="w-8 h-8 text-blue-600" />,
    <Award className="w-8 h-8 text-blue-600" />,
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Pourquoi choisir mes cours ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ma méthode se concentre sur la pratique et des résultats garantis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teacherData.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="bg-blue-50 p-4 rounded-full mb-6">
                {icons[index % icons.length]}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
