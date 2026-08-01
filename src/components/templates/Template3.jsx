import React from 'react';
import defaultProfilePic from '../../screens/profile.jpeg';

function Template3({ cvData }) {
  const { personal, additional, work, education, projects, awards, skills, activities, socials, settings } = cvData;
  const icon = settings.bulletIcon || 'fa fa-angle-right';
  const theme = settings.themeColor || '#2c384a';
  const fontFamily = settings.fontFamily || "'Raleway', sans-serif";

  const profileImg = personal.photoUrl || defaultProfilePic;

  return (
    <div className="template3-root" style={{ fontFamily }}>
      {/* ================= PAGE 1 ================= */}
      <div className="t3-page-1">
        {/* HEADER */}
        <div className="headertemp3 d-flex justify-content-between align-items-center p-2 mb-1 text-white rounded" style={{ backgroundColor: theme }}>
          <div>
            <h3 className="text-white fw-bold mb-1 fs-5">{personal.name}</h3>
            <h6 className="text-white-50 mb-1 small">{personal.title}</h6>
            <div className="small text-white-50 d-flex flex-wrap gap-2" style={{ fontSize: '0.78rem' }}>
              {personal.address && <span><i className="fa fa-map-marker me-1"></i>{personal.address}</span>}
              {personal.email && <span><i className="fa fa-inbox me-1"></i><a href={`mailto:${personal.email}`} className="text-white text-decoration-none">{personal.email}</a></span>}
              {personal.phone && <span><i className="fa fa-phone me-1"></i><a href={`tel:${personal.phone}`} className="text-white text-decoration-none">{personal.phone}</a> {personal.altPhone && `, ${personal.altPhone}`}</span>}
            </div>
            {personal.industries && <div className="small text-white-50 mt-1" style={{ fontSize: '0.75rem' }}>{personal.industries}</div>}
          </div>
          <img src={profileImg} alt={personal.name} className="rounded me-1" style={{ width: '85px', height: '85px', objectFit: 'cover', border: '2px solid white' }} />
        </div>

        {/* ADDITIONAL INFO */}
        {additional && (
          <div className="education mb-1">
            <div className="titletemp3" style={{ backgroundColor: theme, color: 'white', padding: '3px 6px', borderRadius: '4px', marginBottom: '4px' }}>
              <h6 className="mb-0 text-white fw-bold small"><i className="fa-solid fa-circle-info me-2"></i>Additional Info</h6>
            </div>
            <ul className="list-unstyled small ms-2 mb-0" style={{ fontSize: '0.8rem', lineHeight: '1.25' }}>
              {additional.maritalStatus && <li><strong>Marital Status:</strong> {additional.maritalStatus}</li>}
              {additional.nationality && <li><strong>Nationality:</strong> {additional.nationality}</li>}
              {additional.language && <li><strong>Language:</strong> {additional.language}</li>}
              {additional.dateOfBirth && <li><strong>Date of Birth:</strong> {additional.dateOfBirth}</li>}
            </ul>
          </div>
        )}

        {/* WORK HISTORY */}
        {work && work.length > 0 && (
          <div className="education mb-1">
            <div className="titletemp3" style={{ backgroundColor: theme, color: 'white', padding: '3px 6px', borderRadius: '4px', marginBottom: '4px' }}>
              <h6 className="mb-0 text-white fw-bold small"><i className="fa fa-history me-2"></i>Work history</h6>
            </div>
            {work.map((w, idx) => (
              <div key={idx} className="mb-1 ms-2">
                <h6 className="fw-bold mb-0 small" style={{ fontSize: '0.85rem' }}><i className={`${icon} me-1`}></i> {w.company}</h6>
                {w.location && <div className="text-muted small ms-3" style={{ fontSize: '0.78rem' }}>{w.location}</div>}
                <div className="small text-secondary ms-3 mb-0" style={{ fontSize: '0.78rem' }}>{w.role} | {w.startDate} - {w.endDate}</div>
                {w.points && (
                  <ul className="small ms-3 mb-0" style={{ fontSize: '0.8rem', paddingLeft: '1.1rem', lineHeight: '1.22' }}>
                    {w.points.map((pt, pIdx) => pt && <li key={pIdx}>{pt}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* NOTEABLE PROJECTS */}
        {projects && projects.length > 0 && (
          <div className="education mb-1">
            <div className="titletemp3" style={{ backgroundColor: theme, color: 'white', padding: '3px 6px', borderRadius: '4px', marginBottom: '4px' }}>
              <h6 className="mb-0 text-white fw-bold small"><i className="fas fa-project-diagram me-2"></i>Noteable Projects</h6>
            </div>
            {projects.map((p, idx) => (
              <div key={idx} className="mb-1 ms-2">
                <h6 className="fw-bold mb-0 small" style={{ fontSize: '0.84rem' }}><i className={`${icon} me-1`}></i> {p.title}</h6>
                <ul className="small ms-3 mb-0" style={{ fontSize: '0.8rem', paddingLeft: '1.1rem', lineHeight: '1.22' }}>
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
      </div>

      {/* ================= PAGE 2 ================= */}
      <div className="t3-page-2 pagebreak">
        {/* EDUCATION */}
        {education && education.length > 0 && (
          <div className="education mb-2 pt-1">
            <div className="titletemp3" style={{ backgroundColor: theme, color: 'white', padding: '4px 8px', borderRadius: '4px', marginBottom: '6px' }}>
              <h6 className="mb-0 text-white fw-bold small"><i className="fas fa-graduation-cap me-2"></i>Education</h6>
            </div>
            {education.map((edu, idx) => (
              <div key={idx} className="mb-2 ms-2">
                <h6 className="fw-bold mb-0 small"><i className={`${icon} me-1`}></i> {edu.degree}</h6>
                <ul className="small ms-3 mb-0" style={{ fontSize: '0.82rem', paddingLeft: '1.2rem' }}>
                  {edu.department && <li>Department - {edu.department}</li>}
                  {edu.graduatedYear && <li>Graduated in {edu.graduatedYear}</li>}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* AWARDS */}
        {awards && awards.length > 0 && (
          <div className="education mb-2">
            <div className="titletemp3" style={{ backgroundColor: theme, color: 'white', padding: '4px 8px', borderRadius: '4px', marginBottom: '6px' }}>
              <h6 className="mb-0 text-white fw-bold small"><i className="fas fa-ribbon me-2"></i>Awards</h6>
            </div>
            {awards.map((a, idx) => (
              <div key={idx} className="mb-2 ms-2">
                <strong className="small" style={{ fontSize: '0.85rem' }}><i className={`${icon} me-1`}></i> {a.title}</strong>
                {a.awardedBy && <div className="small text-muted ms-3" style={{ fontSize: '0.8rem' }}>Awarded By - {a.awardedBy}</div>}
              </div>
            ))}
          </div>
        )}

        {/* SKILLS */}
        {skills && skills.length > 0 && (
          <div className="education mb-2">
            <div className="titletemp3" style={{ backgroundColor: theme, color: 'white', padding: '4px 8px', borderRadius: '4px', marginBottom: '6px' }}>
              <h6 className="mb-0 text-white fw-bold small"><i className="fas fa-laptop-code me-2"></i>Skills</h6>
            </div>
            <div className="p-1">
              {skills.map((sk, idx) => (
                <div key={idx} className="scon mb-2">
                  <div className={`skills ${sk.className || ''}`} style={{ width: sk.level || '80%', backgroundColor: sk.color || '#0175c2', color: 'white', padding: '3px 8px', borderRadius: '4px', fontSize: '0.82rem', textAlign: 'right' }}>
                    {sk.name || sk}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EXTRACURRICULAR ACTIVITIES */}
        {activities && activities.length > 0 && (
          <div className="education mb-2">
            <div className="titletemp3" style={{ backgroundColor: theme, color: 'white', padding: '4px 8px', borderRadius: '4px', marginBottom: '6px' }}>
              <h6 className="mb-0 text-white fw-bold small"><i className="fa fa-plus me-2"></i>Extracurricular Activities</h6>
            </div>
            <ul className="list-unstyled small ms-2 mb-0" style={{ fontSize: '0.83rem' }}>
              {activities.map((act, idx) => (
                <li key={idx} className="mb-1"><i className={`${icon} me-2`}></i> {act}</li>
              ))}
            </ul>
          </div>
        )}

        {/* SOCIALS */}
        {socials && socials.length > 0 && (
          <div className="education mb-2">
            <div className="titletemp3" style={{ backgroundColor: theme, color: 'white', padding: '4px 8px', borderRadius: '4px', marginBottom: '6px' }}>
              <h6 className="mb-0 text-white fw-bold small"><i className="fa fa-globe me-2"></i>Socials</h6>
            </div>
            <div className="p-1">
              {socials.map((soc, idx) => (
                <div key={idx} className="small mb-1" style={{ fontSize: '0.83rem' }}>
                  <i className="fa-solid fa-link me-1 text-primary"></i>
                  <a href={soc.url} target="_blank" rel="noreferrer" className="text-primary text-decoration-underline ms-1">
                    {soc.handle || soc.url}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Template3;
