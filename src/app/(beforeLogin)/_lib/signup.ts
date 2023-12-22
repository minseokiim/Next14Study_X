"use server";
// 서버 액션이니까
import { redirect } from "next/navigation";

export default async (prevState: any, formData: FormData) => {
  //검증 먼저!
  if (!formData.get('id') || !(formData.get('id') as string)?.trim()) {
    return { message: 'no_id' };
  }
  if (!formData.get('name') || !(formData.get('name') as string)?.trim()) {
    return { message: 'no_name' };
  }
  if (!formData.get('password') || !(formData.get('password') as string)?.trim()) {
    return { message: 'no_password' };
  }
  if (!formData.get("image")) {
    return { message: "no_image" }; //이 메세지들은 클라이언트 컴포넌트에서 보여줘야함
  }

  let shouldRedirect = false;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "post",
        body: formData,
        credentials: "include", //이게 있어야 쿠키가 전달이 됨
      }
    );
    console.log(response.status);

    //서버에서의 문제
    if (response.status === 403) {
      return { message: "user_exists" };
    }

    console.log(await response.json());
    shouldRedirect = true;
  } catch (err) {
    console.error(err);
    return;
  }
  if (shouldRedirect) {
    redirect("/home"); //redirect는 try-catch문 안에서 쓰면 안됨!!
  }
};
