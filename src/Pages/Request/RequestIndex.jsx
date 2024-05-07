import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import Button from "../../Components/Button";
import { useNavigate } from "react-router";
import TableHeading from "../../Components/Table/TableHeading";
import Table from "../../Components/Table/Table";
import Thead from "../../Components/Table/Thead";
import { NavLink } from "react-router-dom";
const RequestIndex = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleclick = () => {
    nav("/request/create");
  };

  return (
    <div className=" relative w-full h-full">
      <ToastContainer />
      {loading && (
        <div className="bg-slate-800 bg-opacity-40 w-full h-full absolute z-30 top-0 left-0 flex justify-center items-center">
          <ClipLoader color={"#008000"} size={120} />
        </div>
      )}
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
              <th scope="col">Repair?</th>
              <th scope="col">Action</th>
            </tr>
          </Thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                {
                    Math.floor(Math.random() * 1000)
                }
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

              <td className="px-4 py-4"> Padam Thapa </td>
              <td className="px-4 py-4"> Customer </td>
              <td className="px-4 py-4"> Hey i am looking repair.. </td>
              <td className="px-4 py-4"> Submitted </td>
              <td className="px-4 py-4">Dell  500 CPU</td>
              <NavLink to={``}>
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
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RequestIndex;
