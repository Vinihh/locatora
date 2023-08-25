
import './index.scss';

function App() {
  return (
    <div className="pagina-home">
      <header>
        <div className='logo'>
          <img src='/assets/images/logo.png' />
          <div><h1>Elite</h1><h1>Wheelz</h1></div>
        </div>

        <div className='paginas'>

          <button>
            <img src='/assets/images/icon-home.svg' />
            <h1>Home</h1>
          </button>

          <button>
            <img src='/assets/images/icon-login.png' />
            <h1>Clientes</h1>
          </button>

          <button>
            <img src='/assets/images/icon-carro.png' />
            <h1>Veículos</h1>
          </button>

          <button>
            <img src='/assets/images/icon-chave.png' />
            <h1>Locação</h1>
          </button>

        </div>
      </header>

      <aside>
        <div className='msgm'>
          <h1> Olá, que bom que você voltou</h1>
        </div>
      </aside>

    </div>
  );
}

export default App;
