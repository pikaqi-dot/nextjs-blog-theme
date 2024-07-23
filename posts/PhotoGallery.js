// PhotoGallery.js
import React from 'react';
import Gallery from 'react-photo-gallery';

const photos = [
  {
    src: './images/photo1.jpg',
    width: 4,
    height: 3,
  },
  {
    src: './images/photo2.jpg',
    width: 1,
    height: 1,
  },
  // 添加更多图片
];

const PhotoGallery = () => (
  <Gallery photos={photos} />
);

export default PhotoGallery;
