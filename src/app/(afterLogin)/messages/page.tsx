import { faker } from "@faker-js/faker";
import style from "./message.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.locale("ko");
dayjs.extend(relativeTime);

function Room() {
  const user = {
    id: "hero",
    nickname: "영웅",
    Messages: [
      {
        content: "안녕하세요",
        createdAt: new Date(),
      },
      {
        content: "안녕하세요 22",
        createdAt: new Date(),
      },
    ],
  };

  return (
    <div className={style.room}>
      <div className={style.roomUserImage}>
        <img src={faker.image.avatar()} alt="" />
      </div>
      <div className={style.roomChatInfo}>
        <div className={style.roomUserInfo}>
          <b>{user.nickname}</b>&nbsp;
          <span>@{user.id}</span>&nbsp;
          <span className={style.postDate}>
            {dayjs(user.Messages?.at(-1)?.createdAt).fromNow(true)}
          </span>
        </div>
        <div className={style.roomLastChat}>
          {user.Messages?.at(-1)?.content}
          {/* at으로 마지막꺼 가져올 수 있음  */}
        </div>
      </div>
    </div>
  );
}

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
