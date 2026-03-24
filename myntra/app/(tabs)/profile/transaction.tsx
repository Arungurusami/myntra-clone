// import { useEffect, useState } from "react";
// import { View, Text, FlatList, ActivityIndicator } from "react-native";
// import { useAuth } from "@/context/AuthContext";

// const BASE_URL = "http://10.49.155.178:5000";

// export default function Transactions() {
//   const { user } = useAuth();   // ✅ get logged in user
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!user?._id) return;

//     fetch(`${BASE_URL}/transactions/${user._id}`)
//       .then(res => res.json())
//       .then((result) => {
//         setData(result);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.log("Transaction Fetch Error:", err);
//         setLoading(false);
//       });
//   }, [user]);

//   if (loading) {
//     return (
//       <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
//         <ActivityIndicator size="large" color="#ff3f6c" />
//       </View>
//     );
//   }

//   if (data.length === 0) {
//     return (
//       <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
//         <Text>No Transactions Found</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={data}
//       keyExtractor={(item) => item._id}
//       renderItem={({ item }) => (
//         <View
//           style={{
//             padding: 15,
//             margin: 10,
//             backgroundColor: "#fff",
//             borderRadius: 10,
//             elevation: 3,
//           }}
//         >
//           <Text style={{ fontWeight: "bold" }}>
//             Mode: {item.mode}
//           </Text>

//           <Text>Amount: ₹{item.amount}</Text>

//           <Text>Status: {item.status}</Text>

//           <Text style={{ color: "gray", marginTop: 5 }}>
//             {new Date(item.createdAt).toLocaleString()}
//           </Text>
//         </View>
//       )}
//     />
//   );
// }


import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Transactions() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // ✅ Get user from storage
        const storedUser = await AsyncStorage.getItem("user");

        if (!storedUser) {
          console.log("No user found in storage");
          setLoading(false);
          return;
        }

        const user = JSON.parse(storedUser);
        const userId = user._id; // 🔥 dynamically getting userId

        console.log("Logged in UserId:", userId);

        const response = await fetch(
          `http://10.13.168.178:5000/api/transactions/${userId}`
        );

        const json = await response.json();

        console.log("Transactions:", json);

        setData(json);
      } catch (error) {
        console.log("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (data.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No Transactions Found</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View
          style={{
            padding: 15,
            borderBottomWidth: 1,
            borderColor: "#ddd",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>
            Mode: {item.mode}
          </Text>

          <Text>Amount: ₹{item.amount}</Text>

          <Text>Status: {item.status}</Text>

          <Text>
            Date: {new Date(item.createdAt).toLocaleString()}
          </Text>
        </View>
      )}
    />
  );
}