import { createContext, useEffect, useState, useContext } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LightThemeCustom, DarkThemeCustom } from '../constants/theme';

export const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(LightThemeCustom);

  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem('APP_THEME');
      if (saved) {
        setTheme(saved === 'dark' ? DarkThemeCustom : LightThemeCustom);
      } else {
        setTheme(
          Appearance.getColorScheme() === 'dark'
            ? DarkThemeCustom
            : LightThemeCustom
        );
      }
    })();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === LightThemeCustom ? DarkThemeCustom : LightThemeCustom;
    setTheme(newTheme);
    await AsyncStorage.setItem(
      'APP_THEME',
      newTheme === DarkThemeCustom ? 'dark' : 'light'
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ✅ ADD THIS
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
};
