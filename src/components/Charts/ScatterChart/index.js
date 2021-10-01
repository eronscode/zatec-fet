import Chart from "react-google-charts";

function ScatterChart({
    chartData,
    chartOptions,
    width,
    height
    
}) {
  return (
    <Chart
      width={width}
      height={height}
      chartType='ScatterChart'
      loader={<div>Loading Chart</div>}
      data={chartData}
      options={{
        title: "Age vs. Weight comparison",
        hAxis: { title: "Age", scaleType: "log" },
        vAxis: {
          scaleType: "log",
        },
        legend: "none",
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
}

export default ScatterChart;
