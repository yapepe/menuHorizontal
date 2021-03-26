# MenuHorizontal.js
Menu con lista de elementos dinamica
## Uso
MenuHorizontal.js recibe un array de compnentes HTML o JSX
``` js 
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

```