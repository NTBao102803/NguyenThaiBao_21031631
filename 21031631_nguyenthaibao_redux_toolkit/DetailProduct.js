import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

const DetailProduct = ({ route }) => {
  const { product } = route.params;

  return (
    <View>
      <View
        style={{ width: '100%', height: 300, backgroundColor: '#E941411A' }}>
        <Image
          source={product.img}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </View>

      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: 600 }}>{product.name}</Text>
        <View>
          <Text style={{ fontSize: 20 }}>15% OFF | 350$</Text>
          <Text style={{ fontSize: 20, fontWeight: 500 }}>
            {product.price}$
          </Text>
        </View>
      </View>

      <View style={{ paddingLeft: 15, paddingRight: 15, paddingBottom: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: 500 }}>Description</Text>
        <Text style={{ fontSize: 14 }}>
          {product.description}
        </Text>
      </View>

      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
          paddingLeft: 15,
          paddingRight: 15,
        }}>
        <TouchableOpacity
          style={{ flex: 1, borderWidth: 1, borderRadius: 20, padding: 10 }}>
          <Text style={{ textAlign: 'center' }}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 30,
            backgroundColor: 'red',
            flex: 4,
          }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailProduct;
