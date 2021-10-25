import React from "react";
import AlbumList from "./compoenrnt/AlbumList";

AblumFeature.propTypes = {};

function AblumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Việt",
      thumbnailurl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/b/b/b/9bbb0756e0844189746ad02f2a81eee8.jpg",
    },
    {
      id: 2,
      name: "Nhạc Mỹ",
      thumbnailurl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/d/8/9/5d890d445e5ecff4d118a296440f1654.jpg",
    },
    {
      id: 3,
      name: "Nhạc Hàn",
      thumbnailurl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/f/6/e/4f6eaff396951216df63768fa3f83efc.jpg",
    },
  ];
  return <AlbumList albumlist={albumList} />;
}

export default AblumFeature;
