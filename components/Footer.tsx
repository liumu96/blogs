import { SiTwitter, SiGithub, SiInstagram } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="absolute w-full -bottom-0">
      <div className="bg-indigo-600 dark:bg-indigo-900">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-50 text-sm text-center sm:text-left">
            © {year}{" "}
            <a
              href="https://liuxing96.vercel.app"
              rel="noopener noreferrer"
              className="text-gray-50 ml-1"
              target="_blank"
            >
              Liu Xing
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-center">
            <a
              className="ml-4 text-gray-50"
              href="https://github.com/liumu96"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiGithub />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
