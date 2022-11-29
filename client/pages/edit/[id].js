import Title from "../../components/Title";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const ToastEditor = dynamic(() => import("../../components/ToastEditor"), {
  ssr: false,
}); //Editor 컴포넌트를 SSR을 CSR로 변경한 것!

export default function edit({ data }) {
  console.log(data);
  return (
    <div className="edit-container">
      <Title title="수정하기"></Title>
      <ToastEditor title={data.title} postId={data.id} body={data.body} />

      <style jsx>{`
        .edit-container {
          margin-left: 25px;
          display: flex;
          flex-direction: column;
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
