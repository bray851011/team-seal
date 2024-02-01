import { useState, useEffect } from 'react';
import './inquiry.styles.scss'
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';

const Get_List_Of_Member = (url) => {
  const [nameList, setNameList] = useState([]);
  
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setNameList(response.data);
      })
      .catch((error) => {
        console.log(error)
      });
  }, [url]);
  console.log(url)
  return nameList;
}

const Inquiry = () => {
    const categories = [
        '25M自由式', '50M自由式', '100M自由式','200M自由式','400M自由式','800M自由式','1500M自由式',
        '50M蝶式', '100M蝶式','200M蝶式',
        '50M蛙式', '100M蛙式','200M蛙式',
        '50M仰式', '100M仰式','200M仰式',
        '100M混合式','200M混合式','400M混合式'
    ]
    const nameList = Get_List_Of_Member('http://127.0.0.1:8000/members');
    const [label, setLabels] = useState([]);
    console.log(nameList[0])
    const [member, setMember] = useState(nameList[0]);
    const [limit, setLimit] = useState(5);
    const [category, setCategory] = useState('25M自由式');

    useEffect(() => {
      const url = `http://127.0.0.1:8000/results/?member=${member}&category=${category}&limit=${limit}`;
      console.log(url)
      axios.get(url)
        .then((response) => {
          setLabels(response.data);
        })
        .catch((error) => {
          console.log(error)
        });
    }, [member, category, limit])

  const data = {
      labels: label[1],
      datasets: [
        {
          label: '個人成績',
          data: label[0],
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
                <div className="dropdown-container">
                  <select 
                    className='dropdown'
                    onChange={e => setMember(e.target.value)}
                  >
                    {nameList.map((name) => (
                      <option value={name}>{name}</option>
                    ))}
                  </select>
                </div>

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


            <div>
                <h2>My Bar Chart</h2>
                <Line data={data} options={options} /> 
            </div>

        </div>  
    )
}

export default Inquiry;