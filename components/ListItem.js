import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

const ListItem = ({ data }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image source={{ uri: data.avatar }} style={styles.itemPhoto} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemP1}>{data.name}</Text>
        <Text style={styles.itemP2}>{data.email}</Text>
        <Text style={styles.itemP2}>{data.pedidos}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 5,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'white',
    borderRadius: 25
  },
  itemPhoto: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
  itemInfo: {
    marginLeft: 20,
  },
  itemP1: {
    fontSize: 22,
    color: 'black',
    marginBottom: 1
  },
  itemP2: {
    fontSize: 14,
    color: 'black',
  },
});

export default ListItem;
