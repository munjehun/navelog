import Head from "next/head";
import React from "react";

export default function Title({ title }) {
  return (
    <Head>
      <title>{title} | navelog</title>
    </Head>
  );
}
