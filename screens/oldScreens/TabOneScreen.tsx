import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight,
} from "react-native";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.contentContainer}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.statutContainer}>
          <View style={styles.circle}>
            <Text style={styles.statutTextBlack}>Actuel</Text>
            <Text style={styles.statutTextPink}>72,4</Text>
            <Text style={styles.statutTextBlack}>IMC:25,4</Text>
          </View>
          <View style={styles.hr}></View>
          <TouchableHighlight
            style={styles.btnGreen}
            onPress={() => Alert.alert("You tapped the Decrypt button!")}
            underlayColor="#fff"
          >
            <Text style={[styles.btnGreenText]}>Actualiser mon poids</Text>
          </TouchableHighlight>
          <View style={styles.hr}></View>
        </View>
        <View style={styles.row}>
          <View style={styles.depart}>
            <Text style={styles.titleBlock}>Départ</Text>
            <View style={{ alignSelf: "center" }}>
              <View
                style={{ paddingBottom: 5, paddingTop: 10 }}
              >
                <Text style={{ fontWeight: "bold" }}>Poids:112kg</Text>
              </View>
              <View>
                <Text style={{ paddingBottom: 5, fontWeight: "bold" }}>
                  IMC:39
                </Text>
              </View>
              <View>
                <Text style={{ paddingBottom: 15, fontWeight: "bold" }}>
                  Date:16/03/2016
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.objectif}>
            <Text style={styles.titleBlock}>Objectif</Text>
            <View style={{ alignSelf: 'center' }}>
              <View style={{ paddingBottom: 5, paddingTop: 10 }}>
                <Text style={{ fontWeight: "bold" }}>Poids:112kg</Text>
              </View>
              <View>
                <Text style={{ paddingBottom: 5, fontWeight: "bold" }}>
                  IMC:39
                </Text>
              </View>
              <View>
                <Text style={{ paddingBottom: 15, fontWeight: "bold" }}>
                  Date:16/03/2017
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.statutContainer}>
          <View style={styles.hr} />
        </View>
        <View style={styles.row}>
          <View style={styles.row1}>
            <Text style={styles.titleBlockInf}>Restant/Normal</Text>
            <Text style={{ flexDirection: 'row', fontWeight: "bold" }}>
              4kg
            </Text>
          </View>
          <View style={{ flex: 1, textAlign: "center", paddingBottom: 10 }}>
            <Text style={styles.titleBlockInf}>Restant/Objectif</Text>
            <Text style={{ fontWeight: "bold" }}>000kg</Text>
          </View>
        </View>
        <View style={[{ paddingTop: 10 }, styles.row]}>
          <View style={{ flex: 1 }}>
            <Text style={[styles.titleBlockInf, { textAlign: "center" }]}>Restant/Normal</Text>
            <Text style={{ flexDirection: "row", fontWeight: "bold" }}>
              4kg
            </Text>
          </View>
          <View style={{ flex: 1, textAlign: "center" }}>
            <Text style={styles.titleBlockInf}>Restant/Objectif</Text>
            <Text style={{ fontWeight: "bold" }}>3kg</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  contentContainer: {
    paddingTop: 5,
  },

  statutContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },

  circle: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FF647C",
    borderWidth: 10,
  },
  statutTextBlack: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statutTextPink: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF647C",
    paddingVertical: 10,
  },
  hr: {
    borderWidth: 0.5,
    borderColor: "#E5E5E5",
    margin: 10,
    width: "100%",
  },
  btnGreen: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 20,
    backgroundColor: "#00C48C",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",
  },
  btnGreenText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  depart: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#E5E5E5",
  },
  objectif: {
    flex: 1,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    marginRight: 10,
  },
  titleBlock: {
    textAlign: "center",
    fontSize: 14,
    color: "#999999",
    fontWeight: "bold",
    paddingTop: 15,
  },
  titleBlockInf: {
    flexDirection: "row",
    color: "#999999",
    paddingVertical: 5,
    fontWeight: "bold",
  },
  row: { flex: 1, flexDirection: "row" },
  row1: { flex: 1, textAlign: "center", marginLeft: 15 },
});
