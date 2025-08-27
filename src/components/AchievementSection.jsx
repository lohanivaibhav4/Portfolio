import { ArrowRight, ExternalLink, Github, GithubIcon } from "lucide-react";
import { achievements } from "../contents/achievements.js";
import { Link } from "react-router-dom";

export default function AchievementSection() {
  const achievementCards = achievements.map((item, key) => (
    <Link to={item.link} target="_blank">
      <div
      key={key}
      className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col justify-between min-h-[55%]">
        <h3 className="text-xl font-semibold mb-1"> {item.title}</h3>
        <h4 className="text-l font-semibold mb-1 text-primary"> {item.authority} </h4>
        <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
      </div>
    </div>
    </Link>
  ));

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-15 text-center">
          {" "}
          Achievements <span className="text-primary"> & Certifications </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {achievementCards}
        </div>
      </div>
    </section>
  );
}
