import React from "react";
import Button from "../../components/Button/Button";
import styles from "./CartTotal.module.scss";
import { Link } from "react-router-dom";

const CartTotal = () => {
  return (
    <>
      <div className={styles["cart-total-section"]}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th
                scope="col"
                colSpan="2"
                className={`text-center text-uppercase ${styles["cart-total-heading"]}`}
              >
                Cart Total
              </th>
            </tr>
          </thead>
          <tbody className={styles["cart-total"]}>
            <tr>
              <th scope="row">Subtotal:</th>
              <td className="text-end">$568</td>
            </tr>
            <tr>
              <th scope="row">Discount:</th>
              <td className="text-end">$68</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Total:</th>
              <td className="text-end">$500</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="text-end">
        <Button round>
          <Link to="/Checkout">Checkout</Link>
        </Button>
      </div>
    </>
  );
};

export default CartTotal;
