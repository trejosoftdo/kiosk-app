import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { router } from 'expo-router';
import { Avatar, Button, Card, Text, Divider } from 'react-native-paper';
import icon from '../assets/icon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={icon} style={{width: 300 , height: 300 }}/>
      {/* <Text style={styles.title} variant="displayLarge">QMS Services</Text> */}
      <Text style={styles.slogan} variant="headlineSmall">Por favor, elija un servicio</Text>
      <View style={styles.cards}>
        <Card
          mode="outlined"
          style={styles.card}
          onPress={() => {
            console.log("sdfsdf")
            router.push('/ticket-details');
          }}
        >
          <Card.Content style={styles.cardContent}>
            <Avatar.Icon style={styles.cardIcon} size={64} icon="file-multiple" />
            <Text variant="titleLarge" style={styles.cardTitle}>Resultados</Text>
          </Card.Content>
        </Card>
        <Card mode="outlined" style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Avatar.Icon style={styles.cardIcon} size={64} icon="poll" />
            <Text variant="titleLarge" style={styles.cardTitle}>Analisis</Text>
          </Card.Content>
        </Card>
        <Card mode="outlined" style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Avatar.Icon style={styles.cardIcon} size={64} icon="information" />
            <Text variant="titleLarge" style={styles.cardTitle}>Informacion</Text>
          </Card.Content>
        </Card>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
  },
  cards: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
    paddingBottomBottom: 32,
  },
  card: {
    backgroundColor: '#fff',
    marginRight: 2,
    cursor: 'pointer',
    width: '100%',
    maxWidth: 320,
    paddingBottom: 16,
    borderColor: '#ccc'
  },
  cardIcon: {
    backgroundColor: '#b4c5e4',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardTitle: {
    color: '#3c3744',
    paddingTop: 10,
  },
  slogan: {
    color: '#3c3744',
    paddingBottom: 32,
  },
});
