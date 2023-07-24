
import React from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { BiLogoPaypal } from 'react-icons/bi'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import WifiIcon from '@mui/icons-material/Wifi';
import DeleteIcon from '@mui/icons-material/Delete';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import DateRangeIcon from '@mui/icons-material/DateRange';
function Billing() {
    return (
        <>
            <div className="container-fluid billcnt">
                <div className="row">
                    <div className="container col-lg-8 col-md-12 col-sm-12 justify-content-around">
                        <div className="row">
                            <div className="container border rounded my-2  color1 col-lg-5 col-md-5 col-sm-12 text-white" >
                                <WifiIcon className='m-3 ' />
                                <p className='mt-3 fs-5'>

                                    4562    1122   4594   7852
                                </p>
                                <div className='d-flex flex-row  mt-5 '>
                                    <div className='d-flex flex-column  me-4 p-0  '>
                                        <p className='mb-0'>
                                            Card Holder
                                        </p>
                                        <p>
                                            Jack Peterson
                                        </p>
                                    </div>
                                    <div className='d-flex flex-column p-0'>
                                        <p className='mb-0'>
                                            Expires
                                        </p>
                                        <p>
                                            11/22
                                        </p>
                                    </div>
                                    <div className="container w-50 p-0 text-end">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/618px-Mastercard-logo.svg.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="container col-lg-3 col-md-3 col-sm-12 border bg-white rounded my-2">
                                <div className='cardcont color2 rounded my-3 mx-auto' style={{ height: '70px', width: "80px" }}>
                                    <AccountBalanceIcon className=' m-4 fs-2 text-white ' />
                                </div>
                                <div className='text-center'>
                                    <h6 >Salary</h6>
                                    <p className='fontcolr'>Belong Interactive</p>
                                    <hr />
                                    <h5>+$2000</h5>
                                </div>
                            </div>
                            <div className="container col-lg-3 col-md-3 col-sm-12 border bg-white rounded my-2 ">
                                <div className='cardcont color2  my-3 m-auto rounded' style={{ height: '70px', width: "80px" }}>
                                    <BiLogoPaypal className=' m-4 fs-2 text-white ' />
                                </div>
                                <div className='text-center'>

                                    <h6 className='mt-2'>Paypal</h6>
                                    <p className='fontcolr'>Freelance Payment</p>
                                    <hr />
                                    <h5>$455.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid border d-flex flex-column rounded bg-white p-4  mt-2">
                            <div className="row">
                                <div className="col-6 mt-2">
                                    <h6>Payment Method</h6>
                                </div>
                                <div className="col-6 text-end"><button className='btn color1 btn-sm text-white p-2'>+ ADD NEW CARD</button></div>
                            </div>
                            <div className="container mt-2">
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <div className="border rounded p-2 m-2">
                                            <div className="row">
                                                <div className="col-10 p-2">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/618px-Mastercard-logo.svg.png" alt="" /> **** **** **** 7852
                                                </div>
                                                <div className=" col text-end ">
                                                    <EditIcon />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12 ">
                                        <div className="border rounded p-2 m-2">
                                            <div className="row">
                                                <div className="col-10 p-2">
                                                    <img src="https://www.seekpng.com/png/full/336-3364024_visa-logo-png-visa-money-bags-tanktop.png" alt="" />**** **** **** 5248
                                                </div>
                                                <div className="col text-end ">
                                                    <EditIcon />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid col border rounded  m-2 bg-white">
                        <div className="container  p-3 ">
                            <div className='d-flex flex-row'>
                                <div>
                                    <h6 className=' p-2 '>Invoices</h6>
                                </div>
                                <div className="container text-end m-auto ">
                                    <button className=' btn btn-sm border-primary  text-primary '> View All</button>
                                </div>
                            </div>
                            <div className='d-flex flex-row'>
                                <div className='container d-flex flex-column'>
                                    <h6 >March 01,2023</h6>
                                    <p className='fontcolr'>#MS-415646 </p>
                                </div>
                                <div className="container text-end m-auto">
                                    <span className='fontcolr'>
                                        $180
                                    </span>
                                    <PictureAsPdfIcon className='ms-3' />PDF
                                </div>
                            </div>
                            <div className='d-flex flex-row m-0'>
                                <div className='container d-flex flex-column'>
                                    <h6>February, 10, 2021</h6>
                                    <p className='fontcolr'>#RV-126749 </p>
                                </div>
                                <div className="container text-end m-auto ">
                                    <span className='fontcolr'>
                                        $250
                                    </span>
                                    <PictureAsPdfIcon className='ms-3' />PDF
                                </div>
                            </div>
                            <div className='d-flex flex-row m-0'>
                                <div className='container d-flex flex-column'>
                                    <h6>April, 05, 2023</h6>
                                    <p className='fontcolr' >#QW-103578 </p>
                                </div>
                                <div className="container text-end m-auto ">
                                    <span className='fontcolr'>
                                        $120
                                    </span>
                                    <PictureAsPdfIcon className='ms-3' />PDF
                                </div>
                            </div>
                            <div className='d-flex flex-row m-0'>
                                <div className='container d-flex flex-column'>
                                    <h6 >June, 25, 2019</h6>
                                    <p className='fontcolr'>#MS-415646 </p>
                                </div>
                                <div className="container text-end m-auto ">
                                    <span className='fontcolr'>
                                        $180
                                    </span>
                                    <PictureAsPdfIcon className='ms-3' />PDF
                                </div>
                            </div>
                            <div className='d-flex flex-row m-0'>
                                <div className='container d-flex flex-column'>
                                    <h6 >March 01,2019</h6>
                                    <p className='fontcolr' >#AR-803481 </p>
                                </div>
                                <div className="container text-end m-auto ">
                                    <span className='fontcolr'>
                                        $300
                                    </span>
                                    <PictureAsPdfIcon className='ms-3' />PDF
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="container-fluid">
                <div className="row  mt-3">
                    <div className="col-lg-7 col-md-7  col-sm-12">
                        <div className="container-fluid border bg-white  rounded p-3">
                            <h6 className=''>
                                Billing Information
                            </h6>
                            <div className="container border rounded bg-light mt-4 py-4">
                                <div className="cotainer d-flex flex-row">
                                    <div className="container">
                                        <p className='fw-bold'>
                                            Oliver Liam
                                        </p>
                                    </div>
                                    <div className="container d-flex flex-row text-end ">
                                        <div className="container ">
                                            <button className='btn border-0 text-danger btn-sm'>
                                                <DeleteIcon className='fs-6' />
                                                <span>
                                                    DELETE
                                                </span>
                                            </button>

                                        </div>
                                        <div className="container">

                                            <button className='btn border-0 btn-sm text-success'>
                                                <EditIcon className='fs-6' /> <span>EDIT</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">

                                    <p className=' m-0'>Company Name: <span className='fw-bold'>Viking Burrito</span></p>
                                    <p className=' m-0'>Email Address: <span className='fw-bold'>oliver@burrito.com</span></p>
                                    <p className=' m-0'>VAT Number: <span className='fw-bold'>FRB1235476</span></p>
                                </div>
                            </div>
                            <div className="container border rounded bg-light mt-4 py-4">
                                <div className="cotainer d-flex flex-row">
                                    <div className="container">
                                        <p className='fw-bold'>
                                            Lucas Harper
                                        </p>
                                    </div>
                                    <div className="container d-flex flex-row text-end ">
                                        <div className="container ">
                                            <button className='btn border-0  text-danger btn-sm'>
                                                <DeleteIcon className='fs-6' />
                                                <span>
                                                    DELETE
                                                </span>
                                            </button>

                                        </div>
                                        <div className="container">

                                            <button className='btn border-0 btn-sm text-success '>
                                                <EditIcon className='fs-6' /> <span>EDIT</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">

                                    <p className=' m-0'>Company Name: <span className='fw-bold'>Stone Tech Zone</span></p>
                                    <p className=' m-0'>Email Address: <span className='fw-bold'>lucas@stone-tech.com</span></p>
                                    <p className=' m-0'>VAT Number: <span className='fw-bold'>FRB1235476</span></p>
                                </div>
                            </div>
                            <div className="container border rounded bg-light mt-4  py-4">
                                <div className="cotainer d-flex flex-row">
                                    <div className="container">
                                        <p className='fw-bold '>
                                            Ethan James
                                        </p>
                                    </div>
                                    <div className="container d-flex flex-row text-end ">
                                        <div className="container ">
                                            <button className='btn border-0  text-danger btn-sm'>
                                                <DeleteIcon className='fs-6' />
                                                <span>
                                                    DELETE
                                                </span>
                                            </button>

                                        </div>
                                        <div className="container">

                                            <button className='btn border-0 btn-sm text-success'>
                                                <EditIcon className='fs-6' /> <span>EDIT</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">

                                    <p className=' m-0 '>Company Name: <span className='fw-bold'>Fiber Notion</span></p>
                                    <p className=' m-0'>Email Address: <span className='fw-bold'>ethan@fiber.com</span></p>
                                    <p className=' m-0'>VAT Number: <span className='fw-bold'>FRB1235476</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col  border bg-white  p-2 rounded">
                        <div className="container">
                            <div className="container d-flex flex-row">
                                <div className=' container px-0 my-2'>
                                    <h6> Your Transaction's</h6>
                                </div>
                                <div className="container ms-5 fontcolr d-flex text-end">
                                    <DateRangeIcon />

                                    <span>23-30 March 2023</span>

                                </div>
                            </div>
                            <div className="container ">
                                <p>NEWEST</p>
                                <div className="container">
                                    <div className="d-flex flex-row">
                                        <KeyboardArrowDownIcon className='text-danger border border-danger fs-2 mt-1 p-1 rounded-circle' />
                                        <div className='container billcnt ps-2'>
                                            <span className='fw-bold'>Netflix</span>
                                            <p className='fontcolr' >
                                                27 March 2023, at 12:30 PM
                                            </p>
                                        </div>
                                        <div className="container text-danger text-end fw-bold">
                                            - $ 2,500
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <KeyboardArrowUpIcon className='color-success border border-success fs-2 mt-1 p-1 rounded-circle' />
                                        <div className='container billcnt ps-2'>
                                            <span className='fw-bold'>Apple</span>
                                            <p className='fontcolr' >
                                                27 March 2023, at 04:30 PM
                                            </p>
                                        </div>
                                        <div className="container text-success text-end fw-bold">
                                            + $ 2,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <p>YESTERDAY</p>
                                <div className="container">
                                    <div className="d-flex flex-row">
                                        <KeyboardArrowUpIcon className='color-success border border-success fs-2 mt-1 p-1 rounded-circle' />
                                        <div className='container billcnt ps-2'>
                                            <span className='fw-bold'>Stripe</span>
                                            <p className='fontcolr' >
                                                26 March 2023, at 13:45 PM
                                            </p>
                                        </div>
                                        <div className="container text-success text-end fw-bold">
                                            + $ 750
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <KeyboardArrowUpIcon className='color-success border border-success fs-2 mt-1 p-1 rounded-circle' />
                                        <div className='container billcnt ps-2'>
                                            <span className='fw-bold'>HubSpot</span>
                                            <p className='fontcolr' >
                                                26 March 2023, at 12:30 PM
                                            </p>
                                        </div>
                                        <div className="container text-success text-end fw-bold">
                                            + $ 1,000
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <KeyboardArrowUpIcon className='color-success border border-success fs-2 mt-1 p-1 rounded-circle' />
                                        <div className='container billcnt ps-2'>
                                            <span className='fw-bold'>Webflow</span>
                                            <p className='fontcolr' >
                                                26 March 2023, at 05:00 PM
                                            </p>
                                        </div>
                                        <div className="container text-success text-end fw-bold">
                                            + $ 2,500
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <PriorityHighIcon className='border border-success fs-2 mt-1 p-2 rounded-circle' />
                                        <div className='container billcnt ps-2'>
                                            <span className='fw-bold'>Webflow</span>
                                            <p className='fontcolr' >
                                                26 March 2023, at 04:30 PM
                                            </p>
                                        </div>
                                        <div className="container text-end fw-bold">
                                            Pending
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
}

export default Billing;
