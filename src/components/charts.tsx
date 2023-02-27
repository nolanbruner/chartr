// TradingViewWidget.jsx

import React from 'react';
import * as tv from "react-ts-tradingview-widgets"

export const Chart1 = () => {
    return (
        <>
            <div> <tv.SingleTicker /></div>
            {/* <div>  <tv.AdvancedRealTimeChart /></div> */}
            <div>  <tv.CompanyProfile /></div>
            <div> <tv.MarketData /></div>
        </>
    )

}