import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './productSlice';

const ShowProductList = ({ navigation, route }) => {
  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailProduct', { product: item })}
        style={{
          backgroundColor: '#F7BA8326',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          borderRadius: 20,
          width: '100%',
          height: 200,
          marginRight: 10,
          marginBottom: 10,
          borderWidth: 1,
          flex: 1,
        }}>
        <View style={{ width: '100%', height: '', flex: 1, padding: 10 }}>
          <Image
            source={item.img}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              marginBottom: 15,
            }}
          />
        </View>

        <Text>{item.name}</Text>
        <Text style={{ margin: 2 }}>${item.price}</Text>
      </TouchableOpacity>
    );
  };

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);

  // Fetch products when the component mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{ fontSize: 20, fontWeight: 600, color: 'red' }}>
          The world's Best Bike
        </Text>
      </View>

      <View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            flex: 1,
            padding: 10,
            backgroundColor: '',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              padding: 10,
              borderWidth: 3,
              borderColor: 'red',
              borderRadius: 10,
              color: 'red',
              marginRight: 10,
              flex: 1,
              textAlign: 'center',
              fontWeight: 600,
            }}>
            All
          </Text>
          <Text
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: 'red',
              borderRadius: 10,
              color: 'gray',
              marginRight: 10,
              flex: 1,
              textAlign: 'center',
            }}>
            Road bike
          </Text>
          <Text
            style={{padding: 10,
              borderWidth: 1,
              borderColor: 'red',
              borderRadius: 10,
              color: 'gray',
              marginRight: 10,
              flex: 1,
              textAlign: 'center',
            }}>
            Mountain
          </Text>
        </View>

        <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <RenderItem item={item} />}
            style={{
              height: 400,
            }}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View>
          <TouchableOpacity
            style={{
              width: '100%',
              padding: 10,
              backgroundColor: 'cyan',
              marginTop: 10,
            }}
            onPress={() => navigation.navigate('AddProduct')} // Navigate to AddProduct
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>
              Add Product
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ShowProductList;