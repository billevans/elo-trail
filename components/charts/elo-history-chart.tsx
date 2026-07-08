"use client";


import {

LineChart,

Line,

XAxis,

YAxis,

CartesianGrid,

Tooltip,

ResponsiveContainer

}
from "recharts";


import {
EloPoint
} from "@/types/history";



interface Props {

points:EloPoint[];

}



export default function EloHistoryChart({

points

}:Props){



return (

<div
className="
h-[400px]
w-full
"
>


<ResponsiveContainer
width="100%"
height="100%"
>


<LineChart
data={points}
>


<CartesianGrid
strokeDasharray="3 3"
/>


<XAxis

dataKey="date"

/>


<YAxis />


<Tooltip />


<Line

type="monotone"

dataKey="rating"

strokeWidth={3}

/>


</LineChart>


</ResponsiveContainer>


</div>

);

}
