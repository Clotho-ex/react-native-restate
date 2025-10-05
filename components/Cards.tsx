import images from "@/constants/images";
import { Property } from "@/lib/appwrite";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

interface Props {
  item: Property;
  onPress?: () => void;
}

export const FeaturedCard = ({
  item: { image, rating, name, address, price },
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className="relative flex h-80 w-60 flex-col items-start overflow-hidden active:opacity-40"
    >
      <Image source={{ uri: image }} className="size-full rounded-lg" />
      <Image
        source={images.cardGradient}
        className="absolute bottom-0 size-full rounded-2xl"
      />
      <View className="absolute right-5 top-5 flex flex-row items-center rounded-full bg-white px-3 py-1.5">
        <MaterialCommunityIcons name="star" size={16} color="#FFDA23" />
        <Text className="ml-1 font-rubik-bold text-sm text-primary-300 ">
          {rating}
        </Text>
      </View>
      <View className="absolute inset-x-5 bottom-5 flex flex-col items-start">
        <Text
          className="font-rubik-extra-bold text-lg text-white"
          numberOfLines={1}
        >
          {name}
        </Text>
        <Text className="font-rubik text-base text-white">{address}</Text>
        <View className="flex w-full flex-row items-center justify-between">
          <Text className="font-rubik-extra-bold text-xl text-white">
            ${price}
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

export const Card = ({
  item: { image, rating, name, address, price },
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className="relative mt-4 w-full flex-1 rounded-2xl bg-white px-3 py-4 shadow-lg shadow-black-100/70 active:opacity-60"
    >
      <View className="absolute right-6 top-7 z-50 flex flex-row items-center rounded-full bg-white p-1 px-2">
        <MaterialCommunityIcons name="star" size={12} color="#FFDA23" />
        <Text className="ml-0.5 font-rubik-bold text-sm text-primary-300 ">
          {rating}
        </Text>
      </View>
      <Image source={{ uri: image }} className="h-40 w-full rounded-xl" />

      <View className="mt-3 flex flex-col">
        <Text className="font-rubik-bold text-lg text-black-300">{name}</Text>
        <Text className="font-rubik text-sm text-black-200">{address}</Text>
        <View className="mt-2 flex flex-row items-center justify-between">
          <Text className="font-rubik-bold text-xl text-primary-300">
            ${price}
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
