import ThemeToggle from "../components/home/ThemeToggle";
import LanguageSelect from "../components/home/LanguageSelect";
import FeedbackButton from "../components/home/FeedbackButton";
import MenuButton from "../components/home/MenuButton";
import SocialLinks from "../components/home/SocialLinks";
import sapora from "../assets/images/Sapora.jpeg";

const Home = () => {
  return (
  <div className="min-h-screen bg-neutral-900 text-white px-4 py-6 flex justify-center">
  <div className="w-full max-w-md md:max-w-4xl flex flex-col justify-between">

    {/* TOP */}
    <div className="flex justify-between mb-6 md:mb-4">
      <ThemeToggle />
      <LanguageSelect />
    </div>

    {/* CENTER */}
    <div className="flex flex-col items-center gap-5 md:gap-4">
      <div className="w-full h-[260px] md:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden shadow-lg">
        <img
          src={sapora}
          alt="Sapora cover"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full flex flex-col gap-4 md:gap-3">
        <FeedbackButton />
        <MenuButton />
      </div>
    </div>

    {/* BOTTOM */}
    <div className="flex justify-center mt-5 md:mt-4">
      <SocialLinks />
    </div>

  </div>
</div>

  );
};

export default Home;
