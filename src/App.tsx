import { useEffect, useState } from "react";
import type { Telefon_type } from "./Models/Types/Telefon.type";
import { Lista } from "./Components/Lista/Lista";

export const App = function () {
  const [telefonok, setTelefonok] = useState<Telefon_type[]>(JSON.parse(
    localStorage.getItem("telefonok") || "[]"
  ));

  useEffect(() => {
    const loadData = async function () {
      try {
        const content = await fetch("phones.json");
        const data = await content.json()
        localStorage.setItem("telefonok", JSON.stringify(data));
        setTelefonok(data)
      } catch (err : Error | any) {
        throw new Error(err);
      };
    };
    loadData()
  }, []);

  return (
    <>
      <Lista telefonok={telefonok}></Lista>
    </>
  )
};