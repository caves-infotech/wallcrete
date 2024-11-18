import React from 'react'
import MemberDetailsPage from './Member'

const page = async ({params}) => {
    const {id} = await params;

  return (
    <div>
        <MemberDetailsPage id={id} />
    </div>
  )
}

export default page