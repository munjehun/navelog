import Title from "../components/Title";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";

const ToastEditor = dynamic(() => import("../components/ToastEditor"), {
  ssr: false,
}); //Editor 컴포넌트를 SSR을 CSR로 변경한 것!

export default function write() {
  // TODO: 로그인 안했으면 들어오지 못하도록?

  return (
    <div className="write-container">
      <Title title="글쓰기"></Title>

      <ToastEditor className="editor" />

      <style jsx global>{`
        .write-container {
          margin-left: 25px;
          display: flex;
          flex-direction: column;
          /* align-items: center; */
        }
      `}</style>
    </div>
  );
}
