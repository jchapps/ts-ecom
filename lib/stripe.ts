import {
  createCheckoutSession,
  getStripePayments,
} from "@stripe/firestore-stripe-payments";
import { getFunctions, httpsCallable } from "@firebase/functions";
import app from "../firebase";

const payments = getStripePayments(app, {
  productsCollection: "products",
  customersCollection: "customers",
});

const loadCheckout = async (priceId: string) => {
  await createCheckoutSession(payments, {
    price: priceId,
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  })
    .then((snapshot) => window.location.assign(snapshot.url))
    .catch((error) => console.log(error.message));
};

const goToBillingPortal = async () => {
  const instance = getFunctions(app, 'us-central1') //gives instance of  cloud functions
  const functionRef = httpsCallable(
    instance,
    'ext-firestore-stripe-payments-createPortalLink'
  ) //returns a url to redirect the customer to payment portal

  await functionRef({
    returnUrl: `${window.location.origin}/account`, //gets the domain - localhost or domain name
  })
    .then(({ data }: any) => window.location.assign(data.url)) //assign = navigate to the url
    .catch((error) => console.log(error.message))
}


export { loadCheckout, goToBillingPortal };
export default payments;
