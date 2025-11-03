import React from 'react';
import { Palette, Building2 } from 'lucide-react';
import { Icon } from '@/components/ui/icon';
import SesiLogo from '@/components/ui/SesiLogo';

interface HeaderProps {
  isDarkTheme: boolean;
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkTheme, onToggleTheme }) => {
  return (
    <>
      <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '10px', zIndex: 100 }}>
        <button 
          onClick={onToggleTheme}
          className="theme-switcher"
          title="Mudar Tema"
          style={{
            background: 'var(--modal-close-bg)',
            border: '1px solid var(--border-color)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.3s ease, transform 0.2s ease',
            color: 'var(--text-dark)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.background = 'var(--modal-close-hover-bg)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'var(--modal-close-bg)';
          }}
        >
          <Icon icon={Palette} size="md" variant="default" />
        </button>
      </div>
      <div className="cadeia-valor-header">
        <h1 className="gradient-title">
          Cadeia de Valor - Relacionamento com o Cliente de Segurança no Trabalho
        </h1>
        <div className="sesi-logo-container" style={{ display: 'flex', justifyContent: 'center', margin: '16px 0' }}>
          <SesiLogo />
        </div>
      </div>
    </>
  );
};

export default Header;