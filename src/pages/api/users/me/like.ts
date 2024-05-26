import { getAuth, clerkClient } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from "next";
import { likeBook, unlikeBook } from "@/db/usersQueries";
import { InsertUsers } from "@/db/schema";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(404).json({ message: "Only POST!" });
  }
  /* ge mig användar id finns det inte skicka felmeddelandet */
  const { userId } = getAuth(req);
  if (!userId) {
    return res.status(401).json({ message: "You need to compleat sign-up :)" });
  }

  const { bookID, isLiked } = req.body;

  if (isLiked) {
    await likeBook(userId, bookID);
  } else {
    await unlikeBook(userId, bookID);
  }


  res.status(200).json({ message: "Hello from Next POST" });
}
