import Chart from "react-google-charts";

function TImeLineChart({
  chartLabel = [],
  chartData = [],
  chartOptions,
  width,
  height,
}) {
 
      
  return (
    <Chart
      width={width}
      height={height}
      chartType='Timeline'
      loader={<div>Loading Chart</div>}
      data={[chartLabel, ...chartData]}
      options={{
        timeline: {
          singleColor: "#0085FF",
        },
      }}
    />
  );
}

export default TImeLineChart;
