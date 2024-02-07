import Link from 'next/link'

const Switcher = ({path}:{path?:string}) => {
  return (
    <>
      <button>
        <Link href={`/fr/${path}`}>
            {"fr"}
        </Link>
      </button>
      <button>
        <Link href={`/en/${path}`}>
            {"en"}
        </Link>
      </button>
    </>
  )
}
export default Switcher