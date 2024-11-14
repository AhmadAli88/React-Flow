import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
  } from 'reactflow';
  
  import 'reactflow/dist/style.css';
  
  const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 250, y: 150 }, data: { label: '2' } },
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
  
  function ZoomPanFlow() {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  
    return (
      <div style={{ height: '500px', width: '700px' }}>
        <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange}>
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    );
  }
  
  export default ZoomPanFlow;
  