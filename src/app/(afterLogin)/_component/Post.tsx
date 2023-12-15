import style from "./post.module.css";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";
import Image from "next/image";
import PostArticle from "./PostArticle";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Post() {
  const target = {
    postId: 1,
    User: {
      id: "elonmusk",
      nickname: "Elon Musk",
      image: "/yRsRRjGO.jpg",
    },
    content: "넥스트 공부",
    createdAt: new Date(),
    Images: [],
  };
  return (
    // 서버 컴포넌트였는데 이 부분만 클라이언트 컴포넌트로 변경이라서 따로 분리해줌

    // 부모(PostArticle)는 클라이언트 컴포넌트인데, 자식은 서버컴포넌트가 됨
    // 부모인 클라이언트 컴포넌트의 children으로 넣어주기
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          <div className={style.postImageSection}></div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
