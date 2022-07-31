

import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';


import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoapi';

import LineCharts from './LineCharts';

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
 
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery(coinId);
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return 'LOADING ....';

  

  

  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Title level={2} className="coin-name">
          {data?.data?.coin.name} ({data?.data?.coin.symbol}) Price
        </Title>
        <p>{cryptoDetails.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
      </Col>
     
      
      <LineCharts coinHistory={coinHistory}/>
     
    </Col>
  );
};

export default CryptoDetails;
