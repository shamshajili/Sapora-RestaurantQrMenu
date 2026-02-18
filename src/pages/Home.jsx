import ThemeToggle from "../components/home/ThemeToggle";
import LanguageSelect from "../components/home/LanguageSelect";
import FeedbackButton from "../components/home/FeedbackButton";
import MenuButton from "../components/home/MenuButton";
import SocialLinks from "../components/home/SocialLinks";
import sapora from "../assets/images/Sapora.jpeg";

const Home = () => {
  return (
    <div className="bg-neutral-900 text-white px-4 py-4">

      <div className="flex justify-between mb-3">
        <ThemeToggle />
        <LanguageSelect />
      </div>

      <div className="flex justify-center mb-4">
        <div className="w-full max-w-sm h-[240px] rounded-3xl overflow-hidden">
          <img src={sapora} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <FeedbackButton />
        <MenuButton />
        <SocialLinks />
      </div>

    </div>
  );
};


export default Home;
