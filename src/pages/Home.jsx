import { useEffect, useState } from "react"
import topicsService from "../services/topics/topics.service";

const Home = () => {
    const [topics, setTopics] = useState(null)

    const getTopics = async () => {
      const data = await topicsService.GET()
      setTopics(data)
    }
    
    useEffect(() => {
     getTopics()
    }, []);


  return (
    <div className="Home">
        {JSON.stringify(topics)}
    </div>
  )
}

export default Home