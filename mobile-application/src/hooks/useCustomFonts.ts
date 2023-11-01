import { useEffect, useState } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


export type FontsResult = {
  fontsLoaded: boolean;
};

SplashScreen.preventAutoHideAsync();


/**
 * Hook used to load custom fonts
 * 
 * @returns FontsResult
 */
const useCustomFonts = (): FontsResult => {
  const [hidden, setHidden] = useState(false);
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Light': require('../../assets/fonts/Montserrat-Light.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
        .then(() => setHidden(true));
    }
  }, [fontsLoaded]);

  
  return {
    fontsLoaded: fontsLoaded && hidden,
  };
};

export default useCustomFonts;
