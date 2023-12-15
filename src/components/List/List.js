import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Accordian from "../Accordian/Accordian";
import ConfirmationDialog from './ConfimationDialog';
import "./List.css";

const List = ({ listData, fulldata, setfulldata, setListData }) => {
    const [openItem, setOpenItem] = useState(-1);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);

    const handleDelete = (index) => {
        setDeleteIndex(index);
        setConfirmationDialogOpen(true);
    }

    const confirmDelete = () => {
        if (deleteIndex !== null) {
            const updatedData = [...fulldata.slice(0, deleteIndex), ...fulldata.slice(deleteIndex + 1)];
            if (openItem === deleteIndex) {
                setOpenItem(-1);
            }
            setfulldata(updatedData);
            setListData(updatedData);
            setDeleteIndex(null);
        }
        setConfirmationDialogOpen(false);
    };

    const cancelDelete = () => {
        setDeleteIndex(null);
        setConfirmationDialogOpen(false);
    };

    const handleEdit = (index, editedContent) => {
        const updatedListData = [...listData];
        updatedListData[index] = {
            ...updatedListData[index],
            ...editedContent,
        };
        setListData(updatedListData);

        const updatedFullData = [...fulldata];
        updatedFullData[index] = {
            ...updatedFullData[index],
            ...editedContent,
        };
        setfulldata(updatedFullData);
    }

    return (
        <div className="main_list_container">
            {listData.map((candidateData, index) => (
                <div className="accordion" key={index}>
                    <div
                        className="accordion_header"
                        onClick={() => setOpenItem(openItem === index ? -1 : index)}
                    >
                        <h4>{candidateData.first} {candidateData.last}</h4>
                        {openItem === index ? <FontAwesomeIcon icon={faChevronUp} className="font_icon" /> : <FontAwesomeIcon icon={faChevronDown} className="font_icon" />}
                    </div>
                    {openItem === index && (
                        <Accordian candidateData={candidateData} onDelete={() => handleDelete(index)} onEdit={(editedContent) => handleEdit(index, editedContent)} />
                    )}

                </div>
            ))}
            <ConfirmationDialog
                isOpen={isConfirmationDialogOpen}
                onClose={cancelDelete}
                onConfirm={confirmDelete}
            />
        </div>
    )
}

export default List;
