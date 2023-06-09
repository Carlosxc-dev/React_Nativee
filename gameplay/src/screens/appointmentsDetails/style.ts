import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getBottomSpace } from "react-native-iphone-x-helper";


export const styles = StyleSheet.create({
    conteiner: {
        flex:1
    },
    bannerContent:{
        flex:1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom:30
    },
    banner:{
        width: '100%',
        height: 234,
    },
    title:{
        fontSize: 28,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading
    },
    subtitle:{
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
        lineHeight:21
    },
    members:{
        marginLeft:24,
        marginTop:24
    },
    footer:{
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace(),
    }

   
});