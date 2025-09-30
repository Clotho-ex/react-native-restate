import images from "@/constants/images";
import { logout } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SettingsItemProps {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
  onPress?: () => void;
  textStyle?: StyleProp<TextStyle>;
  showArrow?: boolean;
  color?: string;
}

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
  color = "black",
}: SettingsItemProps) => (
  <TouchableOpacity
    className="flex flex-row items-center justify-between py-3"
    onPress={onPress}
  >
    <View className="flex flex-row items-center gap-2">
      <MaterialCommunityIcons name={icon} size={24} color={color} />
      <Text
        className={`font-rubik-medium text-base text-black-300 ${textStyle}`}
      >
        {title}
      </Text>
    </View>
    {showArrow && (
      <MaterialCommunityIcons name="chevron-right" size={24} color={color} />
    )}
  </TouchableOpacity>
);

const Profile = () => {
  const { user, refetch } = useGlobalContext();

  const handleLogout = async () => {
    const result = await logout();
    if (result) {
      Alert.alert("Logout successful");
      refetch({});
    } else {
      Alert.alert("Logout failed");
    }
  };

  return (
    <SafeAreaView className="h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="mt-5 flex-row items-center justify-between">
          <Text className="font-rubik-bold text-xl">Profile</Text>
          <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
        </View>
        <View className="mt-5 flex flex-row justify-center">
          <View className="mt-5 flex flex-col items-center">
            <Image
              source={user?.avatar ? { uri: user.avatar } : images.avatar}
              className="size-40 rounded-full"
            />
            <TouchableOpacity className="absolute bottom-10 right-0">
              <MaterialCommunityIcons
                name="pencil-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <Text className="mt-2 font-rubik-medium text-base">
              {user?.name}
            </Text>
          </View>
        </View>
        <View className="mt-10 flex flex-col">
          <SettingsItem icon="calendar-month-outline" title="My Bookings" />
          <SettingsItem icon="credit-card-outline" title="Payments" />
        </View>
        <View className=" mt-5 flex flex-col border-t border-primary-200">
          <SettingsItem icon="account-outline" title="Profile" />
          <SettingsItem icon="bell-outline" title="Notifications" />
          <SettingsItem icon="shield-outline" title="Security" />
          <SettingsItem icon="translate" title="Language" />
          <SettingsItem icon="information-outline" title="Help Center" />
          <SettingsItem icon="account-group-outline" title="Invite Friends" />
        </View>
        <View className="mt-5 flex flex-col border-t border-primary-200">
          <SettingsItem
            icon="logout"
            title="Logout"
            color="red"
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
