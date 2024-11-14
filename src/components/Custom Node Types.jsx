import { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Node 1' }, type: 'custom' },
  { id: '2', position: { x: 300, y: 100 }, data: { label: 'Node 2' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const CustomNode = ({ data }) => {
  return (
    <div style={{ padding: '10px', background: '#ddd', borderRadius: '5px' }}>
      <Handle type="target" position="left" style={{ borderRadius: '50%', background: '#f00' }} />
      <div>{data.label}</div>
      <Handle type="source" position="right" style={{ borderRadius: '50%', background: '#0f0' }} />
    </div>
  );
};

function CustomFlow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div style={{ height: '500px', width: '700px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={{ custom: CustomNode }}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default CustomFlow;
