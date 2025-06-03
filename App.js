import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Tic-Tac-Toe</Text>
        
        <View style={styles.boardContainer}>
          <View style={styles.board}>
            {/* Row 1 */}
            <View style={styles.boardRow}>
              <View style={[styles.boardCell, styles.borderRight, styles.borderBottom]}>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>o</Text>
                </View>
              </View>
              <View style={[styles.boardCell, styles.borderRight, styles.borderBottom]}>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>o</Text>
                </View>
              </View>
              <View style={[styles.boardCell, styles.borderBottom]}>
                <View style={styles.cross}>
                  <Text style={styles.crossText}>x</Text>
                </View>
              </View>
            </View>
            
            {/* Row 2 */}
            <View style={styles.boardRow}>
              <View style={[styles.boardCell, styles.borderRight, styles.borderBottom]}>
                <View style={styles.cross}>
                  <Text style={styles.crossText}>x</Text>
                </View>
              </View>
              <View style={[styles.boardCell, styles.borderRight, styles.borderBottom]}>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>o</Text>
                </View>
              </View>
              <View style={[styles.boardCell, styles.borderBottom]}>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>o</Text>
                </View>
              </View>
            </View>
            
            {/* Row 3 */}
            <View style={styles.boardRow}>
              <View style={[styles.boardCell, styles.borderRight]}>
                <View style={styles.cross}>
                  <Text style={styles.crossText}>x</Text>
                </View>
              </View>
              <View style={[styles.boardCell, styles.borderRight]}>
                <View style={styles.cross}>
                  <Text style={styles.crossText}>x</Text>
                </View>
              </View>
              <View style={styles.boardCell}>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>o</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        
        <View style={styles.bottomIndicator} />
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const boardSize = windowWidth * 0.85;
const cellSize = (boardSize - 40) / 3; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffefff',
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'System',
    fontSize: windowWidth * 0.07,
    fontWeight: '700',
    color: '#fe8dc3',
    marginBottom: windowHeight * 0.05,
    letterSpacing: 1,
  },
  boardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: boardSize,
    height: boardSize,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 10,
  },
  board: {
    width: '90%',
    height: '90%',
    backgroundColor: 'white',
  },
  boardRow: {
    flex: 1,
    flexDirection: 'row',
  },
  boardCell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderRight: {
    borderRightWidth: 2,
    borderRightColor: '#e0e0e0',
  },
  borderBottom: {
    borderBottomWidth: 2,
    borderBottomColor: '#e0e0e0',
  },
  circle: {
    width: cellSize * 0.7,
    height: cellSize * 0.7,
    borderRadius: cellSize * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    borderWidth: 0,
  },
  circleText: {
    fontSize: cellSize * 0.45,
    fontWeight: '600',
    color: '#6a5acd',
  },
  cross: {
    width: cellSize * 0.7,
    height: cellSize * 0.7,
    borderRadius: cellSize * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff0f5',
    borderWidth: 0,
  },
  crossText: {
    fontSize: cellSize * 0.45,
    fontWeight: '600',
    color: '#ff69b4',
  },
  bottomIndicator: {
    width: windowWidth * 0.15,
    height: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginTop: windowHeight * 0.05,
  },
});