import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

interface TabIconProps {
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  focused: boolean;
  size?: number;
}

const TabIcon: React.FC<TabIconProps> = ({ name, focused, size = 30 }) => {
  return (
    <View className="flex flex-col items-center justify-center">
      <View
        className={`items-center justify-center rounded-full ${focused ? "bg-primary-100" : ""} h-12 w-12`}
      >
        <MaterialCommunityIcons
          name={name}
          size={size}
          color={focused ? "#0061FF" : "#666876"}
          resizeMode="contain"
        />
      </View>
      <Text
        className={`${focused ? "font-rubik-medium text-primary-300" : "font-rubik-regular text-black-200"} text-center text-xs`}
      ></Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarItemStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#FBFBFD",
          borderTopWidth: 0,
          height: 65,
          marginHorizontal: 16,
          marginBottom: 16,
          borderRadius: 30,
          paddingTop: 20,
          borderWidth: 2,
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 6 },
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon name="home-outline" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon name="magnify" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon name="account-outline" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
