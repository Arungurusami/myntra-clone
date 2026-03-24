// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   ActivityIndicator,
// } from "react-native";
// import axios from "axios";
// import { useAuth } from "@/context/AuthContext";

// export default function CartScreen() {
//   const { user } = useAuth();

//   const [cartItems, setCartItems] = useState<any[]>([]);
//   const [savedItems, setSavedItems] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const BASE_URL = "http://10.13.168.178:5000";

//   // ✅ Fetch Cart Data
//   const fetchCart = async () => {
//     if (!user?._id) return; // 🔥 FIX (avoid null error)

//     try {
//       const res = await axios.get(`${BASE_URL}/cart/${user._id}`);
//       setCartItems(res.data.cartItems || []);
//       setSavedItems(res.data.savedItems || []);
//     } catch (err) {
//       console.log("Error fetching cart:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, [user]); // 🔥 FIX (dependency)

//   // ✅ Save for Later
//   const saveForLater = async (productId: string) => {
//     if (!user?._id) return;

//     try {
//       await axios.put(
//         `${BASE_URL}/cart/save/${user._id}/${productId}`
//       );
//       fetchCart();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // ✅ Move Back to Cart
//   const moveToCart = async (productId: string) => {
//     if (!user?._id) return;

//     try {
//       await axios.put(
//         `${BASE_URL}/cart/move-to-cart/${user._id}/${productId}`
//       );
//       fetchCart();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // ✅ Total Price
//   const total = cartItems.reduce(
//     (sum, item) => sum + item.productId.price * item.quantity,
//     0
//   );

//   if (loading) {
//     return (
//       <View style={styles.loader}>
//         <ActivityIndicator size="large" color="blue" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {/* 🛒 CART */}
//       <Text style={styles.heading}>🛒 Cart Items</Text>

//       {cartItems.length === 0 ? (
//         <Text style={styles.empty}>Your cart is empty</Text>
//       ) : (
//         <FlatList
//           data={cartItems}
//           keyExtractor={(item) => item.productId._id}
//           renderItem={({ item }) => (
//             <View style={styles.card}>
//               <Image
//                 source={{ uri: item.productId.images?.[0] }}
//                 style={styles.image}
//               />

//               <View style={{ flex: 1 }}>
//                 <Text style={styles.name}>
//                   {item.productId.name}
//                 </Text>
//                 <Text style={styles.price}>
//                   ₹{item.productId.price}
//                 </Text>

//                 <TouchableOpacity
//                   style={styles.saveBtn}
//                   onPress={() =>
//                     saveForLater(item.productId._id)
//                   }
//                 >
//                   <Text style={styles.btnText}>
//                     Save for Later
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
//         />
//       )}

//       {/* 💰 TOTAL */}
//       <Text style={styles.total}>Total: ₹{total}</Text>

//       {/* 💾 SAVED */}
//       <Text style={styles.heading}>💾 Saved for Later</Text>

//       {savedItems.length === 0 ? (
//         <Text style={styles.empty}>No saved items</Text>
//       ) : (
//         <FlatList
//           data={savedItems}
//           keyExtractor={(item) => item.productId._id}
//           renderItem={({ item }) => (
//             <View style={styles.card}>
//               <Image
//                 source={{ uri: item.productId.images?.[0] }}
//                 style={styles.image}
//               />

//               <View style={{ flex: 1 }}>
//                 <Text style={styles.name}>
//                   {item.productId.name}
//                 </Text>
//                 <Text style={styles.price}>
//                   ₹{item.productId.price}
//                 </Text>

//                 <TouchableOpacity
//                   style={styles.moveBtn}
//                   onPress={() =>
//                     moveToCart(item.productId._id)
//                   }
//                 >
//                   <Text style={styles.btnText}>
//                     Move to Cart
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
//         />
//       )}
//     </View>
//   );
// }

// // 🎨 Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: "#fff",
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginVertical: 10,
//   },
//   empty: {
//     textAlign: "center",
//     color: "gray",
//     marginVertical: 10,
//   },
//   card: {
//     flexDirection: "row",
//     marginBottom: 15,
//     backgroundColor: "#f9f9f9",
//     padding: 10,
//     borderRadius: 10,
//   },
//   image: {
//     width: 90,
//     height: 90,
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   price: {
//     fontSize: 14,
//     color: "green",
//     marginVertical: 5,
//   },
//   saveBtn: {
//     backgroundColor: "#ff9800",
//     padding: 8,
//     borderRadius: 6,
//     marginTop: 5,
//   },
//   moveBtn: {
//     backgroundColor: "#2196f3",
//     padding: 8,
//     borderRadius: 6,
//     marginTop: 5,
//   },
//   btnText: {
//     color: "#fff",
//     textAlign: "center",
//   },
//   total: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginVertical: 15,
//     textAlign: "right",
//   },
//   loader: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });



import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";

export default function CartScreen() {
  const { user } = useAuth();

  const [cartItems, setCartItems] = useState<any[]>([]);
  const [savedItems, setSavedItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "http://10.13.168.178:5000";

  const fetchCart = async () => {
    if (!user?._id) return;

    try {
      const res = await axios.get(`${BASE_URL}/cart/${user._id}`);
      setCartItems(res.data.cartItems || []);
      setSavedItems(res.data.savedItems || []);
    } catch (err) {
      console.log("Error fetching cart:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [user]);

  const saveForLater = async (productId: string) => {
    if (!user?._id) return;

    try {
      await axios.put(`${BASE_URL}/cart/save/${user._id}/${productId}`);
      fetchCart();
    } catch (err) {
      console.log(err);
    }
  };

  const moveToCart = async (productId: string) => {
    if (!user?._id) return;

    try {
      await axios.put(`${BASE_URL}/cart/move-to-cart/${user._id}/${productId}`);
      fetchCart();
    } catch (err) {
      console.log(err);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#ff3f6c" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* CART LIST */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId._id}
        ListHeaderComponent={
          <>
            <Text style={styles.heading}>🛒 My Cart</Text>

            {cartItems.length === 0 && (
              <Text style={styles.empty}>Your cart is empty</Text>
            )}
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.productId.images?.[0] }}
              style={styles.image}
            />

            <View style={styles.info}>
              <Text numberOfLines={1} style={styles.name}>
                {item.productId.name}
              </Text>

              <Text style={styles.price}>
                ₹{item.productId.price}
              </Text>

              <TouchableOpacity
                style={styles.saveBtn}
                onPress={() => saveForLater(item.productId._id)}
              >
                <Text style={styles.btnText}>Save for Later</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListFooterComponent={
          <>
            {/* SAVED ITEMS */}
            <Text style={styles.heading}>💾 Saved for Later</Text>

            {savedItems.length === 0 ? (
              <Text style={styles.empty}>No saved items</Text>
            ) : (
              savedItems.map((item) => (
                <View key={item.productId._id} style={styles.card}>
                  <Image
                    source={{ uri: item.productId.images?.[0] }}
                    style={styles.image}
                  />

                  <View style={styles.info}>
                    <Text numberOfLines={1} style={styles.name}>
                      {item.productId.name}
                    </Text>

                    <Text style={styles.price}>
                      ₹{item.productId.price}
                    </Text>

                    <TouchableOpacity
                      style={styles.moveBtn}
                      onPress={() => moveToCart(item.productId._id)}
                    >
                      <Text style={styles.btnText}>Move to Cart</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
          </>
        }
      />

      {/* 🔥 STICKY FOOTER */}
      {cartItems.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.total}>Total: ₹{total}</Text>

          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutText}>PLACE ORDER</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    paddingHorizontal: 15,
  },

  empty: {
    textAlign: "center",
    color: "gray",
    marginVertical: 10,
  },

  /* 🔥 CARD */
  card: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginBottom: 12,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
    elevation: 2,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },

  info: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "space-between",
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
  },

  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ff3f6c",
  },

  saveBtn: {
    backgroundColor: "#ff9800",
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
  },

  moveBtn: {
    backgroundColor: "#2196f3",
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontSize: 12,
  },

  /* 🔥 FOOTER */
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
  },

  total: {
    fontSize: 18,
    fontWeight: "bold",
  },

  checkoutBtn: {
    backgroundColor: "#ff3f6c",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  checkoutText: {
    color: "#fff",
    fontWeight: "bold",
  },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});