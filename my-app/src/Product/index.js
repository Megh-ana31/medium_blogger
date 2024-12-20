import "./style.css";
export default function Product({imgpath,name}){
    return(
        <div>
        <img src={imgpath}/>
        <p>{name}</p>
        </div>
    )
}