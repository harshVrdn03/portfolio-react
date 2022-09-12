import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { DiJavascript1, DiReact } from "react-icons/di";

const ProductData = [
  {
    icon: [
      <AiFillHtml5 />,
      <DiCss3 />,
      <DiJavascript1 />,
      <DiReact />,
      <SiTailwindcss />,
    ],
    title: "Simple web calculator built with React",
    des: "This is a simple Calculator example. I introduce the Stateful Component, which are defined using a class and make it easier to keep track of the application state provided component.",
    img: "./images/calculator.png",
  },
  {
    icon: [
      <AiFillHtml5 />,
      <DiCss3 />,
      <DiJavascript1 />,
      <DiReact />,
      <SiTailwindcss />,
    ],
    title: "Build a Tic-Tac-Toe game with React Hooks",
    des: "Tic-Tac-Toe is one of the oldest and most popular board games in the world. In this , we will build a Tic-Tac-Toe game from scratch using React Hooks, learning how to program a computer to play against us.",
    img: "./images/tictactoe.png",
  },
  {
    icon: [
      <AiFillHtml5 />,
      <DiCss3 />,
      <DiJavascript1 />,
      <DiReact />,
      <SiTailwindcss />,
    ],
    title: "Build a notes app with React",
    des: "In this , we will learn how to create a notes app in React and integrate the app with localStorage. The main functions of our app will include creating a note, setting a character limit, deleting notes",
    img: "./images/notes.png",
  },
];

export { ProductData };
