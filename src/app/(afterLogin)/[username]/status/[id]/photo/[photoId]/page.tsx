import Home from "@/app/(afterLogin)/home/page";

//모달 뒤 배경
type Props = {
  params: { username: string; id: string; photoId: string };
};
export default function Page({ params }: Props) {
  //params를 받을 수 있음
  //params에 들어있는 정보:slug(ex. [username]들의 값을 가져올 수 있음)
  params.username; // elonmusk
  params.id; // 1
  params.photoId; // 1
  return <Home />;
}
