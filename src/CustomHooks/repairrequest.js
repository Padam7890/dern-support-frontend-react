import { useEffect, useState } from "react";
import http from "../Utils/http";

const useRequest = () => {
   const [requestList, setrequestList] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
    fetchRequestLists();
   }, []);

   const fetchRequestLists = async () => {
     try {
       const response = await http.get("/request");
       setrequestList(response.data.data);
       setIsLoading(false);
     } catch (error) {
       setError(error);
       setIsLoading(false);
     }
   }
   
   return { requestList, setrequestList, isLoading, error, fetchRequestLists };
}

export default useRequest;
