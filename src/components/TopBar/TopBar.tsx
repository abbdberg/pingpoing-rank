import { AppBar, Toolbar, Typography } from "@mui/material";

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