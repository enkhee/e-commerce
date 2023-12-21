import React, { useState, useEffect } from 'react';
import Category from '@/components/home/category';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import Cart from '@/components/cart';
// import WishlistHeadButton from '@/components/wishlist/headButton';
// import useGetCategory from '@/libs/categories';
import { getAllCategory } from '@/utils/category';
import Cart from '@/components/cart';

interface CategoryType {
  sting: string;
}

const Header = () => {
  const [toggleState, setToggleState] = useState<any>(false);
  const router = useRouter();
  const { query } = router;
  const currentSearchValue = query?.q ? query?.q : '';
  const currentCategoryId = query?.category ? query?.category : '';
  const [searchValue, setSearchValue] = useState<any>(currentSearchValue);
  const [selectCategory, setSelectCategory] = useState<any>('');

  const [categories, setCategories] = useState<any>([]); // Initialize to an empty array

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoryIdData = await getAllCategory();
        setCategories(categoryIdData);
      } catch (err: any) {
        console.error('Error fetching categories:', err);
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    setSearchValue(currentSearchValue);
    setSelectCategory(currentCategoryId);
  }, [query?.q]);

  function toggle() {
    setToggleState(!toggleState);
  }

  function handleSearch() {
    const query = selectCategory
      ? `?q=${encodeURIComponent(searchValue)}&category=${encodeURIComponent(
          selectCategory
        )}`
      : `?q=${encodeURIComponent(searchValue)}`;
    router.push(`/search${query}`);
  }

  function handleSearchValue(e: any) {
    e.preventDefault();
    setSearchValue(e.target.value);
  }
  function handleCategory(e: any, category: any) {
    e.preventDefault();
    setSelectCategory(category);
    setToggleState(false);
  }
  console.log('categories', categories);
  return (
    <header id="navbar">
      <div className="top-container">
        <div className="container">
          <div className="row">
            <div className="d-flex align-items-center justify-content-between flex-wrap w-100">
              <div className="col-xl-3 col-lg-2 col-6 order-lg-1 order-1">
                <div className="d-flex align-items-center">
                  <Link href="/" className="logo">
                    <img src="/static/images/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 order-lg-2">
                <form
                  action={`/search`}
                  className="d-none d-lg-flex flex-grow-1 flex-basis-100 flex-column"
                  onSubmit={handleSearch}
                >
                  <div className="input-group">
                    <div
                      className={`input-group-btn search-panel ${
                        toggleState ? 'show' : ''
                      }`}
                    >
                      <button
                        type="button"
                        className="btn dropdown-toggle category-select-btn"
                        data-toggle="dropdown"
                        onClick={toggle}
                      >
                        <span id="search_concept">
                          {selectCategory ? selectCategory : 'Бүх зар'}
                        </span>
                        <span className="caret" />
                      </button>
                      <ul
                        className={`dropdown-menu scrollable-dropdown ${
                          toggleState ? 'show' : ''
                        }`}
                        role="menu"
                      >
                        {categories &&
                          categories.map((category: any, index: number) => {
                            return (
                              <li key={index}>
                                <Link
                                  href="#"
                                  onClick={e => handleCategory(e, category)}
                                >
                                  {category}
                                </Link>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                    <input
                      type="text"
                      name={'q'}
                      className="form-control search-input"
                      value={searchValue}
                      placeholder="Хайх"
                      onChange={handleSearchValue}
                    />
                    <input
                      type="hidden"
                      name={'category'}
                      value={selectCategory}
                    />
                    <button className="btn btn-search" type="submit">
                      <i className="sk sk-search" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-xl-3 col-lg-4 col-6 order-lg-3 order-2">
                <ul className="action-list list-unstyled d-flex align-items-center justify-content-end">
                  <Cart />
                  {/*<WishlistHeadButton />*/}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Category />
    </header>
  );
};

export default Header;
