import Title from "../components/Title";
import dynamic from "next/dynamic";

const ToastEditor = dynamic(() => import("../components/Editor"), {
  ssr: false,
}); //Editor 컴포넌트를 SSR을 CSR로 변경한 것!

export default function write() {
  return (
    <div>
      <Title title="Write"></Title>
      <ToastEditor />
    </div>
  );
}
