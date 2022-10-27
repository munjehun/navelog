import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

function NavBar() {
  const { data: session } = useSession();

  return (
    <nav>
      <Link href="/">
        <a>
          <img src="/navelog-logo.png" alt="navelog logo" />
        </a>
      </Link>
      <div>
        <ul>
          {session ? (
            <>
              <li>
                <a href="/index">나의 노트</a>
              </li>
              <li>
                <a href="/write">글쓰기</a>
              </li>
              <li id="userName">
                <a href="/login">{session.user.name}</a>
              </li>
              <img
                src={session.user.image}
                alt="User Profile Image"
                className="profile-img"
              />
            </>
          ) : (
            <li>
              <a href="/login">로그인</a>
            </li>
          )}
        </ul>
      </div>

      <style jsx>{`
        nav {
          background-color: #2b2b2b;
          height: 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
        }

        img {
          margin: 5px 60px 0;
          width: 200px;
        }

        ul {
          display: flex;
          margin-right: 20px;
        }

        li {
          color: white;
          list-style: none;
          justify-content: space-between;
          margin: 0 20px;
          transition: all 0.2s;
          display: flex;
          align-items: center;
        }
        li:hover {
          color: rgb(214, 164, 214);
        }
        .profile-img {
          display: block;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin: 0 10px 0 0;
        }
        /* #userName {
          cursor: none;
        } */
      `}</style>
    </nav>
  );
}

export default NavBar;
