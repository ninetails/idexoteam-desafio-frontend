import React from 'react';
import Radium, { keyframes } from 'radium';
import logo from './logo.svg';

const logoSpin = keyframes({
  from: {
    transform: 'rotate(0deg)'
  },
  to: {
    transform: 'rotate(360deg)'
  }
}, 'spin');

const styles = {
  app: {
    textAlign: 'center',
    header: {
      backgroundColor: '#222',
      color: 'white',
      height: '150px',
      padding: '20px',
    },
    intro: {
      fontSize: 'large'
    },
    logo: {
      animation: 'x infinite 20s linear',
      animationName: logoSpin,
      height: '80px'
    },
    title: {
      fontSize: '1.5em'
    }
  }
};


const App = () => (
  <div style={styles.app}>
    <header style={styles.app.header}>
      <img src={logo} style={styles.app.logo} alt="logo" />
      <h1 style={styles.app.title}>Welcome to React</h1>
    </header>
    <p style={styles.app.intro}>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default Radium(App);
