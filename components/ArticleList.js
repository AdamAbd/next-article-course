import React from "react";
import ArticleItem from './ArticleItem';

import stylesArticle from "../styles/Article.module.css";

export default function ArticleList(props) {
  return (
    <div className={stylesArticle.grid}>
      {props.articles.map((article, index) => {
        return <ArticleItem key={index} article={article}/>;
      })}
    </div>
  );
}
