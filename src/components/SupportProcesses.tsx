
import React from 'react';
import { SupportIcon } from '@/components/icons/CustomIcons';
import '@/components/icons/CustomIcons.css';

interface SupportProcessesProps {
  onProcessClick: (event: React.MouseEvent) => void;
}

const SupportProcesses: React.FC<SupportProcessesProps> = ({ onProcessClick }) => {
  return (
    <div className="support-processes process-section">
      <div className="section-title icon-container">
        <SupportIcon size={40} className="custom-icon support-icon glow-effect" />
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
