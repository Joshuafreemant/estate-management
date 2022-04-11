

import { Fragment, useState, useEffect } from "react";
import { Table } from "antd";
import { TableProps } from "antd/lib/table";
import { render } from "react-dom";

import { Dialog, Transition } from '@headlessui/react'
import { RiNotificationLine, RiDashboardLine, RiKeyLine, RiUserLine, RiSecurePaymentLine, RiCalendarLine, RiShape2Line } from 'react-icons/ri';

// @ts-ignore
import reqwest from "reqwest";

import "antd/dist/antd.css";


function Payments() {

    const [isLoading, setIsLoading] = useState(false);
    const [userList, setUserList] = useState([]);
    const [img, setImg] = useState([]);
    const [pagination, setPagination] = useState({});

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);



    const customFetch = async (params = {}) => {
        console.log("params:", params);
        setIsLoading(true);
        const response = await reqwest({
            url: "https://randomuser.me/api",
            method: "get",
            data: {
                results: 5
            },
            type: "json"
        });
        console.log("response.results", response.results);
        console.log("response.results phone", response.results.phone);

        setUserList(response.results);
        setIsLoading(false);
    };

    useEffect(() => {
        customFetch({});
    }, []);

    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal(e) {
        e.preventDefault()
        setIsOpen(true)
    }

    const columns = [

        {
            title: "Name",
            dataIndex: "picture",

            sorter: (a, b) => (a.picture.thumbnail > b.picture.thumbnail ? 1 : -1),
            render: (picture) => <div>
                <img className="-mr-16 rounded-md" src={picture.thumbnail} />
            </div>,
            width: "1%"

        },

        {

            dataIndex: "name",

            render: (name) =>
                <div>
                    <p className="font-bold">General Cleaning Estate</p>
                    <p className="text-xx text-gray-600 font-light">Updated 1 day ago</p>
                </div>,
            width: "25%"
        },
        {
            title: "Amount",

            render: () =>
            <div>
                <p className="font-semibold text-sm text-teal-500">#45,000</p>
              
            </div>,
           
            sorter: (a, b) => (a.email.first > b.email.first ? 1 : -1)
        },
        {
            title: "Date Created",
            dataIndex: "gender",
            
            render: () =>
            <div>
                <p className="font-semibold text-xs">Oct 24th, 2020</p>
                <p className="font-light text-xx text-black">
               
                08:29AM
                
                </p>
              
            </div>,
            sorter: (a, b) => (a.gender.male > <b className="gender female"></b> ? 1 : -1),

            width: "20%"
        },
        {
            title: "Due Date",
            dataIndex: "gender",
            render: () =>
            <div>
                <p className="font-semibold text-xs">Oct 24th, 2020</p>
                <p className="font-light text-xx text-black">
               
                08:29AM
                
                </p>
              
            </div>,
            sorter: (a, b) => (a.gender.male > <b className="gender female"></b> ? 1 : -1),
        },
        {
            title: "Paid",
            dataIndex: "dob",

            render: (dob) =>
            <div>
                <p className="text-xs text-black font-semibold">{dob.age}</p>
                
            </div>,
            sorter: (a, b) => (a.gender.male > <b className="gender female"></b> ? 1 : -1),
        },
        {
            title: "Status",
            dataIndex: "nat"
        },
        {
            title: '',
            dataIndex: '',
            key: 'x',
            render: () => <button
                type="button"
                onClick={e => openModal(e)}
                className="px-4 py-2 text-xl font-medium text-black font-bold"
            >
                ...
            </button>,
        },
    ];

    const handleTableChange = (
        pagination,
        filters,
        sorter
    ) => {
        setPagination(pagination);
        customFetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters
        });
    };

    const onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        // setSelectedRowKeys({ selectedRowKeys });
    }

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;




    return (
        <div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Payment successful
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Your payment has been successfully submitted. We’ve sent you
                                        an email with all of the details of your order.
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Got it, thanks!
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>



            <div className="flex">
                <div
                    className="w-2/12 h-screen bg-white items-center flex flex-col pt-6 shad"
                >
                    <div className="rounded-full w-12 h-12 bg-black mb-12"></div>

                    <div className="flex gap-5 flex-col">
                        <div className="flex flex-col items-center text-2xl">
                            <RiDashboardLine />
                            <p className="text-sm font-semibold">Dashboard</p>
                        </div>

                        <div className="flex flex-col items-center text-2xl">

                            <RiKeyLine />
                            <p className="text-sm font-semibold">Residents</p>
                        </div>

                        <div className="flex flex-col items-center text-2xl">

                            <RiUserLine />
                            <p className="text-sm font-semibold">Visitors</p>
                        </div>

                        <div className="flex flex-col items-center text-2xl">

                            <RiSecurePaymentLine />
                            <p className="text-sm font-semibold">Payments</p>
                        </div>

                        <div className="flex flex-col items-center text-2xl">

                            <RiCalendarLine />
                            <p className="text-sm font-semibold">Estate News</p>
                        </div>

                        <div className="flex flex-col items-center text-2xl">

                            <RiShape2Line />
                            <p className="text-sm font-semibold">Staffs</p>
                        </div>

                        <div className="flex flex-col items-center ">

                            <p className="text-xs ">Estate Management</p>
                            <p className="text-xs ">&copy; All Rights Reserved</p>
                        </div>
                    </div>
                </div>

                <div className="w-10/12 flex flex-col  bg-gray-200">
                    <div className="flex px-12 bg-white h-1/6 py-4 items-center justify-between">
                        <div className="w-full  flex  items-center justify-between">
                            <h1 className="text-black text-lg font-semibold">Payment</h1>
                            <div className="w-5/12 bg-gray-100 h-00 rounded-3xl py-2 flex px-8">
                                <input
                                    type="text"
                                    name=""
                                    placeholder="search here..."
                                    id=""
                                    className="bg-transparent w-11/12"
                                />

                                <i className="ri-search-line"></i>
                            </div>

                            <div className="border-r-1 text-lg">
                                <RiNotificationLine />
                            </div>

                            <div className="w-3/12 flex justify-between gap-4">
                                <div className="bg-black w-12 h-12 rounded-full">
                                    <img src="" alt="" />
                                </div>
                                <div className="flex flex-col -gap-4">
                                    <h4>Giovanni</h4>
                                    <p className="text-xs">Superadmin</p>
                                </div>

                                <div className="w-4/12">
                                    <select name="" id="" className="border rounded-3xl p-2 w-11/12">
                                        <option value="English">EN</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="flex justify-between ml-12 w-11/12 items-center mt-8">
                        <div
                            className="bg-white p-2  w-3/12 rounded-2xl px-6 flex items-center"
                        >
                            <input
                                type="text"
                                name=""
                                placeholder="search here..."
                                id=""
                                className="bg-transparent w-11/12"
                            />

                            <i className="ri-search-line"></i>
                        </div>


                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 bg-gray-300 py-2 px-3 text-teal-600 font-semibold text-xs  rounded-sm">  
                            <RiCalendarLine />
                            Date Filter</button>
                           
                            <button className="flex items-center gap-2 bg-gray-300 py-2 px-3 text-teal-600 font-semibold text-xs  rounded-sm"> 
                            
                            <RiCalendarLine />
                            Generate Report</button>

                            <button className="bg-teal-600 py-2 px-3 text-white font-semibold  text-xs  rounded-sm"> Add New Levy</button>
                        </div>
                    </div>






                    <div className=" w-11/12 ml-12 mt-8">
                        <Table
                            rowSelection={rowSelection}
                            columns={columns}
                            dataSource={userList}
                            loading={isLoading}
                            onChange={handleTableChange}
                            pagination={pagination}
                            rowKey="email"
                        />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payments