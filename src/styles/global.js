import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    align-items: center;
`;

export const InputArea = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #A4A6AC;
    border-radius: 8px;
    padding: 10px;
`;

export const InputAreaCustom = styled.View`
    width: 180px;
    padding: 10px;
    border: 1px solid #A4A6AC;
    border-radius: 8px;
`;

export const Title = styled.Text`
    color: #62A856;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
`;

export const SubContainer = styled.View`
    flex: 1;
    padding: 15px;
    width: 100%;
`;

export const ViewInput = styled.View`
    padding: 15px;
    width: 100%;
`;

export const ViewCard = styled.View`
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 16px;

`;

export const ViewValorDivida = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    padding-top: 6px;
    border-top-width: 1px;
    border-color: rgba(0, 0, 0, 0.2);
    justify-content: space-between;
`;

export const TextBold = styled.Text`
    font-weight: 700;
    font-size: 18px;
`;

export const TitleCard = styled.Text`
    color: rgba(175, 218, 81, 1);
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 10px;
`;

export const AddButton = styled.TouchableOpacity`
    right: 15px;
    bottom: 100px;
    background-color: rgba(98, 168, 86, 1);
    width: 56px;
    height: 56px;
    border-radius: 50px;
    position: absolute;
    justify-content: center;
    align-items: center;
`

export const CommomText = styled.Text`
    font-weight: 400;
    font-size: 14px;
    color: rgba(112, 112, 112, 1);
`

export const DividaValues = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
`

export const ViewHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding-left: 15px;
`;

export const TitleInput = styled.Text`
    font-size: 14px;
    color: rgba(98, 168, 86, 1);
    margin-bottom: 2px;
    font-weight: 600;
`;

export const Form = styled.View`
    margin-top: 19px;
`;

export const ViewField = styled.View`
    margin-bottom: 16px;
`;

export const ViewFieldDuplo = styled.View`
    margin-bottom: 16px;
    flex-direction: row;
    justify-content: space-between;
`;

//--------------- Botões de Salvar e Cancelar

export const BotaoSalvar = styled.TouchableOpacity`
    background-color: rgba(98, 168, 86, 1);
    border-radius: 8px;
    width: 90px;
    padding: 8px 10px;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
`;

export const BotaoCancelar = styled.TouchableOpacity`
    border: 1px solid rgba(98, 168, 86, 1);
    border-radius: 8px;
    width: 100px;
    padding: 8px 10px;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
`;

export const AreaBotoesFooter = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    bottom: 20px;
    position: absolute;
    align-self: center;
`;

export const TextCancelar = styled.Text`
    color: rgba(98, 168, 86, 1);
    font-size: 16px;
    font-weight: 700;
`;

export const TextSalvar = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: 700;
`;

