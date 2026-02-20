import { create } from 'zustand'

type QueueItem = {
    matter: string;
    matterId: number;
}

type QueueStore = {
    queue: QueueItem[];
    setMatterAsync: (matter: string) => Promise<void>;
}

export const useQueueStore = create<QueueStore>((set) => ({
    queue: [],
    setMatterAsync: async (matter) => {
         await new Promise((resolve) => setTimeout(resolve, 1000)); 
         const randomValue = Math.floor(Math.random() * 1000);    
        set((state) => ({ 
            queue: [...state.queue, { matter, matterId: randomValue }]
        }));
    }
}));