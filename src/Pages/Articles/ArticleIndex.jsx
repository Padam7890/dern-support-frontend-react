import React from "react";
import TableHeading from "../../Components/Table/TableHeading";
import Table from "../../Components/Table/Table";
import Thead from "../../Components/Table/Thead";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import ReactPaginate from "react-paginate";
import usearticles from "../../CustomHooks/articles";
import { ClipLoader } from "react-spinners";
import http from "../../Utils/http";
import { toast } from "react-toastify";

const ArticleIndex = () => {
  const nav = useNavigate();
  

  const {
    articlesList,
    setarticlesList,
    isLoading,
    error,
    fetchArticlesLists,
    currentPage,
    pageCount,
    handlePageClick,
    searchRequests,
  } = usearticles();

  const handleclick = () => {
    nav("/article/create");
  };
  if (isLoading) {
    return <ClipLoader color={"#008000"} size={40} />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const deleteArticle = async (id) => {
    try {
      const res = await http.delete(`/articles/${id}`);
      console.log(res);
      toast.success(res.data.message);
      fetchArticlesLists();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className=" relative w-full h-full">
      <div className=" flex items-center justify-between">
        <h2 className="text-2xl font-semibold mb-4">Articles List</h2>
        <Button
          type="button"
          onClick={handleclick}
          className=" bg-green-700 hover:bg-green-900"
        >
          Create Articles
        </Button>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <TableHeading searchRequests={searchRequests} />
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
                No.
              </th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">Action</th>
            </tr>
          </Thead>
          <tbody>
            {articlesList.map((article, index) => (
              <tr key={article.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">1.</td>
                <td>{article.title}</td>
                <td>{article.content}</td>

                <td className=" max-w-24">
                  <NavLink to={`/article/edit/${article.id}`}>
                    <Button
                      href="#"
                      className=" bg-green-500  font-light text-center text-xs"
                    >
                      Edit
                    </Button>
                  </NavLink>

                  <Button
                    onClick={()=> deleteArticle(article.id)}
                    href="#"
                    className=" bg-red-500  font-light text-center text-xs"
                  >
                    Delete
                  </Button>
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

        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount} // Replace with the actual number of pages
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          containerClassName="pagination justify-content-center my-4"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default ArticleIndex;
