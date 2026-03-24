import { Platform } from "react-native";

const KEY = "RECENTLY_VIEWED_PRODUCTS";

export interface Product {
  _id: string;
  title: string;
  image: string;
  price: number;
}

let AsyncStorage: any = null;

// Load AsyncStorage only on native
if (Platform.OS !== "web") {
  AsyncStorage =
    require("@react-native-async-storage/async-storage").default;
}

/* ---------- ADD ---------- */
export const addRecentlyViewed = async (product: Product) => {
  try {
    let list: Product[] = [];

    if (Platform.OS === "web") {
      const data = localStorage.getItem(KEY);
      list = data ? JSON.parse(data) : [];
    } else {
      const data = await AsyncStorage.getItem(KEY);
      list = data ? JSON.parse(data) : [];
    }

    list = list.filter((item) => item._id !== product._id);
    list.unshift(product);

    if (list.length > 10) list.pop();

    if (Platform.OS === "web") {
      localStorage.setItem(KEY, JSON.stringify(list));
    } else {
      await AsyncStorage.setItem(KEY, JSON.stringify(list));
    }
  } catch (err) {
    console.log("RecentlyViewed add error:", err);
  }
};

/* ---------- GET ---------- */
export const getRecentlyViewed = async (): Promise<Product[]> => {
  try {
    if (Platform.OS === "web") {
      const data = localStorage.getItem(KEY);
      return data ? JSON.parse(data) : [];
    } else {
      const data = await AsyncStorage.getItem(KEY);
      return data ? JSON.parse(data) : [];
    }
  } catch (err) {
    console.log("RecentlyViewed get error:", err);
    return [];
  }
};
