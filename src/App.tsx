import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Paper, Text, Loader, MantineProvider } from '@mantine/core';

function App() {
  return (
    <div className="App">
      <MantineProvider theme={{
        fontFamily: 'Open Sans',
        colorScheme: 'dark',
        
      }}>
        <Paper>
          <Text>This is a simple text</Text>
          <Text>This is a simple text TAG and thats all it does</Text>
        </Paper>
      
        <Button>Hello world!</Button>
        <Button>Hello world!</Button>
        <Loader />
        </MantineProvider>
    </div>
  );
}

export default App;
