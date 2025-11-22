 export interface LessonInterface {
  id: number;
  title: string;
  description: string;
  status: "done" | "active" | "disabled";
}
