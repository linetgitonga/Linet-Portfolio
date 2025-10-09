"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Intern Backend Developer",
    company: "Dukatech Solutions",
    period: "January 2025 - August 2025",
    description:
      "Designed and implemented Django REST APIs for 5+ scalable solutions. Optimized database queries improving performance by 15%. Collaborated with front-end developers for seamless React integrations.",
  },
  {
    title: "Intern Software Developer",
    company: "Movetech Solutions",
    period: "April 2024 - September 2024",
    description:
      "Conducted Android/iOS app testing, reducing crash rates by 15%. Built 4 responsive websites with React, JavaScript, HTML, and CSS, increasing client traffic by 20%. Implemented SEO best practices improving page load speed by 35%.",
  },
  {
    title: "Full-Stack Software Development Certificate",
    company: "ALX Africa",
    period: "January 2024 - December 2024",
    description:
      "Completed intensive full-stack software development program covering modern web technologies, algorithms, and software engineering best practices.",
  },
  {
    title: "Bachelor of Science in Computer Science",
    company: "Kenyatta University",
    period: "September 2022 - Expected May 2026",
    description:
      "Pursuing Computer Science degree with focus on software engineering, data structures, algorithms, and AI. Active in tech communities and hackathons.",
  },
  {
    title: "Full-Stack Software Development Certificate",
    company: "eMobilis Tech Institute",
    period: "April 2022 - August 2022",
    description:
      "Completed foundational training in full-stack web development, mobile app development, and software engineering principles.",
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
