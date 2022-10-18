import Title from "../components/Title";
import dynamic from "next/dynamic";

const ToastEditor = dynamic(() => import("../components/ToastEditor"), {
  ssr: false,
}); //Editor 컴포넌트를 SSR을 CSR로 변경한 것!

export default function write() {
  return (
    <div className="write-container">
      <Title title="글쓰기"></Title>
      <ToastEditor />
      <button type="button">저장</button>

      <style jsx>{`
        .write-container {
          margin-left: 25px;
        }
      `}</style>
    </div>
  );
}
