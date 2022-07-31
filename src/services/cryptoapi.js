import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
    'X-RapidAPI-Key': '902e75e8bamsh0fbdb54bb78822ap1b98f9jsnc02cda50a619',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

}

const baseUrl="https://coinranking1.p.rapidapi.com";

const createRequest=(url)=>({url,headers:cryptoApiHeaders})

export const cryptoapi= createApi({
    reducerPath:'cryptoapi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails:builder.query({
            query:(coinId)=> createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory:builder.query({
            query:(coinId)=> createRequest(`coin/${coinId}/history?timeperiod=3y`),
        }),

    })


});

export const{
    useGetCryptosQuery,
    useGetCryptoHistoryQuery,
    useGetCryptoDetailsQuery
}=cryptoapi;