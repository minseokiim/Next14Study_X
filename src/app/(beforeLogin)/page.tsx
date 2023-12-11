import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import zLogo from "/public/zlogo.png";

// 서버 실행하면 뜨는 페이지
// 페러렐 라우트를 위해 이동
export default function Home() {
  return (
    <>
      <div className={styles.left}>
        <Image src={zLogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정만들기
        </Link>
        <h3>이미 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          {/* /i/flow/login이 아닌 이유: 트위터 들어가보면 twitter/login에서 /i/flow/login으로 변경되는거 확인 가능  */}
          계정만들기
        </Link>
      </div>
    </>
  );
}
