import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PokeList from '../Screens/PokeList';
import PokeInfo from '../Screens/PokeInfo';

const StackRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#144FA1',
          height: 58,
        },
        headerTitleStyle: {
          alignSelf: 'center',
          fontSize: 17,
          fontWeight: 'bold',
          color: '#ffffff'
        },
        cardStyle: {
          backgroundColor: '#ffff'
        }
      }}>
        <Screen name='PokeList' component={PokeList} options={{ title: 'PokeDev' }} />
        <Screen name='PokeInfo' component={PokeInfo} options={{ title: 'PokeDev' }} />
      </Navigator>
    </NavigationContainer>
  );
}

export default StackRoutes;