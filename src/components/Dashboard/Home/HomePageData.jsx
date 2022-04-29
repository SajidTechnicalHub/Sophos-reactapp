import { Chart, title, ArcElement } from 'chart.js'
export const AdminChartsData = [
  {
    label: 'Global Admin',
    value: 2500,
  },
  {
    label: 'Project Admin',
    value: 7500,
    // isEmpty: true,
  },
  {
    label: 'Simula. Admin',
    value: 8570,
    // isEmpty: true, 


  },
  {
    label: ' Global Reader',
    value: 50,
    // isEmpty: true,
  },
]
export const TotalUser = [
  {
    label: 'Users',
    value: 75453,
    // isEmpty: true,
  },
  {
    label: 'Admins',
    value: 8540,
    // isEmpty: true,
  },
]
export const LineChartdata = [
  {
    "name": "Day 1",
    "Admin": 40,
  },
  {
    "name": "Day 2",
    "Admin": 30,
  },
  {
    "name": "Day 3",
    "Admin": 20,
  },
  {
    "name": "Day 4",
    "Admin": 27,
  },
  {
    "name": "Day 5",
    "Admin": 18,
  },
  {
    "name": "Day 6",
    "Admin": 100,
  },
  {
    "name": "Day 7",
    "Admin": 100,
  },

]



// export const DoughnutData = {
//   labels: [
//     'Red',
//     'Blue',
//     'Yellow'
//   ],
//   datasets: [{
//     label: 'My First Dataset',
//     data: [300, 50, 100],
//     backgroundColor: [
//       'rgb(255, 99, 132)',
//       'rgb(54, 162, 235)',
//       'rgb(255, 205, 86)'
//     ],
//     hoverOffset: 4
//   }]
// }

// export const DoughnutOptions = {
//   labels: ['ETH', 'DAI', 'USDT'],
//   datasets: [
//     {
//       data: [30, 40, 30],
//       backgroundColor: ["#868DAC", "#F2A919", "#6297A4"],
//       hoverBackgroundColor: [
//         "#7482C4",
//         "#FEAB09",
//         "#488695"
//       ],
//     }
//   ],
//   options: {
//     plugins: {
//       labels: {
//         render: 'percentage',
//         fontColor: ['green', 'white', 'red'],
//         precision: 2
//       }
//     },
//   },
// }



// export const plugins = [{
//   beforeDraw: function (chart) {
//     var width = chart.width,
//       height = chart.height,
//       ctx = chart.ctx;
//     ctx.restore();
//     var fontSize = (height / 160).toFixed(2);
//     ctx.font = fontSize + "em sans-serif";
//     ctx.textBaseline = "top";
//     var text = "Foo-bar",
//       textX = Math.round((width - ctx.measureText(text).width) / 2),
//       textY = height / 2;
//     ctx.fillText(text, textX, textY);
//     ctx.save();
//   }
// }]

