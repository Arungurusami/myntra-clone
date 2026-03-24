///// import React, { useState, useEffect, useRef } from "react";
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   useWindowDimensions,
//   ActivityIndicator,
// } from "react-native";
// import { useLocalSearchParams, useRouter } from "expo-router";
// import { Heart, ShoppingBag } from "lucide-react-native";
// import axios from "axios";

// import { useAuth } from "@/context/AuthContext";
// import {
//   addRecentlyViewed,
//   Product,
// } from "@/utils/recentlyViewed";
// import RecommendationCarousel from "../../components/RecommendationCarousel";

// export default function ProductDetails() {
//   const { id } = useLocalSearchParams();
//   const router = useRouter();
//   const { width } = useWindowDimensions();
//   const { user } = useAuth();

//   const [product, setProduct] = useState<Product | any>(null);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [isWishlist, setIsWishlist] = useState(false);

//   const scrollViewRef = useRef<ScrollView>(null);
//   const autoScrollTimer = useRef<NodeJS.Timeout | null>(null);

//   /* ---------------- FETCH PRODUCT ---------------- */
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setIsLoading(true);
//         const res = await axios.get(
//           `http://192.168.43.156:5000/product/${id}`
//         );
//         setProduct(res.data);

//         // ✅ ADD TO RECENTLY VIEWED
//         const fetchedProduct = res.data;
// setProduct(fetchedProduct);

// // ✅ SAFE: use fetched data directly
// addRecentlyViewed({
//   _id: fetchedProduct._id,
//   title: fetchedProduct.name,
//   image: fetchedProduct.images?.[0],
//   price: fetchedProduct.price,
// });

  
//       } catch (error) {
//         console.log("Product fetch error:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);


//   /* ---------------- WISHLIST ---------------- */
//   const handleAddWishlist = async () => {
//     if (!user) {
//       router.push("/login");
//       return;
//     }

//     try {
//       await axios.post(
//         "http://192.168.43.156:5000/wishlist",
//         {
//           userId: user._id,
//           productId: id,
//         }
//       );
//       setIsWishlist(true);
//       router.push("/wishlist");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   /* ---------------- ADD TO BAG ---------------- */
//   const handleAddToBag = async () => {
//     if (!user) {
//       router.push("/login");
//       return;
//     }

//     if (!selectedSize) {
//       alert("Please select a size");
//       return;
//     }

//     try {
//       setLoading(true);
//       await axios.post(
//         "http://192.168.43.156:5000/bag",
//         {
//           userId: user._id,
//           productId: id,
//           size: selectedSize,
//           quantity: 1,
//         }
//       );
//       router.push("/bag");
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ---------------- LOADING ---------------- */
//   if (isLoading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#ff3f6c" />
//       </View>
//     );
//   }

//   if (!product) {
//     return (
//       <View style={styles.container}>
//         <Text>Product not found</Text>
//       </View>
//     );
//   }

//   /* ---------------- UI ---------------- */
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         {/* IMAGE CAROUSEL */}
//         <View style={styles.carouselContainer}>
//           <ScrollView
//             ref={scrollViewRef}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             onMomentumScrollEnd={(e) => {
//               const index = Math.round(
//                 e.nativeEvent.contentOffset.x / width
//               );
//               setCurrentImageIndex(index);
//             }}
//           >
//             {product.images.map((img: string, index: number) => (
//               <Image
//                 key={index}
//                 source={{ uri: img }}
//                 style={[styles.productImage, { width }]}
//               />
//             ))}
//           </ScrollView>

//           <View style={styles.pagination}>
//             {product.images.map((_: any, index: number) => (
//               <View
//                 key={index}
//                 style={[
//                   styles.paginationDot,
//                   currentImageIndex === index &&
//                     styles.paginationDotActive,
//                 ]}
//               />
//             ))}
//           </View>
//         </View>

//         {/* PRODUCT DETAILS */}
//         <View style={styles.content}>
//           <View style={styles.header}>
//             <View>
//               <Text style={styles.brand}>{product.brand}</Text>
//               <Text style={styles.name}>{product.name}</Text>
//             </View>

//             <TouchableOpacity
//               style={styles.wishlistButton}
//               onPress={handleAddWishlist}
//             >
//               <Heart
//                 size={24}
//                 color={isWishlist ? "#ff3f6c" : "#ccc"}
//                 fill={isWishlist ? "#ff3f6c" : "none"}
//               />
//             </TouchableOpacity>
//           </View>

//           <View style={styles.priceContainer}>
//             <Text style={styles.price}>₹{product.price}</Text>
//             <Text style={styles.discount}>{product.discount}</Text>
//           </View>

//           <Text style={styles.description}>
//             {product.description}
//           </Text>

//           {/* SIZE SELECTION */}
//           <View style={styles.sizeSection}>
//             <Text style={styles.sizeTitle}>Select Size</Text>
//             <View style={styles.sizeGrid}>
//               {product.sizes.map((size: string) => (
//                 <TouchableOpacity
//                   key={size}
//                   style={[
//                     styles.sizeButton,
//                     selectedSize === size &&
//                       styles.selectedSize,
//                   ]}
//                   onPress={() => setSelectedSize(size)}
//                 >
//                   <Text
//                     style={[
//                       styles.sizeText,
//                       selectedSize === size &&
//                         styles.selectedSizeText,
//                     ]}
//                   >
//                     {size}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>

//           {/* 🔥 RECOMMENDATIONS */}
//           <RecommendationCarousel productId={product._id} />
//         </View>
//       </ScrollView>

//       {/* ADD TO BAG */}
//       <View style={styles.footer}>
//         <TouchableOpacity
//           style={styles.addToBagButton}
//           onPress={handleAddToBag}
//           disabled={loading}
//         >
//           {loading ? (
//             <ActivityIndicator color="#fff" />
//           ) : (
//             <>
//               <ShoppingBag size={20} color="#fff" />
//               <Text style={styles.addToBagText}>
//                 ADD TO BAG
//               </Text>
//             </>
//           )}
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// /* ---------------- STYLES ---------------- */
// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff" },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   carouselContainer: { position: "relative" },
//   productImage: { height: 400 },
//   pagination: {
//     position: "absolute",
//     bottom: 16,
//     flexDirection: "row",
//     width: "100%",
//     justifyContent: "center",
//   },
//   paginationDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "rgba(255,255,255,0.5)",
//     marginHorizontal: 4,
//   },
//   paginationDotActive: {
//     backgroundColor: "#fff",
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//   },
//   content: { padding: 20 },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   brand: { fontSize: 16, color: "#666" },
//   name: { fontSize: 20, fontWeight: "bold" },
//   wishlistButton: { padding: 10 },
//   priceContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 15,
//   },
//   price: { fontSize: 20, fontWeight: "bold" },
//   discount: { fontSize: 16, color: "#ff3f6c" },
//   description: { fontSize: 16, color: "#666" },
//   sizeSection: { marginBottom: 20 },
//   sizeTitle: { fontSize: 16, fontWeight: "bold" },
//   sizeGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
//   sizeButton: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   selectedSize: {
//     borderColor: "#ff3f6c",
//     backgroundColor: "#fff4f4",
//   },
//   sizeText: { fontSize: 16 },
//   selectedSizeText: { color: "#ff3f6c" },
//   footer: {
//     padding: 15,
//     borderTopWidth: 1,
//     borderTopColor: "#f0f0f0",
//   },
//   addToBagButton: {
//     backgroundColor: "#ff3f6c",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 15,
//     borderRadius: 10,
//     gap: 10,
//   },
//   addToBagText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

//////
// import React, { useState, useEffect, useRef } from "react";
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   useWindowDimensions,
//   ActivityIndicator,
// } from "react-native";
// import { useLocalSearchParams, useRouter } from "expo-router";
// import { Heart, ShoppingBag } from "lucide-react-native";
// import { useAuth } from "@/context/AuthContext";
// import axios from "axios";
// import { Platform } from "react-native";

// export default function ProductDetails() {
//   const { id } = useLocalSearchParams();
//   const router = useRouter();
//   const { width } = useWindowDimensions();

//   const [selectedSize, setSelectedSize] = useState("");
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [product, setProduct] = useState<any>(null);
//   const [isWishlist, setIsWishlist] = useState(false);

//   const scrollViewRef = useRef<ScrollView>(null);
//   const autoScrollTimer = useRef<ReturnType<typeof setInterval> | null>(null);

//   const { user } = useAuth();

//   /* ---------------- FETCH PRODUCT ---------------- */
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setIsLoading(true);
//         const res = await axios.get(
//           // `http://192.168.43.156:5000/product/${id}`

//           `https://myntra-clone-943t.onrender.com/product/${id}`
//         );
//         setProduct(res.data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);




//   /* ---------------- AUTO SCROLL ---------------- */
//   useEffect(() => {
//     if (!product) return;

//     startAutoScroll();

//     return () => {
//       if (autoScrollTimer.current) {
//         clearInterval(autoScrollTimer.current);
//       }
//     };
//   }, [product, currentImageIndex]);

//   const startAutoScroll = () => {
//     if (autoScrollTimer.current) {
//       clearInterval(autoScrollTimer.current);
//     }

//     autoScrollTimer.current = setInterval(() => {
//       if (!scrollViewRef.current || !product?.images?.length) return;

//       const nextIndex =
//         (currentImageIndex + 1) % product.images.length;

//       scrollViewRef.current.scrollTo({
//         x: nextIndex * width,
//         animated: true,
//       });

//       setCurrentImageIndex(nextIndex);
//     }, 3000);
//   };

//   /* ---------------- SCROLL HANDLER ---------------- */
//   const handleScroll = (event: any) => {
//     const offsetX = event.nativeEvent.contentOffset.x;
//     const index = Math.round(offsetX / width);
//     setCurrentImageIndex(index);

//     if (autoScrollTimer.current) {
//       clearInterval(autoScrollTimer.current);
//       startAutoScroll();
//     }
//   };

  
//   /* ---------------- WISHLIST ---------------- */
//   const handleAddWishlist = async () => {
//     if (!user) {
//       router.push("/login");
//       return;
//     }

//     try {
//       await axios.post(
//         `https://myntra-clone-943t.onrender.com/wishlist`,
//         {
//           userId: user._id,
//           productId: id,
//         }
//       );
//       setIsWishlist(true);
//       router.push("/wishlist");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   /* ---------------- ADD TO BAG ---------------- */
//   const handleAddToBag = async () => {
//     if (!user) {
//       router.push("/login");
//       return;
//     }

//     if (!selectedSize) {
//       alert("Please select a size");
//       return;
//     }

//     try {
//       setLoading(true);
//       await axios.post(`https://myntra-clone-943t.onrender.com/bag`, {
//         userId: user._id,
//         productId: id,
//         size: selectedSize,
//         quantity: 1,
//       });
//       router.push("/bag");
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ---------------- LOADER ---------------- */
//   if (isLoading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#ff3f6c" />
//       </View>
//     );
//   }

//   if (!product) {
//     return (
//       <View style={styles.container}>
//         <Text>Product not found</Text>
//       </View>
//     );
//   }

//   /* ---------------- UI ---------------- */
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <View style={styles.carouselContainer}>
//           <ScrollView
//             ref={scrollViewRef}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             onScroll={handleScroll}
//             scrollEventThrottle={16}
//           >
//             {product.images.map((img: string, index: number) => (
//               <Image
//                 key={index}
//                 source={{ uri: img }}
//                 style={[styles.productImage, { width }]}
//                 resizeMode="cover"
//               />
//             ))}
//           </ScrollView>

//           <View style={styles.pagination}>
//             {product.images.map((_: any, index: number) => (
//               <View
//                 key={index}
//                 style={[
//                   styles.paginationDot,
//                   currentImageIndex === index &&
//                     styles.paginationDotActive,
//                 ]}
//               />
//             ))}
//           </View>
//         </View>

//         <View style={styles.content}>
//           <View style={styles.header}>
//             <View>
//               <Text style={styles.brand}>{product.brand}</Text>
//               <Text style={styles.name}>{product.name}</Text>
//             </View>

//             <TouchableOpacity
//               style={styles.wishlistButton}
//               onPress={handleAddWishlist}
//             >
//               <Heart
//                 size={24}
//                 color={isWishlist ? "#ff3f6c" : "#ccc"}
//                 fill={isWishlist ? "#ff3f6c" : "none"}
//               />
//             </TouchableOpacity>
//           </View>

//           <View style={styles.priceContainer}>
//             <Text style={styles.price}>₹{product.price}</Text>
//             <Text style={styles.discount}>{product.discount}</Text>
//           </View>

//           <Text style={styles.description}>
//             {product.description}
//           </Text>

//           <View style={styles.sizeSection}>
//             <Text style={styles.sizeTitle}>Select Size</Text>
//             <View style={styles.sizeGrid}>
//               {product.sizes.map((size: string) => (
//                 <TouchableOpacity
//                   key={size}
//                   style={[
//                     styles.sizeButton,
//                     selectedSize === size &&
//                       styles.selectedSize,
//                   ]}
//                   onPress={() => setSelectedSize(size)}
//                 >
//                   <Text
//                     style={[
//                       styles.sizeText,
//                       selectedSize === size &&
//                         styles.selectedSizeText,
//                     ]}
//                   >
//                     {size}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>
//         </View>
//       </ScrollView>

//       <View style={styles.footer}>
//         <TouchableOpacity
//           style={styles.addToBagButton}
//           onPress={handleAddToBag}
//           disabled={loading}
//         >
//           {loading ? (
//             <ActivityIndicator size="small" color="#fff" />
//           ) : (
//             <>
//               <ShoppingBag size={20} color="#fff" />
//               <Text style={styles.addToBagText}>
//                 ADD TO BAG
//               </Text>
//             </>
//           )}
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// /* ---------------- STYLES ---------------- */
// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff" },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   carouselContainer: { position: "relative" },
//   productImage: { height: 400 },
//   pagination: {
//     position: "absolute",
//     bottom: 16,
//     flexDirection: "row",
//     width: "100%",
//     justifyContent: "center",
//   },
//   paginationDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "rgba(255,255,255,0.5)",
//     marginHorizontal: 4,
//   },
//   paginationDotActive: {
//     backgroundColor: "#fff",
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//   },
//   content: { padding: 20 },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   brand: { fontSize: 16, color: "#666" },
//   name: { fontSize: 20, fontWeight: "bold" },
//   wishlistButton: { padding: 10 },
//   priceContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 15,
//   },
//   price: { fontSize: 20, fontWeight: "bold" },
//   discount: { fontSize: 16, color: "#ff3f6c" },
//   description: { fontSize: 16, color: "#666" },
//   sizeSection: { marginBottom: 20 },
//   sizeTitle: { fontSize: 16, fontWeight: "bold" },
//   sizeGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
//   sizeButton: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   selectedSize: {
//     borderColor: "#ff3f6c",
//     backgroundColor: "#fff4f4",
//   },
//   sizeText: { fontSize: 16 },
//   selectedSizeText: { color: "#ff3f6c" },
//   footer: {
//     padding: 15,
//     borderTopWidth: 1,
//     borderTopColor: "#f0f0f0",
//   },
//   addToBagButton: {
//     backgroundColor: "#ff3f6c",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 15,
//     borderRadius: 10,
//     gap: 10,
//   },
//   addToBagText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });



// import React, { useState, useEffect, useRef } from "react";
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   useWindowDimensions,
//   ActivityIndicator,
//   FlatList,
// } from "react-native";
// import { useLocalSearchParams, useRouter } from "expo-router";
// import { Heart, ShoppingBag } from "lucide-react-native";
// import axios from "axios";
// import { useAuth } from "@/context/AuthContext";
// import { addRecentlyViewed, Product } from "@/utils/recentlyViewed";

// const BASE_URL = "http://10.13.168.178:5000";

// export default function ProductDetails() {
//   const { id } = useLocalSearchParams();
//   const router = useRouter();
//   const { width } = useWindowDimensions();
//   const { user } = useAuth();

//   const [product, setProduct] = useState<Product | any>(null);
//   const [recommendations, setRecommendations] = useState<any[]>([]);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [isWishlist, setIsWishlist] = useState(false);

//   const scrollViewRef = useRef<ScrollView>(null);

//   /* ---------------- FETCH PRODUCT ---------------- */
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setIsLoading(true);

//         const res = await axios.get(`${BASE_URL}/product/${id}`);
//         const fetchedProduct = res.data;

//         setProduct(fetchedProduct);

//         // History
//         if (user) {
//           await axios.post(`${BASE_URL}/history`, {
//             userId: user._id,
//             productId: fetchedProduct._id,
//           });
//         }

//         // Recently viewed
//         addRecentlyViewed({
//           _id: fetchedProduct._id,
//           title: fetchedProduct.name,
//           image: fetchedProduct.images?.[0],
//           price: fetchedProduct.price,
//         });

//         // Recommendations
//         const recRes = await axios.get(
//           `${BASE_URL}/recommendations/${fetchedProduct._id}/${user?._id || "guest"}`
//         );
//         setRecommendations(recRes.data);

//         // Wishlist check
//         if (user) {
//           const wishlistRes = await axios.get(
//             `${BASE_URL}/wishlist/${user._id}`
//           );
//           const exists = wishlistRes.data.some(
//             (item: any) => item.productId === fetchedProduct._id
//           );
//           setIsWishlist(exists);
//         }

//       } catch (error) {
//         console.log("Product fetch error:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   /* ---------------- ADD TO CART ---------------- */
//   const handleAddToCart = async () => {
//     if (!user) return router.push("/login");

//     if (!selectedSize) {
//       alert("Please select a size");
//       return;
//     }

//     try {
//       setLoading(true);

//       await axios.post(`${BASE_URL}/cart`, {
//         userId: user._id,
//         productId: id,
//         size: selectedSize,
//         quantity: 1,
//       });

//       alert("Added to Cart ✅");
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ---------------- GO TO CART ---------------- */
// const handleGoToCart = async () => {
//   await handleAddToCart();
//   setTimeout(() => {
//     router.push("/cart");
//   }, 300); // give backend time
// };





//   /* ---------------- SAVE FOR LATER ---------------- */
//   const handleSaveForLater = async () => {
//     if (!user) return router.push("/login");

//     try {
//       await axios.post(`${BASE_URL}/cart/save-direct`, {
//         userId: user._id,
//         productId: id,
//       });

//       alert("Saved for later 💾");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   /* ---------------- WISHLIST ---------------- */
//   const handleAddWishlist = async () => {
//     if (!user) return router.push("/login");

//     try {
//       await axios.post(`${BASE_URL}/wishlist`, {
//         userId: user._id,
//         productId: id,
//       });

//       setIsWishlist(!isWishlist);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   /* ---------------- LOADING ---------------- */
//   if (isLoading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#ff3f6c" />
//       </View>
//     );
//   }

//   if (!product) {
//     return (
//       <View style={styles.container}>
//         <Text>Product not found</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <ScrollView>

//         {/* IMAGE CAROUSEL */}
//         <View style={styles.carouselContainer}>
//           <ScrollView
//             ref={scrollViewRef}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             onMomentumScrollEnd={(e) => {
//               const index = Math.round(
//                 e.nativeEvent.contentOffset.x / width
//               );
//               setCurrentImageIndex(index);
//             }}
//           >
//             {product.images.map((img: string, index: number) => (
//               <Image
//                 key={index}
//                 source={{ uri: img }}
//                 style={[styles.productImage, { width }]}
//               />
//             ))}
//           </ScrollView>

//           {/* ❤️ + 💾 */}
//           <View style={styles.topButtons}>
//             <TouchableOpacity
//               style={styles.iconBtn}
//               onPress={handleAddWishlist}
//             >
//               <Heart
//                 size={22}
//                 color={isWishlist ? "#ff3f6c" : "#333"}
//                 fill={isWishlist ? "#ff3f6c" : "transparent"}
//               />
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.iconBtn}
//               onPress={handleSaveForLater}
//             >
//               <Text>💾</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* DETAILS */}
//         <View style={styles.content}>
//           <Text style={styles.brand}>{product.brand}</Text>
//           <Text style={styles.name}>{product.name}</Text>
//           <Text style={styles.price}>₹{product.price}</Text>

//           {/* SIZE */}
//           <View style={styles.sizeSection}>
//             <Text style={styles.sizeTitle}>Select Size</Text>
//             <View style={styles.sizeGrid}>
//               {product.sizes.map((size: string) => (
//                 <TouchableOpacity
//                   key={size}
//                   style={[
//                     styles.sizeButton,
//                     selectedSize === size && styles.selectedSize,
//                   ]}
//                   onPress={() => setSelectedSize(size)}
//                 >
//                   <Text>{size}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>

//           {/* RECOMMENDATIONS */}
//           {recommendations.length > 0 && (
//             <View style={{ marginTop: 30 }}>
//               <Text style={styles.recommendTitle}>
//                 You May Also Like
//               </Text>

//               <FlatList
//                 data={recommendations}
//                 horizontal
//                 keyExtractor={(item, index) =>
//                   item?._id || index.toString()
//                 }
//                 renderItem={({ item }) => (
//                   <TouchableOpacity
//                     style={styles.recCard}
//                     onPress={() => router.push(`/product/${item._id}`)}
//                   >
//                     <Image
//                       source={{ uri: item.images?.[0] }}
//                       style={styles.recImage}
//                     />
//                     <Text>{item.name}</Text>
//                     <Text>₹{item.price}</Text>
//                   </TouchableOpacity>
//                 )}
//               />
//             </View>
//           )}
//         </View>
//       </ScrollView>

//       {/* FOOTER */}
//       <View style={styles.footer}>
//         <TouchableOpacity
//           style={[styles.addToBagButton, { flex: 1, marginRight: 10 }]}
//           onPress={handleAddToCart}
//         >
//           <Text style={styles.addToBagText}>ADD TO CART</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.addToBagButton, { flex: 1, backgroundColor: "#000" }]}
//           onPress={handleGoToCart}
//         >
//           <Text style={styles.addToBagText}>GO TO CART</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff" },
//   loaderContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
//   carouselContainer: { height: 400 },
//   productImage: { height: 400 },

//   topButtons: {
//     position: "absolute",
//     top: 20,
//     right: 20,
//     flexDirection: "row",
//     gap: 10,
//   },

//   iconBtn: {
//     backgroundColor: "#fff",
//     padding: 10,
//     borderRadius: 30,
//     elevation: 5,
//   },

//   content: { padding: 20 },
//   brand: { color: "#666" },
//   name: { fontSize: 20, fontWeight: "bold" },
//   price: { fontSize: 18, fontWeight: "bold" },

//   sizeSection: { marginVertical: 15 },
//   sizeGrid: { flexDirection: "row", gap: 10 },
//   sizeTitle: {
//   fontWeight: "bold",
//   marginTop: 15,
//   marginBottom: 10,
// },

//   sizeButton: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     padding: 10,
//     borderRadius: 20,
//   },

//   selectedSize: { borderColor: "#ff3f6c" },

//   recommendTitle: { fontWeight: "bold" },
//   recCard: { width: 140, marginRight: 10 },
//   recImage: { width: 140, height: 160, borderRadius: 10 },

//   footer: {
//     flexDirection: "row",
//     padding: 15,
//   },

//   addToBagButton: {
//     backgroundColor: "#ff3f6c",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//   },

//   addToBagText: { color: "#fff", fontWeight: "bold" },
// });



import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Heart } from "lucide-react-native";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import { addRecentlyViewed, Product } from "@/utils/recentlyViewed";

const BASE_URL = "http://10.13.168.178:5000";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const { user } = useAuth();

  const [product, setProduct] = useState<Product | any>(null);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);

  /* ---------------- FETCH PRODUCT ---------------- */
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);

        const res = await axios.get(`${BASE_URL}/product/${id}`);
        const fetchedProduct = res.data;

        setProduct(fetchedProduct);

        // Recently viewed
        addRecentlyViewed({
          _id: fetchedProduct._id,
          title: fetchedProduct.name,
          image: fetchedProduct.images?.[0],
          price: fetchedProduct.price,
        });

        // Recommendations
        const recRes = await axios.get(
          `${BASE_URL}/recommendations/${fetchedProduct._id}/${user?._id || "guest"}`
        );
        setRecommendations(recRes.data);

      } catch (error) {
        console.log("Product fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  /* ---------------- ADD TO CART ---------------- */
  const handleAddToCart = async () => {
    if (!user) return router.push("/login");

    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    try {
      setLoading(true);

      await axios.post(`${BASE_URL}/cart`, {
        userId: user._id,
        productId: id,
        size: selectedSize,
        quantity: 1,
      });

      alert("Added to Cart ✅");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoToCart = async () => {
    await handleAddToCart();
    router.push("/cart");
  };

  /* ---------------- LOADING ---------------- */
  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#ff3f6c" />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.loader}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>

        {/* IMAGE CAROUSEL */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => {
            const index = Math.round(
              e.nativeEvent.contentOffset.x / width
            );
            setCurrentImageIndex(index);
          }}
        >
          {product.images.map((img: string, index: number) => (
            <Image
              key={index}
              source={{ uri: img }}
              style={[styles.image, { width }]}
            />
          ))}
        </ScrollView>

        {/* DETAILS */}
        <View style={styles.content}>
          <Text style={styles.brand}>{product.brand}</Text>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>₹{product.price}</Text>

          {/* SIZE */}
          <Text style={styles.sizeTitle}>Select Size</Text>
          <View style={styles.sizeRow}>
            {product.sizes.map((size: string) => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeBtn,
                  selectedSize === size && styles.selectedSize,
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* RECOMMENDATIONS */}
          {recommendations.length > 0 && (
            <View style={{ marginTop: 25 }}>
              <Text style={styles.recommendTitle}>
                You May Also Like
              </Text>

              <FlatList
                data={recommendations}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) =>
                  item?._id || index.toString()
                }
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.recCard}
                    onPress={() => router.push(`/product/${item._id}`)}
                  >
                    <Image
                      source={{ uri: item.images?.[0] }}
                      style={styles.recImage}
                    />

                    <View style={styles.recInfo}>
                      <Text numberOfLines={1} style={styles.recBrand}>
                        {item.brand || "Brand"}
                      </Text>

                      <Text numberOfLines={2} style={styles.recName}>
                        {item.name}
                      </Text>

                      <Text style={styles.recPrice}>
                        ₹{item.price}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </View>
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.cartBtn}
          onPress={handleAddToCart}
        >
          <Text style={styles.btnText}>ADD TO CART</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buyBtn}
          onPress={handleGoToCart}
        >
          <Text style={styles.btnText}>GO TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ---------------- STYLES ---------------- */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: { height: 400 },

  content: { padding: 15 },

  brand: { color: "#666" },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff3f6c",
  },

  sizeTitle: {
    marginTop: 15,
    marginBottom: 10,
    fontWeight: "bold",
  },

  sizeRow: {
    flexDirection: "row",
    gap: 10,
  },

  sizeBtn: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 20,
  },

  selectedSize: {
    borderColor: "#ff3f6c",
  },

  /* 🔥 RECOMMENDATIONS */
  recommendTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },

  recCard: {
    width: 150,
    marginRight: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
    elevation: 3,
  },

  recImage: {
    width: "100%",
    height: 150,
  },

  recInfo: {
    padding: 10,
    minHeight: 90,
  },

  recBrand: {
    fontWeight: "bold",
    fontSize: 13,
    marginBottom: 4,
  },

  recName: {
    fontSize: 12,
    marginBottom: 6,
    lineHeight: 16,
  },

  recPrice: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#ff3f6c",
  },

  /* FOOTER */
  footer: {
    flexDirection: "row",
    padding: 10,
  },

  cartBtn: {
    flex: 1,
    backgroundColor: "#ff3f6c",
    padding: 15,
    marginRight: 5,
    borderRadius: 8,
    alignItems: "center",
  },

  buyBtn: {
    flex: 1,
    backgroundColor: "#000",
    padding: 15,
    marginLeft: 5,
    borderRadius: 8,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});