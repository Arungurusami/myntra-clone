// // // import { useState } from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   TextInput,
// // //   TouchableOpacity,
// // //   StyleSheet,
// // //   Image,
// // //   ScrollView,
// // //   ActivityIndicator,
// // // } from "react-native";
// // // import { useRouter } from "expo-router";
// // // import { Eye, EyeOff } from "lucide-react-native";
// // // import React from "react";
// // // import { useAuth } from "@/context/AuthContext";

// // // export default function Signup() {
// // //   const { Signup } = useAuth();
// // //   const router = useRouter();
// // //   const [isloading, setisloading] = useState(false);
// // //   const [formData, setFormData] = useState({
// // //     fullName: "",
// // //     email: "",
// // //     password: "",
// // //   });
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [errors, setErrors] = useState({
// // //     fullName: "",
// // //     email: "",
// // //     password: "",
// // //   });

// // //   const validateForm = () => {
// // //     let isValid = true;
// // //     const newErrors = {
// // //       fullName: "",
// // //       email: "",
// // //       password: "",
// // //     };

// // //     if (!formData.fullName.trim()) {
// // //       newErrors.fullName = "Full name is required";
// // //       isValid = false;
// // //     }

// // //     if (!formData.email.trim()) {
// // //       newErrors.email = "Email is required";
// // //       isValid = false;
// // //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// // //       newErrors.email = "Please enter a valid email";
// // //       isValid = false;
// // //     }

// // //     if (!formData.password) {
// // //       newErrors.password = "Password is required";
// // //       isValid = false;
// // //     } else if (formData.password.length < 8) {
// // //       newErrors.password = "Password must be at least 8 characters";
// // //       isValid = false;
// // //     }

// // //     setErrors(newErrors);
// // //     return isValid;
// // //   };

// // //   const handleSignup = async () => {
// // //     if (validateForm()) {
// // //       // Here you would typically make an API call to register the user
// // //       try {
// // //         setisloading(true);
// // //         await Signup(formData.fullName, formData.email, formData.password);
// // //         router.replace("/(tabs)");
// // //       } catch (error) {
// // //         console.error(error);
// // //       } finally {
// // //         setisloading(false);
// // //       }
// // //       router.replace("/(tabs)");
// // //     }
// // //   };

// // //   return (
// // //     <ScrollView
// // //       style={styles.container}
// // //       contentContainerStyle={styles.scrollContent}
// // //     >
// // //       <Image
// // //         source={{
// // //           uri: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// // //         }}
// // //         style={styles.backgroundImage}
// // //       />

// // //       <View style={styles.formContainer}>
// // //         <Text style={styles.title}>Create Account</Text>
// // //         <Text style={styles.subtitle}>
// // //           Join Myntra and discover amazing fashion
// // //         </Text>

// // //         <View style={styles.inputGroup}>
// // //           <TextInput
// // //             style={[styles.input, errors.fullName && styles.inputError]}
// // //             placeholder="Full Name"
// // //             value={formData.fullName}
// // //             onChangeText={(text) =>
// // //               setFormData({ ...formData, fullName: text })
// // //             }
// // //           />
// // //           {errors.fullName ? (
// // //             <Text style={styles.errorText}>{errors.fullName}</Text>
// // //           ) : null}
// // //         </View>

// // //         <View style={styles.inputGroup}>
// // //           <TextInput
// // //             style={[styles.input, errors.email && styles.inputError]}
// // //             placeholder="Email"
// // //             value={formData.email}
// // //             onChangeText={(text) => setFormData({ ...formData, email: text })}
// // //             keyboardType="email-address"
// // //             autoCapitalize="none"
// // //           />
// // //           {errors.email ? (
// // //             <Text style={styles.errorText}>{errors.email}</Text>
// // //           ) : null}
// // //         </View>

// // //         <View style={styles.inputGroup}>
// // //           <View
// // //             style={[
// // //               styles.passwordContainer,
// // //               errors.password && styles.inputError,
// // //             ]}
// // //           >
// // //             <TextInput
// // //               style={styles.passwordInput}
// // //               placeholder="Password"
// // //               value={formData.password}
// // //               onChangeText={(text) =>
// // //                 setFormData({ ...formData, password: text })
// // //               }
// // //               secureTextEntry={!showPassword}
// // //             />
// // //             <TouchableOpacity
// // //               style={styles.eyeIcon}
// // //               onPress={() => setShowPassword(!showPassword)}
// // //             >
// // //               {showPassword ? (
// // //                 <EyeOff size={20} color="#666" />
// // //               ) : (
// // //                 <Eye size={20} color="#666" />
// // //               )}
// // //             </TouchableOpacity>
// // //           </View>
// // //           {errors.password ? (
// // //             <Text style={styles.errorText}>{errors.password}</Text>
// // //           ) : null}
// // //         </View>
// // //         <TouchableOpacity
// // //           style={styles.button}
// // //           onPress={handleSignup}
// // //           disabled={isloading}
// // //         >
// // //           {isloading ? (
// // //             <ActivityIndicator color="#fff" />
// // //           ) : (
// // //             <Text style={styles.buttonText}>SIGN UP</Text>
// // //           )}
// // //         </TouchableOpacity>

// // //         <TouchableOpacity
// // //           style={styles.loginLink}
// // //           onPress={() => router.push("/login")}
// // //         >
// // //           <Text style={styles.loginText}>Already have an account? Login</Text>
// // //         </TouchableOpacity>
// // //       </View>
// // //     </ScrollView>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: "#fff",
// // //   },
// // //   scrollContent: {
// // //     flexGrow: 1,
// // //   },
// // //   backgroundImage: {
// // //     width: "100%",
// // //     height: 300,
// // //     position: "absolute",
// // //     top: 0,
// // //   },
// // //   formContainer: {
// // //     flex: 1,
// // //     padding: 20,
// // //     backgroundColor: "rgba(255, 255, 255, 0.9)",
// // //     marginTop: 250,
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
// // //   inputGroup: {
// // //     marginBottom: 15,
// // //   },
// // //   input: {
// // //     backgroundColor: "#f5f5f5",
// // //     padding: 15,
// // //     borderRadius: 10,
// // //     fontSize: 16,
// // //   },
// // //   inputError: {
// // //     borderWidth: 1,
// // //     borderColor: "#ff3f6c",
// // //   },
// // //   errorText: {
// // //     color: "#ff3f6c",
// // //     fontSize: 12,
// // //     marginTop: 5,
// // //     marginLeft: 5,
// // //   },
// // //   passwordContainer: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     backgroundColor: "#f5f5f5",
// // //     borderRadius: 10,
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
// // //     marginTop: 20,
// // //   },
// // //   buttonText: {
// // //     color: "#fff",
// // //     fontSize: 16,
// // //     fontWeight: "bold",
// // //   },
// // //   loginLink: {
// // //     marginTop: 20,
// // //     alignItems: "center",
// // //   },
// // //   loginText: {
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
// //   ScrollView,
// //   ActivityIndicator,
// //   Alert,
// //   KeyboardAvoidingView,
// //   Platform,
// // } from "react-native";
// // import { useRouter } from "expo-router";
// // import { Eye, EyeOff } from "lucide-react-native";
// // import React from "react";
// // import { useAuth } from "@/context/AuthContext";

// // export default function Signup() {
// //   const { Signup } = useAuth();
// //   const router = useRouter();
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     password: "",
// //   });
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [errors, setErrors] = useState({
// //     fullName: "",
// //     email: "",
// //     password: "",
// //   });

// //   const validateForm = () => {
// //     let isValid = true;
// //     const newErrors = {
// //       fullName: "",
// //       email: "",
// //       password: "",
// //     };

// //     if (!formData.fullName.trim()) {
// //       newErrors.fullName = "Full name is required";
// //       isValid = false;
// //     }

// //     if (!formData.email.trim()) {
// //       newErrors.email = "Email is required";
// //       isValid = false;
// //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //       newErrors.email = "Please enter a valid email";
// //       isValid = false;
// //     }

// //     if (!formData.password) {
// //       newErrors.password = "Password is required";
// //       isValid = false;
// //     } else if (formData.password.length < 8) {
// //       newErrors.password = "Password must be at least 8 characters";
// //       isValid = false;
// //     }

// //     setErrors(newErrors);
// //     return isValid;
// //   };

// //   const handleSignup = async () => {
// //     if (!validateForm()) {
// //       return;
// //     }

// //     try {
// //       setIsLoading(true);
// //       await Signup(formData.fullName, formData.email, formData.password);
      
// //       Alert.alert("Success", "Account created successfully!");
      
// //       // Navigate to tabs after successful signup
// //       router.replace("/(tabs)");
// //     } catch (error: any) {
// //       console.error("Signup error:", error);
      
// //       const errorMessage = error.message || "Failed to create account. Please try again.";
// //       Alert.alert("Signup Failed", errorMessage);
      
// //       // Clear password on error
// //       setFormData({ ...formData, password: "" });
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleLogin = () => {
// //     router.push("/(auth)/login");
// //   };

// //   const updateField = (field: string, value: string) => {
// //     setFormData({ ...formData, [field]: value });
// //     // Clear error when user starts typing
// //     if (errors[field as keyof typeof errors]) {
// //       setErrors({ ...errors, [field]: "" });
// //     }
// //   };

// //   return (
// //     <KeyboardAvoidingView 
// //       style={styles.container}
// //       behavior={Platform.OS === "ios" ? "padding" : "height"}
// //     >
// //       <ScrollView
// //         style={styles.scrollView}
// //         contentContainerStyle={styles.scrollContent}
// //         showsVerticalScrollIndicator={false}
// //       >
// //         <Image
// //           source={{
// //             uri: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// //           }}
// //           style={styles.backgroundImage}
// //         />

// //         <View style={styles.formContainer}>
// //           <Text style={styles.title}>Create Account</Text>
// //           <Text style={styles.subtitle}>
// //             Join Myntra and discover amazing fashion
// //           </Text>

// //           <View style={styles.inputGroup}>
// //             <TextInput
// //               style={[styles.input, errors.fullName && styles.inputError]}
// //               placeholder="Full Name"
// //               placeholderTextColor="#999"
// //               value={formData.fullName}
// //               onChangeText={(text) => updateField("fullName", text)}
// //               editable={!isLoading}
// //             />
// //             {errors.fullName ? (
// //               <Text style={styles.errorText}>{errors.fullName}</Text>
// //             ) : null}
// //           </View>

// //           <View style={styles.inputGroup}>
// //             <TextInput
// //               style={[styles.input, errors.email && styles.inputError]}
// //               placeholder="Email"
// //               placeholderTextColor="#999"
// //               value={formData.email}
// //               onChangeText={(text) => updateField("email", text)}
// //               keyboardType="email-address"
// //               autoCapitalize="none"
// //               editable={!isLoading}
// //             />
// //             {errors.email ? (
// //               <Text style={styles.errorText}>{errors.email}</Text>
// //             ) : null}
// //           </View>

// //           <View style={styles.inputGroup}>
// //             <View
// //               style={[
// //                 styles.passwordContainer,
// //                 errors.password && styles.inputError,
// //               ]}
// //             >
// //               <TextInput
// //                 style={styles.passwordInput}
// //                 placeholder="Password"
// //                 placeholderTextColor="#999"
// //                 value={formData.password}
// //                 onChangeText={(text) => updateField("password", text)}
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
// //             {errors.password ? (
// //               <Text style={styles.errorText}>{errors.password}</Text>
// //             ) : null}
// //           </View>

// //           <TouchableOpacity
// //             style={[styles.button, isLoading && styles.buttonDisabled]}
// //             onPress={handleSignup}
// //             disabled={isLoading}
// //           >
// //             {isLoading ? (
// //               <ActivityIndicator color="#fff" />
// //             ) : (
// //               <Text style={styles.buttonText}>SIGN UP</Text>
// //             )}
// //           </TouchableOpacity>

// //           <TouchableOpacity
// //             style={styles.loginLink}
// //             onPress={handleLogin}
// //             disabled={isLoading}
// //           >
// //             <Text style={styles.loginText}>
// //               Already have an account? <Text>Login</Text>
// //             </Text>
// //           </TouchableOpacity>
// //         </View>
// //       </ScrollView>
// //     </KeyboardAvoidingView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //   },
// //   scrollView: {
// //     flex: 1,
// //   },
// //   scrollContent: {
// //     flexGrow: 1,
// //   },
// //   backgroundImage: {
// //     width: "100%",
// //     height: 300,
// //     position: "absolute",
// //     top: 0,
// //   },
// //   formContainer: {
// //     flex: 1,
// //     padding: 20,
// //     backgroundColor: "rgba(255, 255, 255, 0.95)",
// //     marginTop: 250,
// //     borderTopLeftRadius: 30,
// //     borderTopRightRadius: 30,
// //     minHeight: 500,
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: "bold",
// //     marginBottom: 10,
// //     color: "#3e3e3e",
// //     textAlign: "center",
// //   },
// //   subtitle: {
// //     fontSize: 16,
// //     color: "#666",
// //     marginBottom: 30,
// //     textAlign: "center",
// //   },
// //   inputGroup: {
// //     marginBottom: 15,
// //   },
// //   input: {
// //     backgroundColor: "#f5f5f5",
// //     padding: 15,
// //     borderRadius: 10,
// //     fontSize: 16,
// //     color: "#3e3e3e",
// //   },
// //   inputError: {
// //     borderWidth: 1,
// //     borderColor: "#ff3f6c",
// //   },
// //   errorText: {
// //     color: "#ff3f6c",
// //     fontSize: 12,
// //     marginTop: 5,
// //     marginLeft: 5,
// //   },
// //   passwordContainer: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     backgroundColor: "#f5f5f5",
// //     borderRadius: 10,
// //   },
// //   passwordInput: {
// //     flex: 1,
// //     padding: 15,
// //     fontSize: 16,
// //     color: "#3e3e3e",
// //   },
// //   eyeIcon: {
// //     padding: 15,
// //   },
// //   button: {
// //     backgroundColor: "#ff3f6c",
// //     padding: 15,
// //     borderRadius: 10,
// //     alignItems: "center",
// //     marginTop: 20,
// //   },
// //   buttonDisabled: {
// //     backgroundColor: "#ff8ba7",
// //   },
// //   buttonText: {
// //     color: "#fff",
// //     fontSize: 16,
// //     fontWeight: "bold",
// //   },
// //   loginLink: {
// //     marginTop: 20,
// //     alignItems: "center",
// //   },
// //   loginText: {
// //     color: "#ff3f6c",
// //     fontSize: 16,
// //   },
// // });



// // import { useState } from "react";
// // import { Alert } from "react-native";
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   StyleSheet,
// //   Image,
// //   ScrollView,
// //   ActivityIndicator,
// // } from "react-native";
// // import { useRouter } from "expo-router";
// // import { Eye, EyeOff } from "lucide-react-native";
// // import React from "react";
// // import { useAuth } from "@/context/AuthContext";

// // export default function Signup() {
// //   const { Signup } = useAuth();
// //   const router = useRouter();
// //   const [isloading, setisloading] = useState(false);
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     password: "",
// //   });
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [errors, setErrors] = useState({
// //     fullName: "",
// //     email: "",
// //     password: "",
// //   });

// //   const validateForm = () => {
// //     let isValid = true;
// //     const newErrors = {
// //       fullName: "",
// //       email: "",
// //       password: "",
// //     };

// //     if (!formData.fullName.trim()) {
// //       newErrors.fullName = "Full name is required";
// //       isValid = false;
// //     }

// //     if (!formData.email.trim()) {
// //       newErrors.email = "Email is required";
// //       isValid = false;
// //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //       newErrors.email = "Please enter a valid email";
// //       isValid = false;
// //     }

// //     if (!formData.password) {
// //       newErrors.password = "Password is required";
// //       isValid = false;
// //     } else if (formData.password.length < 8) {
// //       newErrors.password = "Password must be at least 8 characters";
// //       isValid = false;
// //     }

// //     setErrors(newErrors);
// //     return isValid;
// //   };

// // const handleSignup = async () => {
// //   if (validateForm()) {
// //     try {
// //       setisloading(true);
// //       await Signup(formData.fullName, formData.email, formData.password);
// //       router.replace("/(tabs)");
// //     } catch (error: any) {
// //       console.error("Signup error:", error);
// //       Alert.alert("Signup Failed", error.message || "Please try again.");
// //     } finally {
// //       setisloading(false);
// //     }
// //     // REMOVE THIS DUPLICATE LINE:
// //     // router.replace("/(tabs)");
// //   }
// // };
// //   return (
// //     <ScrollView
// //       style={styles.container}
// //       contentContainerStyle={styles.scrollContent}
// //     >
// //       <Image
// //         source={{
// //           uri: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// //         }}
// //         style={styles.backgroundImage}
// //       />

// //       <View style={styles.formContainer}>
// //         <Text style={styles.title}>Create Account</Text>
// //         <Text style={styles.subtitle}>
// //           Join Myntra and discover amazing fashion
// //         </Text>

// //         <View style={styles.inputGroup}>
// //           <TextInput
// //             style={[styles.input, errors.fullName && styles.inputError]}
// //             placeholder="Full Name"
// //             value={formData.fullName}
// //             onChangeText={(text) =>
// //               setFormData({ ...formData, fullName: text })
// //             }
// //           />
// //           {errors.fullName ? (
// //             <Text style={styles.errorText}>{errors.fullName}</Text>
// //           ) : null}
// //         </View>

// //         <View style={styles.inputGroup}>
// //           <TextInput
// //             style={[styles.input, errors.email && styles.inputError]}
// //             placeholder="Email"
// //             value={formData.email}
// //             onChangeText={(text) => setFormData({ ...formData, email: text })}
// //             keyboardType="email-address"
// //             autoCapitalize="none"
// //           />
// //           {errors.email ? (
// //             <Text style={styles.errorText}>{errors.email}</Text>
// //           ) : null}
// //         </View>

// //         <View style={styles.inputGroup}>
// //           <View
// //             style={[
// //               styles.passwordContainer,
// //               errors.password && styles.inputError,
// //             ]}
// //           >
// //             <TextInput
// //               style={styles.passwordInput}
// //               placeholder="Password"
// //               value={formData.password}
// //               onChangeText={(text) =>
// //                 setFormData({ ...formData, password: text })
// //               }
// //               secureTextEntry={!showPassword}
// //             />
// //             <TouchableOpacity
// //               style={styles.eyeIcon}
// //               onPress={() => setShowPassword(!showPassword)}
// //             >
// //               {showPassword ? (
// //                 <EyeOff size={20} color="#666" />
// //               ) : (
// //                 <Eye size={20} color="#666" />
// //               )}
// //             </TouchableOpacity>
// //           </View>
// //           {errors.password ? (
// //             <Text style={styles.errorText}>{errors.password}</Text>
// //           ) : null}
// //         </View>
// //         <TouchableOpacity
// //           style={styles.button}
// //           onPress={handleSignup}
// //           disabled={isloading}
// //         >
// //           {isloading ? (
// //             <ActivityIndicator color="#fff" />
// //           ) : (
// //             <Text style={styles.buttonText}>SIGN UP</Text>
// //           )}
// //         </TouchableOpacity>

// //         <TouchableOpacity
// //           style={styles.loginLink}
// //           onPress={() => router.push("/login")}
// //         >
// //           <Text style={styles.loginText}>Already have an account? Login</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //   },
// //   scrollContent: {
// //     flexGrow: 1,
// //   },
// //   backgroundImage: {
// //     width: "100%",
// //     height: 300,
// //     position: "absolute",
// //     top: 0,
// //   },
// //   formContainer: {
// //     flex: 1,
// //     padding: 20,
// //     backgroundColor: "rgba(255, 255, 255, 0.9)",
// //     marginTop: 250,
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
// //   inputGroup: {
// //     marginBottom: 15,
// //   },
// //   input: {
// //     backgroundColor: "#f5f5f5",
// //     padding: 15,
// //     borderRadius: 10,
// //     fontSize: 16,
// //   },
// //   inputError: {
// //     borderWidth: 1,
// //     borderColor: "#ff3f6c",
// //   },
// //   errorText: {
// //     color: "#ff3f6c",
// //     fontSize: 12,
// //     marginTop: 5,
// //     marginLeft: 5,
// //   },
// //   passwordContainer: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     backgroundColor: "#f5f5f5",
// //     borderRadius: 10,
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
// //     marginTop: 20,
// //   },
// //   buttonText: {
// //     color: "#fff",
// //     fontSize: 16,
// //     fontWeight: "bold",
// //   },
// //   loginLink: {
// //     marginTop: 20,
// //     alignItems: "center",
// //   },
// //   loginText: {
// //     color: "#ff3f6c",
// //     fontSize: 16,
// //   },
// // });

















// import { useState } from "react";
// import { Alert } from "react-native";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   ScrollView,
//   ActivityIndicator,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import { useRouter } from "expo-router";
// import { Eye, EyeOff } from "lucide-react-native";
// import React from "react";
// import { useAuth } from "@/context/AuthContext";

// export default function Signup() {
//   const { Signup, isLoading } = useAuth();
//   const router = useRouter();
//   const [isSigningUp, setIsSigningUp] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = {
//       fullName: "",
//       email: "",
//       password: "",
//     };

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Full name is required";
//       isValid = false;
//     } else if (formData.fullName.trim().length < 2) {
//       newErrors.fullName = "Full name must be at least 2 characters";
//       isValid = false;
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email";
//       isValid = false;
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//       isValid = false;
//     } else if (formData.password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters";
//       isValid = false;
//     } else if (!/(?=.*[A-Za-z])(?=.*\d)/.test(formData.password)) {
//       newErrors.password = "Password must contain letters and numbers";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSignup = async () => {
//     if (validateForm()) {
//       try {
//         setIsSigningUp(true);
//         await Signup(formData.fullName, formData.email, formData.password);
//         // Navigation is handled in AuthContext after successful signup
//       } catch (error: any) {
//         console.error("Signup error:", error);
//         Alert.alert("Signup Failed", error.message || "Please try again.");
//       } finally {
//         setIsSigningUp(false);
//       }
//     }
//   };

//   return (
//     <KeyboardAvoidingView 
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={styles.container}
//     >
//       <ScrollView
//         style={styles.container}
//         contentContainerStyle={styles.scrollContent}
//         keyboardShouldPersistTaps="handled"
//       >
//         <Image
//           source={{
//             uri: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//           }}
//           style={styles.backgroundImage}
//         />

//         <View style={styles.formContainer}>
//           <Text style={styles.title}>Create Account</Text>
//           <Text style={styles.subtitle}>
//             Join Myntra and discover amazing fashion
//           </Text>

//           <View style={styles.inputGroup}>
//             <TextInput
//               style={[styles.input, errors.fullName && styles.inputError]}
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChangeText={(text) => {
//                 setFormData({ ...formData, fullName: text });
//                 if (errors.fullName) setErrors({...errors, fullName: ""});
//               }}
//               editable={!isSigningUp && !isLoading}
//             />
//             {errors.fullName ? (
//               <Text style={styles.errorText}>{errors.fullName}</Text>
//             ) : null}
//           </View>

//           <View style={styles.inputGroup}>
//             <TextInput
//               style={[styles.input, errors.email && styles.inputError]}
//               placeholder="Email"
//               value={formData.email}
//               onChangeText={(text) => {
//                 setFormData({ ...formData, email: text });
//                 if (errors.email) setErrors({...errors, email: ""});
//               }}
//               keyboardType="email-address"
//               autoCapitalize="none"
//               autoComplete="email"
//               editable={!isSigningUp && !isLoading}
//             />
//             {errors.email ? (
//               <Text style={styles.errorText}>{errors.email}</Text>
//             ) : null}
//           </View>

//           <View style={styles.inputGroup}>
//             <View
//               style={[
//                 styles.passwordContainer,
//                 errors.password && styles.inputError,
//               ]}
//             >
//               <TextInput
//                 style={styles.passwordInput}
//                 placeholder="Password"
//                 value={formData.password}
//                 onChangeText={(text) => {
//                   setFormData({ ...formData, password: text });
//                   if (errors.password) setErrors({...errors, password: ""});
//                 }}
//                 secureTextEntry={!showPassword}
//                 autoComplete="password"
//                 editable={!isSigningUp && !isLoading}
//               />
//               <TouchableOpacity
//                 style={styles.eyeIcon}
//                 onPress={() => setShowPassword(!showPassword)}
//                 disabled={isSigningUp || isLoading}
//               >
//                 {showPassword ? (
//                   <EyeOff size={20} color="#666" />
//                 ) : (
//                   <Eye size={20} color="#666" />
//                 )}
//               </TouchableOpacity>
//             </View>
//             {errors.password ? (
//               <Text style={styles.errorText}>{errors.password}</Text>
//             ) : null}
//             <Text style={styles.passwordHint}>
//               Must be at least 8 characters with letters and numbers
//             </Text>
//           </View>
          
//           <TouchableOpacity
//             style={[styles.button, (isSigningUp || isLoading) && styles.buttonDisabled]}
//             onPress={handleSignup}
//             disabled={isSigningUp || isLoading}
//           >
//             {isSigningUp ? (
//               <ActivityIndicator color="#fff" />
//             ) : (
//               <Text style={styles.buttonText}>SIGN UP</Text>
//             )}
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.loginLink}
//             onPress={() => router.push("/login")}
//             disabled={isSigningUp || isLoading}
//           >
//             <Text style={styles.loginText}>
//               Already have an account?{" "}
//               <Text style={styles.loginHighlight}>Login</Text>
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
//     marginTop: 250,
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
//     marginBottom: 15,
//   },
//   input: {
//     backgroundColor: "#f5f5f5",
//     padding: 15,
//     borderRadius: 10,
//     fontSize: 16,
//   },
//   inputError: {
//     borderWidth: 1,
//     borderColor: "#ff3f6c",
//   },
//   errorText: {
//     color: "#ff3f6c",
//     fontSize: 12,
//     marginTop: 5,
//     marginLeft: 5,
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
//   },
//   passwordHint: {
//     color: "#666",
//     fontSize: 12,
//     marginTop: 5,
//     marginLeft: 5,
//   },
//   eyeIcon: {
//     padding: 15,
//   },
//   button: {
//     backgroundColor: "#ff3f6c",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//     marginTop: 20,
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
//   loginLink: {
//     marginTop: 20,
//     alignItems: "center",
//   },
//   loginText: {
//     color: "#666",
//     fontSize: 16,
//   },
//   loginHighlight: {
//     color: "#ff3f6c",
//     fontWeight: "bold",
//   },
// });


import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { Eye, EyeOff } from "lucide-react-native";
import React from "react";
import { useAuth } from "@/context/AuthContext";

export default function Signup() {
  const { Signup } = useAuth();
  const router = useRouter();
  const [isloading, setisloading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: "",
      email: "",
      password: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignup = async () => {
    if (validateForm()) {
      // Here you would typically make an API call to register the user
      try {
        setisloading(true);
        await Signup(formData.fullName, formData.email, formData.password);
        router.replace("/(tabs)");
      } catch (error) {
        console.error(error);
      } finally {
        setisloading(false);
      }
      router.replace("/(tabs)");
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <Image
        source={{
          uri: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }}
        style={styles.backgroundImage}
      />

      <View style={styles.formContainer}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Join Myntra and discover amazing fashion
        </Text>

        <View style={styles.inputGroup}>
          <TextInput
            style={[styles.input, errors.fullName && styles.inputError]}
            placeholder="Full Name"
            value={formData.fullName}
            onChangeText={(text) =>
              setFormData({ ...formData, fullName: text })
            }
          />
          {errors.fullName ? (
            <Text style={styles.errorText}>{errors.fullName}</Text>
          ) : null}
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="Email"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}
        </View>

        <View style={styles.inputGroup}>
          <View
            style={[
              styles.passwordContainer,
              errors.password && styles.inputError,
            ]}
          >
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              value={formData.password}
              onChangeText={(text) =>
                setFormData({ ...formData, password: text })
              }
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={20} color="#666" />
              ) : (
                <Eye size={20} color="#666" />
              )}
            </TouchableOpacity>
          </View>
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignup}
          disabled={isloading}
        >
          {isloading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>SIGN UP</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginLink}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.loginText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    marginTop: 250,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#3e3e3e",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },
  inputError: {
    borderWidth: 1,
    borderColor: "#ff3f6c",
  },
  errorText: {
    color: "#ff3f6c",
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 15,
  },
  button: {
    backgroundColor: "#ff3f6c",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginLink: {
    marginTop: 20,
    alignItems: "center",
  },
  loginText: {
    color: "#ff3f6c",
    fontSize: 16,
  },
});
