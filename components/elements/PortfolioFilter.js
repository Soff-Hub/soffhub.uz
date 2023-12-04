import Link from "next/link";
import React, { useState, useEffect } from "react";
import portfolio from "../../util/portfolio";
import getDataRepository from "../../repository/getData-repository";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const PortfolioFilter = () => {
  const [scroll, setScroll] = useState(0);
  const [portfolioData, setPortfolioData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(3);
  const languageData = useSelector((state) => state.translations.data);

  const Router = useRouter()
  const {filter} = Router.query

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight, scrollY } =
      document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 680) {
      setLimit((limit) => limit + 3);
    }
  };

  const getPortfoliosData = async () => {
    const portfolioPromise = await getDataRepository.getPromise(
      `portfolio/?limit=${limit}&offset=${offset}`,
      `${languageData.language}`
    );
    if (portfolioPromise) {
      setPortfolioData(portfolioPromise.data.results);
    }
  };

  const filterPortfolio = async (id) => {
    const portfolioPromise = await getDataRepository.getPromise(
      `portfolio/?service__id=${id}`,
      `${languageData.language}`
    );
    if (portfolioPromise) {
      setPortfolioData(portfolioPromise?.data?.results);
    }
  }


  useEffect(() => {
    if (filter) {
      
    }else {
      getPortfoliosData();
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [limit]);


  useEffect(() => {
    if (filter) {
      filterPortfolio(filter)
    }
  }, [filter])


  const newArray = [];
  for (let i = 0; i < portfolioData?.length; i += 3) {
    newArray.push(portfolioData?.slice(i, i + 3));
  }


  return (
    <>
      <div className="mt-70 mb-50">
        <div className="">
          {newArray.length > 0 &&
            newArray.map((el, i) => {
              return (
                <div
                  key={i}
                  className={
                    (i + 2) % 2 === 0
                      ? "portfolio-grid-container grid-left-true"
                      : "portfolio-grid-container grid-left-false"
                  }
                >
                  {el.map((item, i) =>
                    true ? (
                      <Link
                        href={`/blog/${item.id}`}
                        className={"portfolio-card" + i}
                        key={i}
                        style={{ objectFit: "cover" }}
                      >
                        <div className="project " data-category="web motion">
                          <div className="item-content">
                            <div
                              className=" card-style-1 hover-up mb-30"
                              data-wow-delay=".0s"
                            >
                              <div className={` portfolio-image-style my-2`}>
                                <Link
                                  className="link-post"
                                  href={`/blog/${item.id}`}
                                >
                                  <img
                                    src={`${item.gallery}`}
                                    alt="soff portfolio"
                                    className={`portfolio-card-img-${i} portfolio-img`}
                                  />
                                  <div className="portfolio-info card-bg-2">
                                    <div className="portfolio-info-bottom">
                                      <h4 className="color-white ">
                                        {item.title}
                                      </h4>
                                      <p className="color-gray-500 text-sm">
                                        {item.category}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ) : null
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default PortfolioFilter;
