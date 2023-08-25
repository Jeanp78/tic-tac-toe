import { Square } from "./Square";

export const ModalFinish = ({ winner, resetGame }) => {
    if (winner === null) return null;

    const winnerText = {
        winner: winner ? winner : "🚫",
        title: winner ? "Ganó" : "Empate",
    };

    return (
        <section className="winner">
            <div className="text">
                <h2>{winnerText.title}</h2>
                <header className="win">
                    {" "}
                    <Square>{winnerText.winner}</Square>{" "}
                </header>
                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    );
};
