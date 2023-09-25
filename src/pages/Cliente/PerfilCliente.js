import { View, Text, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'

import { Container, InputArea, Title, SubContainer, TitleInput, AddButton, Form, ViewField, ViewFieldDuplo, InputAreaCustom, CommomText, BotaoCancelar, BotaoSalvar, AreaBotoesFooter, TextCancelar, TextSalvar } from '../../styles/global';

import { useNavigation } from '@react-navigation/native';

import cpfCheck from 'cpf-check';
import { isBefore, parse } from 'date-fns';

import VoltarHeader from '../../components/VoltarHeader/VoltarHeader';
import AddWhite from '../../assets/AddWhite.svg';

import { incluirCliente } from '../../services/incluirCliente';

import { TextInputMask } from 'react-native-masked-text';

export default function PerfilCliente({ route }) {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [email, setEmail] = useState('');

    const [id, setId] = useState()

    const [allowDivida, setAllowDivida] = useState(false);

    const [dividas, setDividas] = useState();

    const navigator = useNavigation();

    async function handleCadastrar() {
        if (!nome || !cpf || !nascimento || !email) {
            Alert.alert('Preencha todos os campos!')
        } else {

            const isValidCPF = cpfCheck.validate(cpf);

            if (isValidCPF) {

                const parsedDate = parse(nascimento, 'MM-dd-yyyy', new Date(), { useAdditionalDayOfYearTokens: true, useAdditionalWeekYearTokens: true });

                // Verifica se a data é anterior à data atual
                if (isBefore(parsedDate, new Date())) {
                    Alert.alert('Data Inválida', 'A data inserida não pode ser maior que a data atual.');
                    return;
                }

                const body = {
                    nome: nome,
                    email: email,
                    cpf: cpf,
                    dataNascimento: nascimento
                }
                const retorno = await incluirCliente(body);

                if (retorno.response == 200) {
                    Alert.alert("Cliente incluído com sucesso!")
                    setAllowDivida(true)
                    setId(retorno.id)
                    console.log(retorno)
                }
            } else {
                Alert.alert('CPF Inválido', 'O CPF inserido não é válido.');
            }
        }
    }

    function handleDivida() {
        if (allowDivida) {
            navigator.navigate('NovaDivida', { id: id })
        } else {
            Alert.alert("Inclua o cliente para incluir dividas")
        }
    }


    return (
        <Container>
            <VoltarHeader title="Clientes" />
            <SubContainer>

                <Form>
                    <ViewField>
                        <TitleInput>Nome</TitleInput>
                        <InputArea>
                            <TextInput
                                style={{ width: '100%' }}
                                placeholder='Digite o nome do cliente'
                                value={nome}
                                onChangeText={(text) => setNome(text)}
                            />
                        </InputArea>
                    </ViewField>

                    <ViewFieldDuplo>
                        <View>
                            <TitleInput>CPF</TitleInput>
                            <InputAreaCustom>
                                <TextInputMask
                                    style={{ width: '100%' }}
                                    placeholder='CPF'
                                    type={'cpf'}
                                    keyboardType='number-pad'
                                    value={cpf}
                                    onChangeText={(text) => setCpf(text)}
                                />
                            </InputAreaCustom>
                        </View>
                        <View>
                            <TitleInput>Nascimento</TitleInput>
                            <InputAreaCustom>
                                <TextInputMask
                                    style={{ width: '100%' }}
                                    placeholder='MM/DD/YYYY'
                                    type={'datetime'}
                                    options={{
                                        format: 'MM/DD/YYYY',
                                    }}
                                    value={nascimento}
                                    onChangeText={(text) => setNascimento(text)}
                                />
                            </InputAreaCustom>
                        </View>
                    </ViewFieldDuplo>

                    <ViewField>
                        <TitleInput>Email</TitleInput>
                        <InputArea>
                            <TextInput
                                style={{ width: '100%' }}
                                placeholder='Digite o Email do cliente'
                                value={email}
                                keyboardType='email-address'
                                onChangeText={(text) => setEmail(text)}
                            />
                        </InputArea>
                    </ViewField>
                </Form>
                <View>
                    <Title>Dívidas</Title>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {
                            dividas ? <></> : <CommomText>Cliente não possui dívidas</CommomText>
                        }

                    </View>
                </View>

                {
                    route.params.action === 'new' ?
                        <AreaBotoesFooter>
                            <BotaoCancelar onPress={() => navigator.goBack()}>
                                <TextCancelar>Cancelar</TextCancelar>
                            </BotaoCancelar>
                            <BotaoSalvar onPress={handleCadastrar}>
                                <TextSalvar>Salvar</TextSalvar>
                            </BotaoSalvar>
                        </AreaBotoesFooter> :
                        <></>
                }


                <AddButton onPress={handleDivida}>
                    <AddWhite width="25" height="25" />
                </AddButton>
            </SubContainer>
        </Container>
    )
}