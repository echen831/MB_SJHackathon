import React, { useRef, useEffect, useState } from 'react';
import { select, geoPath, geoAlbersUsa } from "d3";
import { STATES_HASH } from "./states"

const COLORS = ["blue", "green", "gold", "orange", "red", "purple", "maroon"];

// enter code to create color scale
// var colorScale = d3.scaleThreshold()
//     .range(["grey", "green", "yellow", "orange", "red", "purple", "maroon"]);


export const Map = ({ data, fetchHistData }) => {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const [selectedState, setSelectedState] = useState(null);

    useEffect(() => {
        const svg = select(svgRef.current);
        
        const width = 960;
        const height = 500;

        const projection = geoAlbersUsa().fitSize([width, height], data);
        const pathGenerator = geoPath().projection(projection);

        svg
            .selectAll(".state")
            .data(data.features)
            .join("path")
            .on("click", (feature, d) => {
                console.log(feature, d)
            })
            .attr("fill", (d) => {
                var fips = d.properties.STATE
                return COLORS[Number(fips[fips.length-1]) % COLORS.length];
            })
            .attr("class", "state")
            .attr("d", feature => pathGenerator(feature))
    }, [data])


    return (
        <div ref={wrapperRef} style={{width: 1000, height: 1000}} >
            <svg ref={svgRef} style={{ width: 1000, height: 1000 }}></svg>
        </div>
    )
}


// enter code to define tooltip

// var tooltip = d3.select('body').append("div")
//     .attr("id", "tooltip-div")
//     .attr("class", "tooltip")
//     .style("opacity", 0);

/* D3 tooltip for map */
// div.tooltip {
//     position: absolute;
//     text - align: center;
//     color: white;
//     width: 220px;
//     height: 120px;
//     padding: 2px;
//     font: 12px sans - serif;
//     background - color: gray;
//     border: 2px;
//     border: solid;
//     border - radius: 8px;
//     pointer - events: none;
// }
