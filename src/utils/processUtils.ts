import { processData, ProcessInfo } from '../data/processData';

export const createModalContent = (processId: string): string => {
  const data = processData[processId] as ProcessInfo;
  if (!data) return '';
  
  let content = `<div>`;
  if (data.dono) {
    content += `<p><strong>👔 Dono do Processo:</strong> ${data.dono}</p>`;
  }
  if (data.subprocessos && data.subprocessos.length > 0) {
    content += `<h4>⚙️ Subprocessos:</h4>
                <ul>
                    ${data.subprocessos.map(sub => `<li>${sub}</li>`).join('')}
                </ul>`;
  }
  content += `</div>`;
  return content;
};

export const handleProcessClick = (
  event: React.MouseEvent, 
  openModal: (title: string, content: string) => void
) => {
  const target = event.target as HTMLElement;
  
  // Se clicou diretamente em um process-box
  if (target.classList.contains('process-box')) {
    event.stopPropagation();
    const processId = target.dataset.processId;
    if (processId) {
      openModal(
        target.textContent?.trim() || '',
        createModalContent(processId) || '<p>Informações detalhadas para este processo não estão disponíveis.</p>'
      );
    }
    return;
  }

  // Se clicou no grupo (fora dos process-boxes), mostrar informações de todos os processos
  const group = target.closest('.process-group, .stacked-group') as HTMLElement;
  if (group && !target.classList.contains('process-box')) {
    const processBoxes = group.querySelectorAll('.process-box');
    const title = Array.from(processBoxes).map(pb => pb.textContent?.trim()).join(' | ');
    let modalContentHtml = '';
    
    processBoxes.forEach(childBox => {
      const childId = (childBox as HTMLElement).dataset.processId;
      if (childId) {
        const childData = processData[childId] as ProcessInfo;
        if (childData) {
          modalContentHtml += `<h3>${childBox.textContent?.trim()}</h3>` + createModalContent(childId);
        }
      }
    });
    
    openModal(
      title,
      modalContentHtml || '<p>Informações detalhadas para este processo não estão disponíveis.</p>'
    );
  }
};