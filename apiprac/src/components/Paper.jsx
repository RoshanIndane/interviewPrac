import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Paper = () => {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState([]);
    const [arry, setArry] = useState([])


    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
            //console.log(res.data)
            setData(res.data)
        })
    }
    //getData()

    const handleChange = (e) => {

        const searchRes = data.filter((res) => {
            return res.title.toLowerCase().includes(arry.toLowerCase())
            // console.log(res.title.toLowerCase().includes())
        })
        setFilter(searchRes)
    }


    return (
        <div>
            <div>
                <h1>Bu Salons</h1>
                <input
                    type='text'
                    placeholder='Search here'
                    onChange={(e) => {
                        setArry(e.target.value)
                    }}
                />
                <button onClick={handleChange}>Filter</button>
            </div>

            {arry.length !== 0 ? (
                <div>
                    {filter.map((e) => (
                        <div key={e.id}>
                            <h1>{e.title}</h1>
                            <h4>{e.body}</h4>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    {data.map((e) => (
                        <div key={e.id}>
                            <h1>{e.title}</h1>
                            <h3>{e.body}</h3>
                        </div>
                    ))}
                </div>
            )
            }

        </div>
    )
}

export default Paper