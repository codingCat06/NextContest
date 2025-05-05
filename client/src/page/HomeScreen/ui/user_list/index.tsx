import { Button, Image, Text, View } from "react-native"
import { User, User_List_Prop } from "../../../../features/type"



const User_List = ({handleButton, users, title}:User_List_Prop&{title:string}) => {
    if(users.length <= 0){
        return(
            <View className="w-full h-16 bg-white item">
                <Text className="text-2xl text-neutral-800 font-['owngly'] m-auto"> 없음 </Text>
            </View>
        )
    }
    return(


<View className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 ">
    <View className="flex flex-row items-center justify-between mb-2">
        <Text className="text-2xl font-['owngly'] mb-1">{title}</Text>
        <Text className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </Text>
    </View>
    <View className="flow-root">
        <View  className="space-y-4 divide-y divide-gray-200">
            {users.map((user)=><View><User_List_Item handleButton={handleButton} user={user}/></View>)}
        </View>
    </View>
</View>

    )
}



const User_List_Item = ({handleButton, user }: {handleButton:any, user: User }) => {
    return(
        <View className="py-3 sm:py-4">
            <View className="flex flex-row items-center">
                <View className="border-[1px] border-gray-300 rounded-full mr-4">
                    <Image source={require('../../../../asset/picture/hoi.png')} className="w-[64px] h-[64px] rounded-full"/>
                </View>
                <View className="flex-1 min-w-0 ms-4">
                    <Text className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {user.name}({user.gender}) {user.MBTI}
                    </Text>
                    <Text className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {user.department}{user.student_number}
                    </Text>
                </View>
                <Button title="선택" onPress={()=>handleButton}/>
            </View>
        </View>

    )
}

export {User_List}