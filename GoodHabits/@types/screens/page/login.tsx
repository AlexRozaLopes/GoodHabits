import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";

export function Login() {
  return (
    <View className="bg-orange-50 flex-1 justify-center items-center flex-col">
      <Image source={require("../../../assets/explore.png")}></Image>
      <TextInput
        className="border-gray-600 rounded-lg border-solid border w-64 mt-9 mb-2 h-11 p-2"
        placeholder="Email"
      ></TextInput>

      <TextInput
        className="border-gray-600 rounded-lg border-solid border w-64 h-11 p-2"
        placeholder="Senha"
      ></TextInput>

      <View className="flex w-64 justify-end items-end flex-row mb-6">
        <Text className="text-slate-700">Recuperar senha?</Text>
      </View>

      <TouchableOpacity className=" bg-red-600 rounded-lg w-64 flex items-center justify-center h-12 mt-2">
        <Text className=" text-lg text-orange-50">Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
