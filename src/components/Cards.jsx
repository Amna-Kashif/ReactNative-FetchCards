import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Cards = ({ products }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: products.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.name} numberOfLines={2}>{products.title}</Text>
      <Text style={styles.desc} numberOfLines={2}>{products.description}</Text>
      <Text style={styles.price}>${products.price}</Text>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
    width: '100%',
    maxWidth: 300,
    alignSelf: 'center',
    alignItems: 'center',
  },
  desc: {
    color: 'grey',
    marginBottom: 10,

  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007aff',
  },
});
