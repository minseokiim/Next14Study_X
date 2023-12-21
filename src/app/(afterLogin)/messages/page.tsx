import { faker } from "@faker-js/faker";
import style from "./message.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import  Room  from "./_component/Room";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <h3>쪽지</h3>
      </div>
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
    </main>
  );
}
