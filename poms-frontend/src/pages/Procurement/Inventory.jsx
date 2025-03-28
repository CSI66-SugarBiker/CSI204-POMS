import React from 'react';

const ProcurementInventory = () => {
    const orders = [
        { name: "รายการสั่งซื้อ", price: 1010.0, quantity: 1, status: "อนุมัติ" },
        { name: "รายการสั่งซื้อ", price: 1010.0, quantity: 1, status: "รอดำเนินการ" },
        { name: "รายการสั่งซื้อ", price: 1010.0, quantity: 1, status: "ถูกปฏิเสธ" },
        { name: "รายการสั่งซื้อ", price: 1010.0, quantity: 1, status: "อนุมัติ" },
        { name: "รายการสั่งซื้อ", price: 1010.0, quantity: 1, status: "รอดำเนินการ" },
        { name: "รายการสั่งซื้อ", price: 1010.0, quantity: 1, status: "ถูกปฏิเสธ" },
        { name: "รายการสั่งซื้อ", price: 1010.0, quantity: 1, status: "อนุมัติ" },
        { name: "รายการสั่งซื้อ", price: 1010.0, quantity: 1, status: "รอดำเนินการ" },
        { name: "รายการสั่งซื้อ", price: 1010.0, quantity: 1, status: "ถูกปฏิเสธ" },
        { name: "รายการสั่งซื้อ", price: 1010.0, quantity: 1, status: "อนุมัติ" },
        { name: "รายการสั่งซื้อ", price: 1010.0, quantity: 1, status: "รอดำเนินการ" },
        { name: "รายการสั่งซื้อ", price: 1010.0, quantity: 1, status: "ถูกปฏิเสธ" },
        { name: "รายการสั่งซื้อ", price: 1010.0, quantity: 1, status: "อนุมัติ" },
        { name: "รายการสั่งซื้อ", price: 1010.0, quantity: 1, status: "รอดำเนินการ" },
      ];
    
      return (
        <div >
            <div className="w-full  bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            {/* หัวข้อรายการสั่งซื้อ */}
            <h1 className="text-lg font-bold mb-4">รายการสั่งซื้อ</h1>
    
            {/* ตารางรายการสั่งซื้อ */}
            <div className="overflow-hidden rounded-lg">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="px-8 py-3">ชื่อ</th>
                    <th className="px-8 py-3">ราคา</th>
                    <th className="px-8 py-3">จำนวน</th>
                    <th className="px-8 py-3">สถานะ</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="px-8 py-3">{order.name}</td>
                      <td className="px-8 py-3">{order.price.toFixed(2)}</td>
                      <td className="px-8 py-3">{order.quantity}</td>
                      <td
                        className={`px-8 py-3 font-semibold ${
                          order.status === "อนุมัติ"
                            ? "text-green-600"
                            : order.status === "รอดำเนินการ"
                            ? "text-orange-500"
                            : "text-red-500"
                        }`}
                      >
                        {order.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    };
    

export default ProcurementInventory;
