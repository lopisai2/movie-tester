"use client";
import { forwardRef, useRef } from "react";
import { CustomBasicButtonI } from "./interfaces/interface";
import { SpinLoaderIcon } from "@/_assets/common/loaders/SpinLoaderIcon";

// eslint-disable-next-line react/display-name
export const CustomBasicButton = forwardRef<
  HTMLButtonElement,
  CustomBasicButtonI
>(({ rightIcon, htmlType, loading, ...props }, ref) => {
  const internalButtonRef = useRef<HTMLButtonElement | null>(null);
  const handleRippleEffect = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!internalButtonRef.current) return;
    const buttonRect = internalButtonRef.current.getBoundingClientRect();
    const x = e.clientX - buttonRect.left;
    const y = e.clientY - buttonRect.top;
    const ripple = document.createElement("span");
    ripple.classList.add("ripple-effect");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    internalButtonRef.current?.appendChild(ripple);

    setTimeout(() => props.onClick?.(), 250);
    setTimeout(() => ripple.remove(), 400);
  };

  const setRefs = (node: HTMLButtonElement | null) => {
    internalButtonRef.current = node;
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };
  return (
    <button
      {...props}
      ref={setRefs}
      disabled={props.disabled || loading}
      form={props.form}
      onClick={(e) => {
        handleRippleEffect(e);
      }}
      className={`${props.className || "public-standard-btn"} ${
        props.shape ? props.shape : ""
      } ${props.type ? props.type : ""}`} // Puedes agregar clases basadas en el shape y type
      style={props.style}
      type={htmlType} // type será igual a "submit", "reset" o "button"
    >
      {loading ? (
        <SpinLoaderIcon />
      ) : (
        props.icon && (
          <span style={{ display: "flex", alignItems: "center" }}>
            {props.icon}
          </span>
        )
      )}{" "}
      {/* Renderizamos el ícono si está presente */}
      {props.ancleLink ? (
        <a target='_blank'>{props.children}</a>
      ) : (
        props.children
      )}
      {rightIcon && (
        <span style={{ display: "flex", alignItems: "center" }}>
          {rightIcon}
        </span>
      )}
    </button>
  );
});

export default CustomBasicButton;
