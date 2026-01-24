// // import { createContext, useContext, useEffect, useState } from "react";
// // import { getUserData, saveUserData, clearUserData } from "@/utils/storage";
// // import React from "react";
// // import axios from "axios";
// // type AuthContextType = {
// //   isAuthenticated: boolean;
// //   user: { _id: string; name: string; email: string } | null;
// //   Signup: (fullName: string, email: string, password: string) => Promise<void>;
// //   login: (email: string, password: string) => Promise<void>;
// //   logout: () => void;
// // };

// // const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [user, setUser] = useState<{
// //     _id: string;
// //     name: string;
// //     email: string;
// //   } | null>(null);

// //   useEffect(() => {
// //     (async () => {
// //       const data = await getUserData();
// //       if (data._id && data.name && data.email) {
// //         setUser({ _id: data._id, name: data.name, email: data.email });
// //         setIsAuthenticated(true);
// //       }
// //     })();
// //   }, []);

// //   const login = async (email: string, password: string) => {
// //     // 👉 Replace with your real API URL
// //     const res = await axios.post("http://localhost:5000/User/login", {
// //       email,
// //       password,
// //     });

// //     const data = await res.data.user;
// //     if (data.fullName) {
// //       await saveUserData(data._id, data.fullName, data.email);
// //       setUser({ _id: data._id, name: data.name, email: data.email });
// //       setIsAuthenticated(true);
// //     } else {
// //       throw new Error(data.message || "Login failed");
// //     }
// //   };
// //   const Signup = async (fullName: string, email: string, password: string) => {
// //     // 👉 Replace with your real API URL
// //     const res = await axios.post("http://localhost:5000/User/signup", {
// //       fullName,
// //       email,
// //       password,
// //     });
// //     const data = await res.data.user;
// //     if (data.fullName) {
// //       await saveUserData(data._id, data.fullName, data.email);
// //       setUser({ _id: data._id, name: data.name, email: data.email });
// //       setIsAuthenticated(true);
// //     } else {
// //       throw new Error(data.message || "Login failed");
// //     }
// //   };
// //   const logout = async () => {
// //     await clearUserData();
// //     setUser(null);
// //     setIsAuthenticated(false);
// //   };

// //   return (
// //     <AuthContext.Provider
// //       value={{ isAuthenticated, user, Signup, login, logout }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext)!;



// import { createContext, useContext, useEffect, useState } from "react";
// import { getUserData, saveUserData, clearUserData } from "@/utils/storage";
// import React from "react";
// import axios from "axios";
// import { Platform } from "react-native";

// type AuthContextType = {
//   isAuthenticated: boolean;
//   user: { _id: string; name: string; email: string } | null;
//   Signup: (fullName: string, email: string, password: string) => Promise<void>;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => void;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // Configure axios base URL
// // IMPORTANT: Change this based on your environment
// const API_BASE_URL = __DEV__
//   ? Platform.select({
//       android: "http://192.168.43.156:5000", // For Android emulator
//       ios: "http://localhost:5000", // For iOS simulator
//       default: "http://localhost:5000", // For web or others
//     })
//   : "https://your-production-api.com"; // For production

// axios.defaults.baseURL = API_BASE_URL;

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState<{
//     _id: string;
//     name: string;
//     email: string;
//   } | null>(null);

//   useEffect(() => {
//     loadUserData();
//   }, []);

//   const loadUserData = async () => {
//     try {
//       const data = await getUserData();
//       if (data._id && data.name && data.email) {
//         setUser({ _id: data._id, name: data.name, email: data.email });
//         setIsAuthenticated(true);
//       }
//     } catch (error) {
//       console.error("Error loading user data:", error);
//     }
//   };

//   const login = async (email: string, password: string) => {
//     try {
//       const res = await axios.post("http://192.168.43.156:5000/User/login", {
//         email,
//         password,
//       });

//       console.log("Login Response:", res.data); // Debug log

//       // Check if response has expected structure
//       if (res.data && res.data.user) {
//         const userData = res.data.user;
//         await saveUserData(userData._id, userData.name || userData.fullName, userData.email);
//         setUser({
//           _id: userData._id,
//           name: userData.name || userData.fullName || "User",
//           email: userData.email,
//         });
//         setIsAuthenticated(true);
//       } else if (res.data && res.data._id) {
//         // If user data is directly in response
//         const userData = res.data;
//         await saveUserData(userData._id, userData.name || userData.fullName, userData.email);
//         setUser({
//           _id: userData._id,
//           name: userData.name || userData.fullName || "User",
//           email: userData.email,
//         });
//         setIsAuthenticated(true);
//       } else {
//         throw new Error(res.data?.message || "Login failed: Invalid response structure");
//       }
//     } catch (error: any) {
//       console.error("Login error:", error);
      
//       // Better error messages
//       if (error.response) {
//         // Server responded with error status
//         throw new Error(error.response.data?.message || `Login failed: ${error.response.status}`);
//       } else if (error.request) {
//         // Request was made but no response
//         throw new Error("Network error: Cannot reach server. Check your connection and server URL.");
//       } else {
//         throw new Error(error.message || "Login failed");
//       }
//     }
//   };

//   const Signup = async (fullName: string, email: string, password: string) => {
//     try {
//       const res = await axios.post("/User/signup", {
//         fullName,
//         email,
//         password,
//       });

//       console.log("Signup Response:", res.data); // Debug log

//       if (res.data && res.data.user) {
//         const userData = res.data.user;
//         await saveUserData(userData._id, userData.fullName, userData.email);
//         setUser({
//           _id: userData._id,
//           name: userData.fullName,
//           email: userData.email,
//         });
//         setIsAuthenticated(true);
//       } else if (res.data && res.data._id) {
//         // If user data is directly in response
//         const userData = res.data;
//         await saveUserData(userData._id, userData.fullName, userData.email);
//         setUser({
//           _id: userData._id,
//           name: userData.fullName,
//           email: userData.email,
//         });
//         setIsAuthenticated(true);
//       } else {
//         throw new Error(res.data?.message || "Signup failed: Invalid response structure");
//       }
//     } catch (error: any) {
//       console.error("Signup error:", error);
      
//       if (error.response) {
//         throw new Error(error.response.data?.message || `Signup failed: ${error.response.status}`);
//       } else if (error.request) {
//         throw new Error("Network error: Cannot reach server. Check your connection and server URL.");
//       } else {
//         throw new Error(error.message || "Signup failed");
//       }
//     }
//   };

//   const logout = async () => {
//     try {
//       await clearUserData();
//       setUser(null);
//       setIsAuthenticated(false);
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{ isAuthenticated, user, Signup, login, logout }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };




// import { createContext, useContext, useEffect, useState } from "react";
// import { getUserData, saveUserData, clearUserData } from "@/utils/storage";
// import React from "react";
// import axios from "axios";
// import { Platform } from "react-native";

// // Types
// type UserType = {
//   _id: string;
//   name: string;
//   email: string;
// };

// type AuthContextType = {
//   isAuthenticated: boolean;
//   user: UserType | null;
//   isLoading: boolean;
//   Signup: (fullName: string, email: string, password: string) => Promise<void>;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => Promise<void>;
// };

// // Create context
// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // Configure axios
// const getBaseURL = () => {
//   if (__DEV__) {
//     switch (Platform.OS) {
//       case 'android':
//         // For Android emulator: use 10.0.2.2 for localhost
//         // For physical device: use your computer's IP address
//         return "http://192.168.43.156:5000";
//       case 'ios':
//         return "http://localhost:5000";
//       default:
//         return "http://localhost:5000";
//     }
//   }
//   return "https://your-production-api.com";
// };

// // Create axios instance with better configuration
// const api = axios.create({
//   baseURL: getBaseURL(),
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Add request interceptor for debugging
// api.interceptors.request.use(
//   (config) => {
//     console.log(`Making ${config.method?.toUpperCase()} request to: ${config.baseURL}${config.url}`);
//     return config;
//   },
//   (error) => {
//     console.error('Request error:', error);
//     return Promise.reject(error);
//   }
// );

// // Add response interceptor for debugging
// api.interceptors.response.use(
//   (response) => {
//     console.log(`Response from ${response.config.url}:`, response.data);
//     return response;
//   },
//   (error) => {
//     console.error('Response error:', error.message);
//     return Promise.reject(error);
//   }
// );

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState<UserType | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     loadUserData();
//   }, []);

//   const loadUserData = async () => {
//     try {
//       setIsLoading(true);
//       const data = await getUserData();
//       console.log("Loaded user data from storage:", data);
      
//       if (data && data._id && data.name && data.email) {
//         setUser({ 
//           _id: data._id, 
//           name: data.name, 
//           email: data.email 
//         });
//         setIsAuthenticated(true);
//       }
//     } catch (error) {
//       console.error("Error loading user data:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const login = async (email: string, password: string) => {
//     try {
//       setIsLoading(true);
//       console.log("Attempting login with email:", email);
      
//       const res = await api.post("/User/login", {
//         email,
//         password,
//       });

//       console.log("Login response data:", res.data);

//       let userData;
      
//       // Handle different response structures
//       if (res.data.user) {
//         userData = res.data.user;
//       } else if (res.data._id) {
//         userData = res.data;
//       } else {
//         throw new Error("Invalid response structure: No user data found");
//       }

//       // Extract name - check both name and fullName fields
//       const userName = userData.name || userData.fullName;
      
//       if (!userData._id || !userName || !userData.email) {
//         throw new Error("Incomplete user data received");
//       }

//       // Save to storage
//       await saveUserData(userData._id, userName, userData.email);
      
//       // Update state
//       setUser({
//         _id: userData._id,
//         name: userName,
//         email: userData.email,
//       });
//       setIsAuthenticated(true);
      
//       console.log("Login successful for user:", userName);
      
//     } catch (error: any) {
//       console.error("Login error details:", {
//         message: error.message,
//         response: error.response?.data,
//         status: error.response?.status,
//       });
      
//       let errorMessage = "Login failed";
      
//       if (error.response) {
//         // Server responded with error
//         errorMessage = error.response.data?.message || 
//                       error.response.data?.error ||
//                       `Server error: ${error.response.status}`;
//       } else if (error.request) {
//         // Request was made but no response
//         errorMessage = "Network error: Cannot connect to server. Please check:\n" +
//                       "1. Your internet connection\n" +
//                       "2. The server is running\n" +
//                       "3. The server URL is correct";
//       } else {
//         errorMessage = error.message || "Login failed";
//       }
      
//       throw new Error(errorMessage);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const Signup = async (fullName: string, email: string, password: string) => {
//     try {
//       setIsLoading(true);
//       console.log("Attempting signup with:", { fullName, email });
      
//       const res = await api.post("/User/signup", {
//         fullName,
//         email,
//         password,
//       });

//       console.log("Signup response data:", res.data);

//       let userData;
      
//       // Handle different response structures
//       if (res.data.user) {
//         userData = res.data.user;
//       } else if (res.data._id) {
//         userData = res.data;
//       } else {
//         throw new Error("Invalid response structure: No user data found");
//       }

//       // Validate required fields
//       if (!userData._id || !fullName || !userData.email) {
//         throw new Error("Incomplete user data received from server");
//       }

//       // Save to storage
//       await saveUserData(userData._id, fullName, userData.email);
      
//       // Update state
//       setUser({
//         _id: userData._id,
//         name: fullName,
//         email: userData.email,
//       });
//       setIsAuthenticated(true);
      
//       console.log("Signup successful for user:", fullName);
      
//     } catch (error: any) {
//       console.error("Signup error details:", {
//         message: error.message,
//         response: error.response?.data,
//         status: error.response?.status,
//       });
      
//       let errorMessage = "Signup failed";
      
//       if (error.response) {
//         errorMessage = error.response.data?.message || 
//                       error.response.data?.error ||
//                       `Server error: ${error.response.status}`;
//       } else if (error.request) {
//         errorMessage = "Network error: Cannot connect to server. Please check:\n" +
//                       "1. Your internet connection\n" +
//                       "2. The server is running\n" +
//                       "3. The server URL is correct";
//       } else {
//         errorMessage = error.message || "Signup failed";
//       }
      
//       throw new Error(errorMessage);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const logout = async () => {
//     try {
//       setIsLoading(true);
//       await clearUserData();
//       setUser(null);
//       setIsAuthenticated(false);
//       console.log("Logout successful");
//     } catch (error) {
//       console.error("Logout error:", error);
//       throw error;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const value: AuthContextType = {
//     isAuthenticated,
//     user,
//     isLoading,
//     Signup, // Fixed: lowercase 's' to match the type
//     login,
//     logout,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// // Optional: Export a hook for checking auth state
// export const useAuthState = () => {
//   const { isAuthenticated, user, isLoading } = useAuth();
//   return { isAuthenticated, user, isLoading };
// };





import { createContext, useContext, useEffect, useState } from "react";
import { getUserData, saveUserData, clearUserData } from "@/utils/storage";
import React from "react";
import axios from "axios";
import { Platform } from "react-native";

// Types
type UserType = {
  _id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: UserType | null;
  isLoading: boolean;
  Signup: (fullName: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// FIXED: Smart API URL detection for all platforms
const getBaseURL = () => {
  // For web browser (Expo web)
  if (Platform.OS === 'web') {
    return "http://localhost:5000"; // Web needs localhost
  }
  
  // For development
  if (__DEV__) {
    switch (Platform.OS) {
      case 'android':
        // For Android - use your computer's IP
        return "http://192.168.43.156:5000";
      case 'ios':
        return "http://localhost:5000";
      default:
        return "http://localhost:5000";
    }
  }
  
  return "https://your-production-api.com";
};

// FIXED: Create axios instance with proper CORS handling
const api = axios.create({
  baseURL: getBaseURL(),
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// FIXED: Better logging
api.interceptors.request.use(
  (config) => {
    console.log(`🌐 ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
    console.log('📤 Data:', config.data);
    return config;
  },
  (error) => {
    console.error('❌ Request error:', error.message);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(`✅ Response from ${response.config.url}:`, response.data);
    return response;
  },
  (error) => {
    console.error('❌ Response error:', {
      message: error.message,
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data
    });
    return Promise.reject(error);
  }
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      setIsLoading(true);
      const data = await getUserData();
      console.log("📱 Loaded user data:", data);
      
      if (data && data._id && data.name && data.email) {
        setUser({ 
          _id: data._id, 
          name: data.name, 
          email: data.email 
        });
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("❌ Error loading user data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      console.log("🔐 Attempting login for:", email);
      console.log("🌍 API Base URL:", api.defaults.baseURL);
      
      const res = await api.post("/User/login", {
        email: email.trim(),
        password: password.trim(),
      });

      console.log("📦 Full login response:", res);

      let userData;
      
      // FIXED: Handle different response structures better
      if (res.data && res.data.user) {
        userData = res.data.user;
      } else if (res.data && res.data._id) {
        userData = res.data;
      } else {
        throw new Error("Server returned invalid data structure");
      }

      // FIXED: Extract name properly
      const userName = userData.name || userData.fullName || "User";
      
      if (!userData._id) {
        throw new Error("User ID missing from response");
      }
      
      if (!userData.email) {
        throw new Error("Email missing from response");
      }

      // Save user data
      console.log("💾 Saving user data:", { 
        _id: userData._id, 
        name: userName, 
        email: userData.email 
      });
      
      await saveUserData(userData._id, userName, userData.email);
      
      // Update state
      setUser({
        _id: userData._id,
        name: userName,
        email: userData.email,
      });
      setIsAuthenticated(true);
      
      console.log("🎉 Login successful!");
      
      return userData;
    } catch (error: any) {
      console.error("❌ Login error details:", {
        message: error.message,
        code: error.code,
        response: error.response?.data,
        status: error.response?.status,
      });
      
      let errorMessage = "Login failed";
      
      if (error.response) {
        if (error.response.status === 401) {
          errorMessage = "Invalid email or password";
        } else if (error.response.status === 404) {
          errorMessage = "User not found";
        } else if (error.response.status === 400) {
          errorMessage = "Bad request. Please check your input.";
        } else {
          errorMessage = error.response.data?.message || 
                        error.response.data?.error ||
                        `Server error (${error.response.status})`;
        }
      } else if (error.code === 'ECONNABORTED') {
        errorMessage = "Request timeout. Server is taking too long to respond.";
      } else if (error.message.includes('Network Error')) {
        errorMessage = `Cannot connect to server at ${api.defaults.baseURL}
        
Possible solutions:
1. Make sure your backend server is running
2. For web: Use 'localhost:5000'
3. For mobile: Check IP address '192.168.43.156:5000'
4. Check if ports are not blocked`;
      } else {
        errorMessage = error.message || "Login failed";
      }
      
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const Signup = async (fullName: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      console.log("👤 Attempting signup for:", email);
      
      const res = await api.post("/User/signup", {
        fullName: fullName.trim(),
        email: email.trim(),
        password: password.trim(),
      });

      console.log("📦 Signup response:", res.data);

      let userData;
      
      if (res.data && res.data.user) {
        userData = res.data.user;
      } else if (res.data && res.data._id) {
        userData = res.data;
      } else {
        throw new Error("Server returned invalid data structure");
      }

      if (!userData._id || !userData.email) {
        throw new Error("Incomplete user data received");
      }

      await saveUserData(userData._id, fullName, userData.email);
      
      setUser({
        _id: userData._id,
        name: fullName,
        email: userData.email,
      });
      setIsAuthenticated(true);
      
      console.log("🎉 Signup successful!");
      
    } catch (error: any) {
      console.error("❌ Signup error:", error);
      
      let errorMessage = "Signup failed";
      
      if (error.response) {
        if (error.response.status === 400) {
          errorMessage = error.response.data?.message || "User already exists";
        } else {
          errorMessage = error.response.data?.message || 
                        `Server error (${error.response.status})`;
        }
      } else if (error.message.includes('Network Error')) {
        errorMessage = `Cannot connect to server. Please check:
        1. Server is running
        2. Correct URL: ${api.defaults.baseURL}
        3. Network connection`;
      }
      
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      await clearUserData();
      setUser(null);
      setIsAuthenticated(false);
      console.log("👋 Logout successful");
    } catch (error) {
      console.error("❌ Logout error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextType = {
    isAuthenticated,
    user,
    isLoading,
    Signup, // Changed from Signup to signup (lowercase)
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};