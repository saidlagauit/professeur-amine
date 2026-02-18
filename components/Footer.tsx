import { teacherData } from "@/constants/teacherData";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center">
      <p>
        &copy; {new Date().getFullYear()} {teacherData.name}. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
