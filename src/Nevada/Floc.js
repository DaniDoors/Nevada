export function Floc({ floc }) {
  const style = {
    top: `${floc.x}%`,
    left: `${floc.y}%`,
    position: "absolute",
    fontSize: `${floc.mida * floc.mida * 200}%`,
    transform: `rotate(${floc.rotacioY}deg) rotateX(${floc.rotacioX}deg)`,
  };
  return <span style={style}>❆</span>;
}
