import Postcard from "../components/Postcard";
import Title from "../components/Title";

export default function Home() {
  return (
    <div className="container">
      <Title title="홈"></Title>

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
          <Postcard id="1" />
          <Postcard id="2" />
          <Postcard id="3" />
          <Postcard id="4" />
          <Postcard id="5" />
          <Postcard id="6" />
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: flex-end;
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
      `}</style>
    </div>
  );
}
