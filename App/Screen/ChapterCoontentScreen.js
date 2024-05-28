import { View, Text, ToastAndroid, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Content from '../Components/ChapterContent/Content'
import { useNavigation, useRoute } from '@react-navigation/native';
import { MarkChapterCompleted } from '../Service';

export default function ChapterCoontentScreen() {
    
    const param = useRoute().params;
    const navigation = useNavigation();

    useEffect(() => {
      console.log("ChapterId", param.chapterid)
      console.log("RecordId", param.userCourseRecordId)
    }, [param])

    const onChapterFinish = () => {
      MarkChapterCompleted(param.chapterid, param.userCourseRecordId).then(resp => {
        if (resp) {
          ToastAndroid.show('Congratulation!!!', ToastAndroid.LONG)
          navigation.goBack();
        }
      })
    }

    return param.content && (
      <ScrollView>
        {/* отображения выбренного главы */}
        <Content content={param.content} onChapterFinish={onChapterFinish} />
      </ScrollView>
    )
}
