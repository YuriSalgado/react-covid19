import React, { memo, useCallback, useState, useEffect } from 'react'
import Api from '../../api'
import Board from './components/Board'
import { ContainerStyled } from './style'

function Main() {
    
    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    return (
        <ContainerStyled>
            <div className="mb-2"></div>
            <Board data={data}></Board>
        </ContainerStyled>
    )
}

export default memo(Main)