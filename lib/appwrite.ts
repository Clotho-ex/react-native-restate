import { makeRedirectUri } from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";

export const appwriteConfig = {
  platform: "com.clotho.restate",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};

export const client = new Client();

client.setEndpoint(appwriteConfig.endpoint!);
client.setProject(appwriteConfig.projectId!);
client.setPlatform(appwriteConfig.platform);

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login() {
  try {
    // Create deep link that works across Expo environments
    // Ensure localhost is used for the hostname to validation error for success/failure URLs
    const deepLink = new URL(makeRedirectUri({ preferLocalhost: true }));
    const scheme = `${deepLink.protocol}//`; // e.g. 'exp://' or 'appwrite-callback-<PROJECT_ID>://'

    // Start OAuth flow
    const loginUrl = await account.createOAuth2Token(
      OAuthProvider.Google,
      `${deepLink}`, // success URL
      `${deepLink}`, // failure URL
    );

    if (!loginUrl) throw new Error("Failed to initiate OAuth");

    // Open loginUrl and listen for the scheme redirect
    const result = await WebBrowser.openAuthSessionAsync(`${loginUrl}`, scheme);

    if (result.type !== "success") {
      throw new Error("OAuth authentication was cancelled or failed");
    }

    // Extract credentials from OAuth redirect URL
    const url = new URL(result.url);
    const secret = url.searchParams.get("secret");
    const userId = url.searchParams.get("userId");

    if (!secret || !userId) {
      throw new Error("OAuth callback missing required parameters");
    }

    // Create session with OAuth credentials
    const session = await account.createSession(userId, secret);
    if (!session) throw new Error("Failed to create session");

    console.log("Session created successfully:", session);

    // Verify the authentication was successful
    const user = await account.get();
    if (!user) throw new Error("Failed to authenticate user");

    console.log("User authenticated successfully:", user);
    return true;
  } catch (error) {
    console.error("Login error:", error);
    return false;
  }
}

export async function logout() {
  try {
    await account.deleteSessions();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getCurrentUser() {
  try {
    const response = await account.get();
    if (response.$id) {
      const userAvatar = avatar
        .getInitialsURL(response.name, 200, 200)
        .toString();
      return {
        ...response,
        avatar: userAvatar,
      };
    }
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
