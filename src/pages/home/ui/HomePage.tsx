import { getNews, getNewsDetail } from '@/pages/sign-in/api/news-api.ts';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await getNews();

      setNews(response.items);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const clickNewsHandler = async (link: string) => {
    try {
      const response = await getNewsDetail(link);

      console.log(response);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews(); // 컴포넌트가 마운트될 때 뉴스 데이터를 가져옴
  }, []);

  return (
    <div>
      {/* <section className="content h-[464px] bg-amber-300"></section> */}
      <section className="banner max-w-[1200px] mx-auto">
        <div>
          {news?.map(
            (
              article: {
                title: string;
                description: string;
                link: string;
                originallink: string;
              },
              index: number,
            ) => (
              // <a
              //   key={index}
              //   href={article.link}
              //   target="_blank"
              //   rel="noopener noreferrer"
              // >
              <div
                key={index}
                onClick={() => {
                  if (article.link === article.originallink) {
                    window.confirm('지원하지 않는 링크입니다');
                  } else {
                    clickNewsHandler(article.link);
                  }
                }}
              >
                <ul className="border my-2">
                  <li className="font-bold">{article.title}</li>
                  <li className="text-sm">{article.description}</li>
                </ul>
              </div>

              // </a>
            ),
          )}
        </div>
      </section>
    </div>
  );
};
