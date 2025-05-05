import { useNavigation } from "@react-navigation/native";
import { Image, Text, View, ScrollView } from "react-native";
import FastImage from "react-native-fast-image";
import Gif from 'react-native-gif';
import { User_List } from "./ui/user_list";
import { User } from "../../features/type";
import { Restaurant_List } from "./ui/restaurant_list";

const users:User[] = [{
    name: '배세강',
    department: '컴퓨터공학과',
    student_number: 24,
    gender: '남자',
    MBTI:'ENFP'
},{
    name: '배세강',
    department: '컴퓨터공학과',
    student_number: 24,
    gender: '남자',
    MBTI:'ENFP'
},
]

const HomeScreen = () => {
    return(
        <View>
<ScrollView contentContainerStyle={{ flexDirection: 'column', alignItems: 'center' }} className="px-4 py-6">
            <View className="flex justify-start w-full mb-1">
                <Text className="text-2xl font-['owngly']">현재 상황</Text>
            </View>
            <View className="flex flex-row w-full h-32 mb-8 align-middle bg-white rounded-lg">

                <Image
                    source={require('../../asset/gif/ku_char_img.gif')}  // 로컬 GIF
                    style={{ width: 100, height: 100 }}
                />
                <View className="flex justify-center w-full h-full ml-8">
                    <Text className="text-2xl font-['owngly']">남은 밥약: 7개</Text>
                    <View className="h-2"/>
                    <Text className="text-2xl font-['owngly']">2시간 후에 밥약이 있어요!</Text>
                </View>
                
            </View>


            <View className="flex justify-start w-full mb-8">
                <Text className="text-2xl font-['owngly'] mb-1">맛집 탐방</Text>
                <Restaurant_List/>

            </View>

            <View className="items-start w-full">
                <Text className="text-2xl font-['owngly'] mb-1">밥약 매칭</Text>

            </View>

            <View className="flex justify-start w-full">
                <User_List users={users} handleButton={()=>{}} title="밥약해주세요!"/>
            </View>



            <View className="flex justify-start w-full mb-12">
                <Text className="text-2xl font-['owngly']"></Text>
                <User_List users={users} handleButton={()=>{}} title="밥약 해줄게요!"/>

            </View>
        </ScrollView>
        </View>
    )
}

export {HomeScreen}