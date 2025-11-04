import React from 'react';
import { Palette, Building2 } from 'lucide-react';
import { Icon } from '@/components/ui/icon';
import SesiLogo from '@/components/ui/SesiLogo';

// Remover props relacionados ao tema
const Header: React.FC = () => {
  return (
    <>
      {/* Botão de alternâncie de tema removido */}
      <div className="cadeia-valor-header">
        <h1 className="gradient-title">
          Cadeia de Valor - Relacionamento com o Cliente de Educação Básica
        </h1>
        <div className="sesi-logo-container" style={{ display: 'flex', justifyContent: 'center', margin: '16px 0' }}>
          <SesiLogo />
        </div>
      </div>
    </>
  );
};

export default Header;