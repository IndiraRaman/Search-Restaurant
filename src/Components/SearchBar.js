import React from 'react'
import{View,StyleSheet,Text,TextInput} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SearchBar=({ term,onTermChange,onTermSubmit })=>{
    return(
    
    <View style={styles.background}>
 <Text >
  <FontAwesome5 name= "search" style ={styles.iconStyle}/>; 
 </Text>
        <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.InputStyle} 
        placeholder='search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        />
    </View>
    )
}
 
const styles = StyleSheet.create({
background:{
    marginTop:15,
    backgroundColor:'#d3d3d3',
    height:50,
    borderRadius:5,
    marginHorizontal:15,
    flexDirection:'row',
    marginBottom:10
},
InputStyle:{
    flex:1,
    fontSize:20
},
iconStyle:{
    
    fontSize: 35,
    marginHorizontal:25,
    paddingTop:10
    
}
})
export default SearchBar;