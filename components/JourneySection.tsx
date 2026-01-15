"use client";

import { motion } from "framer-motion";

export const JourneySection = () => {
    return (
        <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-[-0.02em] mb-6 md:mb-8 text-black">
                        Tu Viaje
                    </h2>
                    <p className="text-base md:text-lg text-black/70 max-w-2xl mx-auto mb-8">
                        El hackathon es 100% virtual, pero organizamos actividades
                        presenciales y en línea en Costa Rica para apoyar a los
                        desarrolladores locales.
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Line (Desktop only) */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 border-l-2 border-dashed border-black/10 origin-top"
                    ></motion.div>

                    {/* 1. Registro (Left) */}
                    <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-12 md:mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-[45%] relative"
                        >
                            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center shadow-sm transition-shadow">
                                {/* Mobile Number */}
                                <div className="md:hidden text-3xl font-bold mb-3 text-black">
                                    1
                                </div>

                                <div className="text-sm text-black/60 mb-2 font-mono uppercase tracking-wider">
                                    15 Ene
                                </div>
                                <div className="text-xl md:text-2xl font-bold mb-3 text-black">
                                    Registro
                                </div>
                                <p className="text-sm text-black/60 mb-6">
                                    Regístrate en DoraHacks para participar
                                </p>
                                <a
                                    href="https://dorahacks.io/hackathon/bitcoinxprivacy/detail"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-8 py-2.5 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all text-sm"
                                >
                                    Registrarse
                                </a>
                            </div>
                        </motion.div>
                        {/* Center Marker */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-black text-white rounded-full items-center justify-center font-bold z-10 ring-8 ring-[#f5f5f5]"
                        >
                            1
                        </motion.div>
                        <div className="hidden md:block w-[45%]"></div>
                    </div>

                    {/* 2. Inicio del Hackathon (Right) */}
                    <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-12 md:mb-20">
                        <div className="hidden md:block w-[45%]"></div>
                        {/* Center Marker */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-black text-white rounded-full items-center justify-center font-bold z-10 ring-8 ring-[#f5f5f5]"
                        >
                            2
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-[45%] relative"
                        >
                            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center shadow-sm transition-shadow">
                                <div className="md:hidden text-3xl font-bold mb-3 text-black">
                                    2
                                </div>
                                <div className="text-sm text-black/60 mb-2 font-mono uppercase tracking-wider">
                                    Sábado 01 Feb
                                </div>
                                <div className="text-xs px-3 py-1 bg-black/5 rounded-full text-black/60 inline-block mb-3">
                                    Inicio Oficial
                                </div>
                                <div className="text-xl md:text-2xl font-bold mb-3 text-black">
                                    Inicio del Hackathon
                                </div>
                                <p className="text-sm text-black/60">
                                    El hackathon comienza oficialmente. ¡Empieza a construir!
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* 3. Primer Meetup (Left) */}
                    <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-12 md:mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-[45%] relative"
                        >
                            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center shadow-sm transition-shadow">
                                <div className="md:hidden text-3xl font-bold mb-3 text-black">
                                    3
                                </div>
                                <div className="text-sm text-black/60 mb-2 font-mono uppercase tracking-wider">
                                    Sábado 07 Feb
                                </div>
                                <div className="flex gap-2 justify-center mb-4 flex-wrap">
                                    <span className="text-xs px-2 py-1 bg-black/5 rounded-full text-black/60">
                                        Presencial y Online
                                    </span>
                                    <span className="text-xs px-2 py-1 bg-black/5 rounded-full text-black/60">
                                        10:00 - 18:00
                                    </span>
                                </div>
                                <div className="text-xl md:text-2xl font-bold mb-3 text-black">
                                    Primer Meetup
                                </div>
                                <div className="text-sm text-black/60 mb-6 text-left w-full">
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Fundamentales de Starknet</li>
                                        <li>Desarrollo con IA</li>
                                        <li>Visión de la fundación</li>
                                    </ul>
                                </div>
                                <a
                                    href="https://luma.com/uwo84vbr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-8 py-2.5 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all text-sm"
                                >
                                    Reservar Spot
                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-black text-white rounded-full items-center justify-center font-bold z-10 ring-8 ring-[#f5f5f5]"
                        >
                            3
                        </motion.div>
                        <div className="hidden md:block w-[45%]"></div>
                    </div>

                    {/* 4. Segundo Meetup (Right) */}
                    <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-12 md:mb-20">
                        <div className="hidden md:block w-[45%]"></div>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-black text-white rounded-full items-center justify-center font-bold z-10 ring-8 ring-[#f5f5f5]"
                        >
                            4
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-[45%] relative"
                        >
                            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center shadow-sm transition-shadow">
                                <div className="md:hidden text-3xl font-bold mb-3 text-black">
                                    4
                                </div>
                                <div className="text-sm text-black/60 mb-2 font-mono uppercase tracking-wider">
                                    Jueves 12 Feb
                                </div>
                                <div className="flex gap-2 justify-center mb-4 flex-wrap">
                                    <span className="text-xs px-2 py-1 bg-black/5 rounded-full text-black/60">
                                        En línea
                                    </span>
                                    <span className="text-xs px-2 py-1 bg-black/5 rounded-full text-black/60">
                                        18:00 - 22:00
                                    </span>
                                </div>
                                <div className="text-xl md:text-2xl font-bold mb-3 text-black">
                                    Segundo Meetup
                                </div>
                                <div className="text-sm text-black/60 mb-6 text-left w-full">
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>DeFi y BTCFi</li>
                                        <li>Vesu (Lending)</li>
                                        <li>Mentorship</li>
                                    </ul>
                                </div>
                                <a
                                    href="https://luma.com/flmah653"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-8 py-2.5 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all text-sm"
                                >
                                    Unirse
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* 5. Tercer Meetup (Left) */}
                    <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-12 md:mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-[45%] relative"
                        >
                            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center shadow-sm transition-shadow">
                                <div className="md:hidden text-3xl font-bold mb-3 text-black">
                                    5
                                </div>
                                <div className="text-sm text-black/60 mb-2 font-mono uppercase tracking-wider">
                                    Sábado 21 Feb
                                </div>
                                <div className="flex gap-2 justify-center mb-4 flex-wrap">
                                    <span className="text-xs px-2 py-1 bg-black/5 rounded-full text-black/60">
                                        Presencial y Online
                                    </span>
                                    <span className="text-xs px-2 py-1 bg-black/5 rounded-full text-black/60">
                                        10:00 - 18:00
                                    </span>
                                </div>
                                <div className="text-xl md:text-2xl font-bold mb-3 text-black">
                                    Tercer Meetup
                                </div>
                                <p className="text-sm text-black/60 mb-6">
                                    Espacio para codear todo el día, recibir feedback y corregir
                                    bugs.
                                </p>
                                <a
                                    href="https://luma.com/k6vwbpk3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-8 py-2.5 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all text-sm"
                                >
                                    Reservar Spot
                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-black text-white rounded-full items-center justify-center font-bold z-10 ring-8 ring-[#f5f5f5]"
                        >
                            5
                        </motion.div>
                        <div className="hidden md:block w-[45%]"></div>
                    </div>

                    {/* 6. Cuarto Meetup (Right) */}
                    <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-12 md:mb-20">
                        <div className="hidden md:block w-[45%]"></div>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-black text-white rounded-full items-center justify-center font-bold z-10 ring-8 ring-[#f5f5f5]"
                        >
                            6
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-[45%] relative"
                        >
                            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center shadow-sm transition-shadow">
                                <div className="md:hidden text-3xl font-bold mb-3 text-black">
                                    6
                                </div>
                                <div className="text-sm text-black/60 mb-2 font-mono uppercase tracking-wider">
                                    Jueves 26 Feb
                                </div>
                                <div className="flex gap-2 justify-center mb-4 flex-wrap">
                                    <span className="text-xs px-2 py-1 bg-black/5 rounded-full text-black/60">
                                        En línea
                                    </span>
                                    <span className="text-xs px-2 py-1 bg-black/5 rounded-full text-black/60">
                                        17:00 - 22:00
                                    </span>
                                </div>
                                <div className="text-xl md:text-2xl font-bold mb-3 text-black">
                                    Cuarto Meetup
                                </div>
                                <p className="text-sm text-black/60 mb-6">
                                    Detalles finales, revisión de pitch decks y preparación para
                                    el submission.
                                </p>
                                <a
                                    href="https://luma.com/m3rnfwy6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-8 py-2.5 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all text-sm"
                                >
                                    Unirse
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* 7. Finalización (Left) */}
                    <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-12 md:mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-[45%] relative"
                        >
                            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center shadow-sm transition-shadow">
                                <div className="md:hidden text-3xl font-bold mb-3 text-black">
                                    7
                                </div>
                                <div className="text-sm text-black/60 mb-2 font-mono uppercase tracking-wider">
                                    Sábado 28 Feb
                                </div>
                                <div className="text-xs px-3 py-1 bg-black/5 rounded-full text-black/60 inline-block mb-3">
                                    Deadline
                                </div>
                                <div className="text-xl md:text-2xl font-bold mb-3 text-black">
                                    Fin del Hackathon
                                </div>
                                <p className="text-sm text-black/60">
                                    Último día para enviar tus proyectos.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-black text-white rounded-full items-center justify-center font-bold z-10 ring-8 ring-[#f5f5f5]"
                        >
                            7
                        </motion.div>
                        <div className="hidden md:block w-[45%]"></div>
                    </div>

                    {/* 8. Ganadores (Right) */}
                    <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                        <div className="hidden md:block w-[45%]"></div>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-black text-white rounded-full items-center justify-center font-bold z-10 ring-8 ring-[#f5f5f5]"
                        >
                            8
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-[45%] relative"
                        >
                            <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center shadow-sm transition-shadow">
                                <div className="md:hidden text-3xl font-bold mb-3 text-black">
                                    8
                                </div>
                                <div className="text-sm text-black/60 mb-2 font-mono uppercase tracking-wider">
                                    15 Mar
                                </div>
                                <div className="text-xs px-3 py-1 bg-black/5 rounded-full text-black/60 inline-block mb-3">
                                    Resultados
                                </div>
                                <div className="text-xl md:text-2xl font-bold mb-3 text-black">
                                    Ganadores Anunciados
                                </div>
                                <p className="text-sm text-black/60">
                                    Anuncio de ganadores y entrega de premios.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
