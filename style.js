import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  circle: {
    width: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: '50%',
    overflow: 'hidden'
  },
  button: {
    height: 150,
    width: 150,
  },
  startButton : {
    position: 'absolute',
    bottom: 0,
    left: 10,
    width: '95%',
    backgroundColor: '#2f4858',
    textAlign: 'center',
    padding: 15,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 5,
  },
  combo: {
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 24
  },
  record: {
    position: 'absolute',
    top: 5,
    left: 5
  },
   gameContainer: {
    height: 330,
    width: 330,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItem: 'center',
    justifyContent: 'center',
    backgroundColor: "black",
    borderRadius: "100%",
    textAlign: "center",
    margin: "auto",
    position: "relative",
    paddingTop: 12
  },
  fourButton: {
    display: "inline-block",
    width: 150,
    height: 150
  },
  green: {
    background: "#278438",
    borderTopLeftRadius: "100%",
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginRight: 5
  },
  red: {
    background: "#842727",
    borderTopRightRadius: "100%",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  yellow: {
    background: "#847e27",
    borderBottomLeftRadius: "100%",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginRight: 5
  },
  blue: {
    background: "#275d84",
    borderBottomRightRadius: "100%",
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  controls: {
    height: 150,
    width: 150,
    borderRadius: "100%",
    backgroundColor: "#d4d4d4",
    borderWidth: 10,
    position: "relative",
    marginTop: -235,
    marginLeft: 10
  },
});