import Link from 'next/link'
import { useTranslation } from '../../i18n'

export default async function Page({ params: { lng } }:{params:{lng:string}}) {
  const { t } = await useTranslation(lng, 'second-page')
  return (
    <>
    {/* <h1>Hello</h1> */}
      <h1>{t('title')}</h1>
      <Link href={`/${lng}`}>
        {t('back-to-home')}
      </Link>
    </>
  )
}