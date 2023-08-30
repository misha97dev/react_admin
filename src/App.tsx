import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/main/home/Home";
import Login from "./pages/login/Login";
import Products from "./pages/lists/products/Products";
import Users from "./pages/lists/users/Users";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Profile from "./pages/main/profile/Profile";
import Orders from "./pages/lists/orders/Orders";
import Posts from "./pages/lists/posts/Posts";
import Spinner from "./components/spinner/Spinner";
import Error from "./components/error/Error";
import { useSelector } from "react-redux";
import UserInfo from "./pages/lists/users/user-info/UserInfo";

function App() {
  const Layout = () => {
    return (
      <div className="flex flex-col min-h-[100vh]">
        <Header />
        <div className="flex grow">
          <Sidebar />
          <div className="w-full p-4">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "main", element: <Home /> },
        { path: "main/profile", element: <Profile /> },
        {
          path: "/lists",
          children: [
            { path: "users", element: <Users /> },
            { path: "users/:id", element: <UserInfo /> },
            { path: "products", element: <Products /> },
            { path: "orders", element: <Orders /> },
            { path: "posts", element: <Posts /> },
          ],
        },
      ],
    },
    { path: "login", element: <Login /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
