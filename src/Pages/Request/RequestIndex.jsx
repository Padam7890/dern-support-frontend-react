import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import Button from "../../Components/Button";
import { useNavigate } from "react-router";
import TableHeading from "../../Components/Table/TableHeading";
import Table from "../../Components/Table/Table";
import Thead from "../../Components/Table/Thead";
import { NavLink } from "react-router-dom";
import http from "../../Utils/http";
import useRequest from "../../CustomHooks/repairrequest";
const RequestIndex = () => {
  const nav = useNavigate();
  const {
    requestList,
    setrequestList,
    isLoading,
    error,
    fetchRequestLists,
  } = useRequest();
  const [loading, setLoading] = useState(false);

  const handleclick = () => {
    nav("/request/create");
  };

  if (isLoading) {
    return <ClipLoader color={"#008000"} size={40} />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(requestList);

  return (
    <div className=" relative w-full h-full">
      <ToastContainer />

      <div className=" flex items-center justify-between">
        <h2 className="text-2xl font-semibold mb-4">Request/Repair List</h2>
        <Button
          type="button"
          onClick={handleclick}
          className=" bg-green-700 hover:bg-green-900"
        >
          Create Request & Repair
        </Button>
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
              <th scope="col">UserType</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Repair Item</th>
              <th scope="col">Repair Status</th>
              <th scope="col">Action</th>
            </tr>
          </Thead>
          <tbody>
            {requestList.map((value, index) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  {value.id}
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

                <td className="px-4 py-4"> {value.user.name} </td>
                <td className="px-4 py-4"> {value.user.userType} </td>
                <td className="px-4 py-4"> {value.description}</td>
                <td className="px-4 py-4"> {value.status}</td>
                <td className="px-4 py-4">
                  {value?.repairjob.map((val) => val.productName)}
                </td>
                <td className="px-4 py-4">
                  {" "}
                  {value?.repairjob.map((val) => val.status)}
                </td>
                <NavLink to={`/Request/view/${value.id}`}>
                  <Button
                    href="#"
                    className=" bg-green-500  font-light text-center text-xs"
                  >
                    View
                  </Button>
                </NavLink>

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

export default RequestIndex;
