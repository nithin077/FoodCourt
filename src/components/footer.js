const FooterComponent = () => {
  const name = "Chilumula Nithin.";
  return (
    <footer>
      <div className="px-4">
        <div className="w-full h-0.5 bg-lightGrey mt-24"></div>
        <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto mt-10 mb-12 justify-between items-center">
          <div className="flex flex-grow justify-center">
            <p className="text-center text-lg text-lightGrey mb-4 md:mb-0">
              <span data-testid="footerText">Made with ❤️ by</span>
              <a
                data-testid="footer"
                className="font-bold"
                href="https://github.com/nithin077"
                target="_blank"
                rel="noopener"
              >
                {name}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
