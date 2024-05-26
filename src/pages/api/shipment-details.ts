import { getAuth, clerkClient } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "@/db/usersQueries";
import { InsertUsers } from "@/db/schema";

type ResponseData = {
  message: string;
};

const validateBody = ({
  res,
  req,
}: {
  res: NextApiResponse;
  req: NextApiRequest;
}) => {
  const { fullName, address, postalCode, city, country, phone } = req.body;

  if (fullName === "" || !fullName) {
    return { isValid: false, message: "Full name can't be empty" };
  }
  if (address === "" || !address) {
    return { isValid: false, message: "address can't be empty " };
  }
  if (postalCode === "" || !postalCode) {
    return { isValid: false, message: "postalCode can't be empty " };
  }
  if (city === "" || !city) {
    return { isValid: false, message: "city can't be empty " };
  }
  if (country === "" || !country) {
    return { isValid: false, message: "country can't be empty " };
  }
  if (typeof phone === "number" || !phone) {
    return { isValid: false, message: "phone can't be empty " };
  }

  return { isValid: true };
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

  /* Här sätter jag upp validering för body att information stämmer innan jag går vidare  */
  const { isValid, message } = validateBody({ req, res });
  if (!isValid) {
    return res.status(400).json({ message: message || "" });
  }

  try {
    const res = await clerkClient.users.updateUser(userId, {
      publicMetadata: {
        onboardingComplete: true,
      },
    });

    const [emailObject] = res?.emailAddresses
    const { emailAddress } = emailObject;

    const user: InsertUsers = {
        ID: userId,
        email: emailAddress,
        ...req.body
    }

    //skapa användaren till din databas
    await createUser(user);

    console.log("RES FROM CLERK: ", emailAddress);
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }


  res.status(200).json({ message: "Hello from Next POST" });
}
