function RestartBtn({ title, reset }: RestartProps) {
  return (
    <button onClick={reset}>
      {title}
    </button>
  )
}

export default RestartBtn