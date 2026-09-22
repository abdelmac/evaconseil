"use client";

import { useEffect, useRef } from "react";

type MobileNavigationProps = {
  label: string;
  navigationLabel: string;
  items: { href: string; label: string }[];
};

export function MobileNavigation({ label, navigationLabel, items }: MobileNavigationProps) {
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      const menu = menuRef.current;
      if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) {
        menu.open = false;
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, []);

  return (
    <details
      ref={menuRef}
      className="mobile-navigation"
      onKeyDown={(event) => {
        if (event.key === "Escape" && event.currentTarget.open) {
          event.currentTarget.open = false;
          event.currentTarget.querySelector("summary")?.focus();
        }
      }}
      onBlur={(event) => {
        if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) {
          event.currentTarget.open = false;
        }
      }}
    >
      <summary>
        <span>{label}</span>
        <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 8h16M4 16h16" />
        </svg>
      </summary>
      <nav aria-label={navigationLabel}>
        {items.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => {
              if (menuRef.current) menuRef.current.open = false;
              document.getElementById(item.href.slice(1))?.focus({ preventScroll: true });
            }}
          >
            <span>0{index + 1}</span>
            {item.label}
          </a>
        ))}
      </nav>
    </details>
  );
}
