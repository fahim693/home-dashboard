import React from 'react'
import Layout from '../components/Layout/Layout'
import Chart from '../components/Reports/Chart'
import FilterTable from '../components/Reports/FilterTable'
import Statistics from '../components/Reports/Statistics'

const Reports = () => {
    return (
        <Layout>
            <Statistics />
            <br />
            <Chart />
            <br />
            <FilterTable />
        </Layout>
    )
}

export default Reports;