
interface Props { 
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    <>
    {score}
    </>
  )
}

export default CriticScore