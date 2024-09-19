import axios from 'axios';

const getNews = async () => {
  const result = await axios.get('/api/news');

  return result.data;
};

const getNewsDetail = async (path: string) => {
  const result = await axios.post('/api/news-link', { path });

  return result.data;
};

export { getNews, getNewsDetail };
