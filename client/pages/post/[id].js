import axios from "axios";
import React from "react";
import Title from "../../components/Title";
import dynamic from "next/dynamic";
import moment from "moment";
import { useRouter } from "next/router";
import Link from "next/link";

const ToastViewer = dynamic(() => import("../../components/ToastViewer"), {
  ssr: false,
}); //ToastViewer 컴포넌트를 SSR을 CSR로 변경한 것!

export default function Post({ data }) {
  const router = useRouter();
  console.log(data);

  const postDelete = () => {
    axios
      .request({
        method: "DELETE",
        url: `http://localhost:3001/posts/${data.id}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(console.log)
      .catch(console.log);
  };

  const deleteConfirm = () => {
    if (window.confirm("노트를 삭제하겠습니까?")) {
      postDelete();
      router.push("/");
    }
  };
  return (
    <div className="post-container">
      <Title title={`${data.title.slice(0, 10)}..`}></Title>

      <div className="post">
        <div className="post-header">
          <h1 className="post-title">{data.title}</h1>
          <div className="post-hashtag">
            <li>블록체인</li>
            <li>도커</li>
            <li>사이드프로젝트</li>
          </div>
          <span className="post-date">
            {moment(data.createDate).format("YYYY-MM-DD")}
          </span>
        </div>

        <div className="post-content">
          <ToastViewer body={data.body} />
        </div>
      </div>

      <div className="button-container">
        <Link href={`/edit/${data.id}`}>
          <button type="button" className="button edit-button">
            수정
          </button>
        </Link>
        <button
          type="button"
          className="button delete-button"
          onClick={() => {
            deleteConfirm();
            // router.push("/");
          }}
        >
          삭제
        </button>
      </div>

      <style jsx>{`
        .post-container {
          display: flex;
          justify-content: center;
          position: relative;
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
          line-height: 1.6;
        }

        .button-container {
          height: 120px;
          transform: translateY(-10%);
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 50%;
          margin-left: 20px;
        }
        .button {
          display: block;
          height: 60px;
          width: 80px;
          border-radius: 50px;
          border: none;
          background: rgb(176, 209, 204);
          cursor: pointer;
          font-family: "Pretendard-Regular";
          font-size: 16px;
          transition: all 0.2s;
        }
        .button:hover {
          background: rgba(176, 209, 204, 0.5);
        }

        .edit-button {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          padding-top: 20px;
        }
        .delete-button {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          padding-bottom: 20px;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps(context) {
  let { id } = context.query;

  const res = await axios.get(`http://localhost:3001/posts/${id}`);
  const data = res.data;

  return {
    props: { data },
  };
}
