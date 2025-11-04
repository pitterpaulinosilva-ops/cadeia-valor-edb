import React from 'react';
import { PurposeIcon, SuppliersIcon, CollaboratorsIcon, PartnersIcon } from './icons/CustomIcons';
import './icons/CustomIcons.css';

const InfoSection: React.FC = () => {
  return (
      <div className="info-section">
        <div className="info-item">
          <PurposeIcon size={60} className="custom-icon purpose-icon mb-2" />
          <h2 className="text-xs font-semibold text-gray-800">Propósito</h2>
        </div>
        <div className="info-item">
          <SuppliersIcon size={60} className="custom-icon suppliers-icon mb-2" />
          <h2 className="text-xs font-semibold text-gray-800">Fornecedores</h2>
        </div>
        <div className="info-item">
          <CollaboratorsIcon size={60} className="custom-icon collaborators-icon mb-2" />
          <h2 className="text-xs font-semibold text-gray-800">Colaboradores</h2>
        </div>
        <div className="info-item">
          <PartnersIcon size={60} className="custom-icon partners-icon mb-2" />
          <h2 className="text-xs font-semibold text-gray-800">Parceiros</h2>
        </div>
      </div>
  );
};

export default InfoSection;