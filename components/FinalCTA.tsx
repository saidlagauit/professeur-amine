import { ArrowRight } from "lucide-react";
import { teacherData } from "@/constants/teacherData";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-blue-900 text-white text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Qu&apos;attendez-vous ? Votre place est réservée.
        </h2>
        <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
          Commencez aujourd&apos;hui et saisissez l&apos;opportunité
          d&apos;améliorer votre niveau.
        </p>
        <a
          href={teacherData.whatsappLink}
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-5 px-10 rounded-full text-xl transition-all transform hover:scale-105 shadow-xl"
        >
          Je réserve ma place
          <ArrowRight />
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
