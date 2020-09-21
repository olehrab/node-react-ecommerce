import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./index.module.scss";
import Button from "../../components/components/Button";
import {
  cartReset,
  incrementItemFromCart,
  reduceItemFromCart,
  removeItemFromCart,
} from "../../features/cart/cartSlice";
import { MdArrowBack, MdCheck, MdDelete } from "react-icons/md";
import { BiPurchaseTag } from "react-icons/bi";
import { TbTruckReturn } from "react-icons/tb";
import Spinner from "../../components/components/Spinner";
import axios from "axios";

const Cart = () => {
  const { cartItems, isLoading } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((a, c) => a + c.quantity * c.product.price, 0);

  const handlePlaceOrder = async () => {
    try {
      const response = await axios.post("http://localhost:8765/payment/pay", {
        items: cartItems,
        total: totalPrice,
      });
      
      if (response.status === 200) {
        // Redirect to PayPal
        window.location.href = response.data.url;
  
        // Call printful/orders endpoint
        await axios.post("http://localhost:8765/printful/orders", {
          items: cartItems,
          total: totalPrice,
        });
  
      } else {
        // Handle non-200 responses
        console.error("Order placement failed", response.data);
      }
    } catch (error) {
      // Handle error responses
      console.error("Order placement error", error);
    }
  };
  

  if (isLoading) return <Spinner />;

  return (
    <section className={styles.section}>
      <div className={`${styles.container} main-container`}>
        <div className={styles.titleContainer}>
          <Button className={styles.iconContainer} onClick={() => navigate(-1)}>
            <MdArrowBack className={styles.icon} />
          </Button>
          <div className={styles.title}>Shopping Bag</div>
        </div>
        {cartItems.length ? (
          <div className={styles.content}>
            <div className={styles.cartLeft}>
              <div className={styles.emptyCart} onClick={() => dispatch(cartReset())}>
                Empty Cart
              </div>
              {cartItems.map((item) => (
                <div className={styles.cartCardWrapper} key={item.product.id}>
                  <Link to={`/products/${item.product.id}`} className={styles.cartCardContainer}>
                    <img
                      src={item.product.thumbnail_url}
                      className={styles.cartCardImage}
                      alt={item.product.name}
                    />
                    <div className={styles.cartCardDetails}>
                      <div className={styles.cartCardLeft}>
                        <div className={styles.title}>{item.product.name}</div>
                        <div className={styles.size}>Size: {item.product.size}</div>
                        <div className={styles.price}>${item.product.price}</div>
                        <div className={styles.return}>
                          <div className={styles.iconContainer}>
                            <TbTruckReturn className={styles.icon} />
                          </div>
                          <div className={styles.title}>14 days return available</div>
                        </div>
                        <div className={styles.delivery}>
                          <div className={styles.iconContainer}>
                            <MdCheck className={styles.icon} />
                          </div>
                          <div className={styles.title}>Delivery by 2 days</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className={styles.cartCardRight}>
                    <div className={styles.cartCardRightWrapper}>
                      <Button
                        className={styles.button}
                        onClick={() => dispatch(reduceItemFromCart(item.product))}
                      >
                        -
                      </Button>
                      <div className={styles.counter}>{item.quantity}</div>
                      <Button
                        className={styles.button}
                        onClick={() => dispatch(incrementItemFromCart(item.product))}
                      >
                        +
                      </Button>
                    </div>
                    <Button
                      className={styles.cartCardDelete}
                      onClick={() => dispatch(removeItemFromCart(item.product.id))}
                    >
                      <MdDelete className={styles.icon} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.cartRight}>
              <div className={styles.coupon}>
                <div className={styles.title}>Coupons</div>
                <div className={styles.couponContent}>
                  <div className={styles.iconContainer}>
                    <BiPurchaseTag className={styles.icon} />
                  </div>
                  <div className={styles.title}>Apply Coupons</div>
                  <Button className={styles.button}>Apply</Button>
                </div>
              </div>
              <div className={styles.priceDetails}>
                <div className={styles.title}>Price Details</div>
                <div className={styles.priceContent}>
                  <div className={styles.title}>Total MRP</div>
                  <div className={styles.price}>{totalPrice.toFixed(2)}</div>
                </div>
                <div className={styles.priceContent}>
                  <div className={styles.title}>Platform Fee</div>
                  <div className={styles.price}>FREE</div>
                </div>
                <div className={styles.priceContent}>
                  <div className={styles.title}>Shipping Fee</div>
                  <div className={styles.price}>FREE</div>
                </div>
              </div>
              <div className={styles.totalContent}>
                <div className={styles.title}>Total Amount</div>
                <div className={styles.price}>{totalPrice.toFixed(2)}</div>
              </div>
              <Button className={styles.button} onClick={handlePlaceOrder}>
                Place Order
              </Button>
            </div>
          </div>
        ) : (
          <div className={styles.noCartItems}>No Items Here</div>
        )}
      </div>
    </section>
  );
};

export default Cart;