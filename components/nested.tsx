import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { getAllCategory } from '@/utils/category';

const Nested = () => {
  const [categories, setCategories] = useState([]); // Initialize to an empty array
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoryIdData = await getAllCategory();
        setCategories(categoryIdData);
      } catch (err: any) {
        console.error('Error fetching categories:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return (
    <div className="category-list">
      <ul className="list-unstyled">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading &&
          !error &&
          categories &&
          categories.map((category: any, index) => {
            return (
              <li className="lvl1-item" key={index}>
                <Link href={`/category/${category}`}>{category}</Link>
                {categories && (
                  <div className="lvl2-drop">
                    <div className="d-flex align-items-start">
                      <div className="drop-wrap">
                        {categories.map((child: any, j) => {
                          return (
                            <div className="single-drop" key={j}>
                              <ul className="list-unstyled">
                                <li className="title">
                                  <Link href={`/category/${category}/${child}`}>
                                    <i className="sk sk-chevron-right" />
                                    <strong>{child}</strong>
                                  </Link>
                                </li>
                                {categories &&
                                  categories.map((ch: any) => {
                                    return (
                                      <li key={ch}>
                                        <Link
                                          href={`/category/${category}/${child}/${ch}`}
                                        >
                                          {ch}
                                        </Link>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Nested;
