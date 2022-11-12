interface BearProps {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
}

export const Bear: React.FC<BearProps> = ({
  bears,
  increasePopulation,
  removeAllBears,
}) => {
  return (
    <>
      <div>Bear counter: {bears}</div>
      <button onClick={increasePopulation}>Add bear</button>
      <button onClick={removeAllBears}>Rip bears</button>
    </>
  )
}
