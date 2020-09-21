import { useNavigate, useParams, useLocation } from "react-router";
import styles from "./index.module.scss";
import ProductCard from "../../components/components/ProductCard";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getCategory, getProducts, searchProducts } from "../../features/product/productSlice";
import { useEffect } from "react";
import { navData } from "../../data/navItems";
import Spinner from "../../components/components/Spinner";
import GoToTop from "../../components/components/GoToTop";
import Button from "../../components/components/Button";
import { MdArrowBack } from "react-icons/md";
import { ROUTES } from "../../constants/Route";

const Catalog = () => {
  let { id } = useParams();
  const location = useLocation();
  const { products, isLoading } = useAppSelector((state) => state.product);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("query");

    if (query) {
      dispatch(searchProducts(query));
      return;
    }

    if (!id) {
      const newUrl = window.location.pathname + "/All";
      window.history.pushState({ path: newUrl }, "", newUrl);

      id = "All";
    }

    const category = navData.find((item) => item.name === id?.toString());
    if (category?.value !== "all") {
      const pathUrl = ROUTES.find((item) => item.name.toLowerCase() === category?.value.toLowerCase());
      dispatch(getCategory(pathUrl.url.toLowerCase()));
    } else {
      dispatch(getProducts());
    }
  }, [id, location.search]);

  const convertedString = id
    ?.split("-")
    ?.map((word) => word?.charAt(0)?.toUpperCase() + word?.slice(1))
    ?.join(" ");

  if (isLoading) return <Spinner />;
  return (
    <div className={`${styles.container} main-container`}>
      <div className={styles.titleContainer}>
        <Button className={styles.iconContainer} onClick={() => navigate(-1)}>
          <MdArrowBack className={styles.icon} />
        </Button>
        <div className={styles.title}>{convertedString}</div>
      </div>
      <div className={styles.productList}>
        {products?.map((product, index) => {
          return (
            <ProductCard
              id={product.id}
              key={index}
              title={product.name}
              price={product.retailPrice}
              // category={product.category}
              // description={product.description}
              image={product.thumbnail_url}
            />
          );
        })}
      </div>
      <GoToTop />
    </div>
  );
};

export default Catalog;
