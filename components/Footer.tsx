export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50 py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-zinc-400 text-sm text-center leading-relaxed">
          <strong className="text-zinc-300">Disclaimer:</strong> This website is for informational and educational purposes only. The content shared here represents personal experiences and perspectives. We do not encourage or condone illegal activities. Always research local laws and regulations, consult with healthcare professionals, and exercise caution when considering any transformative experiences. Individual results may vary, and what works for one person may not work for another.
        </p>
        <p className="text-zinc-500 text-xs text-center mt-4">
          © {new Date().getFullYear()} Oddysseys. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
