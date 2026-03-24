// // import {
// //   ScrollView,
// //   View,
// //   Text,
// //   Image,
// //   TouchableOpacity,
// //   StyleSheet,
// //   ActivityIndicator,
// // } from "react-native";
// // import { useRouter } from "expo-router";
// // import { Search, ChevronRight } from "lucide-react-native";
// // import React, { useEffect, useState } from "react";
// // import { useAuth } from "@/context/AuthContext";
// // import axios from "axios";

// // // const categories = [
// // //   {
// // //     id: 1,
// // //     name: "Men",
// // //     image:
// // //       "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&auto=format&fit=crop",
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Women",
// // //     image:
// // //       "https://images.unsplash.com/photo-1618244972963-dbad0c4abf18?w=500&auto=format&fit=crop",
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "Kids",
// // //     image:
// // //       "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&auto=format&fit=crop",
// // //   },
// // //   {
// // //     id: 4,
// // //     name: "Beauty",
// // //     image:
// // //       "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop",
// // //   },
// // // ];

// // // const products = [
// // //   {
// // //     id: 1,
// // //     name: "Casual White T-Shirt",
// // //     brand: "Roadster",
// // //     price: "₹499",
// // //     discount: "60% OFF",
// // //     image:
// // //       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop",
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Denim Jacket",
// // //     brand: "Levis",
// // //     price: "₹2499",
// // //     discount: "40% OFF",
// // //     image:
// // //       "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=500&auto=format&fit=crop",
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "Summer Dress",
// // //     brand: "ONLY",
// // //     price: "₹1299",
// // //     discount: "50% OFF",
// // //     image:
// // //       "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&auto=format&fit=crop",
// // //   },
// // //   {
// // //     id: 4,
// // //     name: "Classic Sneakers",
// // //     brand: "Nike",
// // //     price: "₹3499",
// // //     discount: "30% OFF",
// // //     image:
// // //       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop",
// // //   },
// // // ];

// // const deals = [
// //   {
// //     id: 1,
// //     title: "Under ₹599",
// //     image:
// //       "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop",
// //   },
// //   {
// //     id: 2,
// //     title: "40-70% Off",
// //     image:
// //       "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop",
// //   },
// // ];

// // export default function Home() {
// //   const router = useRouter();
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [product, setproduct] = useState<any>(null);
// //   const [categories, setcategories] = useState<any>(null);
// //   const { user } = useAuth();
// //   const handleProductPress = (productId: number) => {
// //     if (!user) {
// //       router.push("/login");
// //     } else {
// //       router.push(`/product/${productId}`);
// //     }
// //   };

// //   useEffect(() => {
// //     const fetchproduct = async () => {
// //       try {
// //         setIsLoading(true);
// //         const cat = await axios.get("https://myntra-clone-943t.onrender.com/category");
// //         const product = await axios.get("https://myntra-clone-943t.onrender.com/product");
// //         setcategories(cat.data);
// //         setproduct(product.data);
// //       } catch (error) {
// //         console.log(error);
// //         setIsLoading(false);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };
// //     fetchproduct();
// //   }, []);
  
// //   return (
// //     <ScrollView style={styles.container}>
// //       <View style={styles.header}>
// //         <Text style={styles.logo}>MYNTRA</Text>
// //         <TouchableOpacity style={styles.searchButton}>
// //           <Search size={24} color="#3e3e3e" />
// //         </TouchableOpacity>
// //       </View>

// //       <Image
// //         source={{
// //           uri: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop",
// //         }}
// //         style={styles.banner}
// //       />

// //       <View style={styles.section}>
// //         <View style={styles.sectionHeader}>
// //           <Text style={styles.sectionTitle}>SHOP BY CATEGORY</Text>
// //           <TouchableOpacity style={styles.viewAll}>
// //             <Text style={styles.viewAllText}>View All</Text>
// //             <ChevronRight size={20} color="#ff3f6c" />
// //           </TouchableOpacity>
// //         </View>
// //         <ScrollView
// //           horizontal
// //           showsHorizontalScrollIndicator={false}
// //           style={styles.categoriesScroll}
// //         >
// //           {isLoading ? (
// //             <ActivityIndicator
// //               size="large"
// //               color="#ff3f6c"
// //               style={styles.loader}
// //             />
// //           ) : !categories || categories.length === 0 ? (
// //             <Text style={styles.emptyText}>No categories available</Text>
// //           ) : (
// //             categories.map((category: any) => (
// //               <TouchableOpacity key={category._id} style={styles.categoryCard}>
// //                 <Image
// //                   source={{ uri: category.image }}
// //                   style={styles.categoryImage}
// //                 />
// //                 <Text style={styles.categoryName}>{category.name}</Text>
// //               </TouchableOpacity>
// //             ))
// //           )}
// //         </ScrollView>
// //       </View>

// //       <View style={styles.section}>
// //         <View style={styles.sectionHeader}>
// //           <Text style={styles.sectionTitle}>DEALS OF THE DAY</Text>
// //         </View>
// //         <ScrollView
// //           horizontal
// //           showsHorizontalScrollIndicator={false}
// //           style={styles.dealsScroll}
// //         >
// //           {deals.map((deal) => (
// //             <TouchableOpacity key={deal.id} style={styles.dealCard}>
// //               <Image source={{ uri: deal.image }} style={styles.dealImage} />
// //               <View style={styles.dealOverlay}>
// //                 <Text style={styles.dealTitle}>{deal.title}</Text>
// //               </View>
// //             </TouchableOpacity>
// //           ))}
// //         </ScrollView>
// //       </View>

// //       <View style={styles.section}>
// //         <View style={styles.sectionHeader}>
// //           <Text style={styles.sectionTitle}>TRENDING NOW</Text>
// //         </View>
// //         <View style={styles.productsGrid}>
// //           {isLoading ? (
// //             <ActivityIndicator
// //               size="large"
// //               color="#ff3f6c"
// //               style={styles.loader}
// //             />
// //           ) : !product || product.length === 0 ? (
// //             <Text style={styles.emptyText}>No Product available</Text>
// //           ) : ( 
// //             <View style={styles.productsGrid}>
// //               {product.map((product: any) => (
// //                 <TouchableOpacity
// //                   key={product._id}
// //                   style={styles.productCard}
// //                   onPress={() => handleProductPress(product._id)}
// //                 >
// //                   <Image
// //                     source={{ uri: product.images[0
                      
// //                     ] }}
// //                     style={styles.productImage}
// //                   />
// //                   <View style={styles.productInfo}>
// //                     <Text style={styles.brandName}>{product.brand}</Text>
// //                     <Text style={styles.productName}>{product.name}</Text>
// //                     <View style={styles.priceRow}>
// //                       <Text style={styles.productPrice}>{product.price}</Text>
// //                       <Text style={styles.discount}>{product.discount}</Text>
// //                     </View>
// //                   </View>
// //                 </TouchableOpacity>
// //               ))}
// //             </View>
// //           )}
// //         </View>
// //       </View>
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //   },
// //   header: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     padding: 15,
// //     paddingTop: 50,
// //     backgroundColor: "#fff",
// //     borderBottomWidth: 1,
// //     borderBottomColor: "#f0f0f0",
// //   },
// //   emptyText: {
// //     textAlign: "center",
// //     marginTop: 20,
// //     fontSize: 16,
// //     color: "#666",
// //   },
// //   logo: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //     color: "#3e3e3e",
// //   },
// //   searchButton: {
// //     padding: 8,
// //   },
// //   banner: {
// //     width: "100%",
// //     height: 200,
// //     resizeMode: "cover",
// //   },
// //   section: {
// //     padding: 15,
// //   },
// //   sectionHeader: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     marginBottom: 15,
// //   },
// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     color: "#3e3e3e",
// //   },
// //   viewAll: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   viewAllText: {
// //     color: "#ff3f6c",
// //     marginRight: 5,
// //   },
// //   categoriesScroll: {
// //     marginHorizontal: -15,
// //   },
// //   categoryCard: {
// //     width: 100,
// //     marginHorizontal: 8,
// //   },
// //   categoryImage: {
// //     width: 100,
// //     height: 100,
// //     borderRadius: 50,
// //   },
// //   categoryName: {
// //     textAlign: "center",
// //     marginTop: 8,
// //     fontSize: 14,
// //     color: "#3e3e3e",
// //   },
// //   dealsScroll: {
// //     marginHorizontal: -15,
// //   },
// //   dealCard: {
// //     width: 280,
// //     height: 150,
// //     marginHorizontal: 8,
// //     borderRadius: 10,
// //     overflow: "hidden",
// //   },
// //   dealImage: {
// //     width: "100%",
// //     height: "100%",
// //   },
// //   dealOverlay: {
// //     position: "absolute",
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //     backgroundColor: "rgba(0,0,0,0.4)",
// //     padding: 15,
// //   },
// //   dealTitle: {
// //     color: "#fff",
// //     fontSize: 18,
// //     fontWeight: "bold",
// //   },
// //   productsGrid: {
// //     flexDirection: "row",
// //     flexWrap: "wrap",
// //     marginHorizontal: -8,
// //   },
// //   productCard: {
// //     width: "48%",
// //     marginHorizontal: "1%",
// //     marginBottom: 15,
// //     backgroundColor: "#fff",
// //     borderRadius: 10,
// //     shadowColor: "#000",
// //     shadowOffset: {
// //       width: 0,
// //       height: 2,
// //     },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 3.84,
// //     elevation: 5,
// //   },
// //   productImage: {
// //     width: "100%",
// //     height: 200,
// //     borderTopLeftRadius: 10,
// //     borderTopRightRadius: 10,
// //   },
// //   productInfo: {
// //     padding: 10,
// //   },
// //   brandName: {
// //     fontSize: 14,
// //     color: "#666",
// //     marginBottom: 2,
// //   },
// //   productName: {
// //     fontSize: 16,
// //     marginBottom: 5,
// //   },
// //   priceRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   productPrice: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //     color: "#3e3e3e",
// //     marginRight: 8,
// //   },
// //   discount: {
// //     fontSize: 14,
// //     color: "#ff3f6c",
// //     fontWeight: "500",
// //   },
// //   loader: {
// //     marginTop: 50,
// //   },
// // });


// // import {
// //   ScrollView,
// //   View,
// //   Text,
// //   Button,
// //   Image,
// //   TouchableOpacity,
// //   StyleSheet,
// //   ActivityIndicator,
// // } from "react-native";
// // import { useRouter } from "expo-router";
// // import { Search, ChevronRight } from "lucide-react-native";
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // import { useFocusEffect } from "expo-router";
// // import { useTheme } from "@/context/ThemeContext";
// // import { useAuth } from "@/context/AuthContext";
// // import RecentlyViewedCarousal from "../../components/RecentlyViewedCarousal";
// // import { getRecentlyViewed, Product } from "@/utils/recentlyViewed";


// // const deals = [
// //   {
// //     id: 1,
// //     title: "Under ₹599",
// //     image:
// //       "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop",
// //   },
// //   {
// //     id: 2,
// //     title: "40-70% Off",
// //     image:
// //       "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop",
// //   },
// // ];

// // export default function Home() {
// //   const router = useRouter();
// //   const { user } = useAuth();

// //   const [isLoading, setIsLoading] = useState(false);
// //   const [products, setProducts] = useState<any[]>([]);
// //   const [categories, setCategories] = useState<any[]>([]);
// //   const [recent, setRecent] = useState<Product[]>([]);

// //   const { theme , toggleTheme} = useTheme();

// //   const handleProductPress = (productId: string) => {
// //     if (!user) {
// //       router.push("/login");
// //     } else {
// //       router.push(`/product/${productId}`);
// //     }
// //   };



// //   // Fetch Recently Viewed (Task 1)
// //  useFocusEffect(
// //   React.useCallback(() => {
// //     const loadRecent = async () => {
// //       const data = await getRecentlyViewed();
// //       setRecent(data);
// //     };

// //     loadRecent();
// //   }, [])
// // );

// // <View style={{ backgroundColor: theme.background, flex: 1 }}>
// //   <Text style={{ color: theme.text }}>Hello</Text>
// //   <Button onPress={toggleTheme} />
// // </View>



// //   // Fetch categories & products
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         setIsLoading(true);
// //         const [catRes, productRes] = await Promise.all([
// //           axios.get("http://10.125.59.178:5000/category"),
// //           axios.get("http://10.125.59.178:5000/product"),
// //         ]);

// //         setCategories(catRes.data);
// //         setProducts(productRes.data);
// //       } catch (error) {
// //         console.log("Home fetch error:", error);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   return (
// //     <ScrollView style={styles.container}>
// //       {/* HEADER */}
// //       <View style={styles.header}>
// //         <Text style={styles.logo}>MYNTRA</Text>
// //         <TouchableOpacity style={styles.searchButton}>
// //           <Search size={24} color="#3e3e3e" />
// //         </TouchableOpacity>
// //       </View>

// //       {/* BANNER */}
// //       <Image
// //         source={{
// //           uri: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop",
// //         }}
// //         style={styles.banner}
// //       />

// //       {/* RECENTLY VIEWED (Task 1) */}
// //       {recent.length > 0 && (
// //         <View style={styles.section}>
// //           <RecentlyViewedCarousal data={recent} />
// //         </View>
// //       )}

// //       {/* SHOP BY CATEGORY */}
// //       <View style={styles.section}>
// //         <View style={styles.sectionHeader}>
// //           <Text style={styles.sectionTitle}>SHOP BY CATEGORY</Text>
// //           <TouchableOpacity style={styles.viewAll}>
// //             <Text style={styles.viewAllText}>View All</Text>
// //             <ChevronRight size={20} color="#ff3f6c" />
// //           </TouchableOpacity>
// //         </View>

// //         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
// //           {isLoading ? (
// //             <ActivityIndicator size="large" color="#ff3f6c" />
// //           ) : categories.length === 0 ? (
// //             <Text style={styles.emptyText}>No categories available</Text>
// //           ) : (
// //             categories.map((category) => (
// //               <TouchableOpacity key={category._id} style={styles.categoryCard}>
// //                 <Image
// //                   source={{ uri: category.image }}
// //                   style={styles.categoryImage}
// //                 />
// //                 <Text style={styles.categoryName}>{category.name}</Text>
// //               </TouchableOpacity>
// //             ))
// //           )}
// //         </ScrollView>
// //       </View>

// //       {/* DEALS */}
// //       <View style={styles.section}>
// //         <Text style={styles.sectionTitle}>DEALS OF THE DAY</Text>
// //         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
// //           {deals.map((deal) => (
// //             <TouchableOpacity key={deal.id} style={styles.dealCard}>
// //               <Image source={{ uri: deal.image }} style={styles.dealImage} />
// //               <View style={styles.dealOverlay}>
// //                 <Text style={styles.dealTitle}>{deal.title}</Text>
// //               </View>
// //             </TouchableOpacity>
// //           ))}
// //         </ScrollView>
// //       </View>

// //       {/* TRENDING PRODUCTS */}
// //       <View style={styles.section}>
// //         <Text style={styles.sectionTitle}>TRENDING NOW</Text>

// //         {isLoading ? (
// //           <ActivityIndicator size="large" color="#ff3f6c" />
// //         ) : products.length === 0 ? (
// //           <Text style={styles.emptyText}>No products available</Text>
// //         ) : (
// //           <View style={styles.productsGrid}>
// //             {products.map((product) => (
// //               <TouchableOpacity
// //                 key={product._id}
// //                 style={styles.productCard}
// //                 onPress={() => handleProductPress(product._id)}
// //               >
// //                 <Image
// //                   source={{ uri: product.images?.[0] }}
// //                   style={styles.productImage}
// //                 />
// //                 <View style={styles.productInfo}>
// //                   <Text style={styles.brandName}>{product.brand}</Text>
// //                   <Text style={styles.productName}>{product.name}</Text>
// //                   <View style={styles.priceRow}>
// //                     <Text style={styles.productPrice}>₹{product.price}</Text>
// //                     <Text style={styles.discount}>{product.discount}</Text>
// //                   </View>
// //                 </View>
// //               </TouchableOpacity>
// //             ))}
// //           </View>
// //         )}
// //       </View>
// //     </ScrollView>
// //   );
// // }


// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //   },

// //   header: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     padding: 15,
// //     paddingTop: 50,
// //     backgroundColor: "#fff",
// //     borderBottomWidth: 1,
// //     borderBottomColor: "#f0f0f0",
// //   },

// //   logo: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //     color: "#3e3e3e",
// //   },

// //   searchButton: {
// //     padding: 8,
// //   },

// //   banner: {
// //     width: "100%",
// //     height: 200,
// //     resizeMode: "cover",
// //   },

// //   section: {
// //     padding: 15,
// //   },

// //   sectionHeader: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     marginBottom: 15,
// //   },

// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     color: "#3e3e3e",
// //   },

// //   viewAll: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },

// //   viewAllText: {
// //     color: "#ff3f6c",
// //     marginRight: 5,
// //     fontWeight: "500",
// //   },

// //   emptyText: {
// //     textAlign: "center",
// //     marginVertical: 20,
// //     fontSize: 16,
// //     color: "#666",
// //   },

// //   /* CATEGORY */
// //   categoryCard: {
// //     width: 100,
// //     marginRight: 12,
// //     alignItems: "center",
// //   },

// //   categoryImage: {
// //     width: 100,
// //     height: 100,
// //     borderRadius: 50,
// //   },

// //   categoryName: {
// //     marginTop: 8,
// //     fontSize: 14,
// //     color: "#3e3e3e",
// //     textAlign: "center",
// //   },

// //   /* DEALS */
// //   dealCard: {
// //     width: 280,
// //     height: 150,
// //     marginRight: 12,
// //     borderRadius: 10,
// //     overflow: "hidden",
// //   },

// //   dealImage: {
// //     width: "100%",
// //     height: "100%",
// //   },

// //   dealOverlay: {
// //     position: "absolute",
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //     backgroundColor: "rgba(0,0,0,0.4)",
// //     padding: 12,
// //   },

// //   dealTitle: {
// //     color: "#fff",
// //     fontSize: 18,
// //     fontWeight: "bold",
// //   },

// //   /* PRODUCTS */
// // productsGrid: {
// //     flexDirection: "row",
// //     flexWrap: "wrap",
// //     marginHorizontal: -8,
// //   },
// //   productCard: {
// //     width: "35%",
// //     marginHorizontal: "1%",
// //     marginBottom: 15,
// //     backgroundColor: "#fff",
// //     borderRadius: 10,
// //     shadowColor: "#000",
// //     shadowOffset: {
// //       width: 0,
// //       height: 2,
// //     },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 3.84,
// //     elevation: 5,
// //   },
// //   productImage: {
// //     width: "100%",
// //     height: 200,
// //     borderTopLeftRadius: 10,
// //     borderTopRightRadius: 10,
// //   },
// //   productInfo: {
// //     padding: 10,
// //   },
// //   brandName: {
// //     fontSize: 14,
// //     color: "#666",
// //     marginBottom: 2,
// //   },
// //   productName: {
// //     fontSize: 16,
// //     marginBottom: 5,
// //   },
// //   priceRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   productPrice: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //     color: "#3e3e3e",
// //     marginRight: 8,
// //   },
// //   discount: {
// //     fontSize: 14,
// //     color: "#ff3f6c",
// //     fontWeight: "500",
// //   },
// //   loader: {
// //     marginTop: 50,
// //   },
// // });



// import {
//   ScrollView,
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
// } from "react-native";
// import { useRouter, useFocusEffect } from "expo-router";
// import { Search, ChevronRight } from "lucide-react-native";
// import React, { useEffect, useState, useCallback } from "react";
// import axios from "axios";

// import { useTheme } from "@/context/ThemeContext";
// import { useAuth } from "@/context/AuthContext";
// import RecentlyViewedCarousal from "../../components/RecentlyViewedCarousal";
// import { getRecentlyViewed, Product } from "@/utils/recentlyViewed";

// const deals = [
//   {
//     id: 1,
//     title: "Under ₹599",
//     image:
//       "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     title: "40-70% Off",
//     image:
//       "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop",
//   },
// ];


// const recommendedProducts = [
//   {
//     _id: "1",
//     name: "Wireless Headphones",
//     brand: "Sony",
//     price: 2999,
//     image: "https://images.unsplash.com/photo-1518441902110-1d3bcd79e9b5?w=500",
//   },
//   {
//     _id: "2",
//     name: "Smart Watch",
//     brand: "Noise",
//     price: 1999,
//     image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500",
//   },
//   {
//     _id: "3",
//     name: "Bluetooth Speaker",
//     brand: "JBL",
//     price: 2499,
//     image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500",
//   },
//   {
//     _id: "4",
//     name: "Gaming Mouse",
//     brand: "Logitech",
//     price: 1499,
//     image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500",
//   },
//   {
//     _id: "5",
//     name: "Laptop Stand",
//     brand: "Portronics",
//     price: 999,
//     image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500",
//   },
//   {
//     _id: "6",
//     name: "Power Bank",
//     brand: "Mi",
//     price: 1299,
//     image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500",
//   },
//   {
//     _id: "7",
//     name: "VR Headset",
//     brand: "Oculus",
//     price: 4999,
//     image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500",
//   },
//   {
//     _id: "8",
//     name: "Mechanical Keyboard",
//     brand: "Redragon",
//     price: 3499,
//     image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500",
//   },
//   {
//     _id: "9",
//     name: "USB Hub",
//     brand: "Anker",
//     price: 899,
//     image: "https://images.unsplash.com/photo-1616627982020-6b8d6c3d4a6c?w=500",
//   },
//   {
//     _id: "10",
//     name: "Phone Tripod",
//     brand: "Digitek",
//     price: 799,
//     image: "https://images.unsplash.com/photo-1519183071298-a2962be90b8e?w=500",
//   },
// ];

// export default function Home() {
//   const router = useRouter();
//   const { user } = useAuth();
//   const { theme, toggleTheme } = useTheme();

//   const [isLoading, setIsLoading] = useState(false);
//   const [products, setProducts] = useState<any[]>([]);
//   const [categories, setCategories] = useState<any[]>([]);
//   const [recent, setRecent] = useState<Product[]>([]);

//   const handleProductPress = (productId: string) => {
//     if (!user) {
//       router.push("/login");
//     } else {
//       router.push(`/product/${productId}`);
//     }
//   };

//   // Load recently viewed
//   useFocusEffect(
//     useCallback(() => {
//       const loadRecent = async () => {
//         const data = await getRecentlyViewed();
//         setRecent(data);
//       };
//       loadRecent();
//     }, [])
//   );

//   // Fetch categories & products
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         const [catRes, productRes] = await Promise.all([
//           axios.get("http://10.13.168.178:5000/category"),
//           axios.get("http://10.13.168.178:5000/product"),
//         ]);

//         setCategories(catRes.data);
//         setProducts(productRes.data);
//       } catch (error) {
//         console.log("Home fetch error:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <ScrollView
//       style={[styles.container, { backgroundColor: theme.background }]}
//     >
//       {/* HEADER */}
//       <View
//         style={[
//           styles.header,
//           { backgroundColor: theme.background },
//         ]}
//       >
//         <Text style={[styles.logo, { color: theme.text }]}>
//           MYNTRA
//         </Text>

//         <View style={{ flexDirection: "row", alignItems: "center" }}>
//           <TouchableOpacity
//             style={styles.searchButton}
//             onPress={toggleTheme}
//           >
//             <Text style={{ color: theme.primary }}>
//               Toggle
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.searchButton}>
//             <Search size={24} color={theme.text} />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* BANNER */}
//       <Image
//         source={{
//           uri: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop",
//         }}
//         style={styles.banner}
//       />

//       {/* RECENTLY VIEWED */}
//       {recent.length > 0 && (
//         <View style={styles.section}>
//           <RecentlyViewedCarousal data={recent} />
//         </View>
//       )}

//       {/* SHOP BY CATEGORY */}
//       <View style={styles.section}>
//         <View style={styles.sectionHeader}>
//           <Text
//             style={[styles.sectionTitle, { color: theme.text }]}
//           >
//             SHOP BY CATEGORY
//           </Text>
//         </View>

//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {isLoading ? (
//             <ActivityIndicator
//               size="large"
//               color={theme.primary}
//             />
//           ) : categories.length === 0 ? (
//             <Text style={{ color: theme.text }}>
//               No categories available
//             </Text>
//           ) : (
//             categories.map((category) => (
//               <TouchableOpacity
//                 key={category._id}
//                 style={styles.categoryCard}
//               >
//                 <Image
//                   source={{ uri: category.image }}
//                   style={styles.categoryImage}
//                 />
//                 <Text
//                   style={[
//                     styles.categoryName,
//                     { color: theme.text },
//                   ]}
//                 >
//                   {category.name}
//                 </Text>
//               </TouchableOpacity>
//             ))
//           )}
//         </ScrollView>
//       </View>

//       {/* TRENDING PRODUCTS */}
//       <View style={styles.section}>
//         <Text
//           style={[styles.sectionTitle, { color: theme.text }]}
//         >
//           TRENDING NOW
//         </Text>

//         {isLoading ? (
//           <ActivityIndicator
//             size="large"
//             color={theme.primary}
//           />
//         ) : (
//           <View style={styles.productsGrid}>
//             {products.map((product) => (
//               <TouchableOpacity
//                 key={product._id}
//                 style={[
//                   styles.productCard,
//                   { backgroundColor: theme.card },
//                 ]}
//                 onPress={() =>
//                   handleProductPress(product._id)
//                 }
//               >
//                 <Image
//                   source={{ uri: product.images?.[0] }}
//                   style={styles.productImage}
//                 />
//                 <View style={styles.productInfo}>
//                   <Text
//                     style={{
//                       color: theme.text,
//                       fontWeight: "bold",
//                     }}
//                   >
//                     {product.brand}
//                   </Text>
//                   <Text style={{ color: theme.text }}>
//                     {product.name}
//                   </Text>
//                   <Text
//                     style={{
//                       color: theme.primary,
//                       fontWeight: "bold",
//                     }}
//                   >
//                     ₹{product.price}
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </View>
//         )}
//       </View>

//         {/* YOU MAY ALSO LIKE */}
// <View style={styles.section}>
//   <Text style={[styles.sectionTitle, { color: theme.text }]}>
//     YOU MAY ALSO LIKE
//   </Text>

//   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//     {recommendedProducts.map((item) => (
//       <TouchableOpacity
//         key={item._id}
//         style={[styles.recCard, { backgroundColor: theme.card }]}
//         onPress={() => handleProductPress(item._id)}
//       >
//         <Image
//           source={{ uri: item.image }}
//           style={styles.recImage}
//         />

//         <View style={{ padding: 8 }}>
//           <Text style={{ color: theme.text, fontWeight: "bold" }}>
//             {item.brand}
//           </Text>

//           <Text style={{ color: theme.text }}>
//             {item.name}
//           </Text>

//           <Text style={{ color: theme.primary, fontWeight: "bold" }}>
//             ₹{item.price}
//           </Text>
//         </View>
//       </TouchableOpacity>
//     ))}
//   </ScrollView>
// </View>

//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1 },

//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 15,
//     paddingTop: 50,
//   },

//   logo: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },

//   searchButton: {
//     padding: 8,
//     marginLeft: 10,
//   },

//   banner: {
//     width: "100%",
//     height: 200,
//     resizeMode: "cover",
//   },

//   section: {
//     padding: 15,
//   },

//   sectionHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 15,
//   },

//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },

//   categoryCard: {
//     width: 100,
//     marginRight: 12,
//     alignItems: "center",
//   },

//   categoryImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },

//   categoryName: {
//     marginTop: 8,
//     fontSize: 14,
//     textAlign: "center",
//   },

//   productsGrid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },

//   productCard: {
//     width: "48%",
//     marginBottom: 15,
//     borderRadius: 10,
//     overflow: "hidden",
//     elevation: 3,
//   },

//   productImage: {
//     width: "100%",
//     height: 180,
//   },

//   productInfo: {
//     padding: 10,
//   },

//   recCard: {
//   width: 140,
//   marginRight: 12,
//   borderRadius: 10,
//   overflow: "hidden",
//   elevation: 3,
// },

// recImage: {
//   width: "100%",
//   height: 120,
// },
// });



import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useRouter, useFocusEffect } from "expo-router";
import { Search, ChevronRight } from "lucide-react-native";
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import RecentlyViewedCarousal from "../../components/RecentlyViewedCarousal";
import { getRecentlyViewed, Product } from "@/utils/recentlyViewed";

const deals = [
  {
    id: 1,
    title: "Under ₹599",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "40-70% Off",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop",
  },
];

const recommendedProducts = [
  {
    _id: "1",
    name: "Wireless Headphones",
    brand: "Sony",
    price: 2999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format",
  },
  {
    _id: "2",
    name: "Smart Watch",
    brand: "Noise",
    price: 1999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format",
  },
  {
    _id: "3",
    name: "Bluetooth Speaker",
    brand: "JBL",
    price: 2499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format",
  },
  {
    _id: "4",
    name: "Mouse",
    brand: "Logitech",
    price: 1499,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format",
  },
  {
    _id: "5",
    name: "Laptop Stand",
    brand: "Portronics",
    price: 999,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&auto=format",
  },
  {
    _id: "6",
    name: "Power Bank",
    brand: "Mi",
    price: 1299,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format",
  },
  {
    _id: "7",
    name: "VR Headset",
    brand: "Oculus",
    price: 4999,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&auto=format",
  },

];

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [recent, setRecent] = useState<Product[]>([]);

  const handleProductPress = (productId: string) => {
    if (!user) {
      router.push("/login");
    } else {
      router.push(`/product/${productId}`);
    }
  };

  // Load recently viewed
  useFocusEffect(
    useCallback(() => {
      const loadRecent = async () => {
        const data = await getRecentlyViewed();
        setRecent(data);
      };
      loadRecent();
    }, [])
  );

  // Fetch categories & products
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [catRes, productRes] = await Promise.all([
          axios.get("http://10.13.168.178:5000/category"),
          axios.get("http://10.13.168.178:5000/product"),
        ]);

        setCategories(catRes.data);
        setProducts(productRes.data);
      } catch (error) {
        console.log("Home fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      {/* HEADER */}
      <View
        style={[
          styles.header,
          { backgroundColor: theme.background },
        ]}
      >
        <Text style={[styles.logo, { color: theme.text }]}>
          MYNTRA
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity style={styles.searchButton} onPress={toggleTheme}>
  <Text style={{ color: theme.text }}>Change Theme</Text>
</TouchableOpacity>

          <TouchableOpacity style={styles.searchButton}>
            <Search size={24} color={theme.text} />
          </TouchableOpacity>
        </View>
      </View>

      {/* BANNER */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop",
        }}
        style={styles.banner}
      />

      {/* RECENTLY VIEWED */}
      {recent.length > 0 && (
        <View style={styles.section}>
          <RecentlyViewedCarousal data={recent} />
        </View>
      )}

      {/* SHOP BY CATEGORY */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text
            style={[styles.sectionTitle, { color: theme.text }]}
          >
            SHOP BY CATEGORY
          </Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {isLoading ? (
            <ActivityIndicator
              size="large"
              color={theme.primary}
            />
          ) : categories.length === 0 ? (
            <Text style={{ color: theme.text }}>
              No categories available
            </Text>
          ) : (
            categories.map((category) => (
              <TouchableOpacity
                key={category._id}
                style={styles.categoryCard}
              >
                <Image
                  source={{ uri: category.image }}
                  style={styles.categoryImage}
                />
                <Text
                  style={[
                    styles.categoryName,
                    { color: theme.text },
                  ]}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      </View>

      {/* TRENDING PRODUCTS */}
      <View style={styles.section}>
        <Text
          style={[styles.sectionTitle, { color: theme.text }]}
        >
          TRENDING NOW
        </Text>

        {isLoading ? (
          <ActivityIndicator
            size="large"
            color={theme.primary}
          />
        ) : (
          <View style={styles.productsGrid}>
            {products.map((product) => (
              <TouchableOpacity
                key={product._id}
                style={[
                  styles.productCard,
                  { backgroundColor: theme.card },
                ]}
                onPress={() =>
                  handleProductPress(product._id)
                }
              >
                <Image
                  source={{ uri: product.images?.[0] }}
                  style={styles.productImage}
                />
                <View style={styles.productInfo}>
                  <Text
                    style={[
                      styles.productBrand,
                      { color: theme.text }
                    ]}
                    numberOfLines={1}
                  >
                    {product.brand}
                  </Text>
                  <Text 
                    style={[
                      styles.productName,
                      { color: theme.text }
                    ]}
                    numberOfLines={2}
                  >
                    {product.name}
                  </Text>
                  <Text
                    style={[
                      styles.productPrice,
                      { color: theme.primary }
                    ]}
                  >
                    ₹{product.price}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* YOU MAY ALSO LIKE */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          YOU MAY ALSO LIKE
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recommendedProducts.map((item) => (
            <TouchableOpacity
              key={item._id}
              style={[styles.recCard, { backgroundColor: theme.card }]}
              onPress={() => handleProductPress(item._id)}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.recImage}
              />

              <View style={styles.recInfo}>
                <Text 
                  style={[
                    styles.recBrand, 
                    { color: theme.text }
                  ]}
                  numberOfLines={1}
                >
                  {item.brand}
                </Text>

                <Text 
                  style={[
                    styles.recName, 
                    { color: theme.text }
                  ]}
                  numberOfLines={2}
                >
                  {item.name}
                </Text>

                <Text style={[
                  styles.recPrice, 
                  { color: theme.primary }
                ]}>
                  ₹{item.price}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    paddingTop: 50,
  },

  logo: {
    fontSize: 24,
    fontWeight: "bold",
  },

  searchButton: {
    padding: 8,
    marginLeft: 10,
  },

  banner: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },

  section: {
    padding: 15,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  categoryCard: {
    width: 100,
    marginRight: 12,
    alignItems: "center",
  },

  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  categoryName: {
    marginTop: 8,
    fontSize: 14,
    textAlign: "center",
  },

  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  productCard: {
    width: "48%",
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },

  productImage: {
    width: "50%",
    height: 150,
  },

  productInfo: {
    padding: 10,
    minHeight: 100,
  },

  productBrand: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
  },

  productName: {
    fontSize: 12,
    marginBottom: 6,
    lineHeight: 16,
  },

  productPrice: {
    fontWeight: "bold",
    fontSize: 14,
  },

  recCard: {
    width: 300,
    marginRight: 12,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },

  recImage: {
    width: "100%",
    height: 350,
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
  },
});