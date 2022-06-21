import axios from 'axios';

var catalog = [
    {
        _id: "5f40a6baac77a903d8f682c6",
        price: 25,
        stock: 13,
        title: "Chaga",
        image: "chaga.webp",
        discount: 5,
        category: "mushrooms",
      },
      {
        _id: "5f40a6ba41d9e5044ced586c",
        price: 25,
        stock: 21,
        title: "Reshi",
        image: "reshi.jpeg",
        discount: 10,
        category: "mushrooms",
      },
      {
        _id: "5f40a6baa9e6e22fa1d5fac4",
        price: 25,
        stock: 20,
        title: "Lion's mane",
        image: "lionsmane.webp",
        discount: 0,
        category: "mushrooms",
      },
      {
        _id: "5f40a6baac77a903d8f682c9",
        price: 25,
        stock: 13,
        title: "Turkettail",
        image: "Turkeytail.jpeg",
        discount: 5,
        category: "mushrooms",
      },
      {
        _id: "5f40a6ba41d9e5044ced5860",
        price: 25,
        stock: 21,
        title: "Maitake",
        image: "maitake.jpeg",
        discount: 10,
        category: "mushrooms",
      },
      {
        _id: "5f40a6baa9e6e22fa1d5fac5",
        price: 25.0,
        stock: 20,
        title: "Morel",
        image: "morel.jpeg",
        discount: 0,
        category: "mushrooms",
      },
      {
        _id: "5f40a6baac77a903d8f682",
        price: 20,
        stock: 13,
        title: "Shiitake",
        image: "Shiitake.jpeg",
        discount: 5,
        category: "mushrooms",
      },
      {
        _id: "5f40a6ba41d9e5044ced586",
        price: 25,
        stock: 21,
        title: "Cordyceps",
        image: "cordyceps.jpeg",
        discount: 10,
        category: "mushrooms",
      },
      {
        _id: "5f40a6baa9e6e22fa1d5fac48",
        price: 25,
        stock: 20,
        title: "Agarikon",
        image: "agarikon.png",
        discount: 0,
        category: "mushrooms",
      },
      {
        _id: "5f40a6baa9e6e22fa1d5fac4d",
        price: 60,
        stock: 20,
        title: "Golden Teacher",
        image: "goldenteacher.jpeg",
        discount: 0,
        category: "mushrooms",
      }
    ]


    class DataService{
      async getCatalog(){
        // get data from server
        let response = await axios.get("http://127.0.0.1:5000/api/catalog")
        let data = response.data;
        return data;

        //some instr
        //retrieve data from the actual server
        //return catalog;
      }

      async saveProduct(product) {
        let response = await axios.post("http://127.0.0.1:5000/api/catalog", product);
        return response.data;
      }

      //get coupons
      async getCoupons() {
        let response = await axios.get("http://127.0.0.1:5000/api/coupons");
        return response.data;
      }

      async saveCoupon(coupon) {
        let response = await axios.post("http://127.0.0.1:5000/api/coupons", coupon);
        return response.data;
      }
    }
    export default DataService;