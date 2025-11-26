"use client";
import { BackgroundBeams } from "../../ui/background-beams";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const skills = [
    {
      title: "Web Development",
      category: "Technology",
      description:
        "Learn to build full-stack applications with modern frameworks.",
      thumbnail: "https://www.mooc.org/hubfs/javascript-jpg.jpeg",
    },
    {
      title: "Photography",
      category: "Creative Arts",
      description: "Master the art of capturing stunning visuals and editing.",
      thumbnail:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Spanish Language",
      category: "Languages",
      description: "Learn conversational Spanish from native speakers.",
      thumbnail:
        "https://www.johnacademy.co.uk/wp-content/uploads/2023/05/How-Learning-A-Second-Language-Enriches-Your-Life.png",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-y-auto bg-black text-white font-sans">
      {/* Hero Section */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-screen px-6 py-20">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold tracking-wide uppercase animate-fadeIn">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Join 10,000+ learners worldwide
        </div>

        {/* Main Heading - Improved typography with better sizing and line-height */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight animate-slideInLeft text-balance">
          Unlock Skills,{" "}
          <span className="text-purple-400">Exchange Knowledge</span>
        </h1>

        {/* Subheading - Better spacing and professional font weight */}
        <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl leading-relaxed font-light animate-fadeIn animation-delay-200">
          SkillSwap helps you learn and share skills with a vibrant community.
          <br />
          <span className="text-purple-300 font-semibold">
            Teach what you know. Learn what you love.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scaleIn">
          <button
            onClick={() => navigate("/register")}
            className="group px-8 py-4 text-base font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-glow transform hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Get Started
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
          <button
            onClick={() =>
              document
                .getElementById("how-it-works")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 text-base font-semibold rounded-lg border-2 border-gray-500 text-gray-200 hover:bg-white/10 hover:border-purple-400 hover:text-white backdrop-blur-sm transition-all duration-300"
          >
            Learn More
          </button>
        </div>

        {/* Stats - Refined typography with better hierarchy */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl w-full mt-12 animate-fadeIn">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 tracking-tight">
              10K+
            </div>
            <div className="text-sm text-gray-400 font-medium uppercase tracking-wide">
              Active Users
            </div>
          </div>
          <div className="text-center border-x border-gray-700">
            <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 tracking-tight">
              500+
            </div>
            <div className="text-sm text-gray-400 font-medium uppercase tracking-wide">
              Skills Shared
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2 tracking-tight">
              95%
            </div>
            <div className="text-sm text-gray-400 font-medium uppercase tracking-wide">
              Satisfaction
            </div>
          </div>
        </div>
      </div>

      {/* Skill Preview Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-balance">
            Explore Popular Skills
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed font-light">
            Discover what our community is learning and teaching
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-scaleIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={skill.thumbnail || "/placeholder.svg"}
                  alt={skill.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <span className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full bg-purple-600/90 backdrop-blur-sm uppercase tracking-wide">
                  {skill.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors tracking-tight">
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm mb-5 line-clamp-2 leading-relaxed font-light">
                  {skill.description}
                </p>
                <button
                  onClick={() => navigate("/register")}
                  className="w-full px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background beams */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>
    </div>
  );
}
