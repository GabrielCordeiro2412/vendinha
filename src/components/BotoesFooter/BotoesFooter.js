import { View, Text } from 'react-native'
import React from 'react'

import { BotaoCancelar, BotaoSalvar, AreaBotoesFooter, TextCancelar, TextSalvar } from '../../styles/global'

export default function BotoesFooter() {
    return (
        <AreaBotoesFooter>
            <BotaoCancelar><TextCancelar>Cancelar</TextCancelar></BotaoCancelar>
            <BotaoSalvar><TextSalvar>Salvar</TextSalvar></BotaoSalvar>
        </AreaBotoesFooter>
    )
}