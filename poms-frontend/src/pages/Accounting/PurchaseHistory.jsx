import React from "react";

const AccPurchaseHistory = () => {
  const orders = [
    { name: "รายการสั่งซื้อ", orderNo: Math.random()*1000000, orderDate: new Date(), img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s" },
    {
      name: "รายการสั่งซื้อ",
      orderNo: Math.random()*1000000,
      orderDate: new Date(),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s",
    },
    {
      name: "รายการสั่งซื้อ",
      orderNo: Math.random()*1000000,
      orderDate: new Date(),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s",
    },
    { name: "รายการสั่งซื้อ", orderNo: Math.random()*1000000, orderDate: new Date(), img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s" },
    {
      name: "รายการสั่งซื้อ",
      orderNo: Math.random()*1000000,
      orderDate: new Date(),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s",
    },
    {
      name: "รายการสั่งซื้อ",
      orderNo: Math.random()*1000000,
      orderDate: new Date(),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s",
    },
    { name: "รายการสั่งซื้อ", orderNo: Math.random()*1000000, orderDate: new Date(), img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s" },
    {
      name: "รายการสั่งซื้อ",
      orderNo: Math.random()*1000000,
      orderDate: new Date(),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s",
    },
    {
      name: "รายการสั่งซื้อ",
      orderNo: Math.random()*1000000,
      orderDate: new Date(),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s",
    },
    { name: "รายการสั่งซื้อ", orderNo: Math.random()*1000000, orderDate: new Date(), img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s" },
    {
      name: "รายการสั่งซื้อ",
      orderNo: Math.random()*1000000,
      orderDate: new Date(),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s",
    },
    {
      name: "รายการสั่งซื้อ",
      orderNo: Math.random()*1000000,
      orderDate: new Date(),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s",
    },
    { name: "รายการสั่งซื้อ", orderNo: Math.random()*1000000, orderDate: new Date(), img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s" },
    {
      name: "รายการสั่งซื้อ",
      orderNo: Math.random()*1000000,
      orderDate: new Date(),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s",
    },
  ];

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  }

  return (
    <div className="bg-gray-100">
      <div className="p-[20px] bg-white shadow-sm mb-4 mt-4">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
            />
          </svg>
          <h2 className="text-xl font-semibold">Purchase History</h2>
        </div>
      </div>

      <div className="space-y-4 pb-8">
        {orders.map((order, index) => (
          <div key={index} className="max-w-2xl mx-auto p-6 bg-white shadow-sm">
            <div className="space-y-6">
              <div>
                <h2 className="text-gray-500 font-medium text-sm uppercase">ORDER STATUS:</h2>
                <h1 className="text-2xl font-bold">IT'S ORDERED!</h1>
                <p className="text-green-700 mt-1">Estimated delivery</p>
              </div>

              <div className="py-4">
                <div className="bg-gray-100 p-4 w-32 h-32 flex items-center justify-center">
                  <img
                    src={order.img || "/placeholder.svg"}
                    width={100}
                    height={100}
                    alt="Product"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="space-y-2">
                    <div>
                      <span className="text-gray-500 font-medium text-sm uppercase">ORDER NO.: {order.orderNo}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 font-medium text-sm uppercase">
                        ORDER DATE: {formatDate(order.orderDate)}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button className="w-full sm:w-64 h-12 text-base font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
                      VIEW ORDER
                    </button>
                    <button className="w-full sm:w-64 h-12 text-base font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
                      CANCEL ORDER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccPurchaseHistory;
