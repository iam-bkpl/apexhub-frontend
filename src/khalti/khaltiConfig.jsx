import KhaltiCheckout from "khalti-checkout-web";

import { postPaymentConform } from "../redux/actions/ashop";


import { useDispatch } from "react-redux";
import axios from "axios";

let config = {
  // replace this key with yours
  publicKey: "test_public_key_c03d2254185943d5814502684631c9ca",
  productIdentity: "1234567890",
  productName: "bSatya",
  productUrl: "http://gameofthrones.com/buy/Dragons",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication
      console.log("Payment successful");
      console.log(payload);

      let data = {
        token: payload.token,
        amount: payload.amount,
      };


      axios
        .post("http://localhost:8000/api/ashop/verify-payment/", data)
        .then((response) => {
          console.log(response.data);
          alert("Payment Successful: Thank You!");
        })
        .catch((error) => {
          console.log(error);
        });

      // axios
      //   .post("http://localhost:8000/api/ashop/verify-payment/", data)
      //   .then((response) => {
      //     console.log(response.data);
      //     alert("Payment Successful: Thank You!");
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });

    },
    // onError handler is optional
    onError(error) {
      // handle errors
      console.log("Payment failed");
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

export default config;
