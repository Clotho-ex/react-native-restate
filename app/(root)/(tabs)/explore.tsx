import { Card } from "@/components/Cards";
import Filters from "@/components/Filters";
import NoResults from "@/components/NoResults";
import Search from "@/components/Search";
import { getProperty } from "@/lib/appwrite";
import { useAppwrite } from "@/lib/useAppwrite";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore() {
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const {
    data: properties,
    loading,
    refetch,
  } = useAppwrite({
    fn: getProperty,
    params: {
      filter: params.filter || "All",
      query: params.query || "",
      limit: 20,
    },
    skip: true,
  });

  const handleCardPress = (id: string) => router.push(`/properties/${id}`);

  useEffect(() => {
    refetch({
      filter: params.filter || "All",
      query: params.query || "",
      limit: 20,
    });
  }, [params.filter, params.query]);

  return (
    <SafeAreaView className="h-full bg-white px-2">
      <FlatList
        data={properties}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handleCardPress(item.$id)} />
        )}
        keyExtractor={(item) => item.$id}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex px-4 gap-5"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator size="large" className="text-primary-300" />
          ) : (
            <NoResults />
          )
        }
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="mt-5 flex flex-row items-center justify-between">
              <TouchableOpacity
                className="flex size-11 flex-row items-center justify-center rounded-full bg-primary-100"
                onPress={() => router.back()}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
              <Text className="mr-2 text-center font-rubik-medium text-base text-black-300">
                Search for Your Ideal Home
              </Text>
              <MaterialCommunityIcons
                name="bell-outline"
                size={24}
                color="black"
              />
            </View>
            <Search />
            <View className="my-5">
              <Filters />
              <Text className="mt-5 font-rubik-bold text-xl text-black-300">
                Found {properties?.length} properties
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
