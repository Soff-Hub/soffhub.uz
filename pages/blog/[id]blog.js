import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useTranslation } from "react-i18next";
import getDataRepository from "../../repository/getData-repository";
import { useSelector } from "react-redux";

const BlogID = () => {
  let Router = useRouter();
  const { t } = useTranslation();
  const { id } = Router.query;

  return (
    <>
    salom
      {/* <Layout>
        <div className="cover-home3 mb-70 mt-70">
          <div className="row">
            <div className="col-lg-12 mb-20 text-start text-lg-end">
              <div className="box-breadcrumbs wow animate__animated animate__fadeIn">
                <ul className="breadcrumb">
                  <li>
                    <Link className="home" href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-archive">Blog</Link>
                  </li>
                  <li>
                    <span>Travel Tips</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout> */}
    </>
  );
};

export default BlogID;
