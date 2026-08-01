import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updatePersonal, updateAdditional,
  addWork, updateWork, deleteWork, addWorkPoint, updateWorkPoint, deleteWorkPoint,
  addEducation, updateEducation, deleteEducation,
  addProject, updateProject, deleteProject,
  addAward, updateAward, deleteAward,
  addSkill, updateSkill, deleteSkill,
  addActivity, deleteActivity,
  addSocial, updateSocial, deleteSocial
} from '../../states/cvSlice';

function EditorSidebar() {
  const dispatch = useDispatch();
  const cv = useSelector((state) => state.cv);
  const { personal, additional, work, education, projects, awards, skills, activities, socials } = cv;

  const [activeSection, setActiveSection] = useState('personal');
  const [newActivityInput, setNewActivityInput] = useState('');

  const toggleSection = (sectionName) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(updatePersonal({ photoUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddActivity = (e) => {
    e.preventDefault();
    if (newActivityInput.trim()) {
      dispatch(addActivity(newActivityInput.trim()));
      setNewActivityInput('');
    }
  };

  return (
    <aside className="editor-sidebar noprint">
      <div className="editor-header">
        <h3><i className="fa-solid fa-pen-to-square"></i> CV Content Editor</h3>
        <p className="editor-subtitle">Updates reflect live on your Sundor CV preview</p>
      </div>

      <div className="accordion-container">
        {/* 1. PERSONAL DETAILS ACCORDION */}
        <div className={`accordion-item ${activeSection === 'personal' ? 'open' : ''}`}>
          <div className="accordion-header" onClick={() => toggleSection('personal')}>
            <span><i className="fa-solid fa-user-gear"></i> Header & Contact</span>
            <i className={`fa-solid fa-chevron-${activeSection === 'personal' ? 'up' : 'down'}`}></i>
          </div>
          {activeSection === 'personal' && (
            <div className="accordion-body">
              <div className="form-group mb-2">
                <label>Profile Picture</label>
                {personal.photoUrl && (
                  <div className="photo-preview-box mb-2">
                    <img src={personal.photoUrl} alt="Profile Preview" className="photo-thumbnail me-2" />
                    <button 
                      type="button" 
                      className="btn-text-danger"
                      onClick={() => dispatch(updatePersonal({ photoUrl: '' }))}
                    >
                      <i className="fa-solid fa-trash"></i> Reset to Default
                    </button>
                  </div>
                )}
                <input type="file" accept="image/*" className="form-control" onChange={handlePhotoUpload} />
              </div>

              <div className="form-group mb-2">
                <label>Full Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={personal.name || ''} 
                  onChange={(e) => dispatch(updatePersonal({ name: e.target.value }))}
                />
              </div>

              <div className="form-group mb-2">
                <label>Title / Profession</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={personal.title || ''} 
                  onChange={(e) => dispatch(updatePersonal({ title: e.target.value }))}
                />
              </div>

              <div className="form-group mb-2">
                <label>Location / Address</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={personal.address || ''} 
                  onChange={(e) => dispatch(updatePersonal({ address: e.target.value }))}
                />
              </div>

              <div className="row g-2 mb-2">
                <div className="col-6">
                  <label>Primary Phone</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={personal.phone || ''} 
                    onChange={(e) => dispatch(updatePersonal({ phone: e.target.value }))}
                  />
                </div>
                <div className="col-6">
                  <label>Alt Phone</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={personal.altPhone || ''} 
                    onChange={(e) => dispatch(updatePersonal({ altPhone: e.target.value }))}
                  />
                </div>
              </div>

              <div className="form-group mb-2">
                <label>Email Address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  value={personal.email || ''} 
                  onChange={(e) => dispatch(updatePersonal({ email: e.target.value }))}
                />
              </div>

              <div className="form-group mb-2">
                <label>Industries / Focus Areas</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={personal.industries || ''} 
                  onChange={(e) => dispatch(updatePersonal({ industries: e.target.value }))}
                />
              </div>
            </div>
          )}
        </div>

        {/* 2. ADDITIONAL INFO ACCORDION */}
        <div className={`accordion-item ${activeSection === 'additional' ? 'open' : ''}`}>
          <div className="accordion-header" onClick={() => toggleSection('additional')}>
            <span><i className="fa-solid fa-circle-info"></i> Additional Info</span>
            <i className={`fa-solid fa-chevron-${activeSection === 'additional' ? 'up' : 'down'}`}></i>
          </div>
          {activeSection === 'additional' && (
            <div className="accordion-body">
              <div className="form-group mb-2">
                <label>Marital Status</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={additional?.maritalStatus || ''} 
                  onChange={(e) => dispatch(updateAdditional({ maritalStatus: e.target.value }))}
                />
              </div>
              <div className="form-group mb-2">
                <label>Nationality</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={additional?.nationality || ''} 
                  onChange={(e) => dispatch(updateAdditional({ nationality: e.target.value }))}
                />
              </div>
              <div className="form-group mb-2">
                <label>Languages</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={additional?.language || ''} 
                  onChange={(e) => dispatch(updateAdditional({ language: e.target.value }))}
                />
              </div>
              <div className="form-group mb-2">
                <label>Date of Birth</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={additional?.dateOfBirth || ''} 
                  onChange={(e) => dispatch(updateAdditional({ dateOfBirth: e.target.value }))}
                />
              </div>
            </div>
          )}
        </div>

        {/* 3. NOTEABLE PROJECTS ACCORDION */}
        <div className={`accordion-item ${activeSection === 'projects' ? 'open' : ''}`}>
          <div className="accordion-header" onClick={() => toggleSection('projects')}>
            <span><i className="fa-solid fa-diagram-project"></i> Noteable Projects ({projects.length})</span>
            <i className={`fa-solid fa-chevron-${activeSection === 'projects' ? 'up' : 'down'}`}></i>
          </div>
          {activeSection === 'projects' && (
            <div className="accordion-body">
              {projects.map((proj, index) => (
                <div key={proj.id || index} className="card-item-box mb-3">
                  <div className="card-item-header">
                    <strong>Project #{index + 1}: {proj.title || 'Untitled'}</strong>
                    <button 
                      className="btn-icon-danger" 
                      onClick={() => dispatch(deleteProject(index))}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>

                  <div className="form-group mb-2">
                    <label className="form-label-sm">Project Title</label>
                    <input 
                      type="text" 
                      className="form-control form-control-sm"
                      value={proj.title || ''}
                      onChange={(e) => dispatch(updateProject({ index, data: { title: e.target.value } }))}
                    />
                  </div>

                  <div className="form-group mb-2">
                    <label className="form-label-sm">Client</label>
                    <input 
                      type="text" 
                      className="form-control form-control-sm"
                      value={proj.client || ''}
                      onChange={(e) => dispatch(updateProject({ index, data: { client: e.target.value } }))}
                    />
                  </div>

                  <div className="form-group mb-2">
                    <label className="form-label-sm">Workplace</label>
                    <input 
                      type="text" 
                      className="form-control form-control-sm"
                      value={proj.workplace || ''}
                      onChange={(e) => dispatch(updateProject({ index, data: { workplace: e.target.value } }))}
                    />
                  </div>

                  <div className="form-group mb-2">
                    <label className="form-label-sm">Link</label>
                    <input 
                      type="text" 
                      className="form-control form-control-sm"
                      value={proj.link || ''}
                      onChange={(e) => dispatch(updateProject({ index, data: { link: e.target.value } }))}
                    />
                  </div>

                  <div className="form-group mb-2">
                    <label className="form-label-sm">Technology Metrics</label>
                    <input 
                      type="text" 
                      className="form-control form-control-sm"
                      value={proj.techMetrics || ''}
                      onChange={(e) => dispatch(updateProject({ index, data: { techMetrics: e.target.value } }))}
                    />
                  </div>
                </div>
              ))}

              <button className="btn btn-outline-primary btn-sm w-100 mt-2" onClick={() => dispatch(addProject())}>
                <i className="fa-solid fa-plus"></i> Add Noteable Project
              </button>
            </div>
          )}
        </div>

        {/* 4. WORK HISTORY ACCORDION */}
        <div className={`accordion-item ${activeSection === 'work' ? 'open' : ''}`}>
          <div className="accordion-header" onClick={() => toggleSection('work')}>
            <span><i className="fa-solid fa-history"></i> Work History ({work.length})</span>
            <i className={`fa-solid fa-chevron-${activeSection === 'work' ? 'up' : 'down'}`}></i>
          </div>
          {activeSection === 'work' && (
            <div className="accordion-body">
              {work.map((item, index) => (
                <div key={item.id || index} className="card-item-box mb-3">
                  <div className="card-item-header">
                    <strong>Work #{index + 1}: {item.company || 'Company'}</strong>
                    <button 
                      className="btn-icon-danger" 
                      onClick={() => dispatch(deleteWork(index))}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>

                  <div className="form-group mb-2">
                    <label className="form-label-sm">Company Name</label>
                    <input 
                      type="text" 
                      className="form-control form-control-sm"
                      value={item.company || ''}
                      onChange={(e) => dispatch(updateWork({ index, data: { company: e.target.value } }))}
                    />
                  </div>

                  <div className="form-group mb-2">
                    <label className="form-label-sm">Location / Address</label>
                    <input 
                      type="text" 
                      className="form-control form-control-sm"
                      value={item.location || ''}
                      onChange={(e) => dispatch(updateWork({ index, data: { location: e.target.value } }))}
                      placeholder="e.g. Banani Dhaka"
                    />
                  </div>

                  <div className="form-group mb-2">
                    <label className="form-label-sm">Designation / Role</label>
                    <input 
                      type="text" 
                      className="form-control form-control-sm"
                      value={item.role || ''}
                      onChange={(e) => dispatch(updateWork({ index, data: { role: e.target.value } }))}
                    />
                  </div>

                  <div className="row g-2 mb-2">
                    <div className="col-6">
                      <label className="form-label-sm">Start Date</label>
                      <input 
                        type="text" 
                        className="form-control form-control-sm"
                        value={item.startDate || ''}
                        onChange={(e) => dispatch(updateWork({ index, data: { startDate: e.target.value } }))}
                      />
                    </div>
                    <div className="col-6">
                      <label className="form-label-sm">End Date</label>
                      <input 
                        type="text" 
                        className="form-control form-control-sm"
                        value={item.endDate || ''}
                        onChange={(e) => dispatch(updateWork({ index, data: { endDate: e.target.value } }))}
                      />
                    </div>
                  </div>

                  {/* Bullet points */}
                  <div className="points-section mt-2">
                    <label className="form-label-sm d-flex justify-content-between">
                      <span>Bullet Responsibilities</span>
                      <button 
                        type="button"
                        className="btn-text-primary"
                        onClick={() => dispatch(addWorkPoint({ workIndex: index, point: '' }))}
                      >
                        + Add Point
                      </button>
                    </label>
                    {item.points && item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="input-group input-group-sm mb-1">
                        <input 
                          type="text" 
                          className="form-control"
                          value={pt || ''}
                          onChange={(e) => dispatch(updateWorkPoint({ workIndex: index, pointIndex: pIdx, value: e.target.value }))}
                        />
                        <button 
                          className="btn btn-outline-danger" 
                          type="button"
                          onClick={() => dispatch(deleteWorkPoint({ workIndex: index, pointIndex: pIdx }))}
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <button className="btn btn-outline-primary btn-sm w-100 mt-2" onClick={() => dispatch(addWork())}>
                <i className="fa-solid fa-plus"></i> Add Work Experience
              </button>
            </div>
          )}
        </div>

        {/* 5. EDUCATION ACCORDION */}
        <div className={`accordion-item ${activeSection === 'education' ? 'open' : ''}`}>
          <div className="accordion-header" onClick={() => toggleSection('education')}>
            <span><i className="fa-solid fa-graduation-cap"></i> Education ({education.length})</span>
            <i className={`fa-solid fa-chevron-${activeSection === 'education' ? 'up' : 'down'}`}></i>
          </div>
          {activeSection === 'education' && (
            <div className="accordion-body">
              {education.map((item, index) => (
                <div key={item.id || index} className="card-item-box mb-3">
                  <div className="card-item-header">
                    <strong>Edu #{index + 1}: {item.degree || 'Degree'}</strong>
                    <button 
                      className="btn-icon-danger" 
                      onClick={() => dispatch(deleteEducation(index))}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>

                  <div className="form-group mb-2">
                    <label className="form-label-sm">Degree & Institution Title</label>
                    <input 
                      type="text" 
                      className="form-control form-control-sm"
                      value={item.degree || ''}
                      onChange={(e) => dispatch(updateEducation({ index, data: { degree: e.target.value } }))}
                    />
                  </div>

                  <div className="form-group mb-2">
                    <label className="form-label-sm">Department / Major</label>
                    <input 
                      type="text" 
                      className="form-control form-control-sm"
                      value={item.department || ''}
                      onChange={(e) => dispatch(updateEducation({ index, data: { department: e.target.value } }))}
                    />
                  </div>

                  <div className="form-group mb-2">
                    <label className="form-label-sm">Graduated Year</label>
                    <input 
                      type="text" 
                      className="form-control form-control-sm"
                      value={item.graduatedYear || ''}
                      onChange={(e) => dispatch(updateEducation({ index, data: { graduatedYear: e.target.value } }))}
                    />
                  </div>
                </div>
              ))}

              <button className="btn btn-outline-primary btn-sm w-100 mt-2" onClick={() => dispatch(addEducation())}>
                <i className="fa-solid fa-plus"></i> Add Education Entry
              </button>
            </div>
          )}
        </div>

        {/* 6. AWARDS ACCORDION */}
        <div className={`accordion-item ${activeSection === 'awards' ? 'open' : ''}`}>
          <div className="accordion-header" onClick={() => toggleSection('awards')}>
            <span><i className="fa-solid fa-ribbon"></i> Awards ({awards.length})</span>
            <i className={`fa-solid fa-chevron-${activeSection === 'awards' ? 'up' : 'down'}`}></i>
          </div>
          {activeSection === 'awards' && (
            <div className="accordion-body">
              {awards.map((item, index) => (
                <div key={item.id || index} className="card-item-box mb-2">
                  <div className="card-item-header">
                    <strong>Award #{index + 1}</strong>
                    <button 
                      className="btn-icon-danger" 
                      onClick={() => dispatch(deleteAward(index))}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                  <div className="form-group mb-2">
                    <label className="form-label-sm">Award Title</label>
                    <input 
                      type="text" 
                      className="form-control form-control-sm"
                      value={item.title || ''}
                      onChange={(e) => dispatch(updateAward({ index, data: { title: e.target.value } }))}
                    />
                  </div>
                  <div className="form-group mb-1">
                    <label className="form-label-sm">Awarded By</label>
                    <input 
                      type="text" 
                      className="form-control form-control-sm"
                      value={item.awardedBy || ''}
                      onChange={(e) => dispatch(updateAward({ index, data: { awardedBy: e.target.value } }))}
                    />
                  </div>
                </div>
              ))}
              <button className="btn btn-outline-primary btn-sm w-100 mt-2" onClick={() => dispatch(addAward())}>
                <i className="fa-solid fa-plus"></i> Add Award Entry
              </button>
            </div>
          )}
        </div>

        {/* 7. SKILLS ACCORDION */}
        <div className={`accordion-item ${activeSection === 'skills' ? 'open' : ''}`}>
          <div className="accordion-header" onClick={() => toggleSection('skills')}>
            <span><i className="fa-solid fa-laptop-code"></i> Skills ({skills.length})</span>
            <i className={`fa-solid fa-chevron-${activeSection === 'skills' ? 'up' : 'down'}`}></i>
          </div>
          {activeSection === 'skills' && (
            <div className="accordion-body">
              {skills.map((sk, index) => (
                <div key={sk.id || index} className="card-item-box mb-2">
                  <div className="card-item-header">
                    <strong>Skill #{index + 1}</strong>
                    <button 
                      className="btn-icon-danger" 
                      onClick={() => dispatch(deleteSkill(index))}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                  <div className="row g-2">
                    <div className="col-5">
                      <input 
                        type="text" 
                        className="form-control form-control-sm"
                        placeholder="Skill Name"
                        value={sk.name || ''}
                        onChange={(e) => dispatch(updateSkill({ index, data: { name: e.target.value } }))}
                      />
                    </div>
                    <div className="col-4">
                      <input 
                        type="text" 
                        className="form-control form-control-sm"
                        placeholder="Level (e.g. 90%)"
                        value={sk.level || ''}
                        onChange={(e) => dispatch(updateSkill({ index, data: { level: e.target.value } }))}
                      />
                    </div>
                    <div className="col-3">
                      <input 
                        type="color" 
                        className="form-control form-control-sm p-0"
                        value={sk.color || '#0175c2'}
                        onChange={(e) => dispatch(updateSkill({ index, data: { color: e.target.value } }))}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button className="btn btn-outline-primary btn-sm w-100 mt-2" onClick={() => dispatch(addSkill({ name: 'New Skill', level: '80%', color: '#0175c2' }))}>
                <i className="fa-solid fa-plus"></i> Add Skill Bar
              </button>
            </div>
          )}
        </div>

        {/* 8. EXTRACURRICULAR ACTIVITIES ACCORDION */}
        <div className={`accordion-item ${activeSection === 'activities' ? 'open' : ''}`}>
          <div className="accordion-header" onClick={() => toggleSection('activities')}>
            <span><i className="fa-solid fa-plus"></i> Extracurricular Activities ({activities.length})</span>
            <i className={`fa-solid fa-chevron-${activeSection === 'activities' ? 'up' : 'down'}`}></i>
          </div>
          {activeSection === 'activities' && (
            <div className="accordion-body">
              <div className="tag-badges-container mb-2">
                {activities.map((act, aIdx) => (
                  <span key={aIdx} className="badge bg-secondary me-1 mb-1 p-2">
                    {act}
                    <i 
                      className="fa-solid fa-xmark ms-2 cursor-pointer" 
                      onClick={() => dispatch(deleteActivity(aIdx))}
                    ></i>
                  </span>
                ))}
              </div>
              <form onSubmit={handleAddActivity} className="input-group input-group-sm">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Add activity (e.g. Traveling)"
                  value={newActivityInput}
                  onChange={(e) => setNewActivityInput(e.target.value)}
                />
                <button type="submit" className="btn btn-secondary">Add</button>
              </form>
            </div>
          )}
        </div>

        {/* 9. SOCIALS ACCORDION */}
        <div className={`accordion-item ${activeSection === 'socials' ? 'open' : ''}`}>
          <div className="accordion-header" onClick={() => toggleSection('socials')}>
            <span><i className="fa-solid fa-globe"></i> Social Links ({socials.length})</span>
            <i className={`fa-solid fa-chevron-${activeSection === 'socials' ? 'up' : 'down'}`}></i>
          </div>
          {activeSection === 'socials' && (
            <div className="accordion-body">
              {socials.map((soc, index) => (
                <div key={soc.id || index} className="card-item-box mb-2">
                  <div className="card-item-header">
                    <strong>Social #{index + 1}</strong>
                    <button 
                      className="btn-icon-danger" 
                      onClick={() => dispatch(deleteSocial(index))}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                  <div className="row g-2">
                    <div className="col-4">
                      <input 
                        type="text" 
                        className="form-control form-control-sm"
                        placeholder="Platform"
                        value={soc.platform || ''}
                        onChange={(e) => dispatch(updateSocial({ index, data: { platform: e.target.value } }))}
                      />
                    </div>
                    <div className="col-4">
                      <input 
                        type="text" 
                        className="form-control form-control-sm"
                        placeholder="Display Handle"
                        value={soc.handle || ''}
                        onChange={(e) => dispatch(updateSocial({ index, data: { handle: e.target.value } }))}
                      />
                    </div>
                    <div className="col-4">
                      <input 
                        type="text" 
                        className="form-control form-control-sm"
                        placeholder="URL"
                        value={soc.url || ''}
                        onChange={(e) => dispatch(updateSocial({ index, data: { url: e.target.value } }))}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button className="btn btn-outline-primary btn-sm w-100 mt-2" onClick={() => dispatch(addSocial())}>
                <i className="fa-solid fa-plus"></i> Add Social Link
              </button>
            </div>
          )}
        </div>

      </div>
    </aside>
  );
}

export default EditorSidebar;
