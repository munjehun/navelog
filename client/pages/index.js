import { useState, useEffect } from "react";
import axios from "axios";
import Postcard from "../components/Postcard";
import Title from "../components/Title";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .request({
        method: "GET",
        url: "http://localhost:3001/posts",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log("홈 페이지 (전체 노트) :", res.data.reverse());
        setPosts(res.data);
      })
      .catch(console.log);
  };

  return (
    <div className="container">
      <Title title="홈"></Title>

      <div className="content-container">
        <h1>노트</h1>
        <form action="POST">
          <input
            type="text"
            placeholder="해시태그 검색"
            className="hashtag-search"
          />
        </form>

        <div className="contents-list">
          {posts.map((post, index) => {
            return (
              <Postcard
                id={post.id}
                key={index}
                title={post.title}
                date={post.createdAt}
                content={post.body}
              />
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        .container {
          display: flex;
          justify-content: flex-end;
        }

        form {
          margin: 15px 30px 15px 0;
          display: flex;
          justify-content: space-between;
        }

        .hashtag {
          border: solid 1.5px rgb(150, 150, 150);
          border-radius: 40px;
          width: 100px;
          height: 40px;
          font-size: 1rem;
          color: rgb(150, 150, 150);
          background-color: rgb(252, 250, 238);
          cursor: pointer;
        }
        .hashtag:active {
          background: rgb(150, 150, 150);
          color: white;
        }
        .hashtag-select {
          display: flex;
          flex-wrap: wrap;
          border-bottom: 1.5px solid rgb(217, 217, 217);
          margin: 20px 30px 20px 0;
          padding-bottom: 10px;
        }
        .hashtag-select li {
          list-style: none;
          margin: 0 10px 6px 0;
          padding: 8px 12px;
          border: solid 2px rgb(176, 209, 204);
          border-radius: 50px;
          background: rgb(176, 209, 204);
        }

        .hashtag-search {
          border: solid 1.5px #d1d1d1;
          border-radius: 50px;
          width: 200px;
          height: 40px;
          font-size: 1rem;
          color: black;
          background-color: rgb(252, 250, 238);
          padding: 0 16px 0 18px;
        }

        .content-container {
          margin-top: 20px;
          margin-left: 40px;
          max-width: 1230px;
        }

        .contents-list {
          display: flex;
          justify-content: flex-end; //오른쪽으로 붙게
          flex-wrap: wrap; //nowrap이 기본
        }
      `}</style>
    </div>
  );
}
