import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export const TopBar = () => <AppBar position="static">
<Toolbar>
  {/* <IconButton edge="start" color="inherit" aria-label="menu">
    <MenuIcon />
  </IconButton> */}
  <Typography variant="h6" color="inherit">
    ABB Ping Pong!
  </Typography>
</Toolbar>
</AppBar>