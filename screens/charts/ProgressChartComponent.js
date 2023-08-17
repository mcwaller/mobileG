import React from "react";
import { View, Text, Dimensions } from "react-native";
import { ProgressChart } from "react-native-chart-kit";

const ProgressChartComponent = ({ data, screenWidth }) => {
  const chartConfig = {
    // Configuración de estilo de la gráfica de progreso (opcional, puedes ajustarla según tus preferencias)
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
    backgroundGradientToOpacity: 0,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  // Colors for each bar
  const barColors = [
    "rgba(197, 22, 5,.5)",
    "rgba(31, 110, 140,.5)",
    "rgba(101, 69, 31,.5)",
    "rgba(242, 190, 34,.5)"
  ];

  const scaledData = {
    T: data.T / 100,
    RH: data.RH / 100,
    HUM: data.HUM / 100,
    LUX: data.LUX / 10000,
  };

  const formattedData = {
    labels: ["Temp", "RH", "Hum", "Lum"],
    data: [scaledData.T, scaledData.RH, scaledData. HUM, scaledData.LUX],
  };

  const renderValueWithColor = (label, value, color) => (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View
        style={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 5,
        }}
      />
      <Text>
        {label}:{value}
      </Text>
    </View>
  );

  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}>
        Valores de los sensores de tu terrario
      </Text>

      <ProgressChart
        data={formattedData}
        width={screenWidth}
        backgroundColor={"transparent"}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={{
          ...chartConfig,
          color: (opacity = 1, index) => barColors[index], // Use different colors for each bar
        }}
        hideLegend={true}
        formatYLabel={(value) => value.toFixed(0)} // Format Y-axis labels to remove decimal places
      />
      <View>
        {data && (
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              marginTop: -135,
              marginLeft: 15,
            }}
          >
            {renderValueWithColor("Temp", data.T, "rgb(197, 22, 5)")}
            {renderValueWithColor("RH", data.RH, "rgb(31, 110, 140)")}
            {renderValueWithColor("HUM", data.HUM, "rgb(101, 69, 31)")}
            {renderValueWithColor("Lum", data.LUX, "rgb(242, 190, 34)")}
          </View>
        )}
      </View>
    </View>
  );
};

export default ProgressChartComponent;