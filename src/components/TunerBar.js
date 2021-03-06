import React, { useState } from 'react';
import { ProSidebar, MenuItem } from 'react-pro-sidebar';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';

export default function TunerBar() {
  const [collapsed, setCollapsed] = useState(true);
  const gNote = 'https://res.cloudinary.com/mpurcell/video/upload/v1639449472/G_-_Ukulele_bop466.mp3';
  const cNote = 'https://res.cloudinary.com/mpurcell/video/upload/v1639449577/C_-_Ukulele_fungg1.mp3';
  const eNote = 'https://res.cloudinary.com/mpurcell/video/upload/v1639449577/E_-_Ukulele_xpp9n4.mp3';
  const aNote = 'https://res.cloudinary.com/mpurcell/video/upload/v1639449578/A_-_Ukulele_fuj0rr.mp3';

  const playNote = (audio) => {
    new Audio(audio).play();
  };
  return (
    <div id="tunerBar">
      <ProSidebar collapsed={collapsed} width="80px">
        {collapsed ? (
          <MenuItem type="button" onClick={() => setCollapsed(!collapsed)}>
            <p>
              Tuner <BsFillArrowRightSquareFill />
            </p>
          </MenuItem>
        ) : (
          <>
            <MenuItem type="button" onClick={() => setCollapsed(!collapsed)}>
              <BsFillArrowLeftSquareFill />
            </MenuItem>
            <button
              className="tuner-bar-button"
              type="button"
              onClick={() => playNote(gNote)}
            >
              G
            </button>
            <button
              className="tuner-bar-button"
              type="button"
              onClick={() => playNote(cNote)}
            >
              C
            </button>
            <button
              className="tuner-bar-button"
              type="button"
              onClick={() => playNote(eNote)}
            >
              E
            </button>
            <button
              className="tuner-bar-button"
              type="button"
              onClick={() => playNote(aNote)}
            >
              A
            </button>
          </>
        )}
      </ProSidebar>
    </div>
  );
}
