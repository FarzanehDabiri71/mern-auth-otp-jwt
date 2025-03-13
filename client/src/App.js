import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// root routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Root Route</div>,
  },
  {
    path: "/register",
    element: <div>Register Route</div>,
  },
]);
function App() {
  return (
    <main className="text-3xl text-red-700">
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
