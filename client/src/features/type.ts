// 밥약 user list item property

export interface User{
    department: string,
    student_number: number,
    gender: string,
    MBTI: string
    name: string
}

export interface User_List_Prop{
    handleButton: any
    users: User[]
}