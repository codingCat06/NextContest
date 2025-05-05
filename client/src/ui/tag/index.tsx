import { Text, View } from "react-native"

interface TagProp{
    text: string
}

const Tag = ({text}: TagProp) => {
    return(
        <View className="mr-2 bg-blue-100 text-blue-400 text-xs me-2 px-2 py-0.5 rounded-xl ">
            <Text>{text}</Text>
        </View>

    )
}

export {Tag}