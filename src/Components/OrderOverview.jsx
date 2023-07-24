import React from 'react';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Inventory2Icon from '@mui/icons-material/Inventory2';

function OrderOverview() {
    return (
        <>
            <div className="container">
                Orders overview
                <p><span><ArrowUpwardOutlinedIcon className='' /></span>24% this month</p>
                <div className='mytbdiv'>

                    <div className=" d-flex flex-row" >
                        <NotificationsIcon className='mytbicon1' />
                        <div className='ps-3'>
                            <h6 className='m-0'>
                                $24000, Design changes
                            </h6>
                            <span>
                                22 DEC, 7:20 PM
                            </span>
                        </div>
                    </div>
                    <div className="varticalline"></div>
                    <div className=" d-flex flex-row">

                        <Inventory2Icon className='mytbicon2' />
                        <div className='ps-3'>
                            <h6 className='m-0'>
                                New order #1832412
                            </h6>
                            <span>
                                22 DEC, 11 PM
                            </span>
                        </div>
                    </div>
                    <div className="varticalline"></div>
                    <div className="d-flex flex-row">

                        <ShoppingCartIcon className='mytbicon3' />
                        <div className='ps-3'>
                            <h6 className='m-0'>
                                Server payments for April
                            </h6>
                            <span>
                                22 DEC, 9:34 PM
                            </span>
                        </div>
                    </div>
                    <div className="varticalline"></div>
                    <div className="d-flex flex-row">

                        <PaymentIcon className='mytbicon4' />
                        <div className='ps-3'>
                            <h6 className='m-0'>
                                New card added for order #4395133
                            </h6>
                            <span>
                                20 DEC 2:20 AM
                            </span>
                        </div>
                    </div>
                    <div className="varticalline"></div>
                    <div className="d-flex flex-row">
                        <VpnKeyIcon className='mytbicon5' />
                        <div className='ps-3'>
                            <h6 className='m-0'>
                                New card added for order #4395133
                            </h6>
                            <span>
                                18 DEC 4:54 AM
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}

export default OrderOverview;
