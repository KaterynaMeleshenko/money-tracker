import { useSelector } from "react-redux";
import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisTitle,
  ChartCategoryAxisItem,
} from "@progress/kendo-react-charts";

const randomColor = () => {
  const firstRandomNumber = Math.trunc( (Math.random() * 256) );
  const secondRandomNumber = Math.trunc( (Math.random() * 256) );
  const thirdRandomNumber = Math.trunc( (Math.random() * 256) );
      
  return `rgb(${firstRandomNumber}, ${secondRandomNumber}, ${thirdRandomNumber})`;
}

const GetDataForBars = () => {

  const initialData = useSelector(state => state.addChargeReducer.incomes);
    let categories = [];
    for (let i = 0; i < initialData.length; i++) {
      if ( categories.indexOf(initialData[i].category) === -1) {
        categories.push(initialData[i].category);
      }
    }
      
    let sums = []
  
    for (let i = 0; i < categories.length; i++) {
      let sum = 0;
      let newCat = initialData.filter(obj => obj.category === categories[i]);
      newCat.forEach(obj => sum = sum + parseInt(obj.sum)); 
      sums.push(sum);
    }
  
    let dataForBars = [];
      for (let i = 0; i< categories.length; i++) {
         let datapiece = {
           sum: [sums[i]],
           categoryIn: categories[i],
           color: randomColor(),
        }
        dataForBars.push(datapiece);
      }
        
    return dataForBars;
  
}

  const categories = [""];
 
  const seriesLabels = {
    visible: true,
    padding: 3,
    font: "normal 16px Arial, sans-serif",
    position: "center",
  };
 
  const Bar = props => {
    return (
      <Chart>
        <ChartTitle text="Total incomes for each category ($)" />
        <ChartLegend visible={true} />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={categories}>
            <ChartCategoryAxisTitle text="" />
          </ChartCategoryAxisItem>
        </ChartCategoryAxis>
        <ChartSeries>
          {GetDataForBars().map((item, idx) => (
            <ChartSeriesItem
              key={idx}
              type="bar"
              gap={25}
              spacing={5}
              labels={seriesLabels}
              data={item.sum}
              name={item.categoryIn}
              color={randomColor()}
            />
          ))}
        </ChartSeries>
      </Chart>
    );
};
 
export default Bar;