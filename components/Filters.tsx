import { categories } from "@/constants/data";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, Text } from "react-native";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedFilter, setSelectedFilter] = useState(params.filter || "All");

  const handleFilterPress = (filter: string) => {
    if (selectedFilter === filter) {
      setSelectedFilter("All");
      router.setParams({ filter: "All" });
      return;
    }
    setSelectedFilter(filter);
    router.setParams({ filter });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mb-2 mt-3"
    >
      {categories.map((category) => (
        <Pressable
          key={category.title}
          onPress={() => handleFilterPress(category.title)}
          className={`mr-4 flex flex-col items-start rounded-full px-4 py-2 ${selectedFilter === category.title ? "bg-primary-300" : "bg-primary-200"} active:opacity-40`}
        >
          <Text
            className={`font-rubik-medium text-base ${selectedFilter === category.title ? "text-white" : "font-rubik-regular text-black-300"}`}
          >
            {category.title}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default Filters;
