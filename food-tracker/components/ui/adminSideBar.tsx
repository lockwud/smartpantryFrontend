"use client"
import { ShoppingBasket } from "lucide-react";
import Link from "next/link"
import { useState, useEffect } from 'react';
import { FaBars, FaHome, FaBox, FaUsers, FaClipboardList, FaSignOutAlt, FaFileInvoice, FaRegBell, FaTruck, FaCreditCard } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`bg-gray-900 text-white p-5 shadow-lg border-r border-green-400 flex flex-col h-screen ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300 overflow-y-auto`}>
      <div className="flex items-center justify-between p-3">
        <h1 className={`text-lg font-bold ${!isOpen && 'hidden'}`}> 
          <div>
          <span className="ml-2 text-xl font-bold text-white-900 dark:text-white flex items-center"><ShoppingBasket className="h-6 w-6 text-emerald-600 dark:text-emerald-500"></ShoppingBasket>FreshTrack</span>
          </div>
        </h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </button>
      </div>
      <nav className="mt-4">
          <Link className="mb-3 p-3 rounded-lg hover:bg-green-700 transition-all flex items-center" href="/dashboard">
              <FaHome className="mr-2" /> {isOpen && 'Dashboard'}
            </Link>
          <Link className="mb-3 p-3 rounded-lg hover:bg-green-700 transition-all flex items-center" href="/inventory">
              <FaBox className="mr-2" /> {isOpen && 'Inventory'}
            </Link>
            <Link className="mb-3 p-3 rounded-lg hover:bg-green-700 transition-all flex items-center" href="/users">
              <FaBox className="mr-2" /> {isOpen && 'Users'}
            </Link>
          <Link className="mb-3 p-3 rounded-lg hover:bg-green-700 transition-all flex items-center" href= "/admin/orders">
              <FaClipboardList className="mr-2" /> {isOpen && 'Orders'}
            </Link>
          <Link className="mb-3 p-3 rounded-lg hover:bg-green-700 transition-all flex items-center" href= "/admin/deliveries">
              <FaTruck className="mr-2" /> {isOpen && 'Deliveries'}
            </Link>
          <Link className="mb-3 p-3 rounded-lg hover:bg-green-700 transition-all flex items-center" href= "/admin/orders">
              <FaCreditCard className="mr-2" /> {isOpen && 'Payments'}
            </Link>
          <Link className="mb-3 p-3 rounded-lg hover:bg-green-700 transition-all flex items-center" href="admin/invoices">
              <FaFileInvoice className="mr-2" /> {isOpen && 'Invoices'}
            </Link>
          <Link className="m3-4 p-3 rounded-lg hover:bg-green-700 transition-all flex items-center" href="admin/tips">
              <FaRegBell className="mr-2" /> {isOpen && 'Tips'}
            </Link>
          
          <Link className="p-3 hover:bg-red-700 mt-auto flex items-center" href="/signout">
            <button className="flex items-center w-full">
              <FaSignOutAlt className="mr-2" /> {isOpen && 'Logout'}
            </button>
          </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
