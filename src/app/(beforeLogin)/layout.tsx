import { ReactNode } from "react";
import styles from "@/app/(beforeLogin)/_component/main.module.css";

type Props = { children: ReactNode; modal: ReactNode };
// 페러렐 라우트를 위해 생성
export default async function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}

//주소가 localhost:3000일때는 children은 page.tsx, modal은 @modal/default.tsx
//주소가 localhost:3000/i/flow/login일때는 children은 i/flow/login/page.tsx, modal은 @modal/i/flow/login/page.tsx
