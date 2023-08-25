export const Square = ({ children, isSelected, index, updateBoard }) => {
    return (
        <div onClick={() => updateBoard(index)} className={`square ${isSelected ? "is-selected" : ""} `}>
            {children}
        </div>
    );
};
