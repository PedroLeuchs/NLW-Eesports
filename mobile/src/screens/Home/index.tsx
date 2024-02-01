import React from "react";
import { useEffect, useState } from "react";
import { View, Image, FlatList } from "react-native";
import Logo from "../../assets/icon.png";
import { styles } from "./styles";
import { Heading } from "../../components/Heading/intex";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { GAMES } from "../../utils/games";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);
  useEffect(() => {
    fetch("http://192.168.56.1:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Heading
        title="Encontre seu duo! "
        subtitle="Selecione o game que deseja jogar..."
      />
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
