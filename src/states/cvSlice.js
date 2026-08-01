import { createSlice } from '@reduxjs/toolkit';

const initialPdfSampleState = {
  personal: {
    name: 'Syed Arfin Hayet',
    title: 'Software Developer',
    address: 'Mirpur 1 , Dhaka',
    email: 'Arfinhayet786@gmail.com',
    phone: '+8801854652339',
    altPhone: '+8801533748448',
    photoUrl: '', // Will use profile image fallback
    industries: 'Industries : OTA, Blockchain Integration, Hospital Erp'
  },
  additional: {
    maritalStatus: 'Married',
    nationality: 'Bangladeshi',
    language: 'Bangla(Fluent), English(Conversational)',
    dateOfBirth: '31st august 1997'
  },
  work: [
    {
      id: 'w1',
      company: 'Mynztrip.com',
      location: 'Cube inventure, Banani Dhaka',
      role: 'Senior Software Engineer',
      startDate: '15/04/2026',
      endDate: 'Present',
      points: [
        'Worked in OTA project',
        'Worked in OTA Backoffice management system',
        'Worked in large scale ERP software'
      ]
    },
    {
      id: 'w2',
      company: 'Prime Tech Solutions Ltd',
      location: 'TK Bhaban, Karwanbazar Dhaka',
      role: 'Software Engineer',
      startDate: '01/02/2023',
      endDate: '14/04/2026',
      points: [
        'Worked in advertisement automations project using nodejs , React',
        'Worked in blockchain transaction process with node.js',
        'Worked in OTA portal with Angular'
      ]
    },
    {
      id: 'w3',
      company: 'mPair Technologies Ltd',
      location: 'Wasa , Chittagong',
      role: 'Software Engineer',
      startDate: '15/07/2022',
      endDate: '15/01/2023',
      points: [
        'Developed cloud business logic with node.js',
        'Developed Desktop application with Electron',
        'Developed Web Front End with React, Vue'
      ]
    }
  ],
  education: [
    {
      id: 'e1',
      degree: 'Post Graduate Diploma - IT, Jahangirnagar University',
      department: 'Institute of Information Technology(IIT)',
      graduatedYear: '2026'
    },
    {
      id: 'e2',
      degree: "B.S.S(Hon's), University Of Chittagong",
      department: 'Public Administration',
      graduatedYear: '2022'
    }
  ],
  projects: [
    {
      id: 'p1',
      title: 'Kijiji - Advertisement Automation tool',
      client: "Kijiji - Buy, Sell & Save with Canada's #1 Local Marketplaces ...",
      workplace: 'Prime Tech Solutions Ltd.',
      link: 'https://advertise.kijiji.ca/',
      techMetrics: 'React,Nodejs,Mysql, Aws - Cognito, Lamda, Sqs,'
    },
    {
      id: 'p2',
      title: 'OTA - B2C,B2B Client Portal',
      client: 'Etryyp(Novoair), BuyTickets, Cosmos Holiday, Flights Nepal Etc.',
      workplace: 'Prime Tech Solutions Ltd.',
      link: 'Flight Nepal ,Etryyp(Novoair) ,Cosmos Holiday',
      techMetrics: 'Angular (Frontend)'
    },
    {
      id: 'p3',
      title: 'Doctor appointment system (Web , Mobile application)',
      client: 'Parkview Hospital Ltd.',
      workplace: 'mPair Technologies Ltd.',
      link: 'Parkview web, Mobile App',
      techMetrics: 'Vue.js, Flutter, node.js'
    },
    {
      id: 'p4',
      title: 'Flydocx- Travel Agency Management Software',
      client: 'Approximately Seven Travel Agencies',
      workplace: 'mPair Technologies Ltd.',
      link: 'flydocx.com',
      techMetrics: 'React.js, Electron, node.js'
    },
    {
      id: 'p5',
      title: 'IT Phonestore e-commerce site/',
      client: 'IT Phonestore',
      workplace: '',
      link: 'IT Phonestore',
      techMetrics: 'Node.js, React'
    }
  ],
  awards: [
    {
      id: 'a1',
      title: 'Employee Of The Year 2022',
      awardedBy: 'mPair Technologies'
    },
    {
      id: 'a2',
      title: 'National Startup Camp top 100 List for House-let (A Startup Co-founded by me)',
      awardedBy: 'Startup Bangladesh'
    },
    {
      id: 'a3',
      title: 'Huawei ICT incubator top 30 List for Sowda - Independent Marketplace (A Startup Co-founded by me)',
      awardedBy: 'Huawei inc.'
    }
  ],
  skills: [
    { id: 'sk1', name: 'Javascript', level: '90%', color: '#e44d26', className: 'js' },
    { id: 'sk2', name: 'Dart', level: '70%', color: '#0175c2', className: 'dart' },
    { id: 'sk3', name: 'Php', level: '60%', color: '#16a085', className: 'php' },
    { id: 'sk4', name: 'Mysql', level: '80%', color: '#f39c12', className: 'server' }
  ],
  activities: [
    'Learning New Tech',
    'Reading Books',
    'Traveling',
    'Software Testing'
  ],
  socials: [
    { id: 's1', platform: 'LinkedIn', url: 'https://www.linkedin.com/in/Syed-arfin-hayet/', handle: '/in/Syed-arfin-hayet' },
    { id: 's2', platform: 'GitHub', url: 'http://github.com/ArfinHayet', handle: '/ArfinHayet' }
  ],
  settings: {
    templateId: 5,
    bulletIcon: 'fa fa-angle-right',
    themeColor: ''
  }
};

const loadInitialState = () => {
  try {
    const saved = localStorage.getItem('cv_maker_data_v2');
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...initialPdfSampleState, ...parsed };
    }
  } catch (err) {
    console.error('Failed to load local storage CV state:', err);
  }
  return initialPdfSampleState;
};

const cvSlice = createSlice({
  name: 'cv',
  initialState: loadInitialState(),
  reducers: {
    updatePersonal: (state, action) => {
      state.personal = { ...state.personal, ...action.payload };
    },
    updateAdditional: (state, action) => {
      state.additional = { ...state.additional, ...action.payload };
    },
    // Work
    addWork: (state, action) => {
      state.work.push({
        id: 'w_' + Date.now(),
        company: '',
        location: '',
        role: '',
        startDate: '',
        endDate: '',
        points: [''],
        ...action.payload
      });
    },
    updateWork: (state, action) => {
      const { index, data } = action.payload;
      if (state.work[index]) {
        state.work[index] = { ...state.work[index], ...data };
      }
    },
    deleteWork: (state, action) => {
      state.work.splice(action.payload, 1);
    },
    addWorkPoint: (state, action) => {
      const { workIndex, point } = action.payload;
      if (state.work[workIndex]) {
        state.work[workIndex].points.push(point || '');
      }
    },
    updateWorkPoint: (state, action) => {
      const { workIndex, pointIndex, value } = action.payload;
      if (state.work[workIndex] && state.work[workIndex].points[pointIndex] !== undefined) {
        state.work[workIndex].points[pointIndex] = value;
      }
    },
    deleteWorkPoint: (state, action) => {
      const { workIndex, pointIndex } = action.payload;
      if (state.work[workIndex]) {
        state.work[workIndex].points.splice(pointIndex, 1);
      }
    },
    // Education
    addEducation: (state, action) => {
      state.education.push({
        id: 'e_' + Date.now(),
        degree: '',
        department: '',
        graduatedYear: '',
        ...action.payload
      });
    },
    updateEducation: (state, action) => {
      const { index, data } = action.payload;
      if (state.education[index]) {
        state.education[index] = { ...state.education[index], ...data };
      }
    },
    deleteEducation: (state, action) => {
      state.education.splice(action.payload, 1);
    },
    // Projects
    addProject: (state, action) => {
      state.projects.push({
        id: 'p_' + Date.now(),
        title: '',
        client: '',
        workplace: '',
        link: '',
        techMetrics: '',
        ...action.payload
      });
    },
    updateProject: (state, action) => {
      const { index, data } = action.payload;
      if (state.projects[index]) {
        state.projects[index] = { ...state.projects[index], ...data };
      }
    },
    deleteProject: (state, action) => {
      state.projects.splice(action.payload, 1);
    },
    // Awards
    addAward: (state, action) => {
      state.awards.push({
        id: 'a_' + Date.now(),
        title: '',
        awardedBy: '',
        ...action.payload
      });
    },
    updateAward: (state, action) => {
      const { index, data } = action.payload;
      if (state.awards[index]) {
        state.awards[index] = { ...state.awards[index], ...data };
      }
    },
    deleteAward: (state, action) => {
      state.awards.splice(action.payload, 1);
    },
    // Skills
    addSkill: (state, action) => {
      state.skills.push({
        id: 'sk_' + Date.now(),
        name: action.payload.name || '',
        level: action.payload.level || '80%',
        color: action.payload.color || '#0175c2',
        className: 'custom'
      });
    },
    updateSkill: (state, action) => {
      const { index, data } = action.payload;
      if (state.skills[index]) {
        state.skills[index] = { ...state.skills[index], ...data };
      }
    },
    deleteSkill: (state, action) => {
      state.skills.splice(action.payload, 1);
    },
    // Activities
    addActivity: (state, action) => {
      if (action.payload && !state.activities.includes(action.payload)) {
        state.activities.push(action.payload);
      }
    },
    deleteActivity: (state, action) => {
      state.activities.splice(action.payload, 1);
    },
    // Socials
    addSocial: (state, action) => {
      state.socials.push({
        id: 's_' + Date.now(),
        platform: '',
        url: '',
        handle: '',
        ...action.payload
      });
    },
    updateSocial: (state, action) => {
      const { index, data } = action.payload;
      if (state.socials[index]) {
        state.socials[index] = { ...state.socials[index], ...data };
      }
    },
    deleteSocial: (state, action) => {
      state.socials.splice(action.payload, 1);
    },
    // Settings
    updateSettings: (state, action) => {
      state.settings = { ...state.settings, ...action.payload };
    },
    loadFullCV: (state, action) => {
      return { ...initialPdfSampleState, ...action.payload };
    },
    resetToDefault: () => {
      localStorage.removeItem('cv_maker_data_v2');
      return initialPdfSampleState;
    }
  }
});

export const {
  updatePersonal, updateAdditional,
  addWork, updateWork, deleteWork, addWorkPoint, updateWorkPoint, deleteWorkPoint,
  addEducation, updateEducation, deleteEducation,
  addProject, updateProject, deleteProject,
  addAward, updateAward, deleteAward,
  addSkill, updateSkill, deleteSkill,
  addActivity, deleteActivity,
  addSocial, updateSocial, deleteSocial,
  updateSettings, loadFullCV, resetToDefault
} = cvSlice.actions;

export default cvSlice.reducer;
