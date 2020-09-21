import { useEffect, useState } from "react";

import { CgShoppingBag } from "react-icons/cg";

import styles from "./index.module.scss";
import { useAppSelector } from "../../../../../../app/hooks";

const CartIcon = () => {
  const { totalItems, status } = useAppSelector(
    (state) => state.cart
  );

  const [bump, setBump] = useState(false);
  const [initialQuantity, setInitialQuantity] = useState(0);

  useEffect(() => {
    // Load total quantity from local storage if available
    const storedQuantity = localStorage.getItem("totalQuantity");
    if (storedQuantity) {
      setInitialQuantity(parseInt(storedQuantity, 10));
    }
  }, []);

  const totalQuantity = totalItems || initialQuantity;

  const iconStyles = bump
    ? `${styles.bump} ${styles.cart_icon}`
    : styles.cart_icon;

  console.log(totalItems, status);
  // const totalQuantity = totalItems;
  const amountStyles =
    totalQuantity === 0 ? styles.no_items : styles.cart_amount;

  useEffect(() => {
    if (totalQuantity === 0) {
      return;
    } else {
      setBump(true);
    }

    const timer = setTimeout(() => {
      setBump(false);
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [totalQuantity]);

  return (
    <div className={iconStyles}>
      <CgShoppingBag className="text-black" />
      <div className={amountStyles}>
        <div>{totalQuantity}</div>
      </div>
    </div>
  );
};

export default CartIcon;
