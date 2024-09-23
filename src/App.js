import { useEffect, useState } from "react";
import "./App.css";

function App(){
  const [temp, setTemp] = useState("");
  const  [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  //Change URL only when the user changes the input
  useEffect(() => {
    setQrCode('http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}');
  }, [word, size, bgColor]);
}