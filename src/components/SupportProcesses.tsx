
import React from 'react';

interface SupportProcessesProps {
  onProcessClick: (event: React.MouseEvent) => void;
}

const SupportProcesses: React.FC<SupportProcessesProps> = ({ onProcessClick }) => {
  return (
    <div className="support-processes process-section">
      <div className="section-title">
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4" d="M12 3L20.4431 6.88351C20.7874 7.05566 21 7.42003 21 7.82114V15.3569C21 15.7579 20.7874 16.1223 20.4431 16.2945L12 20.178L3.55688 16.2945C3.21256 16.1223 3 15.7579 3 15.3569V7.82114C3 7.42003 3.21256 7.05566 3.55688 6.88351L12 3Z" fill="var(--green-primary)"/>
          <path d="M12 3L20.4431 6.88351C20.7874 7.05566 21 7.42003 21 7.82114V15.3569C21 15.7579 20.7874 16.1223 20.4431 16.2945L12 20.178L3.55688 16.2945C3.21256 16.1223 3 15.7579 3 15.3569V7.82114C3 7.42003 3.21256 7.05566 3.55688 6.88351L12 3Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Processos de Apoio
      </div>
      
      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="contratos-receber"
             onClick={onProcessClick}>
          GERENCIAR CONTRATOS A RECEBER
        </div>
        <div className="process-box" data-process-id="contas-receber"
             onClick={onProcessClick}>
          GERENCIAR CONTAS A RECEBER
        </div>
      </div>
      
      <div className="linear-flow flow-fill-width">
        <div className="process-group" data-process-id="grupo-contratos-suprimentos"
             onClick={onProcessClick}>
          <div className="process-box" data-process-id="gerenciar-suprimentos">GERENCIAR SUPRIMENTOS</div>
          <div className="process-box" data-process-id="contratos-pagar">GERENCIAR CONTRATOS A PAGAR</div>
        </div>
        <div className="process-box" data-process-id="contas-pagar"
             onClick={onProcessClick}>
          GERENCIAR CONTAS A PAGAR
        </div>
      </div>
      
      <div className="stacked-container">
        <div className="stacked-group" data-process-id="grupo-ativos-etc" 
             style={{clipPath: "polygon(0% 0%, calc(100% - 25px) 0, 100% 50%, calc(100% - 25px) 100%, 0% 100%)", borderRadius: "0"}}
             onClick={onProcessClick}>
          <div className="process-box" data-process-id="gerenciar-tesouraria">GERENCIAR TESOURARIA</div>
          <div className="process-box" data-process-id="gerenciar-contabilidade">GERENCIAR CONTABILIDADE</div>
          <div className="process-box" data-process-id="gerenciar-ativos">GERENCIAR ATIVOS</div>
          <div className="process-box" data-process-id="gerenciar-transportes">GERENCIAR TRANSPORTES</div>
          <div className="process-box" data-process-id="gerenciar-infra-predial">GERENCIAR INFRAESTRUTURA PREDIAL</div>
          <div className="process-box" data-process-id="gerenciar-manutencao">GERENCIAR MANUTENÇÃO DE MÁQUINAS E EQUIPAMENTOS</div>
          <div className="process-box" data-process-id="gerenciar-saude-seguranca">GERENCIAR SAÚDE E SEGURANÇA DO TRABALHO</div>
          <div className="process-box" data-process-id="gerenciar-rotinas-pessoal">GERENCIAR ROTINAS DE PESSOAL</div>
          <div className="process-box" data-process-id="gerenciar-atend-juridico">GERENCIAR ATENDIMENTO JURÍDICO</div>
          <div className="process-box" data-process-id="gerenciar-solic-marketing">GERENCIAR SOLICITAÇÕES DE MARKETING</div>
        </div>
      </div>
    </div>
  );
};

export default SupportProcesses;
