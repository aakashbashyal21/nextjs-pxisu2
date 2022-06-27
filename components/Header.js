import { IconX, IconMenu2 } from '@tabler/icons';

export default function Header() {
  return (
    <header className="header-nav">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
              <a
                className="navbar-brand font-weight-bold mb-0"
                href="index-2.html"
                title="Qurno"
              >
                <img
                  className="img-fluid"
                  width="110"
                  height="35"
                  src="https://platol.netlify.app/qurno/assets/images/logo.png"
                  alt="Qurno"
                />
              </a>
              <button
                className="search-toggle d-inline-block d-lg-none ms-auto me-1 me-sm-3"
                data-toggle="search"
                aria-label="Search Toggle"
              >
                <span>Search</span>
                <svg
                  width="22"
                  height="22"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="../../www.w3.org/2000/svg.html"
                >
                  <path
                    d="M15.5 15.5L19 19"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navHeader"
                aria-controls="navHeader"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <IconMenu2 className="menu-open" />
                <IconX className="menu-close" />
              </button>
              <div className="collapse navbar-collapse" id="navHeader">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="index-2.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item @@about">
                    <a className="nav-link" href="about.html">
                      About
                    </a>
                  </li>
                  <li className="nav-item @@elements">
                    <a className="nav-link" href="elements.html">
                      Elements
                    </a>
                  </li>
                  <li className="nav-item @@archive">
                    <a className="nav-link" href="archive.html">
                      Archive
                    </a>
                  </li>
                  <li className="nav-item @@contact">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="author.html">
                          Author
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="author-single.html">
                          Author Single
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="tags.html">
                          Tags
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="tag-single.html">
                          Tag Single
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="categories.html">
                          Categories
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="categories-single.html"
                        >
                          Category Single
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="404-page.html">
                          404 Page
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="privacy.html">
                          Privacy
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="navbar-right d-none d-lg-inline-block">
                  <ul className="social-links list-unstyled list-inline">
                    <li className="list-inline-item ms-4 d-none d-lg-inline-block">
                      <button
                        className="search-toggle"
                        data-toggle="search"
                        aria-label="Search Toggle"
                      >
                        <span>Search</span>
                        <svg
                          width="22"
                          height="22"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="../../www.w3.org/2000/svg.html"
                        >
                          <path
                            d="M15.5 15.5L19 19"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
