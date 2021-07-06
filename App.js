import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks';

function App() {
  const [tasklist, setTasklist] = useState([]);
  const [task, setTask] = useState('');
  const {landscape} = useDeviceOrientation();
  return (
    <SafeAreaView style={!landscape ? styles.safearea : styles.safeareaLand}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-start'}}
        style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', borderWidth: 1}}>
          <View
            style={!landscape ? styles.containertop : styles.containertopLand}>
            <Text style={styles.text}>Enter the task details below</Text>
            <View style={!landscape ? styles.container : styles.containerLand}>
              <TextInput
                style={!landscape ? styles.input : styles.inputLand}
                placeholder="Enter task"
                onChangeText={text => setTask(text)}
              />
              <TouchableOpacity
                style={!landscape ? styles.button : styles.buttonLand}
                onPress={() => {
                  setTasklist(prevState => [
                    ...prevState,
                    {
                      id: prevState.length,
                      taskname: task,
                      delete: false,
                    },
                  ]);
                }}>
                <Text>Press Here</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containertop1}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              {tasklist.length !== 0 &&
                tasklist.map((task, index) => (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                    key={index}>
                    <Text style={styles.texttask}>
                      --{'>'} {task.taskname}
                    </Text>
                    <TouchableOpacity
                      style={
                        !landscape ? styles.buttondel : styles.buttondelLand
                      }
                      onPress={() => {
                        let tasklisttemp = [];
                        let k = 0;
                        for (let i = 0; i < tasklist.length; i++) {
                          if (i !== index) {
                            tasklisttemp[k] = tasklist[i];
                            tasklisttemp.id = k;
                            k++;
                          }
                        }
                        setTasklist(prevState => [...tasklisttemp]);
                      }}>
                      <Text style={{color: 'blue'}}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
  },
  containerLand: {
    flex: 1,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
  },
  safearea: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  safeareaLand: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  containertop: {
    padding: 20,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  containertopLand: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  containertop1: {
    padding: 20,
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  input: {
    width: '70%',
    minWidth: '70%',
  },
  inputLand: {
    width: '70%',
    minWidth: '70%',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  texttask: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
    paddingBottom: 5,
    paddingTop: 5,
  },
  button: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginBottom: 5,
    marginRight: 3,
    flex: 1,
  },
  buttonLand: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginBottom: 10,
    marginRight: 5,
    flex: 1,
  },
  buttondel: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '35%',
  },
  buttondelLand: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '70%',
  },
});

export default App;
