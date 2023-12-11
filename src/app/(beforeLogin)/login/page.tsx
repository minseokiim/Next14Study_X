import { redirect } from "next/navigation";

// home에서 login으로 갔을때 /i/flow/login로 리다이렉트 됨

export default function Login() {
  redirect("/i/flow/login");
}
