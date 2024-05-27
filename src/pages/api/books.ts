import { getAuth, clerkClient } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from "next";
import { addBookForSale } from "@/db/booksQueries";
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

  const { body } = req;

  const bookResponse = await addBookForSale({
    ...body,
    sellerUserID: userId
  })

  console.log(bookResponse)


  res.status(200).json({ message: "Hello from Next POST" });
}
