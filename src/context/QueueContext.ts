import { create } from 'zustand'

type QueueItem = {
    matter: string;
    matterId: number;
}

type QueueStore = {
    queue: QueueItem;
    setMatterAsync: (matter: string) => Promise<void>;
    getMatter: () => QueueItem;
    deleteMatter: () => void;
}

export const useQueueStore = create<QueueStore>((set) => ({
    queue: { matter: '', matterId: 0 },
    setMatterAsync: async (matter) => {
         await new Promise((resolve) => setTimeout(resolve, 1000)); 
         const randomValue = Math.floor(Math.random() * 1000);    
        set(() => ({ 
            queue: { matter, matterId: randomValue }
        }));
    },

    getMatter() {
        return this.queue;  
    },

    deleteMatter() {
        set(() => ({
            queue: { matter: '', matterId: 0 }
        }));
    },
  
}));