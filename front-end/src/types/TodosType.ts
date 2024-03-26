export type Todos = {
    id: number;
    title: string;
    description: string;
    status: 'pending' | 'completed';
    user_id: number;
    created_at: string;
  };

export type TodosMap = {
    id: number;
    title: string;
    description: string;
    status: 'pending' | 'completed';
    user_id: number;
    created_at: string;
    log: boolean; 
}