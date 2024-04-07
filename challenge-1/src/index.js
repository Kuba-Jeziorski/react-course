import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skillsArray = [
  {
    color: "yellow",
    name: "JavaScript",
    level: "advance",
    id: "1",
  },
  {
    color: "red",
    name: "HTML + CSS",
    level: "advance",
    id: "2",
  },
  {
    color: "green",
    name: "VueJS",
    level: "beginner",
    id: "3",
  },
  {
    color: "blue",
    name: "TypeScript",
    level: "intermediate",
    id: "4",
  },
  {
    color: "lightblue",
    name: "Wordpress",
    level: "beginner",
    id: "5",
  },
];

console.log(skillsArray);

function Avatar({ imgLink, imgAlt }) {
  return <img src={imgLink} alt={imgAlt}></img>;
}

function Details({ name, info }) {
  return (
    <div className="details">
      <h1>{name}</h1>
      <p>{info}</p>
    </div>
  );
}

function Skill({ color, name, level }) {
  const emojis = {
    beginner: "\u{1F513}",
    intermediate: "\u{1F517}",
    advance: "\u{1F507}",
  };

  return (
    <li className="skill" style={{ background: color }}>
      <p>{name}</p>
      <p>{level}</p>
      <span>{emojis[level]}</span>
    </li>
  );
}

function Skills({ propsArr }) {
  return (
    <ul className="skills">
      {propsArr.map((singleSkill) => (
        <Skill
          key={singleSkill.id}
          color={singleSkill.color}
          name={singleSkill.name}
          level={singleSkill.level}
        />
      ))}
    </ul>
  );
}

function Card() {
  return (
    <div className="card">
      <Avatar imgLink="dog.jpg" imgAlt="dog" />
      <Details
        name="Kuba Jeziorski"
        info="Junior front-end developer. I know CSS, SCSS, JS, TS and basics of Vue and React. I'm mostly focused on developing my WordPress skills."
      />
      <Skills propsArr={skillsArray} />
    </div>
  );
}

function App() {
  return <Card />;
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
