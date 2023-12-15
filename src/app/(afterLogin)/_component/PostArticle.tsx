"use client";

import { ReactNode } from "react";
import style from "./post.module.css";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    //onClickCapture -> 이벤트 캡처링, 클릭 이벤트랑 a태그 겹칠때 활용 추천
    <article onClickCapture={onClick} className={style.post}>
      {/* 클라이언트 컴포넌트 부모 에서 서버 컴포넌트 사용하는 법 */}
      {/* 여기서 서버 컴포넌트 import 해서 쓰면 안됨,  {children}이나 props로 넘겨줘여함 */}
      {/* 만약 서버 컴포넌트를 import해서 쓰면 서버 컴포넌트가 클라이언트 컴포넌트로 성격이 바뀜 */}

      {children}
    </article>
  );
}
