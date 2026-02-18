import ThemeToggle from "../components/home/ThemeToggle";
import LanguageSelect from "../components/home/LanguageSelect";
import FeedbackButton from "../components/home/FeedbackButton";
import MenuButton from "../components/home/MenuButton";
import SocialLinks from "../components/home/SocialLinks";
import sapora from "../assets/images/Sapora.jpeg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between px-4 py-6 bg-white dark:bg-neutral-900 transition-colors text-white">

      {/* Top */}
      <div className="w-full max-w-xl mx-auto flex justify-between items-center">
        <ThemeToggle />
        <LanguageSelect />
      </div>

      {/* IMAGE */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full px-2">
          <div
            className="
              w-full                 /* mobile full width */
              h-[480px]              /* mobile → BÖYÜK */
              sm:h-[420px]
              md:h-[400px]           /* desktop → kiçik */
              lg:h-[320px]
              md:max-w-md
              lg:max-w-sm
              mx-auto
              rounded-3xl
              overflow-hidden
              shadow-lg
              dark:shadow-black/40
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

      {/* Bottom */}
      <div className="w-full max-w-xl mx-auto flex flex-col gap-4 px-2 mb-4">
        <FeedbackButton />
        <MenuButton />
        <SocialLinks />
      </div>

    </div>
  );
};

export default Home;
