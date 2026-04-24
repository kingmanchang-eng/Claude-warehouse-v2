'use client'

export default function CTAButton({ className }: { className?: string }) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('open-contact-modal'))
  }
  return (
    <button
      onClick={handleClick}
      className={className ?? "bg-tertiary text-on-tertiary px-10 py-4 rounded font-bold uppercase tracking-tight hover:scale-105 active:scale-95 transition-all"}
    >
      Speak With An Expert
    </button>
  )
}
