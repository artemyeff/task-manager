import { useState } from "react";

export function useTaskSelection() {
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
    const [boardId, setBoardId] = useState<string | null>(null);
  
  
    return {setSelectedTaskId, selectedTaskId, boardId, setBoardId} 
}