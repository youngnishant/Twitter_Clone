import '../styles/index.css'
import Signin from './layouts/signin'
import Signup from './layouts/signup'
import {useRouter} from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import Router from 'next/dist/next-server/lib/router/router'
function MyApp({ Component, pageProps }) {

  return(
<>
 <Component {...pageProps} /> 

</>

  ) 
}

export default MyApp
