import { teacherData } from "@/constants/teacherData";

const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Questions Fréquentes (FAQ)
          </h2>
          <p className="text-xl text-gray-600">
            Réponses aux questions que nous recevons souvent.
          </p>
        </div>

        <div className="space-y-6">
          {teacherData.faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
