import React from 'react';
import Client_Box from './Client_box';
import './../styles/components/client.scss';


const Clients =()=>(
    <div className="client-heading" id="projects">
        <h2>Our Clients</h2>
        <div className="clients">
        <Client_Box 
            img='/assets/images/l&t.jpg'
            title="L&T (MIAL) (Under Proexcel Thane)"
        />
        <Client_Box 
            img='/assets/images/isolux.jpg'
            title="Isoluxe Corsan India Ltd"
        />
        <Client_Box 
            img='/assets/images/hcc.jfif'
            title="HCC (ABP2, LMNHP 3 &4, NH 34 Project) "
        />
        <Client_Box 
            img='/assets/images/soma.jfif'
            title="Soma Enterprise Ltd (Varanasi Bypass)"
        />
        <Client_Box 
            img='/assets/images/NTPC.png'
            title="NTPC DADRI (PQC Road Works)"
        />
        <Client_Box 
            img='/assets/images/gammon.png'
            title="Gammon India Ltd (Gorakhpur Bypass Project, Signature Bridge Project
Delhi)"
        />
        <Client_Box 
            img='/assets/images/ds.jfif'
            title="D S Construction (Lucknow Sitapur NH Project)"
        />
        <Client_Box 
            img='/assets/images/tata.jfif'
            title="TATA PROJECTS LTD (Machlipatanam & Jaipur )t"
        />
        <Client_Box 
            img='/assets/images/apco.png'
            title="APCO INFRATECH PVT LTD (VARANASI BYPASS & MEERUT
BULANDSHAHAR)"
        />
    </div>
    </div>
    
);

export default Clients;