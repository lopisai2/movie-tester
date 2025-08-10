import { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { CustomBasicDrawerI } from "./interface";
import useCustomBasicDrawer from "./hooks/useCustomBasicDrawer";
import { NODE_ENV } from "@/_config";

// Importar CSS de manera segura
if (NODE_ENV === "development") {
  import("./styles.css");
}

const CustomBasicDrawer = ({
  title,
  width = 580,
  open,
  onClose,
  className,
  customBodyStyle,
  customHeaderStyle,
  extra,
  closable = true,
  placement = "right",
  children,
  closeIcon = null,
  footer = null,
  bodyRef,
}: CustomBasicDrawerI) => {
  const { isVisible, animate, drawerClass, setIsVisible } =
    useCustomBasicDrawer({
      className,
      placement,
      open,
    });

  const defaultRef = useRef<HTMLDivElement>(null);
  const drawerRef = bodyRef || defaultRef;
  const [isClient, setIsClient] = useState(false);

  // Asegurar que el componente solo se renderiza después de la hidratación
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    if (isVisible && drawerRef.current) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isVisible, isClient, drawerRef]);

  if (!isClient) return null; // Evitar renderizado en el servidor

  return ReactDOM.createPortal(
    isVisible && (
      <>
        {/* Overlay con animación controlada por `animate` */}
        <div
          className={`drawer-overlay ${
            animate ? "overlay-open" : "overlay-close"
          }`}
          onClick={onClose}
          onTransitionEnd={() => !animate && setIsVisible(false)}
        />

        {/* Drawer con animación controlada por `animate` */}
        <aside
          className={`${drawerClass} ${
            animate
              ? `drawer-open drawer-${placement}`
              : `drawer-close drawer-${placement}`
          }`}
          style={{ width }}
        >
          <section ref={drawerRef} id="custom-basic-drawer" className="drawer-content">
            <header className="drawer-header" style={customHeaderStyle}>
              <div className="drawer-title">{title}</div>
              {extra && <div className="drawer-extra">{extra}</div>}
              {closable && (
                <button
                  style={{
                    color: "#FFF",
                    textShadow: "0 0 6px #000",
                  }}
                  aria-label="Close"
                  className="drawer-close"
                  onClick={onClose}
                >
                  {closeIcon || "✖"}
                </button>
              )}
            </header>
            <main className="drawer-body" style={customBodyStyle}>
              {children}
            </main>
            {footer && <footer className="drawer-footer">{footer}</footer>}
          </section>
        </aside>
      </>
    ),
    document.body
  );
};

export default CustomBasicDrawer;
