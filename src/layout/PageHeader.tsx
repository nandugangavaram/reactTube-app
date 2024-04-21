import Logo from "../assets/Logo.png";
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";

const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className="flex justify-between gap-10 lg:gap-20 pt-2 mb-6 mx-4">
      <div
        className={`gap-4 flex-shrink-0 items-center ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={Logo} alt="Logo" className="h-6" />
        </a>
      </div>
      <form
        action=""
        className={`md:flex gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden"
        }`}
      >
        <div className="flex flex-grow max-w-[600px]">
          {showFullWidthSearch && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowFullWidthSearch(false)}
              className="flex flex-shrink-0 items-center mr-2"
            >
              <ArrowLeft />
            </Button>
          )}
          <input
            type="text"
            placeholder="Search"
            className="border-secondary-border border rounded-l-full shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button variant="ghost" size="icon">
          <Mic />
        </Button>
      </form>
      <div
        className={`md:gap-3 flex-shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setShowFullWidthSearch(true)}
        >
          <Search />
        </Button>
        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
