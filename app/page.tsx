"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { ProjectModal } from "@/components/project-modal"

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      title: "MAMA-SCAN",
      description:
        "AI-Powered Cervical Cancer Screening platform empowering Community Health Volunteers with risk assessment tools for early detection across Kenya.",
      longDescription:
        "MAMA-SCAN is a comprehensive healthcare solution that leverages artificial intelligence to provide accurate cervical cancer risk assessments. The platform is designed specifically for Community Health Volunteers working in remote areas, offering offline-first functionality and mobile-optimized interfaces. It includes real-time analytics, patient management systems, and HIPAA-compliant data handling to ensure patient privacy and security.",
      tags: ["AI", "Healthcare", "Django", "React", "Machine Learning"],
      image: "/images/mamascan.png",
      images: ["/images/mamascan.png", "/images/mamascan-detail-1.png", "/images/mamascan-detail-2.png"],
      demoUrl: "https://mama-scan.vercel.app/landing",
      repoUrl: "https://github.com",
      features: [
        "AI-powered risk assessment using machine learning algorithms trained on local datasets",
        "Mobile-first design optimized for Community Health Volunteers",
        "Offline capability for remote areas with limited connectivity",
        "Real-time analytics dashboard for healthcare administrators",
        "Multi-user support with role-based access control",
        "HIPAA-compliant data handling and end-to-end encryption",
      ],
    },
    {
      title: "Safari Travels",
      description:
        "E-commerce platform for safari travel bookings, offering seamless booking experiences for wildlife adventures across Kenya.",
      longDescription:
        "Safari Travels is a full-featured e-commerce platform that connects travelers with authentic Kenyan safari experiences. The platform features an intuitive booking system, real-time availability checking, secure payment processing, and a comprehensive admin dashboard for tour operators. Built with modern web technologies, it provides a smooth user experience across all devices.",
      tags: ["Next.js", "E-commerce", "TypeScript", "Tailwind", "Stripe"],
      image: "/images/safari-travels.png",
      images: ["/images/safari-travels.png", "/images/safari-travels-detail.png"],
      demoUrl: "https://safari-travels.vercel.app/",
      repoUrl: "https://github.com",
      features: [
        "Real-time booking system with availability checking",
        "Secure payment processing with Stripe integration",
        "Interactive tour galleries with high-quality images",
        "Responsive design optimized for mobile and desktop",
        "Admin dashboard for tour operators",
        "Email notifications for bookings and confirmations",
      ],
    },
    {
      title: "EcoTrack Africa",
      description:
        "Energy consumption tracking platform for households, helping families monitor usage, reduce costs, and lower their carbon footprint.",
      longDescription:
        "EcoTrack Africa is an innovative sustainability platform that helps African households track and reduce their energy consumption. The application provides real-time monitoring, personalized recommendations, and gamified challenges to encourage energy-saving behaviors. With detailed analytics and cost projections, families can make informed decisions about their energy usage.",
      tags: ["React", "Django", "Analytics", "Sustainability", "IoT"],
      image: "/images/ecotrack.png",
      images: ["/images/ecotrack.png", "/images/ecotrack-detail.png"],
      demoUrl: "https://ecotrack-africa.vercel.app/",
      repoUrl: "https://github.com",
      features: [
        "Real-time energy consumption monitoring",
        "Personalized energy-saving recommendations",
        "Cost projection and savings calculator",
        "Gamified challenges to encourage sustainable behavior",
        "Carbon footprint tracking and reduction goals",
        "Integration with smart home devices",
      ],
    },
    {
      title: "KYInnovate",
      description:
        "Tourism innovation platform showcasing Kenya's beauty through virtual safaris, cultural experiences, and groundbreaking tourism solutions.",
      longDescription:
        "KYInnovate is a cutting-edge platform that revolutionizes how people experience Kenyan tourism. It combines virtual reality tours, cultural storytelling, and innovative booking systems to create immersive experiences. The platform serves as a marketplace for tourism innovations, connecting travelers with unique experiences while supporting local communities.",
      tags: ["Next.js", "Tourism", "Virtual Reality", "Culture", "3D"],
      image: "/images/kyinnovate.png",
      images: ["/images/kyinnovate.png", "/images/kyinnovate-detail-1.png", "/images/kyinnovate-detail-2.png"],
      demoUrl: "https://cultureinnovate.vercel.app/",
      repoUrl: "https://github.com",
      features: [
        "Virtual safari experiences with 360° views",
        "Cultural storytelling and heritage preservation",
        "Innovation marketplace for tourism startups",
        "Interactive maps and location-based experiences",
        "Community engagement and local business support",
        "Analytics dashboard for tracking engagement",
      ],
    },
    {
      title: "AgriLink",
      description:
        "AI-powered crop recommendation system helping smallscale farmers make data-driven decisions to increase yields and sustainability.",
      longDescription:
        "AgriLink empowers smallscale farmers across Africa with AI-driven agricultural insights. The platform analyzes soil conditions, weather patterns, and market trends to provide personalized crop recommendations. It also connects farmers with markets, agricultural experts, and resources, creating a comprehensive ecosystem for agricultural success.",
      tags: ["Django", "AI/ML", "Agriculture", "React", "Data Science"],
      image: "/images/agrilink.png",
      images: ["/images/agrilink.png", "/images/agrilink-detail.png"],
      demoUrl: "https://agrilink-frontend.vercel.app/",
      repoUrl: "https://github.com",
      features: [
        "AI-powered crop recommendations based on soil and climate data",
        "Market price tracking and trend analysis",
        "Direct connection to buyers and agricultural markets",
        "Expert consultation and community forums",
        "Weather forecasting and alerts",
        "Resource library with farming best practices",
      ],
    },
    {
      title: "AfriMaint",
      description:
        "AI-powered predictive maintenance platform that analyzes and tracks machine health to prevent downtime in industrial settings.",
      longDescription:
        "AfriMaint uses advanced AI algorithms to predict equipment failures before they occur, helping industrial facilities across Africa minimize downtime and maintenance costs. The platform monitors machine health in real-time, provides maintenance scheduling recommendations, and offers comprehensive analytics for facility managers.",
      tags: ["AI", "IoT", "Django", "Analytics", "Machine Learning"],
      image: "/images/afrimaint.png",
      images: ["/images/afrimaint.png", "/images/afrimaint-detail-1.png", "/images/afrimaint-detail-2.png"],
      demoUrl: "https://afrimaint.vercel.app",
      repoUrl: "https://github.com",
      features: [
        "Real-time machine health monitoring with IoT sensors",
        "AI-powered predictive maintenance algorithms",
        "Automated maintenance scheduling and alerts",
        "Comprehensive analytics dashboard",
        "Historical data tracking and trend analysis",
        "Mobile app for on-the-go monitoring",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95 text-foreground">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:opacity-20"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 dark:opacity-20"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 dark:opacity-20"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-muted backdrop-blur-sm border border-border mb-4 mt-4">
                <span className="relative z-10">Software Developer & Full-Stack Engineer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Linet Muthoni Gitonga
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              I build scalable web applications and AI-powered solutions with Django, React, and modern technologies,
              focusing on impactful projects for African communities.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0"
              >
                <Link href="#projects">
                  <span className="relative z-10 flex items-center">
                    View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-border hover:border-purple-500 bg-transparent">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/linetgitonga" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full bg-muted hover:bg-accent">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/linet-gitonga" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full bg-muted hover:bg-accent">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:linetgitonga55@gmail.com">
                <Button variant="ghost" size="icon" className="rounded-full bg-muted hover:bg-accent">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10 px-4">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-border">
                <img src="/profile-picture.jpg" alt="Linet Muthoni Gitonga" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium text-white">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I'm a passionate software developer specializing in backend development with Django and full-stack
                  applications using React and Next.js. I focus on building solutions that address real-world challenges
                  in African communities.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Currently working as an Intern Backend Developer at Dukatech Solutions, I've designed scalable REST
                  APIs, optimized database performance, and collaborated on multiple impactful projects including
                  healthcare, agriculture, and tourism platforms.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  I'm certified in Full-Stack Software Development from ALX Africa and hold a Bachelor's degree in
                  Computer Science from Kenyatta University. I'm passionate about AI, data structures, and creating
                  accessible digital experiences.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Linet Muthoni Gitonga</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">linetgitonga55@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Kenya</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white" asChild>
                    <a href="/Linet_Gitonga_Resume.pdf" download="Linet_Gitonga_Resume.pdf">
                      Download Resume
                    </a>
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10 px-4">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="Python" level={90} />
            <SkillBadge name="Django" level={90} />
            <SkillBadge name="JavaScript" level={85} />
            <SkillBadge name="TypeScript" level={80} />
            <SkillBadge name="React" level={90} />
            <SkillBadge name="Next.js" level={85} />
            <SkillBadge name="Node.js" level={75} />
            <SkillBadge name="HTML/CSS" level={95} />
            <SkillBadge name="Tailwind CSS" level={90} />
            <SkillBadge name="PostgreSQL" level={85} />
            <SkillBadge name="MySQL" level={80} />
            <SkillBadge name="Firebase" level={80} />
            <SkillBadge name="Git/GitHub" level={90} />
            <SkillBadge name="REST APIs" level={90} />
            <SkillBadge name="Kotlin" level={70} />
            <SkillBadge name="Java" level={75} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10 px-4">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                demoUrl={project.demoUrl}
                repoUrl={project.repoUrl}
                onViewDetails={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10 px-4">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10 px-4">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">linetgitonga55@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/linet-gitonga</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/linetgitonga</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Available for freelance work and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6 px-4">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Linet</span>
              <span className="text-white">Gitonga</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Linet Muthoni Gitonga. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/linetgitonga" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full bg-muted hover:bg-accent">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/linet-gitonga" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full bg-muted hover:bg-accent">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:linetgitonga55@gmail.com">
              <Button variant="ghost" size="icon" className="rounded-full bg-muted hover:bg-accent">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />
      )}
    </div>
  )
}
