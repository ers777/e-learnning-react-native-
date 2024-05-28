import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import Colors from '../Utils/Colors';
import CourseList from '../Components/HomeScreen/CourseList';
import SubHeading from '../Components/SubHeading';
import CourseItem from '../Components/HomeScreen/CourseItem';
import { useNavigation } from '@react-navigation/native';
import { getCourseList } from '../Service';

export default function MyCourse() {
  const [courseList, setCourseList] = useState([]);
  const navigation = useNavigation();

  const getCourses = () => {
    getCourseList('Basic').then((resp) => {
      console.log("RESP--", resp);
      setCourseList(resp?.courses);
    });
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <View style={{}}>
      <View style={{ height: 160, backgroundColor: Colors.PRIMARY, padding: 30, }}>
        <Text style={{ fontFamily: 'outfit-bold', color: Colors.WHITE, fontSize: 30 }}>MyCourse</Text>
      </View>
      <View style={{}}>
        <FlatList
          style={{paddingLeft:20,paddingBottom:20,marginTop:-50,}}
          data={courseList}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('course-detail', { course: item })}>
              <CourseItem item={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
