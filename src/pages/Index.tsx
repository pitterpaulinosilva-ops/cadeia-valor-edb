
import React from 'react';
import '../styles/cadeia-valor.css';
import { useModal } from '../hooks/useModal';
import { useTheme } from '../hooks/useTheme';
import { handleProcessClick } from '../utils/processUtils';
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';
import ManagementProcesses from '../components/ManagementProcesses';
import BusinessProcesses from '../components/BusinessProcesses';
import SupportProcesses from '../components/SupportProcesses';
import StakeholderSection from '../components/StakeholderSection';
import ProcessModal from '../components/ProcessModal';

const Index = () => {
  const { modalVisible, modalTitle, modalContent, openModal, closeModal } = useModal();
  const { isDarkTheme, toggleTheme } = useTheme();

  const onProcessClick = (event: React.MouseEvent) => {
    handleProcessClick(event, openModal);
  };

  return (
    <div className="cadeia-valor-body">
      <div className="cadeia-valor-container">
        <Header isDarkTheme={isDarkTheme} onToggleTheme={toggleTheme} />

        <div className="main-layout">
          <InfoSection />
          
          <div className="left-section">
            <ManagementProcesses onProcessClick={onProcessClick} />
            <BusinessProcesses onProcessClick={onProcessClick} />
            <SupportProcesses onProcessClick={onProcessClick} />
          </div>
          
          <StakeholderSection />
        </div>
      </div>

      <ProcessModal 
        visible={modalVisible}
        title={modalTitle}
        content={modalContent}
        onClose={closeModal}
      />
    </div>
  );
};

export default Index;
