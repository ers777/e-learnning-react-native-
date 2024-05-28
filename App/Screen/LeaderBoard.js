import { View, Text,FlatList,Image } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import Gold from './../../assets/gold-medal.png'
import Silver from './../../assets/silver-medal.png'
import Bronze from './../../assets/bronze-medal.png'

const data = [
  { id: 1, name: 'CoolCoder123', image: 'https://flomaster.top/uploads/posts/2022-07/1658190796_32-flomaster-club-p-muzhchina-v-ochkakh-risunok-krasivo-37.jpg', point: 90 },
  { id: 2, name: 'GeekMaster', image: 'https://decode.kz/images/blog/5f9d437783069466b99dfd30.png', point: 80 },
  { id: 3, name: 'TechEnthusiast', image: 'https://avatars.mds.yandex.net/i?id=455f9b1e50dfba7bfd0357407960de8eebf516bd-10452512-images-thumbs&n=13', point: 70 },
  { id: 4, name: 'DigitalExplorer', image: 'https://otkritkis.com/wp-content/uploads/2022/01/1619898134_3-oir_mobi-p-krutie-zhivotnie-zhivotnie-krasivo-foto-3.jpg', point: 60 },
  { id: 5, name: 'CodeNinja', image: 'https://get.wallhere.com/photo/black-cat-animals-sunglasses-glasses-photography-blue-nose-whiskers-head-Black-Cat-color-eye-mammal-vision-care-close-up-cat-like-mammal-macro-photography-eyewear-small-to-medium-sized-cats-179376.jpg', point: 50 },
  { id: 6, name: 'PixelPioneer', image: 'https://clusster.org/uploads/647840525753468e234b9376177badca441fdfef3%20(1).png', point: 40 },
  { id: 7, name: 'CodeCraftsman', image: 'https://i.pinimg.com/originals/3a/a0/24/3aa024b21c7c9de228f3e4b8ea5f1375.jpg', point: 30 },
];


export default function LeaderBoard() {
  
  return (
    <View style={{backgroundColor:'#FFDBD3'}}>
       <View style={{height:160,backgroundColor:Colors.PRIMARY,
    padding:30
    }}>
      <Text style={{fontFamily:'outfit-bold',color:Colors.WHITE,fontSize:30,
    }}>LeaderBoard</Text>
    
    </View>
    <View style={{marginTop:-40,height:'85%'}}>
      
      <FlatList data={data} renderItem={({item})=>(
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',
        justifyContent:'space-between',padding:20,backgroundColor:Colors.WHITE,margin:8,
        marginRight:15,marginLeft:15,borderRadius:15
        }}>
        <View style={{display:'flex',flexDirection:'row',
        gap:10,alignItems:'center'
        }}>
          <Text style={{fontFamily:'outfit',fontSize:24,color:'gray'}}> {item.id}</Text>
          <Image source={{uri: item.image}}
          style={{width:60,height:60,borderRadius:99}}
          />
          <View>
            <Text style={{fontFamily:'outfit-medium',fontSize:20}}>{item.name}</Text>
            <Text style={{fontFamily:'outfit',fontSize:16,
          color:'gray'
          }}>{item.point} Points</Text>

          </View>
        </View>
        {item.id<4?
        <Image source={item.id+1==2?Gold:item.id+1==3?Silver:Bronze}
        style={{width:40,height:40}}
        />
        :null}
        </View>)}>

      </FlatList>
    </View>
    </View>
   
  )
}