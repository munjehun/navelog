import React from "react";
import { Viewer } from "@toast-ui/react-editor";

function ToastViewer() {
  return (
    <>
      <Viewer
        initialValue={`
# 나는야 초보개발자 길을 비켜랏
## 비켜주세요..
### 포기하지 말자 ^~^
- 개발이란 멀까?
* [ ] 나벨로그 다듬기  



[멋쟁이 제훈이 네이버 블로그](https://blog.naver.com/luna1489) 👈 왜 하이퍼링크처럼 안뜨지?
![](https://images.unsplash.com/photo-1526667900883-4a817696e7e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhhbmRzb21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)




> 인용문 마크다운
      

_이태릭체 기울기!!_


**볼드체 굵기!!**

      `}
      />
    </>
  );
}

export default ToastViewer;
