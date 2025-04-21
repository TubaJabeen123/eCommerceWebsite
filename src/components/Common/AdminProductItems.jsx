"use client";
import React from "react";
import Image from "next/image";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateQuickView } from "@/redux/features/quickView-slice";



import { updateproductDetails } from "@/redux/features/product-details";
import { useDispatch } from "react-redux";
import Link from "next/link";

const AdminProductItem = ({ item }) => {
  const { openModal } = useModalContext();
  const dispatch = useDispatch();

  // update the QuickView state
  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
  };




  const handleProductDetails = () => {
    dispatch(updateproductDetails({ ...item }));
  };

  return (
    <div className="group">
      <div className="relative overflow-hidden flex items-center justify-center rounded-lg bg-[#F6F7FB] min-h-[270px] mb-4">
        <Image src={item.imgs.previews[0]} alt="" width={250} height={250} />

        <div className="absolute left-0 bottom-0 translate-y-full w-full flex items-center justify-center gap-2.5 pb-5 ease-linear duration-200 group-hover:translate-y-0">


        </div>
      </div>

      <div className="flex items-center gap-2.5 mb-2">
        <div className="flex items-center gap-1">
          <Image
            src="/images/icons/icon-star.svg"
            alt="star icon"
            width={14}
            height={14}
          />
          <Image
            src="/images/icons/icon-star.svg"
            alt="star icon"
            width={14}
            height={14}
          />
          <Image
            src="/images/icons/icon-star.svg"
            alt="star icon"
            width={14}
            height={14}
          />
          <Image
            src="/images/icons/icon-star.svg"
            alt="star icon"
            width={14}
            height={14}
          />
          <Image
            src="/images/icons/icon-star.svg"
            alt="star icon"
            width={14}
            height={14}
          />
        </div>
      </div>

      <Link
        href={`/product-details/${item.id}`}
        className="font-semibold text-dark hover:text-blue text-base leading-6 mb-2.5 inline-block"
        onClick={handleProductDetails}
      >
        {item.title}
      </Link>

      <div className="flex items-center justify-between">
        <span className="font-semibold text-xl text-dark">
          ${item.price}
        </span>

      </div>
    </div>
  );
};

export default AdminProductItem;
