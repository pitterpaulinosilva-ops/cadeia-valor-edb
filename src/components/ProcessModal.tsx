import React from 'react';

interface ProcessModalProps {
  visible: boolean;
  title: string;
  content: string;
  onClose: () => void;
}

const ProcessModal: React.FC<ProcessModalProps> = ({ visible, title, content, onClose }) => {
  return (
    <div className={`modal-overlay ${visible ? 'visible' : ''}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2 id="modal-title">{title}</h2>
        <div id="modal-body" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
};

export default ProcessModal;