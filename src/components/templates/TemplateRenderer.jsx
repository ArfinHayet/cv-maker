import React from 'react';
import { useSelector } from 'react-redux';
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
import Template4 from './Template4';
import SundorTemplate from './SundorTemplate';

function TemplateRenderer() {
  const cvData = useSelector((state) => state.cv);
  const templateId = cvData.settings?.templateId || 5;

  const renderTemplate = () => {
    switch (templateId) {
      case 1:
        return <Template1 cvData={cvData} />;
      case 2:
        return <Template2 cvData={cvData} />;
      case 3:
        return <Template3 cvData={cvData} />;
      case 4:
        return <Template4 cvData={cvData} />;
      case 5:
      default:
        return <SundorTemplate cvData={cvData} />;
    }
  };

  return (
    <div className="template-preview-wrapper print-area">
      {renderTemplate()}
    </div>
  );
}

export default TemplateRenderer;
