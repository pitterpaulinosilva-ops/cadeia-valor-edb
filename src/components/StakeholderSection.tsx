import React from 'react';
import { SocietyIcon, ClientIcon } from '@/components/icons/CustomIcons';
import '@/components/icons/CustomIcons.css';

const StakeholderSection: React.FC = () => {
  return (
    <div className="stakeholder-section">
      <div className="stakeholder-title">Partes Interessadas</div>
      <div className="stakeholder-content">
        <div className="stakeholder-item">
          <SocietyIcon size={60} className="custom-icon society-icon glow-effect mb-2" />
          <h2 className="text-lg font-semibold text-gray-800">Sociedade</h2>
        </div>
        <div className="stakeholder-item">
          <ClientIcon size={60} className="custom-icon client-icon glow-effect mb-2" />
          <h2 className="text-lg font-semibold text-gray-800">Clientes</h2>
        </div>
      </div>
    </div>
  );
};

export default StakeholderSection;