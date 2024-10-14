import { HomeTitle } from '@/components/headers/HomeTitle';
import ThemedApplicationBackground from '@/components/misc/ThemedApplicationBackground';
import { Strings } from '@/constants/Strings';
import { Image, StyleSheet, Platform, Text } from 'react-native';

export default function HomeScreen() {
  const strings = Strings.Pt_Br;
  return (
    <>
    <ThemedApplicationBackground>
      <>
      <HomeTitle {...strings}/>
      </>
    </ThemedApplicationBackground>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
