import "./styles.css";

export function Card({ description, title, price }) {
  return (
    <div className="cardTitle">
      <p id="label">{description}</p>

      <div>
        <h1 id="plan">{title}</h1>
        <span id="price">
          R$ <strong>{price}/mês</strong>
        </span>
      </div>
    </div>
  );
}

export function CardSecond({ description, title, price }) {
  return (
    <div className="cardTitle">
      <p id="label">{description}</p>

      <div>
        <h1 id="plan2">{title}</h1>
        <span id="price2">
          R$ <strong>{price}/mês</strong>
        </span>
      </div>
    </div>
  );
}

export function CardThird({ description, title}) {
  return (
    <div className="cardTitle">
      <p id="label">{description}</p>

      <div>
        <h1 id="plan2">{title}</h1>
      </div>
    </div>
  );
}

export function Button({ title }) {
  return (
    <button type="Button" className="sign">
      {title}
    </button>
  );
}

export function ButtonSecond({ title }) {
  return (
    <button type="Button" className="sign2">
      {title}
    </button>
  );
}

export function List({ item1, item2, item3, item4 }) {
  return (
    <ul className="list">
      <li>{item1}</li>
      <li>{item2}</li>
      <li>{item3}</li>
      <li>{item4}</li>
    </ul>
  );
}

export function ListSecond({ item1, item2 }) {
  return (
    <ul className="list">
      <li>{item1}</li>
      <li>{item2}</li>
    </ul>
  );
}
