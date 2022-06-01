import Header from "./header";

export default function Layout({ children, user }) {
    console.log(user)
  return (
    <div>
      <Header user={user}></Header>
      {children}
    </div>
  );
}
