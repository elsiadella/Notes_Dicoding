// Elsi Adella
import React from "react";
import ActiveButton from "./ButtonAktif";
import ArchiveButton from "./ButtonArsip";
import DeleteButton from "./ButtonHapus";
import NoteItemContent from "./NoteItemContent";
import { showFormattedDate } from "../utils/index";

function NoteItem({ id, title, createdAt, body, archived, onDelete, onArchive, onActive }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} date={showFormattedDate(createdAt)} body={body} />

      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        {archived ? <ActiveButton id={id} onActive={onActive} /> : <ArchiveButton id={id} onArchive={onArchive} />}
      </div>
    </div>
  );
}

export default NoteItem;
