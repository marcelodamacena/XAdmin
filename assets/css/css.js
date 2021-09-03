import { StyleSheet } from "react-native"



const css = StyleSheet.create({

      background: {
        flex: 1,
        backgroundColor: 'orange',
      },
      containerLogo: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 60,
        justifyContent: 'center',
        alignItems: 'center'
      },
      containerLogoStores: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 130,
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingBottom: 250,
      },
      input: {
        backgroundColor: 'white',
        width: '90%',
        height: 50,
        marginBottom: 15,
        color: 'black',
        fontSize: 17,
        borderRadius: 13,
        padding: 13,
        borderWidth: 3,
        borderColor: '#DB7E38',
      },
      btnSubmit: {
        width: '90%',
        height: 60,
        backgroundColor: 'red',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        marginBottom: 40,
      },
      btnImg: {
        width: '90%',
        height: 80,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        marginBottom: 40,
        backgroundColor: 'white'
      },
      btnImgFinance: {
        width: '90%',
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        marginBottom: 90,
      },
      submitText: {
        color: 'black',
        fontSize: 28,
      },
      btnRegister: {
        marginTop: 10,
      },
      registerText: {
        color: 'red',
      },
      text: {
        fontSize: 34,
        color: 'black',
        marginBottom: 20,
      },
      image: {
       flex:1,
       width:'100%',
       height:1000,
       justifyContent: "center"
        
      },
      btnSubmitTest: {
        width: '90%',
        height: 90,
        backgroundColor: 'orange',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        marginBottom: 40,
        
      }
  });
export { css } ;