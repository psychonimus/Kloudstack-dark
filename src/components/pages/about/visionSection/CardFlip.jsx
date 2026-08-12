import React, { useState } from 'react';
import './CardFlip.css';

/* ── Inline SVG icon replacements ─────────────────────────── */
const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.5-1.5 4 0 4s2.5-2.5 4-4L12 13l-3-3-4.5 6.5z"/>
    <path d="m12 13 3 3 1.5-1.5c1.5-1.5 2-3.5 2-5.5A8 8 0 0 0 12 3 8 8 0 0 0 5 9c0 2 .5 4 2 5.5L12 13z"/>
    <circle cx="12" cy="9" r="1"/>
  </svg>
);

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const Code2Icon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 16 4-4-4-4"/>
    <path d="m6 8-4 4 4 4"/>
    <path d="m14.5 4-5 16"/>
  </svg>
);

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
);

const FEATURE_ICONS = [CopyIcon, Code2Icon, RocketIcon, ZapIcon];

/* ── Component ─────────────────────────────────────────────── */
export default function CardFlip({
  title = 'Build MVPs Fast',
  subtitle = '',
  description = 'Copy, paste, customize—and launch your MVP faster than ever with our developer-first component library.',
  features = [
    'Copy & Paste Ready',
    'Developer-First',
    'MVP Optimized',
    'Zero Setup Required',
  ],
  color = '#ff2e88',
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Stable random widths per card instance
  const codeLines = React.useMemo(
    () =>
      Array.from({ length: 6 }, () => ({
        width: 60 + Math.floor(Math.random() * 40),
        marginLeft: Math.floor(Math.random() * 20),
      })),
    []
  );

  return (
    <div
      className="cf-wrapper"
      style={{ '--cf-primary': color }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`cf-inner${isFlipped ? ' cf-flipped' : ''}`}>

        {/* ── FRONT ─────────────────────────────── */}
        <div className={`cf-face cf-front${isFlipped ? ' cf-face-hidden' : ''}`}>
          <div className="cf-bg-gradient" />

          <div className="cf-animation-area">
            <div className="cf-code-lines">
              {codeLines.map((line, i) => (
                <div
                  key={i}
                  className="cf-code-bar"
                  style={{
                    width: `${line.width}%`,
                    marginLeft: `${line.marginLeft}%`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
            <div className="cf-rocket-wrap">
              <div
                className="cf-rocket-icon"
                style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
              >
                <RocketIcon />
              </div>
            </div>
          </div>

          <div className="cf-front-bottom">
            <div className="cf-front-text">
              <h3 className="cf-title">{title}</h3>
              <p className="cf-subtitle">{subtitle}</p>
            </div>
            
          </div>
        </div>

        {/* ── BACK ──────────────────────────────── */}
        <div className={`cf-face cf-back${!isFlipped ? ' cf-face-hidden' : ''}`}>
          <div className="cf-bg-gradient" />

          <div className="cf-back-body">
            <div className="cf-back-header">
              <div
                className="cf-back-icon-wrap"
                style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
              >
                <Code2Icon size={16} />
              </div>
              <h3 className="cf-title">{title}</h3>
            </div>

            <p className="cf-description">{description}</p>

            
          </div>

          {/* <div className="cf-back-footer">
            <div className="cf-cta">
              <span className="cf-cta-label">Start Building</span>
              <span className="cf-cta-arrow" style={{ color }}>
                <ArrowRightIcon />
              </span>
            </div>
          </div> */}
        </div>

      </div>
    </div>
  );
}
