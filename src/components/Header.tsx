import React from 'react';

interface HeaderProps {
  isDarkTheme: boolean;
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkTheme, onToggleTheme }) => {
  return (
    <>
      <button 
        onClick={onToggleTheme}
        className="theme-switcher"
        title="Mudar Tema"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
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
          zIndex: 100,
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
        🎨
      </button>
      <div className="cadeia-valor-header">
        <h1>Cadeia de Valor - Relacionamento com o Cliente de Saúde</h1>
        <div className="sub-title">
          <svg className="logo" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0C22.38 0 0 22.38 0 50C0 77.62 22.38 100 50 100C77.62 100 100 77.62 100 50C100 22.38 77.62 0 50 0ZM50 88.24C28.9 88.24 11.76 71.1 11.76 50C11.76 28.9 28.9 11.76 50 11.76C71.1 11.76 88.24 28.9 88.24 50C88.24 71.1 71.1 88.24 50 88.24Z" fill="#2E7D32"/>
            <path d="M68.52 28.1H31.48C29.56 28.1 28.1 29.56 28.1 31.48V68.52C28.1 70.44 29.56 71.9 31.48 71.9H68.52C70.44 71.9 71.9 70.44 71.9 68.52V31.48C71.9 29.56 70.44 28.1 68.52 28.1ZM50 65.05C36.18 65.05 25.49 54.36 25.49 40.54H35.84C35.84 48.47 42.11 54.74 50 54.74C57.89 54.74 64.16 48.47 64.16 40.54H74.51C74.51 54.36 63.82 65.05 50 65.05Z" fill="#1565C0"/>
          </svg>
          Sesi Saúde
        </div>
      </div>
    </>
  );
};

export default Header;