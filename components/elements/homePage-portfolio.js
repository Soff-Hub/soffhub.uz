import Link from "next/link";
import React, { useState, useEffect } from "react";
import getDataRepository from "../../repository/getData-repository";
import { useSelector } from "react-redux";

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

  useEffect(() => {
    getPortfoliosData();
    getPortfoliosData2();
  }, []);

  const newArray = portfolioData;
  // for (let i = 0; i < portfolioData.length; i += 3) {
  //   newArray.push(portfolioData.slice(i, i + 3));
  // }

  // console.log(portfolioData5);

  return (
    <>
      <div className="mt-70 mb-50">
        <div>
            
            <div
                
                  className={
                    // (i + 2) % 2 === 0
                      "portfolio-grid-container grid-left-true"
                      // : "portfolio-grid-container grid-left-false"
                  }
                >
                  {newArray.map((item, i) =>
                    true ? (
                      <Link
                        href={`/blog/${item.id}`}
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


          <div className="home-portfolio-grid">
            {portfolioData5.length > 0 &&
              portfolioData5.map((item, i) => (
                <Link
                  className={`home-portfolio-grid__item_${i} d-inline-block`}
                  href={`/blog/${item.id}`}
                  key={item.id}
                >
                  <div className="portfolio-item-div" data-category="web motion">
                    <div className={`item-content item-content--${i}`}>
                      <div
                        className=" card-style-1 hover-up mb-30"
                        data-wow-delay=".0s"
                      >
                        <div className={` portfolio-image-style my-2`}>
                          <Link className="link-post" href={`/blog/${item.id}`}>
                            <img
                              src={`${item.gallery}`}
                              alt="soff portfolio"
                              className={`portfolio-image-style-item portfolio-image-style-item--${i}`}
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
              ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default HomePagePortfolio;
