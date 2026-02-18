import ThemeToggle from "../components/home/ThemeToggle";
import LanguageSelect from "../components/home/LanguageSelect";
import FeedbackButton from "../components/home/FeedbackButton";
import MenuButton from "../components/home/MenuButton";
import SocialLinks from "../components/home/SocialLinks";
import sapora from "../assets/images/Sapora.jpeg";

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors text-white px-4 py-4">

      <div className="w-full max-w-xl mx-auto flex justify-between items-center mb-4">
        <ThemeToggle size="lg" />
        <LanguageSelect size="lg" />
      </div>

      <div className="flex justify-center mb-5">
        <div className="w-full px-1">
          <div
            className="
              w-full
              h-[420px]             
              sm:h-[380px]
              md:h-[360px]
              lg:h-[300px]
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

      <div className="w-full max-w-xl mx-auto flex flex-col gap-3 px-1">
        <FeedbackButton />
        <MenuButton onClick={() => console.log("Menu")} />
        <SocialLinks />
      </div>

    </div>
  );
};

export default Home;
