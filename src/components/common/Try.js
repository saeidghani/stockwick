import usFlag from "../../assets/icons/usFlag.svg";
import upArrowColorfulIcon from "../../assets/icons/upArrowColorful.svg";
import downArrowColorfulIcon from "../../assets/icons/downArrowColorful.svg";
import Button from "../UI/Button";
import React from "react";

<div className="flex flex-col justify-between items-center h-full">
  <img className="w-8 mb-2" src={usFlag} alt="" />
  <div className="text-sm">nasdaq</div>
</div>
<div className="flex flex-col justify-between items-center h-full">
  <div className="flex items-center space-x-2">
    <div className="text-22px text-secondary">7.13</div>
    <img src={upArrowColorfulIcon} className="w-5" alt="" />
    <div className="bg-darkGreen h-5 px-1 pb-0.5 rounded">1.84%</div>
  </div>
  <div className="text-sm">price</div>
</div>
<div className="flex flex-col justify-between items-center h-full">
  <div className="flex">
    <div className="mr-2 text-xl text-accent mb-2">400 M</div>
    <img src={downArrowColorfulIcon} className="w-5" alt="" />
  </div>
  <div className="flex justify-between items-center">
    <div className="bg-white boldPrimaryText h-5 px-1 pb-0.5 rounded-md mr-2 uppercase">
      mega
    </div>
    <div className="text-sm">market cap</div>
  </div>
</div>
<div className="flex flex-col justify-between items-center h-full capitalize">
  <div className="text-base mb-1">may 04</div>
  <div className="text-sm">upcoming earnings</div>
</div>
<div className="flex flex-col justify-between items-center h-full">
  <div className="text-lg text-secondary">6.0%</div>
  <div className="text-sm">div yield </div>
</div>
<div className="flex flex-col justify-between items-center h-full">
  <div className="text-lg text-secondary">4.1</div>
  <div className="text-sm">eps</div>
</div>
<div className="text-sm self-center">21.4k followers</div>
<Button
    text="+follow stock"
    wrapperClassName="c-secondary-btn c-secondary-btn--sm"
    textClassName="text-sm"
/>