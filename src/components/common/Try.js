import React from 'react';
import uploadImageIcon from '../../assets/icons/uploadImage.svg';
import uploadGifIcon from '../../assets/icons/uploadGif.svg';
import uploadVideoIcon from '../../assets/icons/uploadVideo.svg';
import pollIcon from '../../assets/icons/poll.svg';

<div className="w-full bg-white pr-4 flex justify-between border border-solid border-cardBorder">
  <Item name="text" label="" className="c-input-border-none w-full mb-0">
    <TextArea
      className="w-full py-2"
      placeholder={placeholder}
      name="text"
      onChange={() => {}}
      rows={1}
    />
  </Item>
  <div
    className={`h-full justify-self-end self-${uploadBtsPosition} flex items-center space-x-3 
                     absolute bottom-32 xs:bottom-0 ml-3 xs:pb-0 xs:relative ${uploadBtnClassName}`}
  >
    <div className="cursor-pointer" onClick={() => setAddPoll(true)}>
      <img src={pollIcon} className="w-5" alt="" />
    </div>
    <Item name="uploadImage" className="cursor-pointer m-0">
      <img src={uploadImageIcon} className="w-6" alt="" />
    </Item>
    <Item name="uploadGif" className="cursor-pointer m-0">
      <img src={uploadGifIcon} className="w-5" alt="" />
    </Item>
    <Item name="uploadVideo" className="cursor-pointer m-0">
      <img src={uploadVideoIcon} className="w-6" alt="" />
    </Item>
  </div>
</div>;
