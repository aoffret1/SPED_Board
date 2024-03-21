import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, 
  TouchableOpacity, Dimensions, useWindowDimensions, Image } from 'react-native';
import _ from 'lodash';
import Row from "./components/Row";
// import { Card } from "./components/Card";

//Constants
const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_SIZE =  150;

const DATA = [
  {
    id: 'classroomID',
    title: 'Classroom',
    imageURL: require('./images/classroom.jpg'),
    rowPlacement: '',
  },
  {
    id: 'busID',
    title: 'Bus',
    imageURL: require('./images/bus.png'),
    rowPlacement: '',
  },
  {
    id: 'groupTimeID',
    title: 'Group Time',
    imageURL: require('./images/group-time.png'),
    rowPlacement: '',
  },
  {
    id: 'artID',
    title: 'Art',
    imageURL: require('./images/group-time.png'),
    rowPlacement: '',
  },
  {
    id: 'lunchID',
    title: 'Lunch',
    imageURL: require('./images/lunch.png'),
    rowPlacement: '',
  },
  {
    id: 'napID',
    title: 'Nap',
    imageURL: require('./images/sleep.png'),
    rowPlacement: '',
  },
  {
    id: 'wordID',
    title: 'Work',
    imageURL: require('./images/morningWork.png'),
    rowPlacement: '',
  },
  {
    id: 'rewardID',
    title: 'Reward',
    imageURL: require('./images/reward.png'),
    rowPlacement: '',
  },
  {
    id: 'dinoID',
    title: 'Dinosaurs',
    imageURL: require('./images/dino.png'),
    rowPlacement: '',
  },
  {
    id: 'bookID',
    title: 'Book',
    imageURL: require('./images/book.png'),
    rowPlacement: '',
  },
  {
    id: 'blocksID',
    title: 'Blocks',
    imageURL: require('./images/block.png'),
    rowPlacement: '',
  },
  {
    id: 'technologyID',
    title: 'Technology',
    imageURL: require('./images/technology.png'),
    rowPlacement: '',
  },
  {
    id: 'bathroomID',
    title: 'Bathroom',
    imageURL: require('./images/toilet.png'),
    rowPlacement: '',
  },
  {
    id: 'readingID',
    title: 'Reading',
    imageURL: require('./images/reading.png'),
    rowPlacement: '',
  },
  {
    id: 'mathID',
    title: 'Math',
    imageURL: require('./images/math.png'),
    rowPlacement: '',
  },
  {
    id: 'scienceID',
    title: 'Science',
    imageURL: require('./images/science.png'),
    rowPlacement: '',
  },
  {
    id: 'peID',
    title: 'PE',
    imageURL: require('./images/pe.png'),
    rowPlacement: '',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d90',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
    rowPlacement: '',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d91',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
    rowPlacement: '',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d92',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
    rowPlacement: '',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d93',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
    rowPlacement: '',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d94',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
    rowPlacement: '',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d95',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
    rowPlacement: '',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d96',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
    rowPlacement: '',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d97',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
    rowPlacement: '',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d98',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
    rowPlacement: '',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d99',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
    rowPlacement: '',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d100',
    title: 'Science',
    imageURL: require('./images/group-time.png'),
    rowPlacement: '',
  },



];

const DATA1 = [
    {
      id: 'firstID',
      title: 'First Item',
      imageURL: require('./images/group-time.png'),
      rowPlacement: 'first',
    },
    {
      id: 'thenID',
      title: 'Second Item',
      imageURL: require('./images/group-time.png'),
      rowPlacement: 'then',
    },
];

//Segment code into rows (or chunks) with custom ids. 
function chunkWithId(data, size, idPrefix = 'chunk') {
    try {
        const _ = require('lodash');
      const chunks = _.chunk(data, size);
      return chunks.map((chunk, index) => ({
          id:`${idPrefix}-${index + 1}`,
          data: chunk,
      }));
    } catch (error) {
      console.error('An error occurred in chunkWithID:', error);
    }
}

//How many rows for screen? 
let numColumns = Math.floor(SCREEN_WIDTH / ITEM_SIZE) - 1;

//Set up chucked data
const chuckedData = chunkWithId(DATA, 1, "1234")
const chuckedData1 = chunkWithId(DATA1, 1, "1234")

//Selected card to transfer to board


//Card Component
const Card = ({ item, onPress, backgroundColor, textColor}) => {
  console.log(`CARD COMPONENT: ${item.data[0].id}`);
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


  useEffect(() => {
    if (firstThenRow.length >= 2) {
      console.log(`first ID: ${firstThenRow[0].data[0].id}, then ID: ${firstThenRow[1].data[0].id}`);
    } else {
      console.log("First then row error");
    }
  }, [firstThenRow]); // This will run every time `firstThenRow` changes
  useEffect(() => {
      console.log(`Selected Data ids are: ${selectedData}`);
      //Run process data if selectedData is 2 items long.
      if(selectedData.length === 2){
        processSelectedData( );
        console.log("Left processSelectedData")
        setSelectedData([]);
      }   
  }, [selectedData]); // This will run every time `selectedData` changes

  //Handle Item Presses
  const handleItemPress = (item) => {
    try {
      console.log(`item selected is: ${item?.id}`);
      if(selectedData.length == 0){
        setSelectedData([item]);
      }else if(selectedData.length < 2){
        setSelectedData(prevData => [...prevData, item]);
      } else if (selectedData.length > 2){
        console.log("ERROR: error in selectedData size: bigger than 2");
      } 
     //ProcessData done in useEffect for selectedData
    } catch (error) {
      console.error('An error occurred in handleItemPress:', error);
    }

  };

  const processSelectedData = () => {
    //Set selectedData variables to be changed
    try{
      let selected0 = selectedData[0];
      let selected1 = selectedData[1];

      console.log("Entered processSelectedData")
      // console.log(`INITIAL:  chucked1 data: ${chuckedData1[0].data[0].title}`);

      console.log(`INITIAL:  selected0: ${selected0.id}, selected1: ${selected1.id}`);
      // console.log(`INITIAL:  chucked first ID: ${firstThenRow[0].data[0].id}, chucked then ID: ${firstThenRow[1].data[0].id}`);
      //if First/then both selected
      if ((selected0.id == "firstID" && selected1.id == "thenID") ||
        (selected0.id == "thenID" && selected1.id == "firstID")) {
        
        console.log("entered first/then both selection");

        let tempID = selected0.id;
        let tempTitle = selected0.title;
        let tempLink = selected0.imageURL;
       // let tempRow = selected0.rowPlacement;

        selected0.id = selected1.id;
        selected0.title = selected1.title;
        selected0.imageURL = selected1.imageURL;

        selected1.id = tempID;
        selected1.title = tempTitle;
        selected1.imageURL = tempLink;

        console.log(`SWAPED:  selected0: ${selected0.id}, selected1: ${selected1.id}`);

        setFirstThenRow([selected0, selected1]);
        return;

      
      }  //If selected0 is first or then   
      else if(selected0.id == "firstID" || selected0.id == "thenID") {
        console.log("entered selected0 is first or then selection");
        
        if(selected0.id == "firstID"){
          console.log("**entered selected0 is first or then selection 1");
          setFirstThenRow(prevRow => [{id:'chuck-1', data:[selected1]}, prevRow[1]]);
        }else if(selected0.id == "thenID"){
          console.log("**entered selected0 is first or then selection 2");
          setFirstThenRow(prevRow => [ prevRow[0],{id:'chuck-2', data:[selected1]}]);
        }
        console.log("entered selected0 is first or then selection exit");
        return;
      
      } //If selected0 is first or then   
      else if(selected1.id == "firstID" || selected1.id == "thenID") {
        
        console.log("entered selected1 is first or then selection");
        
        if(selected1.id == "firstID"){ 
          setFirstThenRow(prevRow => [{id:'chuck-1', data:[selected0]}, prevRow[1]])
        } else if(selected1.id == "thenID"){
          setFirstThenRow(prevRow => [ prevRow[0],{id:'chuck-2', data:[selected0]}]);
        }
        return;
      } //if neither first/then selected
      else if((selected0.id !== "firstID" || selected0.id != "thenID") &&
        (selected1.id != "thenID" || selected1.id != "firstID")) {
          
          console.log("Neither first of then selection entered");

          //clear selectedData and exit
          // setSelectedData([]);
          return;
      }
      else {
        console.log("ERROR IN ITEM SELECTION");
      }
    } catch (error) {
      console.error('An error occurred in processSelectedData:', error);
    }
  };

  //Render the cards. 
  const renderCards = ({ item }) => {
    // const backgroundColor = selectedId.includes(item.id) ? "lightblue" : "white";
    // const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Card
        item={item}
        onPress={() => {handleItemPress(item.data[0]);}}
        // backgroundColor={{ backgroundColor }}
        // textColor={{ color }}
        style={{width: 200}}
        imageSource={item.data[0].imageURL}
        extraData={DATA}
      />
    );
  };

  console.log(`First then row  is in reaload: ${firstThenRow[0]?.data[0]?.id} then: ${firstThenRow[1]?.data[0]?.id}` );

  try {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.firstSecond}>
          <Text style={styles.firstThenText}>First</Text>
          <Text style={styles.firstThenText}>Then</Text>
        </View>
          <Row>
            <Card
              item={firstThenRow[0]}
              onPress={() => {handleItemPress(firstThenRow[0].data[0])}}
              style={{width: 200}}
              extraData={firstThenRow[0].data[0]}
            />
            <Card
              item={firstThenRow[1]}
              onPress={() => {handleItemPress(firstThenRow[1].data[0])}}
              style={{width: 200}}
              extraData={firstThenRow[1].data[0]}
            />
          </Row>
        <View>
          <FlatList
              data={chuckedData}
              renderItem={renderCards}
              numColumns={numColumns}
              keyExtractor={(item) => item.data[0].id}
          />
        </View>
      </SafeAreaView>
    );
  } catch (error) {
    console.error('An error occurred in handleItemPress:', error);
  }
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
