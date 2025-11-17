import React from 'react';
import { useGLTF } from '@react-three/drei';

type FurnitureModelProps = {
    url: string;
    scale?: number;
    position?: [number, number, number];
    isSelected?: boolean;
    isDragging?: boolean;
    color?: string;
};

const FurnitureModel: React.FC<FurnitureModelProps> = ({
    url,
    scale = 1,
    position = [0, 0, 0],
    isSelected,
    isDragging,
    color,
}) => {
    const { scene } = useGLTF(url);

    return (
        <primitive
            object={scene}
            position={position}
            scale={scale}
        // You can also pass rotation if needed
        >
            {/* Override material if needed */}
            <meshStandardMaterial
                attach="material"
                color={isSelected ? '#FFD700' : color}
                transparent={isDragging}
                opacity={isDragging ? 0.7 : 1}
            />
        </primitive>
    );
};

export default FurnitureModel;
