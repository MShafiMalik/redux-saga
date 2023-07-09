import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Count from "./components/Count";
import Form from "./components/Form";
import { apiCall } from "./redux/actions/apiCallActions";

function App() {
  // let products = [
  //   {
  //     product_name: "The Witchers",
  //     type: "book",
  //     manufactured: new Date("2019-05-13"),
  //     price: 800,
  //   },
  //   {
  //     product_name: "Black Heels",
  //     type: "Shoes",
  //     manufactured: new Date("2021-07-06"),
  //     price: 2500,
  //   },
  //   {
  //     product_name: "Skybags",
  //     type: "Bags",
  //     manufactured: new Date("2020-09-22"),
  //     price: 2200,
  //   },
  //   {
  //     product_name: "OnePlus 9",
  //     type: "Mobile Phone",
  //     manufactured: new Date("2021-03-23"),
  //     price: 49000,
  //   },
  // ];

  // let sortedProducts = products.sort((p1, p2) => p2.price - p1.price);

  const dispatch = useDispatch();

  const apiData = useSelector((state) => state.apiCallReducer);

  return (
    <div className="contain">
      <Count />
      <Form />

      <div style={{ marginTop: "30px" }}>
        <p>{JSON.stringify(apiData)}</p>
        <button onClick={() => dispatch(apiCall())}>Call API</button>
      </div>
    </div>
  );
}

export default App;
