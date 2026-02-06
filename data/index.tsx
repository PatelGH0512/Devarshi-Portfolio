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
              Architected a full-stack, community-focused platform using React,
              Node.js, and C# to connect 1,100+ learners and volunteers, owning
              the pipeline from design to AWS deployment. By optimising the
              cloud infrastructure, I reduced application load times by 20%,
              ensuring that users with limited hardware could reliably access
              language exchange resources.
            </li>
            <li>
              Engineered the Python-driven inference flows for culturally
              responsive teaching tools, including real-time grammar correction
              and translation features for the 6 most common languages in
              Oregon. This "AI brain" allows immigrants and refugees to practise
              English through real-world modules, such as citizenship and
              driving test preparation, in an interactive environment.
            </li>
            <li>
              Led Figma-to-production workflows to build a "linguistically
              responsive" UI, specifically polishing typography and motion for
              better accessibility across diverse language scripts. This
              collaboration ensured that learners, regardless of their native
              language, could intuitively navigate the messaging and educational
              features of the app.
            </li>
            <li>
              Integrated FireCMS and Firebase to manage real-time data for the
              app&apos;s messaging and quiz modules, resulting in a 25%
              performance boost. This technical implementation allows learners
              to communicate seamlessly with staff and receive instant feedback
              on their practice modules, directly addressing their immediate
              educational needs.
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
              Architected a high-performance React Native (TypeScript) mobile
              interface to serve as the primary controller for "Plug-and-Fly"
              drones, solving the bottleneck of device fragmentation across
              Android and iOS. This unified codebase allowed for a consistent
              pilot experience and reduced cross-platform development overhead
              by 30%.
            </li>
            <li>
              Led the Figma-to-production workflow to build responsive,
              low-latency telemetry dashboards. By translating complex flight
              data requirements into pixel-perfect TypeScript components, I
              delivered a 25% faster user interaction speed, which is critical
              for real-time drone monitoring and control.
            </li>
            <li>
              Overhauled the pilot registration pipeline by integrating AWS
              Cognito and Node.js microservices. By streamlining the
              authentication and third-party API data flow, I slashed user
              onboarding time by 20%, allowing customers to go from unboxing to
              their first flight significantly faster
            </li>
            <li>
              Maintained a multi-tier MVC web-based fleet management platform,
              using object-oriented principles to manage drone telemetry data. I
              personally resolved over 30 critical technical bugs with 98% code
              efficiency, ensuring the platform remained stable during
              high-concurrency flight windows.
            </li>
            <li>
              Partnered with the hardware and firmware teams to lead code
              reviews and unit testing for the companion app. By establishing a
              rigorous CI/CD workflow on AWS, we reduced post-deployment bugs by
              40%, preventing critical software failures during live drone
              operations.
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
