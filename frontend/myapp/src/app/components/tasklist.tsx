type list=
{
    t:string;
};

export default function tasklist({t}:list)
{
return(

<p className="text-green">{t}</p>
);
}