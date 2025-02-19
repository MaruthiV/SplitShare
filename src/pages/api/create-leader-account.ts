import type { NextApiRequest, NextApiResponse } from "next";
import stripe from "../../utils/stripe_init";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST" && req.headers.origin != undefined) {
    try {
      const account = await stripe.accounts
        .create({ type: "standard" })
        .catch((err: any) => {
          res.status(500);
        });
      if (account) {
        const accountLink = await stripe.accountLinks.create({
          account: account.id,
          refresh_url: `${req.headers.origin}/?success=true`,
          return_url: `${req.headers.origin}/?success=true`,
          type: "account_onboarding",
        });
        res.redirect(303, accountLink.url);
      }
    } catch (err: any) {
      res.status(500);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");

    //need to add a success and fail page
    res.redirect("/dashboard/home");
  }
}
