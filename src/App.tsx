import * as React from "react";
import "./App.css";

export default function App() {
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string>("");
  const [color, setColor] = React.useState<string>("red");
  const [text, setText] = React.useState<string>("");
  const [gender, setGender] = React.useState<string>("");

  const clearForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setName("");
    setAge("");
    setColor("");
    setText("");
    setGender("");
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setText(
      `${name} isgit  ${age} years old, and ${
        gender === "male" ? "he" : "she"
      } likes ${color} color.`
    );
  };

  return (
    <div className="pa-16">
      <form onSubmit={submitForm}>
        <Input name="Name" value={name} onChange={setName} />
        <GenderSelector name="Gender" value={gender} onChange={setGender} />
        <Input name="Age" value={age} onChange={setAge} />
        <Select name="Favourite Color" value={color} onChange={setColor} />
        <button type="submit" className="btn-primary mb-16">
          Submit
        </button>
        <button className="btn-secondary" onClick={clearForm}>
          Clear
        </button>
      </form>
      <br />
      {text}
    </div>
  );
}

type InputType = {
  name: string;
  value: string;
  onChange: (val: string) => void;
};

const Input = ({ value, onChange, name }: InputType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

const Select = ({ value, onChange, name }: InputType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="red">Red</option>
        <option value="pink">Pink</option>
      </select>
    </div>
  );
};

const GenderSelector = ({ value, onChange, name }: InputType) => {
  const genders = ["male", "female"];
  const code = genders.map((v) => (
    <div>
      <input
        type="radio"
        name="{name}"
        value={v}
        checked={v === value}
        onChange={(e) => onChange(v)}
      />
      <label htmlFor="{name}">{v}</label>
    </div>
  ));
  return (
    <div className="mb-16">
      <label>{name}</label>
      {code}
    </div>
  );
};
