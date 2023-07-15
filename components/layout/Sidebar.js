import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Sidebar = ({ openClass }) => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar bg-gray-900 ${openClass}`}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-logo border-gray-800">
              <Link className="d-flex" href="/">
                <img
                  className=" logo-day"
                  width={100}
                  alt="soff"
                  src="/assets/imgs/page/about/soffhub-removebg-preview.png"
                />
              </Link>
            </div>
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav className="mt-15">
                  <ul className="mobile-menu font-heading">
                    <li
                      className={
                        isActive.key == 1
                          ? "has-children active"
                          : "has-children"
                      }
                      onClick={() => handleToggle(1)}
                    >
                      <Link href="/about"> {t("A_about")}</Link>
                    </li>
                    <li
                      className={
                        isActive.key == 2
                          ? "has-children active"
                          : "has-children"
                      }
                      onClick={() => handleToggle(2)}
                    >
                      <Link href="/services"> {t("S_Services")}</Link>
                    </li>
                    <li
                      className={
                        isActive.key == 3
                          ? "has-children active"
                          : "has-children"
                      }
                      onClick={() => handleToggle(3)}
                    >
                      <Link href="/portfolio"> {t("P_portfolio")}</Link>
                    </li>
                    <li
                      className={
                        isActive.key == 5
                          ? "has-children active"
                          : "has-children"
                      }
                      onClick={() => handleToggle(5)}
                    >
                      <Link className="color-gray-500" href="/vacancies">
                        {t("V_vacancies")}
                      </Link>
                    </li>
                    <li
                      className={
                        isActive.key == 4
                          ? "has-children active"
                          : "has-children"
                      }
                      onClick={() => handleToggle(4)}
                    >
                      <Link href="/blog"> {t("B_title")}</Link>
                    </li>
                    <li>
                      <Link href="/contact"> {t("C_contact")}</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <div className="mobile-account border-gray-800">
                                <div className="mobile-header-top bg-gray-900">
                                    <div className="user-account"><Link href="/page-login"><img src="assets/imgs/template/ava.jpg" alt="GenZ" /></Link>
                                        <div className="content">
                                            <h6 className="user-name color-white">Hello<span className="color-white"> Steven !</span>
                                            </h6>
                                            <p className="font-xs text-muted">You have 3 new messages</p>
                                        </div>
                                    </div>
                                </div>
                                <ul className="mobile-menu">
                                    <li><Link href="/page-login">Profile</Link></li>
                                    <li><Link href="/page-login">Articles Saved</Link></li>
                                    <li><Link href="/page-login">Add new post</Link></li>
                                    <li><Link href="/page-login">My Likes</Link></li>
                                    <li><Link href="/page-login">Account Setting</Link></li>
                                    <li><Link href="/page-login">Sign out</Link></li>
                                </ul>
                            </div>
                            <div className="site-copyright color-gray-400 mt-30">Copyright 2022 © Genz - Personal Blog
                                Template.<br />Designed by<Link href="http://alithemes.com" target="_blank">&nbsp; AliThemes</Link>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
