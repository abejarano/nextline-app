import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import globalStyles from '../../styles';
import {AuthHeader} from '../../Components/authHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonStyled} from '../../Components/button';
import {InputStyled} from '../../Components/input';
import {StyledStatusBar} from '../../Components/statusBar';
import ArrowPointerSvg from '../../assets/svg/ArrowPointer';
import {FailureTypeModal} from '../../Components/failureTypeModal';
import {failureCategoriesFetch} from '../../actions/failureCategories';
import moment from 'moment';
import {useFormik} from 'formik';

export const CreateTicketsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const failures = useSelector((state) => state.failureCategories.data);
  const [showModal, setShowModal] = useState(false);
  const [failureId, setFailureId] = useState(null);
  const [coment, setComent] = useState(null);
  const today = moment().format('DD/MM/YYYY');
  const loading = false;
  const formik = useFormik({
    initialValues: {
      failureId: '',
      coment: '',
    },

    // Custom sync validation
    validate: (values) => {
      const errors = {};

      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          const element = values[key];
          if (!element) {
            errors[key] = key + ' es requerido';
          }
        }
      }

      return errors;
    },
    onSubmit: (values, {setSubmitting}) => {
      dispatch(
        createTicket({failureId: values.failureId, coment: values.coment}),
      );
    },
  });
  const createTicket = (failureId, coment) => {
    console.log('createTicket');
    // dispatch(clientTicketCreate());
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
          setFailureId={(failureId) =>
            formik.setFieldValue('failureId', failureId)
          }
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
            <ActivityIndicator size="large" color={globalStyles.WHITE_COLOR} />
          ) : (
            <View style={styles.view}>
              <View style={styles.textContainer}>
                <Text style={styles.textTitle}>Nuevo Ticket</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textDate}>{today}</Text>
              </View>

              <View style={styles.selectContainer}>
                <Text style={styles.textLabelFailure}>Tipo de Avería</Text>
                <Pressable
                  style={styles.pressable}
                  onPress={() => {
                    console.log('pres');
                    setShowModal(true);
                  }}>
                  <View style={styles.viewSelect}>
                    <View style={styles.viewTextSelect}>
                      <Text style={styles.textSelect}>
                        {formik.values.failureId
                          ? failures.find(
                              (fail) => fail.id === formik.values.failureId,
                            ).descripcion
                          : 'Seleccione una avería'}
                      </Text>
                    </View>
                    <View style={styles.viewArrowDown}>
                      <ArrowPointerSvg
                        style={styles.arrowDown}
                        color={globalStyles.PRIMARY_COLOR}
                        direction="left"
                        bold
                      />
                    </View>
                  </View>
                </Pressable>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.textLabel}>Comentario</Text>
                <InputStyled
                  value={formik.values.coment}
                  onBlur={formik.handleBlur('coment')}
                  onChange={formik.handleChange('coment')}
                  valid={!formik.errors.coment && !formik.touched.coment}
                  style={styles.textArea}
                  isMultiline={true}
                  numberOfLines={5}
                  placeholder="Explique en breves palabras el problema de su avería, y un técnico se pondrá en contacto con usted en un plazo de 24 horas."
                  secureTextEntry={true}
                />
              </View>

              <View style={styles.containerButton}>
                <ButtonStyled
                  style={styles.buttonSend}
                  onPress={() => formik.handleSubmit()}
                  backgroundColor={globalStyles.GREEN_COLOR}
                  color={globalStyles.WHITE_COLOR}
                  text={'ENVIAR'}
                />
              </View>
            </View>
          )}
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

const boxShadow = {
  shadowColor: '#005FAB',
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.0,
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
    fontSize: 17,
  },
  textDate: {
    color: globalStyles.PRIMARY_COLOR_DARK,
  },
  input: {
    backgroundColor: globalStyles.WHITE_COLOR,
  },
  textLabel: {
    textTransform: 'uppercase',
    color: globalStyles.PRIMARY_COLOR,
    fontSize: 12,
    marginLeft: '7%',
    marginBottom: '1%',
  },
  textArea: {
    marginTop: '-3%',
    maxHeight: 90,
    borderRadius: 6,
    ...boxShadow,
  },
  button: {
    marginBottom: '10%',
    fontWeight: 'bold',
  },
  selectContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    maxHeight: 80,
    marginTop: 40,
    marginBottom: 20,
  },
  viewSelect: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    height: 20,
    borderColor: 'red',
    maxHeight: 90,
    borderRadius: 6,
  },
  viewTextSelect: {
    flex: 1,
  },
  textLabelFailure: {
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
    color: globalStyles.PRIMARY_COLOR,
    fontSize: 12,
    marginLeft: '11%',
    marginBottom: '1%',
  },
  textSelect: {
    marginLeft: '8%',
    color: globalStyles.PRIMARY_COLOR_DARK,
  },
  viewArrowDown: {
    marginTop: '-1%',
    marginRight: 15,
  },
  arrowDown: {
    alignItems: 'flex-end',
    marginTop: '-2%',
  },
  pressable: {
    flex: 1,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 6,
    ...boxShadow,
    justifyContent: 'space-evenly',
    maxHeight: 150,
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
    width: '100%',
  },
  buttonSend: {
    alignItems: 'flex-end',
  },
});

export default CreateTicketsScreen;
