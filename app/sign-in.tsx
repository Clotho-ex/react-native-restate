import images from "@/constants/images";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Redirect } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const { refetch, loading, isLoggedIn } = useGlobalContext();
  if (!loading && isLoggedIn) {
    return <Redirect href="/" />;
  }

  const handleLogin = async () => {
    try {
      const success = await login();
      if (success) {
        console.log("Login successful");
        refetch({});
        // The global provider will automatically update the user state
      } else {
        Alert.alert(
          "Login Failed",
          "Unable to authenticate with Google. Please try again.",
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert(
        "Login Error",
        "An error occurred during login. Please check your internet connection and try again.",
      );
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Image
          source={images.onboarding}
          resizeMode="contain"
          className="h-4/6 w-full"
        />

        <View className="px-10">
          <Text className="font-rubik text-center text-base uppercase text-black-200">
            Welcome To ReState
          </Text>

          <Text className="mt-2 text-center font-rubik-bold text-3xl text-black-300">
            Let&apos;s Get You Closer to {`\n`}
            <Text className="text-primary-300">Your Dream Home</Text>
          </Text>

          <Text className="font-rubic mt-12 text-center text-lg text-black-200">
            Login to ReState with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            activeOpacity={0.7}
            className="mt-5 w-full flex-row items-center justify-center rounded-full bg-white py-4 shadow-md shadow-zinc-300"
          >
            <MaterialCommunityIcons
              name="google"
              size={24}
              color="black"
              className="ml-5"
            />

            <Text className="text-black ml-2 font-rubik-medium text-lg">
              Login with Google
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
