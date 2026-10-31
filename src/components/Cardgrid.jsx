import { Card } from "./Card";


export function Cardgrid({cards, onCardClick}){
    return(
    <div className="card-grid">
        {cards.map((pokemon) => (
            <Card
            key = {pokemon.id}
            pokemon={pokemon}
            onClick={() => onCardClick(pokemon.id)}
            />
        ))}
    </div>
    );
}