import TodoModalContextProvider from "components/TodoModalContext";
import { TaskDataType } from "components/Types";
import { initialData } from "initial-data";
import { useState } from "react";
import TodoModal from "./components/TodoModal";

function App() {
  const [data, setData] = useState<TaskDataType>(initialData);
  return (
    <main className="flex items-center w-[100vw] h-[100vh] justify-center bg-[rgb(67,82,225)]">
      <TodoModalContextProvider data={data} update={setData}>
        <TodoModal />
      </TodoModalContextProvider>
    </main>
  );
}

export default App;
