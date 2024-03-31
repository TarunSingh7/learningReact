import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

function App() {
  const response = [
    {
      itemName: "nirma",
      itemDate: "20",
      itemMonth: "June",
      itemyear: "1998",
    },
    {
      itemName: "nirma2",
      itemDate: "26",
      itemMonth: "august",
      itemyear: "1911",
    },
    {
      itemName: "nirma3",
      itemDate: "25",
      itemMonth: "July",
      itemyear: "1921",
    },
  ];
  return (
    <div>
      <Item name={response[0].itemName}></Item>
      <ItemDate
        day={response[0].itemDate}
        month={response[0].itemMonth}
        year={response[0].itemyear}
      ></ItemDate>
      <Item name={response[1].itemName}></Item>
      <ItemDate
        day={response[1].itemDate}
        month={response[1].itemMonth}
        year={response[1].itemyear}
      ></ItemDate>
      <Item name={response[2].itemName}></Item>
      <ItemDate
        day={response[2].itemDate}
        month={response[2].itemMonth}
        year={response[2].itemyear}
      ></ItemDate>
      <div className="App">
        <header className="App-header">
          <h1>Hello React from king side</h1>
        </header>
      </div>
    </div>
  );
}

export default App;
