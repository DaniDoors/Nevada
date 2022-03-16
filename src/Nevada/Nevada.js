import { useEffect, useState } from "react";
import { FRAME_RATE } from "./constants";
import { crearFlocs } from "./crearFlocs";
import { Floc } from "./Floc";
import { moureFlocs } from "./moureFlocs";

export function Nevada() {
  const [flocs, setFlocs] = useState(crearFlocs);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setFlocs(moureFlocs);
    }, 1000 / FRAME_RATE);
    return () => clearInterval(intervalID);
  }, []);
  return (
    <>
      {flocs.map((floc, index) => (
        <>
          <Floc key={index} floc={floc} />
          <br />
        </>
      ))}
      <audio src="..//public/silentnight.mp3" autoplay></audio>
    </>
  );
}
