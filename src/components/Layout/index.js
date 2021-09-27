import BaseStyles from "styles/globalStyles";

function Layout({ children }) {
  return (
    <>
      <BaseStyles />
      <div>{children}</div>
    </>
  );
}

export default Layout;
