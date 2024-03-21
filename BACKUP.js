import React, { useState,} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, 
  TouchableOpacity, Dimensions, Image } from 'react-native';
import _ from 'lodash';
import Row from "./components/Row";
// import { Card } from "./components/Card";

//Constants
const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_SIZE =  150

const DATA = [
  {
    id: 'classroomID',
    title: 'Classroom',
    imageURL: require('./images/classroom.jpg'),
  },
  {
    id: 'busID',
    title: 'Bus',
    imageURL: require('./images/bus.png'),
  },
  {
    id: 'groupTimeID',
    title: 'Group Time',
    imageURL: require('./images/group-time.png'),
  },
  {
    id: 'artID',
    title: 'Art',
    imageURL: require('./images/group-time.png'),
  },
  {
    id: 'lunchID',
    title: 'Lunch',
    imageURL: require('./images/lunch.png'),
  },
  {
    id: 'napID',
    title: 'Nap',
    imageURL: require('./images/sleep.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d79',
    title: 'Work',
    imageURL: require('./images/morningWork.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d80',
    title: 'Reward',
    imageURL: require('./images/reward.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d81',
    title: 'Dinosaurs',
    imageURL: require('./images/dino.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d82',
    title: 'Book',
    imageURL: require('./images/book.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d83',
    title: 'Blocks',
    imageURL: require('./images/block.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d84',
    title: 'Technology',
    imageURL: require('./images/technology.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d85',
    title: 'Bathroom',
    imageURL: require('./images/toilet.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d86',
    title: 'Reading',
    imageURL: require('./images/reading.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d87',
    title: 'Math',
    imageURL: require('./images/math.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d88',
    title: 'Science',
    imageURL: require('./images/science.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d89',
    title: 'PE',
    imageURL: require('./images/pe.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d90',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d91',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d92',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d93',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d94',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d95',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d96',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d97',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d98',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d99',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d100',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
  },



];

const DATA1 = [
    {
      id: 'firstID',
      title: 'First Item',
      imageURL: require('./images/group-time.png'),
       
    },
    {
      id: 'thenID',
      title: 'Second Item',
      imageURL: require('./images/group-time.png'),
       
    },
];

//Segment code into rows (or chunks) with custom ids. 
function chunkWithId(data, size, idPrefix = 'chunk') {
    const _ = require('lodash');
    const chunks = _.chunk(data, size);
    return chunks.map((chunk, index) => ({
        id:`${idPrefix}-${index + 1}`,
        data: chunk,
    }));
}

//How many rows for screen? 
let numColumns = Math.floor(SCREEN_WIDTH / ITEM_SIZE) - 1;

//Set up chucked data
const chuckedData = chunkWithId(DATA, 1, "1234")
const chuckedData1 = chunkWithId(DATA1, 1, "1234")

//Selected card to transfer to board


//Card Component
const Card = ({ item, onPress, backgroundColor, textColor, imageSource }) => {
  return(
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.data[0].title}</Text>
      <Image resizeMode={'contain'} style={{width: 100, height: 100}} source={item.data[0].imageURL} />
    </TouchableOpacity>
  );
};

const App = () => {
  //Handle the selected option.
  // const [selectedId, setSelectedId] = useState(["hi"]);
  const [selectedData, setSelectedData] = useState([]);
  //Set First/Then row
  const [firstThenRow, setFirstThenRow]= useState(chuckedData1);

  //Handle Item Presses with ID 
  const handleItemPress = (item) => {
    if(selectedData.length == 0){
      selectedData[0] = item;
    }else if(selectedData.length < 2){
      selectedData[selectedData.length] = item;
    } else if (selectedData.length > 2){
      console.log("ERROR: error in selectedData size: bigger than 2");
    } 
    
    
    if(selectedData.length == 2){
      processSelectedData();
      newSelectedData = [...selectedData, "changed"];
    } 
    console.log(`selectedid = ${selectedData}`);

  };

  //Process the selected data
  const processSelectedData = () => {
    //Set selectedData variables to be changed
    let selected0 = selectedData[0];
    let selected1 = selectedData[1];

    console.log("Entered processSelectedData")
    console.log(`INITIAL:  selected0: ${selected0.id}, selected1: ${selected1.id}`);
    console.log(`INITIAL:  chucked first ID: ${firstThenRow[0].data[0].id}, chucked then ID: ${firstThenRow[1].data[0].id}`);
    //if First/then both selected
    if ((selected0.id == "firstID" && selected1.id == "thenID") ||
      (selected0.id == "thenID" && selected1.id == "firstID")) {
      
      console.log("entered first/then both selection");

      let tempID = selected0.id;
      let tempTitle = selected0.title;
      let tempLink = selected0.imageURL;

      selected0.id = selected1.id;
      selected0.title = selected1.title;
      selected0.imageURL = selected1.imageURL;

      selected1.id = tempID;
      selected1.title = tempTitle;
      selected1.imageURL = tempLink;

      setFirstThenRow(selected0, selected1);
      console.log(`first ID: ${firstThenRow[0].data[0].id}, then ID: ${firstThenRow[1].data[0].id}`);
      return;

    
    }  //If selected0 is first or then   
    else if(selected0.id == "firstID" || selected0.id == "thenID") {
      console.log("entered selected0 is first or then selection");
      
      if(selected0.id == "firstID"){
        console.log("entered selected0 is first or then selection 1");
        setFirstThenRow([selected0, firstThenRow[1].data[0]]);
        console.log(`first ID: ${firstThenRow[0].data[0].id}, then ID: ${firstThenRow[1].data[0].id}`);
      }else if(selected0.id == "thenID"){
        console.log("entered selected0 is first or then selection 2");
        setFirstThenRow([firstThenRow[0]] ,selected0);
        console.log(`first ID: ${firstThenRow[0].data[0].id}, then ID: ${firstThenRow[1].data[0].id}`);
      }
      console.log("entered selected0 is first or then selection exit");
      return;
    
    } //If selected0 is first or then   
    else if(selected1.id == "firstID" || selected1.id == "thenID") {
      
      console.log("entered selected0 is first or then selection");
      
      if(selected1.id == "firstID"){
        setFirstThenRow([selected1, firstThenRow[1]]);
        console.log(`first ID: ${firstThenRow[0].id}, then ID: ${firstThenRow[1].id}`);
      } else if(selected1.id == "thenID"){
        setFirstThenRow([firstThenRow[0].data[0]] ,selected1);
        console.log(`first ID: ${firstThenRow[0].id}, then ID: ${firstThenRow[1].id}`);
      }
      return;
    } //if neither first/then selected
    else if((selected0.id !== "firstID" || selected0.id != "thenID") &&
      (selected1.id != "thenID" || selected1.id != "firstID")) {
        
        console.log("Neither first of then selection entered");

        //clear selectedData and exit
        setSelectedData([]);
        return;
    }
    else {
      console.log("ERROR IN ITEM SELECTION");
    }
    
  };

  //Render the cards. 
  const renderCards = ({ item }) => {
    // const backgroundColor = selectedId.includes(item.id) ? "lightblue" : "white";
    // const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Card
        item={item}
        // onPress={() => {handleItemPress(item.data[0].id);}}
        onPress={() => {handleItemPress(item.data[0]);}}
        // backgroundColor={{ backgroundColor }}
        // textColor={{ color }}
        style={{width: 200}}
        imageSource={item.data[0].imageURL}
        extraData={DATA}
      />
    );
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstSecond}>
        <Text style={styles.firstThenText}>First</Text>
        <Text style={styles.firstThenText}>Then</Text>
      </View>
        <Row>
          <Card
            item={firstThenRow[0]}
            onPress={() => {handleItemPress(chuckedData1[0].data[0]);}}
            style={{width: 200}}
            imageSource={firstThenRow[0].data[0].imageURL}
            extraData={firstThenRow[0].id}
          />
          <Card
            item={firstThenRow[1]}
            onPress={() => {handleItemPress(chuckedData1[1].data[0]);}}
            style={{width: 200}}
            imageSource={firstThenRow[1].data[0].imageURL}
            extraData={firstThenRow[1].id}
          />
        </Row>
      <View>
        <FlatList
            data={chuckedData}
            renderItem={renderCards}
            numColumns={numColumns}
            keyExtractor={(item) => item.data[0].id}
            // extraData={selectedId}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  View: {
    padding: 20,
  },
  item: {
    borderStyle: "solid",
    borderWidth: 3,
    padding: 20,
    marginVertical: 15,
    marginHorizontal: 15,
    alignItems: "center",
    width: 150,
    height: 150,
    fontWeight: "bold",
  },
  title: {
    fontSize: 15,
    textDecorationStyle: "solid"
  },
  firstSecond: {
    // marginTop: 20,
    flexDirection: 'row', // Arrange items horizontally
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 400,
  },
  firstThenText: {
    fontSize: 20,
    textDecorationStyle: "solid"
  }

});

export default App;
