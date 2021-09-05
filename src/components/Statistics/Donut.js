import { useSelector } from "react-redux";
import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";


const renderTooltip = context => {
  const { category, sum } = context.point || context;
    return (
      <div>
        {category}: {sum}%
      </div>
    );
};

const GetDataForDonut = () => {

  const initialData = useSelector(state => state.addChargeReducer.outcomes);
  
  const randomColor = () => {
    const firstRandomNumber = Math.trunc( (Math.random() * 256) );
    const secondRandomNumber = Math.trunc( (Math.random() * 256) );
    const thirdRandomNumber = Math.trunc( (Math.random() * 256) );
    
    return `rgb(${firstRandomNumber}, ${secondRandomNumber}, ${thirdRandomNumber})`;
  }
    
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

  let dataForDonut = [];
      for (let i = 0; i< categories.length; i++) {
       let datapiece = {
         sum: sums[i],
         categoryOut: categories[i],
         color: randomColor(),
        }
        dataForDonut.push(datapiece);
      }

  return dataForDonut;
}
  //const labelContent = (e) => (e.category);
  const Donut = () => {
          
  return (
    <Chart>
      <ChartTitle text="Total outcomes for each category ($)" />
        <ChartLegend visible={true} />
          <ChartSeries>
            <ChartSeriesItem
              type="donut"
              data={GetDataForDonut()}
              categoryField="categoryOut"
              field="sum"
            >
            <ChartSeriesLabels
              color="#fff"
              background="none"
              //content={labelContent()}
            />
            </ChartSeriesItem>
          </ChartSeries>
        </Chart>
  );
 };

export default Donut;