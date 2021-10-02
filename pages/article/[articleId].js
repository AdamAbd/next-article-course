import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { server } from "../../config/index";
import CustomeHead from "../../components/Meta";

export default function article({ article }) {
  //   const router = useRouter();
  //   const { articleId } = router.query;

  return (
    <>
      <CustomeHead>WebDev Newz</CustomeHead>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
}

// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.articleId}`
//   );

//   const article = await res.json();

//   return {
//     props: { article },
//   };
// };

export const getStaticProps = async (context) => {
  const res = await fetch(
    `${server}/api/articles/${context.params.articleId}`
  );

  const article = await res.json();

  return {
    props: { article },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { articleId: id.toString() } }));
  console.log(paths);

  return {
    paths,
    fallback: false
  };
};
