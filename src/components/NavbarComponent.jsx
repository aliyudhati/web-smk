const NavbarComponent = () => {
  const navItems = [
    { link: "Home", path: "/" },
    { link: "Pendaftaran", path: "pendaftaran" },
    { link: "Kurikulum", path: "kurikulum" },
    { link: "Guru", path: "guru" },
    { link: "Hubungi Kami", path: "hubungi" },
  ];

  const hamburger = document.querySelector("#hamburger");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
  });

  return (
    <div>
      <div className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relaative">
            <div class="px-4">
              <a
                href="/"
                className="font-bold text-lg text-blue-600 block py-6"
              >
                SMK TARUNA BUDI BANGSA
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4"
              >
                <span className="hamburger-line transition duration-300 origin-top-left"></span>
                <span className="hamburger-line transition duration-300"></span>
                <span className="hamburger-line transition duration-300 origin-bottom-left"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;

{
  /* <ul className="md:flex space-x-12">
          {navItems.map(({ link, path }) => (
            <a key={link} href={path} className="block hover:text-blue-700">
              {link}
            </a>
          ))}{" "}
        </ul> */
}
