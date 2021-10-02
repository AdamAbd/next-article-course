import React from 'react';
import Link from 'next/link';
import stylesArticle from "../styles/Article.module.css";

export default function ArticleItem(props) {
    return (
        <Link href='/article/[articleId]' as={`/article/${props.article.id}`}>
            <a className={stylesArticle.card}>
                <h3>{props.article.title} &arr;</h3>
                <p>{props.article.body}</p>
            </a>
        </Link>
    );
};
