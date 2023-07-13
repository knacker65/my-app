import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Typography, Box, IconButton, Grid, Card, CardContent } from '@material-ui/core';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
    marginTop: '64px',
  },
  drawerPaper: {
    width: 240,
    backgroundColor: '#f5f5f5',
  },
  menuButton: {
    position: 'fixed',
    zIndex: 1100,
    color: 'white',
    margin: theme.spacing(1),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  card: {
    minWidth: 275,
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: 14,
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
}));

const CompanyDashboard = () => {
  const classes = useStyles();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: 'Home', href: '/dashboard/home', icon: <HomeIcon /> },
    { text: 'Postings', href: '/dashboard/postings', icon: <WorkIcon /> },
    { text: 'Analytics', href: '/dashboard/analytics', icon: <AssessmentIcon /> },
    { text: 'Profile', href: '/dashboard/profile', icon: <AccountCircleIcon /> },
  ];

  return (
    <>
      <Navbar />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Box display="flex">
        <Drawer
          className={classes.drawer}
          variant="temporary"
          anchor="left"
          open={open}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} onClick={() => router.push(item.href)}>
                <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component="main" className={classes.content}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
          <Grid container spacing={3}>
            {/* Add your components here */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    Total Employees
                  </Typography>
                  <Typography variant="h4" component="p">
                    120
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* ... */}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default CompanyDashboard;
