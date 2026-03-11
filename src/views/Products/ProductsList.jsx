import React, { useEffect } from "react";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import useToast from "../../hooks/useToast";
import { Service_url } from "../../../config/app.config";
import useAdminStore from "../../store/useAdminAuthentication";

const ProductsList = () => {
  const { token } = useAdminStore();
  const { data, loading, error, fetchDataGet } = useAxiosFetch();
  const { toastSuccess, toastError } = useToast();
  const callProductListing = async () => {
    try {
      const fetchResponse = await fetchDataGet(
        `${Service_url}/product/get-all-products`,
        token,
      );
      console.log(fetchResponse);
      //   toastSuccess(fetchResponse?.data?.message);
    } catch (error) {
      console.log(error);
      toastError(error?.data?.message);
    }
  };
  useEffect(() => {
    callProductListing();
  },[])
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th>Year</th>
          <th>Song</th>
          <th>Artist</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr>
          <td>Shining Star</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductsList;
