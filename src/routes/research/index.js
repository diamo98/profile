import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';

const Research = () => {
  const [activeTab, setActiveTab] = useState('interests');

  const renderContent = () => {
    switch(activeTab) {
      case 'interests':
        return (
          <div>
            <h2>Research Interests</h2>
            <ul>
              <li>Wireless communications.</li>
              <li>Integrated sensing and communications (ISAC).</li>
              <li>Multiple antenna communications.</li>
              <li>Trustworthiness in 6G and physical layer security.</li>
            </ul>
          </div>
        );
      case 'group':
        return (
          <div>
            <h2>Research Group and Former Students</h2>
            <h3>Doctoral Students:</h3>
            <ul>
              <li>Henrik Åkesson, Linköping University. Main supervisor.</li>
              <li>Palatip Jopanya, Linköping University. Main supervisor.</li>
              <li>Ahmet Kaplan. Linköping University. Co-supervisor.</li>
              <li>Dexin Kong. Linköping University. Co-supervisor.</li>
            </ul>
            <h3>Former Students:</h3>
            <h4>Doctoral Students:</h4>
            <ul>
              <li>José David Vega Sánchez, Escuela Politécnica Nacional (EPN), Ecuador. Co-supervisor.</li>
            </ul>
            <h4>Master Students:</h4>
            <ul>
              <li>Henrik Åkesson (2024). Linköping University. Supervisor.</li>
              <li>Simon Persson (2024). Linköping University. Examiner.</li>
              <li>Gunnar Engström (2024). Linköping University. Examiner.</li>
              <li>Xavier Alejandro Flores Cabezas (2022), University of Oulu, Finland. Supervisor.</li>
            </ul>
            
          </div>
        );
      case 'projects':
        return (
          <div>
            <h2>Projects and Grants</h2>
            <h3>Projects:</h3>
            <ul>
              <li>HIGH-SENSE: Multiband Cooperation for High-Resolution Sensing in ISAC Systems, funded by ELLIIT - Call E. 2025-2029.</li>
              <li>ALERT: eArLy warning systEms for dRone detection based on disTributed integrated sensing and communication, funded by WASP. PI. 2024-2029.</li>
              <li>CO-ISAC: Coherent Processing for Multi-Static ISAC Systems in 6G Networks, funded by Vinnova (6G – Research and innovation 2024). Co-PI. 2025-2026</li>
              <li>RE-ROUTE. Main contact from UOULU and Task 4.3 leader. (2023-2027). Funding: Eu HORIZON-MSCA-SE-2021.</li>
              <li>FAITH - SaFeguarding mAchine-type communIcation neTworks at the pHysical layer. Principal Investigator (2020-2024). Funding: Academy of Finland</li>
              <li>INSPIRE-5Gplus, 5G PPP, 5G Security. Task leader (2019-2022). Funding: Horizon 2020 Project</li>
              <li>Security in wireless communication systems 5G: New approaches from the Physical Layer Perspective. Principal Investigator (2017-2020). Funding: Brazilian National Council for Scientific and Technological Development (CNPq).</li>
              <li>Ultra-reliable and low-latency communications for 5G. Principal Investigator (2018-2019). Funding: São Paulo Research Foundation (FAPESP).</li>
            </ul>
            <h3>Grants:</h3>
            <ul>
              <li>Postdoctoral research fellow grant. (2020-2024) Funding: Academy of Finland</li>
              <li>Ultra-reliable and low-latency communications for 5G networks. Grant Researcher Abroad (2018-2019) Funding: São Paulo Research Foundation (FAPESP)</li>
              <li>Doctoral Student grant. (2011-2015) Funding: Coordination of Superior Level Staff Improvement (CAPES)</li>
              <li>Master´s Student grant. (2009-2011) Brazilian National Council for Scientific and Technological Development (CNPq)</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div class={style.research}>
      <h1>Research</h1>
      <div class={style.tabs}>
        <button 
          class={activeTab === 'interests' ? style.active : ''} 
          onClick={() => setActiveTab('interests')}
        >
          Research Interests
        </button>
        <button 
          class={activeTab === 'group' ? style.active : ''} 
          onClick={() => setActiveTab('group')}
        >
          Research Group
        </button>
        <button 
          class={activeTab === 'projects' ? style.active : ''} 
          onClick={() => setActiveTab('projects')}
        >
          Projects and Grants
        </button>
      </div>
      <div class={style.content}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Research;



