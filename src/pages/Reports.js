import React from 'react'
import Layout from '../components/Layout/Layout'
import Chart from '../components/Reports/Chart'
import FilterTable from '../components/Reports/FilterTable'
import PageFilter from '../components/Reports/PageFilter'
import Statistics from '../components/Reports/Statistics'
import StatisticsResponsive from '../components/Reports/StatisticsResponsive'
import '../components/Reports/responsive.css'

const Reports = () => {
    return (
        <Layout active={0}>
            <PageFilter />
            <div className="stat">
                <Statistics />
            </div>
            <div className="stat-resp">
                <StatisticsResponsive />
            </div>
            <br />
            <Chart />
            <br />
            <FilterTable />
        </Layout>
    )
}

export default Reports;