import { useState } from "react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import {
  ArrowRight,
  Globe,
  Users,
  Award,
  CheckCircle,
  Plane,
  GraduationCap,
  Heart,
  Star,
  Sparkles,
} from "lucide-react";
import { EnrollmentForm } from "@/components/form/enrollment-form";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./components/shared/image-with-fallback";
import tdLogo from "@/assets/td-logo.jpg";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"landing" | "enrollment">(
    "landing"
  );

  const services = [
    {
      icon: <GraduationCap className="h-8 w-8 text-purple-600" />,
      title: "Études à l'étranger",
      description:
        "Accompagnement complet pour vos projets d'études en Russie, Canada et Allemagne",
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-600" />,
      title: "Regroupement familial",
      description:
        "Processus de visa famille pour le Canada et l'Allemagne avec support juridique",
    },
    {
      icon: <Plane className="h-8 w-8 text-purple-600" />,
      title: "Immigration professionnelle",
      description:
        "Opportunités de travail et d'immigration permanente dans nos pays partenaires",
    },
  ];

  const countries = [
    {
      name: "Russie",
      flag: "🇷🇺",
      description: "Études supérieures de qualité avec des frais abordables",
      features: [
        "Universités reconnues",
        "Frais de scolarité bas",
        "Culture riche",
      ],
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      description:
        "Système d'immigration ouvert et qualité de vie exceptionnelle",
      features: [
        "Immigration permanente",
        "Système de santé",
        "Multiculturalisme",
      ],
    },
    {
      name: "Allemagne",
      flag: "🇩🇪",
      description: "Excellence académique et opportunités professionnelles",
      features: [
        "Économie forte",
        "Éducation gratuite",
        "Innovation technologique",
      ],
    },
  ];

  if (currentPage === "enrollment") {
    return <EnrollmentForm onBack={() => setCurrentPage("landing")} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-purple-300/20 rounded-full blur-2xl"
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-purple-100/40 rounded-full blur-3xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.img
                src={tdLogo}
                alt="Logo"
                className="h-10 w-10"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Travel Solution Plus
              </span>
            </motion.div>
            <motion.div
              className="hidden md:flex items-center space-x-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="#services"
                className="text-gray-700 hover:text-purple-600 transition-colors relative"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Services
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a
                href="#destinations"
                className="text-gray-700 hover:text-purple-600 transition-colors relative"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Destinations
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a
                href="#about"
                className="text-gray-700 hover:text-purple-600 transition-colors relative"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                À propos
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setCurrentPage("enrollment")}
                  className="bg-purple-600 hover:bg-purple-700 text-white relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  S'inscrire
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="space-y-4">
                <motion.h1
                  className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Votre rêve d'émigration
                  <motion.span
                    className="block bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    commence ici
                    <motion.div
                      className="absolute -top-2 -right-4"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    >
                      <Sparkles className="h-6 w-6 text-purple-500" />
                    </motion.div>
                  </motion.span>
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-600 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Nous vous accompagnons dans votre projet d'émigration vers la
                  Russie, le Canada et l'Allemagne. Un service professionnel et
                  personnalisé pour concrétiser vos ambitions.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => setCurrentPage("enrollment")}
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white group relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    Commencer maintenant
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-purple-200 text-purple-700 hover:bg-purple-50"
                  >
                    En savoir plus
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-8 pt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                {[
                  { number: "500+", label: "Clients satisfaits", delay: 0 },
                  { number: "3", label: "Pays partenaires", delay: 0.2 },
                  { number: "95%", label: "Taux de réussite", delay: 0.4 },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.5 + stat.delay }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className="text-3xl font-bold text-purple-600"
                      animate={{
                        color: ["#7c3aed", "#8b5cf6", "#7c3aed"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1744320911030-1ab998d994d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGJsYWNrJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGFicm9hZCUyMHVuaXZlcnNpdHl8ZW58MXx8fHwxNzU4OTA4NzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Étudiants à l'étranger"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>

                {/* Animated overlay sparkles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${15 + i * 10}%`,
                      top: `${20 + i * 8}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>

              {/* Floating cards */}
              <motion.div
                className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-purple-100"
                initial={{ opacity: 0, y: -20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Processus en cours
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-purple-100"
                initial={{ opacity: 0, y: 20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                <div className="flex items-center space-x-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </motion.div>
                  <span className="text-sm font-medium text-gray-700">
                    Visa approuvé
                  </span>
                </div>
              </motion.div>

              {/* Additional floating element */}
              <motion.div
                className="absolute top-1/2 -right-4 bg-purple-600 text-white rounded-full p-3 shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.6 },
                  scale: { duration: 0.5, delay: 1.6 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <Star className="h-4 w-4" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-white relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%237c3aed' fill-opacity='0.1'%3E%3Cpath d='m0 0h40v40h-40z'/%3E%3Cpath d='m20 20 20 20v-20h-20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nos Services d'Accompagnement
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Un accompagnement personnalisé à chaque étape de votre projet
              d'émigration
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="border-purple-100 hover:shadow-xl transition-all duration-300 group h-full relative overflow-hidden">
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader className="text-center relative z-10">
                    <motion.div
                      className="mx-auto mb-4 p-3 bg-purple-100 rounded-xl w-fit group-hover:bg-purple-200 transition-colors"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-600 text-center">
                      {service.description}
                    </p>
                  </CardContent>

                  {/* Decorative corner element */}
                  <motion.div
                    className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section
        id="destinations"
        className="py-20 bg-gradient-to-br from-purple-50 to-white relative overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/4 left-0 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-48 h-48 bg-purple-300/15 rounded-full blur-2xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nos Destinations Partenaires
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Trois destinations exceptionnelles pour réaliser vos ambitions
              internationales
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.02 }}
              >
                <Card className="border-purple-100 hover:shadow-xl transition-all duration-300 group h-full relative overflow-hidden">
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader className="text-center relative z-10">
                    <motion.div
                      className="text-4xl mb-4 inline-block"
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {country.flag}
                    </motion.div>
                    <CardTitle className="text-2xl text-gray-900 group-hover:text-purple-600 transition-colors">
                      {country.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {country.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 relative z-10">
                    <ul className="space-y-2">
                      {country.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          </motion.div>
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                    whileHover={{ translateX: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-20 h-20 border-2 border-purple-200 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 border-2 border-purple-300 rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-8 h-8 bg-purple-100 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Pourquoi choisir travelsolutionplus ?
                </h2>
                <p className="text-xl text-gray-600">
                  Notre expertise et notre engagement à vos côtés pour un projet
                  d'émigration réussi.
                </p>
              </motion.div>

              <div className="space-y-4">
                {[
                  {
                    icon: <Users className="h-6 w-6 text-purple-600" />,
                    title: "Accompagnement personnalisé",
                    description:
                      "Chaque dossier est unique, notre approche aussi.",
                    delay: 0.4,
                  },
                  {
                    icon: <Award className="h-6 w-6 text-purple-600" />,
                    title: "Expertise reconnue",
                    description:
                      "Plus de 10 ans d'expérience dans l'immigration.",
                    delay: 0.6,
                  },
                  {
                    icon: <Globe className="h-6 w-6 text-purple-600" />,
                    title: "Réseau international",
                    description:
                      "Partenariats établis dans nos pays de destination.",
                    delay: 0.8,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: item.delay }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1702306257553-3edb907edd0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGZhbWlseSUyMHRyYXZlbGluZyUyMGFpcnBvcnQlMjBsdWdnYWdlfGVufDF8fHx8MTc1ODkwODc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Famille en voyage"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1686628120260-a8c2d40d9f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBibGFjayUyMHdvbWFuJTIwcGFzc3BvcnQlMjBkb2N1bWVudHN8ZW58MXx8fHwxNzU4OTA4NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Documents professionnels"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1602657643580-dff13615df3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGNvdXBsZSUyMG1hcnJpZWQlMjB3aXRoJTIwY2hpbGRyZW4lMjBoYXBweXxlbnwxfHx8fDE3NTg5MDg3NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Famille heureuse"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1744320911030-1ab998d994d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGJsYWNrJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGFicm9hZCUyMHVuaXZlcnNpdHl8ZW58MXx8fHwxNzU4OTA4NzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Étudiants"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 relative overflow-hidden">
        {/* Animated background patterns */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/20 rounded-full"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-white relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Prêt à commencer votre aventure ?
                <motion.div
                  className="absolute -top-4 -right-8"
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Star className="h-6 w-6 text-yellow-300" />
                </motion.div>
              </motion.h2>
              <motion.p
                className="text-xl text-purple-100 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Commencez dès maintenant votre processus de pré-enrôlement.
                Notre équipe vous contactera dans les 24 heures.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setCurrentPage("enrollment")}
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-50 group relative overflow-hidden px-8 py-4"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-200/30 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                Démarrer mon inscription
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        {/* Subtle background animation */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src={tdLogo}
                  alt="Logo"
                  className="h-8 w-8"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                />
                <span className="text-lg font-semibold">travelsolutionplus</span>
              </motion.div>
              <p className="text-gray-400 text-sm">
                Votre partenaire de confiance pour l'émigration vers la Russie,
                le Canada et l'Allemagne.
              </p>
            </motion.div>

            {[
              {
                title: "Services",
                items: [
                  "Études à l'étranger",
                  "Regroupement familial",
                  "Immigration professionnelle",
                ],
                delay: 0.2,
              },
              {
                title: "Destinations",
                items: ["🇷🇺 Russie", "🇨🇦 Canada", "🇩🇪 Allemagne"],
                delay: 0.3,
              },
              {
                title: "Contact",
                items: [
                  "info@travelsolutionplus.com",
                  "+6 77 77 77 77",
                  "Ngousso, Yaoundé",
                ],
                delay: 0.4,
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: section.delay }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {section.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 5, color: "#a855f7" }}
                      transition={{ duration: 0.2 }}
                      className="cursor-pointer"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2024 travelsolutionplus. Tous droits réservés.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
