// import React, { useState, useRef } from 'react';
// import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Dimensions } from 'react-native';


// const Card = ({ item, onPress, backgroundColor, textColor }) => (
//     <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
//       <Text style={[styles.title, textColor]}>{item.data[0].title}</Text>
//     </TouchableOpacity>
//   );

// const onPress = (id) => {
//     setSelectedId(id);
//     console.log({id});
//     alert(`id = ${id}`);
// };

// const styles = StyleSheet.create({
//     container: {
//       marginTop: StatusBar.currentHeight || 0,
//       alignItems: "center",
//     },
//     View: {
//       backgroundColor: "light blue",
//       padding: 20,
//     },
//     item: {
//       backgroundColor: '#f9c2ff',
//       padding: 20,
//       marginVertical: 8,
//       marginHorizontal: 16,
//       justifyContent: "center",
//       width: 150,
//       height: 150,
//     },
//     title: {
//       fontSize: 32,
//     },
//   });
// // const styles = StyleSheet.create({
// //     Card: {
// //         backgroundColor: '#f9c2fa',
// //         padding: 20,
// //         marginVertical: 8,
// //         marginHorizontal: 16,
// //         justifyContent: "center",
// //         width: 150,
// //         height: 150,
// //         },
// //     text: {
// //         textColor: "black",
// //     }
// // });