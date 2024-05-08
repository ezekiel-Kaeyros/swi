import React from 'react'
import { BaseEdge,
    EdgeLabelRenderer,
    EdgeProps,
    getBezierPath,
    useReactFlow, } from 'reactflow'

const onEdgeClick = (evt: any, id: any) => {
    evt.stopPropagation();
    alert(`remove ${id}`);
};

const CustomEdgeComponent = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
  }: EdgeProps) => {

    const { setEdges } = useReactFlow();
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    const onEdgeClick = () => {
        setEdges((edges) => edges.filter((edge) => edge.id !== id));
    };

    return (
        <>
            <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
            <EdgeLabelRenderer>
                <div
                style={{
                    position: 'absolute',
                    transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                    fontSize: 12,
                    // everything inside EdgeLabelRenderer has no pointer events by default
                    // if you have an interactive element, set pointer-events: all
                    pointerEvents: 'all',
                }}
                className="nodrag nopan"
                >
                <button className="w-[20px] flex justify-center h-[20px] bg-transparent border-[#eee] border-[1px] cursor-pointer rounded-full text-[12px] line-[1px]" onClick={onEdgeClick}>
                    <span className='w-[50px] text-[13px]'>×</span>
                </button>
                </div>
            </EdgeLabelRenderer>
        </>
    )
}

export default CustomEdgeComponent