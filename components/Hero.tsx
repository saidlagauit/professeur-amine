import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import { teacherData } from "@/constants/teacherData";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Vous voulez apprendre
            <span className="text-yellow-400">le français</span> ou préparer le
            <span className="text-yellow-400">TCF</span> ?
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl">
            {teacherData.role} expert pour vous aider à atteindre vos objectifs
            efficacement.
            <span className="block mt-2 text-lg opacity-90">
              Cours 100% en ligne adaptés à votre rythme.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#pricing"
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              Voir les offres
              <ArrowRight size={20} />
            </a>
            <a
              href={teacherData.whatsappLink}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center"
            >
              Me contacter
            </a>
          </div>
        </div>

        <div className="flex-1 relative z-10 w-full max-w-md md:max-w-lg">
          <div className="aspect-square bg-blue-800/50 rounded-full absolute -top-10 -right-10 w-64 h-64 blur-3xl"></div>
          <div className="aspect-square bg-yellow-500/20 rounded-full absolute -bottom-10 -left-10 w-64 h-64 blur-3xl"></div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl shadow-2xl relative">
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <p className="font-bold">Préparation TCF</p>
                  <p className="text-sm opacity-80">Score garanti</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="font-bold">Communication</p>
                  <p className="text-sm opacity-80">Parler avec confiance</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <Briefcase size={24} />
                </div>
                <div>
                  <p className="font-bold">Français Pro</p>
                  <p className="text-sm opacity-80">Pour le travail</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
