import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

const BlogDetails = () => {
  return (
    <>
      <Breadcrumb title={"Blog Details"} pages={["blog details"]} />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[750px] w-full mx-auto px-4 sm:px-8 xl:px-0">
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

              {/* <!-- divider --> */}
              <span className="block w-px h-4 bg-gray-4"></span>

              <a href="#" className="ease-out duration-200 hover:text-blue">
                300k Views
              </a>
            </span>

            <h2 className="font-medium text-dark text-xl lg:text-2xl xl:text-custom-4xl mb-4">
              What information is needed for shipping?
            </h2>

            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sit amet eros ac ipsum egestas dapibus. Vivamus gravida, ex non
              placerat tincidunt, lorem felis facilisis tellus, vitae bibendum
              purus felis eget tellus. In non rutrum ipsum. Morbi ut dui ante.
            </p>

            <p className="mb-6">
              Nunc faucibus libero sem, quis placerat nisl pellentesque eget.
              Morbi porta velit ut leo sollicitudin, a faucibus purus faucibus.
              Maecenas mollis dui nec metus euismod, sed aliquam risus luctus.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              enim lobortis scelerisque fermentum. Neque sodales ut etiam sit
              amet. Ligula ullamcorper malesuada proin libero nunc consequat
              interdum varius. Quam pellentesque nec nam aliquam sem et tortor
              consequat.
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
                ‘‘Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod incididunt utionals labore et dolore magna aliqua
                quis fermentum,,
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
              consectetur adipiscing elit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat mattis vulputate
              cupidatat.
            </p>

            <p className="mb-6">
              Nunc faucibus libero sem, quis placerat nisl pellentesque eget.
              Morbi porta velit ut leo sollicitudin, a faucibus purus faucibus.
              Maecenas mollis dui nec metus euismod, sed aliquam risus luctus.
            </p>

            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              enim lobortis scelerisque fermentum. Neque sodales ut etiam sit
              amet. Ligula ullamcorper malesuada proin libero nunc consequat
              interdum varius. Quam pellentesque nec nam aliquam sem et tortor
              consequat.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sit amet eros ac ipsum egestas dapibus. Vivamus gravida, ex non
              placerat tincidunt, lorem felis facilisis tellus, vitae bibendum
              purus felis eget tellus. In non rutrum ipsum. Morbi ut dui ante.
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

              {/* <!-- Social Links start --> */}
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
                        d="M0.47827 8.52675C0.531395 10.9971 1.67359 13.4674 3.61264 14.9549C4.22357 15.4064 4.88764 15.6721 5.57826 15.9642C5.28607 14.0783 6.00326 12.1924 6.4017 10.333C6.45482 10.1471 6.48139 9.93456 6.48139 9.72206C6.48139 9.42987 6.37514 9.13769 6.29545 8.8455C6.21576 8.36737 6.26889 7.86269 6.48139 7.41112C6.77357 6.80019 7.4642 6.32206 8.07514 6.56112C8.63295 6.77362 8.84545 7.51737 8.7392 8.10175C8.63295 8.71269 8.3142 9.24394 8.15482 9.82831C7.96889 10.4127 7.99545 11.1299 8.42045 11.5283C8.81889 11.9002 9.45639 11.9267 9.96107 11.7142C10.7048 11.3955 11.1829 10.6517 11.4751 9.908C12.0064 8.52675 11.9001 6.77362 10.8111 5.76425C10.3595 5.31269 9.72201 5.0205 9.03139 4.91425C7.86264 4.72831 6.58764 5.07362 5.7642 5.92362C4.94076 6.77362 4.56889 8.07519 4.9142 9.19081C5.02045 9.56269 5.23295 9.93456 5.31264 10.3064C5.39232 10.6783 5.36576 11.1564 5.10014 11.4221C5.07358 11.4486 5.04701 11.4752 4.99389 11.5017C4.94076 11.5283 4.86107 11.4752 4.80795 11.4486C4.30326 11.1299 3.90482 10.6252 3.66576 9.96081C3.47076 9.33269 3.64664 8.72831 3.90827 8.318C4.1699 7.90769 4.78856 8.14269 5.33339 8.28525C5.6999 8.4199 6.298 8.59675 6.54546 8.86969C7.20576 9.3799 7.41139 9.90769 7.09576 10.6699C6.78014 11.2579 6.57389 11.9186 6.09639 12.2077C5.68264 12.4137 5.07014 12.5299 4.49814 12.3626C3.77514 12.1426 3.33889 11.3469 3.479 10.5927C3.479 9.9077 3.20639 9.26269 2.80639 9.00675C2.43639 8.77269 1.99139 8.77831 1.62326 8.96269C1.29232 9.12675 1.0599 9.50575 0.96545 9.9339C0.85201 10.3139 0.47827 8.52675 0.47827 8.52675Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
              {/* Social Links end */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
