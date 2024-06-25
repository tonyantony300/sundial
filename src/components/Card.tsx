interface Props {
  color: string;
}

function Card(prop: Props) {
  const bgStyle = {
    backgroundColor: `${prop.color}`,
  };

  return (
    <div style={bgStyle} className="min-w-[300px] basis-1/3 grow">
      Hellow {prop.color}
    </div>
  );
}

export default Card;
