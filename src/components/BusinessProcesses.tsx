import React from 'react';

interface BusinessProcessesProps {
  onProcessClick: (event: React.MouseEvent) => void;
}

const BusinessProcesses: React.FC<BusinessProcessesProps> = ({ onProcessClick }) => {
  return (
    <div className="business-processes process-section">
      <div className="section-title">
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4" d="M19.5 8H4.5C3.39543 8 2.5 8.89543 2.5 10V18C2.5 19.1046 3.39543 20 4.5 20H19.5C20.6046 20 21.5 19.1046 21.5 18V10C21.5 8.89543 20.6046 8 19.5 8Z" fill="var(--orange-primary)"/>
          <path d="M9.5 14V11C9.5 10.4477 9.05228 10 8.5 10H5.5C4.94772 10 4.5 10.4477 4.5 11V14C4.5 14.5523 4.94772 15 5.5 15H8.5C9.05228 15 9.5 14.5523 9.5 14Z" stroke="white" strokeWidth="1.5"/>
          <path d="M15.5 8V6.5C15.5 5.11929 14.3807 4 13 4H11C9.61929 4 8.5 5.11929 8.5 6.5V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Processos de Negócio
      </div>
      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="ciclo-leads"
             onClick={onProcessClick}>
          GERENCIAR CICLO DE VIDA DE LEADS
        </div>
        <div className="process-box" data-process-id="vendas-saude"
             onClick={onProcessClick}>
          GERENCIAR VENDAS SAÚDE
        </div>
        <div className="process-box" data-process-id="gerenciar-saude"
             onClick={onProcessClick}>
          GERENCIAR SAÚDE
        </div>
      </div>
      <div className="full-width-parallel-process">
        <div className="process-box" data-process-id="voz-cliente"
             onClick={onProcessClick}>
          GERENCIAR VOZ DO CLIENTE
        </div>
      </div>
    </div>
  );
};

export default BusinessProcesses;