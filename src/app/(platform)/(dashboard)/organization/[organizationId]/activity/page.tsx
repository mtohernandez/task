import React, { Suspense } from 'react'
import { Info } from '../_components/info'
import { Separator } from '@/components/ui/separator'
import { ActivityList } from './_components/activity-list'

const Page = () => {
  return (
    <div className="w-full">
      <Info />
      <Separator className="my-2" />
      <Suspense fallback={<ActivityList.Skeleton />}>
        <ActivityList />
      </Suspense>
    </div>
  )
}

export default Page