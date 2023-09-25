import { View, Text, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'

import { Container, InputArea, Title, SubContainer, TitleInput, AddButton, Form, ViewField, ViewFieldDuplo, InputAreaCustom, CommomText, BotaoCancelar, BotaoSalvar, AreaBotoesFooter, TextCancelar, TextSalvar } from '../../styles/global';

import VoltarHeader from '../../components/VoltarHeader/VoltarHeader';

import { TextInputMask } from 'react-native-masked-text';

import { useNavigation } from '@react-navigation/native';

export default function NovaDivida({ route }) {

    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [criacao, setCriacao] = useState('');
    const [dtPagamento, setDtPagamento] = useState('');

    const [dataConvertida, setDataConvertida] = useState('');

    const navigator = useNavigation();

    return (
        <Container>
            <VoltarHeader title="Nova dívida" />
            <SubContainer>
                <Form>
                    <ViewField>
                        <TitleInput>Nome</TitleInput>
                        <InputArea>
                            <TextInput
                                style={{ width: '100%' }}
                                placeholder='Nome da dívida'
                                value={nome}
                                onChangeText={(text) => setNome(text)}
                            />
                        </InputArea>
                    </ViewField>

                    <ViewFieldDuplo>
                        <View>
                            <TitleInput>Data de criação</TitleInput>
                            <InputAreaCustom>
                                <TextInputMask
                                    style={{ width: '100%' }}
                                    placeholder='MM/DD/YYYY'
                                    type={'datetime'}
                                    options={{
                                        format: 'MM/DD/YYYY',
                                    }}
                                    value={criacao}
                                    onChangeText={(text) => setCriacao(text)}
                                />
                            </InputAreaCustom>
                        </View>
                        <View>
                            <TitleInput>Valor</TitleInput>
                            <InputAreaCustom>
                                <TextInputMask
                                    style={{ width: '100%' }}
                                    placeholder='Valor da dívida'
                                    type={'money'}
                                    keyboardType='number-pad'
                                    value={valor}
                                    onChangeText={(text) => setValor(text)}
                                />
                            </InputAreaCustom>
                        </View>
                    </ViewFieldDuplo>

                    <ViewField>
                        <TitleInput>Data do pagamento</TitleInput>
                        <InputAreaCustom>
                            <TextInputMask
                                style={{ width: '100%' }}
                                placeholder='MM/DD/YYYY'
                                type={'datetime'}
                                options={{
                                    format: 'MM/DD/YYYY',
                                }}
                                value={dtPagamento}
                                onChangeText={(text) => setDtPagamento(text)}
                            />
                        </InputAreaCustom>
                    </ViewField>
                </Form>
                <AreaBotoesFooter>
                    <BotaoCancelar onPress={() => navigator.goBack()}>
                        <TextCancelar>Cancelar</TextCancelar>
                    </BotaoCancelar>
                    <BotaoSalvar>
                        <TextSalvar>Salvar</TextSalvar>
                    </BotaoSalvar>
                </AreaBotoesFooter>
            </SubContainer>
            <Text>{route.params.id}</Text>

        </Container>
    )
}