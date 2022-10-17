import { useRouter } from "next/router";
import React from "react";
import Title from "../../components/Title";

export default function Post() {
  const router = useRouter();
  console.log(router);
  return (
    <div className="post-container">
      <Title title="게시물 제목"></Title>

      <div className="post">
        <div className="post-header">
          <h1 className="post-title">제목제목 Lorem ipsum dolor sit.</h1>
          <span className="post-date">날짜짜장</span>
        </div>
        <div className="post-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          ducimus aut voluptate fugit ipsa, iure eum minus natus dicta
          temporibus. Nulla sequi quidem culpa provident, repellat, repellendus
          dolorum minima dolores voluptates vel dicta odit suscipit qui aperiam
          ipsa asperiores non! Deserunt ut debitis cumque officia. Incidunt
          quibusdam reiciendis nemo aperiam corporis iure, officia beatae itaque
          consectetur. Impedit eaque in tenetur pariatur distinctio quae ducimus
          odio cum temporibus a ab accusantium blanditiis ut, officiis velit
          odit iure, excepturi mollitia. Ea obcaecati autem distinctio
          accusantium, perspiciatis repudiandae saepe atque, quibusdam eveniet
          quos, velit ipsa! Odio corrupti facere ipsam voluptatum odit unde vero
          nulla quo soluta aspernatur numquam rem nisi iusto, omnis distinctio
          tempora quos accusantium magnam libero. Ab atque voluptatibus a rerum
          necessitatibus unde sunt. Facilis veritatis aspernatur, laboriosam nam
          amet fugiat recusandae itaque!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          ducimus aut voluptate fugit ipsa, iure eum minus natus dicta
          temporibus. Nulla sequi quidem culpa provident, repellat, repellendus
          dolorum minima dolores voluptates vel dicta odit suscipit qui aperiam
          ipsa asperiores non! Deserunt ut debitis cumque officia. Incidunt
          quibusdam reiciendis nemo aperiam corporis iure, officia beatae itaque
          consectetur. Impedit eaque in tenetur pariatur distinctio quae ducimus
          odio cum temporibus a ab accusantium blanditiis ut, officiis velit
          odit iure, excepturi mollitia. Ea obcaecati autem distinctio
          accusantium, perspiciatis repudiandae saepe atque, quibusdam eveniet
          quos, velit ipsa! Odio corrupti facere ipsam voluptatum odit unde vero
          nulla quo soluta aspernatur numquam rem nisi iusto, omnis distinctio
          tempora quos accusantium magnam libero. Ab atque voluptatibus a rerum
          necessitatibus unde sunt. Facilis veritatis aspernatur, laboriosam nam
          amet fugiat recusandae itaque!
        </div>
      </div>

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
          margin-bottom: 50px;
        }
      `}</style>
    </div>
  );
}
