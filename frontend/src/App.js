import {useEffect,useState} from 'react'
function App(){
const[repos,setRepos]=useState([])
useEffect(()=>{
fetch('/trending').then(r=>r.json()).then(d=>setRepos(d))
},[])
return(
<div style={{fontFamily:'sans-serif',padding:'20px'}}>
<h1>Dreadspire Trending Repositories</h1>
<ul>
{repos.map(r=><li key={r.name}><a href={r.url} target="_blank" rel="noreferrer">{r.name}</a> ⭐{r.stars}</li>)}
</ul>
</div>
)}
export default App
