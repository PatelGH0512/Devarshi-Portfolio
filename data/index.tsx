import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
//import { link } from "fs";

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
    link: "https://github.com/PatelGH0512",
  },
  {
    id: 2,
    img: "/x.svg",
    link: "https://x.com/Patelyrrrrr",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/devarshi-patel-3b26181b4/",
  },
];
