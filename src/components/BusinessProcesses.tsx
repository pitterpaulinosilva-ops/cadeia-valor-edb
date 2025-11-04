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
      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="gerenciar-ciclo-leads-educacao-basica"
             onClick={onProcessClick}>
          GERENCIAR O CICLO DE VIDA DOS LEADS DE EDUCAÇÃO BÁSICA
        </div>
        <div className="process-box" data-process-id="gerenciar-vendas-educacao-basica"
             onClick={onProcessClick}>
          GERENCIAR VENDAS EDUCAÇÃO BÁSICA
        </div>
      </div>

      {/* Linhas individuais para os demais processos, mantendo ordem */}
      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="planejar-operacao-educacao-basica"
             onClick={onProcessClick}>
          PLANEJAROPERAÇÃODAEDUCAÇÃOBÁSICA
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="ensino-avaliacao-certificacao-educacao-basica"
             onClick={onProcessClick}>
          REALIZARPROCESSODEENSINO-APRENDIZAGEM,AVALIAÇÃO,CERTIFICAÇÃODAEDUCAÇÃOBÁSICA
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="gerenciar-oferta-servicos-educacao-basica"
             onClick={onProcessClick}>
          GERENCIAROFERTADOSSERVIÇOSDAEDUCAÇÃOBÁSICA
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="atendimentos-administrativos-educacao-basica"
             onClick={onProcessClick}>
          REALIZARATENDIMENTOSADMINISTRATIVOSDAEDUCAÇÃOBÁSICA
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="planejar-operacao-eja"
             onClick={onProcessClick}>
          PLANEJAROPERAÇÃODAMODALIDADEDEJOVENSEADULTOS(EJA)
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="gerenciar-oferta-servicos-eja"
             onClick={onProcessClick}>
          GERENCIAROFERTADOSSERVIÇOSDAMODALIDADEDEJOVENSEADULTOS(EJA)
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="ensino-avaliacao-certificacao-eja"
             onClick={onProcessClick}>
          REALIZARPROCESSODEENSINO-APRENDIZAGEM,AVALIAÇÃO,CERTIFICAÇÃODAMODALIDADEDEJOVENSEADULTOS(EJA)
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="atendimentos-administrativos-eja"
             onClick={onProcessClick}>
          REALIZARATENDIMENTOSADMINISTRATIVOS(EJA)
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="planejar-operacao-projetos-programas-educacionais"
             onClick={onProcessClick}>
          PLANEJAROPERAÇÃODOSSERVIÇOSDEPROJETOSEPROGRAMASEDUCACIONAIS
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="gerenciar-oferta-servicos-projetos-programas"
             onClick={onProcessClick}>
          GERENCIAROFERTADOSSERVIÇOSDEPROJETOSEPROGRAMASEDUCACIONAIS
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="ensino-avaliacao-certificacao-projetos-programas"
             onClick={onProcessClick}>
          REALIZARPROCESSODEENSINO-APRENDIZAGEM,AVALIAÇÃO,CERTIFICAÇÃODOSSERVIÇOSDEPROJETOSEPROGRAMASEDUCACIONAIS
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="gerenciar-contas-receber-educacao-basica"
             onClick={onProcessClick}>
          GERENCIAR CONTAS A RECEBER DE EDUCAÇÃO BÁSICA
        </div>
      </div>

      <div className="linear-flow flow-fill-width">
        <div className="process-box" data-process-id="gerenciar-voz-cliente-educacao-basica"
             onClick={onProcessClick}>
          GERENCIAR VOZ DO CLIENTE DE EDUCAÇÃO BÁSICA
        </div>
      </div>
    </div>
  );
};

export default BusinessProcesses;