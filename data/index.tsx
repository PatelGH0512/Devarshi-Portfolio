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
      title: "July'25 - Present",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/torus.jpeg"
              alt="torus Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold">
              Torus Transforms - Portland, Oregon
            </p>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm mb-2">
            Mobile Application Developer
          </p>
          <ul className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm list-disc list-inside space-y-2 leading-relaxed">
            <li>
              Developed and optimized cross-platform mobile app features using
              React Native, TypeScript, JavaScript, and Firebase to ensure high
              performance and scalability, improving load times by an estimated
              20%.
            </li>
            <li>
              Debugged, tested, and troubleshot code using Android Studio
              profiling tools, enhancing app stability and user experience.
            </li>
            <li>
              Collaborated with UI/UX designers and developers in agile sprints,
              ensuring design consistency and meeting project milestones.
            </li>
            <li>
              Integrated front-end components with backend services via FireCMS
              and Firebase for real-time data management and improving seamless
              user interactions speed by 25%.
            </li>
          </ul>
        </div>
      ),
    },
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
              Collaborated within a cross-functional Agile team to build and
              maintain SPAs using React Native and Node.js, driving 20%
              improvement in user onboarding speed.
            </li>
            <li>
              Designed, created, and consumed REST APIs; documented API
              endpoints for team use. Wrote and optimized SQL queries for
              PostgreSQL schemas and queries for scalable backend systems,
              improving load time by 30%.
            </li>
            <li>
              Built robust backend systems with Node.js, integrating APIs
              (Stripe, AWS Cognito, Firebase) for security and seamless
              integration.
            </li>
            <li>
              Practiced Agile development within a cross-functional team,
              focusing on high-quality code, unit testing, and code reviews.
              Participated in CI/CD workflows and cloud deployments using AWS.
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
              Developed web applications using HTML, CSS, and JavaScript. Built
              RESTful APIs and integrated them with frontend for seamless data
              flow
            </li>
            <li>
              Integrated RESTful services to improve application reliability and
              data flow.
            </li>
            <li>
              Focused on frontend performance optimization and seamless UX for
              real-time job filtering and listing.
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
