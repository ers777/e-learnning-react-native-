import { View, Text, FlatList, Dimensions, ScrollView } from 'react-native';
import ProgressBar from './ProgressBar';
import ContentItem from './ContentItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
export default function Content({ content, onChapterFinish}) {
    let contentRef;
    const navigation=useNavigation();
    const [activeOndex,setActiveIndex]=useState(0);
    const onNextBtnPress = (index) => {
        if(content?.length<=index+1){
            navigation.goBack();
            onChapterFinish()
            return;
        }
        setActiveIndex(index+1)
        contentRef.scrollToIndex({ animated: true, index: index + 1 });
    };

    return (
        <View style={{ padding: 0, height: '100%' }}>
            <ProgressBar contentLength={content?.length} contentIndex={activeOndex} />

            <FlatList
                data={content}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ref={(ref) => { contentRef = ref; }}
                pagingEnabled
                renderItem={({ item, index }) => (
                    <View>
                    <ScrollView style={{ width: Dimensions.get('screen').width, padding: 20
                ,marginBottom:40
                }}>
                        <Text style={{ fontFamily: 'outfit-medium', fontSize: 22, marginTop: 5 }}>
                            {item.heading}
                        </Text>
                        <ContentItem
                            description={item?.description?.html}
                            output={item?.output?.html}
                        />
                        <TouchableOpacity style={{marginTop:10}} onPress={() => onNextBtnPress(index)}>
                            <Text style={{
                                padding: 10, color: Colors.WHITE, backgroundColor: Colors.PRIMARY,
                                textAlign: 'center', borderRadius: 10, fontFamily: 'outfit', fontSize: 17,
                            }}>{content?.length>index+1?'Next':'Finish'}</Text>
                        </TouchableOpacity>
                    </ScrollView></View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}
