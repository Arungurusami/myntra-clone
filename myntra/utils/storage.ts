// import * as SecureStore from "expo-secure-store";

// export const saveUserData = async (
//   _id: string,
//   name: string,
//   email: string
// ) => {
//   await SecureStore.setItemAsync("userid", _id);
//   await SecureStore.setItemAsync("userName", name);
//   await SecureStore.setItemAsync("userEmail", email);
// };

// export const getUserData = async () => {
//   const _id = await SecureStore.getItemAsync("userid");
//   const name = await SecureStore.getItemAsync("userName");
//   const email = await SecureStore.getItemAsync("userEmail");
//   return { _id, name, email };
// };

// export const clearUserData = async () => {
//   await SecureStore.deleteItemAsync("userid");
//   await SecureStore.deleteItemAsync("userName");
//   await SecureStore.deleteItemAsync("userEmail");
// };


import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";

export type UserData = {
  _id: string;
  name: string;
  email: string;
};

const USER_DATA_KEY = "user_data";

export const saveUserData = async (_id: string, name: string, email: string): Promise<void> => {
  try {
    const userData: UserData = { _id, name, email };
    const dataString = JSON.stringify(userData);
    
    if (Platform.OS === 'web') {
      // Store as single JSON string in localStorage
      localStorage.setItem(USER_DATA_KEY, dataString);
    } else {
      // Store as single JSON string in SecureStore
      await SecureStore.setItemAsync(USER_DATA_KEY, dataString);
    }
    
    console.log("✅ User data saved");
  } catch (error) {
    console.error("❌ Error saving user data:", error);
  }
};

export const getUserData = async (): Promise<UserData> => {
  try {
    let dataString: string | null = null;
    
    if (Platform.OS === 'web') {
      dataString = localStorage.getItem(USER_DATA_KEY);
    } else {
      dataString = await SecureStore.getItemAsync(USER_DATA_KEY);
    }
    
    if (dataString) {
      return JSON.parse(dataString) as UserData;
    }
    
    return { _id: "", name: "", email: "" };
  } catch (error) {
    console.error("❌ Error getting user data:", error);
    return { _id: "", name: "", email: "" };
  }
};

export const clearUserData = async (): Promise<void> => {
  try {
    if (Platform.OS === 'web') {
      localStorage.removeItem(USER_DATA_KEY);
    } else {
      await SecureStore.deleteItemAsync(USER_DATA_KEY);
    }
    console.log("✅ User data cleared");
  } catch (error) {
    console.error("❌ Error clearing user data:", error);
  }
};