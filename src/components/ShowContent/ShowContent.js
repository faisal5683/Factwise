import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

function ShowContent({ candidateData, onDelete, onEdit }) {

    const [isEditable, setIsEditable] = useState(false);
    const [selectedGender, setSelectedGender] = useState(candidateData.gender);

    const getAge = () => {
        const candiateBirthYear = Number(candidateData.dob.split("-")[0]);
        const todayDate = new Date().getFullYear();
        return todayDate - candiateBirthYear;
    }

    const del = () => {
        onDelete();
    }

    const edit = () => {
        setIsEditable(true);
    }

    const saveContent = () => {
        const editedContent = {
            dob: document.querySelector('.inputAge').value,
            gender: selectedGender,
            country: document.querySelector('.countryInput').value,
            description: document.querySelector('.descriptionDiv').value,
        };
        onEdit(editedContent);
        setIsEditable(false);
    }

    const cancelEdit = () => {
        setIsEditable(false);
    }

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    }

    return (
        <>
            {isEditable ? (
                <>
                    <div className="row1">
                        <div className="details">
                            <div className="age">
                                <label>Age</label>
                                <div><input type="date" defaultValue={candidateData.dob} className='inputAge' /></div>
                            </div>
                            <div className="gender">
                                <label>Gender</label>
                                <div>
                                    <select value={selectedGender} onChange={handleGenderChange}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Not to say">Not to say</option>
                                    </select>
                                </div>
                            </div>
                            <div className="country">
                                <label>Country</label>
                                <div><input type='text' defaultValue={candidateData.country} className='countryInput' /></div>
                            </div>
                        </div >
                    </div >
                    <div className="row2">
                        <div className="desc">
                            <label>Description</label>
                            <span><br></br><textarea defaultValue={candidateData.description} className='descriptionDiv'></textarea></span>
                        </div>
                    </div>
                    <div className="row3">
                        <div className="save" onClick={saveContent}>
                            <button>Save</button>
                        </div>
                        <div className="cancel" onClick={cancelEdit}>
                            <button>Cancel</button>
                        </div>
                    </div>
                </>
            ) :
                (
                    <>
                        <div className="row1">
                            <div className="details">
                                <div className="age">
                                    <label>Age</label>
                                    <div>{getAge()}</div>
                                </div>
                                <div className="gender">
                                    <label>Gender</label>
                                    <div>{candidateData.gender}</div>
                                </div>
                                <div className="country">
                                    <label>Country</label>
                                    <div>{candidateData.country}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row2">
                            <div className="desc">
                                <label>Description</label>
                                <span><br></br>{candidateData.description}</span>
                            </div>
                        </div>
                        <div className="row3">
                            <div className="del" onClick={del}>
                                <FontAwesomeIcon icon={faTrash} color="red" />
                            </div>
                            <div className="edit" onClick={edit}>
                                <FontAwesomeIcon icon={faPen} color="blue" />
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default ShowContent