import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // 🆕 光标追踪状态
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 滚动监听
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔑 页面切换时滚动到顶部（只用这个方法）
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  

  // 表单提交处理
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // 表单输入处理
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
  {
    id: 1,
    title: 'Web Design & UI/UX',
    subtitle: 'Web Design Studio',
    description: 'User-centric interface design focused on clarity, usability, and visual consistency across platforms.',
    features: [
      'UI/UX Design',
      'Responsive Layouts',
      'Accessibility-First Design',
      'Brand-Aligned Visual Systems'
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 2,
    title: 'Frontend Development',
    subtitle: 'Frontend Engineering',
    description: 'High-performance frontend development using modern JavaScript frameworks and component-based architecture.',
    features: [
      'React-based Development',
      'Component Reusability',
      'State Management',
      'Performance Optimization'
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 3,
    title: 'Responsive & Cross-Device Design',
    subtitle: 'Responsive Experience',
    description: 'Seamless digital experiences optimized for desktop, tablet, and mobile environments.',
    features: [
      'Mobile-First Design',
      'Cross-Browser Compatibility',
      'Device Testing & Optimization'
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 4,
    title: 'Deployment & Hosting',
    subtitle: 'Cloud Deployment',
    description: 'Reliable website deployment and hosting using cloud platforms and automated workflows.',
    features: [
      'Static Site Deployment',
      'Version Control Integration',
      'Continuous Deployment',
      'Cloud Hosting (Vercel)'
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
        <path d="M12 2v19"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  // 🆕 新增服务 5
  {
    id: 5,
    title: 'Consultation & Planning',
    subtitle: 'Project Strategy',
    description: 'Providing technical consultation and planning to help clients define requirements and choose suitable web solutions.',
    features: [
      'Technical Consultation',
      'Requirement Analysis',
      'Solution Architecture',
      'Strategic Planning'
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  // 🆕 新增服务 6
  {
    id: 6,
    title: 'Website Maintenance & Support',
    subtitle: 'Ongoing Support',
    description: 'Ongoing website maintenance, updates, and technical support to ensure stability, security, and long-term performance.',
    features: [
      'Regular Updates',
      'Security Monitoring',
      'Performance Optimization'
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #fa8bff 0%, #2bd2ff 90%, #2bff88 100%)'
  }
];
// 添加这个完整的技术栈数据
const technologies = [
  {
    name: 'HTML5',
    category: 'Frontend',
    color: '#E34F26',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    )
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    color: '#1572B6',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm4.133 7.938l.059.82h10.615l-.313 3.53-6.013 1.968-5.975-1.968-.289-3.25h2.93l.143 1.602 3.2.86 3.22-.86.326-3.422H5.562l-.199-2.172h10.938l.197-2.188H3.73l.212 2.28z"/>
      </svg>
    )
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    color: '#F7DF1E',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
      </svg>
    )
  },
  {
    name: 'React',
    category: 'Framework',
    color: '#61DAFB',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
      </svg>
    )
  },
  {
    name: 'Node.js',
    category: 'Backend',
    color: '#339933',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
      </svg>
    )
  },
  {
    name: 'TypeScript',
    category: 'Language',
    color: '#3178C6',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    category: 'Framework',
    color: '#06B6D4',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
      </svg>
    )
  },
  {
    name: 'Git',
    category: 'Tool',
    color: '#F05032',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    )
  },
  {
    name: 'Vercel',
    category: 'Deployment',
    color: '#000000',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 22.525H0l12-21.05 12 21.05z"/>
      </svg>
    )
  },
  {
    name: 'Figma',
    category: 'Design',
    color: '#F24E1E',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/>
      </svg>
    )
  },
  {
    name: 'VS Code',
    category: 'Tool',
    color: '#007ACC',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
      </svg>
    )
  },
  {
    name: 'GitHub',
    category: 'Tool',
    color: '#181717',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    )
  }
];

  const team = [
    {
      name: 'Chen Yan',
      role: 'CEO & Lead Developer',
      photo: '/ChenYan.jpg',
      skills: 'React, Node.js, Python, MongoDB, AWS',
      description: 'Full-stack developer with 8+ years of experience in building scalable web applications.'
    },
    {
      name: 'Fang Siying',
      role: 'Creative Director',
      photo: '/FangSiying.jpg',
      skills: 'React, Node.js, Python, MongoDB, AWS',
      description: 'Award-winning designer specializing in UI/UX and brand identity with a passion for innovation.'
    },
    {
      name: 'Xiao kang',
      role: 'Tech Lead',
      photo: '/XiaoKang.jpg',
      skills: 'React, Node.js, Python, MongoDB, AWS',
      description: 'Expert in React, Node.js, and cloud architecture with a focus on performance optimization.'
    }
  ];

  // 渲染不同页面内容
  const renderPage = () => {
    switch(currentPage) {
      case 'home':
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>
            Crafting <span style={{background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Digital Excellence</span>
          </h1>
          <p>
            We transform ideas into stunning web experiences that drive results. 
            Your vision, our expertise, limitless possibilities.
          </p>
          <div className="cta-buttons">
            <button onClick={() => setCurrentPage('contact')} className="btn btn-primary">Get Started</button>
            <button onClick={() => setCurrentPage('services')} className="btn btn-secondary">Our Services</button>
          </div>
        </div>
      </section>

      {/* 🆕 Why Choose TechVision */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <h2 className="why-choose-title">Why Choose TechVision</h2>
          <div className="why-choose-grid">
            <div className="why-item">
              <div className="why-icon">💻</div>
              <h3>Modern Web Technologies</h3>
              <p>Cutting-edge tools and frameworks for future-proof solutions</p>
            </div>
            <div className="why-item">
              <div className="why-icon">📱</div>
              <h3>Responsive & Cross-Device Design</h3>
              <p>Seamless experience across all devices and platforms</p>
            </div>
            <div className="why-item">
              <div className="why-icon">💬</div>
              <h3>Clear Communication & Teamwork</h3>
              <p>Collaborative approach with transparent project management</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🚀</div>
              <h3>Reliable Deployment Workflow</h3>
              <p>Smooth and secure deployment with continuous integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🆕 Our Process */}
      <section className="process-section">
        <div className="process-container">
          <h2 className="process-title">Our Process</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Requirement Analysis</h3>
                <p>Understanding your needs and defining project scope</p>
              </div>
            </div>
            <div className="process-connector"></div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Design & Prototyping</h3>
                <p>Creating intuitive interfaces and interactive prototypes</p>
              </div>
            </div>
            <div className="process-connector"></div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Development & Testing</h3>
                <p>Building robust solutions with rigorous quality assurance</p>
              </div>
            </div>
            <div className="process-connector"></div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Deployment & Maintenance</h3>
                <p>Launching your project and providing ongoing support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

      case 'services':
  return (
    <section style={{minHeight: '100vh', paddingTop: '200px', paddingBottom: '100px'}}>
      <div className="section-header">
        <h2>Our Services</h2>
        <p>Comprehensive web solutions tailored to your business needs</p>
      </div>
      
      <div className="services-grid-new">
        {services.map((service, index) => (
          <div key={service.id} className="service-card-new" style={{animationDelay: `${index * 0.1}s`}}>
            {/* 装饰性渐变边框 */}
            <div className="card-border-glow" style={{background: service.gradient}}></div>
            
            {/* 卡片内容 */}
            <div className="card-content">
              {/* 图标 */}
              <div className="service-icon-new" style={{background: service.gradient}}>
                {service.icon}
              </div>
              
              {/* 标题部分 */}
              <div className="service-header">
                <h3>{service.title}</h3>
                <p className="service-subtitle">{service.subtitle}</p>
              </div>
              
              {/* 描述 */}
              <p className="service-description">{service.description}</p>
              
              {/* 功能列表（悬停时显示） */}
              <div className="service-features">
                <div className="features-title">Key Features:</div>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-bullet">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* 悬停提示 */}
              <div className="hover-hint">Hover for details</div>
            </div>
          </div>
        ))}
      </div>

      {/* Technologies Section - 全新设计 */}
<div style={{marginTop: '8rem'}}>
  <div className="section-header">
    <h2>Technologies We Use</h2>
    <p>Tools and frameworks powering our solutions</p>
  </div>
  
  <div className="tech-grid-new">
    {technologies.map((tech, index) => (
      <div 
        key={tech.name} 
        className="tech-card-new" 
        style={{
          animationDelay: `${index * 0.05}s`,
          '--tech-color': tech.color
        }}
      >
        <div className="tech-icon-wrapper">
          <div className="tech-icon" style={{color: tech.color}}>
            {tech.icon}
          </div>
        </div>
        <div className="tech-name">{tech.name}</div>
        <div className="tech-category">{tech.category}</div>
      </div>
    ))}
  </div>
</div>
    </section>
  );

      case 'about':
  return (
    <section style={{minHeight: '100vh', paddingTop: '200px', paddingBottom: '100px'}}>
      <div className="section-header">
        <h2>About TechVision</h2>
        <p>Pioneering the future of web design and development</p>
      </div>
      
      {/* 公司介绍 - 全新设计 */}
      <div className="about-hero">
        <div className="about-hero-content">
          <div className="about-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3 className="about-title">Who We Are</h3>
          <p className="about-description">
            TechVision is a web design company formed by computer science students. 
            We focus on creating modern, user-friendly, and responsive websites using 
            current web technologies. Our goal is to deliver practical and effective 
            digital solutions for businesses and organizations.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">3</div>
            <div className="stat-label">Team Members</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">Possibilities</div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mission-vision-new">
        <div className="mv-card-new mission-card">
          <div className="mv-icon">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="3"/>
              <line x1="12" y1="2" x2="12" y2="4"/>
              <line x1="12" y1="20" x2="12" y2="22"/>
              <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/>
              <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/>
              <line x1="2" y1="12" x2="4" y2="12"/>
              <line x1="20" y1="12" x2="22" y2="12"/>
              <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"/>
              <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/>
            </svg>
          </div>
          <h3>Our Mission</h3>
          <div className="mv-line"></div>
          <p>
            To empower businesses with innovative web solutions that not only meet but exceed 
            expectations. We believe in creating digital experiences that are beautiful, 
            functional, and accessible to everyone. Our commitment is to deliver excellence 
            in every project, fostering long-term partnerships built on trust and results.
          </p>
          <div className="mv-features">
            <span className="mv-tag">Innovation</span>
            <span className="mv-tag">Excellence</span>
            <span className="mv-tag">Partnership</span>
          </div>
        </div>

        <div className="mv-card-new vision-card">
          <div className="mv-icon">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <h3>Our Vision</h3>
          <div className="mv-line"></div>
          <p>
            To be the leading web design company recognized for pushing the boundaries of 
            creativity and technology. We envision a digital landscape where every business, 
            regardless of size, has access to world-class web solutions that help them thrive 
            in an increasingly connected world.
          </p>
          <div className="mv-features">
            <span className="mv-tag">Leadership</span>
            <span className="mv-tag">Creativity</span>
            <span className="mv-tag">Growth</span>
          </div>
        </div>
      </div>

      {/* 核心价值观 */}
      <div className="values-section">
        <h3 className="values-title">Our Core Values</h3>
        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon">💡</div>
            <h4>Innovation</h4>
            <p>Constantly pushing boundaries with cutting-edge solutions</p>
          </div>
          <div className="value-item">
            <div className="value-icon">🎯</div>
            <h4>Quality</h4>
            <p>Delivering excellence in every line of code</p>
          </div>
          <div className="value-item">
            <div className="value-icon">🤝</div>
            <h4>Collaboration</h4>
            <p>Working together to achieve exceptional results</p>
          </div>
          <div className="value-item">
            <div className="value-icon">⚡</div>
            <h4>Efficiency</h4>
            <p>Optimizing performance without compromising quality</p>
          </div>
        </div>
      </div>
    </section>
  );

      case 'team':
  return (
    <section style={{minHeight: '100vh', paddingTop: '200px', paddingBottom: '100px'}}>
      <div className="section-header">
        <h2>Meet Our Team</h2>
        <p>Talented professionals dedicated to your success</p>
      </div>
      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className="team-card" style={{animationDelay: `${index * 0.15}s`}}>
            {/* 🔥 圆形头像 */}
            <div className="team-avatar">
              <img src={member.photo} alt={member.name} />
              <div className="avatar-ring"></div>
            </div>
            
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="description">{member.description}</p>
              
              {/* Skills */}
              <div className="skills">
                <strong>Skills:</strong>
                <p>{member.skills}</p>
              </div>

              {/* Social Links */}
              <div className="social-icons">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* 🆕 加入我们组件 */}
      <div className="join-us-section">
        <div className="join-us-container">
          <div className="join-us-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>We're Hiring!</span>
          </div>
          
          <h3 className="join-us-title">Join Our Team</h3>
          <p className="join-us-subtitle">Be Part of Something Amazing</p>
          
          <p className="join-us-description">
            We're always looking for talented, passionate individuals who want to push 
            the boundaries of web design and development. Join us in creating the future 
            of digital experiences.
          </p>
          
          <div className="join-us-benefits">
            <div className="benefit-item">
              <div className="benefit-icon">🚀</div>
              <span>Cutting-Edge Projects</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🌱</div>
              <span>Growth Opportunities</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🤝</div>
              <span>Collaborative Culture</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💡</div>
              <span>Creative Freedom</span>
            </div>
          </div>
          
          <div className="join-us-cta">
            <button className="btn btn-primary join-btn" onClick={() => setCurrentPage('contact')}>
              Apply Now
            </button>
            <button className="btn btn-secondary learn-more-btn" onClick={() => setCurrentPage('about')}>
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );

      case 'contact':
        return (
          <section style={{minHeight: '100vh', paddingTop: '200px'}}>
            <div className="section-header">
              <h2>Get In Touch</h2>
              <p>Let's discuss how we can help bring your vision to life</p>
            </div>
            <div className="contact-container">
  {/* 左侧：Send Us a Message */}
  <div className="contact-form-section">
    <h3>Send Us a Message</h3>
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />
      </div>
      
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
        />
      </div>
      
      <div className="form-group">
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject || ''}
          onChange={handleChange}
          placeholder="Project Inquiry"
          required
        />
      </div>
      
      <div className="form-group">
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          required
        ></textarea>
      </div>
      
      <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
        Send Message
      </button>
    </form>
  </div>

  {/* 右侧：Contact Information */}
  <div className="contact-info-section">
    <h3>Contact Information</h3>
    
    <div className="info-item">
      <div className="info-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m2 7 10 7 10-7"/>
        </svg>
      </div>
      <div className="info-text">
        <h4>Email</h4>
        <p>contact@techvision.com</p>
      </div>
    </div>

    <div className="info-item">
      <div className="info-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </div>
      <div className="info-text">
        <h4>Phone</h4>
        <p>+60 12-345 6789</p>
      </div>
    </div>

    <div className="info-item">
      <div className="info-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </div>
      <div className="info-text">
        <h4>Address</h4>
        <p>Universiti Sains Malaysia, Penang, Malaysia</p>
      </div>
    </div>

    <div className="info-item">
      <div className="info-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      </div>
      <div className="info-text">
        <h4>Business Hours</h4>
        <p>Mon-Fri: 9:00 AM - 6:00 PM MYT</p>
      </div>
    </div>
  </div>
</div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="App">
      {/* 🆕 光标追踪效果 */}
    <div 
      className="cursor-glow" 
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`
      }}
    />
    <div 
      className="cursor-trail" 
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`
      }}
    />
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

{/* Navigation */}
<nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
  <div className="logo" onClick={() => setCurrentPage('home')}>
    TechVision
  </div>
  
  {/* 🆕 汉堡菜单按钮（仅移动端显示） */}
<button 
  className="mobile-menu-toggle"
  onClick={() => {
    setMobileMenuOpen(!mobileMenuOpen);
  }}
  aria-label="Toggle menu"
>
    <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
  </button>
  
  {/* 导航链接 */}
  <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
    <li>
      <a 
        onClick={(e) => { 
          e.preventDefault(); 
          setCurrentPage('home'); 
          setMobileMenuOpen(false); // 🆕 点击后关闭菜单
        }} 
        className={currentPage === 'home' ? 'active' : ''}
      >
        Home
      </a>
    </li>
    <li>
      <a 
        onClick={(e) => { 
          e.preventDefault(); 
          setCurrentPage('services'); 
          setMobileMenuOpen(false);
        }} 
        className={currentPage === 'services' ? 'active' : ''}
      >
        Services
      </a>
    </li>
    <li>
      <a 
        onClick={(e) => { 
          e.preventDefault(); 
          setCurrentPage('about'); 
          setMobileMenuOpen(false);
        }} 
        className={currentPage === 'about' ? 'active' : ''}
      >
        About
      </a>
    </li>
    <li>
      <a 
        onClick={(e) => { 
          e.preventDefault(); 
          setCurrentPage('team'); 
          setMobileMenuOpen(false);
        }} 
        className={currentPage === 'team' ? 'active' : ''}
      >
        Team
      </a>
    </li>
    <li>
      <a 
        onClick={(e) => { 
          e.preventDefault(); 
          setCurrentPage('contact'); 
          setMobileMenuOpen(false);
        }} 
        className={currentPage === 'contact' ? 'active' : ''}
      >
        Contact
      </a>
    </li>
  </ul>
</nav>

      {/* 动态渲染当前页面 */}
      {renderPage()}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="logo">TechVision</h3>
            <p>© 2025 TechVision Web Design Company. All rights reserved.</p>
            <p>Crafting digital excellence, one project at a time.</p>
          </div>
          <div className="footer-section">
            <div className="social-links">
              {/* LinkedIn */}
              <a href="#" className="social-link linkedin-link" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
        
              {/* GitHub */}
              <a href="#" className="social-link github-link" aria-label="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
        
              {/* X (Twitter) */}
              <a href="#" className="social-link x-link" aria-label="X">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="#" className="social-link instagram-link" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;