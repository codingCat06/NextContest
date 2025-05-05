import { Image, Text, View } from "react-native"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { Icon } from "../Icon"

const MainHeader = () => {
    return (
        <View className="bg-white flex flex-row justify-between w-full p-[10px] align-middle h-16">
            <Image source={require('../../asset/picture/appIcon.png')} className="w-16 h-12 rounded-full" />
            <View className="flex flex-row items-center h-full align-middle">
                <Icon name="alarm"/>
                <View className="w-2"/>
                <Icon name='person-outline' />
            </View>


        </View>
    )
}

export {MainHeader}