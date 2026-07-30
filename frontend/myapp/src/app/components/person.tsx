type student =
{
    name:string;
    age :number;
};

export default function person({name,age}:student)
{
    return (
<>
<p>{name}</p>
<p>{age}</p>
</>
    );
}
