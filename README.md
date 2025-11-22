
# Course Journey – Interactive Learning Path

This project provides an interactive course journey map built with modern frontend technologies. It visualizes lessons on a dynamic, responsive map and includes knowledge area tabs, lesson details, and a lesson modal. The layout is fully responsive and optimized for both desktop and mobile.

---

##  Features

### **Course Journey Map**
A dynamically rendered SVG map that visualizes the user's learning progression.

### **Lesson Nodes**
Each lesson appears as a node and supports several states:
- **Done**
- **Active**
- **Disabled**

### **Adaptive SVG Path**
A live-updating path that automatically connects lesson nodes based on their coordinates and adapts to screen size changes.

### **Knowledge Area Tabs**
Tabs for switching between knowledge categories. Fully scrollable on smaller screens.

### **Lesson Modal**
A modal showing detailed lesson information, including:
- Description  
- Title  
- Status  
- Start button  

### **Modern Tech Stack**
Built using:
- **Next.js**
- **Tailwind CSS**
- **shadcn/ui**
- **TypeScript**

---

##  Project Installation

### **1. Clone the repository**
git clone https://github.com/Donya-Ahmed/Animated-Course-Journey-Map.git
### **2. open folder**
cd Animated-Course-Journey-Map
### **3.  Install shadcn/ui (if not already initialized in your environment)**
npx shadcn@latest init
### **4. Add required shadcn/ui components**
npx shadcn@latest add card button dialog separator
### **5. Start the development server**
npm run dev
### **6. Open your browser at:**

👉 http://localhost:3000

##  How It Works
Lesson Coordinates

Each lesson includes x and y percent-based coordinates that represent its position relative to the map container.

Dynamic Path Rendering

The SVG path is generated using an L-shaped connection logic:

Move to the first lesson

Draw to the midpoint

Continue to the next lesson

The path updates in real time whenever the container size changes.

Interactive Lesson Modal

Clicking a lesson opens a modal

Users can read lesson details

A callback fires when the user clicks “Start Lesson”

##  Available Scripts

| Command        | Description               |
|----------------|---------------------------|
| `npm run dev`  | Start development server  |
| `npm run build`| Create production build   |
| `npm run start`| Run production server     |
| `npm run lint` | Run ESLint                |

## Technology Overview

| Tool         | Purpose                     |
|--------------|------------------------------|
| Next.js      | Main application framework   |
| Tailwind CSS | Utility-first styling        |
| shadcn/ui    | Reusable UI components       |
| TypeScript   | Static type system           |

## Responsive Design

This project is fully responsive. On smaller screens:
- **Lesson details** appear above the map  
- The **map becomes full-width**  
- **Knowledge tabs** become horizontally scrollable  

##   Project Structure
```bash
src/
  app/
  components/
    CourseJourney/
    CourseJourney.tsx
    LessonNode.tsx
    LessonModal.tsx
    LessonInfo.tsx
    KnowledgeTabs.tsx
    ui/
      card.tsx
      typography.tsx
  api/
    LessonData.ts
    KnowledgeData.ts

```
