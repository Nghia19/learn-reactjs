import React from "react";
import PropTypes from "prop-types";
import Album from "../Album";
import "./styles.scss";
AlbumList.propTypes = {
  albumlist: PropTypes.array.isRequired,
};
function AlbumList({ albumlist }) {
  return (
    <ul className="album__list">
      {albumlist.map((album) => (
        <li key={album.id}>
          <Album album={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
