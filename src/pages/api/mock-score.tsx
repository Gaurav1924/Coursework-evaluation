import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const score = Math.floor(Math.random() * 1000 + 1);
  res.status(200).json({ score });
}
