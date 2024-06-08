import { Button } from '@repo/ui/components/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card'

import Link from 'next/link'

export default function Home() {
  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <Button variant={'destructive'}>Web page</Button>
      <Card>
        <CardHeader>
          <CardTitle>DSA & DEV</CardTitle>
          <CardDescription>
            A collection of data structures, algorithms, and development
            resources.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link target='_blank' href={'https://dsandev.vercel.app/'}>
            <Button variant={'outline'}>Explore</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
