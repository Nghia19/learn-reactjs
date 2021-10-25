import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
  onPageChange: null,
};
function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPost = Math.ceil(_totalRows / _limit);
  function handlePageChage(newPage) {
    onPageChange(newPage);
  }
  return (
    <div>
      <button onClick={() => handlePageChage(_page - 1)} disabled={_page <= 1}>
        Prew
      </button>
      <button
        onClick={() => handlePageChage(_page + 1)}
        disabled={_page >= totalPost}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
