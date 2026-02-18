import { Check } from "lucide-react";
import { teacherData } from "@/constants/teacherData";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Des tarifs adaptés à tous
          </h2>
          <p className="text-xl text-gray-600">
            Choisissez l&apos;offre qui correspond à votre objectif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {teacherData.offers.map((offer, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl overflow-hidden border ${offer.highlight ? "border-blue-500 shadow-2xl scale-105 z-10" : "border-gray-200 shadow-lg"} transition-all`}
            >
              {offer.highlight && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-bold uppercase tracking-wider">
                  Recommandé (Meilleure Offre)
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-500 mb-6 min-h-[48px]">
                  {offer.description}
                </p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {offer.price}
                  </span>
                  <span className="text-gray-500 ml-2">{offer.period}</span>
                </div>

                <a
                  href={`${teacherData.whatsappLink}?text=${encodeURIComponent(offer.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 rounded-xl font-bold text-center transition-colors mb-8 ${offer.highlight ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900"}`}
                >
                  {offer.cta}
                </a>

                <div className="space-y-4">
                  {offer.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 shrink-0 ${offer.highlight ? "text-blue-600" : "text-green-500"}`}
                      />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
