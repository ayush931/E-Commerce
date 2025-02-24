import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoClose } from "react-icons/io5";
import { Button } from "@mui/material";
import { FaRegPlusSquare } from "react-icons/fa";
import "./categoryPanel.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaRegMinusSquare } from "react-icons/fa";

function CategoryPanel({ isOpenCategoryPanel, setIsOpenCategoryPanel }) {
  const toggleDrawer = (newOpen) => () => {
    setIsOpenCategoryPanel(newOpen);
  };

  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const [innerSubMenuIndex, setInnerSubMenuIndex] = useState(null);

  const openSubMenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  };

  const openInnerSubMenu = (index) => {
    if (innerSubMenuIndex === index) {
      setInnerSubMenuIndex(null);
    } else {
      setInnerSubMenuIndex(index);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h2 className="text-[16px] px-5 py-3 font-[500] flex items-center justify-between border-b-[2px]">
        Shop by categories{" "}
        <IoClose onClick={toggleDrawer(false)} className="cursor-pointer text-[20px]" />
      </h2>

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none">
            <Link to={"/medicine"}>
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] hover:!text-[#287c2c] transition !font-semibold">
                Medicine
                {subMenuIndex === 0 ? (
                  <FaRegMinusSquare
                    className="ml-auto cursor-pointer"
                    onClick={() => openSubMenu(0)}
                  />
                ) : (
                  <FaRegPlusSquare
                    className="ml-auto cursor-pointer"
                    onClick={() => openSubMenu(0)}
                  />
                )}
              </Button>
            </Link>
            {subMenuIndex === 0 && (
              <ul className="subMenu w-full pl-4">
                <li className="list-none relative">
                  <Link to={"/medicine/health"}>
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]  hover:!text-[#287c2c] transition !font-semibold">
                      Health{" "}
                      {innerSubMenuIndex === 0 ? (
                        <FaRegMinusSquare
                          className="ml-auto cursor-pointer"
                          onClick={() => openInnerSubMenu(0)}
                        />
                      ) : (
                        <FaRegPlusSquare
                          className="ml-auto cursor-pointer"
                          onClick={() => openInnerSubMenu(0)}
                        />
                      )}
                    </Button>
                  </Link>
                  {innerSubMenuIndex === 0 && (
                    <ul className="innerSubMenu w-full pl-4">
                      <li className="list-none relative">
                        <Link to={"/medicine/health/drinks"}>
                          <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]  hover:!text-[#287c2c] transition">
                            Drinks
                          </Button>
                        </Link>
                      </li>
                      <li className="list-none relative">
                        <Link to={"/medicine/health/proteins"}>
                          <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]  hover:!text-[#287c2c] transition">
                            Proteins
                          </Button>
                        </Link>
                      </li>
                      <li className="list-none relative">
                        <Link to={"/vitamins"}>
                          <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]  hover:!text-[#287c2c] transition">
                            Vitamins
                          </Button>
                        </Link>
                      </li>
                      <li className="list-none relative">
                        <Link to={"/tablets"}>
                          <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]  hover:!text-[#287c2c] transition">
                            Tablets
                          </Button>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none">
            <Link to={"/medicine"}>
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] hover:!text-[#287c2c] transition !font-semibold">
                Medicine
                {subMenuIndex === 1 ? (
                  <FaRegMinusSquare
                    className="ml-auto cursor-pointer"
                    onClick={() => openSubMenu(1)}
                  />
                ) : (
                  <FaRegPlusSquare
                    className="ml-auto cursor-pointer"
                    onClick={() => openSubMenu(1)}
                  />
                )}
              </Button>
            </Link>
            {subMenuIndex === 1 && (
              <ul className="subMenu w-full pl-4">
                <li className="list-none relative">
                  <Link to={"/medicine/health"}>
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]  hover:!text-[#287c2c] transition !font-semibold">
                      Health{" "}
                      {innerSubMenuIndex === 1 ? (
                        <FaRegMinusSquare
                          className="ml-auto cursor-pointer"
                          onClick={() => openInnerSubMenu(1)}
                        />
                      ) : (
                        <FaRegPlusSquare
                          className="ml-auto cursor-pointer"
                          onClick={() => openInnerSubMenu(1)}
                        />
                      )}
                    </Button>
                  </Link>
                  {innerSubMenuIndex === 1 && (
                    <ul className="innerSubMenu w-full pl-4">
                      <li className="list-none relative">
                        <Link to={"/medicine/health/drinks"}>
                          <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]  hover:!text-[#287c2c] transition">
                            Drinks
                          </Button>
                        </Link>
                      </li>
                      <li className="list-none relative">
                        <Link to={"/medicine/health/proteins"}>
                          <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]  hover:!text-[#287c2c] transition">
                            Proteins
                          </Button>
                        </Link>
                      </li>
                      <li className="list-none relative">
                        <Link to={"/vitamins"}>
                          <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]  hover:!text-[#287c2c] transition">
                            Vitamins
                          </Button>
                        </Link>
                      </li>
                      <li className="list-none relative">
                        <Link to={"/tablets"}>
                          <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]  hover:!text-[#287c2c] transition">
                            Tablets
                          </Button>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer open={isOpenCategoryPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default CategoryPanel;
