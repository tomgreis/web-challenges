import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: "1337",
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: "6853",
      name: "🥝 Kiwi",
      color: "green",
    },
    {
      id: "4321",
      name: "🍎 Apple",
      color: "red",
    },
  ];

  return (
    <div className="app">
      {/* <Card name="🍌 banana" /> */}
      {fruits.map((fruit) => {
        return (
          <li key={fruit.id}>
            <Card name={fruit.name} id={fruit.id} color={fruit.color} />
          </li>
        );
      })}
    </div>
  );
}
