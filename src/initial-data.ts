import { TaskDataType } from "components/Types";
import MojeetoAvatar from "mojeeto.png";
import JohannesGerberAvatar from "johannese_gerber.jpg.webp";

export const initialData: TaskDataType = {
  title: "Sidebar Design Explorations",
  path: ["Project One", "Discovery", "In Progress", "#182"],
  allTasks: 8,
  tasks: {
    "task-1": {
      id: "task-1",
      title: "trend and competiter analysis",
      category: "planning",
      isChecked: true,
    },
    "task-2": {
      id: "task-2",
      title: "Best Practices/State of the Art Research",
      category: "planning",
      isChecked: true,
    },
    "task-3": {
      id: "task-3",
      title: "Create Figma File",
      category: "planning",
      isChecked: false,
    },
    "task-4": {
      id: "task-4",
      title: "Wireframes LF",
      category: "design",
      isChecked: false,
    },
    "task-5": {
      id: "task-5",
      title: "Vistual Styles",
      category: "design",
      isChecked: false,
    },
    "task-6": {
      id: "task-6",
      title: "Iconography",
      category: "design",
      isChecked: false,
    },
    "task-7": {
      id: "task-7",
      title: "HF Interactive Prototype",
      category: "design",
      isChecked: false,
    },
    "task-8": {
      id: "task-8",
      title: "Prepare Feedback Session",
      category: "design",
      isChecked: false,
    },
  },
  columns: {
    planning: {
      id: "planning",
      title: "Planning",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    design: {
      id: "design",
      title: "Design",
      taskIds: ["task-4", "task-5", "task-6", "task-7", "task-8"],
    },
  },
  columnsOrder: ["planning", "design"],
  comments: [
    {
      commentId: 0,
      username: "mojeeto",
      imageSrc: MojeetoAvatar,
      comment: "Just found [this here, https://dribbble.com/shots/17165930/attachments/12265742?mode=media] on dribbble as a project. Thought it could be good exercise for Web Developing.",
      time: "Yesterday • 4:29 pm",
      reacts: [
        {
          emoji: "🔥",
          count: 5,
        },
        {
          emoji: "❤️",
          count: 2,
        },
      ],
      pickerShow: false,
    }, {
      commentId: 1,
      username: "johannesgerber",
      imageSrc: JohannesGerberAvatar,
      comment: "I don't know what can i say about this.",
      time: "Today • 26 min",
      reacts: [
        {
          emoji: "🔥",
          count: 0,
        }],
      pickerShow: false,
    },
  ],
};
