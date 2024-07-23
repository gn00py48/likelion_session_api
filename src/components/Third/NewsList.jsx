import { useState, useEffect } from "react";
import axios from "axios";
import Title from "../common/Title";
import styled from "styled-components";
import Category from "./Category";
import {
  NewsListItem,
  NewsLink,
  NewsImage,
  ThirdWrapper
} from "./Styled";

import pingping from '../../assets/images/pingping.jpg';


const NewsList = () => {
  const { VITE_NEWS_API_KEY } = import.meta.env;
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${VITE_NEWS_API_KEY}`
      );
      console.log("세번째 실습", response);
      const articleData = response.data.articles;
      console.log("articleData : ", articleData);
      setArticles(articleData);
    } catch (error) {
      console.log("에러!!", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Title title={"멋사 NEWS"} />
      <ThirdWrapper>
        <Category />

        {articles.length > 0 ? (
          articles.map((article, index) => {
            console.log(article.urlToImage); // 이미지 URL을 콘솔에 로그
            return (
              <NewsListItem key={index}>
                <NewsLink href={article.url} target="_blank" rel="noopener noreferrer">
                  <NewsImage 
                    src={article.urlToImage || pingping} 
                    onError={(e) => e.target.src = pingping} 
                    alt={article.title}
                  />
                  {/* 이미지 지피티 썻어유.. ㅠㅠ */}
                  <span>{article.title}</span>
                </NewsLink>
              </NewsListItem>
            );
          })
        ) : (
          <p>데이터를 불러오는 중입니다...</p>
        )}
      </ThirdWrapper>
    </>
  );
};

export default NewsList;
