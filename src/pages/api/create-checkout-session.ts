import type { NextApiRequest, NextApiResponse } from "next";
import stripe from "../../utils/stripe_init";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions
        .create({
          mode: "subscription",
          line_items: [
            {
              price_data: {
                unit_amount: 5000,
                currency: "usd",
                product_data: { name: "Split" },
                recurring: {
                  interval: "month",
                },
              },

              // For metered billing, do not pass quantity
              quantity: 1,
            },
          ],
          success_url: "/dashboard/home",
        })
        .catch((err: any) => {
          res.redirect("/dashboard/home");
        });
      if (session) {
        res.redirect(303, session.url as string);
      } else {
        res.redirect("/dashboard/home");
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
