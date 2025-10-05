import { categories } from "@/constants/data";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text } from "react-native";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedFilter, setSelectedFilter] = useState(params.filter || "All");

  useEffect(() => {
    const category = params.filter || "All";
    const matchingItem = categories.find(
      (item) => item.category.toLowerCase() === category.toLowerCase(),
    );
    setSelectedFilter(matchingItem ? matchingItem.title : "All");
  }, [params.filter]);

  const handleFilterPress = (category: string, title: string) => {
    if (selectedFilter === title) {
      setSelectedFilter("All");
      router.setParams({ filter: "All" });
      return;
    }
    setSelectedFilter(title);
    router.setParams({ filter: category });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mb-2 mt-3"
    >
      {categories.map((item, index) => (
        <Pressable
          key={index}
          onPress={() => handleFilterPress(item.category, item.title)}
          className={`mr-4 flex flex-col items-start rounded-full px-4 py-2 ${selectedFilter === item.title ? "bg-primary-300" : "bg-primary-200"} active:opacity-40`}
        >
          <Text
            className={`font-rubik-medium text-base ${selectedFilter === item.title ? "text-white" : "font-rubik-regular text-black-300"}`}
          >
            {item.title}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default Filters;
