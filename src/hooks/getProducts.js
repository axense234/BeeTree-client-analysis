import axios from "axios";
import { BeehiveRoute } from "../api/api";

const getProducts = async (setLoading, setProducts, limit) => {
  try {
    setLoading(true);
    const { data } = await axios.get(BeehiveRoute);

    setProducts(data.getallhives.slice(0, limit || data.getallhives.length));

    setLoading(false);
  } catch (error) {
    setLoading(false);
  }
};

export default getProducts;
