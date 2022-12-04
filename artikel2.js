import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView} from 'react-native';

const article = () => {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/artikel.jpg')}  style={{ width: "100%", height: 310,position:'relative' }}/>
        <View style={styles.title}>
          <Text style={styles.titleText}>Pentingnya Pemanasan Sebelum Olahraga</Text>
        </View>
        <Ionicons name="arrow-back-circle" size={35} color="#FF5151" style={{position:'absolute'}}/>
      </View>
      <ScrollView style={styles.historycontainer}>  
        <Text style={styles.isi}> Pemanasan sebelum berolahraga adalah hal yang penting untuk dilakukan, namun tidak sedikit orang yang sering mengabaikannya. Kamu mungkin berpikir bahwa tubuh bisa langsung berolahraga tanpa melakukan pemanasan terlebih dahulu. Meskipun kamu sudah terampil berolahraga, tubuh tetap perlu menyesuaikan diri sebelum melakukan aktivitas yang lebih berat daripada biasanya.
          Tujuan utama melakukan pemanasan sebelum olahraga adalah agar tubuh tidak kaget saat melakukan aktivitas fisik yang berat. Coba bayangkan, otot yang masih dalam kondisi dingin dan rileks, tiba-tiba digunakan untuk berlari kencang. Hal ini meningkatkan risiko mengalami cedera ringan atau kram saat berolahraga.
          Oleh sebab itu, lakukan pemanasan terlebih dahulu setidaknya selama 10-15 menit sebelum berolahraga untuk mendapatkan manfaat berikut: Mencegah Cedera
          Pemanasan membuat otot menjadi lebih lentur dan tidak kaku lagi, sehingga ketika melakukan gerakan-gerakan olahraga yang cukup ekstrem, seperti mengangkat beban berat
        </Text>
      </ScrollView>
      <StatusBar style="auto"/>
    </View>
  );
}

export default article

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    width:"100%",
    marginTop:20
  },
  header :{
    height:"35%",
    width:"100%",
    marginTop:2,
    textAlign:'left'
  },
  historycontainer:{
    backgroundColor:'#FF5151',
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    width:'100%',
    textAlign:'center',
  },
  isi:{
    color:'white',
    margin:25,
    textAlign:'justify'
  },
  title:{
    marginLeft:'8%',
    marginBottom:'2%',
    width:'80%',
    position:'absolute',
    bottom:0
  },
  titleText:{
    color:'white',
    fontSize:22,
    fontWeight:'bold',
    textAlign:'left'
  }
})