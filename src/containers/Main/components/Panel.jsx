import React, { memo } from 'react'
import { Card, Typography, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from './style'

const navigationHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCovidData}) {

    const renderCountries = (country, index) => {
        return (
            <MenuItem key={`country-${index}`} value={country.value}>
                <ItemStyled>
                    <div>{country.label}</div>
                    <img src={country.flag} alt={`Pais-${country.label}`} width={`30px`}/>
                </ItemStyled>
            </MenuItem>
        )
    }

    const textCovid19 = `País: ${country}`

    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19)
    }

    const shareInfo = () => {
        navigator.share({
            title: `Dados do Covid19 - ${country}`,
            text: textCovid19,
            url: 'https://covid19dio.netfly.app/'
        })
    }

    const renderShareButton = (
         <div>
             <Button variant="contained" color="primary" onClick={shareInfo}>
                 Compartilhar
             </Button>
         </div>
    )

    const renderCopyButton = (
        <div>
            <Button variant="contained" color="primary" onClick={copyInfo}>
                Copiar
            </Button>
        </div>
    )
    
    return (
        <Card>
            <CardPanelContentStyled>
                <div>
                    <Typography variant="h5" component="h5" color="primary">COVID19</Typography>
                    <Typography variant="h6" component="h6">Painel Coronavírus</Typography>
                    <Typography variant="body2" component="span">Atualizado em: {updateAt}</Typography>
                    <div className="pt-2">
                        <Select onChange={onChange} value={country}>
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                    </div>
                </div>
                { navigationHasShare ? renderShareButton : renderCopyButton }
            </CardPanelContentStyled>
        </Card>
    )
}

export default memo(Panel)