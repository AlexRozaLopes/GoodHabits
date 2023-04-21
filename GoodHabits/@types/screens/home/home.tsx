import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";

export default function Home() {
  return (
    <View className="bg-orange-50 flex-1 items-center justify-center flex-col ">
      <View className="flex-grow items-center justify-center">
        <Text className="font-bold  text-orange-700 text-5xl mt-9">
          Good Habits
        </Text>
        <StatusBar style="auto" />
        <Image
          className="mt-12"
          source={require("../../../assets/adventure_map.png")}
        />
        <Text className="text-slate-700 text-lg mt-4 px-16">
          Construa bons habitos de maneira simples e divertida!
        </Text>
        <View className="bg-orange-200 w-64 h-28 rounded-lg my-5 flex justify-center">
          <View className="flex-row items-center ">
            <Image
              source={require("../../../assets/Vector.png")}
              className="mr-2 ml-4"
            ></Image>
            <Text className="text-slate-700 text-base">
              descubra novos habitos.
            </Text>
          </View>
          <View className="flex-row items-center my-2">
            <Image
              source={require("../../../assets/Vector.png")}
              className="mr-2 ml-4"
            ></Image>
            <Text className="text-slate-700 text-base">
              monitore seus habitos.
            </Text>
          </View>
          <View className="flex-row items-center ">
            <Image
              source={require("../../../assets/Vector.png")}
              className="mr-2 ml-4"
            ></Image>
            <Text className="text-slate-700 text-base">
              compartilhe sua experiencia.
            </Text>
          </View>
        </View>
      </View>
      <View className="items-center flex-grow justify-center">
        <TouchableOpacity className=" bg-orange-600 rounded-lg w-56 flex items-center justify-center h-12 mt-2">
          <Text className=" text-lg text-orange-50">Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
