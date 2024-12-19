const axios=require('axios')
let cache=null
let ts=0
module.exports=async()=>{
if(Date.now()-ts<60000&&cache)return cache
const r=await axios.get('https://api.github.com/search/repositories?q=stars:>50000&sort=stars&order=desc&per_page=10')
cache=r.data.items.map(i=>({name:i.full_name,stars:i.stargazers_count,url:i.html_url}))
ts=Date.now()
return cache
}
