import { ImageBackground } from "react-native";
import { styles } from "./styles";
import Fundo from "../../assets/Fundo.png";
interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={Fundo}
      style={styles.container}
      defaultSource={Fundo}
    >
      {children}
    </ImageBackground>
  );
}
