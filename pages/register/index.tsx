import React, { useCallback } from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';

import toast from '@/utils/toastMessage';
import { getUserAdd } from '@/utils/user';
import BaseLayout from '@/layout/baseLayout';

const Register = () => {
  const notify = useCallback((type: any, message: any) => {
    toast({ type, message });
  }, []);
  function handleRegister(values: any) {
    const { username, lastname, password, email, phone, firstname } = values;
    const data = {
      email,
      username,
      password,
      name: {
        firstname,
        lastname,
      },
      address: {
        city: 'kilcoole',
        street: '7835 new road',
        number: 3,
        zipcode: '12926-3874',
        geolocation: {
          lat: '-37.3159',
          long: '81.1496',
        },
      },
      phone: phone,
    };
    getUserAdd(data)
      .then(res => {
        notify('success', 'Амжилттай Бүртгэгдлээ');
        console.log('Амжилттай Бүртгэгдлээ');
      })
      .catch(err => {
        console.error('err', err);
        notify('error', 'Бүртгэл амжилтгүй');
      });
  }

  return (
    <BaseLayout>
      <section className="login-here">
        <div className="container">
          <div className="row align-items-center">
            <div className="offset-lg-4 col-lg-4">
              <div className="login-container">
                <h5>Бүртгүүлэх</h5>
                <Formik
                  initialValues={{
                    phone: '',
                    email: '',
                    username: '',
                    firstname: '',
                    lastname: '',
                    city: '',
                    street: '',
                    number: '',
                    zipcode: '',
                    password: '',
                    lat: '',
                    long: '',
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().required('Имэйл оруулна уу'),
                    firstname: Yup.string().required('Нэр оруулна уу'),
                    lastname: Yup.string().required('Овог оруулна уу'),
                    username: Yup.string().required('Нэвтрэх нэр оруулна уу'),
                    phone: Yup.string().required('Утсаа оруулна уу'),
                    password: Yup.string()
                      .min(4, 'Нууц үг богино байна')
                      .required('Нууц үг оруулна уу'),
                  })}
                  onSubmit={handleRegister}
                >
                  {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    errors,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <p className="text">
                        Та өөрийн ерөнхий мэдээллээ оруулна уу.
                      </p>
                      <div className="form-group">
                        <label>Нэвтрэх нэр</label>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          placeholder="Нэр"
                          defaultValue={values.username}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.username && (
                          <p className="text-danger">{errors.username}</p>
                        )}
                      </div>
                      <div className="form-group">
                        <label>Имэйл</label>
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          placeholder="Нэр"
                          defaultValue={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.email && (
                          <p className="text-danger">{errors.email}</p>
                        )}
                      </div>
                      <div className="form-group">
                        <label>Утас</label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="Утас"
                          defaultValue={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.phone && (
                          <p className="text-danger">{errors.phone}</p>
                        )}
                      </div>
                      <div className="form-group">
                        <label>Нэр</label>
                        <input
                          type="text"
                          name="firstname"
                          className="form-control"
                          placeholder="Нэр"
                          defaultValue={values.firstname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.firstname && (
                          <p className="text-danger">{errors.firstname}</p>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Овог</label>
                        <input
                          type="text"
                          name="lastname"
                          className="form-control"
                          placeholder="Овог"
                          defaultValue={values.lastname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.lastname && (
                          <p className="text-danger">{errors.lastname}</p>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Нууц үг</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          defaultValue={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Нууц үг"
                        />
                        {errors.password && (
                          <p className="text-danger">{errors.password}</p>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="btn btn-main btn-block mt-3"
                      >
                        Бүртгүүлэх
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};
export default Register;
