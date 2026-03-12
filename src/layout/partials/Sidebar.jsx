// import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState } from "react";
import { Link } from "react-router-dom";

const navElements = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: (
      <img
        src="/material-symbols-light--dashboard-rounded.png"
        className="className='w-6 h-6 mr-2'"
        alt=""
      />
    ),
    isCollapsedTheir: false,
    // icon: <AiOutlineDashboard className='w-6 h-6 mr-2' />
  },
  {
    title: "Home Slider",
    href: "/profile",
    // icon: <AiOutlineUser className='w-6 h-6 mr-2' />
    icon: (
      <img
        src="/ci--slider-02.png"
        className="className='w-6 h-6 mr-2'"
        alt=""
      />
    ),
    isCollapsedTheir: true,
    isCollapsedChildren: [
      { title: "Banner List", collapseHref: "banner-list" },
      { title: "Add Banner", collapseHref: "add-banner" },
    ],
  },
  {
    title: "Category",
    href: "/profile",
    // icon: <AiOutlineUser className='w-6 h-6 mr-2' />
    icon: (
      <img
        src="/tabler--category-filled.png"
        className="className='w-6 h-6 mr-2'"
        alt=""
      />
    ),
    isCollapsedTheir: true,
    isCollapsedChildren: [
      { title: "Category List", collapseHref: "banner-list" },
      { title: "Add Category", collapseHref: "add-banner" },
    ],
  },
  {
    title: "Products",
    href: "/",
    // icon: <AiOutlineUser className='w-6 h-6 mr-2' />
    icon: (
      <img
        src="/fluent-mdl2--product.png"
        className="className='w-6 h-6 mr-2'"
        alt=""
      />
    ),
    isCollapsedTheir: true,
    isCollapsedChildren: [
      { title: "Product List", collapseHref: "/dashboard/product-list" },
      { title: "Add Category", collapseHref: "add-banner" },
    ],
  },
  {
    title: "Orders",
    href: "/orders",
    // icon: <AiOutlineUser className='w-6 h-6 mr-2' />
    icon: (
      <img
        src="/mingcute--basket-line.png"
        className="className='w-6 h-6 mr-2'"
        alt=""
      />
    ),
    isCollapsedTheir: false,
  },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState({ openCollapse: false, title: "" });

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`h-screen bg-gray-900 text-gray-100 flex flex-col ${isCollapsed ? "w-20" : "w-64"} transition-all duration-300`}
    >
      <div className="flex items-center justify-between h-20 bg-gray-800 border-b border-gray-700 p-4">
        {!isCollapsed && (
          <h1 className="text-3xl font-bold text-blue-400">
            {/* <Link href="/"> */}
            Sidebar
            {/* </Link> */}
          </h1>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`text-gray-100 focus:outline-none ${isCollapsed ? "ml-2" : ""}`}
        >
          {isCollapsed ? (
            <img
              src="/material-symbols--menu-rounded.png"
              className="w-[24px]"
              alt=""
            />
          ) : (
            <img src="/iconoir--xmark.png" className="w-[24px]" alt="" />
          )}
        </button>
      </div>
      <div className="flex-1 flex flex-col justify-between overflow-hidden">
        <nav className="mt-10">
          {navElements.map((navElement) => (
            <div
              // href={navElement.href}
              key={navElement.title}
              className="cursor-pointer"
            >
              <div
                className={`flex justify-between py-2.5 px-4 rounded transition duration-300 hover:bg-gray-700 hover:text-blue-400 ${isCollapsed ? "justify-center" : ""}`}
                onClick={() =>
                  setIsOpen({
                    openCollapse: true,
                    title: navElement.title,
                  })
                }
              >
                <div className="flex items-center">
                  {navElement.icon}
                  <span
                    className={`ml-2 transition-opacity duration-300 delay-200 ${isCollapsed ? "opacity-0" : "opacity-100"}`}
                  >
                    {!isCollapsed && navElement.title}
                  </span>
                </div>
                {navElement.isCollapsedTheir && (
                  <span
                    className={`inline-block transition-transform duration-400 ${isOpen.openCollapse && isOpen.title == navElement.title ? "rotate-[90deg]" : ""}`}
                  >
                    <img
                      src="/mingcute--right-fill.png"
                      className="w-[24px]"
                      alt=""
                    />
                  </span>
                )}
              </div>
              {navElement.isCollapsedTheir &&
                navElement?.isCollapsedChildren?.map(({ title, collapseHref }) => (
                  <div
                  key={title}
                  id={collapseHref}
                    className={`flex items-center ml-10 transition-max-height duration-500 ease-in-out overflow-hidden ${
                      isOpen.openCollapse && isOpen.title == navElement.title
                        ? "max-h-screen"
                        : "max-h-0"
                    }`}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                      >
                        <path
                          fill="#fff"
                          d="M7.5 4.875a2.625 2.625 0 1 1 0 5.25a2.625 2.625 0 0 1 0-5.25m0 1a1.625 1.625 0 1 0 0 3.25a1.625 1.625 0 0 0 0-3.25"
                        ></path>
                      </svg>
                    </span>
                    <Link to={collapseHref} className="p-1.5 border-gray-200">
                      {title}
                    </Link>
                  </div>
                ))}
            </div>
          ))}
        </nav>
        <div className="mb-10 transition-opacity duration-300 delay-300">
          <button className="flex items-center py-2.5 px-4 w-full text-left rounder transition duration-300 hover:bg-red-700 hover:text-white">
            <img
              src="/tabler--logout.png"
              className="w-6 h-6 mr-2"
              alt=""
            />
            <span
              className={`transition-opacity duration-300 delay-200 ${isCollapsed ? "opacity-0" : "opacity-100"}`}
            >
              {!isCollapsed && "Log Out"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
