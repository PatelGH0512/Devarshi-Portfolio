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
      title: "Jul 2026 - Present",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-2">
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold">
              Bits and Binaries Inc
            </p>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm mb-2">
            Full Stack Developer
          </p>
          <ul className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm list-disc list-inside space-y-2 leading-relaxed">
            <li>
              Joined the modernization of a client&apos;s legacy monolithic
              platform into AWS serverless microservices (Lambda, API Gateway,
              SQS/SNS, RDS), focused on reducing system coupling and
              eliminating single points of failure.
            </li>
            <li>
              Redesigned fragmented legacy client interfaces into modular,
              responsive TypeScript frontends using modern state management
              and reactive design patterns, streamlining complex operational
              workflows and improving platform engagement.
            </li>
            <li>
              Integrated custom AI-assisted development tooling and LLM
              workflows into client engineering pipelines to accelerate legacy
              code reverse-engineering, automate unit test generation, and
              reduce post-deployment bugs by 35%.
            </li>
            <li>
              Re-architected multi-tenant client data layers by combining
              relational schemas (PostgreSQL) and NoSQL stores
              (DynamoDB/Firestore) with real-time event streams, resolving
              data latency bottlenecks and improving API query performance.
            </li>
            <li>
              Formulated containerised CI/CD deployment pipelines (Docker,
              GitHub Actions/Jenkins) and end-to-end testing strategies,
              guaranteeing significant uptime during critical client migration
              phases and cutting onboarding/deployment cycles.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Jul 2024 - Jun 2026",
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
              Torus Transforms - Remote
            </p>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm mb-2">
            Full Stack Engineer
          </p>
          <ul className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm list-disc list-inside space-y-2 leading-relaxed">
            <li>
              Architected and led development of a cross-platform solution
              using React, Node.js, and React Native (TypeScript), migrating
              1,100+ Torus users from manual coordination to a unified
              real-time platform hosted on AWS EC2, S3, and RDS with Firebase
              for data sync.
            </li>
            <li>
              Designed and implemented a server-side volunteer-learner
              matching engine in Node.js that scores compatibility across
              language background and weekly availability, exposing results
              via a REST API consumed by both the mobile and web clients;
              automated a previously fully manual staff workflow and
              measurably increased successful session booking rates.
            </li>
            <li>
              Built a real-time in-app messaging module using Firestore&apos;s
              WebSocket-based listeners to replace fragmented WhatsApp threads
              with a structured communication layer between learners,
              volunteer facilitators, and Torus staff, reducing message
              latency and giving staff full visibility into session
              coordination from the admin dashboard.
            </li>
            <li>
              Integrated OpenAI and Gemini APIs into a Node.js middleware
              layer to deliver real-time grammar correction and multilingual
              translation across six languages, handling prompt engineering,
              response streaming, and error fallback logic to ensure reliable
              in-app feedback for ESL learners.
            </li>
            <li>
              Developed curriculum-aligned quiz modules in React Native with
              per-learner progress tracking stored in Firestore, surfaced
              aggregated learner analytics on the React admin dashboard,
              giving volunteer facilitators actionable visibility into student
              progress between sessions.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Nov 2021 - Jun 2023",
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
              Architected a React Native (TypeScript) mobile interface that
              serves as the primary controller for Plug-and-Fly drones,
              eliminating device fragmentation across Android and iOS and
              reducing support tickets.
            </li>
            <li>
              Overhauled the pilot registration pipeline by integrating AWS
              Cognito and Node.js microservices, streamlining authentication
              and third-party API data flow, and slashing user onboarding
              time by 20%, allowing customers to go from unboxing to their
              first flight faster.
            </li>
            <li>
              Maintained a multi-tier MVC web-based fleet management platform
              using object-oriented principles to handle drone telemetry
              data, resolved over 30 critical bugs and achieved 98% code
              efficiency, which kept the platform stable during
              high-concurrency flight windows.
            </li>
            <li>
              Partnered with the hardware and firmware teams to lead code
              reviews and unit testing for the companion app. By establishing
              a rigorous CI/CD workflow on AWS, we reduced post-deployment
              bugs by 40%, preventing critical software failures during live
              drone operations.
            </li>
            <li>
              Extended the fleet management platform with React and Tailwind
              CSS to visualise real-time diagnostics, battery health, signal
              strength, and flight anomalies across defence and agriculture
              product lines, enabling operators to identify issues about 30%
              faster.
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
