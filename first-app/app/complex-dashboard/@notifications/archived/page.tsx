import Card from '@/app/components/card'
import React from 'react'

import Link from 'next/link'

function ArchivedNotifications() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href='/complex-dashboard'>Default</Link>
    </Card>
  )
}

export default ArchivedNotifications