"use client";
import { Article } from "@/app/interface";
import { useEffect, useState } from "react";
import { articles } from "../blogData";
import Image from "next/image";


const BlogSingle = ({ params }: { params: any }) => {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const foundArticle = articles.find((data) => data.id == Number(params.id));
    setArticle(foundArticle || null);
  }, [params.id]);
  console.log(params.id);
  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <main className="bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42] min-h-screen pt-32 text-white">
      <h1 className="text-center font-bold text-4xl">Blog Details</h1>
      <h3 className="text-center text-2xl font-semibold pt-4">
        {article.title || "Blog not found"}
      </h3>
      <div className="grid grid-cols-2 justify-items-center gap-10 pt-20 max-w-6xl mx-auto">
        <div>
          <Image
            src={article.cardImage}
            alt={article.title}
            className="w-[600px] h-auto rounded-xl"
            width={600}
            height={400}
          />
        </div>
        <div>
          <p className="text-xl">{article.description}</p>
        </div>
      </div>
      <div className="text-center mt-10">
        <p className="text-lg bg-pink-400 px-4 py-2 rounded-xl inline-block">
          Category: {article.category}
        </p>
        <p className="mt-2 text-lg font-medium">{article.subTitle}</p>
      </div>

      {/* Display article content */}
      <div className="py-20 px-10 max-w-7xl mx-auto">
        <h4 className="text-2xl font-semibold">
          {article.content.introduction}
        </h4>

        {article.content.section1 && (
          <div className="mt-10">
            <h5 className="text-xl font-semibold">
              {article.content.section1.title}
            </h5>
            <p className="text-lg">{article.content.section1.body}</p>
          </div>
        )}

        {article.content.section2 && (
          <div className="mt-10">
            <h5 className="text-xl font-semibold">
              {article.content.section2.title}
            </h5>
            <p className="text-lg">{article.content.section2.body}</p>
          </div>
        )}

        {article.content.section3 && (
          <div className="mt-10">
            <h5 className="text-xl font-semibold">
              {article.content.section3.title}
            </h5>
            <p className="text-lg">{article.content.section3.body}</p>
          </div>
        )}

        {article.content.section4 && (
          <div className="mt-10">
            <h5 className="text-xl font-semibold">
              {article.content.section4.title}
            </h5>
            <p className="text-lg">{article.content.section4.body}</p>
          </div>
        )}

        {article.content.section5 && (
          <div className="mt-10">
            <h5 className="text-xl font-semibold">
              {article.content.section5.title}
            </h5>
            <p className="text-lg">{article.content.section5.body}</p>
          </div>
        )}

        <div className="mt-10">
          <h5 className="text-xl font-semibold">Conclusion</h5>
          <p className="text-lg">{article.content.conclusion}</p>
        </div>
      </div>
    </main>
  );
};

export default BlogSingle;
