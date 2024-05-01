const NavbarComponent = () => {
  const navItems = [
    { link: "Home", path: "/" },
    { link: "Pendaftaran", path: "pendaftaran" },
    { link: "Kurikulum", path: "kurikulum" },
    { link: "Guru", path: "guru" },
    { link: "Hubungi Kami", path: "hubungi" },
  ];
  return (
    <div>
      <div class="text-2xl font-semibold flex items-center space-x-3 text-blue-600">
        SMK TARUNA BUDI BANGSA
      </div>
      <nav className="bg-white">
        <div className="=mx-auto max-w7xl px-2 sm:px-6 lg:px-8">
          <div className="flex space-x-14 items-center">
            <div>
              <ul className="md:flex space-x-12">
                {navItems.map(({ link, path }) => (
                  <a
                    key={link}
                    href={path}
                    className="block hover:text-blue-700"
                  >
                    {link}
                  </a>
                ))}{" "}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
