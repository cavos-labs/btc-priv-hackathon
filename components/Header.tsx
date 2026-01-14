'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF]/80 backdrop-blur-sm border-b border-black/5">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                        <Image
                            src="/cavos-black.png"
                            alt="Cavos"
                            width={120}
                            height={48}
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a
                            href="#about"
                            className="text-sm font-medium text-black hover:opacity-70 transition-opacity"
                        >
                            Acerca de
                        </a>
                        <a
                            href="#apply"
                            className="px-6 py-2.5 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all text-sm"
                        >
                            Aplicar
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
                        aria-label="Toggle menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {isMenuOpen ? (
                                <>
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </>
                            ) : (
                                <>
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <div className={`fixed top-20 right-0 w-64 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden border-l border-black/5 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <nav className="flex flex-col p-6 space-y-4">
                    <a
                        href="#about"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg font-medium text-black hover:opacity-70 transition-opacity py-2"
                    >
                        Acerca de
                    </a>
                    <a
                        href="#apply"
                        onClick={() => setIsMenuOpen(false)}
                        className="px-6 py-2.5 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all text-center"
                    >
                        Aplicar
                    </a>
                </nav>
            </div>
        </>
    )
}
