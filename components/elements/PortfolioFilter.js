import Link from "next/link";
import React, { useState, useEffect } from "react";
import portfolio from "../../util/portfolio";
import getDataRepository from "../../repository/getData-repository";
import { useSelector } from "react-redux";

const PortfolioFilter = ({ col, show }) => {
  const [scroll, setScroll] = useState(0);
  const [portfolioData, setPortfolioData] = useState([]);
  const [offset, setOffset] = useState(0);
  const languageData = useSelector((state) => state.translations.data);


  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setOffset((offset) => offset + 3);
    }
  };
  console.log("offset", offset);
  useEffect(() => {
    getPortfoliosData();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);


  const getPortfoliosData = async () => {
    const portfolioPromise = await getDataRepository.getPromise(
      `portfolio/`,
      // `portfolio/?limit=3&offset=${offset}`,
      `${languageData.language}`
    );
    if (portfolioPromise) {
      setPortfolioData(portfolioPromise.data.results);
    }
  };

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);

  const newArray = [];
  for (let i = 0; i < portfolioData.length; i += 3) {
    newArray.push(portfolioData.slice(i, i + 3));
  }
  console.log(newArray, "new");
  console.log("portfolios", portfolioData);

  return (
    <>
      {/* portfilo select */}
      {/* <div className="row text-center filter-nav">
                <div className="col-lg-12">
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".0s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "all" && "active"}`} active={filter === "all" ? 1 : 0} onClick={() => setFilter("all")}>All Projects</span>
                    </span>
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "web" && "active"}`}
                            onClick={() => setFilter("web")}>Web Development</span>
                    </span>
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "mobile" && "active"}`}
                            onClick={() => setFilter("mobile")}>Mobile App</span>
                    </span>
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "motion" && "active"}`}
                            onClick={() => setFilter("motion")}>Motion</span>
                    </span>
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "graphic" && "active"}`}
                            onClick={() => setFilter("graphic")}>Graphic Design</span>
                    </span>
                </div>
            </div> */}

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
                                    alt="Genz"
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
