import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React,{useState,useEffect} from 'react'
import colors from '../utils/colors';
import {collection,getDocs,getFirestore}  from "firebase/firestore"
import { RFPercentage } from 'react-native-responsive-fontsize';
import app from "../../firebase"
const db=getFirestore(app)
export default function Radiobutton({navigation}) {
  
  const[radiovalue,setradiovalue]=useState("FPT")
const[nofqs,setnoqs]=useState(0)

const sendingcat=()=>{
      navigation.navigate("Paper",{cat:radiovalue,qua:nofqs})    
}
const PROP = [
	{
		key: 1,
		text: 'FPT',
    dv:'Federação Portuguesa de Tiro',
	},
  {
		key: 2,
		text: 'FPTAC',
    dv:'Federação Portuguesa de Tiro com Armas de Caça',
	}
	];
    const readingquanity=()=>{
        getDocs(collection(db, "quantity")).then((res)=>{
          const quests=res.docs.map(doc=>({
            data:doc.data(),
            id:doc.id
          }))
            if(radiovalue==='FPT')
            {
              setnoqs(quests[0].data.ftp)
            } 
            else
            {
              setnoqs(quests[0].data.ftpac)
            } 
        }).catch((e)=>{
          console.log("error")
        })
    }
    useEffect(()=>{
readingquanity()
    },[radiovalue])
    return (
        <>
    <View style={{backgroundColor:colors.white,width:"90%",paddingVertical:RFPercentage(6),paddingHorizontal:RFPercentage(5),borderRadius:10}}>
      {PROP.map(res => {
					return (
						<View key={res.key} style={styles.container}>
							<View style={{width:RFPercentage(33)}}>
              <Text style={styles.radioText}>{res.dv}</Text>
              </View>
              <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => setradiovalue(res.text)}>
                                  {radiovalue === res.text && <View style={styles.selectedRb} />}
							</TouchableOpacity>
              </View>
						</View>
					);
				})}
                <TouchableOpacity onPress={sendingcat} style={{backgroundColor:colors.blue,padding:RFPercentage(2),borderRadius:5}}>
                    <Text style={{textAlign:"center",color:colors.white,fontFamily:"Raleway_400Regular"}}>Iniciar exame</Text>
                </TouchableOpacity>
			</View>
            </>
		);
            }


            const styles = StyleSheet.create({
                container: {
                    marginBottom: RFPercentage(6),
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                },
                radioText: {
                    marginRight: RFPercentage(3),
                    fontSize: RFPercentage(2.2),
                    color: '#000',
                    fontFamily:"Kanit_300Light",
                    display:"flex",
                    flexWrap:"wrap",
                },
                radioCircle: {  
                  height: 30,
                    width: 30,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: colors.blue,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                selectedRb: {
                    width: 15,
                    height: 15,
                    borderRadius: 50,
                    backgroundColor: colors.blue,
                },
                result: {
                    marginTop: RFPercentage(3),
                    color: 'white',
                    fontWeight: '600',
                    backgroundColor: '#F3FBFE',
                },
            });