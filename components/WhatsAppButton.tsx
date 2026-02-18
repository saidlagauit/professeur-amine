import { MessageCircle } from "lucide-react";
import { teacherData } from "@/constants/teacherData";

const WhatsAppButton = () => {
  return (
    <a
      href={teacherData.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center justify-center animate-bounce-subtle"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton;
