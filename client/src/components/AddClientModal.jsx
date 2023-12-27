import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";

<<<<<<< HEAD
const AddClientModal = () => {
  return (
    <>
    <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addClientModal">
    <div className="d-flex align-items-center">
        <FaUser className="icon"/>
        <div>Add Client</div>
    </div>
    </button>

    <div className="modal fade" id="addClientModal" aria-labelledby="addClientModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h1 className="modal-title fs-5" id="addClientModalLabel">Modal title</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            ...
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
        </div>
=======

const AddClientModal = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

  return (
    <>
    <button 
        type="button" 
        className="btn btn-primary" 
        data-bs-toggle="modal" 
        data-bs-target="#addClientModal"
    >
        <div className="d-flex align-items-center">
            <FaUser className="icon" />
            <div>Add Client</div>
        </div>
    </button>

    <div 
        className="modal fade" 
        id="addClientModal" 
        aria-labelledby="addClientModalLabel" 
        aria-hidden="true"
    >
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h1 
                className="modal-title fs-5" 
                id="addClientModalLabel"
            >
                Add Client
            </h1>
            <button 
                type="button" 
                className="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close"
            >

            </button>
        </div>
        <div className="modal-body">
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" />
                </div>
            </form>
        </div>
        
>>>>>>> 2ec554a5519914b1d4aa3e723d8f2f5f128fbe9b
        </div>
    </div>
    </div>
    </>
  )
}

export default AddClientModal