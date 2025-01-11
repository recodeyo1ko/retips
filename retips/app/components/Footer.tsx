export const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font absolute w-full">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tips</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">役立つツール置き場</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © Tips
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-500 ml-1"
              target="_blank"
            >
              @ReCodeYoiko
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            このサイトは開発中です。
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
