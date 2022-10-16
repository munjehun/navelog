import Title from "../components/Title";

export default function Home() {
  return (
    <div className="container">
      <Title title="Home"></Title>

      <div className="content-container">
        <h1>노트</h1>
        <form action="get">
          <button type="button" className="hashtag">
            해시태그
          </button>
          <input
            type="text"
            placeholder="해시태그 검색"
            className="hashtag-search"
          />
        </form>

        <div className="contents-list">
          <div className="content">
            <div className="content-thumbnail">
              <img src="/hamster.jpg" alt="content thumnail" />
            </div>
            <div className="content-preview">
              <h2 className="content-title">제목</h2>
              <span>날짜</span>
              <p>
                텍스트 내용
                블라블라..블라블라..블라블라..블라블라..블라블라..블라블라..블라블라..
              </p>
            </div>
          </div>

          <div className="content">
            <div className="content-thumbnail">
              <img src="/hamster.jpg" alt="content thumnail" />
            </div>
            <div className="content-preview">
              <h2 className="content-title">제목</h2>
              <span>날짜</span>
              <p>
                텍스트 내용
                블라블라..블라블라..블라블라..블라블라..블라블라..블라블라..블라블라..
              </p>
            </div>
          </div>

          <div className="content">
            <div className="content-thumbnail">
              <img src="/hamster.jpg" alt="content thumnail" />
            </div>
            <div className="content-preview">
              <h2 className="content-title">제목</h2>
              <span>날짜</span>
              <p>
                텍스트 내용
                블라블라..블라블라..블라블라..블라블라..블라블라..블라블라..블라블라..
              </p>
            </div>
          </div>

          <div className="content">
            <div className="content-thumbnail">
              <img src="/hamster.jpg" alt="content thumnail" />
            </div>
            <div className="content-preview">
              <h2 className="content-title">제목</h2>
              <span>날짜</span>
              <p>
                텍스트
                내용블라블라..블라블라..블라블라..블라블라..블라블라..블라블라..블라블라..텍스트
                내용
                블라블라..블라블라..블라블라..블라블라..블라블라..블라블라..블라블라..텍스트
                내용
                블라블라..블라블라..블라블라..블라블라..블라블라..블라블라..블라블라..텍스트
                내용
                블라블라..블라블라..블라블라..블라블라..블라블라..블라블라..블라블라..텍스트
                내용라..블라블라..블라블라..블라블라..블라블라..블라블라..블라블라..텍스트
                내용라..블라블라..블라블라..블라블라..블라블라..블라블라..블라블라..텍스트
                내용
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @font-face {
          font-family: "Pretendard-Regular";
          src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
            format("woff");
          font-weight: 400;
          font-style: normal;
        }

        .container {
          display: flex;
          justify-content: flex-end;
          font-family: "Pretendard-Regular";
        }

        form {
          margin: 15px 30px 15px 0;
          display: flex;
          justify-content: space-between;
        }

        .hashtag {
          border: solid 1.5px rgb(150, 150, 150);
          border-radius: 40px;
          width: 120px;
          height: 40px;
          font-size: 1rem;
          color: rgb(150, 150, 150);
          background-color: rgb(252, 250, 238);
          cursor: pointer;
        }

        .hashtag-search {
          border: solid 1.5px #d1d1d1;
          border-radius: 50px;
          max-width: 200px;
          height: 40px;
          font-size: 1rem;
          color: black;
          background-color: rgb(252, 250, 238);
          padding: 0 16px 0 18px;
        }

        .content-container {
          margin-top: 20px;
        }

        .contents-list {
          width: 1200px;
          display: flex;
          flex-wrap: wrap; //nowrap이 기본
        }

        .content {
          width: 370px;
          height: 470px;
          margin: 0 30px 30px 0;
          background-color: rgb(176, 209, 204);
          cursor: pointer;
        }

        .content-thumbnail {
          width: 100%;
          height: 200px;
          overflow: hidden; //넘치는 위아래 부분 가려주기
          /* position: relative; */
        }

        .content-thumbnail img {
          width: 100%;
        }

        .content-preview {
          margin: 30px;
        }
      `}</style>
    </div>
  );
}
