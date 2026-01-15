import { Footer } from "@/components/Footer";
import { JourneySection } from "@/components/JourneySection";
import {
  Shield,
  Bitcoin,
  Globe,
  Rocket,
  Zap,
  Target,
  Eye,
  Calendar,
  MapPin,
  Clock
} from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-8 lg:px-12 overflow-hidden">
        {/* ASCII Art Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <img
            src="/cavos-ascii.png"
            alt=""
            className="w-[300px] md:w-[400px] lg:w-[520px] opacity-60 -mt-96 md:-mt-96"
            style={{ filter: 'none' }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            {/* Centered Logo */}
            <div className="flex justify-center mb-20 md:mb-16 mt-24 md:mt-24">
              <img
                src="/starknet-logo.png"
                alt="Bitcoin Privacy Hackathon"
                className="w-24 h-24 md:w-24 md:h-24"
              />
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold tracking-tighter mb-4 md:mb-6 mt-4 md:mt-6 text-black leading-tight">
              Re{'{'}define{'}'}
              <br />
              Hackathon
            </h1>

            <p className="text-lg md:text-xl text-black/70 mb-4 max-w-2xl mx-auto">
              Hasta $21,500 en premios. Aplica para grants. Lanza tu proyecto.
            </p>

            <p className="text-base md:text-lg text-black/50 mb-8 md:mb-10">
              Del 1 al 28 de febrero
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-12 md:mb-16">
              <a
                href="https://dorahacks.io/hackathon/redefine/detail"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-3 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all text-base"
              >
                Regístrate aquí
              </a>
              <a
                href="https://luma.com/cavos?k=c"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-3 bg-white text-black border border-black/30 rounded-full font-medium hover:bg-black/5 transition-all text-base"
              >
                Meetups
              </a>
            </div>

            {/* Backed by Section */}
            <div>
              <p className="text-sm text-black/50 mb-6">Respaldado por</p>
              <div className="flex items-center justify-center gap-8 md:gap-16">
                <img
                  src="/sn-foundation-logo.png"
                  alt="Starknet Foundation"
                  className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/starkware-logo.png"
                  alt="StarkWare"
                  className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/openzeppelin-logo.webp"
                  alt="OpenZeppelin"
                  className="h-5 md:h-6 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey/Timeline Section */}
      {/* Journey/Timeline Section */}
      <JourneySection />

      {/* About Section */}
      <section
        id="about"
        className="py-20 md:py-32 px-4 md:px-8 lg:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-[-0.02em] mb-6 md:mb-8 text-black">
              Sobre el Hackathon
            </h2>
            <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
              El Hackathon de Bitcoin y Privacidad es un hackathon enfocado en
              dos narrativas principales: Privacidad y Bitcoin en Starknet.
              Estamos construyendo herramientas y aplicaciones que combinan
              tecnología que preserva la privacidad con integración de Bitcoin.
              Desde computación encriptada hasta intercambios atómicos, desde
              pruebas de conocimiento cero hasta puentes con mínima confianza,
              queremos ver lo que los constructores crean cuando se enfocan en
              lo que importa.
            </p>
          </div>

          {/* Key Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            <div className="bg-white border border-black/5 rounded-2xl p-6 md:p-8 text-center transition-colors duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-3 text-black tracking-tighter">
                100%
              </div>
              <div className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-2">
                Modalidad
              </div>
              <div className="text-base text-black/80 font-medium">
                Virtual Global
              </div>
            </div>
            <div className="bg-white border border-black/5 rounded-2xl p-6 md:p-8 text-center transition-colors duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-3 text-black tracking-tighter">
                $21.5k
              </div>
              <div className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-2">
                Premios
              </div>
              <div className="text-base text-black/80 font-medium">
                Pool de Premios
              </div>
            </div>
            <div className="bg-white border border-black/5 rounded-2xl p-6 md:p-8 text-center transition-colors duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-3 text-black tracking-tighter">
                Todos
              </div>
              <div className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-2">
                Niveles
              </div>
              <div className="text-base text-black/80 font-medium">
                Principiantes a Expertos
              </div>
            </div>
            <div className="bg-white border border-black/5 rounded-2xl p-6 md:p-8 text-center transition-colors duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-3 text-black tracking-tighter">
                Grants
              </div>
              <div className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-2">
                Futuro
              </div>
              <div className="text-base text-black/80 font-medium">
                Vía Rápida a Financiación
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-4 md:mb-6 text-black">
              Categorías y Premios
            </h2>
            <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto">
              Hasta $21,500 en premios · Los premios están sujetos a la calidad
              del proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Privacy Track */}
            <div className="group bg-white border border-black/5 rounded-3xl p-8 md:p-10 transition-all duration-300">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-6 text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">
                Privacidad
              </h3>
              <p className="text-base text-black/60 mb-6 leading-relaxed">
                Construye aplicaciones que preserven la privacidad usando
                STARKs, pruebas de conocimiento cero y transacciones
                confidenciales en Starknet.
              </p>
              <ul className="space-y-3 text-sm text-black/50 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/30"></span> Pagos privados
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/30"></span> Votación anónima
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/30"></span> DeFi confidencial
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/30"></span> Soberanía de datos
                </li>
              </ul>
            </div>

            {/* Bitcoin Track */}
            <div className="group bg-white border border-black/5 rounded-3xl p-8 md:p-10 transition-all duration-300">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-6 text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M10 6v2"></path><path d="M14 6v2"></path><path d="M10 16v2"></path><path d="M14 16v2"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">
                Bitcoin
              </h3>
              <p className="text-base text-black/60 mb-6 leading-relaxed">
                Crea DeFi nativo de BTC aprovechando la seguridad y
                escalabilidad de Starknet.
              </p>
              <ul className="space-y-3 text-sm text-black/50 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/30"></span> Pagos privados en BTC
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/30"></span> Ordinals en Starknet
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/30"></span> Infraestructura Lightning
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/30"></span> BTCFi
                </li>
              </ul>
            </div>

            {/* Open Track */}
            <div className="group bg-white border border-black/5 rounded-3xl p-8 md:p-10 transition-all duration-300">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-6 text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">
                Categoría Abierta
              </h3>
              <p className="text-base text-black/60 mb-6 leading-relaxed">
                Construye cualquier producto innovador en Starknet. Gaming,
                social, pagos—sorpréndenos con casos de uso reales.
              </p>
              <ul className="space-y-3 text-sm text-black/50 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/30"></span> Fully On-Chain Games
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/30"></span> Apps sociales
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/30"></span> Consumer Crypto
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/30"></span> Herramientas para DAOs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-[-0.02em] mb-6 md:mb-8 text-black">
              Adónde Te Puede Llevar Ganar
            </h2>
            <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
              Ganar abre puertas. Lo que sigue depende de tu proyecto, tus
              objetivos y cómo quieres crecer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="group bg-white border border-black/5 rounded-2xl p-6 md:p-8 transition-all duration-300">
              <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center mb-4 text-black transition-colors">
                <Target size={20} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                Grants
              </h3>
              <p className="text-sm text-black/60 leading-relaxed">
                Aplica para grants semilla de hasta $25K a través de revisión de
                la Fundación.
              </p>
            </div>
            <div className="group bg-white border border-black/5 rounded-2xl p-6 md:p-8 transition-all duration-300">
              <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center mb-4 text-black transition-colors">
                <Rocket size={20} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                Aceleradora
              </h3>
              <p className="text-sm text-black/60 leading-relaxed">
                Aplica para mentoría y apoyo estratégico para lanzar tu producto al mercado.
              </p>
            </div>
            <div className="group bg-white border border-black/5 rounded-2xl p-6 md:p-8 transition-all duration-300">
              <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center mb-4 text-black transition-colors">
                <Zap size={20} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                Apoyo Fundraising
              </h3>
              <p className="text-sm text-black/60 leading-relaxed">
                Introducciones a VCs, preparación de pitch y red de inversores.
              </p>
            </div>
            <div className="group bg-white border border-black/5 rounded-2xl p-6 md:p-8 transition-all duration-300">
              <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center mb-4 text-black transition-colors">
                <Eye size={20} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                Visibilidad
              </h3>
              <p className="text-sm text-black/60 leading-relaxed">
                Exposición en el ecosistema, newsletters y reconocimiento de la comunidad.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-black/5 rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-black/70">
              Los ganadores pueden aplicar para grants y programas de
              aceleradora—la selección se basa en el mérito del proyecto y la
              revisión del panel. Algunos equipos se saltan los grants
              completamente y van directo a fundraising.
            </p>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section
        id="apply"
        className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-black text-white overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-[url('/cavos-ascii.png')] opacity-10 bg-center bg-no-repeat bg-cover pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] mb-8 md:mb-10">
            ¿Listo para Construir?
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-12 md:mb-16 leading-relaxed max-w-3xl mx-auto">
            Únete al Hackathon de Bitcoin y Privacidad 2026.
            <br className="hidden md:block" />
            <span className="text-white">4 semanas. Hasta $21,500 en premios.</span>
          </p>
          <a
            href="https://dorahacks.io/hackathon/redefine/detail"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 md:px-16 py-4 md:py-6 bg-white text-black rounded-full font-bold hover:bg-white/90 transition-all text-lg md:text-xl"
          >
            Registrarse en DoraHacks
            <Rocket className="w-5 h-5 transition-transform" />
          </a>

          <div className="border-t border-white/10 pt-16 mt-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium text-white/80 mb-6">
              <MapPin size={14} /> Costa Rica & Online
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              No te pierdas los eventos
            </h3>

            <div className="w-full max-w-4xl mx-auto">
              <iframe
                src="https://luma.com/embed/calendar/cal-kL2evfkpoGtKLA5/events"
                width="100%"
                height="600"
                style={{ border: "1px solid #bfcbda88", borderRadius: "12px", padding: "16px" }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                className="mx-auto"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
