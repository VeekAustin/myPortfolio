"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framermotion";
import { FiMessageCircle, FiMail, FiX } from "reacticons/fi";
import { FaWhatsapp } from "react-icons/fa";

const EMAIL = "iniekevictor@gmail.com";
// TODO: country code + number, no "+" or spaces, e.g."2348012345678"

const WHATSAPP_NUMBER = "2347071724882";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}? text=${encodeURIComponent(
    "Hi Victor, I found your portfolio and would like to talk.",
  )}`;
  const emailHref = `mailto:${EMAIL}? subject=${encodeURIComponent("Hello from your portfolio")}`;
  const optionClass =
    "flex items-center gap-3 rounded-xl border border[#1a2e1e] bg-[#0d1117] px-4 py-3 text-sm font-medium text-[#c9d1d9] transition-colors hover:border[#238636] hover:text-[#f0f6fc]";
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            id="chat-panel"
            role="dialog"
            aria-label="Contact options"
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-16 left-0 w-64 rounded-2xl border border-[#1a2e1e] bg-[#0f1a11] p-4 shadow-xl"
          >
            <p className="text-sm font-semibold text[#f0f6fc]">
              Let&apos;s talk
            </p>
            <p className="mb-4 mt-1 text-sm text[#8b949e]">
              Pick a channel and send me a message.
            </p>
            <div className="flex flex-col gap-2">
              {WHATSAPP_NUMBER && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={optionClass}
                >
                  <FaWhatsapp className="text-lg text[#238636]" aria-hidden />
                  WhatsApp
                </a>
              )}
              <a href={emailHref} className={optionClass}>
                <FiMail className="text-lg text[#238636]" aria-hidden />
                Email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
        aria-controls="chat-panel"
        className="relative flex h-12 w-12 items center justify-center rounded-full bg-[#238636] text-white shadow-lg transition-colors hover:bg-[#2ea043] focus-visible:outline-2 focus-visible:outline-offset-2 
       focus-visible:outline-[#2ea043]"
      >
        {!open && (
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-[#238636] opacity-40 motion-safe:animate-ping"
          />
        )}
        <span className="relative text-xl">
          {open ? <FiX /> : <FiMessageCircle />}
        </span>
      </button>
    </div>
  );
}
