export default function CategoryFilter({ setFilter }) {
  return (
    <div className="filter-container">
      {['All', 'Work', 'Personal', 'Study'].map(cat => (
        <button key={cat} onClick={() => setFilter(cat)}>{cat}</button>
      ))}
    </div>
  )
}
