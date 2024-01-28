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
    return (
        <div className='container'>
            <div class="selection-container">
                <Dropdown /> 
            
                <Dropdown /> 
            
                <Dropdown /> 
            
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