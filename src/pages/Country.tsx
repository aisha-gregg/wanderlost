import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { View } from "react-native";
import { RootStackParamList } from "../routes";

type CountryScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Country"
>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Country">;

type Props = {
  navigation: CountryScreenNavigationProp;
  route: ProfileScreenRouteProp;
};

export function Country({ route }: Props) {
  const { id } = route.params;

  return <View>{id}</View>;
}
