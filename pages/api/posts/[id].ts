import { NextApiRequest, NextApiResponse } from "next";
import { getPostData } from "../../../lib/posts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;
  const postData = await getPostData(id);
  res.status(200).json(postData);
}
