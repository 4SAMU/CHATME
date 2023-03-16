import React from 'react'
import { SafeAreaView } from 'react-native/types'

const App = () => {
  function name() {
    let x=Naame();
    Alert.alert(x)
   }

  return (
    <SafeAreaView>
<Pressable onPress={onPressFunction}>
  <Text>I'm pressable!</Text>
</Pressable>
    </SafeAreaView>
  )
}

export default App
