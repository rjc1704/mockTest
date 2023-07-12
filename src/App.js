import logo from "./logo.svg";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios
      .post("http://3.38.191.164/register", {
        id: "idddd",
        password: "1234567",
      })
      .then(() => {
        console.log("회원가입 성공");
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, []);
  return <div>테스트</div>;
}

export default App;
