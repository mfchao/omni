import Weather from "../weather/Weather";
import AppCard from "./AppCard";
import DateTime from "./DateTime";

const apps = [
  {
    name: "Fridge Contents",
    icon: "/app-icons/fridge-contents.svg",
    route: "/fridge-contents",
  },
  { name: "Timer", icon: "/app-icons/timer.svg", route: "/timer" },
  // { name: "To-Do", icon: "/app-icons/to-do-icon.svg", route: "/todo" },
  { name: "Meal Plan", icon: "/app-icons/meal-plan.svg", route: "/meal-plan" },
  // { name: "Music", icon: "/app-icons/to-do-icon.svg", route: "/music" },
  { name: "Calendar", icon: "/app-icons/calendar.svg", route: "/calendar" },
  // {
  //   name: "Smart Home",
  //   icon: "/app-icons/to-do-icon.svg",
  //   route: "/smart-home",
  // },
  { name: "Memos", icon: "/app-icons/memo.svg", route: "/memos" },
];

const HomePage = ({ isTransitioning }) => {
  return (
    <div className={`home-layout ${isTransitioning ? "transitioning" : ""}`}>
      <div className="top-bar">
        <DateTime classNameDate="home-date" classNameTime="home-time" />
        <div className="home-weather">
          <Weather
            classNameLocation="home-weather-location"
            classNameDes="home-weather-des"
            classNameTemp="home-weather-temp"
          />
          <img
            src="/images/weather/weather.png"
            alt="weather"
            className="home-weather-image"
          />
        </div>
      </div>

      <div className="home-page-apps">
        {apps.map((app) => (
          <AppCard
            key={app.name}
            icon={app.icon}
            name={app.name}
            link={app.route}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
