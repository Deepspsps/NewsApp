import { Drawer } from "expo-router/drawer"
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from "expo-router";

const CustomDrawerContent = (props) => {
  const router = useRouter();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        icon={({ color, size }) =>
          <Entypo name="list" size={size} color={color} />
        }
        label={"Technology"}
        onPress={() => {
          router.push('/(drawer)/(tabs)/technology');
        }}
      />
      <DrawerItem
        icon={({ color, size }) =>
          <FontAwesome6 name="contact-book" size={size} color={color} />
        }
        label={"Business"}
        onPress={() => {
          router.push('/(drawer)/(tabs)/business');
        }}
      />l

    </DrawerContentScrollView>
  );
}
export default function _layout() {
  return (
    <Drawer drawerContent={(props) => < CustomDrawerContent {...props} />} />
  )
}
