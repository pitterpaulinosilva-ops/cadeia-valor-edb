import React from 'react';

const InfoSection: React.FC = () => {
  return (
      <div className="info-section">
        <div className="info-item">
          <svg className="icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="30" fill="#0d6efd" opacity="0.1"/>
            <path d="M32 8C18.7 8 8 18.7 8 32s10.7 24 24 24 24-10.7 24-24S45.3 8 32 8zm0 42c-9.9 0-18-8.1-18-18s8.1-18 18-18 18 8.1 18 18-8.1 18-18 18z" fill="#0d6efd"/>
            <path d="M38 26l-8 8-4-4-6 6 10 10 14-14z" fill="#fff"/>
            <circle cx="32" cy="18" r="4" fill="#0d6efd"/>
            <path d="M28 20h8v4h-8z" fill="#fff"/>
            <path d="M20 28v8h4v-8h-4zm20 0v8h4v-8h-4z" fill="#0d6efd" opacity="0.6"/>
          </svg>
          <h2>Propósito</h2>
        </div>
        <div className="info-item">
          <svg className="icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="16" width="48" height="32" rx="4" fill="#fd7e14" opacity="0.1"/>
            <path d="M16 20h32v4H16zm0 8h32v4H16zm0 8h24v4H16z" fill="#fd7e14"/>
            <circle cx="20" cy="30" r="6" fill="#fd7e14" opacity="0.3"/>
            <path d="M20 26v8m-4-4h8" stroke="#fd7e14" strokeWidth="2"/>
            <rect x="40" y="12" width="16" height="12" rx="2" fill="#fd7e14"/>
            <path d="M44 16h8m-8 4h6" stroke="#fff" strokeWidth="1.5"/>
            <path d="M12 48l8-8 8 8" fill="#fd7e14" opacity="0.6"/>
          </svg>
          <h2>Fornecedores</h2>
        </div>
        <div className="info-item">
          <svg className="icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="24" r="8" fill="#198754"/>
            <path d="M32 16c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="#fff"/>
            <path d="M16 48c0-8.8 7.2-16 16-16s16 7.2 16 16" fill="#198754" opacity="0.3"/>
            <circle cx="18" cy="20" r="4" fill="#198754" opacity="0.6"/>
            <circle cx="46" cy="20" r="4" fill="#198754" opacity="0.6"/>
            <path d="M18 24c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4zm32 0c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#198754"/>
            <path d="M8 44h12m32 0h12" stroke="#198754" strokeWidth="2" opacity="0.6"/>
            <rect x="28" y="36" width="8" height="4" rx="2" fill="#198754"/>
          </svg>
          <h2>Colaboradores</h2>
        </div>
        <div className="info-item">
          <svg className="icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="24" fill="#8e44ad" opacity="0.1"/>
            <path d="M32 12c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z" stroke="#8e44ad" strokeWidth="2" fill="none"/>
            <circle cx="32" cy="32" r="8" fill="#8e44ad"/>
            <path d="M24 24l16 16m0-16L24 40" stroke="#8e44ad" strokeWidth="2"/>
            <circle cx="20" cy="20" r="3" fill="#8e44ad" opacity="0.6"/>
            <circle cx="44" cy="20" r="3" fill="#8e44ad" opacity="0.6"/>
            <circle cx="20" cy="44" r="3" fill="#8e44ad" opacity="0.6"/>
            <circle cx="44" cy="44" r="3" fill="#8e44ad" opacity="0.6"/>
            <path d="M32 8v8m0 32v8m-24-24h8m32 0h8" stroke="#8e44ad" strokeWidth="2" opacity="0.4"/>
            <rect x="28" y="28" width="8" height="8" rx="1" fill="#fff"/>
            <path d="M30 30h4m-4 4h4" stroke="#8e44ad" strokeWidth="1"/>
          </svg>
          <h2>Parceiros</h2>
        </div>
      </div>
  );
};

export default InfoSection;