const ids = [1,2,3,4,5];
const listElements = ids.map((id)=>{

<li key={id.toString()}>
{id}
</li>

})