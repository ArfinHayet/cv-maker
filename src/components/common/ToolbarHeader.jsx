import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSettings, loadFullCV, resetToDefault } from '../../states/cvSlice';

function ToolbarHeader() {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.cv.settings);
  const cvData = useSelector((state) => state.cv);
  const fileInputRef = useRef(null);

  const handleTemplateChange = (e) => {
    dispatch(updateSettings({ templateId: parseInt(e.target.value, 10) }));
  };

  const handleColorChange = (e) => {
    dispatch(updateSettings({ themeColor: e.target.value }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cvData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `resume_${cvData.personal.name ? cvData.personal.name.toLowerCase().replace(/\s+/g, '_') : 'cv'}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const importedData = JSON.parse(event.target.result);
          if (importedData && (importedData.personal || importedData.work)) {
            dispatch(loadFullCV(importedData));
            alert('CV data imported successfully!');
          } else {
            alert('Invalid CV data JSON file format.');
          }
        } catch (err) {
          alert('Error parsing JSON file: ' + err.message);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all data back to the default sample CV?')) {
      dispatch(resetToDefault());
    }
  };

  return (
    <header className="cv-toolbar noprint">
      <div className="toolbar-brand">
        <i className="fa-solid fa-file-invoice brand-icon"></i>
        <span className="brand-title">CV Maker Studio</span>
      </div>

      <div className="toolbar-controls">
        {/* Template Selector */}
        <div className="control-group">
          <label htmlFor="template-select"><i className="fa-solid fa-layer-group"></i> Template:</label>
          <select 
            id="template-select" 
            className="form-select-sm" 
            value={settings.templateId} 
            onChange={handleTemplateChange}
          >
            <option value={1}>Template 1 (Modern Left)</option>
            <option value={2}>Template 2 (Classic Right)</option>
            <option value={3}>Template 3 (Clean Single)</option>
            <option value={4}>Template 4 (Grid Layout)</option>
            <option value={5}>Template 5 (SUNDOR Featured)</option>
          </select>
        </div>

        {/* Theme Accent Color */}
        <div className="control-group">
          <label htmlFor="theme-color"><i className="fa-solid fa-palette"></i> Accent:</label>
          <input 
            type="color" 
            id="theme-color" 
            className="color-picker-input" 
            value={settings.themeColor || '#0284c7'} 
            onChange={handleColorChange}
            title="Choose Theme Accent Color"
          />
        </div>

        {/* Action Buttons */}
        <div className="button-group">
          <button className="btn-toolbar btn-primary" onClick={handlePrint} title="Print or Save as PDF (Ctrl/Cmd + P)">
            <i className="fa-solid fa-print"></i> Print / PDF
          </button>
          
          <button className="btn-toolbar btn-secondary" onClick={handleExportJSON} title="Download JSON backup file">
            <i className="fa-solid fa-download"></i> Export JSON
          </button>

          <button className="btn-toolbar btn-secondary" onClick={handleImportClick} title="Import JSON backup file">
            <i className="fa-solid fa-upload"></i> Import JSON
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept=".json" 
            style={{ display: 'none' }} 
          />

          <button className="btn-toolbar btn-danger-outline" onClick={handleReset} title="Reset all inputs back to sample data">
            <i className="fa-solid fa-rotate-left"></i> Reset
          </button>
        </div>
      </div>
    </header>
  );
}

export default ToolbarHeader;
