import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import { Audio } from 'expo-av';
import { styles } from '../style'

const colors = ['green', 'red', 'yellow', 'blue']

export default function AssetExample() {
  const fadeAnim = useRef(new Animated.Value(0.4)).current
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [colorSequence, setColorSequence] = useState([])
  const [activeColor, setActiveColor] = useState('')
  const [playerSequence, setPlayerSequence] = useState([])
  const [messageInfo, setMessageInfo] = useState('')
  const [combo, setCombo] = useState(0)
  const [record, setRecord] = useState(0)

  useEffect(() => {
      playSequence()
  }, [colorSequence])

  const startGame = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setColorSequence(prevState => [...prevState, randomColor])
    setMessageInfo('')
    setIsGameStarted(true)
  }

  function playSequence() {
    colorSequence.forEach((color, index) => {
      setTimeout(() => {
        setActiveColor(color);
        const soundNum = colors.indexOf(color) + 1
        playSound(soundNum)
      }, (index + 1) * 600);
    });
    setTimeout(() => {
      setActiveColor('')
    }, colorSequence.length * 900)
  }

  async function playSound(num) {
    const { sound } = await Audio.Sound.createAsync(
       `https://s3.amazonaws.com/freecodecamp/simonSound${num}.mp3`
    );

    await sound.playAsync(); 
  }

  function handlePlayerClick (color) {
    console.log(messageInfo)
    setPlayerSequence(prevState => [...prevState, color])  
    const sequence = [...playerSequence, color]
    const index = sequence.length - 1
    const soundNum = colors.indexOf(color) + 1
    playSound(soundNum)

    if (sequence[index] !== colorSequence[index]) {
      setMessageInfo('You lose ! Try again')

      setTimeout(() => {
        resetGame();
      }, 3000);
      return;
    }

    if (sequence.length === colorSequence.length) {
      setPlayerSequence([]);
      setCombo(prevState => prevState + 1)
      setTimeout(() => { 
        nextSequence();
      }, 1000);
      return;
    }  
  }

  function nextSequence () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setColorSequence(prevState => [...prevState, randomColor])
  }

  function resetGame () {
    setIsGameStarted(false)
    setColorSequence([])
    setPlayerSequence([])
    setCombo(0)
    activeColor('')
  }


  return (
    <>
      <Text style={styles.record}>Record: {record}</Text>
      <View style={styles.container}>
      <Text style={styles.combo}>{combo}</Text>
        <View style={styles.gameContainer}>
          {colors.map((color, index) => (
            <TouchableOpacity onPress={() => handlePlayerClick(color)} disabled={!isGameStarted}>
              <Animated.View 
                style={[styles.fourButton, 
                  styles[color],
                  {
                    opacity: activeColor === color ? 0.4 : 1
                  }
                ]}></Animated.View>
            </TouchableOpacity>
          ))}
          <View style={styles.controls}></View>
        </View>
      </View>
      {
        !isGameStarted ? (
        <TouchableOpacity onPress={startGame} style={styles.startButton}>
          <Text style={{ fontWeight: 'bold', color: 'white',}}>
            Start
          </Text>
        </TouchableOpacity>
        ) : (
          <Text style={{ marginHorizontal: 'auto', marginVertical: 10}}>
            {messageInfo}
          </Text>
        )
      }
    </>
  )
}
