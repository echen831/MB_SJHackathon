import React, { useRef, useEffect } from 'react';
import { select, geoPath, geoMercator, geoAlbersUsa } from "d3";
import useResizeObserver from "use-resize-observer";

export const Map = ({ data }) => {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);

    useEffect(() => {
        const svg = select(svgRef.current);

        const { width, height } = 
            dimensions || wrapperRef.current.getBoundingClientRect();

        const projection = geoAlbersUsa().fitSize([960, 500], data);
        const pathGenerator = geoPath().projection(projection)

        svg
            .selectAll(".state")
            .data(data.features)
            .join("path")
            .attr("class", "state")
            .attr("d", feature => pathGenerator(feature));

    }, [data, dimensions])


    return (
        <div ref={wrapperRef} style={{width: 1000, height: 1000}} >
            <svg ref={svgRef} style={{ width: 1000, height: 1000 }}></svg>
        </div>
    )
}

