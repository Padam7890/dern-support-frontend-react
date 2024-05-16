import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import TableHeading from "../../Components/Table/TableHeading";
import Table from "../../Components/Table/Table";
import Thead from "../../Components/Table/Thead";
import { NavLink } from "react-router-dom";
import Button from "../../Components/Button";
import http from "../../Utils/http";
import useRepair from "../../CustomHooks/repair";
import { ClipLoader } from "react-spinners";

const RepairIndex = () => {

  const { repairList, setrepairList, isLoading, error, fetchRepairLists } = useRepair();

  if (isLoading) {
    return <ClipLoader color={"#008000"} size={40} />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  console.log(repairList)
  


  return (
    <div className=" relative w-full h-full">
      <ToastContainer />

      <div className=" flex items-center justify-between">
        <h2 className="text-2xl font-semibold mb-4">Repair List</h2>
        {/* <Button
          type="button"
          onClick={handleclick}
          className=" bg-green-700 hover:bg-green-900"
        >
          Create Request & Repair
        </Button> */}
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <TableHeading
          //   items={bannerList}
          //   setItems={setBannerList}
          //   fetchItemList={fetchBannerList}
          searchfor={"title"}
        />
        <Table>
          <Thead>
            <tr>
              <th scope="col" class="p-4">
                {/* <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div> */}
                SR. Id
              </th>
              <th scope="col">Name</th>
              <th scope="col">ProductName</th>
              <th scope="col">Scheduled Date</th>
              <th scope="col">Status</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </Thead>
          <tbody>
            {repairList.map((repair,index)=> (
               <tr key={repair.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               <td class="w-4 p-4">
               {repair.supportRequestId}
                 {/* {value.id} */}
                 {/* {index + 1 + "."} */}
                 {/* <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" class="sr-only">
                  checkbox
                </label>
              </div> */}
               </td>
 
               <td className="px-4 py-4">{repair.supportRequest.user.name} </td>
               <td className="px-4 py-4"> {repair.productName}</td>
               <td className="px-4 py-4"> {Date(repair.scheduledDate)}</td>
               <td className="px-4 py-4">{repair.status}</td>
               <td className="px-4 py-4">{repair.address}</td>
               <td className=" max-w-24">
                 <NavLink to={`/repair/view/${repair.id}`}>
                   <Button
                     href="#"
                     className=" bg-green-500  font-light text-center text-xs"
                   >
                     View
                   </Button>
                 </NavLink>
 
                 <NavLink to={``}>
                   <Button
                     href="#"
                     className=" bg-[#0d6046]  font-light text-center text-xs"
                   >
                     Edit
                   </Button>
                 </NavLink>
 
                 <NavLink to={``}>
                   <Button
                     href="#"
                     className=" bg-red-500  font-light text-center text-xs"
                   >
                     Delete
                   </Button>
                 </NavLink>
               </td>
 
               {/* <td className=" px-4 py-4 flex gap-2 items-center">
            <NavLink to={``}>
              <Button
                href="#"
                className=" bg-green-500  font-light text-center text-xs"
              >
                Edit
              </Button>
            </NavLink>
 
            <Button
              onClick={""}
              href="#"
              className=" bg-red-500  font-light text-center text-xs"
            >
              Delete
            </Button>
          </td> */}
             </tr>
            ))}
         
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RepairIndex;
