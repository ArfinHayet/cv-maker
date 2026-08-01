import React from 'react';
import bgImage from '../../screens/icons/background.jpg';
import defaultProfilePic from '../../screens/profile.jpeg';

function SundorTemplate({ cvData }) {
  const { personal, additional, work, education, projects, awards, skills, activities, socials, settings } = cvData;
  const icon = settings.bulletIcon || 'fa fa-angle-right';
  const theme = settings.themeColor || '';

  const profileImg = personal.photoUrl || defaultProfilePic;

  return (
    <div className="sundor-template-wrapper" style={{ fontFamily: "'Raleway', sans-serif" }}>
      {/* ================= PAGE 1 ================= */}
      <div className="sundor-page-1">
        {/* 1. SUNDOR HEADER BOX */}
        <div 
          className="sundorHeaderbox d-flex" 
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '15px 20px',
            height: '180px',
            backgroundColor: theme || '#0B1F27',
            position: 'relative'
          }}
        >
          <div className="sundorimgBox">
            <img src={profileImg} alt={personal.name || 'Profile'} />
          </div>

          <div className="txt-white ms-3 p-1">
            <h3 className="fw-bold mb-1 fs-4">{personal.name || 'Syed Arfin Hayet'}</h3>
            <h6 className="mb-2 text-light">{personal.title || 'Software Developer'}</h6>
            {personal.address && (
              <div className="small mb-1"><i className="txt-white fa fa-map-marker me-2"></i>{personal.address}</div>
            )}
            {(personal.phone || personal.altPhone) && (
              <div className="small mb-1">
                <i className="txt-white fa fa-phone me-2"></i>
                {personal.phone} {personal.altPhone ? ` , ${personal.altPhone}` : ''}
              </div>
            )}
            {personal.email && (
              <div className="small mb-1"><i className="txt-white fa fa-envelope me-2"></i>{personal.email}</div>
            )}
            {personal.industries && (
              <div className="small mb-1"><i className="txt-white fa fa-tasks me-2"></i>{personal.industries}</div>
            )}
          </div>
        </div>

        {/* 2. ADDITIONAL INFO (Positions right next to hanging profile picture box) */}
        <div className="sundorAddition">
          <div className="bg-white p-2 sundorElm">
            <div className="sundorTitle">
              <h6 className="mb-0 fw-bold"><i className="fa-solid fa-circle-info me-2"></i> Additional Info</h6>
            </div>
            <ul className="list-unstyled mb-0 small ms-1">
              {additional?.maritalStatus && (
                <li className="mb-1">
                  <div className="d-flex justify-content-between" style={{ width: '100%' }}>
                    <div className="w-40 text-left fw-bold">Marital Status -</div>
                    <div className="w-60 text-left">{additional.maritalStatus}</div>
                  </div>
                </li>
              )}
              {additional?.nationality && (
                <li className="mb-1">
                  <div className="d-flex justify-content-between" style={{ width: '100%' }}>
                    <div className="w-40 text-left fw-bold">Nationality -</div>
                    <div className="w-60 text-left">{additional.nationality}</div>
                  </div>
                </li>
              )}
              {additional?.language && (
                <li className="mb-1">
                  <div className="d-flex justify-content-between" style={{ width: '100%' }}>
                    <div className="w-40 text-left fw-bold">Language -</div>
                    <div className="w-60 text-left">{additional.language}</div>
                  </div>
                </li>
              )}
              {additional?.dateOfBirth && (
                <li className="mb-1">
                  <div className="d-flex justify-content-between" style={{ width: '100%' }}>
                    <div className="w-40 text-left fw-bold">Date of Birth -</div>
                    <div className="w-60 text-left">{additional.dateOfBirth}</div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* 3. PAGE 1 TWO COLUMN GRID (sundorBox) */}
        <div className="sundorBox mt-2">
          {/* COLUMN 1 (F1): NOTEABLE PROJECTS */}
          <div className="sundorF1">
            {projects && projects.length > 0 && (
              <div className="bg-white p-2 sundorElm">
                <div className="sundorTitle">
                  <h6 className="mb-0 fw-bold"><i className="fas fa-project-diagram me-2"></i> Noteable Projects</h6>
                </div>
                {projects.map((proj, idx) => (
                  <div key={proj.id || idx} className="mb-2">
                    <h6 className="fw-bold mb-1 small">
                      <i className={`${icon} me-1`}></i> {proj.title}
                    </h6>
                    <ul className="sundor-sub-list small">
                      {proj.client && <li>Client - {proj.client}</li>}
                      {proj.workplace && <li>Workplace- {proj.workplace}</li>}
                      {proj.link && (
                        <li>
                          Link-{' '}
                          <a href={proj.link.startsWith('http') ? proj.link : `https://${proj.link}`} target="_blank" rel="noreferrer" className="text-primary text-decoration-underline">
                            {proj.link}
                          </a>
                        </li>
                      )}
                      {proj.techMetrics && <li>Technology metrics - {proj.techMetrics}</li>}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* COLUMN 2 (F2): WORK HISTORY & EDUCATION */}
          <div className="sundorF2">
            {/* WORK HISTORY */}
            {work && work.length > 0 && (
              <div className="bg-white p-2 sundorElm mb-2">
                <div className="sundorTitle">
                  <h6 className="mb-0 fw-bold"><i className="fa fa-history me-2"></i> Work history</h6>
                </div>
                {work.map((w, idx) => (
                  <div key={w.id || idx} className="mb-2">
                    <h6 className="fw-bold mb-0 small">
                      <i className={`${icon} me-1`}></i> {w.company}
                    </h6>
                    {w.location && <div className="txt-grey small ms-3">{w.location}</div>}
                    <div className="midHead small ms-3 my-1">
                      {w.role} | {w.startDate} - {w.endDate}
                    </div>
                    {w.points && w.points.length > 0 && (
                      <ul className="sundor-sub-list small">
                        {w.points.map((pt, pIdx) => pt && <li key={pIdx}>{pt}</li>)}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* EDUCATION */}
            {education && education.length > 0 && (
              <div className="bg-white p-2 sundorElm">
                <div className="sundorTitle">
                  <h6 className="mb-0 fw-bold"><i className="fas fa-graduation-cap me-2"></i> Education</h6>
                </div>
                {education.map((edu, idx) => (
                  <div key={edu.id || idx} className="mb-2">
                    <h6 className="fw-bold mb-1 small">
                      <i className={`${icon} me-1`}></i> {edu.degree}
                    </h6>
                    <ul className="sundor-sub-list small">
                      {edu.department && <li>Department - {edu.department}</li>}
                      {edu.graduatedYear && <li>Graduated in {edu.graduatedYear}</li>}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= PAGE 2 ================= */}
      <div className="sundorBox pagebreak mt-3">
        {/* COLUMN 1 (F1): AWARDS & EXTRACURRICULAR */}
        <div className="sundorF1">
          {/* AWARDS */}
          {awards && awards.length > 0 && (
            <div className="bg-white p-2 sundorElm mb-3">
              <div className="sundorTitle">
                <h6 className="mb-0 fw-bold"><i className="fas fa-ribbon me-2"></i> Awards</h6>
              </div>
              {awards.map((award, idx) => (
                <div key={award.id || idx} className="mb-3">
                  <h6 className="fw-bold mb-1 small">
                    <i className={`${icon} me-1`}></i> {award.title}
                  </h6>
                  <ul className="sundor-sub-list small">
                    {award.awardedBy && <li>Awarded By - {award.awardedBy}</li>}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* EXTRACURRICULAR ACTIVITIES */}
          {activities && activities.length > 0 && (
            <div className="bg-white p-2 sundorElm mb-3">
              <div className="sundorTitle">
                <h6 className="mb-0 fw-bold"><i className="fa fa-plus me-2"></i> Extracurricular Activities</h6>
              </div>
              {activities.map((act, idx) => (
                <div key={idx} className="mb-2">
                  <h6 className="fw-bold mb-0 small">
                    <i className={`${icon} me-2`}></i> {act}
                  </h6>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* COLUMN 2 (F2): SKILLS & SOCIALS */}
        <div className="sundorF2">
          {/* SKILLS */}
          {skills && skills.length > 0 && (
            <div className="bg-white p-2 sundorElm mb-3">
              <div className="sundorTitle">
                <h6 className="mb-0 fw-bold"><i className="fas fa-laptop-code me-2"></i> Skills</h6>
              </div>
              {skills.map((sk, idx) => (
                <div key={sk.id || idx} className="scon mb-2">
                  <div 
                    className={`skills ${sk.className || ''}`}
                    style={{
                      width: sk.level || '80%',
                      backgroundColor: sk.color || '#0175c2'
                    }}
                  >
                    {sk.name}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SOCIALS */}
          {socials && socials.length > 0 && (
            <div className="bg-white p-2 sundorElm mb-3">
              <div className="sundorTitle">
                <h6 className="mb-0 fw-bold"><i className="fa fa-globe me-2"></i> Socials</h6>
              </div>
              <div>
                {socials.map((soc, idx) => (
                  <h6 key={soc.id || idx} className="mb-2 d-flex align-items-center small">
                    <i className={`${icon} me-2`}></i>
                    {soc.platform === 'LinkedIn' ? (
                      <i className="fa-brands fa-linkedin me-2 text-primary fs-5"></i>
                    ) : soc.platform === 'GitHub' ? (
                      <i className="fa-brands fa-github me-2 text-dark fs-5"></i>
                    ) : (
                      <i className="fa-solid fa-link me-2 text-secondary"></i>
                    )}
                    <a href={soc.url} target="_blank" rel="noreferrer" className="text-decoration-underline text-primary ms-1">
                      {soc.handle || soc.url}
                    </a>
                  </h6>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SundorTemplate;
