import { useEffect } from "react"   
import { useQueueStore } from "./context/QueueContext"

const metterDataSet = ()=> {
  const matter = useQueueStore.getState().queue;
  console.log(matter);
}

const Testfile = () => {

  useEffect(() => {
    metterDataSet();
  }, []);

  return (
    <div>testfile</div>
  )
}

export default Testfile