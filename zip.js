export function Naame() {
  let A = [{ A: "A" }, { B: "B" }];
  let B = [[{ z: "a" }], [{ y: "y" }]];

  let result = A.map((obj, i) => [obj, B[i]]);
  console.log(result);
  return result;
}


function name() {
    let x=Naame();
    Alert.alert(x)
   }


   const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16,
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff",
    },
    title: {
      fontSize: 24,
    },
  });
  