import { TypeAnimation } from 'react-type-animation'

export function TypingTextAnimation() {
    return (
        <TypeAnimation
            sequence={[
                'console.log("Hello World!)',
                1000, // Waits 1s
                'Eu sou o Lucas Batista!',
            ]}
            wrapper="div"
            cursor={true}
            style={{ fontSize: '2em' }}
        />
    )
}