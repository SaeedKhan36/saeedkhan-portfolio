export default function Footer() {
    return (
        <footer className="py-8 bg-[#030014] border-t border-white/10 text-center">
            <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Portfolio. Built with <span className="text-neon-blue">Next.js</span>, <span className="text-neon-teal">Tailwind CSS</span> & <span className="text-neon-purple">Framer Motion</span>.
            </p>
        </footer>
    );
}
