import { History } from './components/History/History';
import Ranking from './components/Ranking/Ranking';
import { Match } from './components/Match/Match';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { TabMenu } from 'primereact/tabmenu';
import User from './components/User/User';


function App() {

  return (

    <BrowserRouter
    basename='/pingpoing-rank'
    >
       
      <div className='main-content'>
        <Routes>
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/history" element={<History />} />
          <Route path="/user" element={<User />} />
          <Route path="/" element={<Match />} />
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
      model={[
        { label: 'Match', icon: 'pi pi-fw pi-home', command: () => navigate('/') },
        { label: 'Rank', icon: 'pi pi-fw pi-chart-line', command: () => navigate('/ranking') },
        { label: 'Hist', icon: 'pi pi-fw pi-calendar', command: () => navigate('/history') },
        { label: 'User', icon: 'pi pi-fw pi-user', command: () => navigate('/user') },

      ]}
    />
  );
}

export default App
