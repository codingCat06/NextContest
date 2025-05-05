import { ScrollView, TouchableOpacity } from "react-native"
import { Image, View } from "react-native"
import { Text } from "react-native-gesture-handler"
import { Icon } from "../../../../ui/Icon"
import { Tag } from "../../../../ui/tag"

const Restaurant_List = () => {
    return(
        <ScrollView className="flex-row w-full px-1 py-2 bg-white rounded-lg" horizontal>
            <Restaurant_Item/>
            <Restaurant_Item/>
            <Restaurant_Item/>

        </ScrollView>
    )
}
        <Image source={require("../../../../asset/picture/mrmr.png")} className="w-40 h-24 rounded-t-lg object-fit"/>

const Restaurant_Item = () => {
    return(
        

        <View  className="flex-shrink-0" style={{ width: 220, backgroundColor: 'white', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 8, shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 4 }, shadowRadius: 4, margin: 10 }}>
        {/* Image Section */}
          <Image
            source={require('../../../../asset/picture/mr.png')}  // 웹에서의 이미지 경로는 로컬 경로로 변경해야 함
            style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, width: '100%', height: 120 }}
          />
  
        <View className="px-3 py-4">
          {/* Title Section */}
          <TouchableOpacity>
            <Text style={{ marginBottom: 8, fontSize: 24, fontWeight: 'bold', color: '#1F2937' }}>
              미스터국밥
            </Text>
          </TouchableOpacity>
  

        <View className="flex flex-row items-center">
            <Icon name="star" size={24} color="rgb(253, 224, 71)"/>
            <Text className="text-sm font-bold text-gray-900 ms-2 dark:text-white">4.95</Text>
            <Text className="ml-1 text-sm font-medium text-gray-900">(73)</Text>

            <View className="w-3"/>
            <Icon name="remove-red-eye" color={"gray"} size={20}/>
            <Text className="ml-1">(30)</Text>
        </View>

        <View className="flex flex-row w-full my-2">
          <Tag text={'혼밥'}/>
          <Tag text={'가성비'}/>
        </View>

      
        </View>
      </View>

    )
}

export {Restaurant_List}