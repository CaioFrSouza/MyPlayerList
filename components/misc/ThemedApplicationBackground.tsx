import react from 'react';
import { IThemedApplicationBackground } from '../Interfaces/IThemedApplicationBackground';
import { StyleSheet,  View } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

const ThemedApplicationBackground: React.FC<IThemedApplicationBackground> = (props) => {
    const colorScheme = useColorScheme();
    const backgroundColor = Colors[colorScheme ?? 'light'].background;
    
    return <View style={[styles.container, {backgroundColor}, props.styles]}>
        { props.children }
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 14,
        paddingVertical: 18,
    }
});

export default ThemedApplicationBackground;