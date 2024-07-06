import { AppBar, Toolbar, Typography } from "@mui/material";

export const TopBar = () => <AppBar position="static">
<Toolbar>
  {/* <IconButton edge="start" color="inherit" aria-label="menu">
    <MenuIcon />
  </IconButton> */}
  <Typography variant="body1" color="inherit">
    Be the ping to my pong
  </Typography>
</Toolbar>
</AppBar>