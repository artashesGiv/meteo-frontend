import { redirect } from 'next/navigation'

import './page.scss'

export default function Index() {
  redirect('/data-collection')
}
