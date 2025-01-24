const FooterComponent = () => {
  const name = "Chilumula Nithin."
  return (
    <footer>
      <div className="fixed inset-x-0 bottom-14">
        <p className="flex flex-wrap justify-center">
          <span className="mr-2">Developed By </span>
          <a
            className="font-bold"
            href="https://github.com/nithin077"
            target="_blank"
            rel="noopener"
          >
            {name}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
