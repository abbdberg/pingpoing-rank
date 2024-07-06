import { useState } from 'react'

import { History } from './components/History/History';
import { Stats } from './components/Stats/Stats';
import { Match } from './components/Match/Match';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Menu } from 'primereact/menu';
import { TabMenu } from 'primereact/tabmenu';


function App() {

  return (
    <BrowserRouter>
      <div className='main-content'>
        <Routes>
          <Route path="/" element={<Match />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
      {/* <div className='navbar'> */}
        <BottomNav />
      {/* </div> */}

    </BrowserRouter>

  );
}

function BottomNav() {
  const navigate = useNavigate();
  // const location = useLocation();

  return (
    <TabMenu
    
    defaultChecked
      model={[
        { label: 'Match', icon: 'pi pi-fw pi-home', command: () => navigate('/') },
        { label: 'Stats', icon: 'pi pi-fw pi-chart-line', command: () => navigate('/stats') },
        { label: 'History', icon: 'pi pi-fw pi-calendar', command: () => navigate('/history') },

      ]}
    />
  );
}

export default App
