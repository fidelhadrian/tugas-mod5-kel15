import { Fragment } from "react";
import React from "react";
import ProfileCard from "../components/ProfileCard";
import members from "../data/data";
import '../components/ProfileCard.css'

export default function Profile() {
    return (
        <>
        <p id="anggota">Anggota Kelompok 15</p>
        {members.map((member, index) => (
            <Fragment key={member.id}>
            <ProfileCard
                nama={member.nama}
                nim={member.nim}
                genre={member.genre}
                imageUrl={member.imageUrl}
                onClick={() => alert("Halo bang " + member.nama)}
            />
            {members.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>
        ))}
        </>
    );
}
