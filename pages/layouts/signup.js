import {useRouter} from 'next/router'
export default props=>{
    const router=useRouter()
    return(<button onClick={()=>{ router.push('/signin')}}>Let's Signin</button>)
}