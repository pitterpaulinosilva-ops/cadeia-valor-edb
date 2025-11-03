import React from 'react';

const StakeholderSection: React.FC = () => {
  return (
    <div className="stakeholder-section">
      <div className="stakeholder-title">Partes Interessadas</div>
      <div className="stakeholder-content">
        <div className="stakeholder-item">
          <svg className="icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="28" fill="#6c757d" opacity="0.1"/>
            <path d="M32 8C18.7 8 8 18.7 8 32s10.7 24 24 24 24-10.7 24-24S45.3 8 32 8z" fill="#6c757d" opacity="0.3"/>
            <circle cx="32" cy="22" r="6" fill="#6c757d"/>
            <path d="M32 16c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 8c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z" fill="#fff"/>
            <path d="M18 46c0-7.7 6.3-14 14-14s14 6.3 14 14" fill="#6c757d"/>
            <circle cx="20" cy="18" r="3" fill="#6c757d" opacity="0.7"/>
            <circle cx="44" cy="18" r="3" fill="#6c757d" opacity="0.7"/>
            <circle cx="16" cy="38" r="2" fill="#6c757d" opacity="0.5"/>
            <circle cx="48" cy="38" r="2" fill="#6c757d" opacity="0.5"/>
            <path d="M12 52h40" stroke="#6c757d" strokeWidth="2" opacity="0.4"/>
            <rect x="16" y="40" width="32" height="8" rx="4" fill="#6c757d" opacity="0.2"/>
            <path d="M24 42h16m-12 4h8" stroke="#6c757d" strokeWidth="1" opacity="0.6"/>
          </svg>
          <h2>Sociedade</h2>
        </div>
        <div className="stakeholder-item">
          <svg className="icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="16" width="48" height="32" rx="6" fill="#6c757d" opacity="0.1"/>
            <rect x="12" y="20" width="40" height="24" rx="4" fill="#6c757d" opacity="0.2"/>
            <circle cx="32" cy="28" r="6" fill="#6c757d"/>
            <path d="M32 22c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 8c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z" fill="#fff"/>
            <path d="M20 42c0-6.6 5.4-12 12-12s12 5.4 12 12" fill="#6c757d"/>
            <rect x="16" y="12" width="32" height="4" rx="2" fill="#6c757d" opacity="0.6"/>
            <circle cx="20" cy="14" r="1" fill="#6c757d"/>
            <circle cx="24" cy="14" r="1" fill="#6c757d"/>
            <circle cx="28" cy="14" r="1" fill="#6c757d"/>
            <path d="M40 22h8v8h-8zm0 12h8v8h-8z" fill="#6c757d" opacity="0.3"/>
            <path d="M42 24h4m-4 2h3m-3 8h4m-4 2h3" stroke="#6c757d" strokeWidth="1"/>
            <rect x="8" y="48" width="48" height="4" rx="2" fill="#6c757d" opacity="0.4"/>
          </svg>
          <h2>Clientes</h2>
        </div>
      </div>
    </div>
  );
};

export default StakeholderSection;