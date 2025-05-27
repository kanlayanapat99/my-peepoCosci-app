export default function AppWelcome() {
const title = 'Welcome to Peepo Cosci';
const currentYear = <p>2025</p>;
const istrue = true;

    return (
        <>
            <p>{title}</p>
            {currentYear}
            {
                istrue && <p>Date: 10/10/1998</p>
            }
            {istrue ? <p>Hello Next.js</p> : <p>Hello JavaScript</p>
            }
        </>

    );
}