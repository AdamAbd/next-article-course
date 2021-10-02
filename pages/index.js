import { server } from "../config/index";

import CustomeHead from "../components/Meta";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  console.log(articles);

  return (
    <div>
      <CustomeHead>WebDev Newz</CustomeHead>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `${server}/api/articles`
  );
  const articles = await res.json();

  return {
    props: { articles },
  };
};
