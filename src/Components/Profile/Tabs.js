import React, { useState } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { Text } from "native-base";
import Profile from "./Profile";
import Orders from "./Orders";
import Colors from "../../color";

const renderScene = SceneMap({
  first: Profile,
  second: Orders,
});

export default function Tabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: "PERFIL",
    },
    {
      key: "second",
      title: "ÓRDENES",
    },
  ]);

  const renderTabsBar = (props) => (
    <TabBar
      {...props}
      tabStyle={styles.tabStyle}
      indicatorStyle={{ backgroundColor: Colors.black }}
      activeColor={Colors.main}
      inactiveColor={Colors.white}
      renderLabel={({ route, color }) => (
        <Text style={{ color, ...styles.text }}>{route.title}</Text>
      )}
    />
  );

  return (
    <TabView 
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width:layout.width }}
      renderTabBar={renderTabsBar}
    />        
  );
}

const styles = StyleSheet.create({
  tabStyle:{
    backgroundColor:"black",    
  },
  text:{
    fontSize:13,
    fontWeight:"bold",
  }
})
