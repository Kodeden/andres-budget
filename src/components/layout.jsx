import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <h1 className="my-6 text-center text-2xl">The Budget App 💸</h1>
      <Outlet />
    </>
  );
}
