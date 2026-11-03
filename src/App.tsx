import { useEffect, useState } from "react";
import type { Telefon_type } from "./Models/Types/Telefon.type";
import { Lista } from "./Components/Lista/Lista";
import type { Lista_type } from "./Models/Types/Lista.type";
import { Rendezes } from "./Components/Rendezes/Rendezes";

export const App = function () {
  const [telefonok, setTelefonok] = useState<Telefon_type[]>(JSON.parse(
    localStorage.getItem("telefonok") || "[]"
  ));
  const [betoltes, setBetoltes] = useState<boolean>(false);
  const [novekvo, setNovekvo] = useState<Lista_type["novekvo"]>(localStorage.getItem("novekvo") || "semleges");
  const [rendezes, setRendezes] = useState<boolean>(Number(localStorage.getItem("rendezes")) == 1 ? true : false);

  useEffect(() => {
    const loadData = async function () {
      try {
        setBetoltes(false)
        console.log("teszt")
        const content = await fetch("phones.json");
        const data = await content.json()
        localStorage.setItem("telefonok", JSON.stringify(data));
        localStorage.setItem("rendezetlenTelefonok", JSON.stringify(data));
        setTelefonok(data)
        setBetoltes(true)
      } catch (err: Error | any) {
        throw new Error(err);
      };
    };
    loadData()
  }, []);

  useEffect(() => {
    if (!betoltes) return
    localStorage.setItem("novekvo", novekvo);
    setTelefonok((elozoTelefonok) => {
      if (novekvo == "semleges") {
        return (JSON.parse(localStorage.getItem("rendezetlenTelefonok") || "[]"))
      }
      else {
        return [...elozoTelefonok].sort((a, b) => novekvo == "asc" ? a.nev.localeCompare(b.nev) : b.nev.localeCompare(a.nev))
      }
    })
    localStorage.setItem("telefonok", JSON.stringify(telefonok));
  }, [novekvo, betoltes])

  useEffect(() => {
    localStorage.setItem("rendezes", rendezes == true ? "1" : "0")
  }, [rendezes])

  const changeOrder = function (order: Lista_type["novekvo"]) {
    setNovekvo(order);
  };

  const changeRendezes = function (rendezesBool: boolean) {
    if (!rendezesBool) {
      changeOrder("semleges")
    }
    setRendezes(rendezesBool);
  }
  if (betoltes) {
    return (
      <>
        <Rendezes changeOrder={changeOrder} novekvo={novekvo} rendezes={rendezes} changeRendezes={changeRendezes}></Rendezes>
        <Lista telefonok={telefonok} novekvo={novekvo}></Lista>
      </>
    )
  } else {
    return (
      <>
        <h1>Nem toltott meg be</h1>
      </>
    )
  }
};