import './app.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">

      <h1 className='app-title'>Список Задач</h1>

      <TodoList />

    </div>
  );
}

export default App;
