import { useState } from 'react'

import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SettingsIcon from '@mui/icons-material/Settings';

import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { TopBar } from './components/TopBar/TopBar';
import { History } from './components/History/History';
import { Stats } from './components/Stats/Stats';
import { Match } from './components/Match/Match';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <div style={{
        display: "flex",
        height: "100%",
        flexDirection: "column"
      }}>
        <TopBar />
        <Box sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Match />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </Box>
        <BottomNav />
      </div ></BrowserRouter>

  );
}

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleChange = (_, newValue:unknown)  => {
    navigate(newValue as string);
  };

  return (
    <Box>
      <BottomNavigation showLabels value={location.pathname} onChange={handleChange}>
        <BottomNavigationAction label="Match" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="Stats" value="/stats" icon={<ExploreIcon />} />
        <BottomNavigationAction label="History" value="/history" icon={<SettingsIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default App
