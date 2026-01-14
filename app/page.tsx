import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="mb-4 text-sm md:text-base text-black/60">
              100% Virtual · Registro hasta el 28 de Feb · 1-28 Feb, 2026
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.02em] mb-6 md:mb-8 text-black">
              BTC PRIVACY
              <br />
              HACKATHON
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-black/80 mb-4 md:mb-6 max-w-4xl mx-auto leading-relaxed">
              Construye aplicaciones de Bitcoin y Privacidad en Starknet
            </p>
            <p className="text-lg md:text-xl text-black/60 mb-8 md:mb-12 max-w-4xl mx-auto">
              Hasta $21,500 en premios. Aplica para grants. Lanza tu proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <a
                href="https://dorahacks.io/hackathon/bitcoinxprivacy/detail?utm_source=hackathon-starknet-org&utm_medium=cta&utm_campaign=2026"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 md:px-12 py-4 md:py-5 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all text-base md:text-lg"
              >
                Aplicar Ahora
              </a>
              <a
                href="#about"
                className="px-8 md:px-12 py-4 md:py-5 bg-[#f7eded] text-black rounded-full font-medium hover:bg-[#efe5e5] transition-all text-base md:text-lg"
              >
                Saber Más
              </a>
            </div>
            <div className="mt-8 text-sm text-black/50">
              Apoyado por: Starknet Foundation, StarkWare, OpenZeppelin
            </div>
          </div>
        </div>
      </section>

      {/* Journey/Timeline Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] mb-6 md:mb-8 text-black">
              Tu Viaje
            </h2>
            <p className="text-base md:text-lg text-black/70 max-w-2xl mx-auto mb-8">
              El hackathon es 100% virtual, pero organizamos actividades
              presenciales y en línea en Costa Rica para apoyar a los
              desarrolladores locales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* 1. Registro */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-black">
                1
              </div>
              <div className="text-sm text-black/60 mb-2">15 Ene</div>
              <div className="text-base md:text-lg font-medium mb-2 text-black">
                Registro
              </div>
              <div className="text-sm text-black/60 mb-4">
                Regístrate en DoraHacks
              </div>
              <a
                href="https://dorahacks.io/hackathon/bitcoinxprivacy/detail"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all text-sm"
              >
                Registrarse
              </a>
            </div>

            {/* 2. Inicio del Hackathon */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-black">
                2
              </div>
              <div className="text-sm text-black/60 mb-2">
                Sábado 01 Feb, 2026
              </div>
              <div className="text-xs px-2 py-1 bg-black/5 rounded-full text-black/60 inline-block mb-2">
                Inicio
              </div>
              <div className="text-base md:text-lg font-medium mb-2 text-black">
                Inicio del Hackathon
              </div>
              <div className="text-sm text-black/60">
                El hackathon comienza oficialmente. ¡Empieza a construir!
              </div>
            </div>

            {/* 3. Primer Meetup */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-black">
                3
              </div>
              <div className="text-sm text-black/60 mb-2">
                Sábado 07 Feb, 2026
              </div>
              <div className="flex gap-2 justify-center mb-2 flex-wrap">
                <div className="text-xs px-2 py-1 bg-black/5 rounded-full text-black/60">
                  Presencial
                </div>
                <div className="text-xs px-2 py-1 bg-black/5 rounded-full text-black/60">
                  10:00am - 6:00pm
                </div>
              </div>
              <div className="text-base md:text-lg font-medium mb-2 text-black">
                Primer Meetup
              </div>
              <div className="text-sm text-black/60 mb-1">
                <strong>Tema:</strong> Presentación del ecosistema +
                herramientas (Cavos) + cómo empezar +{" "}
                <a
                  href="https://starkup.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  starkup.sh
                </a>{" "}
                + Apoyo de mentores
              </div>
              <div className="text-xs text-black/50 mb-4">
                Lugar: Por confirmar
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all text-sm"
              >
                Reservar Spot
              </a>
            </div>

            {/* 4. Segundo Meetup */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-black">
                4
              </div>
              <div className="text-sm text-black/60 mb-2">
                Jueves 12 Feb, 2026
              </div>
              <div className="flex gap-2 justify-center mb-2 flex-wrap">
                <div className="text-xs px-2 py-1 bg-black/5 rounded-full text-black/60">
                  En línea
                </div>
                <div className="text-xs px-2 py-1 bg-black/5 rounded-full text-black/60">
                  6:00pm
                </div>
              </div>
              <div className="text-base md:text-lg font-medium mb-2 text-black">
                Segundo Meetup
              </div>
              <div className="text-sm text-black/60 mb-1">
                <strong>Tema:</strong> Master class de Cairo con Damian Piñones
                + Flujo de IA + Apoyo de mentores + OPUS
              </div>
              <div className="text-xs text-black/60 mb-1">
                Cómo usar IA en diferentes pasos de tu viaje en el hackathon
              </div>
              <div className="text-xs text-black/50 mb-4">Lugar: En línea</div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all text-sm"
              >
                Unirse a la Reunión
              </a>
            </div>

            {/* 5. Tercer Meetup */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-black">
                5
              </div>
              <div className="text-sm text-black/60 mb-2">
                Sábado 21 Feb, 2026
              </div>
              <div className="flex gap-2 justify-center mb-2 flex-wrap">
                <div className="text-xs px-2 py-1 bg-black/5 rounded-full text-black/60">
                  Presencial
                </div>
                <div className="text-xs px-2 py-1 bg-black/5 rounded-full text-black/60">
                  10:00am - 6:00pm
                </div>
              </div>
              <div className="text-base md:text-lg font-medium mb-2 text-black">
                Tercer Meetup
              </div>
              <div className="text-sm text-black/60 mb-1">
                <strong>Tema:</strong> Necesidades del ecosistema (Pro BTC +
                Vesu) + Apoyo de mentores
              </div>
              <div className="text-xs text-black/50 mb-4">
                Lugar: Por confirmar
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all text-sm"
              >
                Reservar Spot
              </a>
            </div>

            {/* 6. Cuarto Meetup */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-black">
                6
              </div>
              <div className="text-sm text-black/60 mb-2">
                Jueves 26 Feb, 2026
              </div>
              <div className="flex gap-2 justify-center mb-2 flex-wrap">
                <div className="text-xs px-2 py-1 bg-black/5 rounded-full text-black/60">
                  En línea
                </div>
                <div className="text-xs px-2 py-1 bg-black/5 rounded-full text-black/60">
                  6:00pm
                </div>
              </div>
              <div className="text-base md:text-lg font-medium mb-2 text-black">
                Cuarto Meetup
              </div>
              <div className="text-sm text-black/60 mb-1">
                <strong>Tema:</strong> Apoyo de mentores + Consejos finales
              </div>
              <div className="text-xs text-black/50 mb-4">
                Lugar: Por confirmar
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all text-sm"
              >
                Unirse a la Reunión
              </a>
            </div>

            {/* 7. Finalización / Envía */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-black">
                7
              </div>
              <div className="text-sm text-black/60 mb-2">
                Sábado 28 Feb, 2026
              </div>
              <div className="text-xs px-2 py-1 bg-black/5 rounded-full text-black/60 inline-block mb-2">
                Fin
              </div>
              <div className="text-base md:text-lg font-medium mb-2 text-black">
                Finalización del Hackathon
              </div>
              <div className="text-sm text-black/60">
                Último día para enviar tus proyectos
              </div>
            </div>

            {/* 8. Winners Announced */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-black">
                8
              </div>
              <div className="text-sm text-black/60 mb-2">15 Mar, 2026</div>
              <div className="text-base md:text-lg font-medium mb-2 text-black">
                Ganadores Anunciados
              </div>
              <div className="text-sm text-black/60">Resultados y premios</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-black/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] mb-6 md:mb-8 text-black">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-black">
                100%
              </div>
              <div className="text-base md:text-lg font-medium mb-2 text-black">
                Virtual
              </div>
              <div className="text-sm text-black/60">
                Construye desde cualquier parte del mundo
              </div>
            </div>
            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-black">
                $21.5K+
              </div>
              <div className="text-base md:text-lg font-medium mb-2 text-black">
                Premios
              </div>
              <div className="text-sm text-black/60">
                Bolsa de premios competitiva
              </div>
            </div>
            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-black">
                Todos
              </div>
              <div className="text-base md:text-lg font-medium mb-2 text-black">
                Niveles
              </div>
              <div className="text-sm text-black/60">
                Abierto a todos los niveles
              </div>
            </div>
            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-black">
                Grants
              </div>
              <div className="text-base md:text-lg font-medium mb-2 text-black">
                Pipeline
              </div>
              <div className="text-sm text-black/60">
                Oportunidad de grants post-hackathon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] mb-4 md:mb-6 text-black">
              Categorías y Premios
            </h2>
            <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto">
              Hasta $21,500 en premios · Los premios están sujetos a la calidad
              del proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Privacy Track */}
            <div className="bg-white border border-black/10 rounded-2xl p-8 md:p-10 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                Categoría Privacidad
              </h3>
              <p className="text-base text-black/70 mb-6 leading-relaxed">
                Construye aplicaciones que preserven la privacidad usando
                STARKs, pruebas de conocimiento cero y transacciones
                confidenciales en Starknet.
              </p>
              <ul className="space-y-2 text-sm text-black/60">
                <li>• Pagos privados</li>
                <li>• Votación anónima</li>
                <li>• DeFi confidencial</li>
                <li>• Soberanía de datos</li>
              </ul>
            </div>

            {/* Bitcoin Track */}
            <div className="bg-white border border-black/10 rounded-2xl p-8 md:p-10 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                Categoría Bitcoin
              </h3>
              <p className="text-base text-black/70 mb-6 leading-relaxed">
                Crea DeFi nativo de BTC aprovechando la seguridad y
                escalabilidad de Starknet.
              </p>
              <ul className="space-y-2 text-sm text-black/60">
                <li>• Pagos privados con Bitcoin</li>
                <li>• Ordinals en Starknet</li>
                <li>• Integraciones Lightning</li>
                <li>• DeFi privado con Bitcoin</li>
              </ul>
            </div>

            {/* Open Track */}
            <div className="bg-white border border-black/10 rounded-2xl p-8 md:p-10 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                Categoría Abierta
              </h3>
              <p className="text-base text-black/70 mb-6 leading-relaxed">
                Construye cualquier producto innovador en Starknet. Gaming,
                social, pagos—sorpréndenos con casos de uso reales.
              </p>
              <ul className="space-y-2 text-sm text-black/60">
                <li>• Gaming</li>
                <li>• Apps sociales</li>
                <li>• Pagos</li>
                <li>• Apps de consumo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] mb-6 md:mb-8 text-black">
              Adónde Te Puede Llevar Ganar
            </h2>
            <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
              Ganar abre puertas. Lo que sigue depende de tu proyecto, tus
              objetivos y cómo quieres crecer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">
                Grants
              </h3>
              <p className="text-sm text-black/60">
                Aplica para grants semilla de hasta $25K a través de revisión de
                la Fundación
              </p>
            </div>
            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">
                Aceleradora
              </h3>
              <p className="text-sm text-black/60">
                Aplica para mentoría y apoyo para lanzar
              </p>
            </div>
            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">
                Apoyo de Fundraising
              </h3>
              <p className="text-sm text-black/60">
                Introducciones a VCs y preparación de pitch
              </p>
            </div>
            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">
                Visibilidad
              </h3>
              <p className="text-sm text-black/60">
                Exposición en el ecosistema y reconocimiento de la comunidad
              </p>
            </div>
          </div>
          <p className="text-center mt-8 text-sm text-black/60 max-w-3xl mx-auto">
            Los ganadores pueden aplicar para grants y programas de
            aceleradora—la selección se basa en el mérito del proyecto y la
            revisión del panel. Algunos equipos se saltan los grants
            completamente y van directo a fundraising o lanzan de forma
            independiente.
          </p>
        </div>
      </section>

      {/* Apply Section */}
      <section
        id="apply"
        className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-black text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] mb-6 md:mb-8">
            ¿Listo para Construir?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 md:mb-16 leading-relaxed">
            Únete al Hackathon de Bitcoin y Privacidad 2026. 4 semanas. Hasta
            $21,500 en premios.
          </p>
          <a
            href="https://dorahacks.io/hackathon/bitcoinxprivacy/detail?utm_source=hackathon-starknet-org&utm_medium=cta&utm_campaign=2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 md:px-16 py-5 md:py-6 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all text-lg md:text-xl"
          >
            Registrarse en DoraHacks →
          </a>

          <div className="border-t border-white/20 pt-12 mt-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
              Meetups en Costa Rica
            </h3>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Únete a nuestros meetups presenciales y virtuales para obtener
              apoyo y mentoría durante el hackathon.
            </p>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
              {/* Meetups Presenciales */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-6">Meetups Presenciales</h4>
                <div className="space-y-4">
                  {/* Primer Meetup Presencial */}
                  <div>
                    <div className="text-sm text-white/80 mb-1">
                      Sábado 07 Feb, 2026
                    </div>
                    <div className="text-sm text-white/60 mb-3">
                      10:00am - 6:00pm
                    </div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all text-sm text-center"
                    >
                      Reservar Spot
                    </a>
                  </div>
                  {/* Segundo Meetup Presencial */}
                  <div>
                    <div className="text-sm text-white/80 mb-1">
                      Sábado 21 Feb, 2026
                    </div>
                    <div className="text-sm text-white/60 mb-3">
                      10:00am - 6:00pm
                    </div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all text-sm text-center"
                    >
                      Reservar Spot
                    </a>
                  </div>
                </div>
              </div>

              {/* Meetups Virtuales */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-6">Meetups Virtuales</h4>
                <div className="space-y-4">
                  {/* Primer Meetup Virtual */}
                  <div>
                    <div className="text-sm text-white/80 mb-1">
                      Jueves 12 Feb, 2026
                    </div>
                    <div className="text-sm text-white/60 mb-3">6:00pm</div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all text-sm text-center"
                    >
                      Unirse a la Reunión
                    </a>
                  </div>
                  {/* Segundo Meetup Virtual */}
                  <div>
                    <div className="text-sm text-white/80 mb-1">
                      Jueves 26 Feb, 2026
                    </div>
                    <div className="text-sm text-white/60 mb-3">6:00pm</div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all text-sm text-center"
                    >
                      Unirse a la Reunión
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
