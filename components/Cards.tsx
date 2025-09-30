import images from "@/constants/images";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

interface Props {
  onPress?: () => void;
}

export const FeaturedCard = ({ onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className="relative flex h-80 w-60 flex-col items-start overflow-hidden active:opacity-40"
    >
      <Image source={images.newYork} className="size-full rounded-xl" />
      <Image
        source={images.cardGradient}
        className="absolute bottom-0 size-full rounded-2xl"
      />
      <View className="absolute right-5 top-5 flex flex-row items-center rounded-full bg-white px-3 py-1.5">
        <MaterialCommunityIcons name="star" size={16} color="#FFDA23" />
        <Text className="ml-1 font-rubik-bold text-sm text-primary-300 ">
          4.8
        </Text>
      </View>
      <View className="absolute inset-x-5 bottom-5 flex flex-col items-start">
        <Text
          className="font-rubik-extra-bold text-lg text-white"
          numberOfLines={1}
        >
          Modern Apartment
        </Text>
        <Text className="font-rubik text-base text-white">
          22 W 22nd St, New York
        </Text>
        <View className="flex w-full flex-row items-center justify-between">
          <Text className="font-rubik-extra-bold text-xl text-white">
            $2500
          </Text>
          <MaterialCommunityIcons
            name="heart-outline"
            size={16}
            color="white"
          />
        </View>
      </View>
    </Pressable>
  );
};

export const Card = ({ onPress }: Props) => {
  return (
      <Pressable
        onPress={onPress}
        className="relative mt-4 w-full flex-1 rounded-lg bg-white px-3 py-4 shadow-lg shadow-black-100/70 active:opacity-60"
      >
        <View className="absolute right-6 top-7 z-50 flex flex-row items-center rounded-full bg-white p-1 px-2">
          <MaterialCommunityIcons name="star" size={12} color="#FFDA23" />
          <Text className="ml-0.5 font-rubik-bold text-sm text-primary-300 ">
            4.8
          </Text>
        </View>
        <Image source={images.newYork} className="h-40 w-full rounded-lg" />

        <View className="mt-2 flex flex-col">
          <Text className="font-rubik-bold text-lg text-black-300">
            Cozy Studio in Bushwick
          </Text>
          <Text className="font-rubik text-sm text-black-200">
            22 W 22nd St, New York
          </Text>
          <View className="mt-2 flex flex-row items-center justify-between">
            <Text className="font-rubik-bold text-xl text-primary-300">
              $2500
            </Text>
            <MaterialCommunityIcons
              name="heart-outline"
              size={16}
              color="black"
            />
          </View>
        </View>
      </Pressable>
  );
};
