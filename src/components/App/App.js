import './assets/App.css'
import MenuHorizontal from './components/MenuHorizontal/MenuHorizontal'

export default function App() {
  return (
    <div className="app">
      <MenuHorizontal
      lista = {[ 
        <a href='/'>aaaaaaaaa</a>,
        <a href='/'>dos</a>,
        <a href='/'>tres</a>
      ]}
      />
    </div>
  )
}
