import React from 'react';
import ToolbarHeader from '../components/common/ToolbarHeader';
import EditorSidebar from '../components/editor/EditorSidebar';
import TemplateRenderer from '../components/templates/TemplateRenderer';

function Dashboard() {
  return (
    <div className="cv-app-container">
      {/* Top Navigation & Controls */}
      <ToolbarHeader />

      {/* Main Split Layout */}
      <main className="cv-app-body">
        {/* Left Side Accordion Editor (hidden on print) */}
        <EditorSidebar />

        {/* Right Side Live CV Preview */}
        <section className="preview-pane">
          <div className="preview-canvas-container">
            <TemplateRenderer />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
