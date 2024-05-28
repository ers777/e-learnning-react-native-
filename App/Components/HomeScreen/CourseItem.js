import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors';

import { Feather } from "@expo/vector-icons";

export default function CourseItem({item}) {
  return (
    <View
            style={{
              padding: 10,
              backgroundColor: Colors.WHITE,
              marginRight: 15,
              borderRadius: 15,
            }}
          >
            <Image
              source={{ uri: item?.banner?.url }}
              style={{ width: 210, height: 120, borderRadius: 15 }}
            />
            <View style={{ padding: 7 }}>
              <Text style={{ fontFamily: "outfit", fontSize: 17 }}>
                {" "}
                {item.name}
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    marginTop: 5,
                  }}
                >
                  <Feather name="book-open" size={24} color="black" />
                  <Text>{item?.chapters?.lenght} Chapters</Text>
                </View>
                <View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                      marginTop: 5,
                    }}
                  >
                    <Feather name="clock" size={24} color="black" />
                    
                    <Text style={{fontFamily:'outfit'}}>{item?.time} hr</Text>
                  </View>
                </View>
              </View>
              <View>
                <Text style={{marginTop:5,color:Colors.PRIMARY,fontFamily:'outfit'}}>{item.price==0?'Free':item.price}</Text>
              </View>
            </View>
          </View>
  )
}