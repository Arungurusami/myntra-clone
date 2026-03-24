import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";

interface RecommendationCarouselProps {
  productId: string;
}

interface Product {
  _id: string;
  name: string;
  brand: string;
  price: number;
  images: string[];
}

export default function RecommendationCarousel({
  productId,
}: RecommendationCarouselProps) {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const res = await axios.get(
          `http://10.13.168.178:5000/product/recommend/${productId}`
        );
        setProducts(res.data || []);
      } catch (error) {
        console.log("Recommendation error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [productId]);

  if (loading) {
    return (
      <ActivityIndicator
        size="small"
        color="#ff3f6c"
        style={{ marginVertical: 20 }}
      />
    );
  }

  if (products.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You may also like</Text>

      <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/product/${item._id}`)}
          >
            <Image
              source={{ uri: item.images?.[0] }}
              style={styles.image}
            />
            <Text style={styles.brand}>{item.brand}</Text>
            <Text style={styles.name} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.price}>₹{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

/* ---------------- STYLES ---------------- */
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  card: {
    width: 140,
    marginRight: 15,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
  },
  brand: {
    fontSize: 12,
    color: "#888",
    marginTop: 6,
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 2,
  },
});
