import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import SearchForm from "../Blog/SearchForm";
import LatestPosts from "../Blog/LatestPosts";
import LatestProducts from "../Blog/LatestProducts";
import blogData from "../BlogGrid/blogData";
import Image from "next/image";
import shopData from "../Shop/shopData"; 

const BlogDetailsWithSidebar = () => {
  return (
    <>
      <Breadcrumb
        title={"Blog Details With Sidebar"}
        pages={["blog details sidebar"]}
      />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-12.5">
            {/* Blog details */}
            <div className="lg:max-w-[750px] w-full">
              <div className="rounded-[10px] overflow-hidden mb-7.5">
                <Image
                  className="rounded-[10px]"
                  src="/images/blog/blog-details-01.jpg"
                  alt="details"
                  width={750}
                  height={477}
                />
              </div>

              <div>
                <span className="flex items-center gap-3 mb-4">
                  <a href="#" className="ease-out duration-200 hover:text-blue">
                    Mar 27, 2022
                  </a>

                  {/* Divider */}
                  <span className="block w-px h-4 bg-gray-4"></span>

                  <a href="#" className="ease-out duration-200 hover:text-blue">
                    300k Views
                  </a>
                </span>

                <h2 className="font-medium text-dark text-xl lg:text-2xl xl:text-custom-4xl mb-4">
                  What information is needed for shipping?
                </h2>

                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sit amet eros ac ipsum egestas dapibus. Vivamus
                  gravida, ex non placerat tincidunt, lorem felis facilisis
                  tellus, vitae bibendum purus felis eget tellus. In non rutrum
                  ipsum. Morbi ut dui ante.
                </p>

                <p className="mb-6">
                  Nunc faucibus libero sem, quis placerat nisl pellentesque
                  eget. Morbi porta velit ut leo sollicitudin, a faucibus purus
                  faucibus. Maecenas mollis dui nec metus euismod, sed aliquam
                  risus luctus.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis enim lobortis scelerisque fermentum. Neque sodales ut
                  etiam sit amet. Ligula ullamcorper malesuada proin libero nunc
                  consequat interdum varius. Quam pellentesque nec nam aliquam
                  sem et tortor consequat.
                </p>

                <div className="mt-7.5">
                  <h3 className="font-medium text-dark text-lg xl:text-[26px] xl:leading-[34px] mb-6">
                    Digital marketplace for Ui/Ux designers.
                  </h3>

                  <ul className="list-disc pl-6">
                    <li>Consectetur adipiscing elit in voluptate velit.</li>
                    <li>Mattis vulputate cupidatat.</li>
                    <li>
                      Vulputate enim nulla aliquet porttitor odio pellentesque
                    </li>
                    <li>Ligula ullamcorper malesuada proin</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white pt-7.5 pb-6 px-4 sm:px-7.5 my-7.5">
                  <p className="italic text-dark text-center">
                    ‘‘Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod incididunt utionals labore et dolore magna
                    aliqua quis fermentum,,
                  </p>

                  <a
                    href="#"
                    className="flex items-center justify-center gap-3 mt-5.5"
                  >
                    <div className="flex w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src="/images/users/user-04.jpg"
                        alt="user"
                        width={48}
                        height={48}
                      />
                    </div>

                    <div>
                      <h4 className="text-dark text-custom-sm">Jhon Drineo</h4>
                      <p className="text-custom-xs">Entroprenor</p>
                    </div>
                  </a>
                </div>

                <p className="mb-6">
                  consectetur adipiscing elit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  mattis vulputate cupidatat.
                </p>

                <p className="mb-6">
                  Nunc faucibus libero sem, quis placerat nisl pellentesque
                  eget. Morbi porta velit ut leo sollicitudin, a faucibus purus
                  faucibus. Maecenas mollis dui nec metus euismod, sed aliquam
                  risus luctus.
                </p>

                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis enim lobortis scelerisque fermentum. Neque sodales ut
                  etiam sit amet. Ligula ullamcorper malesuada proin libero nunc
                  consequat interdum varius. Quam pellentesque nec nam aliquam
                  sem et tortor consequat.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sit amet eros ac ipsum egestas dapibus. Vivamus
                  gravida, ex non placerat tincidunt, lorem felis facilisis
                  tellus, vitae bibendum purus felis eget tellus. In non rutrum
                  ipsum. Morbi ut dui ante.
                </p>

                <div className="flex flex-wrap items-center justify-between gap-10 mt-10">
                  <div className="flex flex-wrap items-center gap-5">
                    <p>Popular Tags :</p>

                    <ul className="flex flex-wrap items-center gap-3.5">
                      <li>
                        <a
                          className="inline-flex hover:text-white border border-gray-3 bg-white py-2 px-4 rounded-md ease-out duration-200 hover:bg-blue hover:border-blue"
                          href="#"
                        >
                          Desktop
                        </a>
                      </li>

                      <li>
                        <a
                          className="inline-flex hover:text-white border border-gray-3 bg-white py-2 px-4 rounded-md ease-out duration-200 hover:bg-blue hover:border-blue"
                          href="#"
                        >
                          Macbook
                        </a>
                      </li>

                      <li>
                        <a
                          className="inline-flex hover:text-white border border-gray-3 bg-white py-2 px-4 rounded-md ease-out duration-200 hover:bg-blue hover:border-blue"
                          href="#"
                        >
                          PC
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Social Links start */}
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#BD081C] ease-in duration-200 hover:bg-opacity-95"
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_190_5507)">
                          <path
                            d="M0.47827 8.52675C0.531395 10.9971 1.67359 13.4674 3.61264 14.9549C4.22357 15.4064 4.88764 15.6721 5.57826 15.9642C5.28607 14.0783 6.00326 12.1924 6.4017 10.333C6.45482 10.1471 6.48139 9.93456 6.48139 9.72206C6.48139 9.42987 6.37514 9.13769 6.29545 8.8455C6.21576 8.36737 6.26889 7.86269 6.48139 7.41112C6.77357 6.80019 7.4642 6.32206 8.07514 6.56112C8.63295 6.77362 8.84545 7.51737 8.7392 8.10175C8.63295 8.71269 8.3142 9.24394 8.15482 9.82831C7.96889 10.4127 7.99545 11.1299 8.42045 11.5283C8.81889 11.9002 9.45639 11.9267 9.96107 11.7142C10.7048 11.3955 11.1829 10.6517 11.1829 9.93406C11.1829 9.11762 10.4742 8.56675 9.6692 8.54112C8.85889 8.51562 8.34739 8.83719 8.08576 9.30969C7.86889 9.72325 7.55107 10.1458 7.07045 10.2434C6.32739 10.4017 5.58514 9.71562 5.63576 8.94675C5.64613 8.75657 5.73482 8.57269 5.87639 8.49475C6.56357 8.32975 6.97045 8.09712 7.39576 7.79856"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-[370px] w-full xl:w-[330px]">
              {/* Search Form */}
              <div className="mb-10">
                <SearchForm />
              </div>

              {/* Latest Posts */}
              <div className="mb-10">
                <h4 className="font-medium text-dark text-lg xl:text-[26px] xl:leading-[34px] mb-6">
                  Latest Posts
                </h4>
                <LatestPosts data={blogData} />
              </div>

              {/* Latest Products */}
              <div className="mb-10">
                <h4 className="font-medium text-dark text-lg xl:text-[26px] xl:leading-[34px] mb-6">
                  Latest Products
                </h4>
                <LatestProducts data={shopData} />
              </div>

              {/* Popular Categories */}
              <div className="mb-10">
                <h4 className="font-medium text-dark text-lg xl:text-[26px] xl:leading-[34px] mb-6">
                  Popular Categories
                </h4>
                <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
                  <a
                    href="#"
                    className="block bg-dark py-4 px-5 rounded-lg text-white text-center hover:bg-opacity-90 ease-out duration-200"
                  >
                    Tech
                  </a>

                  <a
                    href="#"
                    className="block bg-dark py-4 px-5 rounded-lg text-white text-center hover:bg-opacity-90 ease-out duration-200"
                  >
                    Fashion
                  </a>

                  <a
                    href="#"
                    className="block bg-dark py-4 px-5 rounded-lg text-white text-center hover:bg-opacity-90 ease-out duration-200"
                  >
                    Health
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsWithSidebar;
