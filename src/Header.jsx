function Header({ title }) {
  return (
    <div>
      <h1 className=".header-title">{title}</h1>
      <p>Welcome To the Task Manager</p>
      <hr />
    </div>
  );
}
export default Header;
