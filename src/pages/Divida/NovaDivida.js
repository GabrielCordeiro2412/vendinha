import { View, Text, TextInput, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'

import { Container, InputArea, Title, SubContainer, TitleInput, AddButton, Form, ViewField, ViewFieldDuplo, InputAreaCustom, CommomText, BotaoCancelar, BotaoSalvar, AreaBotoesFooter, TextCancelar, TextSalvar } from '../../styles/global';

import VoltarHeader from '../../components/VoltarHeader/VoltarHeader';

import { TextInputMask } from 'react-native-masked-text';

import { useNavigation } from '@react-navigation/native';

import { format } from 'date-fns';

import { incluirDivida } from '../../services/incluirDivida';

export default function NovaDivida({ route }) {

    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [dtPagamento, setDtPagamento] = useState('');

    const dataAtual = new Date();

    const [dataConvertida, setDataConvertida] = useState(format(dataAtual, 'dd/MM/yyyy'));

    const navigator = useNavigation();

    async function handleCadastrar() {
        console.log(nome, valor, dataConvertida)
        if (!nome || !valor) {
            Alert.alert('Preencha todos os campos!')
        } else {
            const body = {
                descricao: nome,
                valor: valor,
                clienteId: route.params.id,
                criadoEm: format(dataAtual, 'MM/dd/yyyy')

            }

            const retorno = await incluirDivida(body);

            if (retorno.response == 200) {
                Alert.alert("Dívida incluída com sucesso!")
                navigator.goBack();
            } else if (retorno == 422) {
                Alert.alert("Este cliente já possui dívidas pendentes")
            }
        }
    }

    const fecharTeclado = () => {
        Keyboard.dismiss();
    };

    return (
        <Container>
            <VoltarHeader title="Nova dívida" />
            <TouchableWithoutFeedback onPress={fecharTeclado}>
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
                                        value={dataConvertida}
                                        onChangeText={(text) => setDataConvertida(text)}
                                    />
                                </InputAreaCustom>
                            </View>
                            <View>
                                <TitleInput>Valor</TitleInput>
                                <InputAreaCustom>
                                    <TextInput
                                        style={{ width: '100%' }}
                                        placeholder='Valor da dívida'
                                        keyboardType='number-pad'
                                        value={valor}
                                        onChangeText={(text) => setValor(text)}
                                    />
                                </InputAreaCustom>
                            </View>
                        </ViewFieldDuplo>

                        {/* <ViewField>
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
                        </ViewField> */}
                    </Form>

                    <AreaBotoesFooter>
                        <BotaoCancelar onPress={() => navigator.goBack()}>
                            <TextCancelar>Cancelar</TextCancelar>
                        </BotaoCancelar>
                        <BotaoSalvar onPress={handleCadastrar}>
                            <TextSalvar>Salvar</TextSalvar>
                        </BotaoSalvar>
                    </AreaBotoesFooter>
                </SubContainer>
            </TouchableWithoutFeedback>
        </Container>
    )
}