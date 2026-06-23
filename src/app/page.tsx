"use client";
import { useState, useEffect, useRef } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Image from "next/image";
const skills = [
  {
    name: {
      en: "Web Development",
      id: "Pengembangan Web",
    },
    skills: [
      "HTML",
      "CSS",
      "Tailwind, Bootstrap CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Next.js",
      "Express.js",
      "FastAPI",
      "Flask",
      "Laravel",
      "Vue JS",
    ],
  },
  {
    name: {
      en: "Mobile Development",
      id: "Pengembangan Mobile",
    },
    skills: ["React Native", "Flutter", "Java"],
  },
  {
    name: {
      en: "Database Management",
      id: "Manajemen Database",
    },
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    name: {
      en: "Tools",
      id: "Peralatan (Tools)",
    },
    skills: ["Git", "Docker"],
  },
  {
    name: {
      en: "Programming Languages",
      id: "Bahasa Pemrograman",
    },
    skills: ["Python", "PHP", "JavaScript", "TypeScript", "C++"],
  },
  {
    name: {
      en: "Machine Learning",
      id: "Pembelajaran Mesin",
    },
    skills: ["Python", "R", "TensorFlow", "PyTorch", "Scikit-learn"],
  },
];

const social_media = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/claudionehemia_",
    icon: "instagram",
    color: "hover:text-pink-500",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/claudio-nehemia/",
    icon: "linkedin",
    color: "hover:text-blue-600",
  },
  {
    name: "GitHub",
    url: "https://github.com/claudio-nehemia",
    icon: "github",
    color: "hover:text-gray-800",
  },
  {
    name: "Email",
    url: "mailto:claudionehemia83@gmail.com",
    icon: "email",
    color: "hover:text-red-500",
  },
];

const members = [
  {
    name: "Visa Ramadhan",
    linkedin: "https://www.linkedin.com/in/visa-ramadhan-842960304/",
  },
  {
    name: "Claudio Nehemia",
    linkedin: "https://www.linkedin.com/in/claudio-nehemia/",
  },
];

const projects = [
  {
    name: "PANDU PEKA",
    timeline: 2025,
    description: {
      en: "A disaster management application designed to assist both rescue teams and communities during natural disaster evacuations. The app provides real-time disaster information, evacuation guidance, and integrates machine learning models for prediction. Built with Flutter for the mobile frontend, Flask and FastAPI for the backend and ML logic, and Django for the web-based admin dashboard.",
      id: "Aplikasi manajemen bencana yang dirancang untuk membantu tim penyelamat dan masyarakat selama evakuasi bencana alam. Aplikasi ini menyediakan informasi bencana real-time, panduan evakuasi, dan mengintegrasikan model machine learning untuk prediksi. Dibangun dengan Flutter untuk frontend mobile, Flask dan FastAPI untuk backend dan logika ML, serta Django untuk dashboard admin berbasis web.",
    },
    github: "https://github.com/R26raihan/Pekan_inovasi2025",
  },
  {
    name: "Cuan Limbah Apps",
    timeline: 2025,
    description: {
      en: "A mobile application for waste-to-points exchange, where users can deposit waste at collection centers and receive reward points stored in the app for future use. Developed as a mobile-first solution.",
      id: "Aplikasi mobile untuk penukaran sampah menjadi poin, di mana pengguna dapat menyetor sampah di pusat pengumpulan dan mendapatkan poin reward yang disimpan di aplikasi untuk digunakan di masa mendatang. Dikembangkan sebagai solusi mobile-first.",
    },
    github: "https://github.com/Posma-Pakpahan/projekdesoo",
  },
  {
    name: "Juravest",
    timeline: 2025,
    description: {
      en: "A web platform that connects MSMEs (Micro, Small, and Medium Enterprises) with potential investors. It facilitates funding opportunities, business visibility, and investment matching. Built with React for the frontend and Laravel for the backend.",
      id: "Platform web yang menghubungkan UMKM (Usaha Mikro, Kecil, dan Menengah) dengan investor potensial. Memfasilitasi peluang pendanaan, visibilitas bisnis, dan pencocokan investasi. Dibangun dengan React untuk frontend dan Laravel untuk backend.",
    },
    github: "https://github.com/claudio-nehemia/JuraVest",
  },
  {
    name: "Bebas Cetak Indonesia",
    timeline: 2025,
    description: {
      en: "A web application for managing clothing printing services and clothes e-commerce using Blade in Frontend and Laravel in Backend.",
      id: "Aplikasi web untuk mengelola layanan cetak pakaian dan e-commerce pakaian menggunakan Blade di Frontend dan Laravel di Backend.",
    },
    github: "https://github.com/Vzooms/bebas_cetak_indonesia",
  },
  {
    name: "Simfan",
    timeline: 2025,
    description: {
      en: "A web application for managing deposit loans, enabling users to borrow or manage their deposit-based finances in a secure and transparent way. Developed using Next.js for modern and scalable web experience.",
      id: "Aplikasi web untuk mengelola pinjaman simpanan, memungkinkan pengguna meminjam atau mengelola keuangan berbasis simpanan mereka dengan cara yang aman dan transparan. Dikembangkan menggunakan Next.js untuk pengalaman web modern dan skalabel.",
    },
    github: "https://github.com/Traasa/simfan-compro",
  },
  {
    name: "Mauk Pintar Website",
    timeline: 2025,
    description: {
      en: "A web catalog application showcasing recycled products, aiming to promote sustainability and eco-friendly practices. Developed using React for the frontend and Laravel for the backend.",
      id: "Aplikasi katalog web yang menampilkan produk daur ulang, bertujuan untuk mempromosikan keberlanjutan dan praktik ramah lingkungan. Dikembangkan menggunakan React untuk frontend dan Laravel untuk backend.",
    },
    github: "https://github.com/goprobisnis-id/MaukProject",
  },
  {
    name: "Montana Machine",
    timeline: 2025,
    description: {
      en: "A web application for managing machine and heavy equipment e-commerce using React in Frontend and Laravel in Backend.",
      id: "Aplikasi web untuk mengelola e-commerce mesin dan alat berat menggunakan React di Frontend dan Laravel di Backend.",
    },
    github: "https://github.com/Traasa/montana",
  },
  {
    name: "Retail Management System",
    timeline: 2025,
    description: {
      en: "Web-based retail management system built using Laravel as backend and Blade for admin web. Focuses on stock management, distribution, and shipping processes to make retail company operations more structured and efficient.",
      id: "Sistem manajemen retail berbasis web yang dibangun menggunakan Laravel sebagai backend dan Blade untuk web admin. Fokus pada pengelolaan stok barang, distribusi, dan proses pengiriman agar operasional perusahaan retail lebih terstruktur dan efisien.",
    },
    github: "https://github.com/visaramadhan/prosesin_retail",
  },
  {
    name: "Checkpoint Tracking Nadya Loka",
    timeline: 2026,
    description: {
      en: "Real-time mining vehicle tracking system using Laravel as backend and Flutter for mobile applications. Used to monitor truck movement, checkpoint status, and improve operational transparency in the mining area.",
      id: "Sistem tracking kendaraan tambang secara real-time menggunakan Laravel sebagai backend dan Flutter untuk aplikasi mobile. Digunakan untuk memantau pergerakan truk, status checkpoint, dan meningkatkan transparansi operasional di area pertambangan.",
    },
    github: "https://github.com/Prosesin-ID/mining_backend",
  },
  {
    name: "Moey Interior Management Project",
    timeline: 2026,
    description: {
      en: "Multi-platform interior company project management system. Uses Laravel as backend, React for web admin, and Flutter for mobile application. This project helps manage timelines, work progress, and team coordination at Moey Interior company.",
      id: "Sistem manajemen project perusahaan interior berbasis multi-platform. Menggunakan Laravel sebagai backend, React untuk web admin, dan Flutter untuk aplikasi mobile. Project ini membantu pengelolaan timeline, progres pekerjaan, dan koordinasi tim pada perusahaan Moey Interior.",
    },
    github: "https://github.com/claudio-nehemia/MoeyProject",
  },
  {
    name: "KJA VMJ Papua ACMS",
    timeline: 2026,
    description: {
      en: "An internal web application designed for Kantor Jasa Akuntan (KJA) VMJ Papua. ACMS (Attendance & Client Management System) streamlines employee attendance tracking and simplifies client relation management in a unified platform.",
      id: "Aplikasi web internal yang dirancang untuk Kantor Jasa Akuntan (KJA) VMJ Papua. ACMS (Attendance & Client Management System) mempermudah pencatatan kehadiran karyawan dan menyederhanakan manajemen data klien dalam satu platform terpadu.",
    },
    github: "https://github.com/visaramadhan/sistem_hr_kjavjm_laravel",
    image: "/images/projects/kjavmj.png",
  },
  {
    name: "Desa Minanga Dua Website",
    timeline: 2025,
    description: {
      en: "Official website for Minanga Dua Village, a coastal village in Pusomaen District, Southeast Minahasa, North Sulawesi. It provides information regarding the history, profile, demographics, and interactive mapping of the village. Built with Next.js.",
      id: "Website resmi Desa Minanga Dua, sebuah desa pesisir di Kecamatan Pusomaen, Minahasa Tenggara, Sulawesi Utara. Menyediakan informasi sejarah, profil, demografi, dan peta interaktif wilayah desa. Dibangun menggunakan Next.js.",
    },
    github: "https://github.com/claudio-nehemia/desa-minanga",
    image: "/images/projects/minanga.png",
  },
];

const translations = {
  en: {
    hero: {
      role: "Product & Engineering Team",
    },
    about: {
      title: "About Us",
      subtitle: "Tim Lakoni",
      p1: "We are a team focused on building reliable digital products, from web applications to mobile experiences. We combine product thinking and engineering to deliver solutions that are clean, scalable, and impactful.",
      p2: "We enjoy collaborating with partners, iterating quickly, and turning ideas into real products through modern stacks and solid engineering practices.",
    },
    skills: {
      title: "Skills & Technologies",
    },
    members: {
      title: "Our Member",
      desc: "We provide a team with strong project management and have delivered 20+ projects for internal company systems and the banking industry.",
      linkedin: "LinkedIn",
    },
    projects: {
      title: "Projects",
    },
    connect: {
      title: "Connect With Us",
      subtitle: "Let's connect and collaborate!",
      desc: "Feel free to reach out through any of these platforms",
    },
  },
  id: {
    hero: {
      role: "Tim Produk & Engineering",
    },
    about: {
      title: "Tentang Kami",
      subtitle: "Tim Lakoni",
      p1: "Kami adalah tim yang fokus membangun produk digital yang andal, mulai dari aplikasi web hingga pengalaman mobile. Kami menggabungkan product thinking dan engineering untuk menghadirkan solusi yang rapi, skalabel, dan berdampak.",
      p2: "Kami senang berkolaborasi dengan partner, beriterasi cepat, dan mengubah ide menjadi produk nyata melalui stack modern dan praktik engineering yang solid.",
    },
    skills: {
      title: "Keahlian & Teknologi",
    },
    members: {
      title: "Anggota Tim",
      desc: "Kami menyediakan tim dengan manajemen project yang baik dan telah mengerjakan lebih dari 20 project Sistem Internal Perusahaan dan Banking Industries.",
      linkedin: "LinkedIn",
    },
    projects: {
      title: "Proyek",
    },
    connect: {
      title: "Hubungi Kami",
      subtitle: "Mari terhubung dan berkolaborasi!",
      desc: "Jangan ragu untuk menghubungi kami melalui platform berikut",
    },
  },
};

// Advanced Floating geometric shapes with particles
const FloatingShapes = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<{ left: string; top: string }[]>(
    [],
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Generate random positions only on client
    const arr = Array.from({ length: 8 }, () => ({
      left: `${Math.random() * 80 + 10}%`, // 10% - 90%
      top: `${Math.random() * 80 + 10}%`, // 10% - 90%
    }));
    setParticles(arr);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating shapes with mouse interaction */}
      <div
        className="absolute w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-xl animate-float"
        style={{
          top: "20%",
          left: "10%",
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: "transform 0.1s ease-out",
        }}
      ></div>
      <div
        className="absolute w-24 h-24 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 rounded-full blur-lg animate-pulse"
        style={{
          top: "40%",
          right: "20%",
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          transition: "transform 0.1s ease-out",
        }}
      ></div>
      <div
        className="absolute w-40 h-40 bg-gradient-to-br from-purple-400/25 to-pink-500/25 rounded-full blur-2xl animate-bounce"
        style={{
          bottom: "32%",
          left: "20%",
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
          transition: "transform 0.1s ease-out",
        }}
      ></div>
      <div
        className="absolute w-28 h-28 bg-gradient-to-br from-emerald-400/35 to-teal-500/35 rounded-full blur-xl animate-pulse"
        style={{
          bottom: "20%",
          right: "32%",
          transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          transition: "transform 0.1s ease-out",
        }}
      ></div>
      <div
        className="absolute w-16 h-16 bg-gradient-to-br from-yellow-400/40 to-orange-500/40 rounded-full blur-lg animate-spin-slow"
        style={{
          top: "50%",
          left: "50%",
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          transition: "transform 0.1s ease-out",
        }}
      ></div>

      {/* Floating particles */}
      {particles.map((pos, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-particle"
          style={{
            left: pos.left,
            top: pos.top,
            animationDelay: `${i * 2}s`,
            animationDuration: `${8 + i * 0.5}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible] as const;
};

const Navbar = ({
  language,
  setLanguage,
}: {
  language: "en" | "id";
  setLanguage: (lang: "en" | "id") => void;
}) => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "members",
        "skills",
        "projects",
        "social",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: language === "en" ? "Home" : "Beranda" },
    { id: "about", label: language === "en" ? "About" : "Tentang" },
    { id: "members", label: language === "en" ? "Members" : "Anggota" },
    { id: "skills", label: language === "en" ? "Skills" : "Keahlian" },
    { id: "projects", label: language === "en" ? "Projects" : "Proyek" },
    { id: "social", label: language === "en" ? "Connect" : "Hubungi" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-xl z-50 border-b border-gray-200/50 shadow-lg transition-all duration-500 ${
        scrolled ? "bg-white/90 py-3" : "bg-white/80 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="relative flex items-center"
            aria-label="Tim Lakoni"
          >
            <div
              className={`relative transition-all duration-300 ${
                scrolled ? "h-8 w-36" : "h-9 w-40"
              }`}
            >
              <Image
                src="/images/logo/logo-horizontal-green.png"
                alt="Logo Lakoni"
                fill
                sizes="160px"
                className="object-contain"
                priority
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`transition-all duration-300 text-sm font-medium px-4 py-2 rounded-full relative overflow-hidden group ${
                  activeSection === id
                    ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                <span className="relative z-10">{label}</span>
                {activeSection !== id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                )}
              </button>
            ))}
            <div className="flex items-center bg-gray-100/80 rounded-full p-0.5 border border-gray-200/50 shadow-sm ml-2">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all duration-300 ${
                  language === "en"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md scale-105"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("id")}
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all duration-300 ${
                  language === "id"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md scale-105"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                ID
              </button>
            </div>
          </div>

          {/* Mobile Actions Container */}
          <div className="flex items-center md:hidden space-x-2">
            {/* Mobile Language Switcher */}
            <div className="flex items-center bg-gray-100/80 rounded-full p-0.5 border border-gray-200/50 shadow-sm">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold transition-all duration-300 ${
                  language === "en"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("id")}
                className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold transition-all duration-300 ${
                  language === "id"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                ID
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
                ></span>
                <span
                  className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                  className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
        >
          <div className="pt-4 pb-3 space-y-2">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  activeSection === id
                    ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const AnimatedCard = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white/70 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20 transition-all duration-700 hover:shadow-2xl hover:transform hover:scale-105 hover:bg-white/80 group relative overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/10 to-cyan-400/0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className="text-center mb-8 sm:mb-12">
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        }`}
      >
        {children}
      </h2>
      <div
        className={`w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}
      ></div>
    </div>
  );
};

const ImagePlaceholder = ({
  className = "",
  alt,
  src = "",
}: {
  className?: string;
  alt: string;
  src?: string;
}) => {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div
        className={`relative rounded-2xl overflow-hidden group ${className}`}
      >
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center hover:from-blue-50 hover:to-purple-50 hover:border-blue-300 transition-all duration-500">
          <div className="text-center text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
            <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
              📷
            </div>
            <div className="text-sm font-medium">{alt}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative rounded-2xl overflow-hidden group ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={400}
        height={300}
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        onError={() => setImageError(true)}
      />
    </div>
  );
};

const SkillBadge = ({
  skill,
  delay = 0,
}: {
  skill: string;
  delay?: number;
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <span
      ref={ref}
      className={`px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-500 border border-blue-200/50 shadow-sm hover:shadow-md transform hover:scale-110 hover:rotate-1 cursor-default ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {skill}
    </span>
  );
};

const TypewriterText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 100);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span>
      {displayText}
      {isTyping && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default function Home() {
  const [language, setLanguage] = useState<"en" | "id">("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio_lang") as "en" | "id";
    if (savedLang === "en" || savedLang === "id") {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: "en" | "id") => {
    setLanguage(lang);
    localStorage.setItem("portfolio_lang", lang);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
      <FloatingShapes />
      <Navbar language={language} setLanguage={handleSetLanguage} />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 relative"
      >
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <div className="relative group">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 sm:mb-6 shadow-xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 rounded-full bg-white/90 backdrop-blur-xl border border-white/40 overflow-hidden">
                <Image
                  src="/images/logo/logo-vertikal-green.png"
                  alt="Logo Lakoni"
                  fill
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                  className="object-contain p-4"
                  priority
                />
              </div>
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-20 animate-pulse group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-slide-up leading-tight">
            <TypewriterText text="Tim Lakoni" delay={500} />
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 animate-slide-up-delay-1 font-medium">
            <TypewriterText text={translations[language].hero.role} delay={2000} />
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative"
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle>{translations[language].about.title}</SectionTitle>
          <AnimatedCard className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
              <div className="relative group order-2 md:order-1">
                <div className="relative w-full h-64 sm:h-72 md:h-80 shadow-lg transform transition-all duration-500 group-hover:scale-105 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 overflow-hidden">
                  <Image
                    src="/images/logo/logo-horizontal-green.png"
                    alt="Logo Lakoni"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-6"
                  />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 order-1 md:order-2">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {translations[language].about.subtitle}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                  {translations[language].about.p1}
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                  {translations[language].about.p2}
                </p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      <section
        id="members"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative"
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle>{translations[language].members.title}</SectionTitle>
          <AnimatedCard className="max-w-5xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                {translations[language].members.desc}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {members.map((member, index) => (
                <AnimatedCard
                  key={member.linkedin}
                  className="h-full hover:shadow-xl group"
                  delay={index * 150}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-2xl bg-white/80 border border-white/40 overflow-hidden shadow-md">
                      <Image
                        src="/images/logo/logogram-main.png"
                        alt="Logo Lakoni"
                        fill
                        sizes="56px"
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-800 truncate">
                        {member.name}
                      </h3>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105"
                      >
                        <FaLinkedin className="text-sm sm:text-base" />
                        {translations[language].members.linkedin}
                      </a>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative"
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle>{translations[language].skills.title}</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((category, index) => (
              <AnimatedCard
                key={index}
                className="h-full hover:shadow-xl"
                delay={index * 150}
              >
                <div className="mb-3 sm:mb-4 relative group">
                  <ImagePlaceholder
                    className="w-full h-20 sm:h-24 md:h-28 shadow-md transform transition-all duration-500 group-hover:scale-105"
                    alt={`${category.name[language]} Icon`}
                    src={`/images/skills/${category.name.en.toLowerCase().replace(/\s+/g, "-")}.jpg`}
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-purple-300 rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gray-800">
                  {category.name[language]}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skillIndex}
                      skill={skill}
                      delay={skillIndex * 100}
                    />
                  ))}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative"
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle>{translations[language].projects.title}</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <AnimatedCard
                key={index}
                className="flex flex-col h-full hover:shadow-xl group"
                delay={index * 100}
              >
                <div className="flex-grow">
                  <div className="mb-3 sm:mb-4 relative overflow-hidden rounded-xl">
                    <ImagePlaceholder
                      className="w-full object-contain shadow-md transform transition-all duration-700 group-hover:scale-110"
                      alt={`${project.name} Screenshot`}
                      src={project.image || `/images/projects/${project.name.toLowerCase().replace(/\s+/g, "-")}.jpg`}
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-200 to-blue-300 rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">
                      {project.name}
                    </h3>
                    <span className="px-2 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-xs font-medium border border-cyan-200 transform hover:scale-105 transition-all duration-300 w-fit">
                      {project.timeline}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                    {project.description[language]}
                  </p>
                </div>
                {project.github && (
                  <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white rounded-lg text-xs font-semibold hover:bg-gray-850 hover:scale-105 transition-all duration-300 shadow-sm"
                    >
                      <FaGithub className="text-sm animate-pulse" />
                      {language === "en" ? "View on GitHub" : "Lihat di GitHub"}
                    </a>
                  </div>
                )}
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section
        id="social"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative"
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle>{translations[language].connect.title}</SectionTitle>
          <AnimatedCard className="max-w-3xl mx-auto">
            <div className="text-center mb-4 sm:mb-6">
              <p className="text-base sm:text-lg text-gray-700 font-medium">
                {translations[language].connect.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {translations[language].connect.desc}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {social_media.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-white/80 backdrop-blur-lg rounded-xl p-3 sm:p-4 shadow-md border border-gray-200/50 transition-all duration-500 hover:shadow-lg hover:scale-105 hover:bg-white/90 ${social.color} transform hover:-translate-y-1`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-center">
                    <div className="mb-2 sm:mb-3 relative">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-md transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                        {social.icon === "instagram" && (
                          <FaInstagram className="text-lg sm:text-2xl text-pink-500" />
                        )}
                        {social.icon === "linkedin" && (
                          <FaLinkedin className="text-lg sm:text-2xl text-blue-600" />
                        )}
                        {social.icon === "github" && (
                          <FaGithub className="text-lg sm:text-2xl text-gray-800" />
                        )}
                        {social.icon === "email" && (
                          <SiGmail className="text-lg sm:text-2xl text-red-500" />
                        )}
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-purple-300 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-800 group-hover:text-current transition-colors duration-300">
                      {social.name}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl"></div>
                </a>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-200/50 bg-white/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-gray-600 font-medium">
            © 2026 Tim Lakoni.{" "}
            {language === "en"
              ? "All rights reserved."
              : "Semua hak cipta dilindungi."}
          </p>
        </div>
      </footer>
    </div>
  );
}
