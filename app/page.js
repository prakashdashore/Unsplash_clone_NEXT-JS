
import Banner from '@/components/Banner';
import Gellery from '@/components/Gellery';
import Nev from '@/components/nevbaar/Nev';
import { Central } from '@/context/ContextApi';
import React, { useContext } from 'react'

const page = () => {
  return (
    <div>
      <Nev/>
      <Banner/>
      <Gellery/>
    </div>
  )
}

export default page
