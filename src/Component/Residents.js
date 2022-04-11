

import { Fragment, useState, useEffect } from "react";
import { Table } from "antd";
import { TableProps } from "antd/lib/table";
import { render } from "react-dom";

import { Dialog, Transition } from '@headlessui/react'
import { RiNotificationLine, RiDashboardLine, RiKeyLine, RiUserLine,RiSearch2Line, RiSecurePaymentLine, RiCalendarLine, RiShape2Line } from 'react-icons/ri';

// @ts-ignore
import reqwest from "reqwest";

import "antd/dist/antd.css";
import TopNavbar from "./TopNavbar";
import LeftNavbar from "./LeftNavbar";


function Residents() {

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
            title: "Resident",
            dataIndex: "picture",

            sorter: (a, b) => (a.picture.thumbnail > b.picture.thumbnail ? 1 : -1),
            render: (picture) => <div>
                <img className="rounded-full -mr-16" src={picture.thumbnail} />
            </div>,
            width: "1%"

        },

        {

            dataIndex: "name",

            render: (name) =>
                <div>
                    <label htmlFor="" className="text-xx text-teal-300 font-semibold">#GS-2234</label>
                    <p className="font-bold">{name.first} {name.last}</p>
                </div>,
            width: "25%"
        },
        {
            title: "Email Address",
            dataIndex: "email",
            sorter: (a, b) => (a.email.first > b.email.first ? 1 : -1)
        },
        {
            title: "Date Added",
            dataIndex: "gender",
            sorter: (a, b) => (a.gender.male > <b className="gender female"></b> ? 1 : -1),

            // filters: [
            //     { text: "Male", value: "male" },
            //     { text: "Female", value: "female" }
            // ],
            width: "20%"
        },
        {
            title: "Apartment Type",
            dataIndex: "gender",
            // filters: [
            //     { text: "Male", value: "male" },
            //     { text: "Female", value: "female" }
            // ],
            width: "20%"
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
            <LeftNavbar/>


                <div className="w-10/12 flex flex-col  bg-gray-200">
                  <TopNavbar/>

                    <div className="flex justify-between ml-12 w-11/12 items-center mt-8">
                    <div
                        className="flex items-center bg-white p-2 mt-8 w-3/12 rounded-2xl px-6 flex items-center"
                    >
                        <input
                            type="text"
                            name=""
                            placeholder="search here..."
                            id=""
                            className="focus:outline-none bg-transparent w-11/12"
                        />

<RiSearch2Line/>

                    </div>


                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 bg-gray-300 py-2 px-3 text-teal-600 font-semibold text-xs  rounded-sm">  
                            <RiCalendarLine />
                            Date Filter</button>
                            <button className="flex items-center gap-2 bg-gray-300 py-2 px-3 text-teal-600 font-semibold text-xs  rounded-sm">
                            <RiCalendarLine />
                             Generate Report</button>
                            <button className="bg-teal-600 py-2 px-3 text-white font-semibold  text-xs  rounded-sm"> Add New Resident</button>
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

export default Residents