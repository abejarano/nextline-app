import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet,  KeyboardAvoidingView, Pressable, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import globalStyles from '../../styles';
import {AuthHeader} from '../../Components/authHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonStyled } from '../../Components/button';
import { InputStyled } from '../../Components/input';
import { StyledStatusBar } from '../../Components/statusBar';
import ArrowPointerSvg from '../../assets/svg/ArrowPointer';
import { FailureTypeModal } from '../../Components/failureTypeModal';
import { failureCategoriesFetch } from '../../actions/failureCategories';
import * as moment from 'moment';

export const CreateTicketsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const failures = useSelector((state) => state.failureCategoriesState.data);
  const [showModal, setShowModal] = useState(false);
  const [failureId, setFailureId] = useState(null);
  const [coment, setComent] = useState(null);
  const today = moment().format('DD/MM/YYYY');
  const loading = false;

  const createTicket = () => {
    console.log('createTicket');
  };

  useEffect(() => {
    dispatch(failureCategoriesFetch());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.view}>
        <FailureTypeModal 
          setShowModal={setShowModal}
          showModal={showModal}
          setFailureId={setFailureId}
          failures={failures}
        />
        <StyledStatusBar />
        <AuthHeader 
          title="ASISTENCIA TÉCNICA"
          navigation={navigation}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <KeyboardAvoidingView
          behavior="height"
          style={styles.keyboardContainer}>
            
          {loading ? (
              <ActivityIndicator
                size="large"
                color={globalStyles.WHITE_COLOR}
              />
            ) : (
              <>
                <View style={styles.textContainer}>
                  <Text style={styles.textTitle}>Nuevo Ticket</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.textDate}>{today}</Text>
                </View>
                
                <View style={styles.selectContainer}>
                  <Text style={styles.textLabel}>Tipo de Avería</Text>
                  <Pressable
                    style={styles.pressable}
                    onPress={() => {
                      console.log('pres'); 
                      setShowModal(true)
                    }}
                  >
                    <View style={styles.viewSelect}>
                      <Text style={styles.textSelect}>Seleccione una avería</Text>
                      <ArrowPointerSvg
                        style={styles.arrowDown}
                        color={globalStyles.PRIMARY_COLOR}
                        direction="left"
                        bold
                      />
                    </View>
                  </Pressable>
                </View>
                
                <View style={styles.inputContainer}>
                  <Text style={styles.textLabel}>Comentario</Text>
                  <InputStyled
                    style={styles.textArea}
                    isMultiline={true}
                    numberOfLines={5}
                    placeholder="Explique en breves palabras el problema de su avería, y un técnico se pondrá en contacto con usted en un plazo de 24 horas."
                    secureTextEntry={true}
                    onChange={(text) => setComent(text)}
                  />
                </View>

                <View style={styles.containerButton}>
                  <ButtonStyled
                    style={styles.buttonSend}
                    onPress={() => createTicket() }
                    backgroundColor={globalStyles.GREEN_COLOR}
                    color={globalStyles.WHITE_COLOR}
                    text={'ENVIAR'}
                  />
                </View>
                
              </>
            )}
          
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

const boxShadow = {
  shadowColor: "#005FAB",
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  elevation: 24,
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  logo: {
    flex: 1,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  view: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    paddingTop: 20,
    alignItems: 'center',
  },
  textTitle: {
    color: globalStyles.PRIMARY_COLOR,
    fontSize: 17
  },
  textLabel: {
    textTransform: 'uppercase',
    color: globalStyles.PRIMARY_COLOR,
    fontSize: 12,
    marginLeft: '7%',
  },
  textDate: {
    color: globalStyles.PRIMARY_COLOR_DARK
  },
  textSelect: {
    alignItems: 'flex-start',
    color: globalStyles.PRIMARY_COLOR_DARK
  },
  arrowDown: {
    alignItems: 'flex-end',
    marginLeft: 60
  },
  input: {
    backgroundColor: globalStyles.WHITE_COLOR,
  },
  viewSelect:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    height: 20,
    borderColor: 'red',
    borderRadius: 4,
    maxHeight: 90,
    borderRadius: 6,
  },
  textArea: {
    maxHeight: 90,
    borderRadius: 6,
    ...boxShadow
  },
  button: {
    marginBottom: '10%',
    fontWeight: 'bold',
  },
  selectContainer: {
    flex: 1,
    width: '90%',
    justifyContent: 'space-evenly',
    maxHeight: 60,
    ...boxShadow,
    ...globalStyles.DEBUG
  },
  pressable: {
  },
  inputContainer: {
    flex: 1,
    width: '90%',
    justifyContent: 'space-evenly',
    maxHeight: 150,
  },
  containerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  keyboardContainer: {
    flex: 1,
    ...globalStyles.DEBUG
  },
  buttonSend: {
    alignItems: 'flex-end',
    // alignSelf: 'flex-end'
  },
});

export default CreateTicketsScreen;   