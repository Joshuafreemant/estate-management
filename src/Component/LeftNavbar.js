

import { Fragment, useState, useEffect } from "react";
import { Table } from "antd";
import { TableProps } from "antd/lib/table";
import { render } from "react-dom";

import { Dialog, Transition } from '@headlessui/react'
import { RiNotificationLine, RiDashboardLine, RiKeyLine, RiUserLine, RiSecurePaymentLine, RiCalendarLine, RiShape2Line, RiSearch2Line } from 'react-icons/ri';

// @ts-ignore
import reqwest from "reqwest";
import Dashboard from './Dashboard';


import "antd/dist/antd.css";

import { NavLink } from "react-router-dom";


function Dash() {






    return (
        <>

            <div
                className="w-2/12 h-screen bg-white items-center flex flex-col pt-6 shad"
            >
                <div className="rounded-full w-12 h-12 bg-black mb-12"></div>

                <div className="flex gap-7 flex-col">
                    <div className="flex flex-col items-center text-2xl">
                        <RiDashboardLine />

                        <NavLink className="text-xs font-medium text-gray-700" exact to="/">Dashboard</NavLink>

                    </div>

                    <div className="flex flex-col items-center text-2xl">

                        <RiKeyLine />

                        <NavLink className="text-xs font-medium text-gray-700" exact to="/residents">Residents</NavLink>
                       


                    </div>

                    <div className="flex flex-col items-center text-2xl">

                        <RiUserLine />
                        <NavLink className="text-xs font-medium text-gray-700" exact to="/visitors">Visitors</NavLink>


                    </div>

                    <div className="flex flex-col items-center text-2xl">

                        <RiSecurePaymentLine />

                        <NavLink className="text-xs font-medium text-gray-700" exact to="/payments">Payments</NavLink>

                    </div>

                    <div className="flex flex-col items-center text-2xl">

                        <RiCalendarLine />


                        <NavLink className="text-xs font-medium text-gray-700" exact to="/news">Estate News</NavLink>

                    </div>

                    <div className="flex flex-col items-center text-2xl">

                        <RiShape2Line />

                        <NavLink className="text-xs font-medium text-gray-700" exact to="/">Staffs </NavLink>

                    </div>

                    <div className="flex flex-col items-center ">

                        <p className="text-xs ">Estate Management</p>
                        <p className="text-xs ">&copy; All Rights Reserved</p>
                    </div>
                </div>
            </div>









        </>
    )
}

export default Dash