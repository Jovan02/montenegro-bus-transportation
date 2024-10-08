import React, { useContext, useEffect, useState } from "react";
import "./carrier-panel.css";
import { TableTimetable } from "../../components/TableTimetable/TableTimetable";
import { ModalWindow } from "../../components/ModalWindow/ModalWindow";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const CarrierPanel = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    const [modalResponse, setModalResponse] = useState(false);
    const { user } = useContext(AuthContext);

    const handleDeleteClick = (e) => {
        e.preventDefault();
        console.log("Delete clicked");
        setModalData({
            title: "Brisanje linije",
            message: "Da li ste sigurni da zelite obrisati ovu liniju?",
            isConfirmation: true,
            isOpen: true,
            setResponse: setModalResponse,
        });
        setIsModalOpen(true);
    };

    return (
        <main className="prevoznik-body">
            <h1>{user.company_name ? user.company_name : "Ime Prevoznika"}</h1>
            <Link to="/dodaj-liniju/0" className="prevoznik-newline-button">
                Nova linija
            </Link>
            <h2>Aktivne linije</h2>
            <TableTimetable
                isEdit={true}
                handleDeleteClick={handleDeleteClick}
                isActive={true}
                isCarrier={true}
            />
            <h2>Linije na cekanju</h2>
            <TableTimetable
                isEdit={true}
                handleDeleteClick={handleDeleteClick}
                isActive={false}
                isCarrier={true}
            />
            {isModalOpen && (
                <ModalWindow
                    title={modalData.title}
                    message={modalData.message}
                    isConfirmation={modalData.isConfirmation}
                    isOpen={modalData.isOpen}
                    setIsOpen={setIsModalOpen}
                    setResponse={modalData.setResponse}
                />
            )}
        </main>
    );
};
