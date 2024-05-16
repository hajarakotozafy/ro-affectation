import React, {useContext} from 'react';
import ReactFlow, {EdgeLabelRenderer} from 'reactflow';
import { AffectationContext } from '../../Contexts/AffectationContexts';

import 'reactflow/dist/style.css';


function SolutionGraph() {
    const { affectationData } = useContext(AffectationContext);

  let initialNodes = [];
  let lettre = 'A';
  let y = 10
  
  for(let i = 1; i <= parseInt(affectationData.nbAff); i++){
    initialNodes.push(
      { 
        id: 'a'+i, 
        type: 'input',
        sourcePosition: 'right',
        targetPosition: 'left', 
        position: { x: 10, y: 24 + 80*(i-1) }, 
        data: {
          label: lettre,
        },
        style: {
            boxSizing: 'border-box',
            color: '#005162',
            fontSize: '14px',
            borderRadius: '24px',
            width: '48px',
            height: '48px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#ffffff',
            border: 'none',
            fontWeight: '600', 
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 4px 10px 0 rgba(0, 0, 0, 0.08)'
        }
      }
    )
    lettre = String.fromCharCode(lettre.charCodeAt(0) + 1);
}

lettre = 'a'

for(let i = 1; i <= parseInt(affectationData.nbAff); i++){
    initialNodes.push(
        { 
        id: 'b'+i, 
        sourcePosition: 'right', 
        type: 'output', 
        targetPosition: 'left', 
        position: { x: 260, y: 24 + 80*(i-1)}, 
        data: { 
          label: lettre
        },
        style: {
            boxSizing: 'border-box',
            color: '#005162',
            fontSize: '14px',
            borderRadius: '24px',
            width: '48px',
            height: '48px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#ffffff',
            border: 'none',
            fontWeight: '600',
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 4px 10px 0 rgba(0, 0, 0, 0.08)',
        }
      },
    )
    lettre = String.fromCharCode(lettre.charCodeAt(0) + 1);
  }

//   const initialEdges = [];
//   const nodes = Object.keys(minitabData.baseSolution);
//   for(let i = 0; i < nodes.length; i++){
//     initialEdges.push(
//       { 
//         id: nodes[i],
//         source: nodes[i].slice(0,2), 
//         target: nodes[i].slice(2,4), 
//         // label: minitabData.baseSolution[nodes[i]],
//         type: 'straight',
//         labelBgRadius: '50%',
//         labelBgColor: 'red',
//         color: 'white',
//         markerEnd: {type: 'arrowclosed'},
//         style: {
//           background: '#ffffff',
//         }
//       }
//     )
//   }
  return (
    <div className="graph" style={{width: '360px', height:'540px'}}>
      <ReactFlow 
        nodes={initialNodes} 
        // edges = {initialEdges}
    >
      {/* <Background color="grey" variant='dots' /> */}
        <EdgeLabelRenderer/>
      </ReactFlow>
    </div>
  );
}

export default SolutionGraph;

