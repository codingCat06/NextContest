import { View } from "react-native"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { Icon } from "../Icon"

const MainHeader = () => {
    return (
        <View className="flex flex-row w-full bg-red-400">
            <MaterialIcon name='home'/>
            <Icon name='person-outline' />
        </View>
    )
}

export {MainHeader}