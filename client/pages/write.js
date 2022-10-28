import Title from "../components/Title";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";

const ToastEditor = dynamic(() => import("../components/ToastEditor"), {
  ssr: false,
}); //Editor 컴포넌트를 SSR을 CSR로 변경한 것!

export default function write() {
  // TODO: 로그인 안했으면 들어오지 못하도록?

  const [hashtag, setHashtag] = useState("");
  const [hashArr, setHashArr] = useState([]);

  const onKeyDown = useCallback(
    (e) => {
      if (
        (e.keyCode == "13" || e.keyCode == "32") &&
        e.target.value.trim() !== "" &&
        !hashArr.includes(e.target.value.trim()) &&
        hashArr.length < 5
      ) {
        setHashArr([...hashArr, e.target.value]);
      }
    },
    [hashArr]
  );

  const onKeyUp = useCallback(
    (e) => {
      if (e.keyCode == "13" || e.keyCode == "32") {
        setHashtag("");
        console.log(hashArr);
      }
    },
    [hashArr]
  );

  return (
    <div className="write-container">
      <Title title="글쓰기"></Title>
      <ToastEditor className="editor" />

      <div className="hashtag-container">
        <button type="button" className="save-button">
          저장하기
        </button>

        {hashArr.map((hash, index) => {
          return (
            <span
              key={index}
              className="hash"
              onClick={(e) => {
                setHashArr(hashArr.filter((i) => i !== e.target.innerHTML));
                setHashtag("");
              }}
            >
              {hash}
            </span>
          );
        })}

        {hashArr.length == 5 ? null : (
          <input
            className="hashtag-input"
            type="text"
            value={hashtag}
            onChange={(e) => setHashtag(e.target.value)}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            placeholder="해시태그 입력"
            maxLength="15"
          />
        )}
      </div>

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
          padding: 10px 12px;
          width: 150px;
          font-weight: 500;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.2s;
          font-family: "Pretendard-Regular";
          letter-spacing: 0.05em;
          margin-right: 10px;
        }
        .save-button:hover {
          background: rgba(176, 209, 204, 0.5);
          border: solid 2px #2b2b2b;
        }

        .hashtag-container {
          display: flex;
          margin: 10px;
        }

        .hashtag-input {
          width: 120px;
          height: 40px;
          border: solid 1.5px #d1d1d1;
          font-size: 14px;
          border-radius: 50px;
          padding: 0 15px;
          margin-right: 10px;
        }

        .hash {
          display: flex;
          height: 40px;
          border-radius: 50px;
          padding: 2px 15px;
          margin-right: 10px;
          align-items: center;
          cursor: pointer;
          background: rgba(176, 209, 204, 0.3);
        }
      `}</style>
    </div>
  );
}
