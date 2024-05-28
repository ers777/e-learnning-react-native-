import { View, Text, ToastAndroid, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';import Colors from '../../Utils/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
// внутрь курса нижняя часть 
export default function ChapterSection({chapterList,userEnrollCourse}) {
  const navigation=useNavigation();
  const OnChapterPress=(content)=>{
    if(1==0){
      ToastAndroid.show('PLease Enroll First',ToastAndroid.LONG)
      return;
    }
    else{
      navigation.navigate('chapter-content',{content:content})
      
    }
  }
  const checkIsChapterCompleted=()=>{
    if (userEnrollCourse[0].completedChapter?.lenth<=0){
      return false;
    }
    const resp = userEnrollCourse[0].completedChapter.find(item=>item.id==chapterid)
    return resp;
  }
  return chapterList&&(
    <View style={{padding:10, backgroundColor:Colors.WHITE,marginTop:20,borderRadius:15}}>
        <Text style={{fontFamily:'outfit-medium',fontSize:22}}>Chapters</Text>
        {chapterList.map((item,index)=>(
            <TouchableOpacity style={[false?styles.CompleteChapter:styles.inCompleteChapter]}
            onPress={()=>OnChapterPress(item.content)}>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:10}}>  
                <Text style={{fontFamily:'outfit-medium',fontSize:27,color:'blue'}}>{index+1}</Text>
                <Text style={{fontFamily:'outfit',fontSize:21,color:'blue'}}>{item.title}</Text>
            </View>
            {//userEnrollCourse.length
            1==0?
            <Ionicons name="md-lock-closed" size={25} color="blue" />
            :
            <Ionicons name="play" size={25} color="blue" />}

            </TouchableOpacity>
        ))}
    </View>
  )
}
const styles = StyleSheet.create({
  inCompleteChapter:{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',
  padding:15,borderWidth:1,borderRadius:10,marginTop:10,borderColor:'blue'},
  
  CompleteChapter:{display:'flex',flexDirection:'row',
  backgroundColor:'green',
  alignItems:'center',justifyContent:'space-between',
  padding:15,borderWidth:1,borderRadius:10,marginTop:10,borderColor:'blue'}
})