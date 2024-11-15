export function Footer(props) {
  const { handleAddTodo, handleHireMichael } = props;
  const currentYear = new Date().getFullYear();
  const cta = "Need help managing your tasks?  ";

  return (
    <footer className="footer content">
      <p>
        Made with ❤️ by <span className="text-gradient">Michael D Mwai</span>{" "}
        &copy; {currentYear}
      </p>
      <p>
        {cta}
        <a
          href="mailto:michaeldmwai@gmail.com"
          className="footer-link"
          onClick={handleHireMichael}
        >
          Add "Hire Michael" to your to-do list!
        </a>
      </p>
    </footer>
  );
}
