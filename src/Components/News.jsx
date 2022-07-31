import React from 'react';
import {Select,Typography,Row,Col,Avatar,Card} from 'antd';
import moment from 'moment';
import {useGetCryptoNewsQuery} from '../services/cryptoNewsApi'
const {Text,Title}=Typography;
const {option}=Select;
const News = ({simplified}) => {
  const {data:cryptoNews}=useGetCryptoNewsQuery({newsCategory:'Cryptocurrency',count: simplified? 6:20})
  if(!cryptoNews?.value) return 'Loading....';

  return (
    <div>
     <Row gutter={[24,24]}>
       {cryptoNews.value.map((news,i)=>(
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className='news-image-container'>
                 <Title className='news-title' level={4}>{news.name}</Title>
                 <img style={{maxWidth:'200px',maxHeight:'100px'}}src={news?.image?.thumbnail?.contentUrl}/>
                </div>
                <p>

                  {news.description>100? `${news.description.substring(0,100)}....`:news.description}
                </p>
                <div className='provider-container'>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl}/>
                  <Text className='provider-name'>{news.provider[0]?.name}</Text>
                </div>
              </a>
          </Card>
        </Col>
       ))}
      </Row> 
     

    </div>
  );
}

export default News;
