import { StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

const InputForm = ({ label, value, onChangeText, isSecure, error }) => {
    return (
        <View style={styles.inputContainer}>

            <Text style={styles.titleInput}>
                {label}
            </Text>

            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
                secureTextEntry={isSecure}

            />

            { error ?
                <View>
                    <Text style={styles.error}>
                        {error}
                    </Text>
                </View>
                : null
            }
        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({

    inputContainer: {
        width: "100%"
    },

    input: {
        width: "90%",
        borderWidth: 0,
        borderBottomWidth: 3,
        borderBottomColor: colors.green2,
        padding: 2,
        fontFamily: fonts.JosefinSlabBold,
        fontSize: 14,
        marginHorizontal: "5%",
        marginVertical: 10
    },

    titleInput: {
        width: "90%",
        marginHorizontal: "5%",
        fontSize: 16,
        fontFamily: fonts.JosefinSlabBold
    },

    error: {
        fontSize: 16,
        color: "red",
        fontFamily: fonts.JosefinSlabBold,
        fontStyle: "italic",
        marginLeft: 20
    },
})