import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Title from "../components/Title";

function login() {
  const { data, data: session, status } = useSession();
  console.log(status, data);

  return (
    <div className="login-container">
      {session ? <Title title="마이페이지" /> : <Title title="로그인" />}

      {session ? (
        <div className="login-box">
          <h1>{session.user.name} (으)로 로그인 되었습니다.</h1>
          <button className="login-btn" onClick={() => signOut()}>
            로그아웃!
          </button>
        </div>
      ) : (
        <div className="login-box">
          <h1> 로그인 하기 </h1>
          <button className="login-btn" onClick={() => signIn("Github Login")}>
            로그인!
          </button>
        </div>
      )}

      <style jsx>{`
        .login-container {
          display: flex;
          height: 90vh;
          justify-content: center;
          align-items: center;
        }
        .login-box {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .login-btn {
          border: rgb(176, 209, 204) solid 2px;
          background: rgb(176, 209, 204);
          height: 50px;
          max-width: 120px;
          border-radius: 50px;
          transition: all 0.2s;
          font-size: 16px;
          cursor: pointer;
          font-family: "Pretendard-Regular";
          padding: 5px 20px;
        }
        .login-btn:hover {
          background: rgba(176, 209, 204, 0.5);
          border: #2b2b2b solid 2px;
        }
      `}</style>
    </div>
  );
}

export default login;
