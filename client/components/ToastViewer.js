import React from "react";
import { Viewer } from "@toast-ui/react-editor";

function ToastViewer({ body }) {
  return <Viewer initialValue={`${body}`} />;
}

export default ToastViewer;
