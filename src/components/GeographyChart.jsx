import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../data/mockGeoFeatures";
import { tokens } from "../theme";
import { mockGeographyData as data } from "../data/mockData";

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveChoropleth
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      /*axis：这指的是坐标轴（axis），主要用于在地图上显示参考线和标签。在这里，domain是指坐标轴的范围，line是指坐标轴的线条样式，legend是指图例的样式，ticks是指刻度线的样式。通过设置不同的属性，可以调整这些元素在地图上的外观。

legends：这是图例（legend）的样式设置。图例是地图上用来解释颜色或者强度与数据之间关系的部分。通过这里的设置，可以改变图例的文字颜色和其他样式。 */
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};
/*features={geoFeatures.features}：这个属性用来设置地图的地理要素，其中geoFeatures.features是地理要素的数据。这些地理要素描述了不同的地理区域，比如国家、州、城市等。

margin={{ top: 0, right: 0, bottom: 0, left: 0 }}：这是设置图表的边距（margins），即图表与图表容器之间的空白区域。在这里，四个方向的边距都被设置为0，意味着图表会占满整个容器。

domain={[0, 1000000]}：这是设置数据值的范围（domain）。在这个例子中，数据值的范围被设置为从0到1000000。

unknownColor="#666666"：当地图上的某个区域没有对应数据值时，会使用这个颜色来填充该区域。

label="properties.name"：这是设置地理要素中用于显示标签的属性。在这个例子中，使用了地理要素中的properties.name属性作为标签。

valueFormat=".2s"：这是设置数据值的格式化方式。在这个例子中，数据值会以简短的方式显示，最多保留两位小数。

projectionScale={isDashboard ? 40 : 150}：这是设置地图投影的缩放比例。根据条件isDashboard的值，选择不同的缩放比例，以适应不同的展示环境。

projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}：这是设置地图投影的平移。同样根据条件isDashboard的值，选择不同的平移设置。

projectionRotation={[0, 0, 0]}：这是设置地图投影的旋转角度。在这个例子中，旋转角度被设置为0。

borderWidth={1.5}：这是设置地图区域之间的边界线宽度。

borderColor="#ffffff"：这是设置地图区域之间边界线的颜色。

legends={...}：这是设置图例的样式和位置。根据条件isDashboard的值，决定是否显示图例。 */

export default GeographyChart;