const axios=require('axios')
test('trending endpoint',async()=>{
const r=await axios.get('http://localhost:3001/trending')
expect(Array.isArray(r.data)).toBe(true)
expect(r.data.length).toBeGreaterThan(0)
})
