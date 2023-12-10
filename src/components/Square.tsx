function Square({ children, update, index, isSelected }: SquareProps) {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    if (typeof update !== 'undefined' && typeof index !== 'undefined') {
      update(index)
    }
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

export default Square