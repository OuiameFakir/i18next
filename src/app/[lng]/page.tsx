
import Link from 'next/link'
import { useTranslation } from '../i18n'
import Switcher from './components/Switcher'
export default async function Page({ params: { lng } }:{params :{lng:string}}) {
  const { t } = await useTranslation(lng, "mobile");
  return (
    <>
    <Switcher path=''/>
      <h1>{t('TRY')}</h1>
      <Link href={`/${lng}/second-page`}>
        {t('to-second-page')}
      </Link>
    </>
  )
}