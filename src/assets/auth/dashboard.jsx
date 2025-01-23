import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const loggedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!loggedUser) {
      navigate("/login");
    }
  }, []);

  if (!loggedUser) {
    return <>Not Logged </>;
  }
  return (
    <div>
      <div className="bg-gray-200 p-2">
        <nav className="bg-white shadow-lg left-28 fixed p-4 rounded-xl w-[calc(100vw-116px)]">
          <div className="flex justify-between">
            <a href="#" className="text-black text-2xl font-semibold">
              Dashboard
            </a>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="border border-gray-200 size-[36px] flex text-lg items-center justify-center text-gray-500 p-2 rounded-lg"
              >
                <Icon icon="gravity-ui:gear" />
              </a>
              <div className="border flex flex-row gap-3 border-gray-200 px-2 py-1 rounded-lg">
                <div className="text-gray-500">
                  <Icon icon="uil:calender" width="24" height="24" />
                </div>
                <select
                  className="text-sm hidden sm:block"
                  name="date"
                  id="date"
                >
                  <option value="1">22 Oct 2024 - 30 Oct 2024</option>
                </select>
              </div>
              <button className="border flex gap-2 border-gray-300 rounded-lg px-4 py-1 bg-[#15c67f] text-lg text-white font-semibold">
                <span className="hidden sm:block">Export</span>
                <a href="#">
                  <Icon icon="tabler:arrow-bar-up" width="24" height="24" />
                </a>
              </button>
            </div>
          </div>
        </nav>
        <div className="flex top-2 fixed h-full sidebar">
          <aside className="w-20 rounded-xl bg-white h-screen">
            <div className="p-4 flex flex-col justify-between h-full">
              <ul className="flex flex-col items-center gap-3">
                <div className="text-3xl p-2 rounded-lg text-white bg-[#15c67f]">
                  <Icon icon="ph:star-of-david-bold" />
                </div>
                <li className="p-3 text-gray-500 text-3xl">
                  <Icon icon="ic:baseline-search" />
                </li>
                <Link to="/" className="p-3 text-gray-500 text-3xl">
                  <Icon icon="ic:round-home" />
                </Link>
                <li className="p-3 text-gray-500 text-2xl">
                  <Icon icon="vaadin:lines" />
                </li>
                <li className="p-3 text-gray-500 text-3xl">
                  <Icon icon="fluent:toolbox-12-regular" />
                </li>
                <li className="p-3 text-gray-500 text-2xl">
                  <Icon icon="gg:list" />
                </li>
                <li className="p-3 text-gray-500 text-3xl">
                  <Icon icon="iconamoon:trash-bold" />
                </li>
              </ul>
              <ul className="flex flex-col items-center justify-between">
                <li className="p-3 text-gray-500 text-3xl">
                  <Icon icon="mingcute:music-line" />
                </li>
                <li className="p-3 text-gray-500 text-3xl">
                  <Icon icon="gravity-ui:gear" />
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <main className="flex flex-col lg:flex-row items-center gap-4 mt-20 ml-24">
          <div className="flex flex-col gap-2 w-full max-w-md">
            {/* <!-- card --> */}
            <div className="border border-gray-300 p-2 rounded-xl bg-white">
              <div className=" ">
                <div className="flex flex-row justify-between w-full">
                  <p className="font-medium text-xl">My card</p>
                  <p className="text-[#15c67f] text-lg font-medium">
                    + Add Card
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex mt-4">
                    <p className="text-2xl font-semibold">
                      $120,530
                      <span className="text-gray-500 text-2xl font-semibold">
                        .44
                      </span>
                    </p>
                  </div>
                  <p className="text-gray-500 text-base mb-1">
                    Current balance
                  </p>
                </div>
              </div>
              <div className="flex flex-col p-4 gap-6 border border-gray-500 rounded-t-xl bg-[#484848]">
                <p className="text-white">Jonas Khanwald</p>
                <div className="flex justify-between items-center gap-1 mb-4 text-white">
                  <p className="text-xl whitespace-nowrap font-medium">
                    3329 2010 3920 4438
                  </p>
                  <div className="border  items-center gap-2 rounded-full px-2 py-1 border-gray-500 hidden sm:flex">
                    <span>CVV</span>
                    <Icon icon="ri:eye-off-fill" width="24" height="24" />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div className="flex flex-col items-center justify-between">
                  <a className="border-2 flex size-10 items-center justify-center border-gray-200 rounded-full p-2 hover:bg-gray-200 transition-all">
                    <Icon
                      icon="icon-park-outline:send"
                      width="48"
                      height="48"
                    />
                  </a>
                  <p className="font-semibold text-sm">Send</p>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <a className="border-2 flex size-10 items-center justify-center border-gray-200 rounded-full p-2 hover:bg-gray-200 transition-all">
                    <Icon icon="uil:down-arrow" width="24" height="24" />
                  </a>
                  <p className="font-semibold text-sm">Receive</p>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <a className="border-2 flex size-10 items-center justify-center border-gray-200 rounded-full p-2 hover:bg-gray-200 transition-all">
                    <Icon icon="akar-icons:hand" width="24" height="24" />
                  </a>
                  <p className="font-semibold text-sm">Request</p>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <a className="border-2 flex size-10 items-center justify-center border-gray-200 rounded-full p-2 hover:bg-gray-200 transition-all">
                    <Icon
                      icon="iconamoon:invoice-light"
                      width="24"
                      height="24"
                    />
                  </a>
                  <p className="font-semibold text-sm">Invoice</p>
                </div>
              </div>
            </div>
            {/* <!-- first card end --> */}

            {/* <!-- second card --> */}
            <div className="border border-gray-300 p-4 rounded-xl bg-white">
              <div className="flex justify-between mb-4">
                <p className="text-xl font-semibold">Transfer Again</p>
                <a className="text-gray-500 text-2xl">
                  <Icon icon="ic:baseline-search" />
                </a>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col justify-between">
                  <img
                    className="rounded-full size-12 object-cover"
                    src="pexels-alesiakozik-7295645.jpg"
                  />
                  <p className="text-sm">Martha N.</p>
                </div>
                <div className="">
                  <img
                    className="rounded-full size-12 object-cover"
                    src="pexels-jelena-kostic-3053338-19322788.jpg"
                  />
                  <p className="text-sm">Ragnar L.</p>
                </div>
                <div className="">
                  <img
                    className="rounded-full size-12 object-cover"
                    src="pexels-ketut-subiyanto-4909509.jpg"
                  />
                  <p className="text-sm">Rollo L.</p>
                </div>
                <div className="">
                  <img
                    className="rounded-full size-12 object-cover"
                    src="pexels-olly-3785077.jpg"
                  />
                  <p className="text-sm">Floki T.</p>
                </div>
                <div className="">
                  <img
                    className="rounded-full size-12 object-cover"
                    src="pexels-olly-3785079.jpg"
                  />
                  <p className="text-sm">Bjorn I.</p>
                </div>
              </div>
            </div>
            {/* <!-- second card end --> */}

            {/* <!-- third card --> */}
            <div className="border border-gray-300 p-4 rounded-xl bg-white">
              <div className="flex justify-between">
                <div className="flex flex-col justify-between">
                  <select
                    className="text-xl font-semibold"
                    name="date"
                    id="date"
                  >
                    <option value="1">Exchange Rate from GBP</option>
                  </select>
                  <p className="text-gray-400 text-sm">
                    Last updated: Sunday 15 September,2024 at 12:15 PM
                  </p>
                </div>
                <a
                  href="#"
                  className="border border-gray-200 size-[40px] flex items-center justify-center text-gray-500 p-3 rounded-lg text-lg"
                >
                  <span className="hidden sm:block">Add</span>
                </a>
              </div>
              <div className="flex justify-between mt-6">
                <div className="flex flex-col justify between">
                  <img src="flag.webp" className="rounded-full size-12 mb-8" />
                  <p className="text-lg font bold">$1.34</p>
                  <p className="text-gray-500">US Dollar</p>
                </div>
                <div className="flex flex-col justify between">
                  <img src="falg2.webp" className="rounded-full size-12 mb-8" />
                  <p className="text-lg font-medium">
                    RP20223
                    <span className="text-gray-500 text-lg font-semibold">
                      .44
                    </span>
                  </p>
                  <p className="text-gray-500">Indosian Dollar</p>
                </div>
              </div>
            </div>
            {/* <!-- third card end --> */}
          </div>
          <div className="grid grid-cols-2 gap-2 w-full">
            {/* <!-- first grid column --> */}
            <div className="col-span-2 flex flex-col-reverse xl:flex-row border border-gray-300 p-4 rounded-xl bg-white">
              <div className="flex flex-col xl:max-w-[45%] justify-start gap-8">
                <div className="flex flex-col">
                  <p className="text-2xl font-medium">
                    hello ,{loggedUser.firstname}
                  </p>
                  <p className="text-gray-400 text-sm font-medium">
                    See your cashflow activity everyday.
                  </p>
                </div>
                <div className="">
                  <div className="flex justify-between">
                    <div className="flex items-center flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <span className="size-2 block rounded-full bg-[#0dc782]"></span>
                        Income
                      </div>
                      <h3 className="text-2xl font-semibold">£15,520</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <span className="size-2 block rounded-full bg-[#a9fde1]"></span>
                        Expense
                      </div>
                      <h3 className="text-2xl font-semibold">£3,220</h3>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 mb-2">
                    Looks like you've spent more than E3k for the past 3
                    wecks.It's 12.5% higher than last month of your spent.
                  </p>
                  <div className="border-2 border-[#ebf6f2] bg-[#f6fbf9] items-center flex rounded-lg p-2 justify-between mt-4">
                    <p className="text-[#15c67f] text-sm">
                      Set a budget for a next period to save more of your money
                    </p>
                    <button className="gap-2 rounded-lg px-3 ml-10 bg-[#15c67f] h-8 text-sm text-white font-medium whitespace-nowrap">
                      Set budget
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <img className="h-[270px]" src="graph.jpg" />
              </div>
            </div>

            {/* <!-- first column end --> */}

            {/* <!-- second column first card --> */}
            <div className="h-fit flex flex-col col-span-2 xl:col-span-1 justify-between border border-gray-300 p-4 rounded-xl bg-white">
              <h2 className="text-lg font-medium mb-4">Upcoming Payments</h2>
              <div className="flex justify-between mb-4">
                <div className="border border-gray-400 rounded-lg p-1">
                  <p className="text-xs font-medium text-gray-500">Sep</p>
                  <p className="text-sm font-semibold">20</p>
                </div>
                <div className="">
                  <p className="text-md font-medium">Netflix Subscription</p>
                  <p className="text-sm text-gray-400 font-medium">
                    Entertainment . Recurring
                  </p>
                </div>
                <div className="flex">
                  <p className="text-md font-medium">$15.99</p>
                  <a className="text-gray-500 ml-4">
                    <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <div className="border border-gray-400 rounded-lg p-1">
                  <p className="text-xs font-medium text-gray-500">Sep</p>
                  <p className="text-sm font-semibold">21</p>
                </div>
                <div className="">
                  <p className="text-md font-medium">iCoud Monthly ITB</p>
                  <p className="text-sm text-gray-400 font-medium">
                    Bills . Recurring
                  </p>
                </div>
                <div className="flex">
                  <p className="text-md font-medium">$7.99</p>
                  <a className="text-gray-500 ml-4">
                    <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="border border-gray-400 rounded-lg p-1">
                  <p className="text-xs font-medium text-gray-500">Sep</p>
                  <p className="text-sm font-semibold">27</p>
                </div>
                <div className="">
                  <p className="text-md font-medium">House Intallments</p>
                  <p className="text-sm text-gray-400 font-medium">
                    Bills . Recurring
                  </p>
                </div>
                <div className="flex">
                  <p className="text-md font-medium">$125.49</p>
                  <a className="text-gray-500 ml-4">
                    <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- second column first card end --> */}
            {/* <!-- second column second card  --> */}
            <div className="h-fit flex flex-col col-span-2 xl:col-span-1 justify-between border border-gray-300 p-4 rounded-xl bg-white">
              <div className="flex justify-between">
                <p className="text-xl font-medium">Saving Plan</p>
                <div className="flex">
                  <p className="text-gray-500 font-medium">All Saving Plan</p>
                  <a className="text-gray-500 ml-4">
                    <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
              </div>
              {/* <!-- car --> */}
              <div className="h-fit flex flex-col justify-between border border-gray-200 p-2 rounded-xl bg-white mt-4">
                <div className="flex justify-between ">
                  <div className="flex ">
                    <a className="text-[#15c67f] ">
                      <i className="fa-solid fa-car"></i>
                    </a>
                    <p className="ml-2 text-md font-medium">New Car</p>
                  </div>
                  <a className="text-gray-500 ml-4">
                    <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
                <div className="mt-2 flex justify-between flex-col sm:flex-row">
                  <div className="">
                    <p className="text-md font-medium">
                      $252,000 /
                      <span className="text-gray-500 text-md font-medium">
                        $42,000
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between ">
                    <div className="mt-1 mr-2 border border-gray-300 h-3 w-48 bg-[white] rounded-full">
                      <span className="w-[60%] h-full rounded-full bg-[#15c67f] block"></span>
                    </div>
                    <p className="text-sm font-medium">$60%</p>
                  </div>
                </div>
              </div>
              {/* <!-- car end --> */}
              {/* <!-- laptop start --> */}
              <div className="h-fit flex flex-col justify-between border border-gray-200 p-2 rounded-xl bg-white mt-5">
                <div className="flex justify-between">
                  <div className="flex">
                    <a className="text-[#15c67f] ">
                      <i className="fa-solid fa-laptop"></i>
                    </a>
                    <p className="ml-2 text-md font-medium">New Laptop</p>
                  </div>
                  <a className="text-gray-500 ml-4">
                    <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
                <div className="mt-2 flex justify-between flex-col sm:flex-row">
                  <div className="">
                    <p className="text-md font-medium">
                      $3,000 /
                      <span className="text-gray-500 text-md font-medium">
                        $10,000
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <div className="mt-1 mr-2 border border-gray-300 h-3 w-48 bg-[white] rounded-full">
                      <span className="w-[30%] h-full rounded-full bg-[#15c67f] block"></span>
                    </div>
                    <p className="text-sm font-medium">$30%</p>
                  </div>
                </div>
              </div>
              {/* <!-- laptop end --> */}
            </div>
            {/* <!-- second column second card end --> */}
            {/* <!-- third column --> */}
            <div className="col-span-2 flex flex-col justify-between border border-gray-300 rounded-xl bg-white h-fit p-4">
              <div className="flex justify-between p-2">
                <p className="text-xl font-medium">Recent Transactions</p>
                <div className="flex">
                  <a className="text-gray-500 mr-4">
                    <i className="fa-solid fa-bars"></i>
                  </a>
                  <a className="text-gray-500">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </a>
                </div>
              </div>
              <div className="">
                <div className="overflow-x-auto">
                  <table className="min-w-full h-fit">
                    <thead>
                      <tr className="">
                        <th className="py-1 px-2 text-gray-500 text-left">
                          Name
                        </th>
                        <th className="py-1 px-2 text-gray-500 text-left">
                          Type
                        </th>
                        <th className="py-1 px-2 text-gray-500 text-left">
                          Date Time
                        </th>
                        <th className="py-1 px-2 text-gray-500 text-left">
                          Status
                        </th>
                        <th className="py-1 px-2 text-gray-500 text-left">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="py-1 px-2 text-sm font-medium whitespace-nowrap">
                          Martha Nielsen
                        </td>
                        <td className="py-1 px-2 whitespace-nowrap">
                          <span className="px-1 py-1 bg-gray-100 border-gray-200 border rounded-full text-sm font-medium">
                            Transfer
                          </span>
                        </td>
                        <td className="py-1 px-2 text-sm font-medium text-gray-500 whitespace-nowrap">
                          17 Sep 2024, 13:11 pm
                        </td>
                        <td className="py-1 px-4 whitespace-nowrap">
                          <span className="px-3 py-1 text-yellow-700 bg-yellow-100 rounded-full text-sm font-medium">
                            Pending
                          </span>
                        </td>
                        <td className="whitespace-nowrap py-1 px-2 text-sm font-medium">
                          -£29.99
                        </td>
                        <td>
                          <a className="text-gray-500 ml-4">
                            <i className="fa-solid fa-angle-right"></i>
                          </a>
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-1 px-2 text-sm font-medium whitespace-nowrap">
                          Indigo Internet Inc.
                        </td>
                        <td className="py-1 px-2 whitespace-nowrap">
                          <span className="px-2 py-1 bg-gray-100 border-gray-200 border rounded-full text-sm font-medium">
                            Bills
                          </span>
                        </td>
                        <td className="py-1 px-2 text-sm font-medium text-gray-500 whitespace-nowrap">
                          16 Sep 2024, 10:22 am
                        </td>
                        <td className="py-1 px-2 whitespace-nowrap">
                          <span className="px-3 py-1 text-green-700 bg-green-100 rounded-full text-sm font-medium">
                            Success
                          </span>
                        </td>
                        <td className="py-1 px-2 text-sm font-medium whitespace-nowrap">
                          -£29.99
                        </td>
                        <td>
                          <a className="text-gray-500 ml-4">
                            <i className="fa-solid fa-angle-right"></i>
                          </a>
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-1 px-2 text-sm font-medium whitespace-nowrap">
                          Netflix
                        </td>
                        <td className="py-1 px-2 whitespace-nowrap">
                          <span className="px-2 py-1 bg-gray-100 border-gray-200 border rounded-full text-sm font-medium">
                            Bills
                          </span>
                        </td>
                        <td className="py-1 px-2 text-sm font-medium text-gray-500 whitespace-nowrap">
                          13 Sep 2024, 09:22 am
                        </td>
                        <td className="py-1 px-2 whitespace-nowrap">
                          <span className="px-3 py-1 text-green-700 bg-green-100 rounded-full text-sm font-medium">
                            Success
                          </span>
                        </td>
                        <td className="py-1 px-2 text-sm font-medium whitespace-nowrap">
                          -£29.99
                        </td>
                        <td>
                          <a className="text-gray-500 ml-4">
                            <i className="fa-solid fa-angle-right"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <!-- third column end --> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
