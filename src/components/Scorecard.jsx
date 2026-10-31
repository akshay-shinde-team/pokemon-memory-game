export function Scorecard({score, bestScore}){
    return(
    <div className="scorecard">
       <div className="score-item">
        <span>Current Score</span>
        <h3>{score}</h3>
           </div>

           <div className="score-divider"></div>
        
        <div className="score-item">
            <span>Best Score</span>
            <h3>{bestScore}</h3>
            </div>
        
      </div>
    );

}