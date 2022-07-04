import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Posts = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState([])
    const [array, setArray] = useState([])

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

        const searchresults = data.filter((res) => {
            return res.title.toLowerCase().includes(array.toLowerCase())

        })
        setSearch(searchresults);

    }

    return (
        <div>
            <div>
                <h1>Beu Salons</h1>
                <input
                    type='text'
                    placeholder='Search Here'
                    onChange={(e) => {
                        setArray(e.target.value)
                    }}
                />

                <button onClick={handleChange}>Search</button>
            </div>


            {array.length !== 0 ? (
                <div>
                    {search.map((e) => (
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
            )}
        </div>
    )
}

export default Posts
