import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Dimensions } from "react-native";

const ContactUs = () => {
    const { width, height } = Dimensions.get("window");

    return (
        <View style={{
            height: height,
            width: width,
        }}>
        <ScrollView>
        <View style={{
            backgroundColor: "#FFF",
            flex: 1
        }}>
            <View style={{
                backgroundColor: "orange",
                height: "23%",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingHorizontal: 20,
                //toFixed
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop:25,
                    width: "100%"
                }}>
                    <View style={{ width: "100%" }}>
                        <Text style={{
                            fontSize: 28,
                            color: "#FFF",
                            fontWeight: "bold",
                            marginTop: 80,
                        }}>Contact Us</Text>
    
                    </View>
                </View>
                </View>
                <View style={{
                height: "100%",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                marginRight:10,
                marginLeft:10,
                paddingHorizontal: 20,
                marginTop:10,
                //toFixed
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    //marginTop:25,
                    width: "100%"
                }}>
                    <View style={{ width: "100%" }}>
                        <Text style={{
                            fontSize: 15,
                            color: "#848482",
                            fontWeight: "bold",
                            marginTop: 20,
                        }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.
    
                        Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.
                        
                        Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.[1] Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors, including Pages and Microsoft Word, have since adopted Lorem ipsum,[2] as have many LaTeX packages,[3][4][5] web content managers such as Joomla! and WordPress, and CSS libraries such as Semantic UI</Text>
    
                    </View>
                </View>
                </View>
                
                </View>
                </ScrollView>
                </View>
      )
}

export default ContactUs