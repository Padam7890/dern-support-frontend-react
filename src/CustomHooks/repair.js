import { useEffect, useState } from "react";
import http from "../Utils/http";
import Cookies from 'js-cookie';

const useRepair = () => {
   const [repairList, setrepairList] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
    fetchRepairLists();
   const cookies =  Cookies.get('LOGIN_INFO') // `domain` won't have any effect...!   console.log(cookies)
    console.log(cookies)
   }, []);


   const fetchRepairLists = async () => {
     try {
       const response = await http.get("/repairItems");
       setrepairList(response.data.allrepair);
       setIsLoading(false);
     } catch (error) {
       setError(error);
       setIsLoading(false);
     }
   }

   
   return { repairList, setrepairList, isLoading, error, fetchRepairLists };
}

export default useRepair;
