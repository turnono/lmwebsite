import { https, config } from "firebase-functions";
import { createTransport } from "nodemailer";
// import {
//     firestore,
// } from "firebase-admin";
// import * as cors from "cors";
// import { Md5 } from "ts-md5/dist/md5";
// import { lookup } from "dns";
// import * as axios from "axios";
// import { stringify } from "querystring";

// import * as serviceAccount from "../alfawzaanstore-firebase-adminsdk-v8fgq-4a1c4a724c.json";
//
// initializeApp({
//     credential: credential.cert(serviceAccount as ServiceAccount),
//     databaseURL: "https://alfawzaanstore.firebaseio.com"
// });

// const validHosts = [
//     "www.payfast.co.za",
//     "sandbox.payfast.co.za",
//     "w1w.payfast.co.za",
//     "w2w.payfast.co.za"
// ];

// cors({ origin: true });

const transporter = createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // use SSL
    auth: {
        user: config().zoho.lmusername,
        pass: config().zoho.lmpass
    }
});

export const sendMail = https.onRequest((req, response) => {
    response.sendStatus(200);
    console.log("body: ", req.body);

    const dest = req.body.email_address;

    const mailOptions = {
        from: "Learning Muslim ®  <support@learningmuslim.com>",
        to: dest,
        subject: "Registration Successful", // email subject
        html: `
<div style="font-size: 16px">
<img style="height: 60px; position: absolute !important; right: 1px !important;" src="https://www.learningmuslim.com/assets/img/LMlogo%20320.png" />

                 <p style="color: black; font-size: 16px;">السّلام عليكم و رحمة الله و بركاته</p>
                <p style="color: black;"> Dear ${req.body.name_first} </p>
                <p style="color: black;"> Congratulations, your registration is your first step with us on this profound journey of understanding the Qur'aan.
                    We guarantee that you will not be disappointed.
                </p>
                 <p style="color: black;">
                    You can now access your class by visiting https://classroom.google.com/ and then joining by using this code <strong style="font-size: 22px">ai6jn4o</strong>.
                 </p>
                 <p style="color: black;">
                    Jazaakallahu Khairan
                 </p>
</div>

            `
    };

    // returning result
    transporter.sendMail(mailOptions, (error, info) => {
        console.log("im here: ", { error }, { info });
        error ? response.send(error.toString()) : response.send("Sended");
    });

    // const { custom_str1, amount_gross, pf_payment_id, payment_status } = req.body;
    // const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    // let amount: number;
    // const cart: Partial<Cart> = {};
    // let processed = 0;
    // const cartCollection = firestore().doc("carts/" + custom_str1);
    // cart.PFPaymentId = pf_payment_id;
    // cart.PFPaymentStatus = payment_status;
    //
    // checkIfDataIsValid(req.body)
    //     .then(x =>
    //         x.data === "Invalid"
    //             ? die("Invalid data returned")
    //             : (cart.PFDataIsValid = true)
    //     )
    //     .catch(console.log);
    //
    // // check if signatures match
    // if (checkSignature(req.body)) {
    //     cart.PFSignatureValid = true;
    // } else {
    //     die("invalid signature");
    // }
    //
    // // check if ip is included in valid-ips list
    // checkValidHost()
    //     .then(x => {
    //         if (x && !x.includes(ip)) {
    //             die("invalid ip");
    //         } else {
    //             cart.PFValidHost = true;
    //         }
    //     })
    //     .catch();
    //
    // if (payment_status === "COMPLETE") {
    //     // If complete, update your application
    //
    //     cartCollection
    //         .get()
    //         .then((cartData: FirebaseFirestore.DocumentData) => {
    //             const cartFromDB: Cart = cartData.data();
    //             const productsArray = Object.values(cartFromDB.products);
    //
    //             if (cartFromDB.products && productsArray.length !== 0) {
    //                 amount = transform(productsArray);
    //                 if (
    //                     Math.trunc(amount) === Math.trunc(amount_gross) ||
    //                     Math.trunc(amount) === Math.trunc(amount_gross) - 200
    //                 ) {
    //                     cart.PFAmountMatched = true;
    //                 } else {
    //                     die("amount mismatch");
    //                 }
    //
    //                 productsArray.forEach((product: OrderedProduct) => {
    //                     product.state = 4;
    //                     product.updatedAt = firestore.Timestamp.now();
    //
    //                     const products = {
    //                         [`${product.productId}`]: product
    //                     };
    //
    //                     const prodArr = Object.values(products);
    //                     const deliveryProducts: {
    //                         [productId: number]: {
    //                             quantity: number;
    //                         };
    //                     } = {};
    //                     let processed2 = 0;
    //
    //                     processed++;
    //
    //                     if (processed === productsArray.length) {
    //                         cart.products = products;
    //                         cartCollection.set(cart, { merge: true }).catch(console.log);
    //
    //                         if (!cartFromDB.PFPaymentId) {
    //                             firestore()
    //                                 .doc("completedCarts/" + pf_payment_id)
    //                                 .create(cart)
    //                                 .catch(console.log);
    //
    //                             prodArr.forEach(prod => {
    //                                 deliveryProducts[prod.productId] = {
    //                                     quantity: prod.quantity
    //                                 };
    //                                 processed2++;
    //
    //                                 if (processed2 === prodArr.length) {
    //                                     const order: Partial<Order> = {
    //                                         uid: custom_str1,
    //                                         createdAt: firestore.Timestamp.now(),
    //                                         delivered: false,
    //                                         deliveryAddress:
    //                                             cartFromDB.deliveryAddress || ({} as Address),
    //                                         products: deliveryProducts
    //                                     };
    //
    //                                     firestore()
    //                                         .collection("orders")
    //                                         .add(order)
    //                                         .catch(console.log);
    //                                 }
    //                             });
    //                         }
    //                     }
    //                 });
    //             }
    //         })
    //         .catch(console.log);
    // } else {
    //     // If unknown status, do nothing (which is the safest course of action)
    // }
});

// const checkSignature = (
//     values: { [s: string]: string }
//     // url: string
// ) => {
//     const oldSign = values["signature"];
//     const valuesArray = Object.values(values);
//     const newValuesArray = valuesArray.map(x => formatString(x));
//     const keysArray = Object.keys(values);
//     const numberOfKeys = keysArray.length;
//     const pfOutput = createOutputString(newValuesArray, keysArray, numberOfKeys);
//     const signatureValue = Md5.hashStr(pfOutput) as string;
//     console.log({ signatureValue });
//     console.log({ oldSign });
//     return signatureValue === oldSign;
// };
//
// const checkIfDataIsValid = (values: any) => {
//     return axios.default.post(
//         "https://sandbox.payfast.co.za/eng/query/validate",
//         stringify(values),
//         {
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded"
//             }
//         }
//     );
// };
//
// const checkValidHost = (): Promise<any> => {
//     const validIps: any[] = [];
//     return new Promise(resolve => {
//         lookup(validHosts[0], { all: true }, (err1, addresses1) => {
//             validIps.push(...addresses1.map(address => address.address));
//             lookup(validHosts[1], { all: true }, (err2, addresses2) => {
//                 validIps.push(...addresses2.map(address => address.address));
//                 lookup(validHosts[2], { all: true }, (err3, addresses3) => {
//                     validIps.push(...addresses3.map(address => address.address));
//                     lookup(validHosts[3], { all: true }, (err4, addresses4) => {
//                         validIps.push(...addresses4.map(address => address.address));
//                         resolve(validIps);
//                     });
//                 });
//             });
//         });
//     });
// };
//
// const createOutputString = (
//     values: string[],
//     keys: string[],
//     length: number
// ) => {
//     let pfOutput = "";
//     keys.forEach((key, index) => {
//         if (key !== "signature") {
//             pfOutput +=
//                 key +
//                 "=" +
//                 encodeURIComponent(values[index]) +
//                 (length - 1 === index ? "" : "&");
//         }
//     });
//
//     const pfOutputFinal = pfOutput
//         .replace(/%2B/g, "+")
//         .replace(/%20/g, "+")
//         .replace(/.$/, "");
//
//     // console.log(pfOutputFinal);
//     // console.log({ md5: Md5.hashStr(pfOutputFinal) });
//
//     return pfOutputFinal;
// };
//
// const formatString = (str: string) => {
//     const trim = str.trim();
//     // const replaced = trim.replace(/ /g, "+");
//     return trim;
// };
//
// const transform = (value: { price: number; quantity: number }[]): number => {
//     const val = Number(
//         value.reduce((x, y) => x + y.price * y.quantity, 0).toFixed(2)
//     );
//     // console.log("amount: ", val);
//
//     return val;
// };
//
// const die = (errMsg: string) => {
//     if (errMsg) console.error(errMsg);
//     process.exit(1);
// };
