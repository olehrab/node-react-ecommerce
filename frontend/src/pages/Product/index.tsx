import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSingleProduct } from "../../features/product/productSlice";
import styles from "./index.module.scss";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";
import { CartItem } from "../../types/cart";
import GoToTop from "../../components/components/GoToTop";
import Spinner from "../../components/components/Spinner";

const Product = () => {
  const { product, isLoading } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const [isLoadingProduct, setIsLoadingProduct] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [availableColors, setAvailableColors] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    if (id) {
      dispatch(getSingleProduct(Number(id)));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (product && product.sync_variants && product.sync_variants.length > 0) {
      setSelectedVariant(product.sync_variants[0]);
      const sizes = product.sync_variants.map((variant) => variant.size);
      setAvailableSizes([...new Set(sizes)]);
      const colors = product.sync_variants.map((variant) => variant.color);
      setAvailableColors([...new Set(colors)]);
      setSelectedSize(product.sync_variants[0].size);
      setSelectedColor(product.sync_variants[0].color);
    }
  }, [product]);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    const variant = product.sync_variants.find(v => v.size === size && v.color === selectedColor);
    if (variant) {
      setSelectedVariant(variant);
    }
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    const variant = product.sync_variants.find(v => v.color === color && v.size === selectedSize);
    if (variant) {
      setSelectedVariant(variant);
    }
  };

  const addToCartHandler = () => {
    setIsLoadingProduct(true);
    if (product && selectedVariant) {
      const previewFile = selectedVariant.files ? selectedVariant.files.find(file => file.type === 'preview') : null;
      const cartProduct: CartItem = {
        quantity: 1,
        product: {
          id: selectedVariant.id,
          name: selectedVariant.name,
          price: selectedVariant.retail_price,
          thumbnail_url: previewFile ? previewFile.preview_url : "",
          size: selectedVariant.size,
        },
      };
      dispatch(addToCart(cartProduct)).then(() => {
        setIsLoadingProduct(false);
      });
    }
  };

  const route = [
    { name: "Home", route: "/" },
    { name: "Products", route: "/catalog/All" },
    { name: "Product Details", route: `/products/${id}` },
  ];

  if (isLoading) return <Spinner />;

  return (
    <section className={styles.section}>
      <div className={`${styles.container} main-container`}>
        <p className={styles.section_title_bottom}>
          {route?.map((item, index) => (
            <Link to={item.route} key={index}>
              {item.name}
              {index < 2 && <span>&nbsp;&gt;&nbsp;</span>}
            </Link>
          ))}
        </p>
        {selectedVariant && (
          <div className={styles.productContainer}>
            <div className={styles.productImageContainer}>
              {selectedVariant.files && selectedVariant.files.length > 0 && selectedVariant.files.find(file => file.type === 'preview') ? (
                <img
                  src={selectedVariant.files.find(file => file.type === 'preview').preview_url}
                  className={styles.image}
                  alt={selectedVariant.name}
                />
              ) : (
                <img
                  src="/default-image.png"
                  className={styles.image}
                  alt="No preview available"
                />
              )}
            </div>
            <div className={styles.productDetailsContainer}>
              <div className={styles.titleContainer}>
                <div className={styles.title}>{product.name}</div>
              </div>
              <div className={styles.sizeColorContainer}>
                <div className={styles.sizeContainer}>
                  <div className={styles.title}>Size:</div>
                  <div className={styles.categories}>
                    <div className={styles.buttonContainer}>
                      {availableSizes.map((size) => (
                        <div className={styles.button} key={size}>
                          <input
                            type="radio"
                            id={size}
                            name="size"
                            onChange={() => handleSizeSelection(size)}
                            checked={selectedSize === size}
                          />
                          <label className="btn btn-default" htmlFor={size}>
                            {size}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.colorContainer}>
                  <div className={styles.title}>Color:</div>
                  <div className={styles.categories}>
                    <div className={styles.buttonContainer}>
                      {availableColors.map((color) => {
                        const variant = product.sync_variants.find(v => v.color === color);
                        const colorThumbnail = variant && variant.files && variant.files.find(file => file.type === 'preview') ? variant.files.find(file => file.type === 'preview').thumbnail_url : null;

                        return (
                          <div className={styles.button} key={color}>
                            <input
                              type="radio"
                              id={color}
                              name="color"
                              onChange={() => handleColorSelection(color)}
                              checked={selectedColor === color}
                            />
                            <label className="btn btn-default" htmlFor={color}>
                              {colorThumbnail ? (
                                <img
                                  src={colorThumbnail}
                                  alt={color}
                                  className={styles.colorThumbnail}
                                />
                              ) : (
                                color
                              )}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.priceContainer}>
                <div className={styles.title}>Price:</div>
                <div className={styles.price}>${selectedVariant.retail_price}</div>
              </div>
              <div className={styles.addToCartContainer}>
                <div
                  className={styles.addToCart}
                  onClick={addToCartHandler}
                >
                  {isLoadingProduct ? (
                    <Spinner className={"addToCartSm"} />
                  ) : (
                    "Add to Cart"
                  )}
                </div>
                <Link to={`/catalog/All`} className={styles.continueShopping}>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <GoToTop />
    </section>
  );
};

export default Product;
