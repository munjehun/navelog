import React from "react";
import Link from "next/link";
function NavBar() {
  return (
    <nav>
      <Link href="/">
        <a>
          <img src="/navelog-logo.png" alt="navelog logo" />
        </a>
      </Link>
      <div>
        <ul>
          <li>
            <a href="/write">글쓰기</a>
          </li>
          <li>
            <a href="#">로그인</a>
          </li>
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
        }
        li:hover {
          color: rgb(214, 164, 214);
        }
      `}</style>
    </nav>
  );
}

export default NavBar;
