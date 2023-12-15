
import "./Accordian.css";
import { useState } from "react";
import ShowContent from "../ShowContent/ShowContent";

export default function Accordian({ candidateData, onDelete, onEdit }) {

    return (
        <div className="accordion_content">
            <ShowContent candidateData={candidateData} onDelete={onDelete} onEdit={onEdit} />
        </div>
    )
}