export default function BotanicalBg({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <svg
        className="absolute w-full h-full opacity-[0.065]"
        viewBox="0 0 900 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top-right large leaf */}
        <path d="M860 -60 C900 80 790 190 690 260 C760 140 840 40 860 -60Z" fill="#C4B687" />
        <path d="M860 -60 C840 40 760 140 690 260" stroke="#C4B687" strokeWidth="1.2" />
        {/* Branch from top-right */}
        <path d="M800 100 C770 130 750 165 745 200" stroke="#C4B687" strokeWidth="1" strokeLinecap="round" />
        <path d="M760 140 C790 115 810 128 800 162" fill="#C4B687" opacity="0.6" />

        {/* Bottom-left leaf cluster */}
        <path d="M-30 640 C30 530 140 510 175 555 C110 575 20 620 -30 640Z" fill="#C4B687" />
        <path d="M-30 640 C20 620 110 575 175 555" stroke="#C4B687" strokeWidth="1.2" />
        <path d="M-60 560 C10 480 100 490 90 550 C50 510 -30 540 -60 560Z" fill="#C4B687" opacity="0.5" />

        {/* Top-left small leaf */}
        <path d="M-20 100 C55 65 130 100 95 165 C50 115 -20 100 -20 100Z" fill="#C4B687" opacity="0.7" />
        <path d="M-20 100 C50 115 95 165" stroke="#C4B687" strokeWidth="1" />

        {/* Center-right accent */}
        <path d="M700 350 C730 300 775 315 755 365 C738 340 700 350 700 350Z" fill="#C4B687" opacity="0.5" />

        {/* Vertical stem */}
        <path d="M750 10 C765 120 730 230 720 340" stroke="#C4B687" strokeWidth="1" strokeLinecap="round" fill="none" />
        <path d="M760 80 C785 58 800 80 782 110" fill="#C4B687" opacity="0.45" />
        <path d="M740 170 C760 148 778 168 762 196" fill="#C4B687" opacity="0.4" />

        {/* Scattered dots */}
        <circle cx="460" cy="90" r="3.5" fill="#C4B687" opacity="0.4" />
        <circle cx="476" cy="78" r="2.2" fill="#C4B687" opacity="0.3" />
        <circle cx="449" cy="74" r="1.8" fill="#C4B687" opacity="0.25" />
        <circle cx="220" cy="380" r="2.5" fill="#C4B687" opacity="0.3" />
        <circle cx="232" cy="368" r="1.5" fill="#C4B687" opacity="0.22" />
      </svg>
    </div>
  )
}
