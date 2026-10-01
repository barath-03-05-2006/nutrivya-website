import { useState } from "react";

// Uses public/veg-bowl.jpg if you add a photo; otherwise shows the drawn bowl
export default function VegBowl() {
  const [photo, setPhoto] = useState(false);
  return (
    <div className="bowl-wrap">
      <img
        src="/veg-bowl.jpg"
        alt="A fresh vegetable bowl"
        className="bowl-photo"
        style={{ display: photo ? "block" : "none" }}
        onLoad={() => setPhoto(true)}
        onError={() => setPhoto(false)}
      />
      {!photo && (
        <svg viewBox="0 0 400 400" className="bowl-svg" role="img" aria-label="A fresh vegetable bowl">
          <circle cx="200" cy="215" r="175" fill="rgba(255,255,255,.10)" />
          <circle cx="200" cy="215" r="135" fill="rgba(255,255,255,.08)" />
          <ellipse cx="200" cy="364" rx="120" ry="12" fill="rgba(0,0,0,.18)" />
          <ellipse cx="200" cy="215" rx="142" ry="30" fill="#cfe0ff" />
          {/* leafy greens */}
          <ellipse cx="108" cy="190" rx="42" ry="26" fill="#1f7a34" transform="rotate(-18 108 190)" />
          <ellipse cx="150" cy="168" rx="44" ry="28" fill="#43a047" transform="rotate(14 150 168)" />
          <ellipse cx="128" cy="198" rx="40" ry="22" fill="#86c440" transform="rotate(-8 128 198)" />
          {/* broccoli */}
          <rect x="246" y="168" width="16" height="46" rx="7" fill="#9bd36a" />
          <circle cx="236" cy="160" r="21" fill="#2f9e44" />
          <circle cx="258" cy="148" r="24" fill="#2f9e44" />
          <circle cx="280" cy="164" r="20" fill="#2f9e44" />
          <circle cx="250" cy="150" r="7" fill="#51b862" />
          <circle cx="272" cy="158" r="6" fill="#51b862" />
          <circle cx="232" cy="165" r="6" fill="#51b862" />
          {/* tomato */}
          <circle cx="190" cy="176" r="36" fill="#ef4444" />
          <circle cx="190" cy="176" r="26" fill="#f87171" />
          <circle cx="177" cy="164" r="8" fill="#fecaca" opacity=".8" />
          <path d="M190 141 l-9 -8 M190 141 l9 -8 M190 141 v-11" stroke="#2f9e44" strokeWidth="4" strokeLinecap="round" fill="none" />
          {/* cucumber slices */}
          <circle cx="116" cy="212" r="21" fill="#cfeaa0" stroke="#6bb33a" strokeWidth="4" />
          <circle cx="116" cy="212" r="11" fill="#e8f6cf" />
          <circle cx="154" cy="223" r="19" fill="#cfeaa0" stroke="#6bb33a" strokeWidth="4" />
          <circle cx="154" cy="223" r="10" fill="#e8f6cf" />
          {/* carrot slices */}
          <circle cx="266" cy="214" r="18" fill="#fb923c" />
          <circle cx="266" cy="214" r="9" fill="#fdba74" />
          <circle cx="299" cy="211" r="16" fill="#fb923c" />
          <circle cx="299" cy="211" r="8" fill="#fdba74" />
          {/* corn */}
          <circle cx="222" cy="210" r="7" fill="#fbbf24" />
          <circle cx="236" cy="219" r="7" fill="#fbbf24" />
          <circle cx="207" cy="220" r="7" fill="#fcd34d" />
          {/* front of bowl */}
          <path d="M58 215 A142 30 0 0 0 342 215 C342 335 272 354 200 354 C128 354 58 335 58 215 Z" fill="#ffffff" />
          <path d="M62 240 C112 272 288 272 338 240" fill="none" stroke="#86c440" strokeWidth="9" strokeLinecap="round" />
          <path className="leaf l1" d="M330 112 q34 -6 46 -42 q-40 4 -46 42z" fill="#86efac" />
          <path className="leaf l2" d="M70 122 q-30 -4 -42 -38 q36 2 42 38z" fill="#bbf7d0" />
        </svg>
      )}
    </div>
  );
}
