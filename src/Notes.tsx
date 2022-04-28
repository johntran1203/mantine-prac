
import { Button, Paper, Text, Loader, MantineProvider } from '@mantine/core';

function Notes() {
  return (
    <div className="App">
      <MantineProvider theme={{
        fontFamily: 'Open Sans',
        colorScheme: 'dark',
        fontSizes: {md: 12},
        loader: 'bars',
        colors: {
          blue:  [
            '#d5d7e0',
            '#acaebf',
            '#8c8fa3',
            '#666980',
            '#4d4f66',
            '#34354a',
            '#2b2c3d',
            '#1d1e30',
            '#0c0d21',
            '#01010a',
          ],
        }
    
      }}
      styles={{
        Button: (theme) => ({
          root: {
            backgroundColor: theme.colors.blue[0]
          }
        })
      }}
      >
        <Paper>
          <Text>This is a simple text</Text>
          <Text>This is a simple text TAG and thats all it does</Text>
        </Paper>
      
        <Button>Hello world!</Button>
        <Button>Hello world!</Button>
        <Loader />

        <MantineProvider theme={{ fontFamily: 'Greycliff CF, sans-serif' }}>
        <Button>Greycliff CF button</Button>
      </MantineProvider>
      
        </MantineProvider>
    </div>
  );
}

export default Notes;
