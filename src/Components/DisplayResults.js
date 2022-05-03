import TypewriterComponent from 'typewriter-effect';

const DisplayResults = ({userInput, displayedPokemon} ) => { 
    if (!userInput) {
        return(
           <TypewriterComponent
            options={{
            strings: ["Results..."],
            autoStart: true,
            loop: true,
            pauseFor: 10000
            
            }}
        />
        )
    } else if (userInput && userInput === displayedPokemon){
        return(
            <TypewriterComponent
            options={{
            strings: ["Correct!"],
            autoStart: true,
            loop: true,
            pauseFor:3000
            }}
        />
        )
    }else if (userInput && userInput !== displayedPokemon){
        return(
            <TypewriterComponent
            options={{
            strings: ["Try Again..."],
            autoStart: true,
            loop: true,
            pauseFor:3000
            }}
        />
        )
        
    }
}

export default DisplayResults;