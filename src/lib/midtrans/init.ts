import midtransClient from "midtrans-client";

if (!process.env.MIDTRANS_SERVER_KEY) {
  console.log("env is unset");
  console.log(process.env.MIDTRANS_SERVER_KEY);
  throw new Error("Midtrans server key is undefined");
}

export const snap = new midtransClient.Snap({
  isProduction: false,
  //serverKey: process.env.MIDTRANS_SERVER_KEY,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
});

// export const core = new midtransClient.CoreApi({
//   isProduction: false,
//   serverKey: "YOUR_SERVER_KEY",
//   clientKey: "YOUR_CLIENT_KEY",
// });
