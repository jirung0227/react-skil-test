import axios from 'axios';

const getNews = async () => {
  const result = await axios.get(
    '/api/v2/top-headlines?country=us&apiKey=bf19e391f2fa4a73b331b687cc1ab2fc',
    {
      headers: {
        'X-Naver-Client-Id': '0U1pUue5Ak1vO_JsWU6K',
        'X-Naver-Client-Secret': 'GLRwCMSmY4',
      },
    },
  );

  return result;
};

export { getNews };
