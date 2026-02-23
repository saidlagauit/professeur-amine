import { CheckCircle } from "lucide-react";
import { teacherData } from "@/constants/teacherData";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative mx-auto w-full max-w-md aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <Image
                  src={teacherData.about.image}
                  alt="Photo de l'enseignant"
                  width={400}
                  height={500}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full z-[-1]"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full z-[-1]"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">
              À propos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">
              Qui suis-je ?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {teacherData.about.greeting}
              <br />
              {teacherData.about.shortBio}
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {teacherData.about.fullBio}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">
                    Certifié et Expérimenté
                  </h3>
                  <p className="text-gray-500">
                    {teacherData.about.certifications}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">
                    Méthode Personnalisée
                  </h3>
                  <p className="text-gray-500">
                    Programme adapté à votre niveau et à vos objectifs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">
                    {teacherData.about.studentsCount}
                  </h3>
                  <p className="text-gray-500">
                    La réussite de mes élèves est ma meilleure preuve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
