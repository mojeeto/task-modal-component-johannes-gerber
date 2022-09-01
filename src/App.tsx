import TodoModal from './components/TodoModal';

function App() {
  const path = ["Project One", "Discovery", "In Progress", "#182"];

  return (
    <main className="flex items-center w-[100vw] h-[100vh] justify-center bg-[rgb(67,82,225)]">
      <TodoModal path={path} title="Sidebar Design Explorations" />
    </main>
  );
}

export default App;
