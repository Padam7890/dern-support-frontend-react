import { useEffect, useState } from "react";
import http from "../Utils/http";

const useRepair = () => {
   const [repairList, setrepairList] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
    fetchRepairLists();
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
