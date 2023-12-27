// components/WindowsXPWindow.js
const WindowsXPWindow = ({ title, children, style, onClose }) => {
    return (
      <div className="window" style={style}>
        <div className="title-bar" style={{height:"4vh"}}>
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close" onClick={onClose}></button>
          </div>
        </div>
        <div className="window-body">
          {children}
        </div>
      </div>
    );
};

export default WindowsXPWindow;
