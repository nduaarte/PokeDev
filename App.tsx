import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from './src/Redux';
import { Theme } from './src/Styles';
import StackRoutes from './src/Routes/Stack.Routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <StatusBar backgroundColor='#144FA1' />
        <StackRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;