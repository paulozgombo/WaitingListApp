import { useState } from 'react'
import { useAddQueue } from '@/context/QueueContext';
import { Wrapper } from './style';
import { LoaderCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

const JoinQueue = () => {

    const [queue, setQueue] = useState('');
    const [priority, setPriority] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

        const matter: string = queue.trim();
        
        if (!matter) {
            alert('Please tell us what you want to queue for!');
            setLoading(false);
            return;
        }
              
        // Wait 3 seconds before hiding loader
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });

        await useAddQueue.getState().setMatterAsync(matter, priority);
        setQueue('');
        setPriority('');

        setLoading(false);       
        navigate('/ticket');

    }

    return (
        <>
            <Wrapper>
                <div className='modal'>
                    <h1>#Join the Queue</h1>

                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            placeholder='Enter the matter here!'
                            name='matter' 
                            value={queue} 
                            onChange={(e) => setQueue(e.target.value)}
                            disabled={loading}
                        />

                        <select 
                            size={1}
                            name='priority' 
                            value={priority} 
                            onChange={(e) => setPriority(e.target.value)}
                            disabled={loading}
                            className='selectPriority'
                        >
                            <option value="none">Select Priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>

                        <button type='submit' disabled={loading}>
                            {loading ? <LoaderCircle className="animate-spin"/> : 'Request for Queue'}
                        </button>
                    </form>
                </div>
            </Wrapper>
        </>
    )
}

export default JoinQueue;