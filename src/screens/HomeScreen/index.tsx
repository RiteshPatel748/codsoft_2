import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';


const GameHome = () => {
  const [bolean,setBolean]=useState(false)
  const [value,setValue]=useState('')
  const [fontSize,setFontSize]=useState(90)

  const handleFunction=(values: string | number)=>{
    if(value.length<5) setFontSize(90)
    else if(value.length>=5 && value.length<10) setFontSize(80)
    // else if(value.length>=10 && value.length<20) setFontSize(60)
    else if(value.length>=10 && value.length<20) setFontSize(50)
    else if(value.length>=20) setFontSize(40)
    if(values=='c') {setValue('');return}
    if(values=='=') {
      try{
        setValue(eval(value));
      }
      catch{
        setValue('Error')
      }
      return;
    }
    if(values=='clear'){
      setValue(value.slice(0,value.length-1))
      return;
    }    
    if(value.length>40){
      ToastAndroid.show('Reached Max Size', 1000);return;
    }
    setValue(value+String(values));
  }

  return (
    <View style={styles.CalculatorDark}>
    <View style={styles.Content}>
      <View  style={{flex:.3,marginBottom:2,justifyContent:'flex-end',alignItems:'flex-end'}}>
        <Text style={[styles.Numbers1,{fontSize:fontSize}]}>{value}</Text>
      </View>
      <View style={{flex:.8,marginBottom:0,justifyContent:'flex-end',}}>
        <View style={styles.Row}>
          <TouchableOpacity style={styles.ButtonBox} onPress={()=>{handleFunction('c')}}>          
            <Text style={styles.Text}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleFunction('clear')}}>
            <Image
              style={[styles.ButtonBox]}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ow20u2w7gz-1%3A449?alt=media&token=615960a2-38ab-49c4-a537-b20fee0255a4",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonBox} onPress={()=>{handleFunction('%')}}>
            <Text style={styles.Text}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonBox} onPress={()=>{handleFunction('/')}}>
            <Text style={styles.Text}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity style={styles.ButtonBox} onPress={()=>{handleFunction(7)}}>
            <Text style={styles.Text}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonBox} onPress={()=>{handleFunction(8)}}>
            <Text style={styles.Text}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonBox} onPress={()=>{handleFunction(9)}}>
            <Text style={styles.Text}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonBox} onPress={()=>{handleFunction('*')}}>
            <Text style={styles.Text}>×</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity style={styles.ButtonBox} onPress={()=>{handleFunction(4)}}>
            <Text style={styles.Text}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonBox} onPress={()=>{handleFunction(5)}}>
            <Text style={styles.Text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonBox} onPress={()=>{handleFunction(6)}}>
            <Text style={styles.Text}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonBox} onPress={()=>{handleFunction('-')}}>
            <Text style={styles.Text}>–</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity style={styles.ButtonBox} onPress={()=>{handleFunction(1)}}>
            <Text style={styles.Text}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonBox} onPress={()=>{handleFunction(2)}}>
            <Text style={styles.Text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonBox} onPress={()=>{handleFunction(3)}}>
            <Text style={styles.Text}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonBox} onPress={()=>{handleFunction('+')}}>
            <Text style={styles.Text}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity style={[styles.ButtonBox]} onPress={()=>{handleFunction('.')}}>
            <Text style={styles.Text}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonBox} onPress={()=>{handleFunction(0)}}>
            <Text style={styles.Text}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonBox} onPress={()=>{handleFunction('00')}}>
            <Text style={[styles.Text,{fontSize:20}]}>00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonBox} onPress={()=>{handleFunction('=')}}>
            <Text style={styles.Text}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
  );
};


const styles = StyleSheet.create({
  CalculatorDark: {
    flex:1,
    width: "100%",
    height: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
    paddingBottom: 29,
    boxSizing: "border-box",
    backgroundColor: "rgba(23,23,28,1)",
    overflow:'hidden',
    justifyContent:'flex-end',
    alignItems:'flex-end',
  },
  Content: {
    flex:1,
    justifyContent: "flex-end",
    alignItems: "baseline",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    overflow:'hidden',
  },
  Numbers: {
    marginRight: 16,
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    lineHeight: 40,
    fontFamily: "Work Sans, sans-serif",
    fontWeight: "300",
    textAlign: "right",
  },
  Numbers1: {
    marginRight: 16,
    color: "rgba(255,255,255,1)",
    fontSize: 90,
    fontFamily: "Work Sans, sans-serif",
    fontWeight: "300",
    textAlign: "right",
  },
  Row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginRight: 16,
    boxSizing: "border-box",
    margin:20,
  },
  Text: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    fontFamily: "Work Sans, sans-serif",
    fontWeight: "400",
    textAlign: "center",
  },
  ButtonBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    paddingLeft: 23,
    paddingRight: 22.75,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 24,
    boxSizing: "border-box",
    backgroundColor: "rgba(78,80,95,1)",
    height:60,
    width:70
  },
})

export default GameHome;
