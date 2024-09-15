import ReactLoading from 'react-loading'

interface Props {
    text: string;
}

export default function LoadingSuspense({text}:Props) {

    return (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <ReactLoading
                type={'bubbles'}
                color={' #7e80a7 '}
                delay={100}
                height={'30%'}
                width={'30%'}
            />
            <p className="mt-24">{text}</p>
        </div>
    );
}