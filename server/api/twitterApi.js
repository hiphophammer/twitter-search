import axios from "axios";
import dotenv from "dotenv";
import crypto from "crypto";

import express from "express";

const app = new express();
app.use(express.json());
dotenv.config();

const consumerKey = process.env.TWITTER_CONSUMER_KEY;
const consumerSecret = process.env.TWITTER_CONSUMER_SECRET;
const accessToken = process.env.TWITTER_ACCESS_TOKEN;
const accessSecret = process.env.TWITTER_ACCESS_SECRET;
const oauthSigningKey = `${consumerSecret}&${accessSecret}`;

const GetNonce = () => {
  return Date.now().valueOf();
};

const toArray = (object) => {
  let array = [];
  Object.keys(object).forEach((key) => {
    array.push(`${key}=${object[key]}`);
  });
  return array;
};

const populateAuthorization = () => {
  const toArray = (object) => {
    let array = [];
    Object.keys(object).forEach((key) => {
      array.push(`${key}=${object[key]}`);
    });
    return array;
  };

  obj = {};
  obj.oauth_consumer_key = consumerKey;
  obj.oauth_token = accessToken;

  return `OAuth `;
};

export const GetTwitterOAuthToken = async () => {
  const endpointUrl = "https://api.twitter.com/oauth/request_token";

  // this object will be sent in the axios call with the url
  // Authorization {} must be populated before proceeding to the axios call
  const headerObj = {
    UserAgent: "Hiphophammer's Twitter App",
    Host: "api.twitter.com",
    Accept: "*/*",
    Authorization: populateAuthorization(),
  };

  const authorizationObject = {};

  // /** A string object for the request token api call.
  //  *
  //  * See: https://developer.twitter.com/en/docs/authentication/api-reference/request_token
  //  */
  // const authObj = {};
  // authObj.oauth_consumer_key = encodeURIComponent(consumerKey);
  // authObj.oauth_signature_method = encodeURIComponent("HMAC-SHA256");
  // authObj.oauth_timestamp = Math.round(new Date().getTime() / 1000);
  // authObj.oauth_nonce = GetNonce();
  // authObj.oauth_version = encodeURIComponent("1.0");
  // //POST&https%3A%2F%2Fapi.twitter.com%2Foauth%2Frequest_token&oauth_consumer_key%3D8Tz7P7uPKkrd8Bfnzb9N5zMYH%26oauth_nonce%3DNUJNTnExa1Zjdm94TWdPRWt4NlJZaG9hOVhYVUM1MGU%253D%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D1667826822%26oauth_token%3D738293807125434368-XACFUD81Y9ykvePNRy0gx8KE1GAfWFa%26oauth_version%3D1.0
  // const oauthParameterString = toArray(authObj).join("&");
  // const baseString = `POST&${encodeURIComponent(
  //   endpointUrl
  // )}&${oauthParameterString}`;
  // const hmac = crypto.createHmac("sha256", oauthSigningKey);
  // const oauthSignature = hmac.update(baseString).digest("base64");
  // authObj.oauth_signature = encodeURIComponent(oauthSignature);
  // const callbackLink = "http://localhost:8000";
  // const config = {
  //   Authorization: `OAuth ${toArray(authObj).join(", ")}`,
  // };
  // const link = `https://api.twitter.com/oauth/request_token?oauth_consumer_key=${encodeURIComponent(
  //   consumerKey
  // )}&oauth_signature_method=HMAC-SHA256&oauth_timestamp=${Math.round(
  //   new Date().getTime() / 1000
  // )}&oauth_nonce=${GetNonce()}&oauth_version=1.0&oauth_signature=${encodeURIComponent(
  //   oauthSignature
  // )}`;
  // console.log(link);
  // try {
  //   const res = await axios.post(link, { Accept: "*/*" });
  //   console.log(res.headers);
  // } catch (err) {
  //   console.log(`Error! Status: ${err}`);
  // }
  // // console.log(res.headers);
  // // console.log(`Status: ${res.status}`);
};
