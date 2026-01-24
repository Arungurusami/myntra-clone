// // // import { useState } from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   TextInput,
// // //   TouchableOpacity,
// // //   StyleSheet,
// // //   Image,
// // //   ActivityIndicator,
// // //   Alert,
// // // } from "react-native";
// // // import { useRouter } from "expo-router";
// // // import React from "react";
// // // import { Eye, EyeOff } from "lucide-react-native";
// // // import { useAuth } from "@/context/AuthContext";

// // // export default function Login() {
// // //   const { login } = useAuth();
// // //   const router = useRouter();

// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [isLoading, setIsLoading] = useState(false);

// // //   const handleLogin = async () => {
// // //     if (!email || !password) {
// // //       Alert.alert("Error", "Please enter email and password");
// // //       return;
// // //     }

// // //     try {
// // //       setIsLoading(true);
// // //       await login(email, password);

// // //       // ✅ Go to tabs after successful login
// // //       router.replace("/(tabs)");
// // //     } catch (error: any) {
// // //       console.error("Login Error:", error);

// // //       Alert.alert(
// // //         "Login Failed",
// // //         error?.response?.data?.message || "Invalid credentials or server error"
// // //       );
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <Image
// // //         source={{
// // //           uri: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
// // //         }}
// // //         style={styles.backgroundImage}
// // //       />

// // //       <View style={styles.formContainer}>
// // //         <Text style={styles.title}>Welcome to Myntra</Text>
// // //         <Text style={styles.subtitle}>Login to continue shopping</Text>

// // //         <TextInput
// // //           style={styles.input}
// // //           placeholder="Email"
// // //           value={email}
// // //           onChangeText={setEmail}
// // //           autoCapitalize="none"
// // //           keyboardType="email-address"
// // //         />

// // //         <View style={styles.passwordContainer}>
// // //           <TextInput
// // //             style={styles.passwordInput}
// // //             placeholder="Password"
// // //             value={password}
// // //             onChangeText={setPassword}
// // //             secureTextEntry={!showPassword}
// // //           />

// // //           <TouchableOpacity
// // //             style={styles.eyeIcon}
// // //             onPress={() => setShowPassword(!showPassword)}
// // //           >
// // //             {showPassword ? (
// // //               <EyeOff size={20} color="#666" />
// // //             ) : (
// // //               <Eye size={20} color="#666" />
// // //             )}
// // //           </TouchableOpacity>
// // //         </View>

// // //         <TouchableOpacity
// // //           style={styles.button}
// // //           onPress={handleLogin}
// // //           disabled={isLoading}
// // //         >
// // //           {isLoading ? (
// // //             <ActivityIndicator color="#fff" />
// // //           ) : (
// // //             <Text style={styles.buttonText}>LOGIN</Text>
// // //           )}
// // //         </TouchableOpacity>

// // //         {/* ✅ FIXED ROUTE */}
// // //         <TouchableOpacity
// // //           style={styles.signupLink}
// // //           onPress={() => router.push("/(auth)/signup")}
// // //         >
// // //           <Text style={styles.signupText}>
// // //             Don't have an account? Sign Up
// // //           </Text>
// // //         </TouchableOpacity>
// // //       </View>
// // //     </View>
// // //   );
// // // }


// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: "#fff",
// // //   },
// // //   backgroundImage: {
// // //     width: "100%",
// // //     height: "50%",
// // //     position: "absolute",
// // //     top: 0,
// // //   },
// // //   formContainer: {
// // //     flex: 1,
// // //     justifyContent: "center",
// // //     padding: 20,
// // //     backgroundColor: "rgba(255, 255, 255, 0.9)",
// // //     marginTop: "60%",
// // //     borderTopLeftRadius: 30,
// // //     borderTopRightRadius: 30,
// // //   },
// // //   title: {
// // //     fontSize: 28,
// // //     fontWeight: "bold",
// // //     marginBottom: 10,
// // //     color: "#3e3e3e",
// // //   },
// // //   subtitle: {
// // //     fontSize: 16,
// // //     color: "#666",
// // //     marginBottom: 30,
// // //   },
// // //   input: {
// // //     backgroundColor: "#f5f5f5",
// // //     padding: 15,
// // //     borderRadius: 10,
// // //     marginBottom: 15,
// // //     fontSize: 16,
// // //   },
// // //   passwordContainer: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     backgroundColor: "#f5f5f5",
// // //     borderRadius: 10,
// // //     marginBottom: 15,
// // //   },
// // //   passwordInput: {
// // //     flex: 1,
// // //     padding: 15,
// // //     fontSize: 16,
// // //   },
// // //   eyeIcon: {
// // //     padding: 15,
// // //   },
// // //   button: {
// // //     backgroundColor: "#ff3f6c",
// // //     padding: 15,
// // //     borderRadius: 10,
// // //     alignItems: "center",
// // //     marginTop: 10,
// // //   },
// // //   buttonText: {
// // //     color: "#fff",
// // //     fontSize: 16,
// // //     fontWeight: "bold",
// // //   },
// // //   signupLink: {
// // //     marginTop: 20,
// // //     alignItems: "center",
// // //   },
// // //   signupText: {
// // //     color: "#ff3f6c",
// // //     fontSize: 16,
// // //   },
// // // });


// // import { useState } from "react";
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   StyleSheet,
// //   Image,
// //   ActivityIndicator,
// //   Alert,
// //   KeyboardAvoidingView,
// //   Platform,
// //   ScrollView,
// // } from "react-native";
// // import { useRouter } from "expo-router";
// // import React from "react";
// // import { Eye, EyeOff } from "lucide-react-native";
// // import { useAuth } from "@/context/AuthContext";

// // export default function Login() {
// //   const { login } = useAuth();
// //   const router = useRouter();

// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);

// //   const handleLogin = async () => {
// //     // Basic validation
// //     if (!email.trim()) {
// //       Alert.alert("Error", "Please enter email");
// //       return;
// //     }
    
// //     if (!password) {
// //       Alert.alert("Error", "Please enter password");
// //       return;
// //     }

// //     if (!/\S+@\S+\.\S+/.test(email)) {
// //       Alert.alert("Error", "Please enter a valid email address");
// //       return;
// //     }

// //     try {
// //       setIsLoading(true);
// //       await login(email, password);
      
// //       // Show success message
// //       Alert.alert("Success", "Logged in successfully!");
      
// //       // Navigate to tabs after successful login
// //       router.replace("/(tabs)");
// //     } catch (error: any) {
// //       console.error("Login Error:", error);
      
// //       // Better error messages
// //       const errorMessage = error.message || "Invalid credentials. Please try again.";
// //       Alert.alert("Login Failed", errorMessage);
      
// //       // Clear password on error
// //       setPassword("");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleSignup = () => {
// //     router.push("/(auth)/signup");
// //   };

// //   const handleForgotPassword = () => {
// //     Alert.alert("Forgot Password", "Please contact support to reset your password.");
// //   };

// //   return (
// //     <KeyboardAvoidingView 
// //       style={styles.container}
// //       behavior={Platform.OS === "ios" ? "padding" : "height"}
// //     >
// //       <ScrollView 
// //         contentContainerStyle={styles.scrollContent}
// //         showsVerticalScrollIndicator={false}
// //       >
// //         <Image
// //           source={{
// //             uri: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
// //           }}
// //           style={styles.backgroundImage}
// //         />

// //         <View style={styles.formContainer}>
// //           <Text style={styles.title}>Welcome to Myntra</Text>
// //           <Text style={styles.subtitle}>Login to continue shopping</Text>

// //           <View style={styles.inputGroup}>
// //             <TextInput
// //               style={styles.input}
// //               placeholder="Email"
// //               placeholderTextColor="#999"
// //               value={email}
// //               onChangeText={setEmail}
// //               autoCapitalize="none"
// //               keyboardType="email-address"
// //               editable={!isLoading}
// //             />
// //           </View>

// //           <View style={styles.inputGroup}>
// //             <View style={styles.passwordContainer}>
// //               <TextInput
// //                 style={styles.passwordInput}
// //                 placeholder="Password"
// //                 placeholderTextColor="#999"
// //                 value={password}
// //                 onChangeText={setPassword}
// //                 secureTextEntry={!showPassword}
// //                 editable={!isLoading}
// //               />

// //               <TouchableOpacity
// //                 style={styles.eyeIcon}
// //                 onPress={() => setShowPassword(!showPassword)}
// //                 disabled={isLoading}
// //               >
// //                 {showPassword ? (
// //                   <EyeOff size={20} color="#666" />
// //                 ) : (
// //                   <Eye size={20} color="#666" />
// //                 )}
// //               </TouchableOpacity>
// //             </View>
// //           </View>

// //           <TouchableOpacity
// //             style={[styles.button, isLoading && styles.buttonDisabled]}
// //             onPress={handleLogin}
// //             disabled={isLoading}
// //           >
// //             {isLoading ? (
// //               <ActivityIndicator color="#fff" />
// //             ) : (
// //               <Text style={styles.buttonText}>LOGIN</Text>
// //             )}
// //           </TouchableOpacity>

// //           <TouchableOpacity
// //             style={styles.forgotPassword}
// //             onPress={handleForgotPassword}
// //             disabled={isLoading}
// //           >
// //             <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
// //           </TouchableOpacity>

// //           <TouchableOpacity
// //             style={styles.signupLink}
// //             onPress={handleSignup}
// //             disabled={isLoading}
// //           >
// //             <Text style={styles.signupText}>
// //               Don't have an account? <Text style={styles.signupHighlight}>Sign Up</Text>
// //             </Text>
// //           </TouchableOpacity>
// //         </View>
// //       </ScrollView>
// //     </KeyboardAvoidingView>
// //   );
// // }



//Correct
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   scrollContent: {
//     flexGrow: 1,
//   },
//   backgroundImage: {
//     width: "100%",
//     height: 300,
//     position: "absolute",
//     top: 0,
//   },
//   formContainer: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "rgba(255, 255, 255, 0.95)",
//     marginTop: 200,
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     minHeight: 400,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#3e3e3e",
//     textAlign: "center",
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#666",
//     marginBottom: 30,
//     textAlign: "center",
//   },
//   inputGroup: {
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: "#f5f5f5",
//     padding: 15,
//     borderRadius: 10,
//     fontSize: 16,
//     color: "#3e3e3e",
//   },
//   passwordContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//     borderRadius: 10,
//   },
//   passwordInput: {
//     flex: 1,
//     padding: 15,
//     fontSize: 16,
//     color: "#3e3e3e",
//   },
//   eyeIcon: {
//     padding: 15,
//   },
//   button: {
//     backgroundColor: "#ff3f6c",
//     padding: 16,
//     borderRadius: 10,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   buttonDisabled: {
//     backgroundColor: "#ff8ba7",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   forgotPassword: {
//     marginTop: 15,
//     alignItems: "center",
//   },
//   forgotPasswordText: {
//     color: "#666",
//     fontSize: 14,
//   },
//   signupLink: {
//     marginTop: 20,
//     alignItems: "center",
//   },
//   signupText: {
//     color: "#666",
//     fontSize: 16,
//   },
//   signupHighlight: {
//     color: "#ff3f6c",
//     fontWeight: "bold",
//   },
// });



// import { useState } from "react";
// import { Alert } from "react-native";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   ActivityIndicator,
// } from "react-native";
// import { useRouter } from "expo-router";
// import React from "react";
// import { Eye, EyeOff } from "lucide-react-native";
// import { useAuth } from "@/context/AuthContext";

// export default function Login() {
//   const { login } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [isloading, setisloading] = useState(false);

//   const handleLogin = async () => {
//   try {
//     setisloading(true);
//     await login(email, password);
//     router.replace("/(tabs)");
//   } catch (error: any) {
//     console.error("Login error:", error);
//     // Show error to user (you can add an Alert or Toast here)
//     Alert.alert("Login Failed", error.message || "Please check your credentials and try again.");
//   } finally {
//     setisloading(false);
//   }
// };



//   return (
//     <View style={styles.container}>
//       <Image
//         source={{
//           uri: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
//         }}
//         style={styles.backgroundImage}
//       />
//       <View style={styles.formContainer}>
//         <Text style={styles.title}>Welcome to Myntra</Text>
//         <Text style={styles.subtitle}>Login to continue shopping</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           autoCapitalize="none"
//           keyboardType="email-address"
//         />
//         <View style={styles.passwordContainer}>
//           <TextInput
//             style={styles.passwordInput}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry={!showPassword}
//           />

//           <TouchableOpacity
//             style={styles.eyeIcon}
//             onPress={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? (
//               <EyeOff size={20} color="#666" />
//             ) : (
//               <Eye size={20} color="#666" />
//             )}
//           </TouchableOpacity>
//         </View>

//               <TouchableOpacity
//         style={[styles.button, isloading && styles.buttonDisabled]}
//         onPress={handleLogin}
//         disabled={isloading}
//       >
//         {isloading ? (
//           <ActivityIndicator color="#fff" />
//         ) : (
//           <Text style={styles.buttonText}>LOGIN</Text>
//         )}
//       </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.signupLink}
//           onPress={() => router.push("/signup")}
//         >
//           <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
//Correct





import { useState, useEffect } from "react";
import { Alert, Platform } from "react-native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { useRouter } from "expo-router";
import { Eye, EyeOff } from "lucide-react-native";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const { login, isAuthenticated, isLoading: authLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // FIXED: Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      console.log("✅ Already authenticated, redirecting to tabs...");
      router.replace("/(tabs)");
    }
  }, [isAuthenticated]);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password");
      return;
    }
    
    setError(null);
    setIsLoggingIn(true);
    
    try {
      console.log("🔄 Starting login process...");
      
      // Attempt login
      await login(email, password);
      
      console.log("✅ Login successful! Will auto-redirect...");
      
      // FIXED: Don't navigate here, let useEffect handle it
      // The auth state change will trigger the redirect
      
    } catch (error: any) {
      console.error("❌ Login failed:", error.message);
      
      let errorMessage = error.message || "Login failed";
      
      // Show platform-specific alert
      if (Platform.OS === 'web') {
        // For web, show in the UI
        setError(errorMessage);
      } else {
        Alert.alert("Login Failed", errorMessage);
      }
      
    } finally {
      setIsLoggingIn(false);
    }
  };

  // FIXED: Test function to check navigation
  const testNavigation = () => {
    console.log("🧪 Testing navigation to tabs...");
    router.replace("/(tabs)");
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
          }}
          style={styles.backgroundImage}
        />
        <View style={styles.overlay} />
        
        <View style={styles.formContainer}>
          <Text style={styles.title}>Welcome to Myntra</Text>
          <Text style={styles.subtitle}>Login to continue shopping</Text>
          
          
          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setError(null);
              }}
              autoCapitalize="none"
              keyboardType="email-address"
              editable={!isLoggingIn && !authLoading}
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Enter your password"
                placeholderTextColor="#999"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setError(null);
                }}
                secureTextEntry={!showPassword}
                editable={!isLoggingIn && !authLoading}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
                disabled={isLoggingIn || authLoading}
              >
                {showPassword ? (
                  <EyeOff size={20} color="#666" />
                ) : (
                  <Eye size={20} color="#666" />
                )}
              </TouchableOpacity>
            </View>
          </View>
          
          <TouchableOpacity
            style={[styles.button, (isLoggingIn || authLoading) && styles.buttonDisabled]}
            onPress={handleLogin}
            disabled={isLoggingIn || authLoading}
            activeOpacity={0.8}
          >
            {isLoggingIn ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>
                {authLoading ? "CHECKING..." : "LOGIN"}
              </Text>
            )}
          </TouchableOpacity>
          
          
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.signupLink}
            onPress={() => router.push("/signup")}
            disabled={isLoggingIn || authLoading}
          >
            <Text style={styles.signupText}>
              Don't have an account?{' '}
              <Text style={styles.signupHighlight}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    flexGrow: 1,
  },
  backgroundImage: {
    width: "100%",
    height: 300,
    position: "absolute",
    top: 0,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 300,
    backgroundColor: "rgba(255, 63, 108, 0.1)",
  },
  formContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    marginTop: 180,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    minHeight: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#ff3f6c",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  debugInfo: {
    backgroundColor: "#f8f9fa",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e9ecef",
  },
  debugText: {
    fontSize: 12,
    color: "#495057",
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    marginBottom: 4,
  },
  errorContainer: {
    backgroundColor: "#fee",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: "#ff3f6c",
  },
  errorText: {
    color: "#d32f2f",
    fontSize: 14,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    marginLeft: 4,
  },
  input: {
    backgroundColor: "#f8f9fa",
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#dee2e6",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#dee2e6",
  },
  passwordInput: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    color: "#333",
  },
  eyeIcon: {
    padding: 16,
  },
  button: {
    backgroundColor: "#ff3f6c",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#ff3f6c",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonDisabled: {
    backgroundColor: "#ff8ba7",
    opacity: 0.7,
  },
  testButton: {
    backgroundColor: "#4CAF50",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPassword: {
    marginTop: 16,
    alignItems: "center",
  },
  forgotPasswordText: {
    color: "#666",
    fontSize: 14,
  },
  signupLink: {
    marginTop: 24,
    alignItems: "center",
    padding: 12,
  },
  signupText: {
    color: "#666",
    fontSize: 16,
  },
  signupHighlight: {
    color: "#ff3f6c",
    fontWeight: "bold",
  },
});












// import { useState } from "react";
// import { Alert } from "react-native";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   ActivityIndicator,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
// } from "react-native";
// import { useRouter } from "expo-router";
// import React from "react";
// import { Eye, EyeOff } from "lucide-react-native";
// import { useAuth } from "@/context/AuthContext";

// export default function Login() {
//   const { login, isLoading } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoggingIn, setIsLoggingIn] = useState(false);

//   const handleLogin = async () => {
//     if (!email.trim() || !password.trim()) {
//       Alert.alert("Error", "Please enter both email and password");
//       return;
//     }

//     try {
//       setIsLoggingIn(true);
//       await login(email, password);
//       // Navigation is handled in AuthContext after successful login
//     } catch (error: any) {
//       console.error("Login error:", error);
//       Alert.alert("Login Failed", error.message || "Please check your credentials and try again.");
//     } finally {
//       setIsLoggingIn(false);
//     }
//   };

//   return (
//     <KeyboardAvoidingView 
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={styles.container}
//     >
//       <ScrollView 
//         contentContainerStyle={styles.scrollContent}
//         keyboardShouldPersistTaps="handled"
//       >
//         <Image
//           source={{
//             uri: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
//           }}
//           style={styles.backgroundImage}
//         />
//         <View style={styles.formContainer}>
//           <Text style={styles.title}>Welcome to Myntra</Text>
//           <Text style={styles.subtitle}>Login to continue shopping</Text>
          
//           <View style={styles.inputGroup}>
//             <TextInput
//               style={styles.input}
//               placeholder="Email"
//               value={email}
//               onChangeText={setEmail}
//               autoCapitalize="none"
//               keyboardType="email-address"
//               autoComplete="email"
//               importantForAutofill="yes"
//               editable={!isLoggingIn && !isLoading}
//             />
//           </View>

//           <View style={styles.inputGroup}>
//             <View style={styles.passwordContainer}>
//               <TextInput
//                 style={styles.passwordInput}
//                 placeholder="Password"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry={!showPassword}
//                 autoComplete="password"
//                 importantForAutofill="yes"
//                 editable={!isLoggingIn && !isLoading}
//               />
//               <TouchableOpacity
//                 style={styles.eyeIcon}
//                 onPress={() => setShowPassword(!showPassword)}
//                 disabled={isLoggingIn || isLoading}
//               >
//                 {showPassword ? (
//                   <EyeOff size={20} color="#666" />
//                 ) : (
//                   <Eye size={20} color="#666" />
//                 )}
//               </TouchableOpacity>
//             </View>
//           </View>

//           <TouchableOpacity
//             style={[styles.button, (isLoggingIn || isLoading) && styles.buttonDisabled]}
//             onPress={handleLogin}
//             disabled={isLoggingIn || isLoading}
//           >
//             {isLoggingIn ? (
//               <ActivityIndicator color="#fff" />
//             ) : (
//               <Text style={styles.buttonText}>LOGIN</Text>
//             )}
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.forgotPassword}
//             onPress={() => Alert.alert("Info", "Forgot password feature coming soon!")}
//           >
//             <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.signupLink}
//             onPress={() => router.push("/signup")}
//             disabled={isLoggingIn || isLoading}
//           >
//             <Text style={styles.signupText}>
//               Don't have an account?{" "}
//               <Text style={styles.signupHighlight}>Sign Up</Text>
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   scrollContent: {
//     flexGrow: 1,
//   },
//   backgroundImage: {
//     width: "100%",
//     height: 300,
//     position: "absolute",
//     top: 0,
//   },
//   formContainer: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "rgba(255, 255, 255, 0.95)",
//     marginTop: 200,
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     minHeight: 500,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#3e3e3e",
//     textAlign: "center",
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#666",
//     marginBottom: 30,
//     textAlign: "center",
//   },
//   inputGroup: {
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: "#f5f5f5",
//     padding: 15,
//     borderRadius: 10,
//     fontSize: 16,
//     color: "#3e3e3e",
//   },
//   passwordContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//     borderRadius: 10,
//   },
//   passwordInput: {
//     flex: 1,
//     padding: 15,
//     fontSize: 16,
//     color: "#3e3e3e",
//   },
//   eyeIcon: {
//     padding: 15,
//   },
//   button: {
//     backgroundColor: "#ff3f6c",
//     padding: 16,
//     borderRadius: 10,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   buttonDisabled: {
//     backgroundColor: "#ff8ba7",
//     opacity: 0.7,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   forgotPassword: {
//     marginTop: 15,
//     alignItems: "center",
//   },
//   forgotPasswordText: {
//     color: "#666",
//     fontSize: 14,
//   },
//   signupLink: {
//     marginTop: 20,
//     alignItems: "center",
//   },
//   signupText: {
//     color: "#666",
//     fontSize: 16,
//   },
//   signupHighlight: {
//     color: "#ff3f6c",
//     fontWeight: "bold",
//   },
// });




// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //   },
// //   backgroundImage: {
// //     width: "100%",
// //     height: "50%",
// //     position: "absolute",
// //     top: 0,
// //   },
// //   formContainer: {
// //     flex: 1,
// //     justifyContent: "center",
// //     padding: 20,
// //     backgroundColor: "rgba(255, 255, 255, 0.9)",
// //     marginTop: "60%",
// //     borderTopLeftRadius: 30,
// //     borderTopRightRadius: 30,
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: "bold",
// //     marginBottom: 10,
// //     color: "#3e3e3e",
// //   },
// //   subtitle: {
// //     fontSize: 16,
// //     color: "#666",
// //     marginBottom: 30,
// //   },
// //   input: {
// //     backgroundColor: "#f5f5f5",
// //     padding: 15,
// //     borderRadius: 10,
// //     marginBottom: 15,
// //     fontSize: 16,
// //   },
// //   passwordContainer: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     backgroundColor: "#f5f5f5",
// //     borderRadius: 10,
// //     marginBottom: 15,
// //   },
// //   passwordInput: {
// //     flex: 1,
// //     padding: 15,
// //     fontSize: 16,
// //   },
// //   eyeIcon: {
// //     padding: 15,
// //   },
// //   button: {
// //     backgroundColor: "#ff3f6c",
// //     padding: 15,
// //     borderRadius: 10,
// //     alignItems: "center",
// //     marginTop: 10,
// //   },
// //   buttonText: {
// //     color: "#fff",
// //     fontSize: 16,
// //     fontWeight: "bold",
// //   },
// //   signupLink: {
// //     marginTop: 20,
// //     alignItems: "center",
// //   },
// //   signupText: {
// //     color: "#ff3f6c",
// //     fontSize: 16,
// //   },
// // });






