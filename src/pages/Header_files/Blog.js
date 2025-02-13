import React, { useState } from "react";
import "../../Css/Blog.css";
import Assets from "../../Assets/Assets";
import Slider from "react-slick";

// Import Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Blog() {
   
  const [image, setImage] = useState([
    {
      img1: Assets?.Jain_University_logo,
      url: "Jain University",
    },
    {
      img1: Assets?.Chandigarh_University_logo,
      url: "Chandigarh University",
    },
    {
      img1: Assets?.Noida_International_University_logo,
      url: "Noida International University",
    },
    {
      img1: Assets?.DY_Patil_University_logo,
      url: "D.Y. Patil University",
    },
    {
      img1: Assets?.KIIT_University_logo,
      url: "KIIT University",
    },
    {
      img1: Assets?.Dr_MGR_University_logo,
      url: "Dr. MGR University",
    },
    {
      img1: Assets?.Andhra_University_logo,
      url: "Andhra University",
    },
    {
      img1: Assets?.Kurukshetra_University_logo,
      url: "Kurukshetra University",
    },
    {
      img1: Assets?.OP_Jindal_Global_University_logo,
      url: "OP Jindal Global University",
    },
    {
      img1: Assets?.Vivekananda_Global_University_logo,
      url: "Vivekananda Global University",
    },
    {
      img1: Assets?.Bharathidasan_University_logo,
      url: "Bharathidasan University",
    },
    {
      img1: Assets?.Koneru_Lakshmaiah_Education_Foundation_KL_University_logo,
      url: "Koneru Lakshmaiah Education Foundation (KL University",
    },
    {
      img1: Assets?.Vignan_University_logo,
      url: "Vignan University",
    },
  ]);



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="blog">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title">
              <h4 className="title mb-2">Find Us in The News!</h4>
              <p className="text-muted para-desc mx-auto mb-0">
                We've been in the news!
              </p>
            </div>
          </div>
        </div>

        <div className="reactSlick">
            <div className="row">
              <Slider {...settings}>
                {/* First Blog Post */}
                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="blog-post rounded border">
                    <div className="blog-img d-block overflow-hidden position-relative">
                      <img
                        src={Assets?.outlookpage}
                        className="img-fluid rounded-top"
                        alt="Logo"
                      />
                      <div className="overlay rounded-top bg-dark"></div>
                    </div>
                    <div className="content p-3">
                      <img
                        src={Assets?.outlook}
                        width="100"
                        height="30"
                        alt="Logo"
                      />
                      <p className="text-muted mt-2">
                        Digitech Media Shines A Light On Industry Leaders At The
                        Outlook Business Spotlight - Business Icon Awards 2023
                      </p>
                      <div className="author mt-2">
                        <h6 className="mb-0">
                          <a
                            href="https://www.outlookindia.com/education/outlook-icare-rankings-2023-top-110-bca-institutes-magazine-299145"
                            className="text-dark name"
                          >
                            Learn More
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Blog Post */}
                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="blog-post rounded border">
                    <div className="blog-img d-block overflow-hidden position-relative">
                      <img
                        src={Assets?.indiapage}
                        className="img-fluid rounded-top"
                        alt=""
                      />
                      <div className="overlay rounded-top bg-dark"></div>
                    </div>
                    <div className="content p-3">
                      <img
                        src={Assets?.outlook}
                        width="150"
                        height="30"
                        alt="Logo"
                      />
                      <p className="text-muted mt-2">
                        Digitech Media Shines A Light On Industry Leaders At The
                        Outlook Business Spotlight - Business Icon Awards 2023
                      </p>
                      <div className="author mt-2">
                        <h6 className="mb-0">
                          <a
                            href="https://www.outlookindia.com/education/outlook-icare-rankings-2023-top-110-bca-institutes-magazine-299145"
                            className="text-dark name"
                          >
                            Learn More
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Third Blog Post */}
                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="blog-post rounded border">
                    <div className="blog-img d-block overflow-hidden position-relative">
                      <img
                        src={Assets?.outlookpage}
                        className="img-fluid rounded-top"
                        alt="logo"
                      />
                      <div className="overlay rounded-top bg-dark"></div>
                    </div>
                    <div className="content p-3">
                      <img
                        src={Assets?.outlook}
                        width="150"
                        height="30"
                        alt="Logo"
                      />
                      <p className="text-muted mt-2">
                        Digitech Media Shines A Light On Industry Leaders At The
                        Outlook Business Spotlight - Business Icon Awards 2023
                      </p>
                      <div className="author mt-2">
                        <h6 className="mb-0">
                          <a
                            href="https://www.outlookindia.com/education/outlook-icare-rankings-2023-top-110-bca-institutes-magazine-299145"
                            className="text-dark name"
                          >
                            Learn More
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="blog-post rounded border">
                    <div className="blog-img d-block overflow-hidden position-relative">
                      <img
                        src={Assets?.indiapage}
                        className="img-fluid rounded-top"
                        alt=""
                      />
                      <div className="overlay rounded-top bg-dark"></div>
                    </div>
                    <div className="content p-3">
                      <img
                        src={Assets?.outlook}
                        width="150"
                        height="30"
                        alt="Logo"
                      />
                      <p className="text-muted mt-2">
                        Digitech Media Shines A Light On Industry Leaders At The
                        Outlook Business Spotlight - Business Icon Awards 2023
                      </p>
                      <div className="author mt-2">
                        <h6 className="mb-0">
                          <a
                            href="https://www.outlookindia.com/education/outlook-icare-rankings-2023-top-110-bca-institutes-magazine-299145"
                            className="text-dark name"
                          >
                            Learn More
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="blog-post rounded border">
                    <div className="blog-img d-block overflow-hidden position-relative">
                      <img
                        src={Assets?.outlookpage}
                        className="img-fluid rounded-top"
                        alt=""
                      />
                      <div className="overlay rounded-top bg-dark"></div>
                    </div>
                    <div className="content p-3">
                      <img
                        src={Assets?.outlook}
                        width="150"
                        height="30"
                        alt="Logo"
                      />
                      <p className="text-muted mt-2">
                        Digitech Media Shines A Light On Industry Leaders At The
                        Outlook Business Spotlight - Business Icon Awards 2023
                      </p>
                      <div className="author mt-2">
                        <h6 className="mb-0">
                          <a
                            href="https://www.outlookindia.com/education/outlook-icare-rankings-2023-top-110-bca-institutes-magazine-299145"
                            className="text-dark name"
                          >
                            Learn More
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="blog-post rounded border">
                    <div className="blog-img d-block overflow-hidden position-relative">
                      <img
                        src={Assets?.outlookpage}
                        className="img-fluid rounded-top"
                        alt=""
                      />
                      <div className="overlay rounded-top bg-dark"></div>
                    </div>
                    <div className="content p-3">
                      <img
                        src={Assets?.outlook}
                        width="150"
                        height="30"
                        alt="Logo"
                      />
                      <p className="text-muted mt-2">
                        Digitech Media Shines A Light On Industry Leaders At The
                        Outlook Business Spotlight - Business Icon Awards 2023
                      </p>
                      <div className="author mt-2">
                        <h6 className="mb-0">
                          <a
                            href="https://www.outlookindia.com/education/outlook-icare-rankings-2023-top-110-bca-institutes-magazine-299145"
                            className="text-dark name"
                          >
                            Learn More
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="blog-post rounded border">
                    <div className="blog-img d-block overflow-hidden position-relative">
                      <img
                        src={Assets?.indiapage}
                        className="img-fluid rounded-top"
                        alt=""
                      />
                      <div className="overlay rounded-top bg-dark"></div>
                    </div>
                    <div className="content p-3">
                      <img
                        src={Assets?.outlook}
                        width="150"
                        height="30"
                        alt="Logo"
                      />
                      <p className="text-muted mt-2">
                        Digitech Media Shines A Light On Industry Leaders At The
                        Outlook Business Spotlight - Business Icon Awards 2023
                      </p>
                      <div className="author mt-2">
                        <h6 className="mb-0">
                          <a
                            href="https://www.outlookindia.com/education/outlook-icare-rankings-2023-top-110-bca-institutes-magazine-299145"
                            className="text-dark name"
                          >
                            Learn More
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="uni-image mt-5 mb-5">
          <div className="uni-image">
            <div className="item-main">
              {image?.map((data, index) => {
                return (
                  <div className="items">
                    <img src={data?.img1}></img>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default Blog;
