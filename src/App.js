//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AppBar, Container, IconButton, Toolbar, Typography, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

//Подгрузка стилей
const useStyles = makeStyles((theme) => ({
  root: { 
    flexGrow:1
  },
  menuButton: {
    marginRight:theme.spacing(1)
  },
  title: {
    flexGrow:1
  }
}))

function App() {
const classes=useStyles();

  return (
   <AppBar position="fixed">
     <Container fixed>
        <Toolbar>
          <IconButton edge="start"
          color="inherit" aria-laabel="menu" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>Название сайта </Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined"> Вход</Button>
            </Box>
            <Button color="secondary" variant="contained"> Регистрация</Button>
        </Toolbar>

     </Container>
     </AppBar>
  );
}

export default App;
