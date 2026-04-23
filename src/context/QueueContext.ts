import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type QueueItem = {
    matterId: number;
    matter: string;
    priority: string;
}

type AddQueue = {
    queue: QueueItem;
    queueList: QueueItem[];
    ticketRevoked: number;
    setMatterAsync: (matter: string, priority: string) => Promise<void>;
    deleteMatter: (id: number) => void;
}

export const useAddQueue = create<AddQueue>()(
    persist(
        (set) => ({

            queueList: [],
            ticketRevoked: 0,
            queue: { matterId: 0, matter: '',priority: '' },

            setMatterAsync: async (matter, priority) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                const matterId = Math.floor(Math.random() * 1000);

                set((state) => ({
                    queue: { matterId, matter, priority },
                    queueList: [...state.queueList, { matterId, matter, priority }]
                }));
            },

            deleteMatter: (id) => {
                set((state) => ({

                    queue: { matterId: 0, matter: '', priority: '' },

                    queueList: state.queueList.filter(
                        item => item.matterId !== id
                    ),

                    ticketRevoked: state.ticketRevoked + 1

                }));
            }

        }),
        {
            name: 'add-queue-storage',
            partialize: (state) => ({
                queueList: state.queueList,
                queue: state.queue
            })
        }
    )
);