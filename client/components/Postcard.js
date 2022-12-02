import React from "react";
import Link from "next/link";
import moment from "moment";
import dynamic from "next/dynamic";

const ToastViewer = dynamic(() => import("../components/ToastViewer"), {
  ssr: false,
});

function Postcard({ id, title, date, content }) {
  return (
    <Link href={`/post/${id}`}>
      <div className="content" id={id}>
        <div className="content-thumbnail">
          <img src="/hamster.jpg" alt="content thumnail" />
        </div>
        <div className="content-preview">
          <h2 className="content-title">
            {title.length > 20 ? title.slice(0, 29) + ".." : title}
          </h2>
          <span>{moment(date).format("YYYY-MM-DD")}</span>
          <div className="content-content">
            <ToastViewer body={content} />
          </div>
        </div>

        <style jsx global>{`
          .content {
            width: 380px;
            height: 480px;
            margin: 0 30px 30px 0;
            background-color: rgb(176, 209, 204);
            /* 색상 랜덤으로? 배열에 색상 정해서 */
            cursor: pointer;
            display: flex;
            flex-direction: column;
          }

          .content-thumbnail {
            width: 100%;
            height: 200px;
          }

          .content-thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            /* 이미지 비율 유지하면서 크기에 맞게 꽉 채우기 */
          }

          .content-title {
            margin: 0 0 10px;
          }
          .content-preview {
            margin: 30px;
            height: 220px;
            overflow: hidden;
          }

          .content-content {
            display: block;
            height: 100%;
            line-height: 1.2;
            width: 100%;
          }

          .content-content img {
            width: 100%;
          }
        `}</style>
      </div>
    </Link>
  );
}

export default Postcard;
