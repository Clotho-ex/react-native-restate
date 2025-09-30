import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import { useGlobalContext } from "@/lib/global-provider";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { user } = useGlobalContext();

  return (
    <SafeAreaView className="h-full bg-white px-2">
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex px-2 gap-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="mt-5 flex flex-row items-center justify-between">
              <View className="flex flex-row">
                <Image
                  source={{ uri: user?.avatar }}
                  resizeMode="contain"
                  className="size-12 rounded-full"
                />
                <View className="ml-2 flex flex-col items-start justify-center">
                  <Text className="font-rubik text-xs text-black-100">
                    Good Morning
                  </Text>
                  <Text className="font-rubik-medium text-base text-black-300">
                    {user?.name}
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="bell-outline"
                size={20}
                color="black"
              />
            </View>

            <Search />

            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="font-rubik-bold text-xl text-black-300">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="font-rubik-bold text-base text-primary-300">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>
              <FlatList
                bounces={false}
                data={[1, 2, 3]}
                renderItem={({ item }) => <FeaturedCard />}
                keyExtractor={(item) => item.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="flex gap-5 mt-5"
              />
            </View>

            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="font-rubik-bold text-xl text-black-300">
                  Our Recommendations
                </Text>
                <TouchableOpacity>
                  <Text className="font-rubik-bold text-base text-primary-300">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>
              <Filters />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
