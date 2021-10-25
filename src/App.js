// import "./App.css";

import { useEffect, useState } from "react";
import Pagination from "./compoenent/Pagination";
import PostList from "./compoenent/PostList";
import queryString from "querystring";

function App() {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });
  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchPostList();
  }, [filters]);
  function handlePageChage(newPage) {
    setFilters({ ...filters, _page: newPage });
  }
  return (
    <div className="App">
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChage} />
    </div>
  );
}

export default App;
