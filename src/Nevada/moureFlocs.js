import { FRAME_RATE } from "./constants";

let vent = 0;

export function moureFlocs(flocs) {
  vent = Math.min(
    2,
    Math.max(-2, vent + (20 / FRAME_RATE) * Math.random() - 0.5)
  );
  return flocs.map(moureFloc);
}

function moureFloc(floc) {
  const mida = floc.mida;
  let rotacio = floc.rotacioY + (10 / FRAME_RATE) * Math.abs(vent);
  rotacio = rotacio % 360;
  let rotacioX = floc.rotacioX + (10 / FRAME_RATE) * Math.abs(vent);
  rotacioX = rotacioX % 360;

  let friccioX = 1 - Math.abs((rotacioX - 180) / 90 - 1);
  let friccioY = 1 - Math.abs((rotacio - 180) / 90 - 1);

  const velocitatX = mida * (10 / FRAME_RATE) * Math.random() * (1 - friccioX);
  let x = floc.x + velocitatX;
  if (x > 98) x = -10;
  const velocitatY = mida * vent * (10 / FRAME_RATE) * Math.random() * friccioY;
  let y = floc.y + velocitatY;
  if (y > 110) y = -9;
  if (y < -10) y = 109;
  return { ...floc, x, y, rotacio, rotacioX };
}
