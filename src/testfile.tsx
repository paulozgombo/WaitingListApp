/*import { useAddQueue } from "@/context/QueueContext"

const Testfile = () => {
  
  const queue = useAddQueue((state: any) => state.queue);
  const QueueList = useAddQueue((state: any) => state.queueList);
  
  const queuePosition = QueueList.findIndex(
    (item: any) => item.matterId === queue.matterId
  ) + 1;

  // Derived directly — no useState, no useEffect needed
  const isDisabled = queuePosition === 0;

  const handleRemove = () => {
    useAddQueue.getState().deleteMatter(queue.matterId);
  }

  return (
    <div>
      <h1>MATTER REFERENCE - #{queue.matterId}</h1>
      <p>MATTER - {queue.matter}</p>
      <p>PRIORITY - {queue.priority}</p>
      <p>QUEUE POSITION - {queuePosition}</p>
      <button onClick={handleRemove} disabled={isDisabled}>
        Remove from Queue
      </button>
    </div>
  )
}

export default Testfile*/