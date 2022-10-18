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
          <h1 className="post-title">제목제목 Lorem ipsum dolor sit.</h1>
          <span className="post-date">날짜짜장</span>
          <span>해시태그도 넣어야겠지?</span>
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
          margin: 50px 0;
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
        .post-content {
          margin: 0 10px 50px 10px;
        }
        .edit-button {
          height: 100px;
          width: 100px;
          border-radius: 50%;
          border: none;
          background: rgb(176, 209, 204);
          position: sticky;
          top: 50%;
          cursor: pointer;
          font-family: "Pretendard-Regular";
          font-size: 16px;
          transform: translateY(-10px);
        }
      `}</style>
    </div>
  );
}
