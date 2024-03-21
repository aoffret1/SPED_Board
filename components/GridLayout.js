import React from "react";
import { View, Text } from "react-native";
import { RGL, WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

class GridLayout extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 }
    ];

    return (
      <ReactGridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        {layout.map(item => (
          <View key={item.i} style={styles.gridItem}>
            <Text>{item.i}</Text>
          </View>
        ))}
      </ReactGridLayout>
    );
  }
}

const styles = {
  gridItem: {
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default GridLayout;