import "./styles.css";
import {
  BsEmojiHeartEyesFill,
  BsEmojiAngry,
  BsEmojiExpressionless,
  BsEmojiSmile
} from "react-icons/bs";

const set = ["smile", "angry", "bored", "lovely"];
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="text" id="searchbar" />
      <br />

      <button onClick={() => meth(set[0])}>
        <BsEmojiHeartEyesFill />
      </button>
      <button onClick={() => meth(set[1])}>
        <BsEmojiAngry />
      </button>
      <button onClick={() => meth(set[2])}>
        <BsEmojiExpressionless />
      </button>
      <button onClick={() => meth(set[3])}>
        <BsEmojiSmile />
      </button>
    </div>
  );
}

function meth(value) {
  document.getElementById("searchbar").value = value;
}
