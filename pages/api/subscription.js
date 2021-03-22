// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";

export function getFilePath() {
  return path.join(process.cwd(), "data", "subscriptions.json");
}
export function extractSubscriptions(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.mail;
    const newSubscription = {
      id: new Date().toISOString(),
      mail: email,
    };
    // Store subscriptions in data/subscriptions.json file
    const filePath = getFilePath();
    const data = extractSubscriptions(filePath);
    data.push(newSubscription);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({
      message: "Subscription Completed Successfully",
      data: newSubscription,
    });
  } else {
    const filePath = getFilePath();
    const data = extractSubscriptions(filePath);
    res.status(200).json({ subscribers: data });
  }
}
export default handler;
