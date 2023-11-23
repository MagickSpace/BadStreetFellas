// Shadcn Button Import
import { buttonVariants } from '../ui/button'

// Shadcn Dialog Import
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

// Info imports
import { contacts } from '@/constants/index'

// Translation Imports
import { useTranslations } from '@/i18n/utils'

export function FormDialog({
  text,
  lang,
}: {
  text: string
  lang: 'uk' | 'en' | 'ru'
}) {
  const t = useTranslations(lang)

  return (
    <div className="mt-3 w-[fit-content]">
      <Dialog>
        <DialogTrigger asChild>
          <div
            className={`${buttonVariants()} cursor-pointer`}
            aria-label={text}
          >
            {text}
          </div>
        </DialogTrigger>
        <DialogContent className="w-auto pt-16 md:pt-10">
          <DialogHeader>
            <DialogTitle>{t('dialog-title')}</DialogTitle>
            <DialogDescription>{t('dialog-description')}</DialogDescription>
          </DialogHeader>
          <div className="mt-2 space-y-4">
            {contacts.map((item) => (
              <div key={item.label[lang]}>
                <h4>{item.label[lang]}</h4>
                <a
                  title={item.label[lang]}
                  href={item.link}
                  target="_blank"
                  className="text-secondary transition-colors duration-200 hover:text-secondary/70"
                >
                  {item.linkLabel}
                </a>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
