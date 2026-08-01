import React from 'react';
import defaultProfilePic from '../../screens/profile.jpeg';

function Template2({ cvData }) {
  const { personal, additional, work, education, projects, awards, skills, activities, socials, settings } = cvData;
  const icon = settings.bulletIcon || 'fa fa-angle-right';
  const theme = settings.themeColor || '#2c384a';
  const fontFamily = settings.fontFamily || "'Raleway', sans-serif";

  const profileImg = personal.photoUrl || defaultProfilePic;

  return (
    <div className="template2-root position-relative" style={{ fontFamily }}>
      <div className="template2-layout d-flex position-relative">
        {/* MAINBAR LEFT (70% width) */}
        <div className="mainbartemp2 p-3" style={{ width: '70%' }}>
          {/* HEADER */}
          <div className="header mb-3 pb-2 border-bottom" style={{ borderColor: theme }}>
            <h2 className="fw-bold" style={{ color: theme }}>{personal.name}</h2>
            <h5 className="text-secondary">{personal.title}</h5>
            <div className="small text-muted mt-2">
              {personal.address && <div className="mb-1"><i className="fa fa-map-marker me-1"></i>{personal.address}</div>}
              {personal.email && <div className="mb-1"><i className="fa fa-inbox me-1"></i><a href={`mailto:${personal.email}`} className="text-muted text-decoration-none">{personal.email}</a></div>}
              {personal.phone && <div><i className="fa fa-phone me-1"></i><a href={`tel:${personal.phone}`} className="text-muted text-decoration-none">{personal.phone}</a> {personal.altPhone && `, ${personal.altPhone}`}</div>}
              {personal.industries && <div className="mt-1 text-secondary">{personal.industries}</div>}
            </div>
          </div>

          {/* ADDITIONAL INFO */}
          {additional && (
            <div className="education mb-3">
              <h5 className="fw-bold" style={{ color: theme, borderBottom: `2px solid ${theme}` }}>
                <i className="fa-solid fa-circle-info me-2"></i>Additional Info
              </h5>
              <ul className="list-unstyled small ms-2 mb-0">
                {additional.maritalStatus && <li><strong>Marital Status:</strong> {additional.maritalStatus}</li>}
                {additional.nationality && <li><strong>Nationality:</strong> {additional.nationality}</li>}
                {additional.language && <li><strong>Language:</strong> {additional.language}</li>}
                {additional.dateOfBirth && <li><strong>Date of Birth:</strong> {additional.dateOfBirth}</li>}
              </ul>
            </div>
          )}

          {/* WORK HISTORY */}
          {work && work.length > 0 && (
            <div className="education mb-3">
              <h5 className="fw-bold" style={{ color: theme, borderBottom: `2px solid ${theme}` }}>
                <i className="fa fa-history me-2"></i>Work history
              </h5>
              {work.map((w, idx) => (
                <div key={idx} className="mb-2">
                  <h6 className="fw-bold mb-0"><i className={`${icon} me-1`}></i> {w.company}</h6>
                  {w.location && <div className="text-muted small ms-3">{w.location}</div>}
                  <div className="small text-secondary ms-3 mb-1">{w.role} | {w.startDate} - {w.endDate}</div>
                  {w.points && (
                    <ul className="small ms-3">
                      {w.points.map((pt, pIdx) => pt && <li key={pIdx}>{pt}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* NOTEABLE PROJECTS */}
          {projects && projects.length > 0 && (
            <div className="education mb-3">
              <h5 className="fw-bold" style={{ color: theme, borderBottom: `2px solid ${theme}` }}>
                <i className="fas fa-project-diagram me-2"></i>Noteable Projects
              </h5>
              {projects.map((p, idx) => (
                <div key={idx} className="mb-2">
                  <h6 className="fw-bold mb-0"><i className={`${icon} me-1`}></i> {p.title}</h6>
                  <ul className="small ms-3 mb-0">
                    {p.client && <li>Client - {p.client}</li>}
                    {p.workplace && <li>Workplace- {p.workplace}</li>}
                    {p.link && (
                      <li>
                        Link-{' '}
                        <a 
                          href={p.link.startsWith('http') ? p.link : `https://${p.link}`} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-primary text-decoration-underline"
                        >
                          {p.link}
                        </a>
                      </li>
                    )}
                    {p.techMetrics && <li>Technology metrics - {p.techMetrics}</li>}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* EDUCATION */}
          {education && education.length > 0 && (
            <div className="education mb-3">
              <h5 className="fw-bold" style={{ color: theme, borderBottom: `2px solid ${theme}` }}>
                <i className="fas fa-graduation-cap me-2"></i>Education
              </h5>
              {education.map((edu, idx) => (
                <div key={idx} className="mb-2">
                  <h6 className="fw-bold mb-0"><i className={`${icon} me-1`}></i> {edu.degree}</h6>
                  <ul className="small ms-3 mb-0">
                    {edu.department && <li>Department - {edu.department}</li>}
                    {edu.graduatedYear && <li>Graduated in {edu.graduatedYear}</li>}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* AWARDS */}
          {awards && awards.length > 0 && (
            <div className="education mb-3">
              <h5 className="fw-bold" style={{ color: theme, borderBottom: `2px solid ${theme}` }}>
                <i className="fas fa-ribbon me-2"></i>Awards
              </h5>
              {awards.map((a, idx) => (
                <div key={idx} className="mb-2 ms-2">
                  <strong className="small"><i className={`${icon} me-1`}></i> {a.title}</strong>
                  {a.awardedBy && <div className="small text-muted ms-3">Awarded By - {a.awardedBy}</div>}
                </div>
              ))}
            </div>
          )}

          {/* EXTRACURRICULAR ACTIVITIES */}
          {activities && activities.length > 0 && (
            <div className="education mb-3">
              <h5 className="fw-bold" style={{ color: theme, borderBottom: `2px solid ${theme}` }}>
                <i className="fa fa-plus me-2"></i>Extracurricular Activities
              </h5>
              <ul className="list-unstyled small ms-2 mb-0">
                {activities.map((act, idx) => (
                  <li key={idx}><i className={`${icon} me-2`}></i> {act}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* SIDEBAR RIGHT (30% width) */}
        <div className="sidebartemp2 p-3 text-white" style={{ width: '30%', backgroundColor: theme }}>
          <div className="text-center mb-3">
            <img src={profileImg} alt={personal.name} className="img-fluid rounded-circle" style={{ width: '120px', height: '120px', objectFit: 'cover', border: '3px solid white' }} />
          </div>

          {skills && skills.length > 0 && (
            <div className="skillbox mb-4">
              <h5 className="text-white border-bottom pb-1 mb-2"><i className="fas fa-laptop-code me-2"></i>Skills</h5>
              {skills.map((sk, idx) => (
                <div key={idx} className="scon mb-2">
                  <div className={`skills ${sk.className || ''}`} style={{ width: sk.level || '80%', backgroundColor: sk.color || '#0175c2', color: 'white', padding: '3px 8px', borderRadius: '4px', fontSize: '0.8rem', textAlign: 'right' }}>
                    {sk.name || sk}
                  </div>
                </div>
              ))}
            </div>
          )}

          {socials && socials.length > 0 && (
            <div className="skillbox mb-3">
              <h5 className="text-white border-bottom pb-1 mb-2"><i className="fa fa-globe me-2"></i>Socials</h5>
              {socials.map((soc, idx) => (
                <div key={idx} className="small mb-2 text-white-50">
                  <i className="fa-solid fa-link me-1 text-white"></i>
                  <a href={soc.url} target="_blank" rel="noreferrer" className="text-white text-decoration-underline ms-1">
                    {soc.handle || soc.url}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Template2;
