import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import axios from "axios";
import { useEffect, useRef } from "react";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";

const MyComponent = ({ title, postId, body }) => {
  const [hashtag, setHashtag] = useState("");
  const [hashArr, setHashArr] = useState([]);
  const [postTitle, setPostTitle] = useState(title);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    editorRef.current?.getInstance().setMarkdown(body);
  }, []);

  const editorRef = useRef();

  const router = useRouter();

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
      const KEY_ENTER = "13";
      const KEY_SPACEBAR = "32";
      if (e.keyCode == KEY_ENTER || e.keyCode == KEY_SPACEBAR) {
        setHashtag("");
      }
    },
    [hashArr]
  );

  const handleSaveButton = () => {
    axios
      .request({
        method: "POST",
        url: "http://localhost:3001/posts",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        data: {
          title: postTitle,
          body: editorRef.current?.getInstance().getMarkdown(),
          userId: userId,
          hashtags: hashArr,
        },
      })
      .then((res) => {
        console.log(res);
        router.push("/myNote");
      })
      .catch(console.log);

    // // 제목 가져오기
    // console.log("제목 :", postTitle);
    // // 입력창에 입력한 내용을 HTML 태그 형태로 취득
    // console.log(editorRef.current?.getInstance().getHTML());
    // // 입력창에 입력한 내용을 MarkDown 형태로 취득
    // console.log(editorRef.current?.getInstance().getMarkdown());
    // // 해시태그 가져오기
    // console.log("해시태그 :", hashArr);
  };

  const handleEditButton = () => {
    axios
      .request({
        method: "PATCH",
        url: `http://localhost:3001/posts/${postId}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        data: {
          id: postId,
          userId: userId,
          title: postTitle,
          body: editorRef.current?.getInstance().getMarkdown(),
          hashtags: hashArr,
        },
      })
      .then((res) => {
        console.log(res);
        router.push("/myNote");
      })
      .catch(console.log);
  };

  return (
    <>
      <input
        className="write-title"
        type="text"
        placeholder="제목을 입력하세요 ✍️"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <Editor
        ref={editorRef}
        placeholder="마크다운 텍스트를 입력해 보세요 📝"
        previewStyle="vertical"
        height="80vh"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
      <div className="hashtag-container">
        <button
          type="button"
          className="save-button"
          onClick={() => {
            !postTitle
              ? alert("제목을 입력해주세요.")
              : !editorRef.current?.getInstance().getMarkdown()
              ? alert("내용을 입력해주세요.")
              : postId
              ? handleEditButton()
              : handleSaveButton();
          }}
        >
          {postId ? `수정하기` : `저장하기`}
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
        .write-title {
          display: block;
          height: 50px;
          padding: 0 12px;
          font-family: "Pretendard-Regular";
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 0.05em;
          border: none;
          border-bottom: solid 5px #2b2b2b;
          transition: all 0.2s ease-out;
        }
        .write-title:focus {
          outline: none;
          border-bottom: solid 5px rgb(176, 209, 204);
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
    </>
  );
};
export default MyComponent;
