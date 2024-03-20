import AnimatedDiv from "../components/AnimatedDiv";

function Card(){
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Knights of Javascript
                </h2>
                <p>Simple Project done at TKH</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-primary badge-outline">HTML</div> 
                    <div className="badge badge-outline">CSS</div>
                    <div className="badge badge-outline">Javascript</div>
                </div>
            </div>
        </div>
    )
}

export default function Home(){
    const arr = [1, 2, 3, 4];
    return (
        <>
            <AnimatedDiv />
            <div className="grid md:grid-cols-2 md:gap-5 sm:grid-cols-1 sm:gap-2">
                {arr.map(a => (
                    <Card />
                ))}
            </div>
        </>
    )
}