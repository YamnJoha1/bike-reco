'use client'


import { CustomButtonProps } from "@/types"
import Image from "next/image"


const CustomButton = ({ title, containerStyles, handelClick, btnType, textStyle, rightIcon, isDisabled } : CustomButtonProps) => {
  return (
    <button 
      disabled = {isDisabled}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handelClick}
    >
      <span className={`flex-1 ${textStyle}`}>
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-8 h-8">
          <Image 
            src={rightIcon}
            alt="rightIcon"
            className="object-contain"
            fill
          />
        </div>
      )}
    </button>
  )
}

export default CustomButton