import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const MyComponent = () => (
  <>
    <Editor
      placeholder="마크다운 텍스트를 입력해 보세요 📝"
      previewStyle="vertical"
      height="750px"
      initialEditType="markdown"
      useCommandShortcut={true}
    />
  </>
);
export default MyComponent;
