import Encabezado from './components/Encabezado'
import Perfil from './components/Perfil'
import Mensaje from './components/Mensaje'

function App() {
  return (
    <main>
      <Encabezado />
      <Perfil
        nombre="Jacobo"
        programa="Desarrollo de Software"
        ciudad="Medellín"
      />
      <Mensaje mensaje="Bienvenido a React" />
    </main>
  )
}

export default App
