// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import useSWR from "swr";

export interface User {
  name: string;
  role: "Boss" | "Not a Boss";
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  res.status(200).json([
    { name: "John Doe", role: "Boss" },
    { name: "Jerry", role: "Not a Boss" },
  ]);
}

export function useGetUsers() {
  return useSWR<User[]>("/api/users", () =>
    fetch("/api/users").then((r) => r.json())
  );
}
