import React from 'react';

interface ManagementProcessesProps {
  onProcessClick: (event: React.MouseEvent) => void;
}

const ManagementProcesses: React.FC<ManagementProcessesProps> = ({ onProcessClick }) => {
  return (
    <div className="management-processes process-section">
      <div className="section-title">
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4" d="M12.9142 4.23224L17.2929 8.61091C17.6834 9.00143 17.6834 9.6346 17.2929 10.0251L10.0251 17.2929C9.6346 17.6834 9.00143 17.6834 8.61091 17.2929L4.23224 12.9142C3.84171 12.5237 3.84171 11.8905 4.23224 11.499L11.499 4.23224C11.8905 3.84171 12.5237 3.84171 12.9142 4.23224Z" fill="var(--blue-primary)"/>
          <path d="M10.8284 6.32843L6.32843 10.8284C5.92852 11.2283 5.93713 11.8614 6.34814 12.249L9.75104 15.6519C10.1621 16.0395 10.7952 16.0309 11.1851 15.631L15.6851 11.131C16.085 10.7311 16.0764 10.098 15.6654 9.71036L12.2625 6.30746C11.8726 5.91755 11.2393 5.91755 10.8494 6.30746" stroke="white" strokeWidth="1.5"/>
          <path d="M19.5 12.5L12.5 19.5" stroke="var(--blue-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
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