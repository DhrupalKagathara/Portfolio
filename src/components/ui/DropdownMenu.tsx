// src/components/ui/DropdownMenu.tsx
'use client'

import React, { useState } from 'react'

type DropdownItem = {
  label: string
  onClick: () => void
}

type DropdownProps = {
  label: string
  items: DropdownItem[]
}

export default function DropdownMenu({ label, items }: DropdownProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700"
      >
        {label}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border rounded shadow-lg z-50">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                item.onClick()
                setOpen(false)
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
