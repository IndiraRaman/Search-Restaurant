import React,{useState} from 'react'
import{View,Text,StyleSheet,ScrollView} from 'react-native'
import SearchBar from '../Components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../Components/ResultsList'

const SearchScreen=()=>{
const [term,setTerm] = useState('');
const[searchApi,results,errorMessage] =  useResults();

const filterResultsByPrice = (price)=>{
    return results.filter(result =>{
            return result.price === price
        }
    )
}
// const[results,setResults] = useState([])
// const[errorMessage,setErrorMessage]=useState('')
// const searchApi = async searchTerm => {
//     try{
//     const response = await yelp.get('/search',{
//         params:{
//             limit:50,
//             term:searchTerm,
//             location:'san jose'
//         }
//     });
//     setResults(response.data.businesses)
//  } catch(err){
//      setErrorMessage('Something Went Wrong')
//  }
// };

// useEffect(()=>{
//     searchApi('pasta')
// })

    return(
    // <View style = {{flex:1}}>
    <>
        <SearchBar 
        term ={term} 
        onTermChange= { setTerm }
        onTermSubmit={ ()=>searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null }
        {/* <Text style={{fontSize:20}}>We have found {results.length} results</Text> */}
        <ScrollView>

        <ResultsList 
        results ={filterResultsByPrice('$')} 
        title = "Cost Effective"/>
        <ResultsList   
        results ={filterResultsByPrice('$$')} 
        title = "Bit Pricer" />
        <ResultsList 
         results ={filterResultsByPrice('$$$')} 
         title= "Big Spender"/>

        </ScrollView>
    {/* </View> */}
    </>
    )
}

const styles = StyleSheet.create({

})
export default SearchScreen;