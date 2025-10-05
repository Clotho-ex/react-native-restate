import images from "@/constants/images";
import React from "react";
import { Image, Text, View } from "react-native";

const NoResults = () => {
  return (
    <View className="my-5 flex items-center">
      <Image
        source={images.noResult}
        className="h-80 w-11/12"
        resizeMode="contain"
      />
      <Text className="mt-5 text-center font-rubik-bold text-2xl text-black-300">
        No Results Found
      </Text>
      <Text className="mt-2 text-base text-black-100">
        We couldn&apos;t find any results for your search.
      </Text>
    </View>
  );
};

export default NoResults;
