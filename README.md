# Kanban Board Project

## Overview

This project is a Kanban board application built with React and TypeScript. It allows users to manage tasks by adding, updating, and deleting them. Users can also export the tasks as a PDF file. The application uses `jsPDF` and `jspdf-autotable` for PDF generation and simulates backend operations with a local JSON file.

## Features

- **Task Management:** Add, update, and delete tasks.
- **Drag and Drop:** Drag tasks between different status columns.
- **PDF Export:** Export tasks as a PDF file with a table format.
- **TypeScript:** Ensures type safety and better development experience.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/kanban-project.git
    cd kanban-project
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm run dev
    ```

4. The application will be available at `http://localhost:3000`.

## Usage

- **Add Task:** Click on the "Add Task" button in any column to add a new task to that column.
- **Update Task:** Click on a task to edit its details and update its status.
- **Delete Task:** Click on the delete button on a task to remove it.
- **Drag and Drop:** Drag tasks between different columns to change their status.
- **Export as PDF:** Click on the "Download Tasks as PDF" button to export all tasks as a PDF file.

## Folder Structure

```plaintext
kanban-project/
├── public/
├── src/
│   ├── components/
│   │   ├── Kanban/
│   │   │   ├── AddTask.tsx
│   │   │   └── TaskCard.tsx
│   ├── utils/
│   │   └── data_task.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── db.json
├── package.json
├── tsconfig.json
└── README.md
