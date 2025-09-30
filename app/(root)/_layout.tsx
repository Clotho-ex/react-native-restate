import { useGlobalContext } from "@/lib/global-provider";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function AppLayout() {
  const { isLoggedIn, loading } = useGlobalContext();
  if (loading) {
    return (
      <SafeAreaProvider className="flex h-full flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" className="text-primary-300" />
      </SafeAreaProvider>
    );
  }
  if (!isLoggedIn) {
    return <Redirect href="/sign-in" />;
  }
  return (
    <SafeAreaProvider className="flex h-full flex-1 bg-white">
      <Slot />
    </SafeAreaProvider>
  );
}
