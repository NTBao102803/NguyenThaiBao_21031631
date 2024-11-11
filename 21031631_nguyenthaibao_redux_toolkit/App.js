import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import  store  from './store';

import Home from './Home';
import ShowProductList from './showProductList';
import DetailProduct from './DetailProduct';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ShowProductList" component={ShowProductList} />
          <Stack.Screen name="DetailProduct" component={DetailProduct} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
