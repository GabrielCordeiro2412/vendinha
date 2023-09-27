import { View, TextInput, Alert, Keyboard, TouchableWithoutFeedback, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';

import {
    Container, InputArea, Title, SubContainer, TitleInput,
    AddButton, Form, ViewField, ViewFieldDuplo, InputAreaCustom,
    CommomText, BotaoCancelar, BotaoSalvar, AreaBotoesFooter,
    TextCancelar, TextSalvar, HeaderDividas
} from '../../styles/global';

import { useNavigation } from '@react-navigation/native';

import cpfCheck from 'cpf-check';

import VoltarHeader from '../../components/VoltarHeader/VoltarHeader';
import AddWhite from '../../assets/AddWhite.svg';

import { incluirCliente } from '../../services/incluirCliente';

import { TextInputMask } from 'react-native-masked-text';
import { getCliente } from '../../services/getCliente';
import { getDividasByCliente } from '../../services/getDividasByCliente';
import DividaClienteCard from '../../components/DividaClienteCard/DividaClienteCard';

export default function PerfilCliente({ route }) {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [email, setEmail] = useState('');

    const [id, setId] = useState();

    const [allowDivida, setAllowDivida] = useState(false);

    const [dividas, setDividas] = useState([]);

    const [editable, setEditable] = useState(true);

    const [refreshing, setRefreshing] = useState(false);

    const scrollRef = useRef();

    const navigator = useNavigation();

    useEffect(() => {
        const unsubscribe = navigator.addListener('focus', loadCliente);
        loadCliente();

        return () => {
            unsubscribe();
        };
    }, [])


    async function loadCliente() {
        if (route.params.action === 'edit' && route.params.id) {
            const response = await getCliente(route.params.id);
            const responseDividas = await getDividasByCliente(route.params.id);
            setDividas(responseDividas.response);
            if (response) {
                setNome(response.nome);
                setCpf(response.cpf);
                setNascimento(response.dataNascimento);
                setEmail(response.email);
                setId(response.id);
                setAllowDivida(true);
                setEditable(false);
            }
        }
    }

    async function handleCadastrar() {
        if (!nome || !cpf || !nascimento || !email) {
            Alert.alert('Preencha todos os campos!');
        } else {

            const isValidCPF = cpfCheck.validate(cpf);

            if (isValidCPF) {
                const body = {
                    nome: nome,
                    email: email,
                    cpf: cpf,
                    dataNascimento: nascimento
                }
                const retorno = await incluirCliente(body);

                if (retorno.response == 200) {
                    Alert.alert("Cliente incluído com sucesso!");
                    setAllowDivida(true);
                    setId(retorno.id);
                }
            } else {
                Alert.alert('CPF Inválido', 'O CPF inserido não é válido.');
            }
        }
    }

    function handleDivida() {
        if (allowDivida) {
            navigator.navigate('NovaDivida', { id: id });
        } else {
            Alert.alert("Inclua o cliente para incluir dividas");
        }
    }

    function handleUpdateView() {
        loadCliente();
    }

    const fecharTeclado = () => {
        Keyboard.dismiss();
    };

    function handleVerTodasDividas() {
        if (dividas && dividas.length > 0) {
            navigator.navigate('VerTodasDividas', { id: id });
        } else {
            Alert.alert("O cliente não possui dividas");
        }
    }


    return (
        <Container>
            <VoltarHeader title="Clientes" />
            <SubContainer>
                <TouchableWithoutFeedback onPress={fecharTeclado}>
                    <Form>
                        <ViewField>
                            <TitleInput>Nome</TitleInput>
                            <InputArea style={{ borderWidth: route.params.action === 'edit' ? 0 : 1, paddingLeft: route.params.action === 'edit' ? 0 : 10 }}>
                                <TextInput
                                    editable={editable}
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
                                <InputAreaCustom style={{ borderWidth: route.params.action === 'edit' ? 0 : 1, paddingLeft: route.params.action === 'edit' ? 0 : 10 }}>
                                    <TextInputMask
                                        editable={editable}
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
                                <InputAreaCustom style={{ borderWidth: route.params.action === 'edit' ? 0 : 1, paddingLeft: route.params.action === 'edit' ? 0 : 10 }}>
                                    <TextInputMask
                                        editable={editable}
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
                            <InputArea style={{ borderWidth: route.params.action === 'edit' ? 0 : 1, paddingLeft: route.params.action === 'edit' ? 0 : 10 }}>
                                <TextInput
                                    editable={editable}
                                    style={{ width: '100%' }}
                                    placeholder='Digite o Email do cliente'
                                    value={email}
                                    keyboardType='email-address'
                                    onChangeText={(text) => setEmail(text)}
                                />
                            </InputArea>
                        </ViewField>
                    </Form>
                </TouchableWithoutFeedback>
                <HeaderDividas>
                    <Title>Dívidas</Title>
                    <TouchableOpacity onPress={handleVerTodasDividas}>
                        <Title style={{ textDecorationLine: 'underline' }}>Ver Todas</Title>
                    </TouchableOpacity>
                </HeaderDividas>

                {
                    dividas && dividas.length > 0 ?
                        <FlatList
                            data={dividas}
                            renderItem={({ item }) => <DividaClienteCard data={item} />}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            ref={scrollRef}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={handleUpdateView}
                                />
                            }
                        /> : <CommomText>Cliente não possui dívidas</CommomText>
                }


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
        </Container >
    )
}