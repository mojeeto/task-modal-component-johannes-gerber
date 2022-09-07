import { useState } from "react";
import TodoModal, { DataType } from "./components/TodoModal";


const initialData: DataType[] = [
  {
    id: 1,
    title: "trend and competiter analysis",
    category: "planning",
    isChecked: true,
  },
  {
    id: 2,
    title: "Best Practices/State of the Art Research",
    category: "planning",
    isChecked: true,
  },
  {
    id: 3,
    title: "Create Figma File",
    category: "planning",
    isChecked: false,
  },
  {
    id: 4,
    title: "Wireframes LF",
    category: "design",
    isChecked: false,
  },
  {
    id: 5,
    title: "Vistual Styles",
    category: "design",
    isChecked: false,
  },
  {
    id: 6,
    title: "Iconography",
    category: "design",
    isChecked: false,
  },
  {
    id: 7,
    title: "HF Interactive Prototype",
    category: "design",
    isChecked: false,
  },
  {
    id: 8,
    title: "Prepare Feedback Session",
    category: "design",
    isChecked: false,
  },
];

function App() {
  const [data, setData] = useState(initialData);

  const path = ["Project One", "Discovery", "In Progress", "#182"];

  return (
    <main className="flex items-center w-[100vw] h-[100vh] justify-center bg-[rgb(67,82,225)]">
      <TodoModal path={path} title="Sidebar Design Explorations" data={data} setter={setData} />
    </main>
  );
}

export default App;
