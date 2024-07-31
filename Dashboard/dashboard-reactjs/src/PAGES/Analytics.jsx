import React from "react";
import {AreaChartExample } from "../COMPONENTS/ANALYTICS/AreaChart";
import Navbar from "../COMPONENTS/Navbar";
import { SparkAreaUsageExample } from "../COMPONENTS/ANALYTICS/SecondCard";

function Analytics (){
return (
    <>
    <Navbar>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Analytics</h1>
        <AreaChartExample />
    </div>
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-3xl font-bold text-center mb-4">Spark</h3>
        <SparkAreaUsageExample />
    </div>
   
    </Navbar>
    </>
);
}

export default Analytics;