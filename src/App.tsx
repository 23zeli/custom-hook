import  ItemList from './components/ItemList'
import ThemeToggle from './components/theme-toggle'

const App = () => {
  return (
    <div>
      <ItemList />
      <ThemeToggle />

      <button className="bg-black text-white py-3 px-5">
        Reset
      </button>
    </div>
  )
}

export default App