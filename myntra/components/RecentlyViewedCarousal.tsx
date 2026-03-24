import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Product } from '../utils/recentlyViewed';

export default function RecentlyViewedCarousel({ data }: { data: Product[] }) {
  const router = useRouter();

  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Recently Viewed</Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push(`/product/${item._id}`)}>
            <Image source={{ uri: item.image }} style={{ width: 120, height: 160 }} />
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
