// home에서 login으로 갔을때 /i/flow/login로 리다이렉트 됨

"use client";

import { useRouter } from "next/navigation";
import Main from "../_component/Main";
import { useSession } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session?.user) {
    router.replace("/home");
    return null;
  }
  router.replace("/i/flow/login");

  return <Main />;
}

// ** router.push의 경우
// localhost:3001 -> localhost:3001/login -> localhost:3001/i/flow/login
// localhost:3001/i/flow/login 에서 뒤로가기 하면 localhost:3001/login,
// 결국 localhost:3001/login에서 또 localhost:3001/i/flow/login를 실행하는 문제, 빠져나올 수 없음

// ** router.replace의 경우
// localhost:3001 -> localhost:3001/login -> localhost:3001/i/flow/login
// localhost:3001/i/flow/login 에서 뒤로가기 하면 localhost:3001(로그인보다 더 이전으로 감)
