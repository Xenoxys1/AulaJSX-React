import "./index.css";
import {
  Button,
  ButtonSecond,
  Card,
  CardSecond,
  CardThird,
  List,
  ListSecond,
} from "./components/card";
import check from "./img/check.png";
import info from "./img/info.svg";

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

      <div className="frame2">
        <CardSecond
          description="PARA VOCÊ COMEÇAR"
          title="Essentials"
          price="19,97"
        />
        <ButtonSecond title="Assinar agora" />
        <hr id="hr2" />
        <div id="organize1">
          <ListSecond item1="Até 3 usuários" item2="Autoatendimento" />
          <div id="infoColumn1">
            <img src={info} alt="Info" />
            <img src={info} alt="Info" />
          </div>
        </div>
      </div>

      <div className="frame3">
        <CardThird description="PARA SUA EMPRESA" title="Enterprise" price="" />
        <ButtonSecond title="Fale com a gente" />
        <hr id="hr2" />
        <div id="enterpriseDesc">
          <img src={check} alt="Checkmark" />
          <p id="info">
            Plano customizado especialmente para a necessidade do seu negócio
          </p>
        </div>
      </div>
    </>
  );
}
