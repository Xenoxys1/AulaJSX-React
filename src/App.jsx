import "./index.css";
import { Button, Card, List } from "./components/card";

export function App() {
  return (
    <>
      <h1 id="plaque">MAIS VANTAJOSO</h1>
      <div className="frame">
        <Card description="PARA VOCÊ DECOLAR" title="Ultimate" price="29,97" />
        <Button title="Assinar agora" />
        <hr />
        <List
          item1="Usuários ilimitados"
          item2="Suporte 24/7"
          item3="CSM Dedicado"
          item4="Treinamentos"
        />
      </div>
    </>
  );
}
