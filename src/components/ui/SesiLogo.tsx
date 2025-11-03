import React from 'react';

const SesiLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="https://i.imgur.com/t6c0DVR.png"
        alt="SESI - Serviço Social da Indústria"
        className="w-32 h-auto max-w-full object-contain"
        onError={(e) => {
          console.error('Erro ao carregar a imagem da logo SESI');
          // Fallback: esconder a imagem se não carregar
          e.currentTarget.style.display = 'none';
        }}
        onLoad={() => {
          console.log('Logo SESI carregada com sucesso');
        }}
      />
    </div>
  );
};

export default SesiLogo;