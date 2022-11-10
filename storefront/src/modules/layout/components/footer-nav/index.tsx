import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div>
          <Link href="/">
            <a className="text-xl-semi uppercase">Betty&apos;s</a>
          </Link>
        </div>
        <div className="flex flex-col text-small-regular w-1/6">

          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Visit our store</span>

            <div className="flex text-black">
              Flat No.502, SR Sagar Soudha, Opposite MK ONE, Near MK GOLD COAST, YENDADA, Vishakapatanam, Andhra Pradesh, 530045
            </div>
            <div className="flex text-black">
              shopbittys@gmail.com
            </div>
            <div className="flex text-black">
              8074422740
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">
          © Copyright 2022 Betty&apos;s
        </span>
        <div className="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect />
        </div>
      </div>
    </div>
  )
}

export default FooterNav
