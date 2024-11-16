import React from 'react';
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from "expo-router";

const CustomDrawerContent = (props) => {
  const router = useRouter();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem 
        icon={({ color, size }) =>
          <Feather name="smartphone" size={size} color={color} />
        }
        label={"Technology"}
        onPress={() => {
          router.push('(drawer)/technology');
        }}
      />
      <DrawerItem
        icon={({ color, size }) =>
        <MaterialIcons name="business-center" size={size} color={color} />
        }
        label={"Business"}
        onPress={() => {
          router.push('/(drawer)/business');
        }}
      />

      <DrawerItem
        icon={({ color, size }) =>
          <Entypo name="area-graph" size={size} color={color} />
        }
        label={"Markets and Finance"}
        onPress={() => {
          router.push('/(drawer)/mAndF');
        }}
      />

      <DrawerItem
        icon={({ color, size }) =>
          <AntDesign name="car" size={size} color={color} />
        }
        label={"Auto Motives"}
        onPress={() => {
          router.push('/(drawer)/autoMotives');
        }}
      />
    </DrawerContentScrollView>
  );
};

export default function _layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true, // Ensure the header is visible
        headerTitle: "News app", // show the news app name for all drawers
        //headerTitle: "", // Removes the title from the header uncomment this if you want blank
       
      }}
    />
  );
}
