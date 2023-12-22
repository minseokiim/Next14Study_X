import { auth } from "@/auth";
import Main from "./_component/Main";
import { redirect } from "next/navigation";

// 서버 실행하면 뜨는 페이지
// 페러렐 라우트를 위해 이동
export default async function Home() {
  const session = await auth(); //useSession의 서버버전이라고 생각하기
 if(session?.user){
  redirect('/home');
  return null;
 }
  return <Main />;
}
