import Link from 'next/link';
import TopBar from '@/components/topbar';
import { Play } from 'next/font/google';
const playFont = Play({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin', 'cyrillic-ext'],
  display: 'swap',
});
const BaseLayout = (props: any) => {
  const { children } = props;

  return (
    <div className={playFont.className}>
      <TopBar />
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
                  >
                    <div className="input-group">
                      <div className={`input-group-btn search-panel `}>
                        <button
                          type="button"
                          className="btn dropdown-toggle category-select-btn"
                          data-toggle="dropdown"
                        >
                          <span id="search_concept">{'Бүх зар'}</span>
                          <span className="caret" />
                        </button>
                        <ul
                          className={`dropdown-menu scrollable-dropdown `}
                          role="menu"
                        >
                          <li>
                            <a href="#">sdsad</a>
                          </li>
                        </ul>
                      </div>
                      <input
                        type="text"
                        name={'q'}
                        className="form-control search-input"
                        placeholder="Хайх"
                      />
                      <input type="hidden" name={'category'} />
                      <button className="btn btn-search" type="submit">
                        <i className="sk sk-search" />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-xl-3 col-lg-4 col-6 order-lg-3 order-2">
                  <ul className="action-list list-unstyled d-flex align-items-center justify-content-end">
                    <li>
                      <Link href={`/cart`} className="btn btn-action">
                        <i className="sk sk-cart mr-1" />
                        <span>{0}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}
      <footer className="mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-20 col-lg-4 col-sm-4 col-12 order-sm-2 order-2">
              <div className="single with-qr">
                <p className="title">Бидэнтэй нэгдээрэй</p>
                <div className="row">
                  <div className="col-6">
                    <a href="#">
                      <span>WeChat групп</span>
                      <img
                        src="/static/images/demo/31.png"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <span>Facebook групп</span>
                      <img
                        src="/static/images/demo/32.png"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-20 col-lg-2 order-sm-2 d-lg-block d-none">
              <div className="single">
                <p className="title">Тусламж</p>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Хэрэглэх заавар</a>
                  </li>
                  <li>
                    <a href="#">Түгээмэл асуултууд</a>
                  </li>
                  <li>
                    <a href="#">Үйлчилгээний нөхцөл</a>
                  </li>
                  <li>
                    <a href="#">Нууцлалын баталгаа</a>
                  </li>
                  <li>
                    <a href="#">Хамтран ажиллагаа</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-20 col-lg-2 order-sm-3 d-lg-block d-none">
              <div className="single">
                <p className="title">IMEX.mn</p>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Бидний тухай</a>
                  </li>
                  <li>
                    <a href="#">Бүтээгдэхүүн үйлчилгээ</a>
                  </li>
                  <li>
                    <a href="#">Маркетинг контент</a>
                  </li>
                  <li>
                    <a href="#">Ажлын байр</a>
                  </li>
                  <li>
                    <a href="#">Баннер байршуулах</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-20 col-lg-2 order-sm-4 d-lg-block d-none">
              <div className="single">
                <p className="title">Холбоо барих</p>
                <ul className="list-unstyled">
                  <li>
                    <span>Хаяг: Улаанбаатар хот, Монгол улс </span>
                  </li>
                  <li>
                    <a href="#">Утас: 8806-9998</a>
                  </li>
                  <li>
                    <a href="#">Имэйл: info@imex.mn</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-20 col-lg-2 col-sm-6 order-sm-5 order-1">
              <div className="single">
                <p className="title">Application татах</p>
                <ul className="list-unstyled d-flex flex-row flex-lg-column align-items-lg-start align-items-center flex-wrap">
                  <li>
                    <span>
                      Та манай аппликейшныг татаж авсанаар маш олон боломжуудыг
                      өөртөөнээх юм.
                    </span>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/static/images/android.png"
                        alt="android app logo"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/static/images/ios.png" alt="ios app logo" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout;
