import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Café do Código</Text>
          <Text style={styles.headerSubtitle}>Seu café, uma linha por vez</Text>
        </View>

        <View style={styles.avatarPlaceholder}>
          <Ionicons name="person" size={20} color="#2f2d2c"></Ionicons>
        </View>
      </View>
      {/* Header */}

      {/* Conteúdo */}
      <View style={styles.content}>
        <View style={styles.grettingSection}>
          <Text style={styles.grettingTitle}>Bom dia!</Text>
          <Text style={styles.grettingSubtitle}>Que tal um café hoje?</Text>
        </View>

        <View style={styles.featured}>
          <Image
            source={require("./assets/coffee.jpg")}
            style={styles.image}
          ></Image>
          <Text style={styles.featuredTitle}>Cappucino Especial</Text>
          <Text style={styles.featuredDescription}>Cremoso e delicioso</Text>
          <Text style={styles.featuredPrice}>R$ 12,90</Text>
        </View>

        <Text style={styles.sectionTitle}>Nosso cardápio</Text>

        <View style={styles.menu}>
          <View style={styles.cardItem}>
            <Text style={styles.cardTitle}>Espresso</Text>
            <Text style={styles.cardDescription}>Puro e forte</Text>
            <Text style={styles.cardPrice}>R$ 7,00</Text>
          </View>

          <View style={styles.cardItem}>
            <Text style={styles.cardTitle}>Cappuccino</Text>
            <Text style={styles.cardDescription}>Clássico com espuma</Text>
            <Text style={styles.cardPrice}>R$ 12,90</Text>
          </View>

          <View style={styles.cardItem}>
            <Text style={styles.cardTitle}>Latte</Text>
            <Text style={styles.cardDescription}>Leite cremoso</Text>
            <Text style={styles.cardPrice}>R$ 11,50</Text>
          </View>

          <View style={styles.cardItem}>
            <Text style={styles.cardTitle}>Mocha</Text>
            <Text style={styles.cardDescription}>Toque de chocolate</Text>
            <Text style={styles.cardPrice}>R$ 13,50</Text>
          </View>
        </View>
      </View>
      {/* Conteúdo */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    width: "100%",
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2f2d2c",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4,
  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    paddingHorizontal: 24,
  },
  grettingSection: {
    marginTop: 10,
    marginBottom: 24,
  },
  grettingTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#2f2d2c",
  },
  grettingSubtitle: {
    fontSize: 16,
    color: "#9b9b9b",
    marginTop: 8,
  },
  featured: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 188,
    borderRadius: 16,
    marginBottom: 16,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2f2d2c",
  },
  featuredDescription: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4,
  },
  featuredPrice: {
    fontSize: 20,
    color: "#c67c4e",
    fontWeight: "800",
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16,
  },
  cardItem: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#0000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 3,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2f2d2c",
  },
  cardDescription: {
    fontSize: 12,
    color: "#9b9b9b",
    marginTop: 4,
    lineHeight: 16,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: "800",
    color: "#c67c4e",
    marginTop: 12,
  },
  menu: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20
  },
});
