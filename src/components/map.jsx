import React, { useRef, useEffect, useState } from 'react';
import { select, geoPath, geoAlbersUsa } from "d3";
import { STATES_ABBREV } from "./states";

const COLORS = ['#DB3A1A', '#4760DE', '#E0D01D'];



export const Map = ({ data, fetchHistData, setCurrState }) => {
    const svgRef = useRef();
    const wrapperRef = useRef();

    useEffect(() => {
        const svg = select(svgRef.current);
        
        const width = 750;
        const height = 375;

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
                setCurrState(STATES_ABBREV[d.properties.NAME])
            })
            // .on("mouseover", (feature, d) => {
            //     // div.transition()
            //     //     .duration(200)
            //     //     .style('opacity', .9);
            //     // div.html(d.properties.NAME)
            // })
            .attr("fill", (d) => {
                var fips = d.properties.STATE
                return COLORS[Number(fips) % COLORS.length];
            })
            .attr("class", "state")
            .attr("d", feature => pathGenerator(feature))
    }, [data])


    return (
        <div ref={wrapperRef} className='map-wrapper'>
            <h3>Click on the State to see its data</h3>
            <svg ref={svgRef} style={{ width: 750, height: 375 }} className='map'></svg>
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
