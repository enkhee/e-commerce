import React, { useState, useRef, useEffect } from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BaseLayout from '@/layout/baseLayout';
import { useAuthState } from '@/contexts/auth';
import { getUserLogin } from '@/utils/user';

// import BaseLayout from '../../layouts/BaseLayout';
// import { useAuthState } from '../../contexts/auth';
// import { getUserLogin } from '../../utils/user';

const Index = () => {
  const { setLogin, loading, user, isAuthenticated } = useAuthState() || {};
  const [error, setError] = useState();
  const router = useRouter();

  useEffect(() => {
    document.body.classList.remove('mobile-user-menu-activate');
  }, []);
  if (loading) {
    return <div> loading .. </div>;
  }
  if (isAuthenticated) {
    return router.push(`/`);
  }

  function handleLogin(values: any) {
    let itemData = {};
    itemData = {
      username: values.username,
      password: values.password,
    };

    getUserLogin(itemData)
      .then(async res => {
        Cookies.set('token', res?.token);
        if (setLogin) {
          await setLogin(res && res);
        }
        window.location.href = '/';
      })
      .catch(error => setError(error));
  }

  return (
    <BaseLayout>
      <section className="login-here">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 order-lg-1 order-2">
              <div className="swiper top-slide">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="#">
                      <img src="/static/images/demo/41.png" alt="" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#">
                      <img src="/static/images/demo/42.jpeg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-2 order-1">
              <div className="login-container">
                <h5>Нэвтрэх</h5>
                <Formik
                  initialValues={{
                    username: '',
                    password: '',
                  }}
                  validationSchema={Yup.object().shape({
                    username: Yup.string().required('Та нэрээ оруулна уу'),
                    password: Yup.string()
                      .min(4, 'Нууц үг богино байна')
                      .required('Нууц үгээ оруулна уу'),
                  })}
                  onSubmit={handleLogin}
                >
                  {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    errors,
                  }) => (
                    <>
                      <form action="" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label>Нэвтрэх нэр</label>
                          <input
                            type="text"
                            name="username"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={values.username}
                          />
                          <small
                            id="emailHelp"
                            className="form-text text-muted"
                          >
                            Нэвтрэх нэр болон нууц үгээ нууцлалт хийнэ үү
                          </small>
                          {errors.username && (
                            <p className="text-danger">{errors.username}</p>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Нууц үг</label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            defaultValue={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.password && (
                            <p className="text-danger">{errors.password}</p>
                          )}
                        </div>
                        <button
                          type="submit"
                          className="btn btn-main btn-block mt-3"
                        >
                          Нэвтрэх
                        </button>
                      </form>
                    </>
                  )}
                </Formik>
                <hr />
                <ul className="help-links list-unstyled d-flex align-items-center flex-wrap">
                  <li className="register">
                    <Link href={`/register`}>Шинээр бүртгүүлэх</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};
export default Index;
