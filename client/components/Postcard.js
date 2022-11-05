import React from "react";
import Link from "next/link";
import moment from "moment";

function Postcard({ id, title, date, content }) {
  return (
    <Link href={`/post/${id}`}>
      <div className="content" id={id}>
        <div className="content-thumbnail">
          <img src="/hamster.jpg" alt="content thumnail" />
        </div>
        <div className="content-preview">
          <h2 className="content-title">{title}</h2>
          <span>{moment(date).format("YYYY-MM-DD")}</span>
          <p>{content}</p>
        </div>

        <style jsx>{`
          .content {
            width: 380px;
            height: 470px;
            margin: 0 30px 30px 0;
            background-color: rgb(176, 209, 204);
            /* 색상 랜덤으로? 배열에 색상 정해서 */
            cursor: pointer;
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

          .content-preview {
            margin: 30px;
          }
        `}</style>
      </div>
    </Link>
  );
}

export default Postcard;
