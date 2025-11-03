import React from 'react';
import { ManagementIcon } from '@/components/icons/CustomIcons';
import '@/components/icons/CustomIcons.css';

interface ManagementProcessesProps {
  onProcessClick: (event: React.MouseEvent) => void;
}

const ManagementProcesses: React.FC<ManagementProcessesProps> = ({ onProcessClick }) => {
  return (
    <div className="management-processes process-section">
      <div className="section-title icon-container">
        <ManagementIcon size={40} className="custom-icon management-icon glow-effect" />
        Processos de Gestão
      </div>
      <div className="linear-flow flow-fill-width">
        <div className="process-group" data-process-id="grupo-estrategia-portfolio"
             onClick={onProcessClick}>
          <div className="process-box" data-process-id="gerenciar-estrategia">GERENCIAR ESTRATÉGIA</div>
          <div className="process-box" data-process-id="gerenciar-portfolio">GERENCIAR PORTFÓLIO</div>
        </div>
        <div className="process-group" data-process-id="grupo-prod-vendas-mkt"
             onClick={onProcessClick}>
          <div className="process-box" data-process-id="gerenciar-producao">GERENCIAR PRODUÇÃO</div>
          <div className="process-box" data-process-id="gerenciar-vendas">GERENCIAR VENDAS</div>
          <div className="process-box" data-process-id="gerenciar-marketing">GERENCIAR MARKETING</div>
        </div>
        <div className="process-box box-light-blue" data-process-id="gerenciar-orcamento"
             onClick={onProcessClick}>
          GERENCIAR ORÇAMENTO
        </div>
      </div>
      <div className="linear-flow">
        <div className="stacked-group" data-process-id="grupo-riscos-info-arq" 
             style={{clipPath: 'polygon(0% 0%, calc(100% - 25px) 0, 100% 50%, calc(100% - 25px) 100%, 0% 100%)', borderRadius: '0'}}
             onClick={onProcessClick}>
          <div className="process-box" data-process-id="gerenciar-riscos">GERENCIAR RISCOS</div>
          <div className="process-box" data-process-id="gerenciar-info-doc">GERENCIAR INFORMAÇÃO DOCUMENTADA</div>
          <div className="process-box" data-process-id="gerenciar-arq-processos">GERENCIAR ARQUITETURA DE PROCESSOS</div>
        </div>
      </div>
      <div className="stacked-container">
        <div className="stacked-group" data-process-id="grupo-capacitacao-etc" 
             style={{clipPath: 'polygon(0% 0%, calc(100% - 25px) 0, 100% 50%, calc(100% - 25px) 100%, 0% 100%)', borderRadius: '0'}}
             onClick={onProcessClick}>
          <div className="process-box" data-process-id="gerenciar-talentos">GERENCIAR ATRAÇÃO SELEÇÃO E MOVIMENTAÇÃO DE TALENTOS</div>
          <div className="process-box" data-process-id="gerenciar-capacitacao">GERENCIAR AÇÕES DE CAPACITAÇÃO E DESENVOLVIMENTO</div>
          <div className="process-box" data-process-id="gerenciar-desempenho">GERENCIAR DESEMPENHO DAS PESSOAS</div>
          <div className="process-box" data-process-id="gerenciar-beneficios">GERENCIAR BENEFÍCIOS</div>
          <div className="process-box" data-process-id="gerenciar-cultura-clima">GERENCIAR A CULTURA E CLIMA ORGANIZACIONAL</div>
          <div className="process-box" data-process-id="gerenciar-melhoria">GERENCIAR MELHORIA CONTÍNUA E APERFEIÇOAMENTO DA GESTÃO</div>
          <div className="process-box" data-process-id="gerenciar-comunicacao">GERENCIAR COMUNICAÇÃO CORPORATIVA</div>
          <div className="process-box" data-process-id="gerenciar-infra-ti">GERENCIAR INFRAESTRUTURA DE TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO</div>
          <div className="process-box" data-process-id="gerenciar-gestao-ambiental">GERENCIAR GESTÃO AMBIENTAL</div>
          <div className="process-box" data-process-id="gerenciar-acoes-sociais">GERENCIAR AÇÕES SOCIAIS</div>
          <div className="process-box" data-process-id="gerenciar-exp-cliente">GERENCIAR EXPERIÊNCIA DO CLIENTE</div>
        </div>
      </div>
    </div>
  );
};

export default ManagementProcesses;