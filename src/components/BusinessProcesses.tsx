import React from 'react';
import { BusinessIcon } from '@/components/icons/CustomIcons';
import '@/components/icons/CustomIcons.css';

interface BusinessProcessesProps {
  onProcessClick: (event: React.MouseEvent) => void;
}

const BusinessProcesses: React.FC<BusinessProcessesProps> = ({ onProcessClick }) => {
  return (
    <div className="business-processes process-section">
      <div className="section-title icon-container">
        <BusinessIcon size={40} className="custom-icon business-icon glow-effect" />
        Processos de Negócio
      </div>

      {/* Primeira linha: apenas dois processos */}
      <div className="linear-flow flow-fill-width first-process-line">
        <div className="process-box box-dark-orange" data-process-id="gerenciar-ciclo-leads-educacao-basica"
             onClick={onProcessClick}>
          GERENCIAR O CICLO DE VIDA DOS LEADS DE EDUCAÇÃO BÁSICA
        </div>
        <div className="process-box box-dark-orange" data-process-id="gerenciar-vendas-educacao-basica"
             onClick={onProcessClick}>
          GERENCIAR VENDAS EDUCAÇÃO BÁSICA
        </div>
      </div>

      {/* Linhas individuais para os demais processos, mantendo ordem */}
      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="planejar-operacao-educacao-basica"
             onClick={onProcessClick}>
          PLANEJAR OPERAÇÃO DA EDUCAÇÃO BÁSICA
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="ensino-avaliacao-certificacao-educacao-basica"
             onClick={onProcessClick}>
          REALIZAR PROCESSO DE ENSINO-APRENDIZAGEM, AVALIAÇÃO, CERTIFICAÇÃO DA EDUCAÇÃO BÁSICA
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="gerenciar-oferta-servicos-educacao-basica"
             onClick={onProcessClick}>
          GERENCIAR OFERTA DOS SERVIÇOS DA EDUCAÇÃO BÁSICA
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="atendimentos-administrativos-educacao-basica"
             onClick={onProcessClick}>
          REALIZAR ATENDIMENTOS ADMINISTRATIVOS DA EDUCAÇÃO BÁSICA
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="planejar-operacao-eja"
             onClick={onProcessClick}>
          PLANEJAR OPERAÇÃO DA MODALIDADE DE JOVENS E ADULTOS (EJA)
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="gerenciar-oferta-servicos-eja"
             onClick={onProcessClick}>
          GERENCIAR OFERTA DOS SERVIÇOS DA MODALIDADE DE JOVENS E ADULTOS (EJA)
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="ensino-avaliacao-certificacao-eja"
             onClick={onProcessClick}>
          REALIZAR PROCESSO DE ENSINO-APRENDIZAGEM, AVALIAÇÃO, CERTIFICAÇÃO DA MODALIDADE DE JOVENS E ADULTOS (EJA)
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="atendimentos-administrativos-eja"
             onClick={onProcessClick}>
          REALIZAR ATENDIMENTOS ADMINISTRATIVOS (EJA)
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="planejar-operacao-projetos-programas-educacionais"
             onClick={onProcessClick}>
          PLANEJAR OPERAÇÃO DOS SERVIÇOS DE PROJETOS E PROGRAMAS EDUCACIONAIS
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="gerenciar-oferta-servicos-projetos-programas"
             onClick={onProcessClick}>
          GERENCIAR OFERTA DOS SERVIÇOS DE PROJETOS E PROGRAMAS EDUCACIONAIS
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="ensino-avaliacao-certificacao-projetos-programas"
             onClick={onProcessClick}>
          REALIZAR PROCESSO DE ENSINO-APRENDIZAGEM, AVALIAÇÃO, CERTIFICAÇÃO DOS SERVIÇOS DE PROJETOS E PROGRAMAS EDUCACIONAIS
        </div>
      </div>

      <div className="linear-flow flow-fill-width last-process-line">
        <div className="process-box box-dark-orange" data-process-id="gerenciar-voz-cliente-educacao-basica"
             onClick={onProcessClick}>
          GERENCIAR VOZ DO CLIENTE DE EDUCAÇÃO BÁSICA
        </div>
      </div>
    </div>
  );
};

export default BusinessProcesses;