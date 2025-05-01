import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { FaLocationArrow } from "react-icons/fa";

export function GlowingEffectDemo() {
  const projects = [
    {
      id: 1,
      title: "People's Bank",
      des: "People's Bank is a modern and secure digital banking platform for everyone. It supports bank account linking via Plaid, real-time updates, and fund transfers with Dwolla. Users can track balances, view transactions, and manage accounts—all through a clean, responsive interface built for scalability and ease of use.",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
      link: "https://example.com/project1",
    },
    {
      id: 2,
      title: "Quickmart",
      des: "A Full stack Ecommerce grocery selling platform",
      iconLists: ["/html.svg", "/css.svg", "/javascript.svg", "/tail.svg"],
      link: "https://example.com/project3",
    },
    {
      id: 3,
      title: "CineScope",
      des: "CineScope is a sleek, mobile-first movie discovery app built with Expo, React Native, TypeScript, and Tailwind CSS. It lets users search for trending and popular films in real-time, using a custom popularity algorithm powered by Appwrite. With a clean UI and responsive design, CineScope delivers a seamless experience for movie lovers on the go.",
      iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://example.com/project4",
    },
    {
      id: 4,
      title: "InventSync",
      des: "Full Stack Inventory Mangment using AWS Service",
      iconLists: ["/next.svg", "/node.svg", "/redux.svg", "/aws.svg"],
      link: "https://example.com/project6",
    },
    {
      id: 5,
      title: "Budgetwise",
      des: "Budgetwise is a money management app which allows users to split income into customizable categories of need, expenses and savings.",
      iconLists: ["dart.svg", "python.svg"],
      link: "https://example.com/project2",
    },
    {
      id: 6,
      title: "Devarshi's Portfolio",
      des: "Full Stack Portfolio using Acetenity UI components",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
      link: "https://example.com/project5",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl mx-auto p-6">
      {projects.map((project) => (
        <GridItem
          key={project.id}
          id={project.id}
          link={project.link}
          className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.25rem)] h-auto min-h-[36rem] p-0 rounded-xl shadow-lg"
          icon={project.iconLists}
          title={project.title}
          description={project.des}
        />
      ))}
    </div>
  );
}

interface GridItemProps {
  id: number;
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode | string[];
  link: string;
  className: string;
}

const GridItem = ({ title, description, className, icon }: GridItemProps) => {
  const iconLists = Array.isArray(icon) ? icon : [];
  return (
    <li className={`list-none ${className} group`}>
      <div className="relative h-full w-full rounded-2xl border border-white/5 p-2 md:rounded-3xl md:p-3 backdrop-blur-sm transition-all duration-300 hover:scale-[1.05] project-card-outer">
        <div
          className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-70 z-0 project-glow transition-all duration-300 group-hover:opacity-100 group-hover:brightness-125"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(255,255,255,0.03), transparent), radial-gradient(circle at top right, rgba(255, 168, 255, 0.04), transparent), linear-gradient(135deg, rgba(9,0,37,0.7) 0%, rgba(28,0,73,0.7) 50%, rgba(20,1,23,0.7) 100%)",
            boxShadow:
              "0 4px 30px rgba(138, 43, 226, 0.1), inset 0 0 20px rgba(138, 43, 226, 0.05)",
          }}
        ></div>

        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        <div className="border border-white/5 relative z-10 flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-4 md:p-6 bg-black/10 backdrop-blur-md group-hover:border-white/30 project-inner-card transition-all duration-300">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            {/* Title and Description */}
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem] text-purple-600 group-hover:text-purple-300 transition-colors duration-300">
                {title}
              </h3>
              <p className="font-system text-pretty text-sm/[1.125rem] md:text-base/[1.375rem] text-gray-300/70 group-hover:text-gray-300/90 transition-colors duration-300">
                {description}
              </p>
            </div>
            {/* Technologies Used and Link Section */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                {iconLists.map((iconSrc, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black w-7 h-8 lg:w-10 lg:h-10 flex justify-center items-center group-hover:border-white/40 transition-all duration-300"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <img
                      src={iconSrc.toString()}
                      alt={`tech-${index}`}
                      className="p-2"
                    />
                  </div>
                ))}
              </div>
              {/* CTA Section */}
              <div className="mt-4 opacity-60 group-hover:opacity-100 transition-all duration-300">
                <div className="flex justify-end mt-4">
                  <button className="px-4 py-2 rounded-lg flex items-center group-hover:bg-purple-900/30 transition-all duration-300">
                    View Project
                    <FaLocationArrow className="ml-2" color="#CBACF9" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const RecentsProjects = () => {
  return (
    <div id="projects">
      <h1 className="font-bold text-3xl text-center md:text-4xl lg:text-7xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 mb-4 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
        Projects
      </h1>
      <div className="py-10">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple-500">recent projects</span>
        </h1>
      </div>
      <GlowingEffectDemo></GlowingEffectDemo>

      {/* Add global styles */}
      <style jsx global>{`
        .project-card-outer {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease-in-out;
        }

        .project-card-outer:hover {
          box-shadow: 0 15px 45px rgba(111, 73, 169, 0.3);
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.2);
          border-width: 1px;
        }

        .project-card-outer:hover .project-glow {
          opacity: 1;
          filter: brightness(1.2);
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.3),
            inset 0 0 30px rgba(138, 43, 226, 0.15);
        }

        .project-inner-card {
          transition: all 0.3s ease-in-out;
        }

        .project-card-outer:hover .project-inner-card {
          border-color: rgba(255, 255, 255, 0.5);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.2),
            inset 0 0 8px rgba(255, 255, 255, 0.1);
        }

        @keyframes pulseGlow {
          0% {
            filter: brightness(1.1);
          }
          50% {
            filter: brightness(1.3);
          }
          100% {
            filter: brightness(1.1);
          }
        }

        @keyframes borderGlow {
          0% {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.3),
              inset 0 0 5px rgba(255, 255, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.5),
              inset 0 0 10px rgba(255, 255, 255, 0.2);
          }
          100% {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.3),
              inset 0 0 5px rgba(255, 255, 255, 0.1);
          }
        }

        .project-card-outer:hover .project-glow {
          animation: pulseGlow 3s infinite ease-in-out;
        }

        .project-card-outer:hover .project-inner-card {
          animation: borderGlow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default RecentsProjects;
