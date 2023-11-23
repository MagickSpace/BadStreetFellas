import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '../ui/button'

export function PopoverLang({
  lang,
}: {
  lang: 'uk' | 'en' | 'ru'
  url: URL
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-labelledby="Language toggle"
        >
          {lang === 'uk' ? 'uk' : ''}
          {lang === 'en' ? 'en' : ''}
          {lang === 'ru' ? 'ru' : ''}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit">
        <ul>
          <li>
            <a title="Вебсайт на Українській" href="/uk/">
              Українська
            </a>
          </li>
          <hr className="my-2 h-[2px] w-full bg-white" />
          <li>
            <a title="Web Site in English" href="/en/">
              English
            </a>
          </li>
          <hr className="my-2 h-[2px] w-full bg-white" />
          <li>
            <a title="Вебсайт на Русском" href="/ru/">
              Русский
            </a>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  )
}
