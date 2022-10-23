import Title from "../components/Title";
import dynamic from "next/dynamic";

const ToastEditor = dynamic(() => import("../components/ToastEditor"), {
  ssr: false,
}); //Editor 컴포넌트를 SSR을 CSR로 변경한 것!

export default function write() {
  return (
    <div className="write-container">
      <Title title="글쓰기"></Title>
      <ToastEditor className="editor" />
      <button type="button" className="save-button">
        저장하기
      </button>

      <style jsx global>{`
        .write-container {
          margin-left: 25px;
          display: flex;
          flex-direction: column;
          /* align-items: center; */
        }

        .save-button {
          display: block;
          background: rgb(176, 209, 204);
          border: solid 2px rgb(176, 209, 204);
          border-radius: 50px;
          padding: 12px;
          margin-top: 10px;
          width: 150px;
          font-weight: 500;
          font-size: 16px;
          position: fixed;
          top: 818px;
          right: 50%;
          transform: translateX(60%);
          cursor: pointer;
          transition: all 0.2s;
          font-family: "Pretendard-Regular";
          letter-spacing: 0.05em;
        }
        .save-button:hover {
          background: rgba(176, 209, 204, 0.5);
          border: solid 2px #2b2b2b;
        }
      `}</style>
    </div>
  );
}
