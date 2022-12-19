import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import useSubscription from "../hooks/useSubscription";
import { goToBillingPortal } from "../lib/stripe";
import Loader from "./Loader";

function Membership() {
  const { user } = useAuth();
  const subscription = useSubscription(user);
  const [isBillingLoading, setBillingLoading] = useState(false);

  const manageSubscription = () => {
    if (subscription) {
      setBillingLoading(true);
      goToBillingPortal()
    }
  };

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
      <div className="space-y-2 py-4">
        <h4 className="text-lg">
          Membership and Billing
          <button
            disabled={isBillingLoading || !subscription}
            className="h-10 w-3/5 whitespace-nowrap bg-red-600 py-2 text-sm font-medium text-black shadow-md hover:bg-red-700 md:w-4/5"
            onClick={manageSubscription}
          >
            {isBillingLoading ? <Loader /> : "Modify Plan"}
          </button>
        </h4>
      </div>
      <div className="col-span-3 ">
        <div>
          <div>
            <p>{user?.email}</p>
            <p>Password: *********</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Membership;
