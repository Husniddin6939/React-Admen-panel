import {useEffect,useReducer } from "react";
import { leadsAPI } from "@service/leads";
import "./style.scss"
const index = () => {

  const states={
    leads:[],
    loading:false,
    status:null,
    error:null
  }

  const reducer=(state, action)=>{

    

  }

  async function useFetch(){
    try{
        const response= await leadsAPI.getAll()
        
        
    }catch(err){
        throw new Error({message: err.message})
    }
  }

  

  const [state, dispatch]=useReducer(reducer, states);

        useEffect(()=>{
            useFetch()
        }, [])



    return (
        <div>
          
        </div>
    );
};

export default index;