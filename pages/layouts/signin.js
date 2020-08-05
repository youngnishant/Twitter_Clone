import {useRouter} from 'next/router'
export default props=>{
    const router=useRouter()
    return(<button onClick={()=>{ router.push('/signup', undefined,{ shallow: true })}}>let's Signup</button>)
}