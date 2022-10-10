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
            <a href="#"> AAA</a>
          </li>
          <li>
            <a href="#"> BBB</a>
          </li>
          <li>
            <a href="#"> 로그인</a>
          </li>
        </ul>
      </div>

      <style jsx>
        {`
          nav {
            background-color: #2b2b2b;
            display: flex;
          }

          img {
            margin: 15px 30px 10px;
            width: 150px;
          }

          ul {
            display: flex;
          }
        `}
      </style>
    </nav>
  );
}

export default NavBar;
