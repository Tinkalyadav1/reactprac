export default function Avatar({height,width,person}){
const avatar = "https://mastdp.com/img/cute-dp-for-girls/cute-dp-for-girls.webp"
const description  = "Profile image ";



return(
    <>
    <img className="avatar"
    src={avatar}
    alt={description}
    height={height}
    width={width}
    />
    <h1>{person.name}</h1>
    </>
);
}