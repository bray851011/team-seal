import { useState } from 'react';
import Dropdown from '../../components/dropdown/dropdown.component';
import './inquiry.styles.scss'
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const data = {
    labels: ['10/10', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
        hoverBorderColor: 'rgba(255, 99, 132, 1)',
        data: [65, 59, 80, 81, 56, 55, 100]
      }
    ]
  };

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

            <div className='detail-container'>
                <p>asdf</p>
                <p>asdfasdf</p>
            </div>

            <div>
                <h2>My Bar Chart</h2>
                <Bar data={data} /> 
            </div>

            <div>
                <h2>My Bar Chart</h2>
                <Bar data={data} /> 
            </div>
        </div>  
    )
}

export default Inquiry;