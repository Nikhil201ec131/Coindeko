import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const LineCharts = ({coinHistory}) => {

const coinPrice = [];
const coinTimestamp = [];

for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
  coinPrice.push(coinHistory?.data?.history[i].price);
}

for (let i = 0; i < coinHistory?.data?.history?.length; i=i+1) {
  coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
}

const data = [];
for (let i = 0; i < coinHistory?.data?.history?.length; i =i+1) {
  data.push({uv:coinPrice[i]});
}

console.log(coinHistory);

  return (
    <div style={{width:100}}>
      

      <LineChart width={1000} height={500} data={data} margin={{ top: 5, right:0, bottom: 105, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
  
    </div>
      
    
  );
}

export default LineCharts;
