import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
//import KaKaoProvider from "next-auth/providers/kakao";
import { NextResponse } from "next/server";

export const {
  handlers: { GET, POST }, //api 라우트
  auth, //로그인 했는지 알아내는 용
  signIn, //로그인 하는 용
} = NextAuth({
  pages: {
    //직접 만든 로그인창 등록, 넥스트가 마련해준거 안쓸거니까
    signIn: "/i/flow/login",
    newUser: "/i/flow/signup",
  },

  //로그인 안했을때 홈 못들어가게 하는 방법 1.

  //   callbacks: {
  //     //세션검사했을때 세션이 없는 경우
  //     async authorized({ request, auth }) {
  //       const url = request.nextUrl;
  //       if (!auth) {
  //         return NextResponse.redirect(`http://localhost:3000/i/flow/login`);
  //       }
  //       return true;
  //     },
  //   },

  providers: [
    //CredentialsProvider : 기본적인 로그인 지원
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch(`${process.env.AUTH_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            //credentials안에 username, password는 고정
            id: credentials.username,
            password: credentials.password,
          }),
        });

        if (!authResponse.ok) {
          //로그인 실패
          return null;
        }

        const user = await authResponse.json();
        console.log("user", user);

        //지금 누가 로그인 했는지 가져오는 기능이 있는데 그때마다 여기서 리턴한 유저정보가 가져와짐
        return {
          email: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        };
      },
    }),
    //KakaoProvider()  카카오 로그인 추가
  ],
});
