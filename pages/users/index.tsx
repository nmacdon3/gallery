import { useGetUsers } from "../api/users";

export default function Home() {
  const { data } = useGetUsers();

  return <div>{data?.map((user) => user.name)}</div>;
}
