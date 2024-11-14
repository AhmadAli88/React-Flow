import { useState, useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [{ id: '1', position: { x: 0, y: 0 }, data: { label: '1' } }];
const initialEdges = [];

function DynamicFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [idCounter, setIdCounter] = useState(2);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const addNode = () => {
    const newNode = {
      id: `${idCounter}`,
      position: { x: Math.random() * 300, y: Math.random() * 300 },
      data: { label: `${idCounter}` },
    };
    setNodes((nds) => [...nds, newNode]);
    setIdCounter(idCounter + 1);
  };

  return (
    <div style={{ height: '500px', width: '700px' }}>
      <button onClick={addNode}>Add Node</button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default DynamicFlow;
