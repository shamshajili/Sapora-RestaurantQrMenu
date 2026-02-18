import ThemeToggle from "../components/home/ThemeToggle";
import LanguageSelect from "../components/home/LanguageSelect";
import FeedbackButton from "../components/home/FeedbackButton";
import MenuButton from "../components/home/MenuButton";
import SocialLinks from "../components/home/SocialLinks";
import sapora from "../assets/images/Sapora.jpeg";

const Home = () => {
  return (
    <div
      className="
        min-h-screen
        flex justify-center
        px-4 py-6
        transition-colors

        bg-[#F5F1E8] text-neutral-900
        dark:bg-neutral-900 dark:text-white
      "
    >
      <div className="w-full max-w-md flex flex-col justify-between">

        {/* TOP */}
        <div className="flex justify-between mb-6">
          <ThemeToggle />
          <LanguageSelect />
        </div>

        {/* CENTER */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-full h-[200px] rounded-3xl overflow-hidden shadow-lg">
            <img src={sapora} className="w-full h-full object-cover" />
          </div>

          <div className="w-full flex flex-col gap-3">
            <FeedbackButton />
            <MenuButton />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex justify-center mt-4">
          <SocialLinks />
        </div>

      </div>
    </div>
  );
};


export default Home;
