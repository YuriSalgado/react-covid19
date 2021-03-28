import React, { memo } from 'react'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
    const { cases, recovered, deaths, todayCases, todayDeaths } = data    
    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60}></Skeleton>

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={getValue(cases)} label="Total de casos" color="#5d78"></Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#f78829"></Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(recovered)} label="Casos hoje" color="#000"></Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(deaths)} label="Total de mortos" color="#e95078"></Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayCases)} label="Total de recuperados" color="#67c887"></Card>
            </Grid>
        </Grid>
    )
}

export default memo(Board)