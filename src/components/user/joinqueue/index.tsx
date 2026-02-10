import {useState} from 'react'
import { useQueueStore } from '../../../context/QueueContext';



const JoinQueue = () => {

    const [queue, setQueue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQueue(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        useQueueStore.getState().setMatterAsync(queue);
        setQueue('');
        
    }

  return (
     <>
     <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder='Matéria'
            name='matter' 
            value={queue} 
            onChange={handleChange}
        />
        <button type='submit'>Entrar na fila</button>
     </form>
     </>
  )
}

export default JoinQueue