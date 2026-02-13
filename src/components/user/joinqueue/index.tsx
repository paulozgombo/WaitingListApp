import { useState } from 'react'
import { useQueueStore } from '@/context/QueueContext';
import { Wrapper } from './style';
import { LoaderCircle } from 'lucide-react';

const JoinQueue = () => {
    const [queue, setQueue] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQueue(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

        await useQueueStore.getState().setMatterAsync(matter);
        setQueue('');
        
        setLoading(false);
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
                            onChange={handleChange}
                            disabled={loading}
                        />
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