import { auth } from "./auth";
import { NextResponse } from "next/server";

//로그인 안했을때 홈 못들어가게 하는 방법 2.
export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect("http://localhost:3000/i/flow/login");
  }
}

export const config = {
  // 로그인 해야지 접근하는 페이지들, 미들웨어 적용할 목록
  // 미들웨어는 넥스트에서 공식적으로 제공하는 기능
  matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
};
