import React, { useRef, useEffect, useState } from 'react';
import { select, geoPath, geoAlbersUsa } from "d3";
import { STATES_ABBREV } from "./states"

const COLORS = ["blue", "green", "gold", "orange", "red", "purple", "maroon", "purple", 'grey', "indigo"];



export const Map = ({ data, fetchHistData, setCurrState }) => {
    const svgRef = useRef();
    const wrapperRef = useRef();

    useEffect(() => {
        const svg = select(svgRef.current);
        
        const width = 960;
        const height = 500;

        const projection = geoAlbersUsa().fitSize([width, height], data);
        const pathGenerator = geoPath().projection(projection);

        // const div = select("body").append("div")
        //     .attr("class", "tooltip")
        //     .style("opacity", 0);

        svg
            .selectAll(".state")
            .data(data.features)
            .join("path")
            .on("click", (feature, d) => {
                fetchHistData(STATES_ABBREV[d.properties.NAME])
            })
            .on("mouseover", (feature, d) => {
                setCurrState(STATES_ABBREV[d.properties.NAME])
                // div.transition()
                //     .duration(200)
                //     .style('opacity', .9);
                // div.html(d.properties.NAME)
            })
            .attr("fill", (d) => {
                var fips = d.properties.STATE
                return COLORS[Number(fips[Math.floor(Math.random() * fips.length)]) % COLORS.length];
            })
            .attr("class", "state")
            .attr("d", feature => pathGenerator(feature))
    }, [data])


    return (
        <div ref={wrapperRef}>
            <svg ref={svgRef} style={{ width: 960, height: 500 }}></svg>
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
