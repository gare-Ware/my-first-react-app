# Speed Typing Game

A stylish and fun speed typing game with user input for time limit.

**Link to project:** https://gk-speedtyping.netlify.app/

<img width="100%" alt="speed-typing" src="https://user-images.githubusercontent.com/92345400/162068537-968a3302-448a-49a6-bdee-a963bff2c1cc.png">

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, React

Foundational game code is written as a reusable custom hook. useEffect hook handles setTimout function which changes timeRemaining state every second. useRef is used to focus on the typing input field the moment the game starts so user can start typing immediately. User input for time length displays when game is not in progress. 
