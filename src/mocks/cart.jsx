import axios from "axios";

class CartApi {
  async addToCart(data) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/userapp/cart/create`,
        data,
        { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessTokenBookWorld")}` } }
      );

      if (response.status === 200) {
        return response.data;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async findAllCart(data) {
    let product = {
        "query":data?.query,
        "options": {
          "collation": "",
          "sort": data?.sort,
          "populate": data?.populate,
          "projection": "",
          "lean": false,
          "leanWithId": true,
          "page": data?.page,
          "limit": data?.limit,
          "pagination": true,
          "useEstimatedCount": false,
          "useCustomCountFn": false,
          "forceCountFn": false,
          "read": {},
          "options": {}
        },
        "isCountOnly": false};
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/userapp/cart/list`,
        product,
        { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessTokenBookWorld")}` } }
      );

      if (response.status === 200) {
        return response.data;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCart(data) {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/userapp/cart/delete/${data.id}`,
        { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessTokenBookWorld")}` } }
      );

      if (response.status === 200) {
        return response.data;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
  
}

export const cartApi = new CartApi();
