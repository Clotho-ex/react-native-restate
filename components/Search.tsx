import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query || "");

  const debouncedSearch = useDebouncedCallback(
    (text: string) => router.setParams({ query: text }),
    500,
  );

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View className="mt-5 flex w-full flex-row items-center justify-between rounded-lg border border-primary-100 bg-accent-100 px-4 py-2">
      <View className="z-50 flex flex-1 flex-row items-center justify-start">
        <MaterialCommunityIcons name="magnify" size={20} color="black" />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search"
          placeholderTextColor="black"
          className="font-rubik ml-2 flex-1 text-sm text-black-300"
        />
      </View>
      <TouchableOpacity className="flex flex-row items-center justify-center">
        <MaterialCommunityIcons name="filter-outline" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
