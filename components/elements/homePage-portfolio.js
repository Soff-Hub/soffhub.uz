import Link from "next/link";
import React, { useState, useEffect } from "react";
import getDataRepository from "../../repository/getData-repository";
import { useSelector } from "react-redux";
import Router from "next/router";

const HomePagePortfolio = ({ col, show }) => {
  const [scroll, setScroll] = useState(0);
  const [portfolioData, setPortfolioData] = useState([]);
  const [portfolioData5, setPortfolioData5] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(3);
  const languageData = useSelector((state) => state.translations.data);

  const getPortfoliosData = async () => {
    const portfolioPromise = await getDataRepository.getPromise(
      `portfolio/?limit=${limit}&offset=${offset}`,
      `${languageData.language}`
    );
    if (portfolioPromise) {
      setPortfolioData(portfolioPromise.data.results);
    }
  };
  const getPortfoliosData2 = async () => {
    const portfolioPromise = await getDataRepository.getPromise(
      `portfolio/?limit=5&offset=4`,
      `${languageData.language}`
    );
    if (portfolioPromise) {
      setPortfolioData5(portfolioPromise.data.results);
    }
  };

  const handleItemPortfolio = (id) => {
    Router.push(`/blog/${id}`);
  };

  useEffect(() => {
    getPortfoliosData();
    getPortfoliosData2();
  }, []);

  const newArray = portfolioData;
  return (
    <>
      <div className="mt-20 mb-50">
        <div>
          <div className={"portfolio-grid-container grid-left-true"}>
            {newArray.map((item, i) =>
              true ? (
                <Link
                  href={`/blog/${item.slug}`}
                  className={"portfolio-card" + i}
                  key={item.id}
                  style={{ objectFit: "cover" }}
                >
                  <div className="project " data-category="web motion">
                    <div className="item-content">
                      <div
                        className=" card-style-1 hover-up mb-30"
                        data-wow-delay=".0s"
                      >
                        <div className={` portfolio-image-style my-2`}>
                          <Link className="link-post" href={`/blog/${item.slug}`}>
                            <img
                              src={`${item.gallery}`}
                              alt="soff portfolio"
                              className={`portfolio-card-img-${i} portfolio-img portfolio-image-home-border`}
                            />
                            <div className="portfolio-info card-bg-2">
                              <div className="portfolio-info-bottom">
                                <h4 className="color-white ">{item.title}</h4>
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

          <div className="home-portfolio-grid">
            {portfolioData5.length > 0 &&
              portfolioData5.map((item, i) => (
                <div
                  onClick={() => handleItemPortfolio(item.id)}
                  className={`home-portfolio-grid_item-${i}  home-portfolio-grid_item `}
                >
                  <div
                    style={{
                      backgroundImage: `url(${item.gallery})`,
                      with: "100%",
                      height: "100%",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className="card-style"></div>
                  <div className="portfolio-info-bottom5">
                    <h4 className="color-white ">{item.title}</h4>
                    <p className="color-gray-500 text-sm">{item.category}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePagePortfolio;
