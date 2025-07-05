"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Code, Sparkles, Zap, Award } from "lucide-react";

const page = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      setIsVisible((prev) => ({
        ...prev,
        [entry.target.id]: entry.isIntersecting,
      }));
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "BIT MAILER",
      role: "Frontend Developer",
      duration: "2 Months",
      description:
        "A system where faculty emails the admin, who then forwards emails to students based on availability.",
      icon: <Mail className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Smart Farming Automation",
      role: "Hardware Developer",
      duration: "5 Months",
      description:
        "Developed a UVC-based pest control system to promote eco-friendly agriculture and reduce chemical pesticide usage.",
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const skills = [
    {
      category: "Programming",
      items: ["C", "Java", "SQL", "JavaScript"],
      icon: <Code className="w-5 h-5" />,
    },
    {
      category: "Web Technologies",
      items: ["HTML", "CSS"],
      icon: <Zap className="w-5 h-5" />,
    },
    {
      category: "Tools",
      items: ["Figma", "Canva", "Kicad", "Matlab"],
      icon: <Award className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-pink-500 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto p-6">
        {/* Header */}
        <header className="text-center mb-16 py-12" id="header" data-animate>
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.header
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-block p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
              <div className="bg-slate-900 rounded-full px-8 py-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                  Available for opportunities
                </span>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Naresh G
            </h1>

            <p className="text-2xl md:text-3xl font-light mb-8 text-purple-200">
              Frontend Developer • Software Engineer
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
                <Sparkles className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              <a href="./R.pdf" download>
                <Button
                  variant="outline"
                  className="border-purple-400 text-purple-200 hover:bg-purple-500/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm cursor-pointer"
                >
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </header>

        {/* Projects Section */}
        <section className="mb-16" id="projects" data-animate>
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible.projects
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {project.icon}
                    </div>

                    <h3 className="font-bold text-2xl mb-2 text-white group-hover:text-purple-200 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-purple-300 font-semibold mb-2">
                      {project.role} • {project.duration}
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16" id="skills" data-animate>
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible.skills
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white mr-3">
                        {skill.icon}
                      </div>
                      <h3 className="font-bold text-lg text-white">
                        {skill.category}
                      </h3>
                    </div>

                    <div className="space-y-2">
                      {skill.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-3" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16" id="education" data-animate>
          <div
            className={`transform transition-all duration-1000 delay-600 ${
              isVisible.education
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Education
            </h2>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-yellow-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mt-2 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl text-white mb-1">
                        B.E. ECE, Bannari Amman Institute of Technology
                      </h3>
                      <p className="text-yellow-300 font-semibold">
                        CGPA: 8.35 (up to 5th Sem)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mt-2 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-white">HSC</h3>
                      <p className="text-yellow-300">94%</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mt-2 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-white">SSLC</h3>
                      <p className="text-yellow-300">75%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16" id="certifications" data-animate>
          <div
            className={`transform transition-all duration-1000 delay-800 ${
              isVisible.certifications
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="font-bold text-lg text-white">
                      Certifications
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                      <span className="text-gray-300">
                        Problem Solving through C – 11/2024
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                      <span className="text-gray-300">
                        Forests and their Management – 04/2025
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Sparkles className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="font-bold text-lg text-white">
                      Presentations
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                      <span className="text-gray-300">
                        Paper & Project Presentations
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                      <span className="text-gray-300">
                        Locations: Chennai, Erode, BIT
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16" id="contact" data-animate>
          <div
            className={`transform transition-all duration-1000 delay-1000 ${
              isVisible.contact
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-pink-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Email</p>
                        <p className="text-white font-semibold">
                          gunaresh2005@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Phone</p>
                        <p className="text-white font-semibold">
                          +91 6374766693
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Location</p>
                        <p className="text-white font-semibold">
                          Karur, Tamil Nadu
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">LeetCode</p>
                        <a
                          href="https://leetcode.com/u/Naresh_7333/"
                          className="text-pink-400 hover:text-pink-300 font-semibold transition-colors underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          leetcode.com/u/Naresh_7333
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
