"use client"
import classNames from "classnames"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { IconType } from "react-icons"
import {
  FaHome,
  FaGripLines,
  FaRegListAlt,
  FaPlus,
  FaCloudUploadAlt,
  FaSignOutAlt,
} from "react-icons/fa"

export type SectionType = {
  label: string
  icon: IconType
  route: string
}

const links: SectionType[] = [
  {
    label: "Home",
    icon: FaHome,
    route: "/",
  },
  {
    label: "Nuevo",
    icon: FaPlus,
    route: "/nuevo",
  },
  {
    label: "Carga Masiva",
    icon: FaCloudUploadAlt,
    route: "/cargaMasiva",
  },
]

export default function Navigation() {
  const [toggleCollapse, setToggleCollapse] = useState<boolean>(false)
  const [isCollapsible, setIsCollapsible] = useState<boolean>(false)

  const activeMenu = usePathname()

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  )

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-90": toggleCollapse,
    }
  )

  const spanClass = classNames("mt-2 text-lg font-medium text-text", {
    hidden: toggleCollapse,
  })

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu === menu.route,
      }
    )
  }

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible)
  }

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse)
  }

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <FaRegListAlt />
            <span className={spanClass}>Tigo</span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <FaGripLines />
            </button>
          )}
        </div>
        <div className="flex flex-col items-start mt-24">
          {links.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu)
            return (
              <div className={classes} key={menu.route}>
                <Link
                  href={menu.route}
                  className="flex py-4 px-3 items-center w-full h-full"
                >
                  <div style={{ width: "2.5rem" }}>
                    <Icon />
                  </div>
                  {!toggleCollapse && (
                    <span
                      className={classNames(
                        "text-md font-medium text-text-light"
                      )}
                    >
                      {menu.label}
                    </span>
                  )}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <FaSignOutAlt />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")}>
            Logout
          </span>
        )}
      </div>
    </div>
  )
}
