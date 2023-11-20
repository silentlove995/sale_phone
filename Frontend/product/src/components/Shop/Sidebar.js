import { Fragment } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import {
  getIndividualCategories,
  getIndividualTags,
  getIndividualColors,
  getProductsIndividualSizes,
  getProducts,
  getDiscountPrice,
  setActiveSort
} from "../../lib/product";
import { ProductRating } from "../../components/Product";

const Sidebar = ({ products, getSortParams }) => {
  const categories = getIndividualCategories(products);
  const colors = getIndividualColors(products);
  const sizes = getProductsIndividualSizes(products);
  const tags = getIndividualTags(products);
  const popularProducts = getProducts(products, "fashion", "popular", 3);

  return (
    <div className="sidebar">
      <div className="widget">
        <h5 className="widget__title">Categories</h5>
        {categories.length > 0 ? (
          <ul className="widget__categories">
            {categories &&
              categories.map((category, key) => {
                return (
                  <li key={key}>
                    <button
                      onClick={(e) => {
                        getSortParams("category", category.name);
                        setActiveSort(e);
                      }}
                    >
                      <IoIosArrowForward />
                      <span className="categories-name">{category.name}</span>
                      <span className="categories-num">({category.count})</span>
                    </button>
                  </li>
                );
              })}
          </ul>
        ) : (
          "No categories found"
        )}
      </div>

      <div className="widget">
        <h5 className="widget__title">Screen</h5>
        {sizes.length > 0 ? (
          <ul className="widget__sizes">
            <li>
              <button
                onClick={(e) => {
                  getSortParams("size", "");
                  setActiveSort(e);
                }}
              >
                All
              </button>
            </li>
            {sizes.map((size, i) => {
              return (
                <li key={i}>
                  <button
                    onClick={(e) => {
                      getSortParams("size", size);
                      setActiveSort(e);
                    }}
                  >
                    {size}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          "No sizes found"
        )}
      </div>

      <div className="widget">
        <h5 className="widget__title">Colors</h5>
        {categories.length > 0 ? (
          <ul className="widget__colors">
            {colors.map((color, key) => {
              return (
                <li key={key}>
                  <button
                    onClick={(e) => {
                      getSortParams("color", color.colorName);
                      setActiveSort(e);
                    }}
                    style={{ backgroundColor: color.colorCode }}
                  ></button>
                </li>
              );
            })}
            <li>
              <button
                onClick={(e) => {
                  getSortParams("color", "");
                  setActiveSort(e);
                }}
              >
                x
              </button>
            </li>
          </ul>
        ) : (
          "No colors found"
        )}
      </div>

      <div className="widget">
        <h5 className="widget__title">tags</h5>
        {tags.length > 0 ? (
          <div className="widget__tags">
            {tags &&
              tags.map((tag, key) => {
                return (
                  <button
                    key={key}
                    onClick={(e) => {
                      getSortParams("tag", tag);
                      setActiveSort(e);
                    }}
                  >
                    {tag}
                  </button>
                );
              })}
          </div>
        ) : (
          "No tags found"
        )}
      </div>
    </div>
  );
};

export default Sidebar;
