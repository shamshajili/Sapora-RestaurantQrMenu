import ThemeToggle from "../components/home/ThemeToggle";
import LanguageSelect from "../components/home/LanguageSelect";
import FeedbackButton from "../components/home/FeedbackButton";
import MenuButton from "../components/home/MenuButton";
import SocialLinks from "../components/home/SocialLinks";
import sapora from "../assets/images/Sapora.jpeg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-4 py-4 bg-white dark:bg-neutral-900 transition-colors">

      {/* Top controls */}
      <div className="w-full flex items-center justify-between max-w-md">
        <ThemeToggle />
        <LanguageSelect />
      </div>

      {/* Logo / Cover */}
        <div className="flex flex-col items-center justify-center flex-1 w-full">
          <div className="w-full px-2 sm:max-w-md">
            <div
              className="
                w-full
                h-80
                sm:h-64
                md:h-72
                rounded-3xl
                overflow-hidden
                shadow-xl
                dark:shadow-black/50
              "
            >
              <img
                src={sapora}
                alt="Sapora cover"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>


      {/* Bottom section */}
      <div className="w-full max-w-md flex flex-col gap-4 mb-4">
        <FeedbackButton />
        <MenuButton />
        <SocialLinks />
      </div>

    </div>
  );
};

export default Home;
