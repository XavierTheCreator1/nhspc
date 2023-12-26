const images = [
  'https://lagosmums.com/wp-content/uploads/2017/07/SparkIT-Blog-Post-Header.png',
  'https://i0.wp.com/codakid.com/wp-content/uploads/2020/04/iStock-879041304.jpg',
  'https://pages.techsoup.org/hubfs/Blog%20Images/202005/simple-coding-lessons-for-teens-thumbnail.jpg',
];

export default function () {
  return images[Math.floor(Math.random() * images.length)];
}
