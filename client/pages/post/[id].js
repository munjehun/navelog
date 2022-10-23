import { useRouter } from "next/router";
import React from "react";
import Title from "../../components/Title";
import dynamic from "next/dynamic";

const ToastViewer = dynamic(() => import("../../components/ToastViewer"), {
  ssr: false,
}); //ToastViewer 컴포넌트를 SSR을 CSR로 변경한 것!

export default function Post() {
  // const router = useRouter();
  // console.log(router);

  return (
    <div className="post-container">
      <Title title="게시물 제목"></Title>

      <div className="post">
        <div className="post-header">
          <h1 className="post-title">제목제목</h1>
          <div className="post-hashtag">
            <li>블록체인</li>
            <li>도커</li>
            <li>사이드프로젝트</li>
          </div>
          <span className="post-date">날짜짜장</span>
        </div>

        <div className="post-content">
          <ToastViewer />
        </div>
      </div>

      <button type="button" className="edit-button">
        수정하기
      </button>

      <style jsx>{`
        .post-container {
          display: flex;
          justify-content: center;
        }
        .post {
          display: flex;
          flex-direction: column;
          width: 720px;
          border-bottom: 2px solid black;
          margin-bottom: 50px;
          margin-left: 100px;
        }
        .post-header {
          border-top: 4px solid black;
          border-bottom: 1px solid black;
          margin: 30px 0;
        }
        .post-title {
          font-size: 2.5rem;
          margin-left: 10px;
        }
        .post-date {
          display: block;
          margin-bottom: 15px;
          margin-left: 10px;
        }
        .post-hashtag {
          display: flex;
          margin-bottom: 15px;

          flex-wrap: wrap;
          list-style: none;
        }
        .post-hashtag li {
          background: rgb(176, 209, 204);
          padding: 10px;
          border-radius: 20px;
          margin-left: 10px;
          font-size: 14px;
          letter-spacing: 0.05em;
        }
        .post-content {
          margin: 0 10px 50px 10px;
        }
        .edit-button {
          height: 100px;
          width: 100px;
          border-radius: 50%;
          border: solid 2px rgb(176, 209, 204);
          background: rgb(176, 209, 204);
          position: sticky;
          top: 50%;
          cursor: pointer;
          font-family: "Pretendard-Regular";
          font-size: 16px;
          transform: translateY(-10px);
          transition: all 0.2s;
        }
        .edit-button:hover {
          background: rgba(176, 209, 204, 0.5);
          border: #2b2b2b solid 2px;
        }
      `}</style>
    </div>
  );
}
