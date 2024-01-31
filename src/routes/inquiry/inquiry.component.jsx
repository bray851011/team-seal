import { useState } from 'react';
import Dropdown from '../../components/dropdown/dropdown.component';
import './inquiry.styles.scss'
import { Bar, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';



const Inquiry = () => {
    const categories = [
        '50M自由式', '100M自由式','200M自由式','400M自由式','800M自由式','1500M自由式',
        '50M蝶式', '100M蝶式','200M蝶式',
        '50M蛙式', '100M蛙式','200M蛙式',
        '50M仰式', '100M仰式','200M仰式',
        '100M混合式','200M混合式','400M混合式'
    ]
    const [limit, setLimit] = useState(5);
    const [category, setCategory] = useState('50M自由式');

    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
        datasets: [
          {
            label: 'Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor:'rgb(75, 192, 192)',
            backgroundColor:'rgb(75, 192, 192)',
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15
          }
        ]
      };
    const options = {
        animations: {
            y: {
                easing: 'easeInOutElastic',
                from: (ctx) => {
                  if (ctx.type === 'data') {
                    if (ctx.mode === 'default' && !ctx.dropped) {
                      ctx.dropped = true;
                      return 0;
                    }
                  }
                }
            },
            radius: {
              duration: 400,
              easing: 'linear',
              loop: (context) => context.active
            }
          },
          hoverRadius: 12,
          hoverBackgroundColor: 'yellow',
          interaction: {
            mode: 'nearest',
            intersect: false,
            axis: 'x'
          },
          plugins: {
            tooltip: {
              enabled: true
            }
          } 
          
    }

    return (
        <div className='container'>
            <div className="selection-container">
                <Dropdown /> 

                <div className="dropdown-container">
                    <select 
                        className='dropdown'
                        onChange={e => setCategory(e.target.value)}
                    >
                        {categories.map((category) => (
                            <option value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            
                <div className="dropdown-container">
                    <select 
                        className='dropdown'
                        onChange={e => setLimit(e.target.value)}
                    >
                        <option value="5">近五筆</option>
                        <option value="10">近十筆</option>
                        <option value="20">近二十筆</option>
                        <option value="0">全部</option>
                    </select>
                </div>
            
            </div>
            <p>Your favorite fruit: {category}</p>
            <p>Your favorite fruit: {limit}</p>

            <div>
                <h2>My Bar Chart</h2>
                <Line data={data} options={options} /> 
            </div>

        </div>  
    )
}

export default Inquiry;