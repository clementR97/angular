# 📸 Snapface - Angular Project

Snapface is a learning project built with **Angular** to practice and master the core concepts of modern web development.  
The goal is to create an application where users can view and interact with "snaps" (posts with images, text, and likes).

---

## 📌 Features

- Structure the app with **pages and components**  
- Use **Angular Control Flow** (`@if`, `@for`, etc.) for dynamic rendering  
- Modify how data is displayed with **Pipes** (date, uppercase, custom pipes, etc.)  
- Improve app structure with **Services** (data management, business logic)  
- Implement **Routing** for navigation between pages  

---

## 🛠️ Tech Stack

- **Angular** (latest version)  
- **TypeScript**  
- **RxJS**  
- **HTML / CSS**  

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/clementR97/angular.git
cd snapface
npm install
ng serve
```
The app will be available at 👉 http://localhost:4200

## 🚀 Key Angular Concepts Used

✅ Components
Split the UI into reusable components (SnapListComponent, SnapCardComponent, etc.).

✅ Control Flow
Use Angular structural directives like @for, @if, and @else to display lists and conditionally render content.

✅ Pipes
Built-in pipes: date, uppercase, slice...
Custom pipes to format snap data (e.g., likes count).

✅ Services
Centralized data management with Angular services.
Example: SnapService provides snaps and manages likes.

✅ Routing
Use RouterModule to navigate between pages (Home, Snap Details, etc.).
Dynamic routes: snaps/:id


## 📖 Example
```bash
Snap Model (TypeScript)
export interface Snap {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: Date;
  snaps: number;
}
```

