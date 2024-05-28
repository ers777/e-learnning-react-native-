import { View, Text } from 'react-native'
import React, { useEffect, useState,ToastAndroid } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import DetailSection from '../Components/CourseDeatailScreen/DetailSection';
import ChapterSection from '../Components/CourseDeatailScreen/ChapterSection';
import { enrollCourse, getUserEnrolledCourse } from '../Service';
import { useUser } from '@clerk/clerk-expo';
export default function CourseDetailScreen() {
  const navigate=useNavigation();
  const params=useRoute().params;
  const [userEnrollCourse,setUserEnrollCourse]=useState([])
  const {user}=useUser();
useEffect(()=>{
  console.log(params.course)
  if (user&&params.course){
    GetUserEnrollCourse()
  }
},[params.course,user])

  const UserEnrollCourse=()=>{
    enrollCourse(params.course.id,user.primaryEmailAddress.emailAddress)
    .then(resp=>{
      //console.log("--",resp);
      if(resp){GetUserEnrollCourse()}
      ToastAndroid.show('Course Enrolled successfully!', ToastAndroid.LONG);

    })
  }
  const GetUserEnrollCourse=()=>{
    getUserEnrolledCourse(params.course.id,user.primaryEmailAddress.emailAddress)
    .then(resp=>{
      //console.log("--",resp.UserEnrollCoursep);
      setUserEnrollCourse(resp.UserEnrollCoursep)
    })
  }
  return params.course&&(
    <ScrollView style ={{padding:20}}>
      {/*кнопка назад  */}
      <TouchableOpacity onPress={()=>navigate.goBack()}>
      <Ionicons name="arrow-back-circle" size={40}  color="black" /> 
      
           
       </TouchableOpacity>

      <DetailSection course={params.course} 
      userEnrollCourse={userEnrollCourse}
      enrollCourse={()=>UserEnrollCourse()}/>
      <ChapterSection chapterList={params.course.chapter}
            userEnrollCourse={userEnrollCourse}

      />
      
    </ScrollView>
  )
}