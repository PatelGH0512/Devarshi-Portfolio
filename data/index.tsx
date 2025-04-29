import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 3,
    title: "Tech Enthusiats with a passion for development",
    description: "",
    className: "md:col-span-2 md:row-span-1",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export function TimelineDemo() {
  const data = [
    {
      title: "September'22 - June'23",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/InsideFPV.png"
              alt="GWU Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold">
              Inside FPV Ltd - Surat, India
            </p>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm mb-2">
            Software Developer
          </p>
          <ul className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm list-disc list-inside space-y-2 leading-relaxed">
            <li>
              Developed scalable web applications using React Native
              (TypeScript) to enhance efficiency and maintainability.
            </li>
            <li>
              Designed and implemented serverless microservices with AWS Lambda
              (Python) for high availability and fault tolerance.
            </li>
            <li>
              Built robust backend systems with Node.js, integrating APIs
              (Stripe, AWS Cognito, Firebase) for security and seamless
              integration.
            </li>
            <li>
              Collaborated with cross-functional teams to resolve technical
              issues through code reviews, unit testing, and debugging.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "June'22 - August'22",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/Technocolabs.png"
              alt="GWU Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold">
              Technocolabs Inc - Bangalore, India
            </p>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm mb-2">
            Data Analyst Intern
          </p>
          <ul className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm list-disc list-inside space-y-2 leading-relaxed">
            <li>
              Devised and optimized machine learning models using Python,
              reducing computation time by 20%.
            </li>
            <li>
              Designed and implemented serverless microservices with AWS Lambda
              (Python) to ensure high availability and fault tolerance.
            </li>
            <li>
              Processed large-scale datasets in distributed environments and
              collaborated with teams to support data-driven decision-making.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "September'21 - January'22",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/Sckilled.png"
              alt="Throttle Ninjas Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold">
              Sckilled Inc – Remote
            </p>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm font-medium mb-2">
            Web Developer Intern
          </p>
          <ul className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm list-disc list-inside space-y-2 leading-relaxed">
            <li>
              Developed a full-stack job search platform using React.js,
              Flutter, and Node.js, focusing on responsive front-end design and
              performance optimization.
            </li>
            <li>
              Integrated RESTful services to improve application reliability and
              data flow.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "January'21 - June'21",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/SparksFoundation.png"
              alt="MSRUAS Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold">
              The Sparks Foundation – Bengaluru, India
            </p>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm font-medium mb-2">
            Mobile App Development Intern
          </p>
          <ul className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm list-disc list-inside space-y-2 leading-relaxed">
            <li>Assisted faculty with course material and student queries.</li>
            <li>Helped conduct lab sessions and provided coding support.</li>
            <li>
              Graded assignments and mentored peers in technical subjects.
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
