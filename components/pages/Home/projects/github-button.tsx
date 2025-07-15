import { GithubIcon } from "lucide-react"
import Link from "next/link"

const GithubButton = ({ href, title }: { href: string, title: string }) => {
  return href ? (
    <Link aria-readonly target="_blank" href={href} className="relative flex items-center gap-2 text-slate-400 text-sm">
      <GithubIcon size={14} />
      <span>{title}</span>
    </Link>

  ) : <button disabled className="relative flex items-center gap-2 text-slate-400 text-sm">
    <GithubIcon size={14} />
    <span>{title}</span>
  </button>
}

export default GithubButton
