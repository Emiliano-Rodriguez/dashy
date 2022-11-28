import { Client } from "twitter-api-sdk";
BEARER_TOKEN='AAAAAAAAAAAAAAAAAAAAABn2cgEAAAAA6E4axTcu%2BTzLRj8GX20EhjGXB7Y%3DZbSxuMeNzm8zvbbSyzgAt3ZMRg1fQU1gRdVpjVR60qX4o89ihS'

async function main() {
  const client = new Client(process.env.BEARER_TOKEN);

  const response = await client.tweets.tweetsRecentSearch();
  
  console.log("response", JSON.stringify(response, null, 2));
}
main();

