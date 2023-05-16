import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const style = StyleSheet.create({
    conteiner: {
        flexDirection:"row",
        justifyContent: "space-between",
        width: '100%',
        paddingHorizontal: 24,
        marginTop: 27
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.highlight,
        fontSize: 18,
    },
    subtitle:{
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 18,
    }

});