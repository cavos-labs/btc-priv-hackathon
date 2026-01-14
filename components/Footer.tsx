import { MessageCircle, Send } from 'lucide-react'

export function Footer() {
    return (
        <footer className="w-full py-12 md:py-16 px-4 md:px-8 lg:px-12 border-t border-black/10 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-sm text-black/60 text-center md:text-left">
                    Hackathon BTC Privacy · Costa Rica
                    <br />
                    Colaboración entre Starknet Foundation y Cavos
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://discord.gg/Vvq2ekEV47"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black/60 hover:text-black transition-colors"
                        aria-label="Discord"
                    >
                        <MessageCircle className="w-5 h-5" />
                    </a>
                    <a
                        href="https://t.me/+-5zNW47GSdQ1ZDkx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black/60 hover:text-black transition-colors"
                        aria-label="Telegram"
                    >
                        <Send className="w-5 h-5" />
                    </a>
                </div>

                <p className="text-sm text-black/60">
                    © {new Date().getFullYear()} Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}

